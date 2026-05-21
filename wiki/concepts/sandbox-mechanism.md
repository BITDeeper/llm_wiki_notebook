---
type: concept
title: 沙箱机制
tags: [security, virtualization, isolation, ai-safety]
related: [claude-cowork, vzvirtualmachine, prompt-injection, claude-code]
created: 2026-01-16
updated: 2026-01-16
sources: ["claude版manus宕机，全网炸锅！顶级开发者曝光致命缺陷.md"]
---

# 沙箱机制

沙箱机制是一种安全实践，通过将应用程序或进程限制在隔离的执行环境中，以防止其对宿主系统造成未经预期的更改或损害。

## 在 AI Agent 中的应用

随着 [[通用智能体]]（如 [[Claude Cowork]]）开始具备执行文件操作和运行命令的能力，沙箱机制变得至关重要。

### 实现层级
1.  **文件系统隔离**：限制 AI 只能访问特定的目录。
2.  **容器化**：使用 Docker 等技术隔离进程环境。
3.  **虚拟机隔离**：利用如 [[VZVirtualMachine]] 等框架运行完整的独立操作系统。这是目前已知最高强度的隔离手段，被 Anthropic 用于 Claude Cowork。

### 安全价值
沙箱机制解决了“YOLO 模式”（即 `--dangerously-skip-permissions`）带来的巨大风险。在沙箱内，即使 AI 误执行了删除命令或恶意脚本，也不会影响用户的真实数据和系统配置。

### 局限性
虽然沙箱能有效防止对宿主系统的直接破坏，但它无法防御所有类型的攻击，特别是 [[提示词注入]]。攻击者仍可能通过诱导 AI 读取恶意内容，使其在沙箱内执行非预期的任务（例如，将沙箱内的私密数据通过网络传输出去）。