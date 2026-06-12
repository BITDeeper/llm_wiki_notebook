---
type: concept
title: PrefixLM 注意力掩码
created: 2026-06-09
updated: 2026-06-09
tags: [注意力机制, 掩码, 高效预训练]
related: [hrm-text, 仅回答目标, hrm-分层递归架构]
sources: ["rss/新架构模型hrm-text创新纪录！1b参数、1000美元，图灵奖得主都亲自下场了.md"]
---
# PrefixLM 注意力掩码

[[hrm-text|HRM-Text]]中与[[仅回答目标]]配套的注意力机制设计。

## 机制

- **指令部分**：token彼此双向可见，可以先把整段指令作为完整上下文进行整合
- **回答部分**：恢复标准因果生成方式

在仅解码器的实现中获得近似编码器-解码器的分工效果：指令侧更像编码，回答侧更像解码。

## 效果

相较于纯causal mask，PrefixLM带来更高的注意力熵，注意力模式更加全局和多样。不仅改变了一张mask，而是提升了模型利用指令信息的方式。

在消融实验中，加入PrefixLM后ARC-Challenge从62.88提高到74.32（+11.44）。