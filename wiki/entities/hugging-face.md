---
type: entity
title: Hugging Face
created: 2026-05-31
updated: 2026-06-03
tags: [平台, 模型托管, 开源ai, ai公司, 开源社区, 科研基础设施]
related: [低比特模型, bitnet, bitnet-cpp, papers-with-code, niels-rogge, julien-chaumond, sota排行榜]
sources: ["低比特模型会是推理降本的关键组件吗？.md", "cvpr论文一网打尽！科研神器papers-with-code满血复活.md"]
---
# Hugging Face

Hugging Face 是全球领先的 AI 模型托管平台和开源社区，也是 AI 领域最重要的科研基础设施之一。在 Papers with Code 关闭后，Hugging Face 承担了重建该科研基础设施的关键角色。

## 与 Papers with Code 的关系

- **过渡阶段（2025年7月）：** 联合创始人兼 CTO [[julien-chaumond]] 推出"Trending Papers"页面作为过渡方案，原 paperswithcode.com 域名跳转至 Hugging Face 论文页面。但该方案因缺乏 [[sota排行榜]] 而不被社区接受。
- **从零重建（2026年5月）：** 开源团队成员 [[niels-rogge]] 在 paperswithcode.co 推出完全独立重建的新平台，采用 [[ai智能体驱动论文解析]] 技术。
- **生态整合：** 新平台自动链接 Hugging Face Hub 上的模型和数据集，与 transformers 库深度集成。

## 低比特模型领域

在低比特模型领域，Hugging Face 平台上的相关模型说明明确提示：使用常规的 Transformers 路径仅适合用于快速测试，要想兑现低比特模型标称的效率收益，必须依赖专门的底层工程实现（如 [[bitnet-cpp]]）。

这一提示印证了 [[低比特模型]] 面临的核心工程现实：位宽下降的理论红利需要推理框架和硬件的原生支持才能真正兑现。

## 生态贡献

- 承接并升级了机器学习社区最关键的论文-代码-排行榜聚合功能。
- 通过 AI 智能体技术解决了原版平台依赖人工维护的可持续性问题。
- 将平台数据与自身模型生态系统打通，形成从论文发现到模型部署的完整链路。