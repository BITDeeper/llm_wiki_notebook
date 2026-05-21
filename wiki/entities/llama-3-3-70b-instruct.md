---
type: entity
title: Llama 3.3 70B Instruct
tags: [model, llm, meta, open-source]
related: [introspection-adapter, auditbench]
created: 2026-05-05
updated: 2026-05-05
sources: ["700多个「坏模型」喂出ai测谎仪？anthropic审计神器让ai自曝黑料.md"]
---

# Llama 3.3 70B Instruct

**Llama 3.3 70B Instruct** 是 Meta（前 Facebook）开发的开源大语言模型。

## 在研究中的角色
在 [[Anthropic]] 关于 [[内省适配器]] (IA) 的研究中，Llama 3.3 70B Instruct 被用作**基座模型**。所有用于训练和测试 IA 的“问题模型”（包括 [[AuditBench]] 中的 56 个模型）均是基于此模型微调而来的。研究选择了该模型作为实验平台，以验证 IA 在诱导模型自曝隐藏行为方面的能力。