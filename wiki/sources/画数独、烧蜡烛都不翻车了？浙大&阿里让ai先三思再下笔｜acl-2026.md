---
type: source
title: "画数独、烧蜡烛都不翻车了？浙大&阿里让AI先三思再下笔｜ACL 2026"
created: 2026-05-26
updated: 2026-05-26
tags: [视觉生成, 推理, acl-2026, 浙江大学, 阿里巴巴, 强化学习]
related: [unified-thinker, 思考与执行解耦, hierareason-40k, 量子位, 场景白盒化推理]
sources: ["画数独、烧蜡烛都不翻车了？浙大&阿里让ai先三思再下笔｜acl-2026.md"]
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/ReY_b_MPz_uX6ELqxxtReQ"
venue: "量子位公众号"
---
# 画数独、烧蜡烛都不翻车了？浙大&阿里让AI先三思再下笔｜ACL 2026

## 摘要

本文报道了[[浙江大学]]与[[阿里巴巴]]联合提出的 [[unified-thinker|Unified Thinker]] 框架，该工作已被 ACL 2026 正式接收为 Oral。核心贡献是将视觉生成中的[[思考与执行解耦]]——独立的 Thinker 模块负责逻辑推理，Generator 模块负责像素合成，通过[[结构化推理轨迹]]和[[双阶段强化学习]]实现"脑手协同"。

## 核心内容

- **问题诊断**：开源视觉生成模型在推理密集型任务上落后闭源模型的根本原因不是生成器不够强，而是缺少独立的推理模块
- **架构创新**：Thinker-Generator 解耦设计，Thinker 不直接生成像素，而是将用户意图分解为分层、结构化的中间表示
- **数据工程**：构建 [[hierareason-40k|HieraReason-40K]] 数据集，包含4万条结构化推理轨迹样本
- **算法创新**：基于 GRPO 的双阶段强化学习——推理导向 RL（视觉质量反馈驱动 Thinker）+ 生成导向 RL（随机性采样优化 Generator 保真度）
- **实验验证**：在 [[risebench|RISEBench]] 和 [[wisebench|WiseBench]] 上取得明显提升，Thinker 可跨模型迁移

## 关键引用

- 论文链接：https://arxiv.org/pdf/2601.03127
- 代码仓库：https://github.com/LivingFutureLab/UnifiedThinker
- 数据链接：https://huggingface.co/datasets/demo911/HieraReason_40K