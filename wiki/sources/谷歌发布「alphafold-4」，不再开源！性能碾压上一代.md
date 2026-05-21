---
type: source
title: "谷歌发布「AlphaFold 4」，不再开源！性能碾压上一代"
tags: [ai-for-science, deepmind, protein-folding, open-source, controversy]
related: [isomorphic-labs, isodde, google-deepmind, alpha-fold-3, 科学-ai-闭源化]
created: 2026-02-20
updated: 2026-02-20
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/b3u6WFzIyMLFvez3o4ZJcQ"
venue: "新智元"
sources: ["谷歌发布「alphafold-4」，不再开源！性能碾压上一代.md"]
---

# 谷歌发布「AlphaFold 4」，不再开源！性能碾压上一代

## 概述
本文报道了谷歌旗下 [[Isomorphic Labs]] 发布的新一代 AI 药物设计引擎 [[IsoDDE]]（被称为「AlphaFold 4」）。该模型在性能上全面碾压 [[AlphaFold 3]]，能够发现隐藏的结合位点并高精度预测亲和力，但打破了 [[AlphaFold]] 系列的开源传统，选择完全闭源，引发了关于科学 AI 闭源化趋势的广泛争议。

## 核心发现

### 性能突破
- **难例处理**：在 Runs N' Poses 基准测试中，对于与训练数据相似度仅为 0-20% 的最难样本，[[IsoDDE]] 的成功率是 [[AlphaFold 3]] 的两倍多。
- **抗体识别**：在抗体识别任务上，其高精度预测成功率是 [[AlphaFold 3]] 的 2.3 倍，是开源模型 [[Boltz-2]] 的近 20 倍。
- **亲和力预测**：在无需实验数据的情况下，超越了传统的 FEP 物理模拟方法。
- **隐藏位点发现**：成功发现了 Cereblon 蛋白上科学家寻找 15 年未果的第二个隐藏结合位点，仅需几秒钟。

### 闭源争议
- **策略转变**：与 [[AlphaFold]] 系列此前开源代码、发表论文的做法不同，[[Isomorphic Labs]] 仅发布了 27 页的技术报告，不公开代码、模型架构和训练细节。
- **商业逻辑**：[[Isomorphic Labs]] 总裁 [[Max Jaderberg]] 明确表示不公开「秘方」。公司已获得 6 亿美元融资，并与礼来、诺华签署了价值近 30 亿美元的合作协议。
- **数据壁垒担忧**：外界担忧其性能优势主要来自于与药企合作获得的私有实验数据，而非纯粹的算法创新，这将导致开源社区无法追赶。

## 行业反应
- **学术界**：[[Mohammed AlQuraishi]] 评价其为「重大进步」，但对缺乏细节表示担忧，认为这可能导致科学进步的权力集中在商业巨头手中。
- **开源阵营**：[[Boltz-2]] 团队和 [[Deep Origin]] 等公司表示公开数据仍有改进空间，试图追赶，但承认私有数据可能构成巨大的护城河。

## 意义
本文标志着 [[科学-ai-闭源化]] 趋势的加剧。[[AlphaFold]] 曾是 AI 惠及全人类的标杆，而 [[IsoDDE]] 的闭源暗示了顶尖科学工具正从「公共品」转变为「商业资产」。