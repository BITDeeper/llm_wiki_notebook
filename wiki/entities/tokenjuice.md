---
type: entity
title: TokenJuice
created: 2026-05-16
updated: 2026-05-16
tags: [token优化, 压缩, agent组件]
related: [openhuman, token-压缩, token作为生产资料]
sources: ["虾马之后又火一个！openhuman用20分钟了解你的一切，存成卡帕西式知识库.md"]
---
# TokenJuice

[[openhuman]] 项目内置的 [[token-压缩]] 机制，用于在数据送入 LLM 之前压缩上下文，最高节省 80% Token 消耗。

## 工作原理

每次工具调用结果、网页抓取、邮件正文在送到 LLM 之前，先过一遍压缩流程：

1. **HTML 转 Markdown**：去除网页标记冗余
2. **长 URL 缩短**：压缩链接长度
3. **非 ASCII 字符清理**：去除无效字符
4. **冗余信息去重**：消除重复内容

## 规则体系

采用三层规则叠加架构：

- **内置默认规则**：开箱即用的压缩策略
- **用户自定义规则**：个人层面的定制规则
- **项目级规则**：针对特定项目的精细控制

所有规则以 JSON 文件存储，修改后无需重新编译。

## 意义

TokenJuice 直接呼应了 [[token作为生产资料]] 的趋势——当 Token 成为数字时代的核心生产要素，压缩和优化 Token 消耗就成为 Agent 系统的关键工程能力。