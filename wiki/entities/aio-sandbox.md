---
type: entity
title: AIO Sandbox
tags: [安全, 开源工具, docker, 字节跳动]
related: [deer-flow2, 字节跳动, 沙箱隔离执行]
created: 2026-03-23
updated: 2026-03-23
sources: ["字节版龙虾架构火爆github！开源获35k+-star，内置skill全家桶，原生适配飞书.md"]
---

# AIO Sandbox

[[aio-sandbox]] 是由 [[字节跳动]] 开源的安全沙箱环境，主要用于 AI 智能体的代码执行隔离。它是 [[deer-flow2]] 框架 Docker 部署模式下的核心组件。

## 功能与特性
- **隔离执行**：为 AI 智能体提供独立的运行环境，拥有独立的文件系统和 Bash 权限。
- **安全性**：防止智能体执行恶意代码或误操作破坏宿主机环境。
- **路径映射**：自动完成虚拟路径与物理路径的映射，确保开发环境与部署环境的一致性。

## 应用场景
在 Deer-Flow2 中，AIO Sandbox 负责运行需要代码执行的任务（如数据分析、脚本运行），确保了 [[沙箱隔离执行]] 的安全性。