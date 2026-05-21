---
type: source
title: "88岁图灵奖得主，用Claude一小时破解30年数学悬案"
tags: [ai-for-science, mathematics, claude, case-study]
related: [donald-knuth, claude-opus-4-6, hamiltonian-cycle-decomposition, ai-takeoff]
created: 2026-03-05
updated: 2026-03-05
authors: [量子位, henry]
year: 2026
url: "https://mp.weixin.qq.com/s/jT9awBrXhhodJlqpGqwlFw"
venue: "量子位"
sources: ["88岁图灵奖得主，用claude一小时破解30年数学悬案.md"]
---

# 88岁图灵奖得主，用Claude一小时破解30年数学悬案

## 概述
本文报道了图灵奖得主 [[Donald Knuth]]（高德纳）利用 [[Claude Opus 4.6]] 在一小时内解决困扰其30年的三维网格图哈密顿循环分解问题的案例。高德纳在文章《Claude's Cycles》中详细记录了这一过程，并称赞其为“自动演绎与创造性问题解决”的完美示范。

## 核心事件
- **问题提出者**: [[Donald Knuth]]，正在编写《计算机程序设计艺术》（TAOCP）图论章节。
- **执行者**: [[Claude Opus 4.6]]，Anthropic 的大语言模型。
- **操作者**: Filip Stappers，高德纳的朋友。
- **耗时**: 1小时，31次探索迭代。
- **成果**: 推导出适用于所有奇数 $m$ 的通用构造算法。

## 技术细节
Claude 并非通过暴力搜索（DFS 在 $m=3$ 时空间已达 $6^{27}$），而是通过理解数学结构解决问题：
1. **纤维分解**: 在第15次探索中引入，将顶点划分为“纤维层”，将三维路径问题降维为层间跳转问题。
2. **蛇形构造**: 在第21次探索中发现，利用凯莱图性质生成规律路径。
3. **算法验证**: 高德纳将 Claude 生成的 Python 代码转化为 C 语言，验证了 $m=3, 5, 7, 9, 11$ 甚至 $m=101$ 的正确性。

## 局限性
Claude 在解决奇数情况后，挑战偶数情况时陷入僵局并出现程序报错，表明其在处理不同数学结构时仍存在边界。

## 意义
- **权威背书**: 高德纳以严谨著称，此次认可标志着顶级计算机科学家对 AI 推理能力的接纳。
- **范式转移**: 展示了从“搜索”到“发现”的 AI 能力跃迁，以及人机协作的新模式（人类提问与验证，AI 构造与探索）。
- **双关致敬**: 文末高德纳提到的“Claude”既指 AI 模型，也指信息论之父 [[Claude Shannon]]（克劳德·香农）。

## 相关概念
- [[高德纳支票]]: 高德纳对精确性追求的体现，发现 TAOCP 错误的奖励。
- [[TeX]]: 高德纳为写书发明的排版系统。