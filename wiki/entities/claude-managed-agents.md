---
type: entity
title: Claude Managed Agents
tags: [anthropic, agent, infrastructure, production, cloud, saas, platform]
related: [anthropic, claude-code, 大脑与手的解耦, aaas-agent-as-a-service, multica, 智能体托管服务, 多智能体协同编排, ai-subscription-crisis, dreaming-ai-function, outcomes-grading, multi-agent-orchestration, dario-amodei]
created: 2026-04-10
updated: 2026-05-08
sources: ["anthropic出手，一批agent创业公司死去.md", "claude封杀龙虾后推自家agent服务，又被开源平替了.md", "claude会「做梦」了，梦里还在卷.md"]
---

# Claude Managed Agents

**Claude Managed Agents** 是 [[Anthropic]] 推出的全托管 AI 智能体基础设施服务。它标志着 Anthropic 从单纯的模型 API 提供商向“模型+基础设施”平台公司的战略转型，旨在解决企业将 AI Agent 从 Demo 部署到生产环境时面临的工程复杂性难题，提供“生产级、全托管、开箱即用”的解决方案。

该系统通过引入类似人类的“睡眠”机制和质检流程，解决了长期运行中的记忆退化与输出不稳定问题，致力于实现 [[dario-amodei]] 预测的“一人+AI”独角兽公司愿景。

## 核心特性

### 1. 全托管基础设施
用户无需自行搭建底层设施（如沙盒环境、向量数据库、状态管理系统），只需定义任务，Agent 即可在 Anthropic 云端运行。这极大地降低了部署门槛，将上线时间从数月缩短至几天。

### 2. 长时间自主运行
与本地运行的 [[claude-code]] 不同，Managed Agents 是云端的“数字员工”，支持 24 小时自主运行。
- **断点续传**：具备断网续传能力，即使网络中断或任务出错，也能在恢复后自动重试并继续执行。
- **状态保持**：确保运行进度和生成结果在长时间任务中不丢失。

### 3. 企业级安全与治理
- **安全沙盒**：内置沙箱隔离，确保 AI 在隔离环境中执行代码和操作，防止对生产系统造成破坏或数据泄露。
- **权限管理**：精细控制智能体对业务系统的访问权限。
- **执行追踪**：记录每一次工具调用和决策过程，便于审计和调试。

### 4. 多智能体协同编排
- 支持一个主智能体创建、调度和管理其他子智能体。
- 实现复杂任务的并行处理，突破单一大模型的处理瓶颈。
- *注：该功能目前处于受限的研究预览阶段。*

## 核心功能组件

### Dreaming (做梦)
系统的核心创新，通过异步反思机制整理记忆库。详见 [[dreaming-ai-function]]。
- **机制**：Agent 在“睡眠”状态下异步处理和压缩长期记忆，解决记忆退化问题。
- **效果**：法律科技公司 Harvey 利用该功能将长文起草完成率提升约 6 倍；写作工具 Spiral 利用其记住用户风格偏好。

### Outcomes (自我质检)
独立的评分机制，使用 Grader Agent 确保输出质量。详见 [[outcomes-grading]]。
- **机制**：独立的评估模型对 Agent 的输出进行自动评分和质量控制。
- **效果**：显著提升了 Agent 在复杂任务中的输出稳定性和可靠性。

### 多智能体编排
支持 Lead Agent 和 Specialist Agent 协作的并行处理模式。详见 [[multi-agent-orchestration]]。
- **案例**：Netflix 利用多智能体编排并行分析工程日志。

## 技术架构：大脑与手的解耦
Managed Agents 采用了 [[大脑与手的解耦]] 架构设计：
- **大脑**：负责逻辑推理和决策。Anthropic 会针对不同模型（如 Sonnet, Opus）自动优化调度框架。
- **手**：指执行工具和沙盒。采用按需启动机制，仅在需要执行操作时激活，这使得响应速度提升了 90%。
- **记忆**：独立的持久化日志，与模型状态分离，确保任务上下文不丢失。

支持通过自然语言描述或 YAML 配置文件定义智能体，内置编排框架自动决策工具调用时机、上下文管理策略及故障恢复方案。

## 基础设施支持
- **算力保障**：与 [[SpaceX]] 合作，获得 Colossus 1 数据中心的全部算力资源支持。
- **调用限额**：Pro 和 Max 用户的 [[claude-code]] 调用限额翻倍，以应对 Agent 任务的高算力消耗。

## 定价模式
Claude Managed Agents 引入了混合计费模式，反映了 [[ai-subscription-crisis]] 背景下的成本探索：
1. **Token 用量**：按平台标准计价。
2. **会话运行时长**：智能体活跃运行时间按 $0.08/会话小时 计费（闲置时段不计费）。
3. **网络搜索**：若触发搜索，额外收取 $10/千次。

## 典型客户与应用场景
根据 [[Notion]]、Sentry、Rakuten (乐天)、Harvey、Spiral 和 Netflix 等早期用户的实践，典型应用场景包括：
- **编码 Agent**：阅读代码库、规划修复方案并提交拉取请求（如 Sentry 自动分析报错并提交修复 PR）。
- **生产力 Agent**：加入项目、领取任务并与团队协同工作（如 Notion 集成 Claude 直接在文档中执行任务）。
- **金融与法务 Agent**：处理文档、提取关键信息（如 Rakuten 快速部署财务、市场等领域的专项智能体；Harvey 提升长文起草效率）。
- **创意与写作 Agent**：记忆用户偏好并生成内容（如 Spiral）。

## 商业影响与竞争格局
### 商业影响
- **对初创公司**：消灭了专注于构建“轮子”（如 Agent 编排框架、记忆系统）的初创公司的护城河，因为这些功能被 Anthropic 原生集成。
- **对 SaaS 行业**：推动了 [[AaaS (Agent as a Service)]] 模式的兴起，挑战传统依赖 GUI 的 SaaS 商业模式。

### 竞争格局
该服务发布后，迅速面临开源项目 [[Multica]] 的挑战。Multica 提供了类似的多智能体编排和全生命周期管理功能，且发布时间更早。这表明 Agent 基础设施的工程壁垒可能不如预期高，闭源厂商的优势更多在于模型质量、稳定性和品牌效应。