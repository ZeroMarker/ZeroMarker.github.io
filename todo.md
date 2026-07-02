# GitHub 个人页面优化 TODO

分析日期：2026-07-02

范围：

- 当前仓库：`ZeroMarker/ZeroMarker.github.io`
- GitHub Profile 仓库：`ZeroMarker/ZeroMarker`
- 个人公开仓库：62 个
- 个人私有仓库：6 个，仅统计数量，不在公开页面列名
- 所属组织：`DBAdminX`、`VoidOrca`、`wustites`、`gaufree`、`sharprocket`、`beam-commons`
- 组织公开仓库：`VoidOrca` 1 个、`wustites` 8 个、`gaufree` 1 个；其余组织当前未发现公开仓库

## 目标

把 `zeromarker.github.io` 从简单工具入口升级为“个人项目索引 + 工具站 + 作品集入口”：

- 首页展示最值得访问的项目，而不是按仓库时间简单堆叠。
- GitHub Profile README 介绍方向、代表项目和联系方式。
- 仓库 metadata 更一致：description、topics、homepage、README、license。
- 跨仓库 GitHub Pages 链接可维护、可检查。
- 组织仓库与个人仓库分区展示，避免混在一起造成认知负担。

## P0：先修当前入口站

- [ ] 在首页增加项目分区：`工具`、`应用`、`开发者工具`、`知识库/笔记`、`组织项目`。
- [ ] 给跨仓库 Pages 入口增加来源说明，避免维护者误以为本仓库缺文件。
- [ ] 为首页卡片建立数据源，例如 `projects.json`，减少手写 HTML 卡片。
- [ ] 给 `projects.json` 字段定型：`name`、`repo`、`url`、`description`、`category`、`tags`、`status`、`owner`。
- [ ] 增加链接检查脚本：本仓库内链接检查文件存在，跨仓库 Pages 链接检查线上 HTTP 状态。
- [ ] 在 README 中补充“跨仓库 Pages 链接检查方式”和“新增项目入口流程”。
- [ ] 当前 PWA 改动完成后，确认 service worker 不会把跨仓库 Pages 导航错误回退到本仓库页面。

## P0：优化 GitHub Profile README

当前 `ZeroMarker/ZeroMarker` README 内容较旧，仍写着 Object Detection 和 hacker collaboration，不能反映现在的项目分布。

- [ ] 重写 Profile README：用 3 到 5 句话说明当前方向。
- [ ] 增加代表项目区，只放 6 到 8 个项目。
- [ ] 增加项目地图入口：链接到 `https://zeromarker.github.io/`。
- [ ] 增加技术栈摘要：Rust、JavaScript/TypeScript、Python、Shell、PowerShell、Go、Elixir。
- [ ] 增加联系信息，但避免过多个人隐私。
- [ ] 移除或改写“looking to collaborate on hacker”这类不清晰表达。

建议 Profile README 代表项目：

- `ZeroMarker/ZeroMarker.github.io`：个人工具站与项目入口。
- `ZeroMarker/Akira`：YAML reference manager。
- `ZeroMarker/agenthub`：AI coding agents 管理工具。
- `ZeroMarker/netor`：跨平台网络流量监测。
- `ZeroMarker/Diff`：Tauri/Vue 桌面 diff 工具。
- `ZeroMarker/disk-cleaner`：Rust 磁盘清理工具。
- `ZeroMarker/sz_metro_toilet`：深圳地铁厕所地图。
- `ZeroMarker/guomi`：Elixir 国密算法库，已设置 Hex.pm homepage。

## P1：仓库元数据治理

个人仓库现状：

- 总数：68
- 公开：62
- 私有：6
- 已归档：5
- Fork：1
- description 为空：3
- topics 为空：4
- homepage 已填写：2

待办：

