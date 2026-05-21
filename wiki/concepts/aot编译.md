---
type: concept
title: AOT编译
tags: [compiler, optimization, skvm]
related: [skvm, 原子能力, 代码固化]
created: 2026-04-26
updated: 2026-04-26
sources: ["skill也有语言虚拟机了！上交大开源skvm，实现一次编写，处处高效.md"]
---

# AOT编译

**AOT编译** (Ahead-of-Time Compilation) 指在程序运行之前进行的编译优化。在 [[SkVM]] 的上下文中，AOT 编译发生在 Skill 安装阶段，旨在将自然语言编写的 Skill 转换为更适合特定 LLM 和环境执行的形式。

## SkVM 中的 AOT 流程
SkVM 的 AOT 编译器包含三个主要 Pass：
1.  **PASS-1 (基于能力的编译)**：利用 [[原子能力]] 评估模型能力，对 Skill 进行降级以适配模型短板。
2.  **PASS-2 (环境绑定)**：自动提取依赖并生成安装脚本，解决环境缺失导致的运行时错误。
3.  **PASS-3 (并发提取)**：分析 Skill 中的 Workflow，将串行执行逻辑转换为可并行执行的 DAG 图。

## 优势
- **减少运行时开销**：将复杂的逻辑判断和依赖检查提前到安装阶段。
- **提升兼容性**：通过自动降级，使高阶 Skill 能在低配模型上运行。
- **提高并行度**：发掘并行机会，充分利用系统资源。