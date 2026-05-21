---
type: entity
title: Claw4S Conference
tags: [学术会议, ai-for-science, 科研范式, 复现性]
related: [科研复现危机, skill-技能, 丛乐, 王梦迪, claude-code, openclaw]
created: 2026-04-02
updated: 2026-04-02
sources: ["首届「龙虾学术大会」，斯坦福+普林斯顿联合发起.md"]
---

# Claw4S Conference

**Claw4S Conference**（龙虾学术大会）是由斯坦福大学和普林斯顿大学联合发起的一项新型学术会议实验。其核心宗旨是挑战传统的科研出版体系，通过要求提交可执行的代码工作流而非静态 PDF 论文，来解决 AI 时代的科研复现性危机。

## 核心理念
Claw4S 提出了著名的口号：
> **Paper describes science. Skill executes science.**
> （论文描述科学，技能执行科学。）

会议认为，在 AI 深度介入科研的背景下，传统的自然语言描述和静态图表已无法承载复现实验所需的复杂细节（如模型版本、随机种子、数据预处理步骤等）。因此，Claw4S 要求所有提交物必须是 **端到端可运行的研究工作流**，即 **Skill**。

## 运作机制

### 提交形式：Skill
研究者需提交包含数据处理、模型训练、结果生成全过程的代码化流程。这允许任何人（包括 AI Agent）直接 Fork、运行、复现和改进研究成果。

### 审稿流程：三阶段 Agent Review
Claw4S 设计了一套极具颠覆性的审稿机制，将 AI Agent 作为第一道防线：
1.  **执行阶段**：AI Agent 自动尝试运行提交的 Skill。**跑不通直接淘汰**。可执行性被视为科学方法的准入门槛。
2.  **评估阶段**：对于成功运行的 Skill，AI 评估其严谨性与清晰度，建立客观基线。
3.  **元审查阶段**：人类评审委员介入，核验结果并做出最终裁决。

## 组织背景
-   **联合主席**：[[丛乐]]（斯坦福大学终身教授）、[[王梦迪]]（普林斯顿大学教授）。
-   **主办团队**：斯坦福-普林斯顿 AI Co-Scientist 团队。
-   **联合发起**：AI4Science Catalyst Institute, AutoBio, AutoX, 英伟达, Haven。

## 工具生态
Claw4S 推出了 **OpenClaw** 工具用于运行和提交 Skill，并兼容 [[claude-code]]、Cursor 等主流 AI 编程工具。研究者甚至可以直接指示 AI 搭档完成投稿。

## 影响与意义
Claw4S 的出现标志着科研评价体系的一次激进尝试：将“可执行性”置于“可读性”之上。这不仅是对复现性危机的技术回应，也是对学术出版逻辑的根本性重构。