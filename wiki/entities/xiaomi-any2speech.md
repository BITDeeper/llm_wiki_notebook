---
type: entity
title: Xiaomi Any2Speech
tags: [tts, audio-generation, xiaomi, long-form]
related: [global-sentence-token, labeling-over-filtering, cot-思维链合成, xiaomi-da-model-team]
created: 2026-04-08
updated: 2026-04-08
sources: ["小米ai语音新框架：人人都能当声音导演.md"]
---

# Xiaomi Any2Speech

Xiaomi Any2Speech 是由 [[小米大模型应用团队]] 提出的“无边界长音频合成”框架。其核心目标是让 AI 超越传统的“念字”模式，具备理解声学空间与叙事逻辑的“导演能力”。

## 核心特性

- **多人语音互动**：支持播客、相声、广播剧等场景下的分角色对话，能呈现沉浸式多人对白。
- **声学场景统一建模**：将背景环境与人声融合，声音自带场景感，而非孤立输出。
- **长文本支持**：单次推理可生成最长约 10 分钟的连贯音频。
- **情绪递进**：能够理解剧本结构，使 AI 表演具有起伏和故事性。

## 技术架构

### Global-Sentence-Token (GST) 标注体系
这是实现“导演能力”的核心，分为三层：
- **Global 层级**：定全局，把控场景定位、说话人画像、整体情绪走向。
- **Sentence 层级**：管局部，调整每句话的语气、语速、表达意图。
- **Token 层级**：抠细节，处理重音、笑声、呼吸声等微观表达。

### 双路拆分架构
将传统 TTS 的黑盒过程拆解为可追溯、可干预的步骤：
- **Instruct 路**：输入用户硬约束（场景元数据、说话人身份等）。
- **Think 路**：模型自主推理表达规划（情绪弧线、逐句语气等）。

### 训练策略
- **[[Labeling over Filtering]]**：保留并利用传统 TTS 过滤掉的嘈杂数据，通过标注转化为训练燃料。
- **维度 Dropout**：训练中随机丢弃部分标注维度，增强模型在信息缺失情况下的鲁棒性。
