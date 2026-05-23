---
type: concept
title: ultrafast模式
created: 2026-05-14
updated: 2026-05-14
tags: [推理加速, ai编程, openai, 性能优化]
related: [codex, openai, gpt-5.6]
sources: ["gpt-5.6曝光了！openai砸钱宣战：换掉claude-code.md"]
origin_date: 2026-05-15
---
# ultrafast模式

ultrafast模式是 [[openai|OpenAI]] 即将在 [[codex|Codex]] 上推出的推理加速模式，预计2026年5月15日上线，在旗舰模型上实现2-3倍提速。

## 核心特征

- **非阉割版**：不是用小模型替代，而是在主力旗舰模型上实现真正的加速
- **延迟敏感优化**：专为延迟敏感型任务设计
- **体验质变**：对Agent循环、长任务流水线、浏览器自动化等需要等待的场景，体验将显著提升

## 速度优化演进

ultrafast模式是Codex的第三次速度升级：

| 阶段 | 模式 | 加速倍数 | 方式 |
|------|------|---------|------|
| 第一次 | /fast模式 | 1.5倍 | 模型优化 |
| 第二次 | Codex-Spark + Cerebras | 15倍 | 专用芯片 |
| 第三次 | ultrafast | 2-3倍 | 旗舰模型优化 |

ultrafast模式的意义在于：它不是依赖外部硬件或降级模型，而是直接在主力模型上实现加速，这意味着开发者无需在速度和质量之间做取舍。