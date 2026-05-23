---
type: concept
title: LLM 本质不可靠论
created: 2026-05-21
updated: 2026-05-21
tags: [llm, 幻觉, 可靠性, ai安全]
related: [yann-lecun, objective-driven-ai, 高阶幻觉, 认知投降, scaling-law]
sources: ["lecun炮轰hinton：他认可llm就是想摆烂退休了！.md"]
---
# LLM 本质不可靠论

[[yann-lecun|LeCun]] 提出的关于 LLM 根本局限性的理论观点：LLM 无法消除幻觉，训练误差和测试误差之间总有 gap，总会存在导致愚蠢行为的 prompt。

## 核心论点

- LLM 不能被做到可靠，无法阻止产生幻觉
- 训练误差和测试误差之间总有 gap
- 总会存在某个 prompt 让系统做出非常愚蠢的事情
- LLM 没有任何硬性约束强制完成任务，也没有机制预测任务是否被正确完成
- LLM 没有常识

## "被训练过"vs"变聪明了"

LeCun 指出一个关键现象：当他说 LLM 做不到某件事后，六个月后 LLM 就能做了——不是因为突然变聪明，而是因为那个问题变成了训练集的一部分。下一个版本当然能回答，但这不是真正的智能。

## LLM 擅长什么

- 语言本身就是推理载体的领域（数学、代码）
- 好的程序员，但不是软件架构师
- 能帮人类写代码，但改变的是人类角色——人类往抽象层级上走一层，决定造什么

## 与 Dario Amodei 的对立

LeCun 认为"它们已经用完数据了"，公开可用的有价值的文本数据已全部用完。这与 [[dario-amodei|Amodei]] 的"Scaling 没有墙"形成 AI 行业最根本的路线分歧之一。