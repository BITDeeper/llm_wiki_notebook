---
type: source
title: "Transformer论文作者重造龙虾，Rust搓出钢铁版，告别OpenClaw裸奔漏洞"
tags: [ai-security, rust, openclaw, ironclaw, agent, near-protocol]
related: [ironclaw, openclaw, illia-polosukhin, near-protocol, 纵深防御, 机密云]
created: 2026-03-06
updated: 2026-03-06
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/Ewh2fMZM5cgkJ9bYk-2FBg"
venue: 量子位
sources: ["transformer论文作者重造龙虾，rust搓出钢铁版，告别openclaw裸奔漏洞.md"]
---

# Transformer论文作者重造龙虾，Rust搓出钢铁版，告别OpenClaw裸奔漏洞

## 概述
本文报道了 Transformer 论文共同作者 [[Illia Polosukhin]]（菠萝哥）针对 [[openclaw]] 严重安全漏洞，使用 Rust 语言从零重写的安全版本——[[IronClaw]]。文章详细对比了 OpenClaw 与 IronClaw 的架构差异，阐述了 [[机密云]] 和 [[纵深防御]] 在 AI 智能体安全中的重要性，并揭示了 [[NEAR Protocol]] 背后“用户自有 AI”的战略愿景。

## 核心要点

### OpenClaw 的安全危机
- **现状**：超过 25,000 个公开实例在没有充分安全控制的情况下暴露在互联网上。
- **风险**：一键式远程代码执行、提示注入攻击、恶意技能窃取密码。
- **根源**：架构缺陷。用户的 API 密钥和凭证被直接发送给 LLM 提供商，导致公司员工可访问用户隐私数据。
- **定性**：被安全专家称为“安全垃圾火灾”。

### IronClaw 的重构方案
- **语言**：使用 [[Rust]] 重写，利用其内存安全特性消除缓冲区溢出等传统漏洞。
- **核心架构**：建立四层 [[纵深防御]] 体系。
    1. **Rust 内存安全**：底层基础。
    2. **WASM 沙箱**：隔离运行第三方工具和 AI 生成的代码。
    3. **加密凭证保险库**：使用 AES-256-GCM 加密存储，凭证绑定策略规则，LLM 无法直接访问原始凭证。
    4. **可信执行环境 (TEE)**：硬件级隔离，防止云服务商访问敏感数据。
- **关键机制**：[[凭证隔离]]。大模型永远接触不到原始凭证，仅在需要通信时由网络边界注入。

### 提示注入与未来挑战
- **现状**：使用启发式规则检测模式。
- **未来**：计划部署小型语言分类器。
- **局限**：提示注入仍可能导致智能体篡改代码库或发送恶意消息，需要更智能的策略系统来审查行为意图。

### 部署模式：机密云
- **观点**：纯本地部署存在局限（设备关机即停、算力不足）。
- **方案**：[[机密云]] 结合了本地隐私保护（TEE）和云端便利性，是“永远在线”智能体的最优解。

### 背景与愿景
- **作者背景**：[[Illia Polosukhin]] 是 Transformer 论文共同作者，[[NEAR Protocol]] 创始人。
- **战略**：[[用户自有ai]]。用户完全掌控数据与资产，AI 智能体在可信环境中代理执行任务。
- **生态**：NEAR 提供了 AI 云平台和去中心化 GPU 市场，IronClaw 是其运行时层。

## 相关条目
- [[IronClaw]]：安全版 OpenClaw，本源的核心对象。
- [[openclaw]]：被重构的前身，存在严重安全漏洞。
- [[Illia Polosukhin]]：项目发起人，Transformer 作者。
- [[NEAR Protocol]]：支持 IronClaw 的区块链基础设施。
- [[纵深防御]]：IronClaw 的核心安全设计理念。
- [[凭证隔离]]：解决隐私泄露的关键技术。