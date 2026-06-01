---
type: concept
title: SEPL 自进化协议层
created: 2026-05-30
updated: 2026-05-30
tags: [智能体, 自进化, 协议, 闭环控制]
related: [autogenesis-protocol-agp, rspl-资源基底协议层, 闭环自进化流程, vlm质检闭环]
sources: ["leetcode-c++近满分！autogenesis要给智能体装上「自进化操作系统」.md"]
---
# SEPL 自进化协议层

SEPL（Self-Evolution Protocol Layer）是 [[autogenesis-protocol-agp|Autogenesis Protocol]] 的上层协议，负责定义"如何安全地进化"。

## 闭环自进化流程

SEPL 将自进化形式化为一个标准的[[闭环自进化流程|五步闭环操作]]：

1. **Reflect（反思）**：分析当前执行轨迹，识别失败点和改进空间
2. **Select（选择）**：从 [[rspl-资源基底协议层|RSPL]] 注册的资源中选择需要进化的目标
3. **Improve（改进）**：对选定资源执行具体的优化操作
4. **Evaluate（评估）**：验证改进后的资源是否真正提升了性能
5. **Commit（提交）**：通过 RSPL 的版本化接口将改进写入系统

## 关键特性

### 协议化而非经验主义
每一次修改都不是直接写进系统，而是通过 RSPL 的版本化接口完成。自进化不是一句"请你改进自己"的 Prompt，而是一套可组合、可追踪、可回滚的协议操作。

### 优化策略无关性
SEPL 不绑定特定优化方法，支持多种策略映射到同一操作接口：
- Reflection Optimizer
- TextGrad
- Reinforce++
- GRPO

这意味着 AGP 不只是一个系统实现，而是面向未来自进化 Agent 的通用协议框架。

## 与 VLM 质检闭环的关系

SEPL 的 Evaluate-Commit 闭环与 [[vlm质检闭环]] 理念一致——都在生成流程中嵌入评审环节，不合格则回退重试。但 SEPL 的范围更广，覆盖所有智能体资源的进化治理。