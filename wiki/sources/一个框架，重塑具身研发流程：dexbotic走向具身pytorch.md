---
type: source
title: "一个框架，重塑具身研发流程：Dexbotic走向具身PyTorch"
created: 2026-05-12
updated: 2026-05-12
tags: [具身智能, 开源框架, VLA, 强化学习, 机器人]
related: [dexbotic, rlinf, dm0, 原力灵机, robochallenge]
sources: ["一个框架，重塑具身研发流程：dexbotic走向具身pytorch.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/dD9fzylOj7erjO0m8g99Mw"
venue: 机器之心
---
# 一个框架，重塑具身研发流程：Dexbotic走向具身PyTorch

机器之心发布的深度报道，系统介绍了原力灵机开源的具身智能原生框架 [[dexbotic]] 的最新进展，重点覆盖以下内容：

## 核心内容

1. **V-L-A模块化解耦**：Dexbotic 2.0 在业界率先实现视觉编码器(V)、大语言模型(L)、动作专家(A)的彻底分离，允许独立升级与混搭。

2. **多源数据混合训练（Co-training）**：同一训练过程中同时摄入互联网多模态数据与机器人实操轨迹，联合优化语义理解与操作技能。

3. **SFT + RL闭环**：[[dexbotic]] 与 [[rlinf]] 达成战略合作，通过"乐高式协作"实现单一开发流中完成从SFT到RL后训练的全流程。

4. **[[dm0]] 模型验证**：全球首个从零训练的具身原生大模型，2.4B参数，在 [[robochallenge]] 真机评测中登顶单任务与多任务双项第一。

5. **生态扩展**：适配5款物理仿真器、8种机器人构型，服务数十家顶尖高校和产业机构，触达超千名开发者。

## 关键时间线

- 2025-10-20：Dexbotic VLA代码库开源
- 2026-01-15：GRPO轻量级后训练方案合入主线
- 2026-02-10：官宣与RLinf战略合作，发布DM0模型
- 2026-05-09：全面兼容UniNaVid，扩展至导航领域