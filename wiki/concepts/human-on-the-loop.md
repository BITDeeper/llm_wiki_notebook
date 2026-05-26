---
type: concept
title: Human on the Loop
created: 2026-05-26
updated: 2026-05-26
tags: [人机协作, ai研发范式, 角色转型]
related: [面壁智能, forgetrain, ai造ai五级分类, 认知投降]
sources: ["刚刚，国产ai自己造了ai，全球首例！.md"]
---
# Human on the Loop

人类角色从"在循环中执行"（Human in the loop）转向"在循环外监督和设计"的新型协作模式。这是AI造AI时代研究员角色转型的核心描述。

## 从 Human in the Loop 到 Human on the Loop

- **Human in the loop**：人类在循环中执行具体代码编写、参数调整等操作
- **Human on the loop**：人类在循环外进行监督和设计，定义目标、搭建验证机制，具体执行交给AI

## 在ForgeTrain中的体现

在[[ForgeTrain]]系统中，AI研究员不再需要亲自编写CUDA算子和底层通信逻辑。他们变成研发系统的设计者和"守界者"——定义目标、搭建Harness考场，剩下的工作交给AI完成。

## 与[[认知投降]]的张力

Human on the loop强调人类保持监督和设计的主导权，但当AI越来越自主（向[[AI造AI五级分类]]的L4-L5演进），人类的监督是否真的有效？如果人类不再理解AI生成的代码细节，"守界"是否只是形式上的？