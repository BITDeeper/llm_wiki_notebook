---
type: concept
title: Server-Client评测抽象
tags: [deployment, architecture, sim2real, evaluation]
related: [starvla, vla-视觉-语言-动作]
created: 2026-04-13
updated: 2026-04-13
sources: ["统一vla范式！港科大开源starvla乐高式架构，复现成本大幅降低.md"]
---

# Server-Client评测抽象

[[Server-Client评测抽象]]是 [[starvla]] 采用的一种模型部署与评测架构，旨在解决评测环境与模型代码强耦合的问题，并打通仿真到真机（Sim2Real）的部署路径。

## 架构设计
- **Server 端（模型侧）**：仅暴露 `predict_action()` 接口。加载 checkpoint 后启动策略服务，不依赖具体的评测环境库。
- **Client 端（环境侧）**：负责运行具体的仿真环境（如 LIBERO、SimplerEnv）或真机控制。它封装观测字典，通过 msgpack 协议与 Server 通信，并返回归一化动作。

## 优势
1. **解耦**：模型代码与评测环境代码完全分离，避免了环境依赖污染模型运行环境。
2. **Sim2Real 无缝迁移**：从仿真环境切换到真实机器人部署时，无需修改模型代码，只需将 Client 替换为真实的机器人控制器，提供相同格式的观测数据即可。
3. **标准化**：统一的通信协议使得不同基准的评测流程可以标准化，便于公平对比。