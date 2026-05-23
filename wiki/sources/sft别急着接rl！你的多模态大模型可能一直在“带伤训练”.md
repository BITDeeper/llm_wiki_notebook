---
type: source
title: "SFT别急着接RL！你的多模态大模型可能一直在带伤训练"
created: 2026-05-17
updated: 2026-05-17
tags: [多模态大模型, 后训练, SFT, 强化学习, 分布对齐, PRISM]
related: [prism-分布对齐方法, sft-分布漂移问题, sft-rl后训练范式, 量子位]
sources: ["sft别急着接rl！你的多模态大模型可能一直在“带伤训练”.md"]
authors: [PRISM团队, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/2e-lyzzyn6IcfFH05Mm2AQ"
venue: 量子位公众号
---
# SFT别急着接RL！你的多模态大模型可能一直在"带伤训练"

量子位于2026年5月17日发布的PRISM团队投稿文章，揭示了多模态大模型后训练中SFT→RL两阶段范式存在的分布断层问题。

## 核心发现

文章指出，行业长期遵循"先SFT再RL"的后训练范式，但SFT阶段实际上在引入分布偏差。以Qwen3-VL-8B为例，SFT后准确率从63.3%降至58.1%（-5.2%），做完GRPO才回到基线水平——RL的大量工作实际上是在"还债"而非"提升"。

## 关键内容

- **两类偏差**：SFT在多模态场景下引入感知漂移（视觉定位出错）和推理漂移（逻辑推导失败），但用同一个token loss混合拟合，无法分别纠正。
- **Token级loss同权问题**：SFT不区分推理过程与格式模板，导致模型学到表面模式而非忠实推理能力。
- **PRISM方案**：提出SFT→分布对齐→RLVR三阶段流水线，核心是混合专家判别器（MoE Discriminator）和黑盒蒸馏。
- **实验验证**：8B模型平均提升+6.0，4B提升+4.4，在7个benchmark上绝大多数子项取得同基座最佳。

## 来源信息

- Arxiv: https://arxiv.org/abs/2604.28123
- Github: https://github.com/XIAO4579/PRISM
- 研究机构：[[香港科技大学广州]]、[[南洋理工大学]]、[[清华大学]]