---
type: source
title: "逼AI当山顶洞人！Claude防话痨插件爆火，网友：受够了AI废话"
tags: [ai-tools, prompt-engineering, claude-code, community, token-optimization]
related: [caveman, ai-yap-废话连篇, 超压缩通信模式, claude-code, ai-subscription-crisis]
created: 2026-04-06
updated: 2026-04-06
authors: [新智元, 元宇]
year: 2026
url: "https://mp.weixin.qq.qq.com/s/hZm3ErNDDp0pNykprwP88Q"
venue: "新智元"
sources: ["逼ai当山顶洞人！claude防话痨插件爆火，网友：受够了ai废话.md"]
---

# 摘要
本文报道了 [[caveman]] 插件在 Hacker News 上爆火的现象。该插件通过简单的提示词工程，强制 [[Claude Code]] 采用极简风格输出，声称能节省约 75% 的输出 Token。文章分析了其背后的 [[超压缩通信模式]] 逻辑，指出这反映了开发者社区对 [[ai-yap-废话连篇]] 现象的强烈不满，以及对 [[ai-subscription-crisis]]（AI 订阅制危机）的焦虑。

# 核心内容

## 插件机制
- **核心原理**：通过 `SKILL.md` 定义系统提示词，要求 AI 删除冠词、客套话和填充词，仅保留技术核心信息。
- **触发方式**：支持关键词触发（如 "caveman mode"）或斜杠命令调用。
- **强度分级**：
    - `lite`：去除填充词，保留完整句子。
    - `full`（默认）：省略虚词，允许碎片句，使用短词。
    - `ultra`：大量缩写，箭头表达因果，极致压缩。

## 效果与争议
- **Token 节省**：作者基准测试显示节省区间为 22%-87%（平均 65%），但主要针对**可见输出文本**，不压缩 Hidden Reasoning Tokens。
- **性能影响**：引用 2024 年和 2026 年论文指出，简洁约束不一定损害性能，甚至可能有益（除部分数学任务外）。
- **局限性**：加载插件本身消耗 Token；对于重度思考模型用户，实际成本节省有限。

## 社区反响
- GitHub Star 数一夜之间从几十冲破 2 万。
- 开发者将其视为对抗 AI 冗余输出的工具，表达了对为“废话”付费的厌倦。

# 精彩引述
> "删掉「the」「please」「thank you」……删掉一切不影响技术含义、却不断吞噬 token 的「人类客套」。"

> "我简直是在花 15 刀/100 万 Token 的价钱，来阅读 AI 对我的道歉和寒暄。"

# 相关条目
- [[caveman]]：插件实体页。
- [[ai-yap-废话连篇]]：该插件试图解决的现象。
- [[超压缩通信模式]]：插件背后的技术理念。