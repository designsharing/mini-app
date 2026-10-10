# Mintlify 接入与维护

本次文档拆分在 `docs/mintlify` 分支完成。未经审核不要合并到 `main`。

## 初次连接

在 Mintlify Git Settings 中选择：

- 仓库：`designsharing/mini-app`
- 分支：`docs/mintlify`
- 文档目录：`docs`

将 Mintlify GitHub App 授权限定到该仓库。安装 App 可能需要仓库管理员批准。选择免费 Starter 即可做基础文档发布。

这里连接的是独立分支，后续向此分支推送会更新文档站，主分支内容不变。不要修改已有生产站点的来源；如已有站点，先使用本地预览。

## 本地预览

需要 Node.js 20.17 或更高版本。

```bash
npm i -g mint
cd docs
mint dev
```

打开 http://localhost:3000。预览前可在 docs 目录运行 `mint validate` 和 `mint broken-links`。

## GitHub Desktop 更新

1. 将本地仓库添加到 GitHub Desktop。
2. 确认 Current Branch 是 `docs/mintlify`。
3. 第一次点击 Publish branch；以后先 Fetch/Pull，再编辑。
4. 修改 docs 内对应页面，预览并检查。
5. Commit to docs/mintlify，再 Push origin。

也可以在 GitHub 网页切换到 `docs/mintlify` 后编辑对应文件。新增页面时，在 docs/docs.json 的 navigation 中增加不带扩展名的页面路径。

## 审核后再合并

检查文档与接口一致性后，再通过 Pull Request 合并到 main；此前主分支仍保留原 README。若日后切换为 main 发布，需要修改 Mintlify 来源分支，并将文档中指向 docs/mintlify 的 GitHub 下载链接更新为 main。

## 本次整理范围

- 按功能迁移原 README 中所有已说明的方法及 Passkey 前置条件。
- SDK JavaScript 和 sdk-global.ts 不修改。
- 引入示例版本由旧 1.0.17 更新为本仓库实际文件 1.0.64。
- 客服方法按 sdk-global.ts 的 NormalChatApi 归属整理到 window.chat。
- openCashier 的 prepayId / prepay_id 及回调差异保留并标注待确认。
- 原始接口声明与结构示例保留；不代表通过 TypeScript 编译或宿主实机测试。
