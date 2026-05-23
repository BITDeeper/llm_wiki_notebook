---
type: concept
title: On-Policy Distillation (OPD)
created: 2026-05-14
updated: 2026-05-14
tags: [蒸馏, 大模型训练, 后训练, 强化学习]
related: [思维模式一致性, 熵崩塌, token级别重叠率, off-policy冷启动, 教师对齐提示词, 清华thunlp-opd研究-202605, scaling-law]
sources: ["名师一定出高徒？清华团队最新揭秘：别再迷信大模型蒸馏的「免费午餐」.md"]
---
# On-Policy Distillation (OPD)

On-Policy Distillation（OPD）是大模型后训练（Post-training）pipeline 中的明星技术，通过提供密集的 Token 级别监督信号，将大模型（Teacher）的能力蒸馏到小模型（Student）。2026 年已被 Qwen3、MiMo、GLM-5 等主流模型广泛采用。

## 核心机制

OPD 的核心是在 Student 自身生成的轨迹（on-policy rollout）上，利用 Teacher 的输出分布提供逐 Token 的密集监督信号，相比强化学习（RL）的稀疏结果奖励，看起来像是"免费的午餐"。

## 关键局限（THUNLP 2026 研究）

清华大学 THUNLP 团队的系统性研究揭示了 OPD 的四大关键局限：

### 1. 思维模式匹配是先决条件
蒸馏成败取决于 [[思维模式一致性]]——Student 与 Teacher 的初始思维模式重叠度（[[token级别重叠率|Overlap Ratio]]）必须足够高，否则后续难以弥补。

### 2. 更强 Teacher ≠ 更好蒸馏
同 pipeline、同 recipe 下仅参数更大的 Teacher，不提供新可学习信息。真正有效的是经过额外 RL post-training 的 Teacher，因为它带来了新知识而非仅仅是规模红利。

### 3. 优化核心是重叠区域
剥离实验显示，仅对师生共同看好的高概率 Token（Overlap Token）计算损失，蒸馏性能几乎不打折扣。非重叠 Token 对优化几乎毫无贡献。

### 4. 长链扩展存在根本限制
在 15K token 响应中观察到 [[熵崩塌]]——Student 的前缀逐渐偏离 Teacher 分布，后半段奖励信号退化为噪音。全局 reward 有信息量但局部优化几何结构平坦。

## 实用配方

针对 OPD 的局限性，研究提出两剂药方：

1. **[[off-policy冷启动|Off-Policy 冷启动]]**：在 OPD 前先让 Student 在 Teacher 生成的 rollout 上进行轻量级 SFT，拉高初始 Overlap Ratio
2. **[[教师对齐提示词|Teacher-aligned Prompts]]**：让 OPD 使用更接近 Teacher 训练分布的 prompt，但需与 OOD prompt 混用以避免熵坍塌

## 与 Scaling Law 的关系

OPD 的发现对 [[scaling-law|Scaling Law]] 形成补充：单纯增大 Teacher 参数规模在蒸馏场景中边际效益极低，关键在于 Teacher 是否提供新知识和思维模式是否匹配——从"大力出奇迹"转向"匹配出奇迹"。