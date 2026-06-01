---
type: entity
title: OSWorld-MCP
created: 2026-05-31
updated: 2026-05-31
tags: [评测基准, cua, gui, 工具调用]
related: [toolcua, 混合动作空间]
sources: ["别光给agent加tool了，它根本选不明白！复旦×通义提出全新cua训练范式.md"]
---
# OSWorld-MCP

OSWorld-MCP是在传统OSWorld基准基础上引入hybrid GUI-Tool action space的评测基准，用于衡量模型在真实混合动作空间中的执行能力。

## 特点

- 覆盖典型GUI actions（点击、输入、拖拽、滚动）
- 包含150+工具
- 覆盖主流桌面应用（LibreOffice、VS Code、Chrome等）
- 支持Linux桌面环境评测

## 评测指标

- **Accuracy**：任务成功率
- **TIR（Tool Invocation Rate）**：是否在tool-beneficial tasks中使用工具，并在non-tool-beneficial tasks中避免工具
- **ACS（Average Completion Steps）**：平均完成步数，衡量执行效率

## 关键评测结果

[[toolcua|ToolCUA]]-8B在OSWorld-MCP上达到46.85%准确率，ACS仅为14.93 steps，是所有对比模型中最低的。