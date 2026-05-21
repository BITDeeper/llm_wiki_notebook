---
type: concept
title: 技能复用
tags: [agent, optimization, efficiency]
related: [skill-library, skillcraft, cross-model-skill-transfer]
created: 2026-04-01
updated: 2026-04-01
sources: ["让agent把成功经验固化成skills，跨模型复用成功率100%.md"]
---

# 技能复用

**技能复用**（Skill Reuse）是指 [[agent]] 在遇到新任务时，直接调用已生成的技能模块，而非重新规划原子工具链的过程。

## 优势

相比于每次都重新规划，技能复用具有以下优势：
1.  **降低成本**：大幅减少推理过程中的 Token 消耗。
2.  **提高效率**：减少工具调用次数，加快任务执行速度。
3.  **提升稳定性**：复用已验证的成功路径，降低执行失败的概率。

## 实验证据

在 [[skillcraft]] 的实验中，开启技能复用模式后，[[gpt-5-2]] 的 Token 消耗降低了约 80%，成本从 1.77 美元降至 0.43 美元，同时成功率从 87% 提升至 90%。

## 跨模型复用

技能复用不仅限于同一模型内部，[[cross-model-skill-transfer]] 研究表明，由强模型生成的技能可以被弱模型复用，且仍能保持较高的成功率。