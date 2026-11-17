# 发布到 npm 与 DSH 插件市场

DSH 市场（dshmarket / `dsh-plugin-catalog`）**没有上传接口**。官方收录路径是：

1. 把插件发布到 npm；
2. 把条目 PR 到 [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) 的 README；
3. 站点与市场通常一天内自动收录。

## 1. npm 发布状态

- 包名：`dsh-agent-team-toggle`
- 版本：`1.0.0`
- Registry：<https://registry.npmjs.org/dsh-agent-team-toggle>
- 包页面：<https://www.npmjs.com/package/dsh-agent-team-toggle>
- 发布时间：2026-11-18（Asia/Shanghai）
- Tarball SHA-1：`ce67e793d53e89d5fb98b8441db4a4c28815f764`

验证：

```sh
npm view dsh-agent-team-toggle version --prefer-online
# 1.0.0
```

说明：
- npm 账号 `chengbeiht` 已启用 2FA（auth-and-writes）。
- 网页 2FA 设置页当前只提供 **Security key / Passkey**，没有 Authenticator app 选项；因此本次发布使用了一个**临时 granular access token**，勾选 **Bypass 2FA**，权限为 **Read and write (publish and stage)**。
- 该 token 已在发布后撤销；不要在任何文件中保留 token。
- npm 页面提示 bypass 2FA token 从 2027-01 起限制直接发布；后续发布建议启用 TOTP 或 trusted publishing。
- `npm view` 可能读到旧缓存；以 `--prefer-online` 或 registry 的 `?t=` 查询为准。

## 2. GitHub 仓库

- 仓库：<https://github.com/chengbeiht/dsh-agent-team-toggle>
- 默认分支：`main`
- 标签：`v1.0.0`
- 提交身份：`chengbeiht <chengbeiht@users.noreply.github.com>`

已推送源码、README、LICENSE、`cordis.patch.yml` 和标签。

## 3. 提交市场条目

已提交 PR：

- PR：<https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/pull/16371>
- 分支：`chengbeiht:add-dsh-agent-team-toggle`
- 条目位于 **UI Enhancements** 分组，按字母序插入在 `chendefine/dsh-composer-markdown` 之后、`ChengX0721/dsh-client-ui-skin-alice-greyrat` 之前。

维护者合并后，`awesome-dsh-plugin.com` 与 `dsh-plugin-catalog` 会自动生成条目，市场 Discover 中即可搜索到。

## 4. 本机自测安装

```sh
dsh plugin --profile desktop add D:/AI/DSH/dsh-agent-team-toggle
```

或在插件页用“添加插件 → 本地目录”安装。安装后侧栏余额卡上方出现开关。

## 当前状态（如实记录）

- 插件源码、测试、打包文件已就绪。
- npm：`dsh-agent-team-toggle@1.0.0` **已发布**，registry 200，latest = 1.0.0。
- GitHub：仓库已创建，`main` 和 `v1.0.0` 已推送。
- 插件市场：PR #16371 已提交，等待维护者合并；**尚未出现在市场**。
- 发布用临时 bypass 2FA token 已撤销；GitHub PAT 用完即撤销。

## 本地产物

- 源码：`D:/AI/DSH/dsh-agent-team-toggle/`
- Tarball：`D:/AI/DSH/dist/dsh-agent-team-toggle-1.0.0.tgz`
- 本地安装：`dsh plugin --profile desktop add D:/AI/DSH/dsh-agent-team-toggle`