- [ ] 给所有公开、非归档、非 fork 仓库补齐 description。
- [ ] 给所有公开、非归档、非 fork 仓库补齐 topics。
- [ ] 给有线上页面或包发布页的仓库补 homepage。
- [ ] 对纯笔记仓库统一 topics，例如 `notes`、`documentation`、`learning`。
- [ ] 对工具类仓库统一 topics，例如 `cli`、`desktop`、`developer-tools`、`pwa`、`web`。
- [ ] 对已不维护项目设置 archived，避免首页或 Profile 继续展示。
- [ ] 对 fork 仓库默认不展示，除非有明确贡献说明。

优先补 metadata 的仓库：

- `ZeroMarker/SOP-Hub`：缺 description、topics、primary language。
- `ZeroMarker/image`：缺 description、topics。
- `ZeroMarker/magazine`：缺 description、topics。
- `ZeroMarker/pvz-godot`：缺 topics。
- `ZeroMarker/ZeroMarker.github.io`：description 仍是泛泛的 `Github Pages Repository`，建议改成 `Personal project index and lightweight web tools`。

## P1：首页推荐项目池

### 工具与应用

- [ ] `ZeroMarker/6561`：游戏类，适合继续保留为首页卡片。
- [ ] `ZeroMarker/word`：学习类，适合继续保留为首页卡片。
- [ ] `ZeroMarker/period-tracker`：PWA 应用，适合加入应用区。
- [ ] `ZeroMarker/sz_metro_toilet`：地图应用，适合加入应用区。
- [ ] `ZeroMarker/Lingo`：语言学习应用，适合与 `word` 合并或并列展示。
- [ ] `ZeroMarker/mailim`：产品概念强，适合加 demo、截图或状态标签。
- [ ] `ZeroMarker/weibo-enhanced`：第三方 Web app，适合放实验项目区。
- [ ] `ZeroMarker/x-profile-media-downloader`：浏览器扩展类，适合放工具区。

### 开发者工具

- [ ] `ZeroMarker/agenthub`：代表性强，放 Profile 和首页。
- [ ] `ZeroMarker/netor`：Rust CLI，放 Profile 和首页。
- [ ] `ZeroMarker/Diff`：桌面工具，放 Profile 和首页。
- [ ] `ZeroMarker/disk-cleaner`：Rust CLI，放 Profile 和首页。
- [ ] `ZeroMarker/psgallery-manager`：PowerShell 工具，放开发者工具区。
- [ ] `ZeroMarker/package`：包管理相关，和 `make`、`cloud` 可归为运维工具。
- [ ] `ZeroMarker/cloud`：DevOps/VPS 工具，适合放运维工具区。

### 知识库与学习笔记

- [ ] `ZeroMarker/docs`：文档入口，适合被首页保留为知识库主入口。
- [ ] `ZeroMarker/unix`：Unix/Linux 笔记。
- [ ] `ZeroMarker/agent`：AI Agent 工具索引与实践笔记。
- [ ] `ZeroMarker/paper`：论文与研究笔记。
- [ ] `ZeroMarker/font`：字体资源。
- [ ] `ZeroMarker/cs`、`ZeroMarker/math`、`ZeroMarker/course`：可统一为学习资源分区。

### 库与专业项目

- [ ] `ZeroMarker/guomi`：已有 Hex.pm homepage，应重点完善 README、示例和版本说明。
- [ ] `ZeroMarker/Salvage`：数据恢复工具，适合补 README 风险说明和构建说明。
- [ ] `ZeroMarker/gush`：BitTorrent downloader，适合补状态标签。
- [ ] `ZeroMarker/dialectMap`：地图/语言学项目，适合展示截图或 demo。
- [ ] `ZeroMarker/scan`：Android 扫码工具，可补 release/apk 或安装说明。

## P1：组织仓库展示策略

组织仓库不应和个人仓库无差别混排。建议首页单独加“组织项目”分区。

### `wustites`

- [ ] `wustites/OrcaSVN`：Visual SVN Desktop，适合展示为组织重点项目。
- [ ] `wustites/yamldb`：YAML database，适合展示为开发者工具。
- [ ] `wustites/mdbook-summarizer`：mdBook 工具，适合展示为文档工具。
- [ ] `wustites/mdbook-tagging`：mdBook tagging preprocessor，适合与 summarizer 放同组。
- [ ] `wustites/legalize-cn`：中国法律汇总，适合放知识库/数据集。
- [ ] `wustites/legalize-meta`：法律元数据工具，作为 `legalize-cn` 配套项目。
- [ ] `wustites/solar`：视觉/动画实验项目，适合放实验区。
- [ ] `wustites/video`：媒体资源工具，优先级较低。

