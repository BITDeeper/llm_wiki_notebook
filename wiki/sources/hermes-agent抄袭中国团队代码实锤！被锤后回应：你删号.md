---
type: source
title: Hermes Agent抄袭中国团队代码实锤！被锤后回应：你删号
created: 2026-04-15
updated: 2026-04-15
tags: [ai-ethics, open-source, plagiarism, controversy, agent]
related: [ai-洗代码, hermes-agent, evomap, nous-research, 自进化架构]
authors: [新智元, KingHZ]
year: 2026
url: "https://mp.weixin.qq.com/s/BjsQJTtzhp1WvDoYsuFpFg"
venue: "新智元"
sources: ["hermes-agent抄袭中国团队代码实锤！被锤后回应：你删号.md"]
---

# Hermes Agent抄袭中国团队代码实锤！被锤后回应：你删号

## 概述
本文报道了一起引发 AI 震动的开源架构抄袭事件。硅谷知名实验室 [[nous-research]] 旗下的明星项目 [[hermes-agent]] 被指控系统性抄袭中国团队 [[evomap]] 的开源引擎 [[evolver]]。文章详细列举了双方代码架构的高度同构性，并揭示了被告方在证据确凿后的傲慢回应，引发了关于 [[ai-洗代码]] 和开源协议保护力的广泛讨论。

## 核心指控

### 1. 架构级抄袭
尽管 [[hermes-agent]] 使用 Node.js 而 [[evolver]] 使用 Python，两者的核心自进化循环存在 **10 步主循环一一对应** 的惊人相似性。
- **逻辑一致**: 从加载、评估、选择到优化、验证、持久化，逻辑骨架完全一致。
- **术语替换**: 文章列出了 **12 组术语系统性替换**（例如将 "Mutation" 替换为 "Diversification"），试图掩盖逻辑来源。

### 2. 零归属与态度傲慢
- 在 [[hermes-agent]] 的 7 份公开材料中，对 [[evomap]] 团队的工作只字未提，尽管引用了其他相关性更低的项目。
- 面对实锤，[[nous-research]] 仅回应 "Delete your account"（你删号），并试图用私有仓库的创建日期（2025年7月）来混淆视听，而自进化模块实际上是在 [[evolver]] 公开（2月1日）后的第36天（3月9日）才创建的。

## 行业背景：AI 洗代码常态化
文章指出，这并非孤例，而是 AI 时代“劣币驱逐良币”的缩影：
- **美团 Tabbit vs 陪读蛙**: 闭源发布直接使用 GPLv3 开源代码，甚至残留原字符串。
- **Cursor Composer 2**: 声称自研，实则套壳月之暗面 Kimi 模型。
- **三省六部 AI 朝廷**: 个人项目开源 21 小时即被 AI 重写，文本相似度仅 3%，但核心设计 100% 一致。

## 后续影响
面对无法维权的困境，[[evomap]] 团队被迫将核心模块改为混淆发布，并将协议从宽松的 MIT 更改为严格的 GPL-3.0。这一事件标志着开源社区在面对 AI 架构复制时的系统性失序。