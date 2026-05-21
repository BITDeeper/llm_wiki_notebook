---
type: concept
title: 全栈本地 Agent
tags: [agent, 本地推理, 开源, 隐私]
related: [eigent, 本地推理, ai-subscription-crisis, claude-cowork]
created: 2026-01-16
updated: 2026-01-16
sources: ["真没招了！claude撞碎创业梦，华人博士开源逆袭.md"]
---

# 全栈本地 Agent

**全栈本地 Agent**（Full-stack Local Agent）是指从底层模型推理、用户界面（UI）、沙盒运行时到分布式调度全链路均支持在本地硬件上运行，且代码完全开源的 AI Agent 系统。

## 核心特征
- **数据所有权**：所有数据处理均在本地完成，不依赖云端 API，保障隐私和安全。
- **硬件利用**：支持利用消费级显卡（如 NVIDIA GeForce）运行企业级任务。
- **模型解耦**：架构与具体模型解耦，支持 Llama3、Mistral、Qwen、DeepSeek 等多种开源模型。
- **开源协议**：通常采用 Apache 2.0 等宽松协议，允许自由使用和修改。

## 市场背景
随着 [[ai-subscription-crisis]] 的加剧和开发者对“黑盒 SaaS”的厌倦，全栈本地 Agent 成为对抗巨头 SaaS 订阅制的一种重要路径。[[eigent]] 是该理念的典型代表。