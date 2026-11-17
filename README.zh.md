# dsh-agent-team-toggle

把 DSH 左侧栏底部、余额卡上方的“智能体团队”入口做成**一键开关**：点一下直接启用或停用官方 `@deepseek-ai/dsh-experimental-agent-team-profile` bundle，不再跳转插件页。

## 功能

- **一键启停**：调用插件管理器公开的 `pluginManager/setBundleEnabled`，直接写入 profile 的 bundle 选择。
- **状态同步**：通过 `pluginManager/listBundles` 读取真实启用状态，并订阅 `plugin-manager/changed`；在插件页或别处切换后，按钮同步更新。
- **忙碌/失败/需重启**：切换中显示转圈；失败显示错误码；宿主返回 `restart-required` 时显示琥珀色“需重启 DSH 生效”，不会谎称已立即生效。
- **两种形态**：展开侧栏显示图标 + “智能体团队” + 开关轨道；收起侧栏显示 36×36 图标和状态点。
- **位置**：`sidebar.footer.action`，`order: -10`，位于 cost-meter 余额卡上方。
- **无障碍**：`aria-pressed`、`aria-label`、`title`、focus-visible 焦点环。

## 安装

通过插件市场（收录后）：

```sh
dsh plugin --profile <profile> add dsh-agent-team-toggle
```

或从本地目录安装：

```sh
dsh plugin --profile <profile> add /path/to/dsh-agent-team-toggle
```

安装后重启或刷新页面。插件会在侧栏余额卡上方出现。

## 使用

- 点击按钮：已开启 → 关闭；已关闭 → 开启。
- 如果提示“需重启 DSH 生效”，按提示重启 DSH；profile 选择已经写入，重启后生效。
- 如果提示 `bundle-in-use`：智能体团队正在被使用（例如有活动团队会话），等它结束后再关闭。
- 如果按钮变灰/提示不可用：当前 DSH 没有随安装提供 `@deepseek-ai/dsh-experimental-agent-team-profile`。

## 兼容性

- DSH `>=0.2.1 <0.3.0-0`，Node `>=20`。
- 依赖官方插件管理器及 `@deepseek-ai/dsh-api-remotes` 暴露的 `pluginManager` remote；两者都是 DSH 0.2.x 的受保护内置插件。
- 只改动 profile 的 bundle 选择，不修改 DSH 核心文件。

## 开发与测试

```sh
node test/selftest.mjs
```

自测在 Node VM 中加载 `lib/client.js`，mock `pluginManager` remote，覆盖注册位置、初始状态、开启、关闭、`restart-required`、失败、缺失 bundle 以及展开/收起渲染。

## 安全

插件只调用插件管理器已有的远程方法，不读取凭据、不访问网络、不执行构建脚本。切换的是官方 Agent Teams bundle，效果与在“插件”页手动开关相同。

## 许可

MIT。
