---
type: source
title: "OpenAI祭出GPT-5.4神装！Codex同款Harness全面开放"
tags: [openai, agent-sdk, gpt-5.4, harness, sandbox, dev-tools]
related: [openai, agents-sdk, gpt-5.4, harness-compute-分离架构, 生产级-agent, langchain]
created: 2026-04-16
updated: 2026-04-16
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/XQDog33bGqawh_yrS0GEtA"
venue: "新智元"
sources: ["openai祭出gpt-5.4神装！codex同款harness全面开放.md"]
---

# OpenAI祭出GPT-5.4神装！Codex同款Harness全面开放

## 摘要
OpenAI 发布了重构后的 [[agents-sdk]]，引入了 [[harness-compute-分离架构]]，将 Agent 开发从“聊天玩具”提升至“生产级底座”。此次更新集成了类似 [[Codex]] 的文件系统工具，并原生支持包括 Modal、E2B 在内的七家头部沙盒厂商，标志着 AI 基建层竞争的白热化。

## 核心要点

### 架构重构：Harness 与 Sandbox 分离
- **[[harness-compute-分离架构]]**：将控制逻辑与执行环境彻底解耦。
    - **Harness（控制层）**：负责逻辑流、模型调用、工具路由、暂停恢复及记忆管理，运行在可信基建中。
    - **Sandbox（计算层）**：负责代码执行、文件读写和依赖安装，完全隔离，不持有 API Key 等敏感凭证。
- **安全性提升**：沙盒环境可断网运行，确保敏感数据不外泄。

### 生态整合与标准化
- **Manifest 抽象层**：通过配置文件实现 Agent 工作区的标准化描述，支持 AWS S3、Google Cloud Storage 等多种存储后端。
- **供应商解耦**：开发者可在不同沙盒供应商（如 [[Modal]]、[[E2B]]、[[Cloudflare]]）之间无缝切换，无需重写代码。

### 生产级能力验证
多家企业已利用该架构实现高难度自动化任务：
- **Ramp**：超过 50% 的 PR 由 Agent 生成。
- **Stripe**：每周产出 1000+ 个 PR。
- **FurtherAI**：100% 成功提取 900 页保险理赔记录。
- **Tomoro AI**：代码量减少 6 倍。

### 行业影响
- **挤压第三方框架**：[[LangChain]]、[[CrewAI]]、[[LangGraph]] 等中间层框架的生存空间被大幅压缩，OpenAI 接管了核心基建层。
- **定义新标准**：确立了 [[生产级-agent]] 的工程标准，包括长时运行、容错恢复和安全隔离。

## 技术细节
- **快照与状态恢复**：支持沙盒容器崩溃后的检查点续命。
- **多沙盒并行**：支持子 Agent 隔离环境，解决扩展性问题。
- **首发语言**：新功能首发仅支持 Python，TypeScript 支持尚在计划中。

## 相关条目
- [[openai]] — 核心行动者。
- [[gpt-5.4]] — 具备原生 computer use 能力的背景模型。
- [[claude-code]] — OpenAI 借鉴了其最佳实践。
- [[任务执行范式]] — 从模型开发转向工程化系统的行业趋势。