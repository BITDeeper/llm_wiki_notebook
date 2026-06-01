---
type: entity
title: ToolCUA
created: 2026-05-31
updated: 2026-05-31
tags: [agent, cua, 模型, 开源, 复旦大学, 通义]
related: [混合动作空间, osworld-mcp, 工具高效路径奖励, 在线智能体强化学习, 工具自举gui-rft]
sources: ["别光给agent加tool了，它根本选不明白！复旦×通义提出全新cua训练范式.md"]
origin_date: 2026-05-31
---
# ToolCUA

ToolCUA是由[[复旦大学]]和通义实验室MobileAgent团队联合提出的面向GUI-Tool混合动作空间的Computer Use Agent训练范式。代码、模型权重已全面开源。

## 核心目标

让模型学会什么时候走GUI，什么时候切Tool，什么时候不该调工具——即解决[[最优gui-tool路径选择]]问题。

## 训练范式

ToolCUA采用分阶段训练：

### 第一阶段：Offline Bootstrapping
- **数据合成**：通过[[交错gui-tool轨迹缩放流水线]]，从已有GUI-only轨迹合成interleaved GUI-Tool训练数据，覆盖约4k个unique tools，生成约180k steps数据
- **[[工具自举gui-rft|Tool-Bootstrapped GUI RFT]]**：先在合成数据上进行warmup SFT学习工具知识，再在关键切换步骤上进行single-turn RL校准局部边界选择

### 第二阶段：Online Agentic RL
- 在真实GUI-Tool环境中进行long-horizon rollout
- 核心优化目标是[[工具高效路径奖励]]（Tool-Efficient Path Reward），包含Tool Appropriateness Reward（R_tool）和Path Efficiency Reward（R_length）

## 评测结果

### OSWorld-MCP（主要基准）
- **准确率**：46.85%（相对基线Qwen3-VL-8B提升约66%）
- **平均步数**：14.93 steps（所有对比模型中最低）
- **工具调用率（TIR）**：从基线的8.41%提升到24.32%
- 超过Claude-4-Sonnet（43.54%）、GUI-Owl-1.5-8B（43.84%）、Gemini-3.1-Pro（41.14%）
- 逼近Claude-4.5-Sonnet（48.35%）和GUI-Owl-1.5-32B（48.05%）

### 跨平台泛化（WindowsAgentArena）
- 在unseen Windows桌面应用上达到33.8%
- 超过Qwen3-VL-235B的32.1%

### OOD泛化（multi_apps）
- 从baseline的9.8%提升到23.9%

## 消融实验关键结论

1. **缺少offline bootstrapping**：Online RL无法让模型学会稳定的工具调用，TIR长期偏低（约15%）
2. **缺少Tool-Efficient Path Reward**：准确率下降约7个百分点，训练不稳定
3. **Hybrid训练优于纯GUI训练**：GUI-only pipeline最终42.05%，GUI+Tool pipeline达到46.85%

## 开源资源

- 项目网站：https://x-plug.github.io/ToolCUA/
- 代码仓库：https://github.com/X-PLUG/ToolCUA
- 模型地址：https://huggingface.co/mPLUG/ToolCUA-8B