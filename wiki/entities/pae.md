---
type: entity
title: PAE
created: 2025-12-30
updated: 2025-12-30
tags: [architecture, engine, physical-ai, iot]
related: [涂鸦智能, hey-tuya, omni-mem, ad-rtn, doa, conversational-ai-engine, vision-ai-engine, iot-intelligence-engine]
sources: ["我们等了17年的ai「贾维斯」，这一次真正现身了？.md"]
---

# PAE

**PAE (Physical AI Engine)** 是 [[涂鸦智能]] 自研的物理 AI 引擎，也是 [[Hey Tuya]] 超级助手的核心技术底座。PAE 旨在解决传统 IoT 智能碎片化、响应慢、无记忆的问题，实现 AI 在物理世界的精准控制与毫秒级响应。

## 架构组成
PAE 包含三个核心引擎和两个关键系统：

### 核心引擎
1. **Conversational AI Engine**：面向自然语言多模态交互，集成了高精度语音活动检测（VAD），支持极速打断（300ms）和优雅打断（800ms）。
2. **Vision AI Engine**：面向视觉理解，使摄像头、机器人等设备能够“看清”环境，用于家庭守护或场景分析。
3. **IoT Intelligence Engine**：面向物理设备通信与控制，充当“万能遥控器”，指挥所有智能设备协同工作。

### 关键系统
- **[[OmniMem]]**：个体长记忆技术，使 AI 能够在多模态交互、设备行为模式、场景意图等维度实现持续学习与记忆。
- **[[AD-RTN]]**：全球边缘加速网络，提供高可靠、低时延（<86ms）的实时通信保障。
- **[[DOA]] (Dynamic Orchestration Agent)**：动态智能体编排引擎，通过可视化方式帮助开发者快速构建 AI 应用。

## 技术优势
- **记忆能力**：通过 [[OmniMem]] 实现“聊完不忘”，理解用户长期习惯。
- **极速响应**：基于 [[AD-RTN]] 网络，实现全球范围内的秒级响应和极速打断。
- **快速开发**：通过 [[DOA]] 编排引擎，将 AI 硬件开发周期从数月缩短至最快 1 天。