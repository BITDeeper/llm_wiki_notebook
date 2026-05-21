---
type: concept
title: DiT (Diffusion Transformers)
tags: [generative-ai, computer-vision, model-architecture]
related: [saining-xie, world-models, ami]
created: 2026-03-10
updated: 2026-03-10
sources: ["lecun三顾茅庐，谢赛宁终于入伙！新公司获投10亿美元.md"]
---

# DiT (Diffusion Transformers)

DiT (Diffusion Transformers) 是一种结合了扩散模型 和 Transformer 架构的生成模型框架。该架构由 [[谢赛宁]] 等人在论文《Scalable Diffusion Models with Transformers》中提出。

## 架构特点
DiT 将传统的 U-Net 骨干网络替换为标准的 Transformer 架构（如 Vision Transformer），利用 Transformer 的强大扩展能力和注意力机制来处理扩散过程。
- **模块化设计**：利用 Transformer 的层归一化、注意力块和前馈网络。
- **可扩展性**：证明了通过简单地增加模型规模（参数量），可以持续提升生成质量，符合 [[Scaling Law]]。

## 影响力
DiT 架构极大地推动了视频生成和 [[世界模型]] 的发展。
- **视频生成**：OpenAI 的 Sora 等知名视频生成模型被认为采用了基于 DiT 的架构。
- **世界模拟**：由于视频本质上是对世界动态的模拟，DiT 被视为构建世界模型的重要基础技术之一。

## 关联人物
- **[[谢赛宁]]**：第一作者，因该工作被视为新生代视觉领域的代表人物，后被 [[Yann LeCun]] 邀请加入 [[AMI]] 担任首席科学家。