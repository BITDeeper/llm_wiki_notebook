---
type: entity
title: Scout
created: 2026-06-03
updated: 2026-06-03
tags: ["微软", "agent", "autopilot", "企业级", "ai-agent", "企业级ai", "microsoft-365"]
related: ["copilot", "微软", "微软build-2026", "openclaw", "mxc", "多agent协作架构", "peter-steinberger"]
sources: ["16亿windows用户，一夜冲进agent时代！.md", "很好！和openai分手后微软彻底疯了.md"]
origin_date: 2026-06-01
---
# Scout

微软在Build 2026大会上发布的**首个企业级Autopilot Agent**，定位为"永不下班的AI同事"。纳德拉将其定义为"企业级的龙虾"。Scout直接嵌入Microsoft 365工作流，能够自动处理邮件、日历、会议安排、任务跟进和起草回复等日常办公任务。

## 核心特性

- **独立身份**：拥有独立身份和生产力许可证，作为独立的数字员工存在，拥有自己的名字、人格、自定义连接器、上下文和记忆
- **7×24小时自主运行**：在企业租户中长效工作，作为"永不下班的AI同事"持续处理任务
- **工作流嵌入**：不是独立工具，而是直接进入Teams、Outlook等Microsoft 365应用
  - 可加入Teams群聊，自动处理讨论线程
  - 可常驻Outlook，盯着邮件
- **企业级管控**：从第一天起内置企业级安全、治理、身份管理和合规能力

## 与OpenClaw的关系

Scout的底层使用的正是 [[openclaw|OpenClaw]] 框架。微软将这个曾经因安全事故（删除用户收件箱）而闻名的开源AI Agent工具进行了企业级改造，通过 [[mxc|MXC]] 安全沙箱确保其在企业环境中的安全运行。[[peter-steinberger|Peter Steinberger]] 从OpenAI被挖走后，其创建的OpenClaw被微软产品化。

Scout的功能听起来类似 [[openclaw]]，但关键区别在于：Autopilot从设计之初就内置了企业级合规能力，而非事后修补。纳德拉明确表示"Autopilot就是企业级的龙虾"。

## 战略定位

Scout代表了AI从工具向"同事"的角色转变。通过嵌入已有办公工作流而非要求用户学习新工具，微软降低了企业AI采纳的门槛。Teams里的同事可能真不全是人了。

## 可用性

即日起对Copilot Frontier用户开放试用。纳德拉预告未来几个月会在Copilot里构建一整支Autopilot"数字团队"，Scout只是第一个。