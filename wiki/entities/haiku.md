---
type: entity
title: Haiku
created: 2026-05-13
updated: 2026-05-13
tags: [模型, anthropic, 小模型, 裁判模型]
related: [claude-code, anthropic, goal模式, 独立裁判模型]
sources: ["澳洲放羊大叔引爆ai编程革命！claude-code急推goal模式，不干完不许停.md"]
---
# Haiku

Haiku 是 [[anthropic]] 开发的小型语言模型，在 [[claude-code]] 的 [[goal模式]] 中充当关键的验收裁判角色。

## 在 /goal 模式中的应用

在 Claude Code 的 /goal 功能中，Haiku 作为 [[独立裁判模型]] 使用：

- **职责**：每轮任务执行后，Haiku 审查对话记录和用户设定的完成条件，判断任务是否真正完成
- **约束**：不调用任何工具，不读文件，不跑命令，仅基于 Claude 在对话中产出的内容进行判断
- **反馈机制**：如果判定未完成，Haiku 返回具体理由（如"test_login.py 还有 2 个 failure"），该理由注入 Claude 下一轮上下文指导继续工作
- **完成判定**：如果 Haiku 认为已完成，目标自动清除，任务结束

## 设计哲学

这一设计解决了 AI Agent "自我评估"的根本缺陷——做事的人和验收的人不能是同一个。