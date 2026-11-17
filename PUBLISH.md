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

## 2. 建 GitHub 仓库并打 Release

```sh
git init
git add .
git commit -m "dsh-agent-team-toggle 1.0.0"
git branch -M main
git remote add origin https://github.com/<owner>/dsh-agent-team-toggle.git
git push -u origin main
git tag v1.0.0
git push origin v1.0.0
```

在 GitHub 上创建 `v1.0.0` Release，可附上 `dsh-agent-team-toggle-1.0.0.tgz`。npm 已发布，这一步只作为备用安装源。

> 当前机器直连 `github.com` 超时（`ERR_CONNECTION_TIMED_OUT`），且没有 `gh`/git 凭据；这一步需要在能访问 GitHub 的机器/代理上完成。

## 3. 提交市场条目

Fork [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)，在 README 的 **UI Enhancements** 分组中按字母序加一行（把 `<owner>` 换成实际账号）：

```md
- [<owner>/dsh-agent-team-toggle](https://github.com/<owner>/dsh-agent-team-toggle) - One-click Agent Teams on/off switch in the DSH sidebar footer, above the balance card; reflects live state, busy/failure, and restart-required notices.
```

然后向上游提 PR。维护者合并后，`awesome-dsh-plugin.com` 与 `dsh-plugin-catalog` 会自动生成条目，市场 Discover 中即可搜索到。

## 4. 本机自测安装

```sh
dsh plugin --profile desktop add D:/AI/DSH/dsh-agent-team-toggle
```

或在插件页用“添加插件 → 本地目录”安装。安装后侧栏余额卡上方出现开关。

## 当前状态（如实记录）

- 插件源码、测试、打包文件已就绪。
- npm：`dsh-agent-team-toggle@1.0.0` **已发布**，registry 200，latest = 1.0.0。
- 发布用临时 bypass 2FA token 已撤销。
- GitHub：直连超时；未创建仓库、未提交 PR。
- 插件市场 listing：仍待提交 awesome-dsh-plugin PR；**尚未出现在市场**。

## 本地产物

- 源码：`D:/AI/DSH/dsh-agent-team-toggle/`
- Tarball：`D:/AI/DSH/dist/dsh-agent-team-toggle-1.0.0.tgz`
- 本地安装：`dsh plugin --profile desktop add D:/AI/DSH/dsh-agent-team-toggle`
