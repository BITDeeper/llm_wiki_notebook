---
type: entity
title: PaperBanana
tags: [ai-tool, multi-agent, scientific-visualization, google-cloudai, peking-university]
related: [paperbanana-bench, nano-banana-pro, google-cloudai, peking-university, auto-figure, 多智能体协同, 审美逆向工程, 双模态生成策略]
created: 2026-02-05
updated: 2026-02-05
sources: ["论文配图一键封神！北大谷歌开源paperbanana，5个agent全包了.md"]
---

# PaperBanana

[[PaperBanana]] 是由 [[北京大学]] 与 [[Google CloudAI]] 联合开发的科研绘图自动化工具。它通过 5 个 AI 智能体协同工作，旨在将论文文本自动转化为符合顶会（如 NeurIPS）标准的出版级配图。

## 核心架构
PaperBanana 采用 [[多智能体协同]] 模式，通过分工解决单一模型的幻觉问题：
1.  **Retriever**：检索参考图。
2.  **Planner**：解析文本逻辑，生成视觉蓝图。
3.  **Stylist**：执行 [[审美逆向工程]]，生成风格指南。
4.  **Visualizer**：执行渲染（图像或代码）。
5.  **Critic**：进行逻辑校验与迭代修正。

## 技术亮点
-   **双模态生成策略**：针对不同图表类型采用不同逻辑。逻辑图使用 [[Nano Banana Pro]] 进行图像生成；统计图则生成 Python 代码（Matplotlib），以确保数据的绝对精确，避免扩散模型的“不识数”问题。
-   **审美参数化**：通过分析 NeurIPS 2025 论文，将模糊的“高级感”转化为具体参数（如 Cream 色背景 `#F5F5DC`、莫兰迪配色、字体混排规则）。
-   **迭代优化**：Visualizer 与 Critic 进行 3 轮循环修正，显著提升 [[视觉忠实度]]。

## 性能表现
在 [[PaperBanana Bench]] 测试中，其视觉忠实度得分达到 45.8（GPT-Image-1.5 仅为 4.5，人类水平为 50.0），在简洁性上比基线模型提升 37.2%。

## 未来展望
团队计划开发能够操作 Adobe Illustrator 的 GUI Agent，实现从位图生成到可编辑矢量图的跨越。