### `VoidOrca`

- [ ] `VoidOrca/usci`：统一社会信用代码 Go 库，适合放“库/验证工具”分区。

### `gaufree`

- [ ] `gaufree/cnid`：中国身份证 Go 库，适合与 `usci` 并列展示。

### 空公开仓库组织

- [ ] `DBAdminX`、`sharprocket`、`beam-commons` 当前未发现公开仓库。首页可暂不展示，或仅在组织列表中列出。

## P2：Pages 与 Demo 链接

当前很多仓库 `homepageUrl` 为空。首页作为项目入口时，最好区分：

- GitHub repo 链接
- Pages/demo 链接
- 包发布页
- 文档页

待办：

- [ ] 给已有 GitHub Pages 的仓库补 `homepageUrl`。
- [ ] 给 `word`、`6561`、`docs` 明确生产访问路径。
- [ ] 检查 `ZeroMarker.github.io` 首页路径是否与其他 Pages 仓库发布路径一致。
- [ ] 对无 demo 的工具项目，首页卡片先链接 repo。
- [ ] 对有 npm/Hex/Chrome extension/release 的项目，卡片增加 secondary link。

## P2：首页信息架构

建议首页从 4 张卡片扩展为可筛选项目目录：

- [ ] 顶部保留简短标题和说明。
- [ ] 增加分类 tabs：全部、工具、应用、开发者工具、知识库、组织项目。
- [ ] 增加搜索框：按项目名、标签、语言过滤。
- [ ] 卡片显示状态：`active`、`stable`、`experimental`、`archived`。
- [ ] 卡片显示来源：`ZeroMarker`、`wustites`、`VoidOrca`、`gaufree`。
- [ ] 卡片避免展示私有仓库。
- [ ] 归档仓库默认隐藏，只在“归档”筛选中显示。

## P2：自动化脚本

- [ ] 新增 `scripts/check-links.cjs`：检查本仓库内链接和线上跨仓库链接。
- [ ] 新增 `scripts/build-projects.cjs`：可选，从 GitHub API 拉取公开仓库 metadata 生成项目索引草稿。
- [ ] 新增 `npm run start`：启动本地静态服务器。
- [ ] 新增 `npm run check`：执行 JSON 校验、脚本语法检查、链接检查。
- [ ] 新增 `npm run icons`：执行 `scripts/generate-icons.cjs`。

## P3：仓库归档与清理

已归档仓库可以继续保留，但不应作为个人页面主展示：

- `ZeroMarker/iris`
- `ZeroMarker/intersystems`
- `ZeroMarker/spring`
- `ZeroMarker/iMedical`
- `ZeroMarker/village`

待办：

- [ ] 检查这些仓库是否仍需在 Profile 或首页出现。
- [ ] 如仅作历史留存，在 README 顶部写明 archived 状态。
- [ ] 如果有可复用价值，移动到“历史项目”或“学习项目”分区。

## P3：公开安全与隐私

- [ ] 公开页面不要列出私有仓库名称。
- [ ] 财务、交易、身份、密钥相关仓库不做公开展示。
- [ ] 首页项目索引只使用 GitHub API 可公开读取的信息。
- [ ] 文档中避免写入 token、邮箱之外的个人敏感信息。

## 建议执行顺序

1. 重写 `ZeroMarker/ZeroMarker` Profile README。
2. 给 `ZeroMarker.github.io` 新增 `projects.json`，先手工维护 20 个精选项目。
3. 首页改为从 `projects.json` 渲染卡片，并支持分类筛选。
4. 补齐重点仓库的 description、topics、homepage。
5. 加链接检查脚本，覆盖跨仓库 Pages 链接。
6. 再考虑 GitHub API 自动同步项目索引。
