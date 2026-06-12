---
type: entity
title: Lance（字节跳动统一多模态模型）
created: 2026-06-09
updated: 2026-06-09
tags: [多模态, 统一模型, 开源, 字节跳动, 视频编辑, 图像生成, moe]
related: [字节跳动intelligent-creation-lab, 原生理解生成统一, dual-stream-moe, sensenova-u1, 豆包]
sources: ["rss/3b小模型，把图像视频"看画改"全打通了，字节lance开源即冲上抱抱脸第一.md", "rss/3b小模型，把图像视频“看画改”全打通了，字节lance开源即冲上抱抱脸第一.md"]
origin_date: 2026-06-09
---
# Lance（字节跳动统一多模态模型）

Lance是字节跳动[[字节跳动intelligent-creation-lab|Intelligent Creation Lab]]开源的原生统一多模态模型，激活参数仅3B，在同一架构中覆盖图像/视频的理解、生成、编辑四类任务（X2T理解、X2I生成、X2V生成、X2X编辑）。

## 核心架构

- **[[dual-stream-moe|双流MoE]]**：理解路径处理文本token和语义视觉token，生成路径处理VAE latent token。两条路径共享多模态上下文，但在内部表征和模型容量上保持解耦。
- **[[mape-模态感知旋转位置编码|MaPE]]**：在时间维度加入模态/功能组信息，区分语义ViT token、clean VAE token（生成条件）和noisy VAE token（去噪目标），避免模型混淆功能不同的视觉token。

## 训练策略

采用分阶段多任务训练：预训练→持续训练→监督微调→强化学习。最大训练预算128 GPU。

关键发现：持续训练阶段仅加入编辑和主体驱动生成等多任务数据，基础生成能力仍持续提升，证明多任务数据不"稀释"生成能力，反而促进[[涌现泛化]]。

## 性能指标

| 基准 | 分数 | 备注 |
|------|------|------|
| VBench | 85.11 | 视频生成，统一模型中领先 |
| MVBench | 62.0 | 视频理解，统一模型最佳，超Show-o2 7B约11.3% |
| GenEval | 0.90 | 图像生成，与统一模型最佳持平 |
| GEdit-Bench | 7.30 | 图像编辑，统一模型最佳 |

## 能力覆盖

- **视频生成**：复杂文本指令生成具备自然运动和时序一致性的视频
- **视频编辑**：连续多轮编辑（发型、配饰、背景等），保持人物身份和动作一致性
- **视频理解**：动作识别、时序理解、OCR、视频问答
- **图像生成**：数量关系、属性绑定、空间布局、风格控制
- **图像编辑**：主体增删、局部替换、风格迁移、动作调整
- **图像理解**：OCR、知识问答、多图理解、空间关系判断

## 开源信息

- 论文：arXiv 2605.18678
- GitHub：https://github.com/bytedance/Lance
- HuggingFace：https://huggingface.co/bytedance-research/Lance
- 开源后冲上Hugging Face Trending第一

## 行业定位

Lance以3B激活参数实现四类任务统一，挑战了统一多模态必须依赖大参数量的行业惯性认知。与[[sensenova-u1|SenseNova-U1]]形成直接竞品关系——SenseNova-U1侧重图像理解生成统一，Lance进一步纳入视频编辑，且参数量更小。标志着[[原生理解生成统一]]赛道从"大而全"向"小而全"演进。