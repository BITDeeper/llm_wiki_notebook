---
type: concept
title: Agent Skill
created: 2026-04-11
updated: 2026-04-11
tags: [智能体, 技能库, 提示工程]
related: [gems, agent-loop, agent-memory]
sources: ["openclaw的风刮到了多模态生成，6b小模型超越nano-banana-2！.md"]
---

# Agent Skill

Agent Skill（智能体技能）是指智能体系统中用于扩展模型能力的模块化知识库。在 [[gems]] 框架中，它表现为一个可扩展的专家知识库。

## 工作机制

*   **按需加载**：系统不会一次性加载所有知识，而是根据当前任务的特征，动态触发并加载相关的详细指令。
*   **模块化扩展**：每个技能是一个独立的知识单元（例如“Aesthetic Drawing”用于提升审美，“Creative Drawing”用于增强创意）。

## 效果

通过 Agent Skill 机制，模型能够突破其原始训练数据的限制：
*   **提升艺术性**：在生成图像时，技能可以指导模型运用更高级的光影、构图技巧。
*   **增强创意**：例如在“漂浮的书”任务中，触发 Creative Drawing 技能后，模型能生成书页飞舞、星空点缀等更具想象力的画面。
*   **超越基线**：实验显示，加入 Skill 模块后，模型在 GenEval2 等任务上的得分有显著提升。