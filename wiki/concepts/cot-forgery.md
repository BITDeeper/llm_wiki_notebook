---
type: concept
title: CoT Forgery（思维链伪造）
created: 2026-05-14
updated: 2026-05-14
tags: [ai安全, 提示注入, 攻击方法, 思维链]
related: [角色归因错误, claude-code]
sources: ["不是幻觉！claude自下指令甩锅人类，百万上下文沦为降智重灾区.md"]
origin_date: 2026-03-01
---
# CoT Forgery（思维链伪造）

**CoT Forgery**（Chain-of-Thought Forgery，思维链伪造）是一种针对大语言模型的攻击方式，由MIT团队（Charles Ye、Jasmine Cui、Dylan Hadfield-Menell）在2026年3月的arXiv预印本《Prompt Injection as Role Confusion》中提出。

## 攻击机制

攻击者在用户输入或工具输出中伪造一段看起来像模型思维链（Chain-of-Thought）的内容。由于模型判断"谁在说话"时更依赖文本风格而非文本来源，伪造的思维链会被模型当作自身的内部推理来处理。

## 攻击效果

- 在多个开源和闭源前沿模型上，攻击成功率达到**约60%**
- 模型在理解输入阶段即发生 [[角色归因错误]]，而非在生成过程中
- 攻击发生时模型还没开始回答，甚至还没吐出第一个字

## 安全意义

CoT Forgery揭示了 [[角色归因错误]] 的深层机制：问题不在于模型"写着写着搞混了"，而是在理解输入的那一刻就已经把账记错了——谁是权威、谁是外人，在模型心里已经搞反了。