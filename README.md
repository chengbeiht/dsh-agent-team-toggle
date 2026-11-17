# dsh-agent-team-toggle

Turns the Agent Teams entry above the DSH sidebar footer balance card into a real one-click switch: it enables or disables the official `@deepseek-ai/dsh-experimental-agent-team-profile` bundle in place, instead of opening the Plugins page.

## Features

- **Direct toggle** through the public `pluginManager/setBundleEnabled` remote.
- **Live state** from `pluginManager/listBundles` plus the forwarded `plugin-manager/changed` event.
- **Busy, failure, and restart-required** states: a spinner while switching, the error code on failure, and a sticky amber notice when the host reports `restart-required`.
- **Wide and rail** layouts: icon + label + switch when expanded; a 36×36 icon with a status dot when collapsed.
- **Placement**: `sidebar.footer.action`, `order: -10`, directly above the cost-meter balance card.
- **Accessible**: `aria-pressed`, `aria-label`, `title`, and a visible focus ring.

## Install

From the plugin market (once listed):

```sh
dsh plugin --profile <profile> add dsh-agent-team-toggle
```

Or from a local directory:

```sh
dsh plugin --profile <profile> add /path/to/dsh-agent-team-toggle
```

Restart DSH or refresh the page after installing.

## Usage

- Click the switch: on → off, off → on.
- If it says "restart DSH to apply", the profile choice is saved; restart DSH.
- `bundle-in-use` means an active team session is using the bundle; retry later.
- A greyed-out/unavailable button means this DSH does not ship the Agent Teams bundle.

## Compatibility

- DSH `>=0.2.1 <0.3.0-0`, Node `>=20`.
- Uses the official plugin manager and the `pluginManager` remote exposed by `@deepseek-ai/dsh-api-remotes` (both protected built-ins in DSH 0.2.x).
- Only changes the profile's bundle selection; it does not patch DSH core files.

## Development

```sh
node test/selftest.mjs
```

The self-test loads `lib/client.js` in a Node VM with a mocked `pluginManager` remote and covers slot registration, initial state, enabling, disabling, `restart-required`, failure, missing bundles, and the wide/rail render.

## License

MIT.
