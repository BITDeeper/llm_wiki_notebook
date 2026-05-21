---
type: entity
title: SWE-Vision
tags: [vision-agent, framework, open-source, python, code-execution, sota]
related: [unipat-ai, babyvision, 代码增强视觉, 有状态执行, vla-视觉-语言-动作, claude-code]
created: 2026-03-16
updated: 2026-05-08
sources: ["500行极简开源框架，硬刚gptgemini视觉极限！.md", "五百行代码打造sota视觉智能体！unipat-ai最新开源.md"]
---

# SWE-Vision

[[SWE-Vision]] 是由 [[UniPat AI]] 开发的一个极简视觉智能体框架。它通过约 500 行 Python 代码实现，旨在通过 [[代码增强视觉]] 的技术范式，解决多模态大模型（VLM）在基础视觉任务中“看得见却算不准”的问题。

SWE-Vision 证明了 [[代码增强视觉]] 是一种有效的 [[test-time-scaling]] 方向。它揭示了对于视觉任务而言，提升性能不一定仅靠“多想几段文字”，也可以靠“多写几行代码”来进行更精细的观察。

## 核心架构

SWE-Vision 的设计哲学是“极简”与“通用”，其架构主要分为三层：

1.  **工具层**：
    仅定义了两个工具：`execute_code` 和 `finish`。这种设计避免了为特定视觉任务定制专用 API，而是利用模型最熟悉的 Python 语言作为通用接口。

2.  **控制层**：
    实现了一个标准的 Agentic Loop（`VLMToolCallAgent`）。它负责组织用户问题和图片，调用支持工具使用的聊天接口，并根据模型的决定循环调用工具或输出最终结果。支持 `reasoning` 模式，允许最多 100 轮迭代。

3.  **执行层**：
    基于 Docker 的持久化 Jupyter Kernel。与简单的 `exec()` 不同，它在隔离的 Docker 容器中启动 `ipykernel`（使用 `jupyter_client.BlockingKernelClient` 连接）。宿主与容器通过挂载目录交换文件，且内核状态（变量、导入、图像对象）在多次 `execute_code` 调用间保留。

## 工作流程

SWE-Vision 的工作流程模拟了人类数据科学家的分析过程：

1.  **观察**：接收用户问题和图片。
2.  **思考**：模型判断是否需要代码辅助（如测量、计数）。
3.  **实验**：调用 `execute_code`，利用 PIL、NumPy、matplotlib 等库进行分析。
4.  **验证**：代码输出（数值、图表）回流给模型，支持自我纠错。
5.  **结论**：调用 `finish` 输出最终答案。

## 关键特性

### 有状态执行
这是 SWE-Vision 区别于普通代码解释器的核心特性。[[有状态执行]] 允许模型像人类数据分析师一样工作：
- 第一轮：读图、检查尺寸。
- 第二轮：裁剪局部、查看边缘。
- 第三轮：统计颜色或测量距离。
- 第四轮：画辅助线进行确认。
这种分步迭代能力使得处理复杂图表和空间关系推理成为可能。

### 视觉自我验证
SWE-Vision 支持 Image-in/Image-out 机制。模型不仅能读取输入图像，还能生成可视化结果（如辅助线、标注图）并将其回传给自己进行二次观察和验证。这种闭环机制显著提升了结果的可靠性和可解释性。

### 可解释性
生成的代码路径提供了清晰的推理过程（“先分析、再测量、后验证”）。

## 性能表现

在五个主流视觉基准测试中，SWE-Vision 均超越了 [[GPT-5.2-xhigh]] 和 [[Seed-2.0-Pro]] 的原生输出，达到了 SOTA 水平：

| 基准测试 | 分数 | 能力维度 |
| :--- | :--- | :--- |
| [[BabyVision]] | 64.4 | 基础感知 |
| MathVision | 94.0 | 数学问题 |
| Zero-Bench-Sub | 50.1 | - |
| OmniSpatial | 69.0 | 空间理解 |
| CharXiv-RQ | 82.5 | - |

## 应用场景

SWE-Vision 特别适用于需要高精度视觉处理的场景，例如：
- 科学图表的精确测量与数值读取。
- 复杂场景中的物体计数与空间关系判断。
- 需要多步推理和中间验证的视觉任务。

## 外部链接

- GitHub: https://github.com/UniPat-AI/SWE-Vision