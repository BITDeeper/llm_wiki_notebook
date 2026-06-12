---
type: event
title: DiffusionGemma发布
created: 2026-06-11
updated: 2026-06-11
tags: [扩散模型, 文本生成, 谷歌, 开源, 模型发布]
related: [diffusiongemma, 谷歌, 英伟达, 扩散文本生成, inception-labs, mythos-5泄露事件-202606]
sources: ["rss/mythos阴影里谷歌悄悄发模型，速度暴涨4倍.md"]
origin_date: 2026-06-11
participants: [谷歌, 英伟达]
causes: [gemini-diffusion实验-2025]
effects: [diffusiongemma]
significance: medium
---
# DiffusionGemma发布

2026年6月11日，谷歌发布26B参数MoE扩散文本生成模型DiffusionGemma，采用Apache 2.0开源协议。该模型将图像扩散模型的去噪范式应用于文本生成，在H100上实现1000+ tokens/s的推理速度，比同规格自回归模型快4倍。

## 背景

- 2025年谷歌I/O展示Gemini Diffusion实验，采样速度1479 tokens/s，此后沉寂一年
- 2026年2月[[inception-labs|Inception Labs]]发布[[mercury-2|Mercury 2]]，业内首个投产扩散语言模型
- 2026年6月[[mythos-5泄露事件-202606|Mythos 5泄露事件]]几乎同期发生，构成"参数规模竞赛 vs 生成范式创新"的对照叙事

## 关键事实

- 26B参数MoE，推理激活3.8B，量化后18GB显存，单张4090可本地运行
- H100上1000+ tokens/s，RTX 5090上700+ tokens/s
- 双向注意力支持实时自我纠错，数独微调成功率从0%到80%
- 质量与Gemma 4存在差距，定位为速度敏感场景的互补方案
- [[英伟达]]全线护航，vLLM/MLX/Unsloth/NeMo全覆盖

## 意义

DiffusionGemma标志着[[扩散文本生成]]从实验走向开源工程落地的里程碑。谷歌虽然定位为"实验性"，但NVIDIA全线护航、全框架覆盖、Apache 2.0开源的投入力度远超技术Demo，表明谷歌对这条路线的战略重视。