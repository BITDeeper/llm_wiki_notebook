---
type: source
title: "北大校友Lilian Weng出镜，爆出120亿估值首个交互模型！"
created: 2026-05-12
updated: 2026-05-12
tags: [ai, 交互模型, thinking-machines-lab, lilian-weng, mira-murati, 实时交互]
related: [thinking-machines-lab, lilian-weng, mira-murati, 交互模型, 时间对齐微回合, tml-interaction-small]
sources: ["北大校友lilian-weng出镜，爆出120亿估值首个交互模型！.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/iEqptzS_vL8jVIjkA7sbQg"
venue: 新智元
---
# 北大校友Lilian Weng出镜，爆出120亿估值首个交互模型！

新智元关于 Thinking Machines Lab 发布首个交互模型的深度报道。北大校友、前OpenAI安全负责人 [[lilian-weng]] 首次出镜演示，展示了AI从"回合制对话"向"实时协作"的范式突破。

## 核心内容

- **产品发布**：[[thinking-machines-lab|TML]] 正式发布 [[交互模型]]（Interaction Models），实现200毫秒级实时人机交互。
- **技术架构**：采用 [[时间对齐微回合]] 架构，将对话切碎为200毫秒微小流片段进行感知-反馈循环；[[前台后台双模型协作]] 架构分离实时交互与深度推理。
- **核心创新**：[[原生感知]] 摒弃VAD外挂，模型通过语气、语速、呼吸声判断用户状态；[[视觉主动性]] 使模型能主动观察并开口。
- **竞争对比**：[[tml-interaction-small]]（12B活跃参数MoE）在 [[fd-bench]] 上全面领先GPT Realtime API。
- **融资背景**：TML在0产品0论文阶段完成20亿美元种子轮（a16z领投），估值120亿美元。

## 关键人物

- [[lilian-weng]]：首次出镜演示交互模型
- [[mira-murati]]：TML创始人，选择"交互"而非"参数"作为突破口