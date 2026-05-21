---
type: source
title: "你的电子老婆开源了！登顶GitHub热榜"
tags: [ai, open-source, virtual-companion, github, neuro-sama]
related: [airi, neuro-sama, moeru-ai, 自托管, rag-检索增强生成, webgpu, 本地推理]
created: 2026-03-04
updated: 2026-03-04
authors: [闻乐]
year: 2026
url: "https://mp.weixin.qq.com/s/Zz7lGunKVTRadwVBjXmBhA"
venue: "量子位"
sources: ["你的电子老婆开源了！登顶github热榜.md"]
---

# 你的电子老婆开源了！登顶GitHub热榜

本文报道了开源项目 [[airi]] 登顶 GitHub 热榜的事件。AIRI 是一个复刻知名 AI 虚拟主播 [[Neuro-sama]] 功能的开源虚拟伴侣项目，旨在解决“下播焦虑”，支持用户 [[自托管]] 部署，实现 7×24 小时在线陪伴。

## 核心功能

- **多模态交互**：支持实时语音聊天，形象支持 VRM 和 Live2D，具备眨眼、视线跟随等拟人化动作。
- **游戏集成**：
    - 通过 [[Mineflayer]] 接入《我的世界》，像真人一样挖矿、盖房、打怪。
    - 结合 YOLO 视觉识别接入《异星工厂》，通过大模型决策辅助生产。
- **平台兼容**：原生兼容 30+ 种大模型 API（如 OpenAI, DeepSeek, Kimi 等），支持 Discord 和 Telegram 聊天。
- **记忆机制**：内置 [[RAG-检索增强生成]] 和嵌入式数据库，能长期记忆聊天记录和用户说话风格。

## 技术架构

- **前端**：基于 [[WebGPU]]、WebAudio、WebAssembly，支持浏览器端流畅运行及 PWA。
- **桌面端**：基于 [[Tauri]] 框架（Rust 编写），调用 NVIDIA CUDA 和 Apple Metal 硬件加速。
- **本地推理**：支持 [[Ollama]] 本地推理，允许断网使用。
- **技术栈**：TypeScript + Vue.js + pnpm。

## 部署指南

文章详细介绍了在不同操作系统（macOS, Windows, Linux）下的环境准备和源码编译步骤，涉及 Git、Node.js、Rust 工具链及 Tauri 依赖库的安装。