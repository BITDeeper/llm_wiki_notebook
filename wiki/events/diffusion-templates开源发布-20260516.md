---
type: event
title: Diffusion Templates 框架开源发布
created: 2026-05-16
updated: 2026-05-16
tags: [扩散模型, 插件框架, 开源, 发布事件]
related: [diffusion-templates, 魔搭社区, diffsynth-studio, flux-2-klein-base-4b, 扩散模型插件标准化]
sources: ["扩散模型也有「skills」了！魔搭开源11个现成模板，风格、修图、超清一键搞定.md"]
origin_date: 2026-05-16
participants: [魔搭社区]
causes: [扩散模型插件标准化]
effects: [diffusion-templates]
significance: medium
---

# Diffusion Templates 框架开源发布

2026年5月16日，[[魔搭社区]] 团队正式开源发布 [[diffusion-templates]] 扩散模型插件框架，同时开源基于 [[flux-2-klein-base-4b]] 训练的 11 个 Template 模型和 17 个训练数据集。

## 事件背景

扩散模型插件生态长期面临碎片化问题，ControlNet、LoRA、IP-Adapter 等工具互不兼容，叠加使用时底层冲突频繁。[[魔搭社区]] 团队借鉴 LLM 生态中 MCP/Skills 等标准化插件机制，设计了专门面向扩散模型的插件框架。

## 核心成果

- 框架代码在 [[diffsynth-studio]] 项目下完全开源（含训练代码）
- 11 个 Template 模型覆盖亮度调节、结构控制、超分辨率、图像编辑、美学对齐、局部重绘、年龄控制、色调调节、内容参考等场景
- 17 个训练数据集（ImagePulseV2 系列）同步开源
- 技术报告发布于 arxiv（2604.24351）

## 行业意义

此次发布标志着扩散模型生态从"碎片化工具拼接"向"标准化插件框架"演进的重要尝试，与 LLM 领域的 [[办公技能框架]] 和 [[模型-技能分离架构]] 形成跨领域呼应，验证了"技能化/插件化"范式的普适性。