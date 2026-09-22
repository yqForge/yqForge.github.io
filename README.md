# YQ

个人名片站。开发依据见 [`DOCS/V1冻结.md`](DOCS/V1冻结.md)。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

修改个人信息、经历、项目、技能时，只改 `src/data/`。

个人照片放到 `public/images/`（建议方形，如 `avatar.jpg`），并在 `src/data/profile.ts` 填写 `photo`（如 `/images/avatar.jpg`）；不填则显示首字母。

微信二维码放到 `public/images/`，并在 `src/data/profile.ts` 填写 `wechatQr`。
项目截图同样放 `public/images/`，在 `src/data/projects.ts` 填写 `image`。
