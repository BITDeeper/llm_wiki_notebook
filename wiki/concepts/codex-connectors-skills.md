---
type: concept
title: Codex Connectors 和 Skills
created: 2026-05-23
updated: 2026-05-23
tags: [codex, agent, 工作流, 复用]
related: [codex, codex-maxxing, 办公技能框架]
sources: ["openai大神教你如何榨干codex.md"]
---
# Codex Connectors 和 Skills

[[codex]] 的可复用工作流模版系统。成功完成一次任务后，可将流程打包为 Connector 或 Skill，后续 Codex 不用重新学习，直接调用即可。体现了"一次学习、反复复用"的效率理念。

## 核心价值

- 将成功的任务执行流程抽象为可复用模版
- 避免重复学习和重复配置
- 与 [[codex-maxxing]] 方法论中的效率优化理念一致

## 与办公技能框架的区别

注意与已有的[[办公技能框架]]区分：办公技能框架是商汤提出的面向办公场景的技能编排架构，侧重于将办公能力拆解为独立、可编排的技能模块；Connectors 和 Skills 是 Codex 平台内的工作流复用机制，侧重于将成功执行过的任务流程打包供后续调用。