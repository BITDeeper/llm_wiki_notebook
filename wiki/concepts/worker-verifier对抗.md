---
type: concept
title: Worker-Verifier对抗关系
created: 2026-05-14
updated: 2026-05-14
tags: [agent, 质量保障, 对抗机制, 架构设计]
related: [mavis-minimax, team-engine, 多agent协作架构]
sources: ["重生之我在ai时代当老板：让一群agent互相pua.md"]
---
# Worker-Verifier对抗关系

[[mavis-minimax]] 多Agent架构中的核心设计模式。Worker执行任务，Verifier独立验收，两者形成制衡的工程机制。

## 运作逻辑

- **Worker停止的条件** = Verifier启动的原因
- **Verifier停止的条件** = 尽可能发现Worker的问题
- **发现的问题** = Worker重新启动的原因

三者形成闭环，通过多轮对抗式迭代交付高质量结果。

## 类比

类似企业中研发部门和质量部门的关系。又当选手又当裁判很难评判对错，但独立的质检部门可以从不同视角发现问题。

## 关键约束

停止条件由 [[team-engine]] 状态机硬性控制，而非模型自由判断。这确保了对抗迭代不会无限循环。

## 解决的问题

单Agent"很难形成自我制衡"——它可能很真诚地自检，但检查的仍然是自己刚刚构造出来的东西。Worker-Verifier对抗通过角色分离和独立上下文解决了这一结构性缺陷。