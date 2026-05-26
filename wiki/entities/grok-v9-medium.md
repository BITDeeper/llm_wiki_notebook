---
type: entity
title: Grok V9-Medium
created: 2026-05-26
updated: 2026-05-26
tags: [ai, 大模型, grok, 编程, xai, 1.5t参数]
related: [xai, grok-build, cursor, elon-musk, colossus-2, claude-code, codex]
sources: ["xai解散，但grok还在上新，马斯克官宣新模型.md", "grok最新模型吃上cursor「加餐」，马斯克：coding实现巨大改进.md"]
origin_date: 2026-05-26
---
# Grok V9-Medium

Grok V9-Medium 是 [[xai|xAI]] 开发的最新基础模型，参数规模达 1.5T，是前代模型 Grok V8-Small（0.5T 参数）的三倍。该模型专门针对编程能力和开发者市场进行了强化训练。

## 关键规格

- **参数量**：1.5T（较前代扩大 3 倍）
- **架构优化**：针对 NVIDIA Blackwell 架构 GPU 进行专门优化
- **训练基础设施**：在 [[colossus-2]] 集群上完成训练
- **训练数据**：包含大量来自 [[cursor|Cursor]] 的真实开发者工作流数据
- **训练进度**（截至 2026 年 5 月 26 日）：基础训练已完成，微调进行中，强化学习阶段即将启动
- **预计发布**：2026 年 6 月中旬（2-3 周内）

## 与前代的对比

当前承载生产流量的 Grok V8-Small（外部测试版本 Grok 4.2）发布于约 2025 年中。马斯克承认 V8-Small 在训练数据的质量、全面性和比例上存在严重缺陷。V9-Medium 在各项能力上预计有显著提升，尤其在处理复杂编程任务方面。

## Cursor 数据的战略价值

在补充训练中，团队加入了大量来自 [[cursor|Cursor]] 的数据，包含数百万开发者的真实工作流——需求描述、上下文读取、文件修改、写代码、调试、报错修复、迭代、追问迭代等，被视为"人类开发者如何思考"的映射。这一数据源得益于 [[spacex|SpaceX]] 2026 年 4 月获得的以 600 亿美元收购 Cursor 的权利。

V9-Medium 的核心差异化不在于参数规模，而在于通过 [[cursor数据训练]] 获取的"真实工程手感"。这标志着大模型编程能力竞争从单纯参数竞赛进入数据质量竞赛阶段。

## 开源计划

现有的 Grok V8-Small（0.5T 参数）计划在 2026 年底前开源，适合开发者本地运行、微调或构建应用。