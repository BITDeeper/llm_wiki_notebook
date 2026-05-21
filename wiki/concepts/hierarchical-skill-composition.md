---
type: concept
title: 分层技能组合
tags: [agent, architecture, risk]
related: [skillcraft, skill-library]
created: 2026-04-01
updated: 2026-04-01
sources: ["让agent把成功经验固化成skills，跨模型复用成功率100%.md"]
---

# 分层技能组合

**分层技能组合**（Hierarchical Skill Composition）是一种允许技能内部调用其他技能，从而形成多层嵌套技能树的机制。

## 潜在风险

虽然理论上分层组合能处理更复杂的任务，但 [[skillcraft]] 的实验发现其存在显著风险：

-   **不稳定性**：层级更深，未必更稳。
-   **错误级联**：低层的 Bug 会向上传播，一个边界条件错误可能拖垮整棵技能树。

## 建议

鉴于上述风险，现阶段更实用的路线是优先构建**高质量、浅层、可验证**的 [[skill-library]]，而非盲目追求技能树的深度。