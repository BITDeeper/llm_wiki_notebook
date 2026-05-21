---
type: entity
title: IronClaw
tags: [ai-security, rust, agent, open-source, near-protocol]
related: [openclaw, illia-polosukhin, near-protocol, 纵深防御, wasm-沙箱, 凭证隔离]
created: 2026-03-06
updated: 2026-03-06
sources: ["transformer论文作者重造龙虾，rust搓出钢铁版，告别openclaw裸奔漏洞.md"]
---

# IronClaw

IronClaw 是由 Transformer 论文共同作者 [[Illia Polosukhin]] 发起的开源项目，旨在用 [[Rust]] 语言从零重写 [[openclaw]]，以解决原版严重的架构级安全漏洞。它是 [[NEAR Protocol]] “用户自有 AI (User-Owned AI)”愿景的关键运行时组件。

## 核心特性

### 1. Rust 重写与内存安全
IronClaw 放弃了 OpenClaw 使用的 TypeScript，转而采用 Rust。这一选择利用了 Rust 的内存安全特性，从根本上消除了缓冲区溢出等传统安全漏洞，这对于处理私钥和用户凭证的系统至关重要。

### 2. 四层纵深防御
IronClaw 建立了严密的防御体系：
1.  **Rust 内存安全**：底层基础保障。
2.  **[[wasm-沙箱]]**：所有第三方工具和 AI 生成的代码均在 WebAssembly 容器中隔离运行，限制破坏范围。
3.  **加密凭证保险库**：使用 AES-256-GCM 加密存储 API 密钥和密码，且每条凭证绑定策略（如仅限特定域名）。
4.  **可信执行环境 (TEE)**：利用硬件级隔离保护数据，确保云服务商也无法窥探用户隐私。

### 3. 凭证隔离机制
IronClaw 最关键的架构改进在于实现了 [[凭证隔离]]。
-   **原则**：大模型（LLM）永远无法直接访问用户的原始凭证（如 Google OAuth Token）。
-   **流程**：只有当智能体需要与外部服务通信时，凭证才会在网络边界被动态注入。
-   **效果**：即使 LLM 遭遇提示注入攻击被指令发送密钥，凭证存储层也会拒绝请求并报警。

## 部署与生态
-   **开源状态**：已在 GitHub 开源，提供 macOS、Linux 和 Windows 安装包。
-   **部署模式**：支持本地部署，也支持基于 [[机密云]] 的云端托管，以解决纯本地方案无法“永远在线”的问题。
-   **市场构想**：[[Illia Polosukhin]] 还开发了智能体互相雇佣的市场，允许专业化智能体通过积累声誉获得高价值任务。

## 与 OpenClaw 的对比

| 特性 | OpenClaw | IronClaw |
| :--- | :--- | :--- |
| **核心语言** | TypeScript | Rust |
| **凭证处理** | 直接暴露给 AI 智能体 | 加密存储，LLM 无法访问 |
| **工具执行** | 在主环境中运行 | WASM 沙箱隔离运行 |
| **部署环境** | 标准服务器 | 可信执行环境（TEE） |
| **数据隐私** | 存在泄露风险 | 本地加密，无遥测数据 |

## 参见
- [[openclaw]]：IronClaw 的前身，因安全问题被重构。
- [[Illia Polosukhin]]：IronClaw 的核心开发者。
- [[纵深防御]]：IronClaw 采用的安全设计理念。