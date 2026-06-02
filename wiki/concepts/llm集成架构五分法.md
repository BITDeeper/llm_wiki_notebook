---
type: concept
title: LLM集成架构五分法
created: 2026-06-02
updated: 2026-06-02
tags: [架构设计, llm, avi, 多模态]
related: [音视频智能-avi, vla-视觉-语言-动作, 原生理解生成统一]
sources: ["2026最新综述-新国立&牛津等发布大模型时代的音视频智能（avi）全景指南.md"]
---
# LLM集成架构五分法

AVI综述论文系统梳理了五种将大语言模型（LLM）转化为音视频智能系统的架构方案，从模块化到端到端统一，构成了AVI系统的完整设计空间。

## 五种架构

1. **Encoder + LLM**：给LLM装上"眼睛"和"耳朵"，代表作Video-LLaMA 2
2. **LLM + Generator**：LLM作为大脑，调用外部工具生成音视频，代表作AudioGPT
3. **统一模型（Unified）**：感知和生成都在一个模型里完成，[[gpt-4o]]和[[qwen3-omni]]的方向
4. **具身VLA模型**：直接输出动作指令（Action），让机器人能听会看，关联[[vla-视觉-语言-动作]]

## 演进趋势

从模块化拼装（Encoder+LLM、LLM+Generator）向端到端统一（Unified）演进。统一架构消除了模块间的信息损耗，是[[原生理解生成统一]]理念在AVI领域的具体体现。