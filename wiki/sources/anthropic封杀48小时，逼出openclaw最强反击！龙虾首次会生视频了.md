---
type: source
title: "Anthropic封杀48小时，逼出OpenClaw最强反击！龙虾首次会生视频了"
tags: [ai-agent, openclaw, anthropic, 多模态生成, 记忆机制]
related: [openclaw, anthropic, dreaming-记忆机制, claude-code, ai-subscription-crisis]
created: 2026-04-07
updated: 2026-04-07
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/HWf_VU7x9y4R9hNRA0C6SA"
venue: "新智元"
---

# Anthropic封杀48小时，逼出OpenClaw最强反击！龙虾首次会生视频了

## 摘要
本文报道了 Anthropic 切断 OpenClaw 免费接口后，OpenClaw 团队在 48 小时内发布的 2026.4.5 版本更新。该版本引入了原生视频/音乐生成功能，并上线了模拟人类睡眠的“梦境”记忆机制。文章还分析了 Anthropic 封杀背后的算力成本逻辑，以及开源项目在依赖商业大模型时的结构性困境。

## 核心事件
- **Anthropic 封杀令**：2026年4月4日，Anthropic 宣布 Claude Pro/Max 订阅不再覆盖 OpenClaw 等第三方工具，要求用户购买 API Key 或开通按量计费。
- **OpenClaw 反击**：4月5日，OpenClaw 发布 2026.4.5 版本，移除 Claude CLI 后端引导，强化 GPT-5.4 集成，并推出“梦境”记忆系统和多模态生成能力。

## 关键技术更新
1.  **多模态原生生成**：
    -   接入 11 家视频提供商（Runway, Google Lyria, ComfyUI 等）。
    -   支持音乐生成（Google Lyria, MiniMax）和图片生成（gpt-image-1 等）。
    -   引入异步任务追踪，生成过程不阻塞对话。
2.  **Dreaming 记忆机制**：
    -   模拟人类睡眠，分为浅睡眠（整理）、REM（反思）、深睡眠（固化）三个阶段。
    -   通过加权信号（相关性 > 频率）筛选短期记忆，提取“持久真相”写入长期记忆。
    -   灵感疑似来源于 Claude Code 泄露的 KAIROS/autoDream 系统。
3.  **工程优化**：
    -   优化提示词缓存复用率，降低 Token 消耗。
    -   工作流引擎改为进程内运行，减少通信开销。

## 商业与博弈
- **封杀理由**：Boris Cherny (Claude Code 之父) 指出，OpenClaw 绕过了缓存优化，导致重度用户算力成本极高（Cursor 内部研究称 $200 订阅对应 $5000 成本）。
- **关系反复**：OpenClaw 宣称“Moved on”，但随后文档更新称 CLI 层面的集成被允许（需付费）。
- **开源困境**：OpenClaw 虽然开源，但核心能力依赖单一商业模型（Anthropic/OpenAI），创始人 Peter Steinberger 已加入 OpenAI。

## 相关链接
- [[openclaw]] — 开源 AI Agent 工具。
- [[anthropic]] — AI 模型提供商。
- [[dreaming-记忆机制]] — 模拟人类睡眠的 AI 记忆管理系统。
- [[claude-code]] — Anthropic 的编程工具，其源码泄露启发了 Dreaming 功能。
- [[ai-subscription-crisis]] — 订阅制无法支撑 Agent 高消耗的现象。