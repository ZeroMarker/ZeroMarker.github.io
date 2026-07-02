# ZeroMarker.github.io

Zeromark Apps 的 GitHub Pages 入口仓库。

这个仓库主要负责站点首页、公共样式、PWA 图标与本仓库内置的小工具页面。首页中部分工具卡片会跳转到同一域名下的其他 GitHub Pages 项目页面，因此这些路径在本仓库源码中不一定存在。

## 页面结构

- `/index.html`：工具箱首页。
- `/tool/split.html`：本仓库内置的图片分割工具。
- `/manifest.json`：PWA manifest。
- `/pwa.js`：Service Worker 注册脚本。
- `/sw.js`：PWA 离线缓存与运行时缓存逻辑。
- `/icons/`：PWA 与 Apple touch icon 图标。

## 跨仓库 Pages 链接

首页包含以下跨项目入口：

- `/word/index.html`
- `/6561/index.html`
- `/docs/sim/index.html`

这些页面由其他项目仓库发布到 `zeromarker.github.io` 域名下。维护链接时需要按生产站点 URL 检查可达性，不要仅用本仓库文件是否存在来判断它们是否失效。

本地使用 `python3 -m http.server` 预览当前仓库时，上述跨仓库路径可能显示 404，这是预期现象。

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开：

```text
http://localhost:8000/
http://localhost:8000/tool/split.html
```

## PWA

站点提供基础 PWA 支持：

- 首页和图片分割工具页会注册 `/sw.js`。
- Service Worker 预缓存本仓库的核心页面、公共样式、manifest、图标和图片分割工具。
- 本仓库页面离线时优先返回缓存内容。
- 跨仓库 Pages 页面采用网络优先，不会被当前仓库的离线回退错误替换成本仓库页面。

更新缓存内容后，需要同步调整 `/sw.js` 中的 `CACHE_NAME` 或 `CORE_ASSETS`，确保浏览器获取新的离线资源。

## 维护说明

- 修改工具页脚本后，可以抽取页面内 `<script>` 内容执行 `node --check` 做语法检查。
- 修改链接时，区分本仓库内链接和跨仓库 Pages 链接。
- 图标由 `scripts/generate-icons.cjs` 生成，依赖 `sharp`。
- 当前站点保持轻量静态页面路线，除确有必要外不引入前端框架。
