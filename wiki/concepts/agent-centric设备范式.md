---
type: concept
title: Agent-centric设备范式
created: 2026-05-26
updated: 2026-05-26
tags: [手机agent, 范式转移, ai手机, 设备范式]
related: [操作系统agent, 混合动作空间, phoneharness, 马维斯, 任务执行范式]
sources: ["从openai-ai-phone到gemini-on-android：ai手机时代需要怎样的agent-harness？.md"]
---
# Agent-centric设备范式

Agent-centric设备范式描述了手机从App-centric（用户手动拆解任务、逐App操作）转向Agent-centric（用户表达目标，Agent负责调度行动面、调用工具、完成可验证结果）的产品范式变化。

## 范式对比

### App-centric时代

- 用户自己负责拆解任务：打开哪个App、点哪里、复制什么、搜什么、确认什么
- 手机是工具集合，用户是操作者
- AI最多是聊天框里的回答者

### Agent-centric时代

- 用户表达目标，Agent负责调度行动
- Agent在[[混合动作空间]]中选择合适的行动面（CLI/GUI/MCP工具）
- 执行结果通过[[可验证副作用]]确认
- 手机从工具集合变为智能执行环境

## 行业信号

- **OpenAI AI Phone / AI Agent Phone**：将"AI原生手机"推到台前
- **Gemini on Android**：将系统级助手从问答带向跨App、多步骤任务协助
- **[[phoneharness]]**：为Agent-centric时代提供执行基础设施和验证机制

## 与现有概念的关系

Agent-centric设备范式可视为[[操作系统agent]]在手机场景的延伸和具体化。[[马维斯]]是这一范式的产品化尝试，PhoneHarness则是其研究基础设施。这一范式转移也是[[任务执行范式]]从模型开发转向智能体工程化系统的具体体现。

## 新瓶颈

文章指出，AI手机时代需要的不只是更强的模型，还需要：

1. 能承载真实执行的harness
2. 能验证执行结果的benchmark
3. 安全边界内的稳定执行能力