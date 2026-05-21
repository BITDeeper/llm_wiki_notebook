---
type: source
title: "斯坦福重磅研究登Nature！AI凭空造出前所未有蛋白质，超越AlphaGo"
tags: [ai, biology, nature, protein-design, genome, safety]
related: [evo-模型, 生成式基因组学, 噬菌体疗法, ai生物安全, phi-x174-噬菌体]
created: 2026-05-03
updated: 2026-05-03
authors: [新智元, KingHZ]
year: 2026
url: "https://mp.weixin.qq.com/s/eK2DGRtv2yoegAhjG0Qwjg"
venue: "新智元"
sources: ["斯坦福重磅研究登nature！ai凭空造出前所未有蛋白质，超越alphago.md"]
---

# 斯坦福重磅研究登Nature！AI凭空造出前所未有蛋白质，超越AlphaGo

## 摘要
斯坦福大学与 Arc Institute 的研究团队利用 [[evo-模型]]（一种基于 StripedHyena 2 架构的 DNA 语言模型），成功从零开始设计并合成了 16 种具有活性的 [[噬菌体疗法|噬菌体]]。这些 AI 设计的病毒不仅具备感染和复制能力，部分甚至比自然界中的病毒更具杀伤力。研究还发现，AI 生成的某些蛋白质结构在地球已知生命中找不到同源物，证明了 AI 具备超越自然进化的“发明”能力。

## 核心发现

- **成功率**：在合成的 302 个 AI 设计基因组中，有 16 个（约 5%）表现出完全的生命活性。
- **性能超越**：AI 设计的 [[phi-x174-噬菌体|Evo-Φ69]] 在 6 小时内扩增了 16-65 倍，远超天然 [[phi-x174-噬菌体]] 的 1.3-4 倍。
- **全新结构**：冷冻电镜分析显示，其中一个 AI 生成的衣壳蛋白结构在所有已知生物数据库中无同源物，属于真正的“无中生有”。
- **克服耐药性**：AI 设计的噬菌体“鸡尾酒”成功击溃了对天然 [[phi-x174-噬菌体]] 产生抗性的大肠杆菌菌株。

## 技术细节

该研究使用了 [[生成式基因组学]]的方法，利用 [[evo-模型]] 在 8.8 万亿 token 的 OpenGenome2 数据集上训练的成果。模型通过自回归方式预测和生成 DNA 序列，而非简单的编辑现有序列。这标志着 AI 从“理解生命”向“创造生命”的范式转移。

## 风险与伦理

文章引用了 Anthropic CEO 的警告，指出此类技术可能导致生物安全风险，普通人可能在 6-12 个月内具备制造超级病毒的能力。这引发了关于 [[ai生物安全]] 和开源模型监管的激烈讨论。

## 相关链接
- 论文预印本：[bioRxiv](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1)
- 开源项目：[GitHub - arcinstitute/evo2](https://github.com/arcinstitute/evo2)