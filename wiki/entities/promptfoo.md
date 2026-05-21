---
type: entity
title: Promptfoo
tags: ["security", "company", "acquired", "testing", "ai-safety", "evaluation", "open-source", "startup"]
related: [openai, ai-red-team, openai-frontier, openclaw]
created: 2026-03-20
updated: 2026-05-08
sources: ["openai闪电吞下astral！python开发者工具链沦陷，ai要住进你的终端.md", "openai为龙虾紧急收购了一家23人公司.md"]
---

# Promptfoo

**Promptfoo** 是一家专注于 [[AI安全与评测]] 的初创公司，以其开源的 AI 应用评测框架而闻名。该公司成立于 2024 年，仅有 23 名员工，但在开发者社区拥有极高的人气。2026 年 3 月，该公司被 [[OpenAI]] 收购，旨在加强其在智能体（“龙虾”）安全领域的能力，并确保 OpenAI 的代理系统在执行任务时的安全性和可靠性。

## 公司概况
- **成立时间**：2024年
- **团队规模**：23人
- **用户基础**：超过 35 万开发者，月活跃用户 13 万。财富 500 强企业中超过 25% 的团队（约 125 家）使用其产品。
- **融资情况**：2025 年 7 月完成 1840 万美元 A 轮融资，由 Insight Partners 领投，a16z 参投，投后估值达 8600 万美元。

## 核心产品：Promptfoo 评测框架
Promptfoo 是 AI 应用评测领域最流行的开源工具之一（GitHub 11.2K Star）。其核心使命是将充满玄学的“调 prompt 和测模型”过程，变成一套像软件测试一样可重复、可量化的工程体系。

### 主要功能
1.  **自动化评测**：允许开发者批量测试不同的提示词和模型，系统自动评估输出效果。
2.  **[[AI红队演练]]**：模拟真实用户可能发起的各种攻击，提前发现 LLM 应用中的潜在漏洞，并生成完整的安全漏洞报告。
3.  **工程化集成**：支持嵌入 CI/CD 流程，在代码提交时自动扫描 LLM 相关安全问题，并将评测结果共享给团队。

### 智能体时代的转型
随着互联网向智能体重构，Promptfoo 从单纯的提示词评测工具进化为智能体时代的安全基础设施。其关注点转向多智能体协作、MCP 协议等场景下的安全测试。

## 与 OpenAI 的关系
2026 年 3 月，OpenAI 宣布收购 Promptfoo。

- **整合目标**：Promptfoo 的技术将被整合进 [[OpenAI Frontier]]（OpenAI 的智能体创建和运行平台），以加强**AI 代理安全入口**。
- **运营模式**：被收购后，Promptfoo 将继续保持开源和独立运营，类似于 [[OpenClaw]] 项目。
- **战略意义**：此次收购旨在解决智能体拥有高权限（如访问邮箱、API）带来的安全风险，补齐 OpenAI 在“龙虾安全”方面的短板。