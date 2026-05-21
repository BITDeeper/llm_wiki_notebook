---
type: entity
title: UI-TARS
tags: [gui-agent, 开源模型, 字节跳动, 视觉语言模型]
related: [豆包手机, gui-agent, openai-operator, ferret-ui-lite]
created: 2025-12-10
updated: 2025-12-10
sources: ["00后大模型实习生「扒光」豆包手机！千字实测揭秘.md"]
---

# UI-TARS

UI-TARS 是字节跳动开源的 GUI Agent 模型，也是 [[豆包手机]] 核心能力的来源。该模型将屏幕视觉理解、逻辑推理、界面元素定位和操作整合在一个统一的架构中。

## 模型能力
UI-TARS 能够模拟人类操作，执行搜集信息、处理文档、订票、比价等各种复杂任务，甚至能在游戏中进行思考和行动。它代表了当前 GUI Agent 领域的 SOTA（State-of-the-Art）方案之一。

## 版本迭代
UI-TARS 的更新速度极快，2025 年内已迭代多次：
- **2025年1月**：第一代 UI-TARS 发布。
- **2025年4月**：UI-TARS-1.5 发布。
- **2025年9月**：UI-TARS-2 发布。

据分析，豆包手机可能使用了 Doubao-1.5-UI-TARS 的蒸馏版（用于标准模式）和完整版（用于 Pro 模式）。此外，豆包手机助手使用了 UI-TARS 2.0 闭源版本，针对手机场景进行了专门优化。

## 技术特点
- **多模态原生**：能够理解像素级的屏幕内容，包括颜色、空间关系和物体检测。
- **工具调用**：在 Pro 模式下，能够进行复杂的 System API 调用和多跳检索。
- **自我反思**：具备识别陷阱（如图片中的假按钮）并调整策略的能力。

## 行业对比
UI-TARS 与 [[OpenAI Operator]]、苹果的 [[Ferret-UI Lite]] 并列为 2025 年 GUI Agent 领域的代表性工作。与早期依赖 API 的 Agent 不同，UI-TARS 强调通过视觉直接理解 GUI，从而实现对现有软件的自动化操作。

## 参见
- [[豆包手机]]：UI-TARS 的主要落地载体。
- [[gui-agent]]：UI-TARS 所属的技术领域。