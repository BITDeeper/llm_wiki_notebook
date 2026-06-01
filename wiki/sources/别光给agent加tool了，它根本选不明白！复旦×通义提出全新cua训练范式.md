---
type: source
title: "别光给Agent加Tool了，它根本选不明白！复旦×通义提出全新CUA训练范式"
created: 2026-05-31
updated: 2026-05-31
tags: [agent, cua, 强化学习, gui, 工具调用, 复旦大学, 通义]
related: [toolcua, 混合动作空间, osworld-mcp, 工具高效路径奖励]
sources: ["别光给agent加tool了，它根本选不明白！复旦×通义提出全新cua训练范式.md"]
authors: [复旦大学, 通义实验室MobileAgent团队]
year: 2026
url: "https://mp.weixin.qq.com/s/Ws1o8K6Dxkb_Hjd7aOg_Lg"
venue: 量子位
---
# 别光给Agent加Tool了，它根本选不明白！复旦×通义提出全新CUA训练范式

本文由复旦大学与通义实验室MobileAgent团队联合投稿至量子位公众号，介绍了面向GUI-Tool混合动作空间的Computer Use Agent训练范式——[[toolcua|ToolCUA]]。

## 核心发现

文章揭示了一个反直觉现象：给Agent同时接上GUI操作和工具调用，准确率反而下降。模型在GUI和Tool之间不会选路，导致[[工具使用不足与过度使用]]两类典型失败。

## 关键内容

- **问题定义**：提出[[最优gui-tool路径选择]]问题，将CUA的核心挑战从"能不能用工具"重新定义为"会不会选路"
- **数据合成**：提出[[交错gui-tool轨迹缩放流水线]]，从GUI-only数据合成混合轨迹
- **分阶段训练**：第一阶段[[工具自举gui-rft]]打下hybrid foundation，第二阶段[[在线智能体强化学习]]优化trajectory-level路径选择
- **奖励设计**：提出[[工具高效路径奖励]]，包含R_tool和R_length两项轨迹级奖励
- **评测结果**：[[toolcua|ToolCUA]]-8B在[[osworld-mcp|OSWorld-MCP]]上达到46.85%准确率，超过Claude-4-Sonnet，逼近Claude-4.5-Sonnet

## 实验数据亮点

| 模型 | 准确率 | 平均步数 |
|------|--------|----------|
| Qwen3-VL-8B (baseline) | 28.23% | 19.34 |
| ToolCUA-8B | 46.85% | 14.93 |
| Claude-4-Sonnet | 43.54% | 19.2 |
| Claude-4.5-Sonnet | 48.35% | 19.1 |

## 跨平台泛化

在[[windowsagentarena|WindowsAgentArena]]上，ToolCUA在unseen Windows桌面应用上达到33.8%，超过Qwen3-VL-235B的32.1%。