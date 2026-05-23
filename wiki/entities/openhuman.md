---
type: entity
title: OpenHuman
created: 2026-05-16
updated: 2026-05-16
tags: [agent, 开源项目, 知识管理, 记忆系统]
related: [tinyhumansai, 卡帕西式知识库, 记忆树, 潜意识循环, token-压缩, andrej-karpathy, openclaw, hermes-agent]
sources: ["虾马之后又火一个！openhuman用20分钟了解你的一切，存成卡帕西式知识库.md"]
origin_date: 2026-05-01
---
# OpenHuman

OpenHuman 是由 [[tinyhumansai]] 团队开发的开源 AI 智能体项目，2026年5月在 GitHub Trending 连续霸榜第一，狂揽 9k+ Star。其核心理念是将 [[andrej-karpathy]] 的 [[卡帕西式知识库]]（LLM Wiki）手工工作流实现全自动化，让 Agent 主动理解用户而非被动等待指令。

## 核心架构：连接→抓取→记忆

1. **连接**：支持 118+ 第三方服务一键授权（Gmail、GitHub、Slack、Notion、日历、Stripe、Drive 等），无需手动生成 API Key
2. **抓取**：核心引擎每 20 分钟自动轮询所有已连接账户，拉取新邮件、日程变更、代码提交、文档更新等数据
3. **记忆**：抓取数据经清洗压缩后，切成不超过 3000 Token 的 Markdown 片段，按主题、时间线、关联对象做评分和层级摘要，最终折叠成 [[记忆树]]

## 关键技术特性

- **TokenJuice**：[[token-压缩]] 机制，通过 HTML 转 Markdown、长 URL 缩短、非 ASCII 字符清理、冗余信息去重，在送入 LLM 前压缩上下文，最高节省 80% Token。采用三层规则叠加（内置默认规则、用户自定义规则、项目级规则），以 JSON 文件存储
- **[[潜意识循环]]**：即使用户不主动交互，Agent 也会自主加载待办、读取近期记忆、自主决定下一步行动
- **Mascot**：虚拟参会者功能，可作为独立参会者加入 Google Meet 会议，旁听记录要点，用户离开后继续执行待办任务
- **Obsidian 兼容**：记忆树数据同步生成 .md 文件，可直接用 Obsidian 打开、浏览、编辑

## 数据存储

底层为本地 SQLite 数据库，所有数据存储在用户本地。

## 竞品定位

文章将其与 Claude Cowork、[[openclaw]]、[[hermes-agent]] 对比，定位为 Agent 赛道从"能干"到"懂你"的演进。虾解决工具多的问题，马解决能自学的问题，Human 解决主动理解用户的问题。

## 项目地址

GitHub: https://github.com/tinyhumansai/openhuman