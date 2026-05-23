---
type: entity
title: Diffusion Templates
created: 2026-05-16
updated: 2026-05-16
tags: [扩散模型, 插件框架, 可控生成, 开源]
related: [魔搭社区, diffsynth-studio, flux-2-klein-base-4b, 扩散模型插件标准化, 办公技能框架, 模型-技能分离架构]
sources: ["扩散模型也有「skills」了！魔搭开源11个现成模板，风格、修图、超清一键搞定.md"]
origin_date: 2026-05-16
---

# Diffusion Templates

Diffusion Templates 是由 [[魔搭社区]] 团队设计并开源的扩散模型插件框架。该框架将扩散模型的 [[可控生成]] 能力标准化为可组合的 Template 插件，类似于 LLM 生态中的 MCP/Skills 机制，旨在解决扩散模型插件生态碎片化问题。

## 核心架构

框架包含以下关键模块：

- **Template Input**：Template 模型的输入，字段由每个 Template 模型自身决定，为开发者提供最大自由度。
- **Template Model**：Template 模型本体，可从魔搭模型库或本地路径加载。
- **Template Cache**：框架最核心的概念，是 Template 模型的输出，也是基础模型 Diffusion Pipeline 的输入。其中包含 KV-Cache 等模型能力媒介格式，实现 Template 与基础模型间的信息传递。
- **Template Pipeline**：调度多个 Template 模型的模块，负责加载模型、整合多个模型的输出。

## 设计理念

框架的核心设计思想是 **插件与基础模型完全解耦**。每个 Template 模型存储在独立的模型仓库中，通过标准化的 Template Cache 与基础模型通信。这使得多个 Template 可以像搭积木一样自由叠加组合（如超分辨率 + 锐利激发），解决了传统 ControlNet、LoRA 等工具底层冲突的问题。

## 开源 Template 模型

基于 [[flux-2-klein-base-4b]] 训练并开源了 11 个 Template 模型：

1. **亮度调节** — 精准控制画面光照强度
2. **结构控制** — 类似 ControlNet 的空间结构引导
3. **超分辨率** — 低分辨率图像升级为高清大图
4. **锐利激发** — 提升画面锐利度与清晰度
5. **图像编辑** — 基于自然语言指令的精准修改，采用 KV-Cache 传递信息
6. **美学对齐** — 优化图像美学评分
7. **局部重绘** — 遮罩区域精准局部编辑
8. **年龄控制** — 人像年龄灵活切换
9. **色调调节** — 自由调整画面色调与色彩氛围
10. **内容参考** — 风格迁移与内容复用
11. **魔性熊猫** — 彩蛋模型，生成熊猫头表情包

## 与现有理念的关系

Diffusion Templates 的设计理念与 [[办公技能框架]] 和 [[模型-技能分离架构]] 高度一致，是将"技能化/插件化"范式从 LLM Agent 场景延伸至视觉生成领域的跨领域验证。Template Cache 作为标准化中间表示层，实现了与 LLM 生态中 MCP 协议类似的解耦效果。

## 当前局限

- 框架目前仅支持 [[flux-2-klein-base-4b]] 一个基础模型，跨模型通用性尚未验证。
- Template 模型与 FLUX.2-klein-base-4B 的 LoRA 和微调版本兼容，但与其他基础模型的兼容性待探索。

## 相关资源

- 技术报告：arxiv 2604.24351
- 代码仓库：[[diffsynth-studio]]