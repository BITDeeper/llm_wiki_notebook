---
type: event
title: MemPrivacy 发布
created: 2026-05-15
updated: 2026-05-15
tags: [ai隐私, 开源发布, 端云协同, agent记忆]
related: [memprivacy, 记忆张量, 荣耀, 同济大学, privacy-filter, memos]
sources: ["越懂你，越危险？memprivacy揭示ai记忆下一站.md"]
origin_date: 2026-05-06
participants: [记忆张量, 荣耀, 同济大学]
causes: [privacy-filter]
effects: [memprivacy]
significance: high
---
# MemPrivacy 发布

2026 年 5 月上旬（约 5 月 6 日），[[记忆张量]]（MemTensor）联合 [[荣耀]]（HONOR）、[[同济大学]] 正式开源发布面向端云协同 Agent 的隐私保护框架 [[memprivacy|MemPrivacy]]。

## 背景

2026 年 4 月 22 日，[[openai|OpenAI]] 开源了 [[privacy-filter]] 轻量级隐私过滤模型。仅仅两周后，记忆张量团队拿出了更激进的答案——这是端侧厂商与记忆基础设施团队首次在"Agent 隐私"领域深度合作。

## 关键成果

- MemPrivacy-4B-RL 在 [[memprivacy-bench|MemPrivacy-Bench]] 上 F1 达 85.97%，OpenAI privacy-filter 仅 35.50%
- 0.6B 微型版本在跨数据集测试中击败 GPT-5.2、Gemini-3.1-Pro、DeepSeek-V3.2-Think
- 发布当天登顶 Hugging Face Daily & Weekly Papers TOP1

## 产业意义

- 标志着端侧厂商（荣耀）与 AI 记忆基础设施团队的首次深度合作
- 中国团队在隐私 AI 基础设施上对 OpenAI 的快速追赶（两周内响应）
- 为下一代云边协同架构（Edge-Cloud Agents）提供了标杆级工程解法
- 对 GDPR 等严苛数据合规的企业级出海应用具有重要商业价值

## 开源资源

- 论文：arxiv:2605.09530
- 代码：https://github.com/MemTensor/MemPrivacy
- 模型：https://huggingface.co/collections/IAAR-Shanghai/memprivacy