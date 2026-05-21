---
type: entity
title: Hy3 Preview
tags: [大模型, 腾讯混元, moe, agent]
related: [腾讯混元, 姚顺雨, workbuddy, swe-bench, terminal-bench]
created: 2026-04-23
updated: 2026-04-23
sources: ["刚刚，姚顺雨首次交卷！腾讯混元3-preview大模型发布.md"]
---

# Hy3 Preview

Hy3 Preview 是腾讯混元团队在 [[姚顺雨]] 带领下重建后发布的首个基座模型。该模型定位为实用性强、高性价比的模型，主打 [[agent]] 和 [[coding]] 能力。

## 模型规格

- **总参数**：295B
- **激活参数**：21B
- **架构**：[[混合专家]]（MoE）

## 核心能力

- **Agent 能力**：在 ClawEval、WildClawBench 等评测中表现突出。
- **Coding 能力**：在 SWE-Bench Verified、Terminal-Bench 2.0 等基准中取得有竞争力的成绩。
- **逻辑推理**：实测中准确解决了复杂的循环赛得分问题，展现了处理反直觉条件的能力。
- **本地运行**：支持在本地设备上运行，能够直接操作本地文件和终端（通过 [[workbuddy]]）。

## 定价

- **输入价格**：最低 1.2 元/百万 tokens
- **缓存命中**：0.4 元/百万 tokens
- **输出价格**：最低 4 元/百万 tokens

## 实测案例

1. **数据清洗**：自动读取并整理散乱的业务数据文件，生成 HTML 报告。
2. **深度研究**：自主搜索并生成关于“AI Agent 在企业办公场景落地”的研究报告，包含对数据的主动质疑。
3. **游戏开发**：编写了一个功能完整的打字练习游戏（HTML 单文件），包含计时、准确率计算和界面反馈。