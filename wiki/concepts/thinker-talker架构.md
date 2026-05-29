---
type: concept
title: Thinker-Talker 架构
created: 2026-05-27
updated: 2026-05-27
tags: [语音大模型, 架构范式, 模态转换]
related: [模态代沟, 输出端对齐, textpro-slm]
sources: ["speech-llm-的下一个突破口：你的语音大模型可以是个「带韵律的文本模型」.md"]
---
# Thinker-Talker 架构

Thinker-Talker 是当前语音大模型的主流架构范式，属于 Speech LLM 行业应对 [[模态代沟]] 的第一波改进方案。

## 架构原理

- **Thinker**：负责输出文本 Token，利用文本大模型的推理能力进行"思考"
- **Talker**：将 Thinker 输出的文本转换为对应的语音输出

## 优势

- 通过文本模态进行缓冲，避免了传统端到端语音大模型的严重降智
- 让 Thinker 输出文本的模式可以一定程度上拉高模型的性能上限

## 局限

- 即使使用 Thinker 做文本输出，仍有相当一部分 Modality Gap 无法消除
- 输入端仍然接收语义稀疏的 Speech Embeddings，大模型需要消耗大量能力理解原始语音信号
- 即使语音预训练数据拉到百万甚至千万小时级别，降智问题依旧存在

## 与 TextPro-SLM 的对比

[[textpro-slm]] 认为 Thinker-Talker 虽然在输出端与文本大模型保持一致，但输入端仍然没有向文本大模型靠拢。TextPro-SLM 通过 [[语义-韵律解耦]] 从输入端彻底解决问题。