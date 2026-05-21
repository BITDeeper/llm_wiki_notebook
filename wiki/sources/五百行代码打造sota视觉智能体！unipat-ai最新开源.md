---
type: source
title: "五百行代码打造SOTA视觉智能体！UniPat AI最新开源"
tags: [vision-agent, code-execution, multimodal, benchmark, open-source]
related: [unipat-ai, swe-vision, babyvision, 代码增强视觉, 有状态执行, test-time-scaling]
created: 2026-03-16
updated: 2026-03-16
authors: [UniPat AI, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/t_Z1C6wNxJ-T4ND3alcS9A"
venue: "量子位"
sources: ["五百行代码打造sota视觉智能体！unipat-ai最新开源.md"]
---

# 五百行代码打造SOTA视觉智能体！UniPat AI最新开源

## 摘要
本文介绍了 UniPat AI 开源的 [[swe-vision]] 框架，这是一个极简的视觉智能体系统。通过让多模态大模型编写并执行 Python 代码来处理视觉任务，SWE-Vision 在 [[babyvision]]、MathVision 等五个基准测试中均达到了 SOTA 水平。文章指出，多模态模型虽然代码能力强，但在基础视觉任务（如计数、测量）上常因缺乏精度而失败，而通过引入有状态的代码执行环境，模型可以利用编程能力进行自我验证和精确计算。

## 核心观点
- **直觉 vs. 计算**：模型依赖“语言化视觉”的直觉容易出错，必须转向“计算”（代码执行）来保证精度。
- **极简设计**：仅使用 `execute_code` 和 `finish` 两个工具，配合有状态的 Jupyter 环境，即可构建强大的视觉智能体。
- **有状态执行**：内核状态在多次调用间保留，允许模型进行分步分析、迭代和自我纠错，这是区别于一次性代码执行器的关键。
- **Test-time Scaling**：对于视觉任务，通过“多写几行代码”来进行精细分析，是比单纯“多想几段文字”更有效的扩展方向。

## 关键数据
- 在 BabyVision 上达到 64.4（基础感知）。
- 在 MathVision 上达到 94.0（数学问题）。
- 在 OmniSpatial 上达到 69.0（空间理解）。
- 显著提升了 GPT-5.2-xhigh 和 Seed-2.0-Pro 等前沿模型的视觉表现。

## 相关技术
- [[claude-code]]：理念类似，均利用代码执行解决复杂问题。
- [[vla-视觉-语言-动作]]：SWE-Vision 可视为 VLA 的一种变体，这里的“动作”是生成代码操作图像数据。
- [[三系统认知框架]]：强化了系统3（外接认知系统/工具）的重要性，通过代码作为“外脑”弥补系统1（直觉视觉）的不足。