---
type: event
title: "GPT-5.5 首破 ProgramBench"
created: 2026-05-13
updated: 2026-05-13
tags: [里程碑, 编程, 评测基准, gpt-5.5, openai]
related: [gpt-5.5, programbench, 从0重建程序范式, 推理算力scaling-law, noam-brown, claude-opus-4-7]
sources: ["gpt-5.5全球首破！0源码盲写程序，编程ai进入新纪元.md"]
origin_date: 2026-05-13
significance: high
participants: [gpt-5.5, openai, claude-opus-4-7, anthropic, noam-brown]
causes: [programbench]
effects: [推理算力scaling-law]
---
# GPT-5.5 首破 ProgramBench

## 事件概述

2026年5月13日，[[openai]] 的 [[gpt-5.5]] 在 [[programbench]] 上实现全球首破，成为首个在该基准上解出题目的AI模型。[[programbench]] 由 Meta 联合斯坦福、哈佛于数天前发布，200道题此前所有前沿模型通过率均为0%。

## 攻克任务

GPT-5.5 攻克的是 **cmatrix**——一个经典的终端"黑客帝国"数字雨效果程序。

### GPT-5.5 high（C语言）
- 先用10轮探索测试了40多种flag组合，彻底摸清原程序的CLI行为
- 一次性写出完整的C语言实现
- 仅用5次微调修补即通过全部测试
- 成本 $1.04，调用17次API

### GPT-5.5 xhigh（Python）
- 27步探索，把每一条CLI路径都摸了个遍
- 一气呵成写出完整的Python实现
- 通过全部行为测试

## 关键数据

- **通过率**：0.5%（1/200）
- **接近突破**：26个任务通过95%以上单元测试
- **累积直方图**：无论选什么指标（平均分、中位数、≥90%通过率、≥50%通过率），GPT-5.5 xhigh 都是第一

## 对比

[[claude-opus-4-7|Claude Opus 4.7]] xhigh 在同一任务上花费 $10.74、调用178次API，却因两个低级bug（大小写敏感、退出码错误）导致19个测试失败。

## 意义

1. **编程AI从零到一的突破**：标志着编程AI从"修bug/补函数"阶段进入"从零重建"阶段
2. **推理算力的实证验证**：[[推理算力scaling-law|推理算力 Scaling Law]] 得到迄今为止最直观的验证
3. **评测范式转移**：传统基准（SWE-bench 88.7%、GPQA 超PhD）正在"融化"，ProgramBench 提供了新的区分度

## 历史类比

回顾AI发展史上的"首破零"时刻：
- AlphaGo 首次击败职业棋手
- GPT-4 首次通过律师资格考试
- o1 首次在数学奥赛题上拿分

"从零到一"从来不是线性进步的起点，而是指数爆发的信号弹。