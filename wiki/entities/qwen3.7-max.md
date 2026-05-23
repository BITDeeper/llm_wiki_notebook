---
type: entity
title: Qwen3.7-Max
created: 2026-05-21
updated: 2026-05-21
tags: [大模型, 阿里, 千问, 旗舰模型, 智能体]
related: [ath-alibaba-token-hub, 平头哥真武-m890, 智能体底座, 跨智能体框架泛化, deepseek-v4, claude-code, openclaw, hermes-agent]
sources: ["520，遇见国产「新模王」qwen3.7-max！.md"]
origin_date: 2026-05-20
---
# Qwen3.7-Max

Qwen3.7-Max 是阿里巴巴于 2026 年 5 月 20 日在阿里云峰会上正式发布的最新一代千问旗舰大语言模型，定位为**下一代通用智能体底座**。

## 核心定位

Qwen3.7-Max 不满足于仅充当"被调用的大脑"，而是下沉到硬件层进行系统级编程与优化。阿里希望将其打造为 Agent 时代的标准接口，让不同智能体框架都能以千问为首选底座。

## 评测成绩

- **Arena 全球大模型盲测总榜**：国产模型第一，超越 Kimi-K2.6、[[deepseek-v4|DeepSeek-v4 Pro]]、GLM-5.1，直逼 GPT/Claude/Gemini
- **Terminal Bench 2.0-Terminus**：最高 69.7 分，超越 DeepSeek-v4-pro-Max、Claude-Opus 4.6
- **编程智能体**：SWE-Pro、SWE-Multilingual 等多个权威测评 SOTA
- **通用智能体**：MCP-Atlas、MCP-Mark、Skillbench 评测国产新高
- **推理**：GPQA Diamond、HLE、HMMT 2026 Feb、IMOAnswerBench 均超越 Claude-Opus 4.6 及所有国产模型
- **通用能力**：IFBench 指令遵循 79.1 分，WMT24++、MAXIFE 多语言领先

## 35小时自主编程

Qwen3.7-Max 在[[平头哥真武-m890|平头哥真武 M890]]芯片上完成了一项工程创举：在仅有任务描述、SGLang Triton 参考实现和评测脚本的工作空间中，连续编程 35 小时，自主完成生产级注意力内核算子优化，实现比官方参考实现 **10 倍推理加速**。过程中进行了 432 次内核评估、1158 次工具调用。

## 跨框架泛化

Qwen3.7-Max 展现了[[跨智能体框架泛化]]能力，无需专门训练即可丝滑支持 [[claude-code]]、[[openclaw]]、[[hermes-agent]] 等主流智能体框架，类比操作系统的统一标准接口逻辑。

## 迭代背景

Qwen3.7-Max 是千问旗舰模型"月更"节奏的产物：3月 Qwen3.5（原生多模态智能体）→ 4月 Qwen3.6-Plus（现实世界智能体）→ 5月 Qwen3.7-Max（智能体新前沿）。这一迭代速度由 [[ath-alibaba-token-hub|ATH]] 全栈整合体系支撑。
