# YQ · 个人展示站

基于 [Astro](https://astro.build/) 和 [Tailwind CSS](https://tailwindcss.com/) 构建的单页个人展示站，用于介绍经历、技术方向、项目作品和联系方式。

**在线访问：** https://yqforge.github.io/

## 站点内容

- 关于、经历、项目、技能和联系信息
- 响应式布局、移动端导航及可记忆的明暗主题
- 项目卡片、个人照片和微信二维码弹窗
- 页面元信息、社交分享标签、结构化数据、站点地图

本仓库仅包含展示站源码，不包含站点中提及的商业项目源码。

## 本地开发

需要 Node.js **22.12.0 或更高版本**和 npm。

```bash
npm ci
npm run dev
```

在终端输出的本地地址预览站点。生成并预览生产构建：

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`，无需提交到仓库。

## 项目结构

```text
src/
  data/        个人资料、经历、项目与技能
  components/  页面区块和交互组件
  layouts/     页面布局与元信息
  pages/       页面入口
  styles/      全局样式
public/        图片、图标、robots.txt、sitemap.xml
.github/workflows/deploy.yml  GitHub Pages 部署工作流
```

### 修改展示内容

- 在 `src/data/profile.ts` 修改个人资料、导航及站点标题和描述，在 `src/data/experience.ts`、`projects.ts`、`skills.ts` 修改对应内容。
- 将头像、二维码和项目配图放入 `public/images/`，在数据文件中使用以 `/images/` 开头的路径。`photo` 留空时显示姓名首字母；`wechatQr` 留空时弹窗显示提示文字。
- 首页终端风格区域的文案和 GitHub 链接写在 `src/components/Terminal.astro`，更换个人资料时也请同步修改。
- 站点地址同时配置在 `astro.config.mjs`、`src/data/profile.ts`、`public/robots.txt` 和 `public/sitemap.xml`。更换域名或账号时请一并更新这些文件及相关 GitHub 链接。

当前资源路径以站点根目录 `/` 为起点，适合部署为 `用户名.github.io` 仓库。如果部署在 `github.io/仓库名/` 下，需要额外配置 Astro 的 `base`，并调整以 `/` 开头的静态资源路径。

## 部署到 GitHub Pages

仓库中的 [部署工作流](.github/workflows/deploy.yml) 会在推送到 `main` 或 `master` 时使用 Node.js 22 构建站点，并将 `dist/` 发布到 GitHub Pages；也可以在 GitHub Actions 页面手动运行。

1. 将仓库推送到 GitHub。若要使用 `https://用户名.github.io/` 作为根域名，仓库名应为 `用户名.github.io`。
2. 在仓库 **Settings → Pages → Build and deployment** 中将 **Source** 设置为 **GitHub Actions**。
3. 在 **Actions → Deploy GitHub Pages** 查看运行结果；首次推送若早于 Pages 启用，可在启用后重新运行工作流。

公开发布前，请检查 `public/images/` 中的照片和二维码，以及数据文件中的个人信息是否适合公开。

