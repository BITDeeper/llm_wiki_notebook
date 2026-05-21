---
type: source
title: "论文配图一键封神！北大谷歌开源PaperBanana，5个Agent全包了"
tags: [ai-agent, scientific-visualization, multi-agent, google-cloudai, peking-university]
related: [paperbanana, paperbanana-bench, google-cloudai, peking-university, nano-banana-pro]
created: 2026-02-05
updated: 2026-02-05
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/PI3jcWBaOB5HBdJzO8NpMQ"
venue: "新智元"
sources: ["论文配图一键封神！北大谷歌开源paperbanana，5个agent全包了.md"]
---

# 论文配图一键封神！北大谷歌开源PaperBanana，5个Agent全包了

## 概述
本文报道了由 [[北京大学]] 与 [[Google CloudAI]] 联合开发的科研绘图自动化工具 [[PaperBanana]]。该系统通过 5 个 AI 智能体协同工作，实现了从论文文本到出版级配图的全自动转化，旨在解决科研人员在绘图上浪费 45% 时间的痛点。

## 核心技术架构
PaperBanana 采用 [[多智能体协同]] 架构，包含以下角色：
1.  **Retriever（检索）**：利用 RAG 技术从顶会数据库检索相关参考图。
2.  **Planner（策划师）**：将论文方法论转化为视觉蓝图。
3.  **Stylist（风格智能体）**：基于 [[审美逆向工程]] 生成审美指南，确保符合 NeurIPS 等顶会标准。
4.  **Visualizer（渲染器）**：调用 [[Nano Banana Pro]] 模型或生成代码进行渲染。
5.  **Critic（批评家）**：负责“找茬”，通过 3 轮循环修正逻辑错误。

## 关键创新点
-   **双模态生成策略**：针对逻辑图使用图像生成，针对统计图（如雷达图、柱状图）直接生成 Python Matplotlib 代码，彻底解决了扩散模型“不识数”和产生幻觉的问题。
-   **审美参数化**：通过分析 NeurIPS 2025 论文，将“高级感”量化为具体参数（如莫兰迪色系、字体混排规则）。
-   **迭代式自我修正**：Visualizer 与 Critic 的互撕机制将视觉忠实度从 4.5 分提升至 45.8 分（接近人类水平的 50.0）。

## 评测与基准
文章发布了 [[PaperBanana Bench]]，包含 292 个“地狱级”测试用例。数据显示，PaperBanana 在简洁性上比现有基线（如 [[Auto Figure]]）提升了 37.2%。

## 行业影响
该工具的出现标志着 AI 正从单纯的“生成”转向具备“设计思维”的“共创”。未来版本计划引入操作 Adobe Illustrator 的 GUI Agent，可能对传统设计行业产生冲击。