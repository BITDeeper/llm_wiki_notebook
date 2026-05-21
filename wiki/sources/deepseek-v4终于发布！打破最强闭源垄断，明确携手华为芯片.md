---
type: source
title: "DeepSeek V4终于发布！打破最强闭源垄断，明确携手华为芯片"
tags: [deepseek, model-release, hardware, ai-news]
related: [deepseek-v4, huawei, claude, gemini, dsa, 百万上下文标配, agentic-coding]
created: 2026-04-24
updated: 2026-04-24
authors: [henry, 鱼羊]
year: 2026
url: "https://mp.weixin.qq.com/s/avXt0DgRa_Aye7bIOtdgxQ"
venue: "量子位"
sources: ["deepseek-v4终于发布！打破最强闭源垄断，明确携手华为芯片.md"]
---

# DeepSeek V4终于发布！打破最强闭源垄断，明确携手华为芯片

## 摘要
本文报道了 DeepSeek-V4 系列模型的正式发布，包含 Pro 和 Flash 两个版本。文章指出，DeepSeek-V4-Pro 在 Agent 能力、世界知识和推理性能上达到国内与开源领域的领先水平，并在内部测评中体验优于 Claude Sonnet 4.5。此外，DeepSeek 宣布将在下半年批量适配华为算力，并实现了百万上下文（1M Context）的标配化。

## 核心要点

### 模型版本与性能
- **DeepSeek-V4-Pro**：对标顶级闭源模型，1.6T 总参数，49B 激活参数，上下文长度 1M。
- **DeepSeek-V4-Flash**：经济版，284B 总参数，13B 激活参数，上下文长度 1M。
- **Agentic Coding**：V4-Pro 已成为公司内部默认模型，据称体验优于 Sonnet 4.5，交付质量接近 Opus 4.6（非思考模式）。
- **世界知识**：仅稍逊于 Gemini-Pro-3.1。

### 技术突破
- **百万上下文标配**：将 1M 上下文从“高端功能”转变为默认配置，并同步开源。
- **DSA 与 Token 维度压缩**：通过全新的注意力机制在 token 维度进行压缩，结合 DSA（DeepSeek Sparse Attention）稀疏注意力，大幅降低计算和显存需求。

### 战略与合作
- **国产算力适配**：明确将于下半年批量使用华为算力。
- **Agent 优化**：针对 Claude Code、OpenClaw 等主流 Agent 产品进行了适配和优化。

### 企业文化
- **率道而行**：文章结尾引用荀子《非十二子》，强调不被外界赞誉或诽谤干扰，坚持自己的节奏。

## 评测案例
- **洗车测试**：V4 快速通过。
- **绝望的父亲**：在红绿色盲遗传学推理中，V4 未能一轮通过，显示了其在复杂逻辑推理上与 Opus 4.6 思考模式的差距。

## 迁移计划
- 旧模型名 `deepseek-chat` 和 `deepseek-reasoner` 将于三个月后（2026年7月24日）停用。