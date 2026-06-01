---
type: concept
title: 最优GUI-Tool路径选择
created: 2026-05-31
updated: 2026-05-31
tags: [agent, gui, 工具调用, 路径选择, cua]
related: [混合动作空间, 工具使用不足与过度使用, 工具高效路径奖励]
sources: ["别光给agent加tool了，它根本选不明白！复旦×通义提出全新cua训练范式.md"]
---
# 最优GUI-Tool路径选择

最优GUI-Tool路径选择（Optimal GUI-Tool Path Selection）是指在长程任务中动态决定何时使用GUI actions、何时调用tools，从而形成更高效、更可靠的执行路径。

## 问题定义

这一概念将Computer Use Agent的核心挑战从"能不能用工具"重新定义为"会不会选路"。在[[混合动作空间]]中，模型需要在每一步做出决策：

- GUI操作泛化性强但慢，步骤长且误差容易累积
- Tool调用快且精确，但依赖工具覆盖与上下文条件
- 关键在于动态判断哪种方式在当前步骤更合适

## 典型案例

### 工具优于GUI的场景
在LibreOffice Calc中创建透视表：GUI-only方案需要冗长的菜单点击和参数配置，而工具调用可以一步完成结构化表格操作。

### GUI与Tool协同的场景
在VS Code中添加文件夹到workspace：先用工具调用完成结构化操作（路径明确、目标可验证），但当弹出信任确认对话框时，需要切换回GUI操作点击确认——这种状态不是简单tool call就能闭环的。

## 解决方案

[[toolcua|ToolCUA]]通过[[工具高效路径奖励]]设计，分别从"工具是否合适"（R_tool）和"路径是否更短"（R_length）两个维度优化路径选择能力。