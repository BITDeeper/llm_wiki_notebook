---
type: entity
title: Design Conductor
created: 2026-05-24
updated: 2026-05-24
tags: [ai芯片设计, agent系统, llm, eda]
related: [verkor, vercore, 多agent协作架构, 任务执行范式]
sources: ["ai首次独自跑完芯片设计！219词进7nm图纸出，工程师全程没碰键盘.md"]
origin_date: 2026-03-01
---
# Design Conductor

[[verkor]] 开发的LLM任务编排框架（LLM harness），是首个独立完成从需求到GDSII版图全流程的AI芯片设计系统。

## 系统架构

Design Conductor本身不是一个AI模型，而是一套围绕大语言模型构建的任务编排框架。核心组件包括：

- **核心调度模块** — 统筹全局任务编排
- **上下文管理器** — 维护设计过程中的上下文信息
- **长期记忆系统** — 存储和检索历史设计知识
- **LLM会话** — 与大语言模型的交互接口
- **工具服务器** — 提供EDA工具链的调用能力
- **执行环境** — 分布式云端运行，支持多子Agent并行

## 子Agent分工

| 子Agent | 职责 |
|---------|------|
| Design Planning Agent | 需求分析、微架构和实施计划 |
| Design Review Agent | 逐场景审查方案 |
| Module Implementation Subagent | 实现模块、生成测试台、模块级测试 |
| System Integration Agent | RTL整合、端到端系统测试 |
| Root Cause Analysis Subagent | 从VCD波形定位功能错误根因、提出修复方案 |
| PPA Closure Subagent | 分析时序/面积/功耗问题，修改RTL和后端脚本 |

## 技术特点

Design Conductor的调试方式被形容为"像一个有洁癖的资深工程师"——面对寄存器写入不匹配的bug，它自主将VCD波形转成CSV，编写Python脚本逐行比对，精确定位到流水线flush逻辑缺陷，生成修复方案并验证通过。

## 与现有概念的关系

Design Conductor是 [[多agent协作架构]] 在芯片设计领域的具体工程实现，也是 [[任务执行范式]] 从软件向硬件领域的延伸。其"219词进图纸出"的工作模式与 [[vibe-coding]] 形成跨领域呼应。