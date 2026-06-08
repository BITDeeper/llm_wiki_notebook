---
type: entity
title: Grok V9-Medium
created: 2026-05-26
updated: 2026-06-06
tags: [ai, 大模型, grok, 编程, xai, 1.5t参数, 编程ai, 大语言模型, 马斯克, ai编程]
related: [xai, grok-build, cursor, elon-musk, colossus-2, claude-code, codex, gpt-5.5, swe-bench-verified, spacex, 过程数据]
sources: ["xai解散，但grok还在上新，马斯克官宣新模型.md", "grok最新模型吃上cursor「加餐」，马斯克：coding实现巨大改进.md", "马斯克曝光grok-5！1.5万亿参数，偷师cursor狂练编程.md", "280美元一单！1000名工程师教claude写好代码.md"]
origin_date: 2026-05-25
---
# Grok V9-Medium (Grok 5)

Grok V9-Medium 是 [[elon-musk|马斯克]] 旗下 [[xai|xAI]] 开发的新一代 1.5 万亿参数基座大语言模型，内部代号 V9-Medium，对应产品名几乎确定为"Grok 5"。2026 年 5 月 25 日由马斯克在 𝕏 平台官宣训练完成。该模型专门针对编程能力和开发者市场进行了强化训练。

## 关键规格

- **参数量**：1.5T（现役 Grok V8-Small 的 5000 亿参数的三倍）
- **架构优化**：针对 NVIDIA Blackwell 架构 GPU 进行专项优化
- **训练基础设施**：在 [[colossus-2]] 集群上完成训练
- **训练数据**：包含大量来自 [[cursor|Cursor]] 的真实开发者工作流数据
- **训练进度**（截至 2026 年 5 月 25 日）：基础训练已完成，微调进行中，强化学习阶段即将启动
- **预计发布**：2026 年 6 月中旬（官宣后 2-3 周内）

## 与前代的对比

当前承载生产流量的 Grok V8-Small（外部测试版本 Grok 4.2）发布于约 2025 年中。马斯克承认 V8-Small 在训练数据的质量、全面性和比例上存在严重缺陷。V9-Medium 在各项能力上预计有显著提升，尤其在处理复杂编程任务方面。

## Cursor 数据的训练策略

V9-Medium 将是第一个系统性地融合 [[cursor|Cursor]] 真实开发者行为数据的 Grok 模型。马斯克特别强调，5 月 25 日宣布的训练完成成绩尚未加入 Cursor 数据补训，加完后"编程能力会强很多"。

V9-Medium 的核心训练创新在于灌入了大量 Cursor 编程交互数据，被视为"人类开发者如何思考"的映射。具体包含：

- 开发者的 prompt 设计与需求描述
- 代码上下文读取与编辑操作
- 文件修改与多文件协作记录
- bug 调试流程与报错修复
- 迭代、追问迭代等完整工作流

这一策略被形容为"拿着答案卷复习考试"——公开代码训练基本功，Cursor 私域交互数据训练工程能力。有分析推测 xAI 可能在预训练后期就已灌入大量编程数据，类似 Cursor Composer 2.5 的 heavy mid-train 策略。

这一数据源得益于 [[spacex|SpaceX]] 2026 年 4 月底获得的以 600 亿美元收购 Cursor 母公司 Anysphere 的权利。V9-Medium 的核心差异化不在于参数规模，而在于通过 [[cursor数据训练]] 获取的"真实工程手感"。这标志着大模型编程能力竞争从单纯参数竞赛进入数据质量竞赛阶段。

Grok V9 也将是验证"[[过程数据]]是否真是护城河"的关键测试案例。

## 编程能力评估

在 [[swe-bench-verified|SWE-bench Verified]] 基准测试中，Grok 4 系列仅 72%-75%，远低于 [[gpt-5.5|GPT-5.5]] 的 88.7% 和 Claude Opus 4.6 的 80.8%。V9-Medium 能否通过参数翻三倍加 Cursor 数据实现质变，尚待验证。

## 战略定位

V9-Medium 是马斯克编程赛道三连布局的核心环节：

1. **收购拿分发**：600 亿锁定 [[cursor|Cursor]]
2. **数据拿能力**：Cursor 数据灌模型
3. **Agent 拿入口**：[[grok-build|Grok Build]] 上线

其发布时间恰好卡在 [[spacex|SpaceX]] 6 月 12 日 IPO 之前，存在以技术发布为 IPO 造势的战略考量。

## 开源计划

前代模型 Grok V8-Small（0.5T 参数）承诺在 2026 年底前开源，适合开发者本地运行、微调或构建应用。