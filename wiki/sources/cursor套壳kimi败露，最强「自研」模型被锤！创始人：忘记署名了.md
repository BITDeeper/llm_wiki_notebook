---
type: source
title: "Cursor套壳Kimi败露，最强「自研」模型被锤！创始人：忘记署名了"
tags: [ai-industry, open-source, controversy, cursor, kimi, moonshot-ai]
related: [cursor, yue-zhi-an-mian, kimi-k2-5, composer-2, ai-洗代码]
created: 2026-03-21
updated: 2026-03-21
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/t9YN9rfZDBNDLIJYVKXBYQ"
venue: "量子位"
sources: ["cursor套壳kimi败露，最强「自研」模型被锤！创始人：忘记署名了.md"]
---

# Cursor套壳Kimi败露，最强「自研」模型被锤！创始人：忘记署名了

## 概述
本文报道了 AI 编程工具 [[cursor]] 被指虚假宣传“自研”模型 [[composer-2]]，实为套壳 [[月之暗面]] 的 [[kimi-k2-5]] 模型的事件。事件涉及开源协议署名权争议、技术溯源（Tokenizer 指纹）以及行业潜规则的讨论。

## 核心事件
- **虚假宣传败露**：Cursor 发布号称“自研”的 Composer 2 模型，声称通过“持续预训练”和“强化学习”实现性能飞跃。然而用户在 API 日志中发现底层模型名为 `Kimi K2.5`。
- **技术实锤**：[[月之暗面]] 预训练负责人 [[杜羽伦]] 通过分析证实，Composer 2 的 Tokenizer 与 Kimi K2.5 完全一致，判定其仅为 Kimi 的后训练版本。
- **违规指控**：[[月之暗面]] 联创 [[周昕宇]] 初期表示未收到授权申请。Cursor 的体量（ARR 20 亿美元）远超 Kimi 修改版 MIT 协议的免费署名门槛（月活 1 亿或收入 2000 万美元），但未在发布时署名。
- **公关反转**：在舆论压力下，双方删除了激烈言论，随后发布官方声明称是“经过授权的商业合作”，Cursor CEO [[aman-sanger]] 承认未署名是“疏忽”。

## 关键证据
1.  **API 日志泄露**：用户在 Cursor 的 API 调用日志中直接看到了 `Kimi K2.5` 字样。
2.  **Tokenizer 指纹**：杜羽伦指出两者的分词器特征完全一致，这是判定模型基础架构的关键技术证据。
3.  **协议条款**：Kimi K2.5 采用修改版 MIT 协议，对大规模商用有强制署名要求。

## 行业背景
文章指出，从零训练代码模型成本极高，套壳开源模型（尤其是中国模型）是初创公司的常见做法。
- **Cursor 前科**：其上一代 Composer 被疑套壳 [[智谱]] GLM（因 MIT 协议无强制署名未发酵）。
- **类似案例**：日本 [[rakuten-ai-3-0]] 被指套壳 [[DeepSeek V3]]，且曾故意删除原始许可文件。

## 观点与反思
- **透明度缺失**：Cursor 在博客中大谈技术细节（RL、MoE），却对基础模型来源只字不提，引发社区信任危机。
- **国产模型地位**：事件侧面印证了中国开源模型在全球供应链中的影响力，已成为被“偷”的对象。
- **“二道贩子”争议**：社区批评 Cursor 既想当模型贩子，又想装技术大牛的行为。