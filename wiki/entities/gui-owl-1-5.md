---
type: entity
title: "GUI-Owl-1.5"
created: 2026-03-04
updated: 2026-03-04
tags: [multimodal-model, gui-agent, qwen, open-source]
related: [mobile-agent-v3-5, mrpo, gui-agent-shi-jie-mo-xing, tong-yi-qian-wen-tuan-dui]
sources: ["给gui-agent装上「世界模型」：阿里通义用混合数据+统一思维链，让模型学会预判屏幕变化.md"]
---

# GUI-Owl-1.5

**GUI-Owl-1.5** 是阿里巴巴通义实验室发布的原生 GUI Agent 基座模型家族。该系列模型在 20 多个主流 GUI Benchmark 上取得了开源领域领先的测试结果，提供了从 2B 到 32B 的多种参数尺寸，并针对不同部署场景解耦出 **Instruct** 和 **Thinking** 两种变体。

## 模型变体

### Instruct 模型
*   **定位**：专注极速响应与轻量化执行。
*   **特点**：不输出思考链，直接基于当前上下文给出动作决策。
*   **适用场景**：算力受限的端侧设备、隐私要求较高的本地环境、高频实时交互。
*   **代表性能**：32B-Instruct 在 OSWorld-Verified 上达到 56.5（开源 SOTA）。

### Thinking 模型
*   **定位**：专攻长程复杂任务与深度推理。
*   **特点**：具备完整的思维链能力，包含观察、记忆提取、反思与纠错等中间步骤。
*   **适用场景**：云端复杂推理、需要多步规划的任务（如 WebVoyager）。
*   **代表性能**：8B-Thinking 在 OSWorld-Verified 上达到 52.9，超越了参数量大得多的 Qwen3-VL-235B。

## 核心能力

### 1. 极致的 Grounding（视觉定位）能力
在 ScreenSpot-Pro 基准中，GUI-Owl-1.5-32B-Instruct 在不使用裁剪工具的 Base 设置下即达到 72.9，超越了 Gemini-3-Pro 等闭源模型。结合 Zoom-In 策略后，准确率飙升至 80.3。

### 2. 跨平台泛化性
模型在桌面端（OSWorld）、移动端（AndroidWorld）和浏览器端（WebArena）均表现出色，证明了其统一架构的有效性。

### 3. 工具协同与长程记忆
在 OSWorld-MCP（混合 GUI 操作与代码/API 调用）榜单中取得 47.6 分，并在 MemGUI-Bench（长程历史追溯）中位居第一梯队。

## 训练技术
模型性能的提升不仅源于参数规模，更依赖于：
*   **世界模型注入**：训练模型预判下一帧屏幕变化。
*   **统一思维链合成**：在训练阶段强制模型输出结构化的中间状态。
*   **MRPO 算法**：解决多平台强化学习中的梯度冲突与数值稳定性问题（如 [[Token-ID 对齐]]）。