---
type: concept
title: npm
tags: [package-manager, javascript, distribution]
related: [openclaw, ci]
created: 2026-03-24
updated: 2026-03-24
sources: ["openclaw-3.23紧急修复！peter忘记打包控制台文件，海量龙虾崩溃.md"]
---

# npm

npm (Node Package Manager) 是 JavaScript 运行时环境 Node.js 的默认包管理器，也是全球最大的开源库生态系统。它允许开发者发布、分享和复用代码模块。

## 作为分发渠道
[[openclaw]] 使用 npm 作为其核心分发渠道。OpenClaw 的发布产物不仅包含核心代码，还捆绑了 [[ClawControl]] 的 UI 资源和内置插件。

## 发布事故
在 OpenClaw 3.22 事件中，npm 发布流程的缺陷暴露无遗：由于缺乏自动化验证，不包含 UI 资源和插件的“裸”包被成功发布到了 npm 仓库，导致用户安装后功能失效。这凸显了在依赖包管理中，除了代码本身，对非代码资产（如静态资源）的完整性检查同样至关重要。