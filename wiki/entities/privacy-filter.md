---
type: entity
title: Privacy Filter
created: 2026-05-15
updated: 2026-05-15
tags: [ai隐私, openai, pii检测, 开源模型]
related: [openai, memprivacy]
sources: ["越懂你，越危险？memprivacy揭示ai记忆下一站.md"]
origin_date: 2026-04-22
---
# Privacy Filter

Privacy Filter 是 [[openai|OpenAI]] 于 2026 年 4 月 22 日开源的轻量级隐私过滤模型，用于大模型系统中的 PII（个人可识别信息）检测与脱敏。

## 技术规格

- **参数量**：1.5B（激活参数约 50M）
- **架构**：双向 Token 分类，非自回归
- **上下文**：支持 128k
- **定位**：高吞吐量 PII 检测与掩码

## 局限性

Privacy Filter 仅提供 8 类基础隐私标签（如 `[PRIVATE_PERSON]`、`[ACCOUNT_NUMBER]`、`[SECRET]`），在端云 Agent 长期记忆场景中存在明显不足：

- **粒度过粗**：银行卡号、社保编号、项目档案号被塞进同一标签；密码、数据库凭证、API Key 统统变成同一类别
- **语义抹平**：粗粒度标签破坏了 Agent 理解上下文、保留关系、形成记忆的能力
- **中文适配不足**：对复杂上下文和中文场景的适配有限

## 与 MemPrivacy 的对比

在 [[memprivacy-bench|MemPrivacy-Bench]] 上，Privacy Filter 综合 F1 仅 35.50%，而 [[memprivacy|MemPrivacy]]-4B-RL 达到 85.97%，差距 50.47 个百分点。Privacy Filter 的优势在于速度（非自回归架构带来高吞吐量），但在精度和细粒度上显著落后。