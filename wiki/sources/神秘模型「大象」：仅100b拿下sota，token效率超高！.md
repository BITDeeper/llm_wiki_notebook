---
type: source
title: "神秘模型「大象」：仅100B拿下SOTA，Token效率超高！"
tags: [模型评测, 蚂蚁集团, 效率优化, Agent]
related: [elephant-大象模型, inclusion-ai, ai-benchy, 智效比, ai-subscription-crisis]
created: 2026-04-21
updated: 2026-04-21
authors: [金磊]
year: 2026
url: "https://mp.weixin.qq.com/s/j1phsXkfNB9OLfnjlPInZw"
venue: "量子位"
sources: ["神秘模型「大象」：仅100b拿下sota，token效率超高！.md"]
---

# 神秘模型「大象」：仅100B拿下SOTA，Token效率超高！

## 概述
本文由量子位发布，独家揭秘了由蚂蚁 Inclusion AI 团队开发的神秘模型 **Elephant (大象)**。文章通过代码生成、文档整理和 Agent 任务模拟三个维度的实测，结合 AI BENCHY 榜单数据，论证了该模型在 100B 参数规模下实现了 SOTA 级别的性能，并具备极高的 Token 效率和响应速度。

## 核心观点
- **定位**：Elephant 被定位为“干活圣体”，主打“快、准、省”，类似于国产版的 Grok 4 Fast。
- **技术参数**：100B 参数，256K 上下文窗口，32K 输出长度。
- **核心优势**：
  - **高效率**：在代码修复和文档整理中表现出极低的 Token 消耗，输出简洁无废话。
  - **低延迟**：平均响应时间约 1 秒，远超同类竞品（通常 10-30 秒）。
  - **高一致性**：在 AI BENCHY 评测中获得 9.6 分（满分 10 分）。
- **局限性**：不擅长复杂长链规划（如出海战略），对非常新的知识（如 React 18 新特性）可能存在幻觉，对 Prompt 的明确性要求较高。

## 实测表现
1.  **代码修复**：能够精准定位 Bug 并给出极简修复方案，避免了冗余代码的生成。
2.  **文档处理**：在处理杂乱的会议纪要时，能精准提取关键信息并按 JSON 格式输出，比 Gemini-2.5-Flash-Lite 更节省 Token。
3.  **Agent 任务**：在 10 秒内完成了数据读取、计算、分析和自检的闭环。

## 行业背景
文章指出，随着 AI 应用从对话转向执行，Token 浪费问题日益严重（全球约 50% 的 Token 被浪费）。Elephant 的出现顺应了行业从“大而全”向“小而美”和工程落地转变的趋势，与 OpenAI 的 GPT-5.4 mini/nano 和谷歌的 Gemma 4 一样，旨在解决企业级应用中的成本和效率痛点。

## 相关条目
- [[elephant-大象模型]]：模型本体详细条目。
- [[inclusion-ai]]：模型开发团队。
- [[ai-benchy]]：评测基准。
- [[智效比]]：核心概念。
- [[ai-subscription-crisis]]：相关的行业成本危机背景。