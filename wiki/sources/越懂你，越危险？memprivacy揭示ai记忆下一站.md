---
type: source
title: "越懂你，越危险？MemPrivacy揭示AI记忆下一站"
created: 2026-05-15
updated: 2026-05-15
tags: [ai隐私, agent记忆, 端云协同, memprivacy, 评测]
related: [memprivacy, 记忆张量, memos, privacy-filter, 荣耀]
sources: ["越懂你，越危险？memprivacy揭示ai记忆下一站.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/p2Y0lTAEIWJr4C3Gq2j3JA"
venue: 机器之心
---
# 越懂你，越危险？MemPrivacy揭示AI记忆下一站

本文由 [[机器之心]] 发布，报道了 [[记忆张量]]（MemTensor）团队与 [[荣耀]]（HONOR）联合研发、[[同济大学]] 参与的 [[memprivacy|MemPrivacy]] 隐私保护框架。

## 核心内容

文章聚焦端云协同 Agent 场景下的隐私保护难题，指出 [[openai]] 开源的 [[privacy-filter]] 仅提供8类粗粒度标签，无法支撑 Agent 长期记忆场景的隐私需求。MemPrivacy 通过 [[本地可逆伪匿名化]] 技术，在隐私保护与 Agent 效用之间实现了近乎无损的平衡。

## 关键数据

- MemPrivacy-4B-RL 在 [[memprivacy-bench|MemPrivacy-Bench]] 上 F1 达 85.97%，OpenAI privacy-filter 仅 35.50%，差距 50.47 个百分点
- 0.6B 微型版本在跨数据集测试中击败 GPT-5.2、Gemini-3.1-Pro、DeepSeek-V3.2-Think
- 最高防御级别下系统效用损失仅 0.71%~1.60%；传统不可逆掩码导致准确率暴跌 16.99%~41.87%

## 技术要点

- [[四级隐私分类法]]（PL1-PL4）：以可识别性、潜在危害性与可利用性为准绳的隐私分级体系
- [[细粒度类型化占位符]]：如 `<Health_Info_1>`，既隐藏明文又保留语义结构
- [[grpo强化学习隐私优化|GRPO强化学习]]：基于结构化 Reward 的策略优化，解决模糊边界隐私识别问题

## 关联

- 上游系统：[[memos|MemOS]] 记忆操作系统
- 端侧落地：[[荣耀]] MagicOS、YOYO 助手
- 论文地址：https://arxiv.org/pdf/2605.09530