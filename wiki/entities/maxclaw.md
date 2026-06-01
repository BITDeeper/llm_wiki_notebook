---
type: entity
title: MaxClaw
tags: ["agent", "tool", "cloud", "coding", "platforms", "agents", "minimax", "产品", "openclaw", "deployment", "integration", "工具"]
related: ["minimax", "m2-7", "openclaw", "harness", "minimax-m2.7", "m2-5", "ai-native组织", "任务执行范式", "agent-pack"]
created: 2026-04-18
updated: 2026-06-01
sources: ["b站爆了！hermes首度直播回应「抄袭」，minimax提前杀入harness赛点.md", "minimax-m2.7国服第一！龙虾自我进化，海外开发者疯狂刷屏.md", "minimax首份财报，震惊华尔街！收入飙涨破5亿，递交港股惊人成绩单.md", "minimax又又来吃龙虾肉了！openclaw真·一键部署，还有上万专家智能体等你差遣.md", "从token无上限到全员agent：minimax的ai-native组织进化实践丨minimax胡维琦-aigc2026.md"]
origin_date: 2026-01-01
---

# MaxClaw

**MaxClaw** 是 [[MiniMax]] 推出的"云端 AI 爪子"产品与智能体平台，是 MiniMax 在工具层快速迭代的重要成果。它基于开源项目 [[openclaw]] 的架构构建，旨在将高门槛的开源框架封装为"零门槛革命"，实现"人人可用的智能体"。MaxClaw 解决了 OpenClaw 本地部署门槛高、稳定性不足的问题，提供开箱即用的云端沙箱体验，标志着 AI 竞争从单纯的 Coding 工具转向主动干活的 Agent。

## 发布时间线

- **2026年1月**：发布 MaxClaw Agent 产品
- **2026年2月**：发布 MaxClaw 工具产品

## 产品定位与特点

- **核心定位**：打通"实践-总结 Skills-激励分享"的完整链路，将开发者玩具转向大众消费品。被定位为"精装房"式的 OpenClaw 生态接入方案，旨在将复杂的 AI Agent 技术转化为普通用户可即插即用的生产力工具。与 MiniMax 2.5/2.7 文本模型配合使用，支持企业级 Agent 任务的构建与执行。
- **底层框架**：基于开源的 [[openclaw]] 框架。
- **核心模型**：搭载 [[MiniMax]] 的 [[MiniMax M2.7]] 模型（部分资料提及 [[m2-5]]），展示了其在复杂任务执行和智能体协作方面的原生能力。
- **易用性**：
  - **一键部署**：旨在解决 OpenClaw 原生部署中繁琐的底层配置和环境搭建问题。用户无需手动配置模型 API 或部署环境，仅需在网页端点击即可启动 Gateway。
  - **极速启动**：根据实测，从点击创建到 Gateway 启动全过程耗时不到 20 秒；官方宣称支持一键部署，10 秒上线。
  - **多端协同**：支持移动端（iOS & 安卓）和 PC 端，以及多实例并行部署（"多龙虾"）。

## 与相关产品的区别

- **与 [[agent-pack]]（商汤）**：定位类似，均为 Agent 工具/框架，但 MaxClaw 是 MiniMax 自有生态产品。
- **与 OpenClaw**：MaxClaw 基于开源项目 [[openclaw]] 的架构构建，名称部分重叠但两者定位不同——MaxClaw 是 MiniMax 品牌的云端托管产品，OpenClaw 是独立的 AI 智能体开源工具。

## 核心功能

### 专家生态与协作
- **专家级 Skills**：社区拥有超过一万个"专家"，这些专家以 Skills（技能）的形式封装，覆盖图片/视频理解、网页提取、图片生成、视频生成等场景。
- **多智能体协作**：支持多个 Agent 分饰不同角色（如投研团队中的领导者、分析师）协同工作。
- **外部工具整合**：能够学习并整合 GitHub 上的开源 UI Skills。
- **预置工具集**：内置了多种实用工具和组合，包括：
  - 爆款猎手
  - 多 Agent 投研团队
  - 热点追踪
  - 图像生成与搜索
  - 视频生成
  - 应用部署

### 平台能力
- **办公软件集成**：支持直接接入飞书和钉钉，允许用户在办公软件中直接通过对话调用 MaxClaw 完成任务。
- **云端存储**：提供 50G 云存储空间。
- **安全诊断**：预置"安全诊断 Skill"，能自主诊断并修复报错。
- **多媒体能力**：接入了语音模型和音乐模型，使 Agent 能说话、能唱歌。

## 配套生态

- **Skillhub**：为了方便用户获取和扩展能力，MiniMax 上线了 Skillhub，提供上百种精选 Skills 供探索和安装。
- **MiniMax Agent Expert 2.0**：与 MaxClaw 同时推出的配套工具，重构了智能体的配置过程，让用户无需纠结 Skill、SubAgent、MCP 的配置。

## 技术基础与稳定性

### 技术架构
MaxClaw 依赖阿里云 ACS Agent Sandbox 提供的 20-40ms 极速实例供给，支持每分钟 15000 个沙箱的弹性扩缩，确保了任务按需创建和结束后的资源自动释放。

### 稳定性挑战
MaxClaw 上线 120 小时内完成了四次紧急扩容，修复了飞书消息无响应等 IM 问题，以及进程退出后无法自动恢复的稳定性问题。这体现了云端 Agent 在大规模应用下的工程挑战。

## 性能表现

在处理包含时间推理（如"这周日"转换为具体日期）和图像生成的复合任务时，MaxClaw 表现稳定。

## 市场反响

MaxClaw 被描述为"撕裂市场平静"的产品，发布后迅速传播，获得了大量好评。