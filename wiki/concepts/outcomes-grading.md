---
type: concept
title: Outcomes (AI质检)
tags: [agent, quality-control, evaluation, anthropic]
related: [claude-managed-agents, runtime-agent-os]
created: 2026-05-07
updated: 2026-05-07
sources: ["claude会「做梦」了，梦里还在卷.md"]
---

# Outcomes (AI质检)

**Outcomes** 是 Anthropic 推出的一种**独立评分机制**，旨在通过引入独立的“裁判”来解决 AI 输出质量不稳定的问题。

## 工作机制

1.  **设定标准**：用户预先定义评分标准。
2.  **隔离评分**：任务完成后，一个独立的 **Grader Agent** 在隔离的上下文窗口中根据标准对结果进行打分。
3.  **强制修正**：如果结果不达标，Grader Agent 会指出具体问题，执行 Agent 会自动修改内容，直到满足标准为止。

## 核心特点
- **独立性**：评分 AI 与执行 AI 上下文隔离，避免了执行 AI 的自我辩解或干扰。
- **自动化**：无需人工介入即可完成“执行-检查-修正”的闭环。

## 效果数据
内部测试显示，Outcomes 能显著提升任务质量和成功率：
- 任务成功率最高提升 **10 个百分点**。
- docx 文件生成质量提升 **8.4%**。
- pptx 文件生成质量提升 **10.1%**。
- 对于细节要求高、主观标准强的任务，效果尤为明显。

## 应用场景
适用于对准确性、格式或风格有严格要求的任务，如法律文书起草、报告生成等。