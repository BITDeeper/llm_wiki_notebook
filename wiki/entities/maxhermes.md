---
type: entity
title: MaxHermes
tags: [agent, product, cloud, saas]
related: [minimax, m2-7, hermes-agent, harness]
created: 2026-04-18
updated: 2026-04-18
sources: ["b站爆了！hermes首度直播回应「抄袭」，minimax提前杀入harness赛点.md"]
---

# MaxHermes

MaxHermes 是 MiniMax 推出的全球首个云端沙箱 AI 智能体产品，基于开源项目 [[hermes-agent]] 构建。它旨在解决本地部署门槛高的问题，并提供持续进化的智能体服务。

## 核心特性：学习闭环
与依赖人工预设能力的传统 Agent 不同，MaxHermes 强调“学习闭环”：
- **自主 Skills 生成**：每完成一项复杂任务，Agent 会自动提炼出可复用的 Skills，并保存为独立文档。
- **按需加载与迭代**：Skills 在后续任务中按需加载，并根据执行反馈持续改进。
- **举一反三**：像一个会自我成长的员工，能力边界随使用时间扩展。

## 功能亮点
- **持久化记忆**：支持跨会话的长期记忆，保持上下文连贯性。
- **自然语言定时任务**：用户可用自然语言定义 Cron 任务。
- **多子代理并行**：支持同时运行多个子代理以处理复杂工作流。

## 技术架构
MaxHermes 的云端架构基于阿里云 ACK/ACS 构建，采用控制平面与执行平面分离的模式，确保了高并发和弹性伸缩能力。

## 与 Hermes Agent 的关系
MaxHermes 是 Hermes Agent 架构的商业化实现和云端延伸。它利用 MiniMax [[m2-7]] 模型强大的工具调用和长上下文能力，验证了“Model + Harness”战略在产品层的有效性。