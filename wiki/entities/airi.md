---
type: entity
title: AIRI
tags: [ai, open-source, virtual-companion, typescript, rust]
related: [neuro-sama, moeru-ai, mineflayer, tauri, rag-检索增强生成, webgpu, 本地推理]
created: 2026-03-04
updated: 2026-03-04
sources: ["你的电子老婆开源了！登顶github热榜.md"]
---

# AIRI

AIRI 是一个开源的 AI 虚拟伴侣/虚拟主播项目，旨在复刻 [[Neuro-sama]] 的功能。其核心卖点是支持 [[自托管]]，允许用户在自己的设备上部署，从而实现 7×24 小时的在线陪伴，解决了传统虚拟主播“下播即断联”的问题。

## 核心特性

- **拟人化形象**：支持 VRM 和 Live2D 模型，具备自动眨眼、视线跟随等微动作。
- **游戏能力**：
    - 集成 [[Mineflayer]]，可在《我的世界》中执行复杂操作。
    - 利用 YOLO 视觉识别接入《异星工厂》。
- **记忆与性格**：通过 [[RAG-检索增强生成]] 技术实现长期记忆，能模仿用户说话风格。
- **多模型支持**：原生兼容 OpenAI、DeepSeek、Kimi 等 30 余种大模型 API。
- **隐私与离线**：支持 [[Ollama]] 进行 [[本地推理]]，无需联网即可使用。

## 技术实现

- **Web 端**：利用 [[WebGPU]] 等现代 Web 技术，确保浏览器内的高性能渲染。
- **桌面端**：使用 [[Tauri]]（Rust 后端）构建，利用系统级硬件加速（CUDA/Metal）。
- **开发栈**：TypeScript, Vue.js, pnpm。

## 开发背景

项目由 [[moeru-ai]] 团队开发，作为对闭源且不稳定的 Neuro-sama 的开源替代方案，填补了市场上可自建、可定制的虚拟伴侣工具的空白。