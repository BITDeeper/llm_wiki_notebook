---
type: entity
title: Sandbox
tags: [architecture, execution-environment, security, openai]
related: [agents-sdk, harness, modal, e2b, harness-compute-分离架构]
created: 2026-04-16
updated: 2026-04-16
sources: ["openai祭出gpt-5.4神装！codex同款harness全面开放.md"]
---

# Sandbox

Sandbox（沙盒）是 OpenAI [[Agents SDK]] 中的计算层，负责提供一个隔离的执行环境来运行代码、读写文件和安装依赖。

## 核心特性
- **完全隔离**：不持有任何 API Key 或敏感凭证，甚至可以断网运行。
- **标准化接口**：通过 [[Manifest]] 配置文件，支持在不同供应商（如 [[Modal]]、[[E2B]]）之间无缝切换。
- **容错能力**：支持快照和状态恢复，即使容器崩溃也能从检查点恢复任务。

## 生态支持
OpenAI 已原生支持七家头部沙盒厂商，包括 [[Modal]]、[[E2B]]、[[Cloudflare]]、[[Vercel]] 等，构建了“沙盒即服务”的标准化生态。