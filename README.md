# ZeroMarker.github.io

Mark Chen（ZeroMarker）的个人网站与 GitHub Pages 入口仓库。

这个仓库使用 Astro 构建个人作品集，展示代表项目、当前技术方向与实用工具，并包含公共 PWA 资源。部分工具会跳转到同一域名下的其他 GitHub Pages 项目页面，因此这些路径在本仓库源码中不一定存在。

## 页面结构

- `src/pages/index.astro`：个人网站首页。
- `src/layouts/BaseLayout.astro`：公共 HTML、SEO 与 PWA 元数据。
- `src/components/`：首页 UI 组件。
- `src/data/apps.ts`：工具入口数据。
- `src/data/projects.ts`：代表项目数据。
- `public/`：样式、manifest、Service Worker 与图标等原样发布的静态资源。

## 跨仓库 Pages 链接

首页包含以下跨项目入口：

- `/word/index.html`
- `/6561/index.html`
- `/docs/sim/index.html`
- `/tool/`

这些页面由其他项目仓库发布到 `zeromarker.github.io` 域名下。维护链接时需要按生产站点 URL 检查可达性，不要仅用本仓库文件是否存在来判断它们是否失效。

本地预览时，上述跨仓库路径可能显示 404，这是预期现象。

## 本地预览

可以直接在 GitHub 仓库页面选择 **Code → Codespaces → Create codespace on main**。容器首次启动时会自动运行 `npm ci`，并转发 Astro 使用的 4321 端口。

在 Codespace 终端中启动开发服务器：

```bash
npm run dev
```

也可以在本地运行：

```bash
npm install
npm run dev
```

然后打开：

```text
http://localhost:4321/
```

生产构建与本地检查：

```bash
npm run build
npm run preview
```

推送到 `main` 后，`.github/workflows/deploy.yml` 会构建 `dist/` 并部署到 GitHub Pages。仓库的 Pages Source 需要设置为 **GitHub Actions**。

## PWA

站点提供基础 PWA 支持：

- 首页会注册 `/sw.js`。
- Service Worker 预缓存本仓库的核心页面、公共样式、manifest、图标和图片分割工具。
- 本仓库页面离线时优先返回缓存内容。
- 跨仓库 Pages 页面采用网络优先，不会被当前仓库的离线回退错误替换成本仓库页面。

更新缓存内容后，需要同步调整 `/sw.js` 中的 `CACHE_NAME` 或 `CORE_ASSETS`，确保浏览器获取新的离线资源。

## 维护说明

- 修改链接时，区分本仓库内链接和跨仓库 Pages 链接。
- 图标由 `scripts/generate-icons.cjs` 生成，依赖 `sharp`。
- Astro 采用纯静态输出，首页不引入客户端 UI 框架。
