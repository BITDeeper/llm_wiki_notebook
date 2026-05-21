---
type: entity
title: UniPat AI
tags: ["organization", "ai", "forecasting", "ai-research", "startup", "vision", "ai-lab", "open-source", "research", "研究机构", "评测", "ai-company", "prediction-infrastructure", "echo", "multimodal", "vision-agent", "ai-research-lab", "medical-ai"]
related: ["echoz-1-0", "echo-system", "train-on-future", "swe-vision", "babyvision", "uniscientist", "进化式多学科合成", "红杉中国-xbench-团队", "echoz-1.0", "automated-rubric-search", "point-aligned-elo", "map-reduce-agent"]
created: 2026-03-30
updated: 2026-05-08
sources: ["黑马ai横扫预测市场！预测未来胜率已超过人类.md", "500行极简开源框架，硬刚gptgemini视觉极限！.md", "领跑！30b模型登顶openai科研榜单，unipat-ai冲上开源科研最前线.md", "大模型拿金牌却输给三岁宝宝！一套「纯视觉考卷」把顶尖vlm打回幼儿园.md", "预测这件事，人类越犹豫，这个大模型越有优势.md", "五百行代码打造sota视觉智能体！unipat-ai最新开源.md", "科研ai出了个狠角色：开源30b小模型，硬刚gemini和claude.md"]
---

# UniPat AI

[[UniPat AI]] 是一家 AI 研究实验室与初创公司，活跃在 AGI（通用人工智能）基础研究前沿。该团队致力于构建真实场景下 AI 训练、评测与应用的新范式，其核心目标包括构建 AI 预测基础设施、推动人工智能在科学研究领域的应用，以及通过极简工具集增强多模态大模型的能力。

## 预测基础设施

UniPat AI 构建了预测智能的基础设施，旨在解决 AI 预测领域“无法证明”的痛点，将预测从一种直觉判断转变为可集成、可调用的工程参数。

### Echo 系统
一套包含动态评测引擎、[[Train-on-Future]] 训练流程和预测 API 的完整基础设施。
- **Train-on-Future 范式**：提出了一种不依赖历史已知结果，而是利用实时数据流生成关于未来事件的问题进行训练的方法。
- **评测基准**：建立了涵盖经济、体育、科技等 7 个领域的 [[General AI Prediction Leaderboard]]，通过动态排行榜、实盘市场对照和全量数据公开，强调预测能力的**可验证性**、**通用性**和**可训练性**。

### EchoZ-1.0
首个在 [[Train-on-Future]] 范式下端到端训练的大语言模型，在 General AI Prediction Leaderboard 上表现优异。官网标语为：“The future is no longer a probability you guess—it is a parameter you integrate.”

### 推理与评估技术
- **[[Automated Rubric Search]]**：用于评估推理过程质量的数据驱动搜索机制。
- **[[Map-Reduce Agent]]**：用于推理阶段的分布式架构。
- **[[Point-Aligned Elo]]**：用于评估模型表现的评分机制。

## 科研智能与模型

UniPat AI 的工作被视为 AI for Science 领域的一个重要里程碑，标志着 AI 从辅助计算工具向“自主研究员”角色的转变。团队提出了“[[形式化科学研究]]”的方法论，旨在将开放式的科研过程转化为可验证、可训练的动态系统。

### UniScientist 模型
开发了 [[UniScientist]]，一个 30B 参数的开源大语言模型。该模型在 OpenAI 的 [[FrontierScience]] 科研评测基准（如 FrontierScience-Research）上表现出色，超越了参数量大一个数量级的顶尖闭源模型（如 Claude Opus 4.5, Gemini 3 Pro）。其核心创新在于实现了 [[假设-证据-验证闭环]]，使 AI 具备了自主进行科学研究的能力，而非仅仅生成看似合理的文本。

### 进化式多学科合成
提出了 [[进化式多学科合成]]（Evolving Polymathic Synthesis）数据引擎技术。针对科研数据“纯人工太慢、纯合成太假”的瓶颈，该团队利用了模型擅长生成、专家擅长验证的不对称性，构建了包含 4700+ 个高质量研究级实例的数据集。

## 多模态研究

UniPat AI 专注于解决多模态大模型在基础视觉任务上的精度缺陷，提出了 [[代码增强视觉]] 的技术路线，主张通过极简的工具集（通用 Python 环境）而非复杂的专用 API 来增强模型的视觉能力。

### SWE-Vision
开发了 [[SWE-Vision]]，一个极简的开源视觉智能体框架（约 500 行代码）。该框架通过让模型编写并执行 Python 代码来增强其视觉理解能力，强调 [[有状态执行]] 和 [[test-time-scaling]] 在视觉推理中的重要性，在多个基准测试中取得了 SOTA 成绩。

### BabyVision 评测基准
UniPat AI 携手 [[红杉中国-xbench-团队]] 以及多家大模型公司与高校的研究员，发布了 [[BabyVision]] 多模态评测基准。
- **核心发现**：该基准通过“纯视觉考卷”测试模型的基础视觉原子能力，揭示了顶尖大模型在视觉理解上普遍不如 3 岁儿童的现状。它指出了多模态模型虽然代码能力强，但在基础视觉感知上存在“看得见却无法精确处理”的缺陷。
- **行业影响**：BabyVision 已被多个重磅模型产品纳入评测体系，被视为具身智能走向现实世界的必修课。

## 技术理念

UniPat AI 的技术理念贯穿于其预测、科研与视觉研究中，主要包含以下核心原则：

- **可验证性与形式化**：在预测领域，通过动态排行榜和全量数据公开，试图将预测从一种直觉判断转变为可集成、可调用的工程参数。在科研领域，团队将科研过程建模为基于“证据状态”的动态系统，区分“可独立核验证据”和“可形式化推导证据”，旨在将科研智能从“远大理想”转化为“可训练、可评估、可迭代”的对象。
- **从辅助到自主**：推动 AI 从辅助工具向“自主研究员”角色的转变。
- **真实场景评测**：强调在脱离语言辅助的情况下，评估 AI 对物理世界的真实理解能力，关注构成智能地基的基础视觉技能（如精细辨别、视觉追踪、空间感知）。

## 外部链接
- 官网：https://unipat.ai
- Echo 系统：https://echo.unipat.ai/
- 博客：https://unipat.ai/blog/Echo