---
type: entity
title: Agnes
tags: [ai-company, startup, multimodal, agent]
related: [agnesclaw, agnes-1-5-pro, agnes-image-1-2, rlaf, zenmux]
created: 2026-04-01
updated: 2026-04-01
sources: ["斯坦福mit天团出手！1美元养龙虾，图文视频全包，打工人神外挂.md"]
---

# Agnes

Agnes 是一家新兴的人工智能公司，由来自斯坦福、MIT、伯克利、NUS、NTU 以及清华、浙大等顶尖高校的团队创立。其核心科研带头人包括来自微软亚研院、英特尔研究院的首席科学家及图灵奖得主门下的研究者。

## 核心策略
Agnes 采取“全模态 + 高性价比”的组合策略，致力于提供从文本 Agent 到图像、视频生成的完整 AI 生产力工具箱。其产品通过 [[Zenmux]] 平台进行分发。

## 主要产品线
- **Agent 工具**：[[AgnesClaw]]，主打一键部署和低价订阅（最低 1 美元/月）。
- **文本模型**：[[Agnes-1.5-Pro]] / [[Agnes-1.5-Lite]]，基于自研“龙虾”基座。
- **多模态模型**：[[Agnes-Image-1.2]]（图像编辑）、[[Agnes-Video-V1.2]]（视频生成）。
- **办公与搜索**：[[Agnes-Slides]]（PPT 生成）、[[Agnes-Search]] / [[Agnes-DeepResearch]]。

## 技术架构
Agnes 模型采用了融合 [[Latent-MoE]]（隐式混合专家）、[[Mamba-2]] 状态空间模型与原生多模态早融合技术的架构，旨在解决超长上下文、高频工具调用和复杂 Multi-Agent 协作的痛点。

## 训练范式
公司提出了 [[RLAF]]（Reinforcement Learning with Agentic Feedback）框架，利用 [[DSPO]] 算法和 [[UV]]（通用验证器）实现“AI 训练 AI”，以降低人工标注成本并提升迭代效率。