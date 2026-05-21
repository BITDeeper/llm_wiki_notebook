---
type: entity
title: VZVirtualMachine
tags: [apple, virtualization, security, framework]
related: [claude-cowork, sandbox-mechanism, anthropic]
created: 2026-01-16
updated: 2026-01-16
sources: ["claude版manus宕机，全网炸锅！顶级开发者曝光致命缺陷.md"]
---

# VZVirtualMachine

VZVirtualMachine 是苹果公司提供的虚拟化框架，属于 macOS 生态系统的一部分。它允许开发者创建和管理虚拟机，并在其中运行客户操作系统。

## 在 Claude Cowork 中的应用

[[Simon Willison]] 通过逆向工程发现，[[Anthropic]] 在 [[Claude Cowork]] 中使用了 `VZVirtualMachine` 框架。具体实现方式如下：

1.  **定制 Linux 环境**：Claude 会下载并启动一个自定义的 Linux 根文件系统。
2.  **任务执行隔离**：所有的文件操作和命令执行均在此虚拟机内部进行。
3.  **安全边界**：通过虚拟化技术，确保 AI 智能体的活动被严格限制在沙箱内，无法访问宿主机的敏感文件或系统配置。

## 技术意义
使用 VZVirtualMachine 而非简单的文件系统沙箱（如 chroot 或容器），提供了更强的隔离性。这表明 Anthropic 在安全性上采取了较为激进的措施，以防止 AI Agent 的误操作或恶意行为对用户设备造成损害。