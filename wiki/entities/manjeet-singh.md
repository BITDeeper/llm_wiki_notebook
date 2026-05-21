---
type: entity
title: Manjeet Singh (maderix)
tags: [developer, reverse-engineering, apple, ane]
related: [ane-apple-neural-engine, anthropic, npu-training]
created: 2026-03-08
updated: 2026-03-08
sources: ["mac-mini不止养ai龙虾！苹果m4算力机密被曝光，claude立新功.md"]
---

# Manjeet Singh (maderix)

Manjeet Singh (网名 maderix) 是一名独立开发者和逆向工程师，以成功破解 [[ane-apple-neural-engine|Apple Neural Engine (ANE)]] 并证明其具备 AI 训练能力而闻名。

## 主要贡献

### ANE 逆向工程项目
Manjeet Singh 购买了一台 Mac mini M4，旨在利用其算力完成编译器项目。在过程中，他发现 ANE 的潜力被软件限制，于是发起了逆向工程挑战。

#### 关键成果
- **绕过 CoreML**：通过分析私有 API (`_ANEClient`) 和 MIL 语言，成功绕过苹果官方的 CoreML 框架，直接操控 ANE 硬件。
- **验证训练能力**：在 ANE 上成功训练了 Stories110M 模型（基于 Llama-2 架构，1.09亿参数），打破了“NPU 仅用于推理”的断言。
- **性能基准测试**：详细测量了 ANE 的 SRAM 限制、卷积与矩阵乘法的性能差异，以及 CoreML 的开销税。

#### 人机协作范式
Manjeet Singh 强调了 [[anthropic|Claude]] 在项目中的核心作用。他提出了一种新颖的研究范式：
- **人类角色**：直觉丰富的架构师，负责引导探索方向。
- **AI 角色**：编写代码和设计实验的工程师，负责数据推理和报告撰写。
他认为这种“人机协作”是进行系统研究的高效方式。

## 技术洞察
他的工作揭示了苹果 M4 芯片的几个关键真相：
1. **硬件无瓶颈**：ANE 硬件设计极其优秀，具备高能效比（6.6 TFLOPS/W）。
2. **软件是障碍**：CoreML 框架引入了巨大的性能开销，并人为限制了训练功能。
3. **营销数字游戏**：苹果宣称的“38 TOPS”是基于 INT8 的理论值，但硬件实际是 FP16 处理器，INT8 并无加速。

## 外部链接
- GitHub 项目：http://github.com/maderix/ANE
- Substack 分析：https://maderix.substack.com/p/inside-the-m4-apple-neural-engine

## 参见
- [[ane-apple-neural-engine]] — 关于其破解对象的详细分析。
- [[npu-training]] — 关于 NPU 训练技术的总结。