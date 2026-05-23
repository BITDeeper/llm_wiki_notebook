---
type: concept
title: 用AI加速预训练
created: 2026-05-20
updated: 2026-05-20
tags: [ai, 预训练, 自我改进, anthropic, agi]
related: [anthropic, andrej-karpathy, mythos, 递归式自我改进, ai-takeoff, scaling-law]
sources: ["深度｜karpathy为何突然加入anthropic，只能当dario的「-2」？.md"]
---
# 用AI加速预训练

## 定义

指用AI模型（如Claude/Mythos）自身来发现更优训练架构、数据配比和实验方向，使模型改进的速度脱离人类研究者的线性节奏。这是 [[andrej-karpathy|Karpathy]] 加入 [[anthropic|Anthropic]] 后新子团队的核心使命。

## 战略背景

Anthropic的算力预算再大，也比不过微软撑腰的 [[openai|OpenAI]] 和坐拥TPU的谷歌。纯堆算力的竞赛赢不了，必须找到一种用更少算力训出更好模型的方法——即效率路线对冲算力军备竞赛。

## 与相关概念的关系

- **[[递归式自我改进]]**：本概念是递归式自我改进在预训练环节的具体实现路径
- **[[ai-takeoff]]**：如果飞轮真正转起来，可能成为通往AGI/ASI的加速通道
- **[[scaling-law]]**：效率路线若成功，可能改写纯堆算力的竞争逻辑
- **[[mythos|Mythos]]**：当前最强的工具，被用于改进"锤子本身的制造方式"

## 飞轮逻辑

```
用Mythos/Claude发现更优训练方法 → 训出更强模型 → 更强模型发现更优训练方法 → 循环加速
```

当这个飞轮真正转起来，"AI自我改进预训练"就不再只是研究方向，而是可能改写所有关于算力军备竞赛、数据壁垒、人才争夺的竞争维度。