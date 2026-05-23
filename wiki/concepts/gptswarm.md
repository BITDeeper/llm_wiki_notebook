---
type: concept
title: GPTSwarm
created: 2026-05-14
updated: 2026-05-14
tags: [多智能体系统, 递归自我改进, 图结构, LLM智能体]
related: [诸葛鸣晨, 递归式自我改进, recursive-si, agent-as-a-judge]
sources: ["离开meta后，田渊栋刚刚官宣创业了.md"]
origin_date: 2023-01-01
---
# GPTSwarm

GPTSwarm是由[[诸葛鸣晨]]提出的基于图结构的LLM智能体自组织协作框架，被认为是LLM时代最早期的[[递归式自我改进]]（RSI）系统范式之一。

## 核心思路

GPTSwarm首次系统性提出并验证了以下理念：

- **基于图的智能体组织：** 将多个LLM智能体组织为动态图结构，节点代表智能体，边代表信息流和协作关系
- **自组织协作：** 智能体通过动态图结构实现自组织，无需人工预设协作模式
- **能力演化：** 通过智能体之间的协同与反馈，系统整体能力可以持续演化提升

## 影响力

GPTSwarm的核心思路——基于Graph-based Agents的自组织协作框架——随后被大量后续多智能体与Agentic AI工作广泛采纳，成为LLM时代多智能体系统设计的重要参考范式。

## 在RSI研究中的地位

作为2023年[[诸葛鸣晨]]在MetaGPT时期的工作，GPTSwarm标志着RSI研究从理论探讨走向系统实现的早期尝试。它与后续的[[agent-as-a-judge|Agent-as-a-Judge]]（持续反馈与自我评估）和[[neuralcomputer|NeuralComputer]]（融合记忆、推理与自主演化的系统架构）共同构成了诸葛鸣晨在RSI方向的完整研究脉络。