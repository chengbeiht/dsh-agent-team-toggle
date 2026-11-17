window.__ModuleLoader__.load({
	id: "dsh-agent-team-toggle",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const react = require("react");
		const primitives = require("@deepseek-ai/dsh-client-ui-primitives");

		const NS = "agentTeamToggle";
		const BUNDLE = "@deepseek-ai/dsh-experimental-agent-team-profile";

		const zh = {
			label: "智能体团队",
			"title.on": "智能体团队：已开启，点击关闭",
			"title.off": "智能体团队：已关闭，点击开启",
			"title.loading": "正在读取智能体团队状态…",
			"title.unavailable": "当前 DSH 未提供智能体团队 bundle，点击重试",
			"title.error": "读取智能体团队状态失败，点击重试",
			"title.busy.on": "正在开启智能体团队…",
			"title.busy.off": "正在关闭智能体团队…",
			"notice.on": "已开启智能体团队",
			"notice.off": "已关闭智能体团队",
			"notice.restart": "已切换，需重启 DSH 生效",
			"notice.unavailable": "当前 DSH 未提供智能体团队",
			"notice.failed": "切换失败：",
			"notice.overridden": "配置被更高优先级覆盖",
			"notice.cancelled": "操作已取消",
			"reason.no-hmr": "宿主未启用热更新",
			"reason.host-module": "宿主插件需重启",
			"reason.package-moved": "包位置变化",
			"reason.module-comparison": "模块版本变化",
			"reason.unmanaged-plugin": "非托管插件"
		};
		const en = {
			label: "Agent Teams",
			"title.on": "Agent Teams: on. Click to turn off",
			"title.off": "Agent Teams: off. Click to turn on",
			"title.loading": "Loading Agent Teams state…",
			"title.unavailable": "This DSH does not provide the Agent Teams bundle. Click to retry",
			"title.error": "Could not read Agent Teams state. Click to retry",
			"title.busy.on": "Turning Agent Teams on…",
			"title.busy.off": "Turning Agent Teams off…",
			"notice.on": "Agent Teams enabled",
			"notice.off": "Agent Teams disabled",
			"notice.restart": "Changed; restart DSH to apply",
			"notice.unavailable": "Agent Teams is not available in this DSH",
			"notice.failed": "Toggle failed: ",
			"notice.overridden": "Overridden by a higher-priority config",
			"notice.cancelled": "Operation cancelled",
			"reason.no-hmr": "HMR is off",
			"reason.host-module": "a host module changed",
			"reason.package-moved": "the package moved",
			"reason.module-comparison": "a module version changed",
			"reason.unmanaged-plugin": "an unmanaged plugin is involved"
		};

		const css = [
			".dsh-att{box-sizing:border-box;display:flex;flex-direction:column;width:100%;min-width:0;margin:0 0 6px}",
			".dsh-att--rail{width:36px;height:36px;margin:0;align-items:center;justify-content:center}",
			".dsh-att__button{box-sizing:border-box;display:flex;align-items:center;gap:8px;width:100%;min-width:0;height:30px;margin:0;padding:0 8px;border:0;border-radius:var(--dsw-radius-sm);background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:1;text-align:left;cursor:pointer}",
			".dsh-att__button:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}",
			".dsh-att__button:focus-visible{outline:var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}",
			".dsh-att__button:disabled{cursor:default;opacity:.65}",
			".dsh-att__button.is-on .dsh-att__icon{color:var(--dsw-alias-state-success-primary,#2da44e)}",
			".dsh-att__icon{position:relative;display:inline-flex;flex:none;align-items:center;justify-content:center}",
			".dsh-att__label{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
			".dsh-att__switch{position:relative;flex:none;width:26px;height:14px;border-radius:999px;background:var(--dsw-alias-border-l2);transition:background .15s ease}",
			".dsh-att__switch.is-on{background:var(--dsw-alias-state-success-primary,#2da44e)}",
			".dsh-att__knob{position:absolute;top:2px;left:2px;width:10px;height:10px;border-radius:50%;background:#fff;transition:transform .15s ease}",
			".dsh-att__switch.is-on .dsh-att__knob{transform:translateX(12px)}",
			".dsh-att__spinner{position:absolute;top:2px;left:2px;box-sizing:border-box;width:10px;height:10px;border:1.5px solid rgba(255,255,255,.45);border-top-color:#fff;border-radius:50%;animation:dsh-att-spin .8s linear infinite}",
			"@keyframes dsh-att-spin{to{transform:rotate(360deg)}}",
			".dsh-att__notice{margin:2px 2px 0;font-size:10px;line-height:14px;color:var(--dsw-alias-label-tertiary)}",
			".dsh-att__notice.is-warn{color:var(--dsw-alias-state-warn-primary,#b45309)}",
			".dsh-att__notice.is-error{color:var(--dsw-alias-state-error-primary,#c62828)}",
			".dsh-att--rail .dsh-att__button{width:36px;height:36px;justify-content:center;padding:0}",
			".dsh-att__dot{position:absolute;right:-2px;top:-2px;width:7px;height:7px;border-radius:50%;background:var(--dsw-alias-label-tertiary);box-shadow:0 0 0 2px var(--dsw-specific-sidebar-fill,var(--dsw-alias-bg-layer-1))}",
			".dsh-att__dot.is-on{background:var(--dsw-alias-state-success-primary,#2da44e)}",
			".dsh-att__dot.is-warn{background:var(--dsw-alias-state-warn-primary,#b45309)}",
			".dsh-att__dot.is-error{background:var(--dsw-alias-state-error-primary,#c62828)}",
			"[data-slot=\"sidebar.footer.action\"]:has(> .dsh-att--rail){display:flex;flex-direction:column;align-items:center;gap:6px}"
		].join("");
		if (typeof document !== "undefined" && document.querySelector('style[data-plugin="dsh-agent-team-toggle"]') === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-agent-team-toggle";
			tag.textContent = css;
			document.head.appendChild(tag);
		}

		function createStore() {
			let state = {
				phase: "loading",
				enabled: false,
				available: true,
				busy: false,
				notice: null,
				pendingRestart: false,
				restartReason: null
			};
			const listeners = new Set();
			return {
				getSnapshot() {
					return state;
				},
				subscribe(listener) {
					listeners.add(listener);
					return () => {
						listeners.delete(listener);
					};
				},
				set(patch) {
					state = { ...state, ...patch };
					for (const listener of Array.from(listeners)) listener();
				}
			};
		}

		function createController(ctx, store, t) {
			let disposed = false;
			let generation = 0;
			let noticeTimer = 0;
			let retryTimer = 0;
			let retries = 0;
			let unsubscribe = null;

			const clearNotice = () => {
				if (noticeTimer !== 0) {
					clearTimeout(noticeTimer);
					noticeTimer = 0;
				}
			};
			const setNotice = (notice, ttl) => {
				clearNotice();
				store.set({ notice });
				if (ttl > 0) {
					noticeTimer = setTimeout(() => {
						if (!disposed) store.set({ notice: null });
					}, ttl);
				}
			};
			const reasonText = (reason) => {
				const mapped = t("reason." + reason);
				return mapped === "reason." + reason ? "" : mapped;
			};
			const refresh = async () => {
				if (disposed) return;
				const generationNow = ++generation;
				try {
					const result = await ctx.remote.pluginManager.listBundles();
					if (disposed || generationNow !== generation) return;
					if (!result || result.ok !== true) {
						store.set({ phase: "error", busy: false });
						if (retries < 1) {
							retries += 1;
							retryTimer = setTimeout(() => {
								if (!disposed) void refresh();
							}, 1500);
						}
						return;
					}
					const bundle = result.value.find((entry) => entry.name === BUNDLE);
					if (!bundle) {
						store.set({ phase: "unavailable", available: false, busy: false });
						return;
					}
					const unavailable = bundle.availability === "missing" || (bundle.error && (bundle.error.code === "unknown-plugin" || bundle.error.code === "unsupported-platform"));
					const current = store.getSnapshot();
					const enabled = current.pendingRestart ? current.enabled : bundle.enabled === true;
					store.set({
						phase: unavailable ? "unavailable" : "ready",
						available: !unavailable,
						enabled,
						busy: false
					});
					retries = 0;
					if (unavailable) {
						setNotice({ tone: "error", text: t("notice.unavailable") }, 0);
					} else if (current.phase === "unavailable" && current.notice) {
						store.set({ notice: null });
					}
				} catch (error) {
					if (disposed || generationNow !== generation) return;
					store.set({ phase: "error", busy: false });
				}
			};
			const toggle = async () => {
				const current = store.getSnapshot();
				if (current.busy) return;
				if (current.phase === "loading") return;
				if (current.phase !== "ready" || !current.available) {
					void refresh();
					return;
				}
				const next = !current.enabled;
				store.set({ busy: true, notice: null, pendingRestart: false, restartReason: null });
				clearNotice();
				try {
					const result = await ctx.remote.pluginManager.setBundleEnabled(BUNDLE, next);
					if (disposed) return;
					if (!result || result.ok !== true) {
						store.set({ busy: false });
						const code = result && result.error && result.error.code ? result.error.code : "operation-error";
						setNotice({ tone: "error", text: t("notice.failed") + code }, 5000);
						void refresh();
						return;
					}
					const value = result.value || {};
					const target = value.enabled === undefined ? next : value.enabled;
					const application = value.application;
					if (application === "restart-required") {
						store.set({ busy: false, enabled: target, pendingRestart: true, restartReason: value.restartReason || null });
						const reason = value.restartReason ? reasonText(value.restartReason) : "";
						setNotice({ tone: "warn", text: t("notice.restart") + (reason ? " (" + reason + ")" : "") }, 0);
						return;
					}
					if (application === "failed" || application === "cancelled" || application === "overridden") {
						store.set({ busy: false });
						if (application === "overridden") {
							setNotice({ tone: "error", text: t("notice.overridden") }, 5000);
						} else if (application === "cancelled") {
							setNotice({ tone: "error", text: t("notice.cancelled") }, 5000);
						} else {
							const code = value.error && value.error.code ? value.error.code : "operation-error";
							setNotice({ tone: "error", text: t("notice.failed") + code }, 5000);
						}
						void refresh();
						return;
					}
					store.set({ busy: false, enabled: target, pendingRestart: false, restartReason: null });
					setNotice({ tone: "ok", text: next ? t("notice.on") : t("notice.off") }, 3000);
					void refresh();
				} catch (error) {
					if (disposed) return;
					store.set({ busy: false });
					const detail = error && (error.code || error.message) ? (error.code || error.message) : "operation-error";
					setNotice({ tone: "error", text: t("notice.failed") + detail }, 5000);
				}
			};

			void refresh();
			try {
				const off = ctx.remote.$on("plugin-manager/changed", () => {
					retries = 0;
					void refresh();
				});
				if (typeof off === "function") unsubscribe = off;
			} catch (error) {
				// Event access can be unavailable on non-owner peers; the button still refreshes on click.
			}

			return {
				toggle,
				refresh,
				dispose() {
					disposed = true;
					clearNotice();
					if (retryTimer !== 0) clearTimeout(retryTimer);
					if (unsubscribe !== null) {
						try {
							unsubscribe();
						} catch (error) {
							// ignore a peer that already dropped its event source
						}
					}
				}
			};
		}

		function titleFor(snapshot, t) {
			if (snapshot.phase === "loading") return t("title.loading");
			if (snapshot.phase === "unavailable") return t("title.unavailable");
			if (snapshot.phase === "error") return t("title.error");
			if (snapshot.busy) return snapshot.enabled ? t("title.busy.off") : t("title.busy.on");
			return snapshot.enabled ? t("title.on") : t("title.off");
		}

		function dotClassFor(snapshot) {
			if (snapshot.phase === "error") return " is-error";
			if (snapshot.phase === "unavailable") return " is-warn";
			if (snapshot.busy) return " is-warn";
			if (snapshot.phase === "ready" && snapshot.enabled) return " is-on";
			return "";
		}

		function ToggleButton(props) {
			const snapshot = react.useSyncExternalStore(props.store.subscribe, props.store.getSnapshot);
			const wide = props.wide !== false;
			const t = props.t;
			const title = titleFor(snapshot, t);
			const spinner = snapshot.busy || snapshot.phase === "loading";
			const label = t("label");
			const notice = snapshot.notice;
			const noticeClass = notice ? (notice.tone === "error" ? " is-error" : notice.tone === "warn" ? " is-warn" : "") : "";
			return react.createElement("div", {
				className: "dsh-att" + (wide ? " dsh-att--wide" : " dsh-att--rail")
			}, react.createElement("button", {
				type: "button",
				className: "dsh-att__button" + (snapshot.enabled ? " is-on" : ""),
				title,
				"aria-label": title,
				"aria-pressed": snapshot.enabled,
				disabled: snapshot.busy || snapshot.phase === "loading",
				onClick: props.toggle
			}, react.createElement("span", {
				className: "dsh-att__icon",
				"aria-hidden": "true"
			}, react.createElement(primitives.IconUsersOutlineRegular, { size: 16 }), wide ? null : react.createElement("span", {
				className: "dsh-att__dot" + dotClassFor(snapshot)
			})), wide ? react.createElement("span", {
				className: "dsh-att__label"
			}, label) : null, wide ? react.createElement("span", {
				className: "dsh-att__switch" + (snapshot.enabled ? " is-on" : "")
			}, spinner ? react.createElement("span", { className: "dsh-att__spinner" }) : react.createElement("span", { className: "dsh-att__knob" })) : null), wide && notice ? react.createElement("div", {
				className: "dsh-att__notice" + noticeClass,
				role: "status"
			}, notice.text) : null);
		}

		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en,
				ja: en,
				es: en,
				fr: en,
				de: en,
				ru: en,
				pt: en
			}), "agent-team-toggle: dictionaries");
			const t = ctx.locale.bind(NS);
			const store = createStore();
			const controller = createController(ctx, store, t);
			ctx.effect(() => () => controller.dispose(), "agent-team-toggle: controller");
			ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
				name: "sidebar.footer.action",
				id: "agent-team-toggle",
				order: -10,
				locale: NS,
				inject: () => ({
					store,
					toggle: controller.toggle,
					t
				})
			}, ToggleButton));
		}

		exports.apply = apply;
		exports.inject = ["slots", "locale", "remote", "remote.pluginManager"];
		return module.exports;
	}
});

// build: 2026-11-17T23:40 toggle-state-fix
