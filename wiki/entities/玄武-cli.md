---
type: entity
title: 玄武 CLI
tags: [tool, deployment, open-source, 国产算力]
related: [清昴智能, ollama, clawdbot, mlguider, 国产算力适配, 异构算力统一纳管]
created: 2026-02-03
updated: 2026-02-03
sources: ["别跟风买mac-mini了！国产算力跑openclaw，只需5分钟.md"]
---

# 玄武 CLI

玄武 CLI 是由 [[清昴智能]] 开源的大模型部署工具，被称为“国产版 [[ollama]]”。它旨在为国产芯片（如华为昇腾、沐曦、燧原等）提供类似 Ollama 在 CUDA 生态中的极简部署体验。

## 核心特性
- **极简部署**：基于 Docker，解压即运行，最快 1 分钟启动服务。
- **命令兼容**：命令集（`xw serve`, `xw pull`, `xw run`）与 Ollama 高度一致，降低用户学习成本。
- **API 兼容**：完全兼容 OpenAI API 标准，支持 LangChain、LlamaIndex 等框架无缝切换。
- **智能适配**：自动识别底层芯片，并智能匹配最优推理引擎（如 [[mlguider]]、MindIE 或 vLLM）。

## 应用场景
- **本地 AI Agent**：作为 [[clawdbot]] 等 [[ai-agent]] 的本地模型后端，解决云端 API 调用产生的高额 Token 费用问题。
- **企业级部署**：配合集群版，实现国产异构算力的统一纳管与商业化运营。

## 技术架构
- **推理引擎**：支持自研的 [[mlguider]] 引擎，也支持芯片原生框架及社区通用框架。
- **离线运行**：支持完全离线部署，满足数据隐私敏感场景的需求。