---
type: entity
title: Prime Sandboxes
tags: [infrastructure, rust, code-execution]
related: [prime-intellect, verifiers, intellect-3]
created: 2025-12-10
updated: 2025-12-10
sources: ["只用512张h200！106b模型靠分布式rl杀出重围，全网开源.md"]
---

# Prime Sandboxes

Prime Sandboxes 是 [[Prime Intellect]] 自研的高吞吐、安全代码执行系统，主要用于支持大规模 [[分布式强化学习]] 中的智能体代码类环境。

## 技术特点
- **基于 Rust**：使用 Rust 编写，直接与 Pod 通信。
- **绕过 K8s**：通过绕过 Kubernetes 控制面板，显著降低了通信延迟，实现了接近本地进程的延迟水平。
- **极速启动**：即使在大规模并发下，也能在 10 秒内启动，且每个节点可稳定运行数百个隔离沙箱。

## 应用场景
在 [[INTELLECT-3]] 的训练中，Prime Sandboxes 负责处理几千条并发的 rollout，确保外部代码的安全执行。通过与 [[Verifiers]] 的配合，它实现了沙箱启动与模型推理的完全并行化。