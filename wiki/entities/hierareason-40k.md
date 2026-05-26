---
type: entity
title: HieraReason-40K
created: 2026-05-26
updated: 2026-05-26
tags: [数据集, 视觉生成, 推理轨迹, 结构化数据]
related: [unified-thinker, 结构化推理轨迹, 思考与执行解耦]
sources: ["画数独、烧蜡烛都不翻车了？浙大&阿里让ai先三思再下笔｜acl-2026.md"]
origin_date: 2026-01-01
---
# HieraReason-40K

HieraReason-40K 是由[[浙江大学]]与[[阿里巴巴]]联合构建的结构化推理轨迹数据集，包含 **4万条样本**，为 [[unified-thinker|Unified Thinker]] 框架提供训练基础。

## 核心特征

与传统图文对数据集的最大区别在于引入了[[结构化推理轨迹]]——模型在生成或编辑图像前，必须先完成一套固定思考链路：

1. **意图拆解**：判断用户真正想改什么
2. **逻辑具体化**：把抽象需求拆成具体视觉元素
3. **视觉转译**：转化成下游生成器能执行的指令

## 黄金法则

在图像编辑场景中，数据集遵循一条关键规则：**严禁在 Prompt 中描述未改变的区域**。这一策略极大减少了扩散模型在编辑过程中的语义漂移，确保生成过程精准聚焦。

## 获取方式

- 数据链接：https://huggingface.co/datasets/demo911/HieraReason_40K