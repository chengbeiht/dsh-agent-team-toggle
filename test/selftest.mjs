import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createContext, runInContext } from "node:vm";

const source = readFileSync(new URL("../lib/client.js", import.meta.url), "utf8");
const BUNDLE = "@deepseek-ai/dsh-experimental-agent-team-profile";
const tick = () => new Promise((resolve) => setImmediate(resolve));

function load() {
	let factory;
	const sandbox = {
		window: { __ModuleLoader__: { load: ({ factory: f }) => { factory = f; } } },
		document: {
			querySelector: () => null,
			createElement: () => ({ dataset: {}, textContent: "" }),
			head: { appendChild: () => undefined }
		},
		Symbol,
		console,
		setTimeout: () => 0,
		clearTimeout: () => undefined
	};
	createContext(sandbox);
	runInContext(source, sandbox, { filename: "client.js" });
	const module = factory((name) => {
		if (name === "react") {
			return {
				createElement: (type, props, ...children) => ({ type, props, children }),
				useSyncExternalStore: (_subscribe, getSnapshot) => getSnapshot()
			};
		}
		if (name === "@deepseek-ai/dsh-client-ui-primitives") {
			return { IconUsersOutlineRegular: (props) => ({ type: "icon", props }) };
		}
		throw new Error("unexpected require: " + name);
	});
	let slot = null;
	const ctx = {
		effect: (fn) => fn(),
		locale: {
			register: () => () => undefined,
			bind: () => (key) => key
		},
		slots: {
			inject: (_name, fn) => fn(),
			register: (options, Component) => {
				slot = { options, Component };
				return () => undefined;
			}
		},
		remote: {
			pluginManager: {
				listBundles: async () => ({
					ok: true,
					value: [{
						name: BUNDLE,
						enabled: false,
						availability: "installation",
						installed: false
					}]
				}),
				setBundleEnabled: async (_name, enabled) => ({
					ok: true,
					value: { changed: true, application: "applied", enabled }
				})
			},
			$on: () => () => undefined
		}
	};
	module.apply(ctx);
	return { module, slot };
}

const { module, slot } = load();
assert.equal(JSON.stringify(module.inject), JSON.stringify(["slots", "locale", "remote", "remote.pluginManager"]));
assert.equal(slot.options.name, "sidebar.footer.action");
assert.equal(slot.options.id, "agent-team-toggle");
assert.equal(slot.options.order, -10);
await tick();
const injected = slot.options.inject();
assert.equal(injected.store.getSnapshot().phase, "ready");
assert.equal(injected.store.getSnapshot().enabled, false);

await injected.toggle();
assert.equal(injected.store.getSnapshot().enabled, true);
assert.equal(injected.store.getSnapshot().notice.tone, "ok");

const wide = slot.Component({ wide: true, ...injected });
assert.equal(wide.props.className, "dsh-att dsh-att--wide");
assert.equal(wide.children[0].props["aria-pressed"], true);
assert.equal(wide.children[1].props.className, "dsh-att__notice");

const rail = slot.Component({ wide: false, ...injected });
assert.equal(rail.props.className, "dsh-att dsh-att--rail");
assert.equal(rail.children[0].children[1], null);
assert.equal(rail.children[0].children[2], null);

console.log("dsh-agent-team-toggle selftest: ok");
