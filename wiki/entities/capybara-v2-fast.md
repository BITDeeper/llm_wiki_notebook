---
type: entity
title: Capybara v2 Fast
tags: [anthropic, model, context-window, leak, engineering]
related: [anthropic, mythos, claude-code, tengu, turn-boundary]
created: 2026-04-02
updated: 2026-04-02
sources: ["anthropic王炸claude基准测试泄露，卡皮巴拉细节曝光！还在代码里下毒.md"]
---

# Capybara v2 Fast

**Capybara v2 Fast**（代号：`capybara-v2-fast`）是 Anthropic 内部开发的大语言模型，于 2026 年 4 月初的 [[claude-code]] 源码泄露事件中被曝光。该模型以支持 **100 万 Token 上下文**（1M Context）为主要特征，被视为新一代模型的“入场券”。

## 技术特征
- **超长上下文**：支持 1M 上下文窗口，能够处理极长的代码库或文档。
- **Fast 变体**：按照 Anthropic 的命名惯例，`fast` 后缀通常指推理速度优化版本，暗示后续可能会有能力更强的旗舰版（如 `capybara-v2`）。

## 工程修复：提示词手术
源码分析显示，Capybara 在开发过程中遇到了一个严重的 Bug：模型会误判工具调用返回结果的形状，将其识别为对话的 [[Turn Boundary]]（轮次边界），导致任务未完成就过早停止。

Anthropic 并没有选择重新训练模型，而是通过一系列精细的工程手段（被称为“提示词手术”）修复了这一问题：
1. **强制边界标记**：在系统中引入 `Tool loaded.` 等硬性字符串，明确告知模型工具已加载。
2. **同级模块重定位**：调整 Prompt 结构，防止模型混淆工具结果和对话结束。
3. **信息压缩**：将原本独立的提醒文本直接嵌入到工具结果中，确保模型能捕捉到关键信息。
4. **非空强制**：针对空的工具输出强制添加非空标记，防止模型在空白处“断片”。

## 部署与测试
该模型的部署使用了 Anthropic 内部的 [[Tengu]] 灰度发布系统。代码注释显示，Anthropic 员工（`ant/internal` 用户）作为首批“金丝雀”优先测试了针对 Capybara 的优化，只有在内部验证通过后才会向外部用户解锁。

## 相关条目
- [[anthropic]] — 开发商。
- [[mythos]] — 同期泄露的疑似旗舰模型，可能与 Capybara 属于不同定位的产品线。
- [[提示词手术]] — 用于修复 Capybara 行为缺陷的工程方法。