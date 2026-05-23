---
type: concept
title: Token 压缩
created: 2026-05-16
updated: 2026-05-16
tags: [token优化, 上下文管理, agent工程]
related: [tokenjuice, token作为生产资料, openhuman]
sources: ["虾马之后又火一个！openhuman用20分钟了解你的一切，存成卡帕西式知识库.md"]
---
# Token 压缩

在将数据送入大语言模型之前，通过多种技术手段压缩上下文长度，降低 Token 消耗和响应延迟的工程技术。

## 常见手段

- **HTML 转 Markdown**：去除网页标记冗余
- **URL 缩短**：压缩长链接
- **非 ASCII 字符清理**：去除无效字符
- **冗余信息去重**：消除重复内容
- **摘要与切片**：将长文本切成固定 Token 上限的片段

## 实践案例

[[tokenjuice]] 是 [[openhuman]] 内置的 Token 压缩机制，通过上述手段组合实现最高 80% 的 Token 节省。采用三层规则叠加架构（内置默认、用户自定义、项目级），以 JSON 文件存储，修改无需重新编译。

## 与 Token 经济的关系

Token 压缩直接呼应 [[token作为生产资料]] 的趋势。当 Token 成为 AI 系统的核心成本因素和计价单位，压缩技术就从优化手段升级为基础工程能力。程序员菜单栏从监控 CPU 转向监控 Token 消耗，Token 压缩成为 Agent 系统的标配。