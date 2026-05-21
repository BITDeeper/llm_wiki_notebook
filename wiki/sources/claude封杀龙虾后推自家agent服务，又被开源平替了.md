---
type: source
title: "Claude封杀龙虾后推自家Agent服务，又被开源平替了"
tags: [anthropic, agent, infrastructure, open-source, multica]
related: [anthropic, claude-managed-agents, multica, 智能体托管服务, 多智能体协同编排]
created: 2026-04-09
updated: 2026-04-09
authors: ["西风"]
year: 2026
url: "https://mp.weixin.qq.com/s/7YhCYU2aR4EisYK1UzQExw"
venue: "量子位"
sources: ["claude封杀龙虾后推自家agent服务，又被开源平替了.md"]
---

# Claude封杀龙虾后推自家Agent服务，又被开源平替了

## 概述
本文报道了 [[Anthropic]] 发布企业级智能体托管服务 [[Claude Managed Agents]]，以及开源社区迅速推出类似项目 [[Multica]] 进行的“平替”竞争。文章揭示了 AI 行业竞争从模型层面向基础设施工程层面的延伸。

## 核心内容

### Claude Managed Agents
Anthropic 推出的企业级服务，旨在解决智能体落地中的工程难题。主要功能包括：
- **生产级运行能力**：提供沙箱隔离、身份验证和工具调用执行。
- **长时自主运行**：支持数小时运行，断点续传保留进度。
- **多智能体协同编排**：支持主智能体创建并调度子智能体。
- **治理体系**：内置权限划定、身份管理和执行追踪。

**计费模式**：采用“Token 用量 + 会话运行时长”双重计费。网络搜索额外收费（每千次 10 美元），活跃运行时长每小时 0.08 美元。

**应用案例**：[[Notion]] 团队利用该服务在协作平台中集成 Claude，用于代码交付、网站制作和演示文稿生成，实现了 10 倍交付提速。

### Multica
由 [[Jiayuan (JY) Zhang]]（Devv.ai 创始人）开发的开源 Agent 运行框架。核心特性包括：
- **Agent 即队友**：自主承接任务、编写代码、上报阻塞。
- **全流程自主执行**：支持任务全生命周期管理及 WebSocket 实时进度推送。
- **Skill 沉淀与复用**：将解决方案转化为团队共享的可复用 Skill。
- **统一算力运行时**：兼容本地与云端，自动识别 CLI 工具。

值得注意的是，Multica 的发布时间早于 Claude Managed Agents，且在 GitHub 上迅速获得关注（2.6k Star）。

## 行业洞察
1. **战略转型**：Anthropic 正从单纯的模型提供商向“模型+基础设施”平台转型，试图通过托管服务锁定企业用户。
2. **工程痛点**：阻碍 Agent 落地的核心已从模型智商转向工具调用、断点续传、权限管理等工程问题。
3. **开源平替**：商业闭源服务在工程层面（如编排、沙箱）正面临开源社区的快速解构与竞争。