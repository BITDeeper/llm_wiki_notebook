---
type: source
title: "老黄也来养马了！英伟达版Hermes Agent发布"
created: 2026-06-03
updated: 2026-06-03
tags: [英伟达, hermes-agent, agent部署, 企业级AI, 安全沙箱]
related: [英伟达, hermes-agent, nemoclaw, openshell, 自进化架构]
sources: ["老黄也来养马了！英伟达版hermes-agent发布.md"]
authors: [听雨, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/rnba1mOLGfv5IoTukMGTbg"
venue: 量子位
---
# 老黄也来养马了！英伟达版Hermes Agent发布

量子位报道，英伟达于2026年6月3日官方连发两条帖子，正式推出 [[hermes-agent]] + [[nemoclaw]] 企业级部署方案。这标志着英伟达从芯片厂商正式向 Agent 部署入口层扩张。

## 核心内容

文章总结了英伟达版 Hermes Agent 的三大核心特性：

1. **越用越聪明**：Hermes 内置学习闭环，完成复杂任务后自动总结为技能文件（SKILL.md），下次直接调用。还配备 Curator 自主运行机制，按周期给技能库打分、合并重复、归档过时。
2. **数据不出本地**：四层安全设计——凭证代理隔离、网络硬隔离、策略代码白名单（policy.yaml）、可观测性轨迹（NeMo Relay + Arize Phoenix）。
3. **技能持久化**：学到的技能存储在技能文件中而非对话记忆里，重装系统也不会丢失。

## 架构分层

- **模型层**：[[nemotron-3-super]]（120B-A12B），负责推理、选工具、起草回复
- **Harness层**：[[hermes-agent]]，负责技能、记忆、会话管理、消息桥接
- **运行时层**：[[openshell]]，负责文件和网络策略、凭证代理、沙箱隔离

## 时间线

- 2026-05-13：英伟达博客将 Hermes 适配到 RTX PC 和 DGX Spark（消费侧，配 Qwen 3.6）
- 2026-05-31：GTC Taipei 发布 [[rtx-spark]]，宣布 Hermes 和 [[openclaw]] 将集成 OpenShell
- 2026-06-03：正式推出企业级方案

## 关键论点

英伟达正在抢夺 Agent 入口——从"卖芯片"一路做到模型+蓝图+安全运行时+技能库层。谁掌握部署层，谁就掌握 Agent 时代的入口。但文章也提出核心疑问：企业敢不敢把数据交给会自己写技能的 Agent？