---
type: entity
title: PhoneHarness Bench
created: 2026-05-26
updated: 2026-05-26
tags: [benchmark, 手机agent, 评测基准, 混合动作空间]
related: [phoneharness, 可验证副作用, 执行轨迹审计, 混合动作空间]
sources: ["从openai-ai-phone到gemini-on-android：ai手机时代需要怎样的agent-harness？.md"]
origin_date: 2026-05-26
---
# PhoneHarness Bench

PhoneHarness Bench是基于[[phoneharness]]构建的手机Agent评测基准，是首个面向[[混合动作空间]]和[[可验证副作用]]的手机Agent benchmark。

## 设计理念

PhoneHarness Bench不把任务写成抽象问答题，而是写成一段可以执行、记录和复核的phone workflow。核心评估逻辑：

- 不问"模型有没有说自己做完"
- 而是看"任务证据链是否支持它真的做完"

## 任务分布

Bench覆盖四类任务：

1. **device/system**：设备状态查询与系统设置变更
2. **single-app GUI**：单App内的视觉交互任务
3. **tool-assisted workflow**：需要工具辅助的工作流
4. **cross-app workflow**：跨App的复合任务

## 验证机制

每个task包含：

- 一个用户目标
- 一组可调用行动面
- 一个面向副作用的verifier

Agent执行过程中留下完整执行轨迹，benchmark通过task-specific verifier判断任务[[可验证副作用|副作用]]是否真实发生。

## 与PhoneHarness的关系

两者相互依赖：没有harness，benchmark很难覆盖真实混合任务；没有benchmark，harness的执行能力也很难被系统性评估。

## 数据集

- HuggingFace：https://huggingface.co/datasets/PhoneHarness/phoneharness-bench