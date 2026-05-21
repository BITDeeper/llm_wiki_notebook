---
type: concept
title: Context Engineering
tags: [development, methodology, ai]
related: [prompt-engineering, openclaw, harness-engineering, goal-based-inputs]
created: 2026-03-07
updated: 2026-03-07
sources: ["openclaw引爆纽约集会，虾教日烧10亿tokens！老黄认证：史上最强软件.md"]
---

# Context Engineering

[[context-engineering]]（上下文工程）是一种新兴的 AI 开发范式，被认为是继 [[prompt-engineering]]（提示工程）之后的下一阶段。其核心理念是构建完整的系统上下文、目标和约束，而非仅仅依赖单一的自然语言指令。

## 核心观点
- **Prompt 已死**：在 [[openclaw]] 社区和纽约聚会中，普遍共识认为传统的 Prompt Engineering 已经结束。
- **系统化构建**：未来的 AI 开发不再是“一句话”，而是构建一整套系统。
- **Goal-based inputs**：强调基于目标的输入，让 AI 明确任务的目的和限制条件。

## 与 Prompt Engineering 的区别
| 特征 | Prompt Engineering | Context Engineering |
| :--- | :--- | :--- |
| **交互方式** | 单次指令或少量对话 | 持续的系统级上下文注入 |
| **关注点** | 指令的措辞和技巧 | 系统的目标、记忆、工具和约束 |
| **适用场景** | 简单问答、内容生成 | 复杂任务执行、Agent 行为 |
| **典型工具** | ChatGPT 界面 | [[openclaw]], ReAct, Agents |

## 实践案例
- **AI 采访人类**：通过让 AI 采访用户（询问用户身份、场景、竞争对手等）来构建丰富的上下文，从而生成更精准的方案。
- **团队共享大脑**：[[allie-k-miller]] 让团队成员接受 AI 采访，以同步团队的知识和上下文。

## 相关概念
- [[Harness Engineering]]：常与 Context Engineering 并列提及，可能指代对 AI 工具链的编排能力。
- [[个人智能体]]：Context Engineering 是构建高效个人智能体的关键技术。

## 参见
- [[openclaw]]：实践 Context Engineering 的代表性平台。
- [[任务执行范式]]：Context Engineering 支撑的宏观行业趋势。