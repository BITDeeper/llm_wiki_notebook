---
type: entity
title: MT AIOS
tags: [操作系统, Linux, 发行版]
related: [摩尔线程, mtt-aibook, musa]
created: 2026-01-21
updated: 2026-01-21
sources: ["摩尔线程aibook一周实测：开箱即训的「ai-native」体验.md"]
---

# MT AIOS

MT AIOS 是 [[摩尔线程]] 基于 Linux 内核开发的操作系统，预装在 [[mtt-aibook]] 上。

## 核心功能
- **原生 AI 环境**：作为 AI 开发的“快乐老家”，解决了 Windows 下 WSL 兼容性差和双系统引导繁琐的问题。
- **预置工具链**：系统内置了 Python, VS Code, Jupyter Notebook 以及适配 [[musa]] 架构的 PyTorch，实现了 [[开箱即训]]。
- **多系统支持**：作为 Host OS，它支持通过 KVM 虚拟化技术运行 Windows，以及通过容器技术运行安卓应用，实现 [[一本三用]]。

## 设计理念
MT AIOS 的设计理念是让开发者从繁琐的环境配置中解放出来，专注于代码和模型本身，被视为国产 AI 算力生态的重要软件基础设施。