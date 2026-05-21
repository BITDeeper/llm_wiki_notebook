---
type: source
title: "500行极简开源框架，硬刚GPT/Gemini视觉极限！"
tags: [vision-agent, code-execution, multimodal, benchmark, open-source]
related: [swe-vision, unipat-ai, babyvision, 代码增强视觉, 有状态执行]
created: 2026-03-16
updated: 2026-03-16
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/dkUqxzNFpLJbnQ6UQpPJdA"
venue: "新智元"
sources: ["500行极简开源框架，硬刚gptgemini视觉极限！.md"]
---

# 500行极简开源框架，硬刚GPT/Gemini视觉极限！

## 摘要
本文介绍了由 [[UniPat AI]] 开发的 [[SWE-Vision]] 框架。该框架通过仅 500 行代码实现了一个极简的视觉智能体，利用 [[代码增强视觉]] 的技术范式，让多模态大模型通过编写和执行 Python 代码来弥补其在基础视觉任务（如计数、测量）上的精度短板。在 [[BabyVision]] 等五个主流基准测试中，SWE-Vision 均取得了 SOTA 成绩，超越了 [[GPT-5.2-xhigh]] 和 [[Seed-2.0-Pro]] 的原生输出。

## 核心观点

### 模型的视觉缺陷
多模态大模型虽然代码能力极强，但在基础视觉任务上频繁失误。问题不在于“看不见”，而在于“无法精确处理”。例如在阅读柱状图时能感知大约数值，却无法精确计算比值；在复杂场景计数时容易出错。

### 解决方案：SWE-Vision
SWE-Vision 是一个极简的视觉智能体框架，其核心设计包括：
1.  **极简工具层**：仅保留 `execute_code` 和 `finish` 两个工具。
2.  **有状态执行**：基于 Docker 的持久化 Jupyter Kernel，支持变量和中间结果的跨轮次保留。
3.  **自我验证闭环**：模型生成的可视化结果（如辅助线）可回传给模型进行二次确认。

### 关键发现
- **有状态 vs 无状态**：持久化的 Kernel 允许模型像人类科学家一样分步实验（读图、裁剪、测量、验证），而不是一次性处理。
- **极简设计的优势**：通用的 Python 接口比专用的视觉 API 具有更好的泛化性。
- **测试时扩展（TTS）**：提升视觉性能不仅靠“多想”（思维链），还可以靠“多写代码”（工具调用）。

## 性能数据
在五个主流视觉基准测试中，SWE-Vision 均达到了当前最优水平：
- [[BabyVision]]: 64.4
- MathVision: 94.0
- Zero-Bench-Sub: 50.1
- OmniSpatial: 69.0
- CharXiv-RQ: 82.5

## 未来方向
文章指出，未来的视觉智能体需要多模态交错的轨迹数据，以学会判断何时使用工具、如何进行中间验证以及如何从失败中恢复。最终目标是实现“观察”与“计算”的原生融合。

## 链接
- 官网: https://unipat.ai
- 博客: https://unipat.ai/blog/SWE-Vision
- 开源地址: https://github.com/UniPat-AI/SWE-Vision