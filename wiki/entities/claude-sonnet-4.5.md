---
type: entity
title: Claude Sonnet 4.5
created: 2026-03-14
updated: 2026-05-08
tags: [model, anthropic, llm]
related: [claude-haiku-4.5, anthropic, claude-code, cursorbench, swe-bench, claude-opus-4.5, claude-opus-4.6]
sources: ["拜拜了swe-bench！cursor刚发了个ai-coding评测基准，难哭claude.md", "claude-code“隐形技术栈”被扒出来了！2430次测试揭秘工具偏好清单.md"]
---

# Claude Sonnet 4.5

Claude Sonnet 4.5 是 [[Anthropic]] 发布的大语言模型，属于 Claude 系列的中坚版本，也是 [[Claude Code]] 支持的模型之一。

## 评测表现

该模型在传统基准 [[swe-bench]] 上表现优异，得分达到 **77.2**。然而，在 [[cursor]] 发布的 [[cursorbench]] 评测中，其分数断崖式下跌至 **37.9**。

这一巨大落差（跌幅约 50%）揭示了该模型虽然在解决纯代码问题上有能力，但在面对真实开发场景（如 Monorepo、日志分析）和 **[[token约束]]** 时，其执行效率和成本控制存在显著短板。网友评价其在 CursorBench 上的表现“性价比低”。

## 行为特征

根据 Amplifying.ai 的基准测试研究，Claude Sonnet 4.5 在工具选择上表现出以下特征：

### 决策风格
- **最果断**：在三个测试模型中，Sonnet 4.5 的决策最为果断。
- **最保守**：强烈偏好成熟、主流的工具，避免推荐实验性或小众方案。

### 工具偏好
- 倾向于选择经过时间验证、社区支持广泛的工具。
- 在 [[版本迭代梯度]] 对比中，Sonnet 4.5 代表了“保守”的一端，与 [[Claude Opus 4.6]] 的激进风格形成鲜明对比。

## 与其他模型的对比

在 20 个工具类别的测试中，Sonnet 4.5 与 Opus 4.5、Opus 4.6 在 18 个类别中选择了相同的首选工具，显示出基础训练数据集的一致性。差异主要体现在：
- 对新工具的接受度较低
- [[自定义/DIY偏好]] 的倾向性最弱