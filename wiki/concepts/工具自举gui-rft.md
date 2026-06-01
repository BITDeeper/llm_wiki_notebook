---
type: concept
title: 工具自举GUI RFT
created: 2026-05-31
updated: 2026-05-31
tags: [训练方法, agent, 强化学习, sft, cua]
related: [toolcua, 交错gui-tool轨迹缩放流水线, 在线智能体强化学习]
sources: ["别光给agent加tool了，它根本选不明白！复旦×通义提出全新cua训练范式.md"]
---
# 工具自举GUI RFT

工具自举GUI RFT（Tool-Bootstrapped GUI RFT）是[[toolcua|ToolCUA]]第一阶段的训练方法，目标是为模型打下hybrid foundation，使其具备基本的工具使用和GUI-Tool切换能力。

## 训练流程

### Warmup SFT
在[[交错gui-tool轨迹缩放流水线]]合成的全部数据（D_all，约180k steps）上进行监督微调，学习多模态工具调用知识，包括：
- 工具用途与参数
- 工具返回结果
- 工具执行后的状态变化

### Single-turn RL
从critical switching steps中采样的数据（D_critical，约5k条）上进行单轮强化学习：
- 在明确的GUI-Tool切换步骤上采样多个completion
- 通过反馈校准模型在局部边界上的选择

## 设计理念

这一阶段不直接学习完整长程策略，而是先让模型"会用工具"和"在局部切换点上别选错"。消融实验表明，缺少这一阶段时，[[在线智能体强化学习|Online Agentic RL]]无法让模型学会稳定的工具调用行为——TIR长期偏低，tool calls在大部分训练过程中接近0。