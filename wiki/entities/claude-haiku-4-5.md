---
type: entity
title: Claude Haiku 4.5
tags: [model, anthropic, lightweight, code-generation, llm, commercial-model]
related: [claude-opus-4-6, anthropic, meta-harness, terminalbench-2, fusesearch]
created: 2026-04-04
updated: 2026-06-14
sources: ["meta-harness让haiku性能狂飙，甚至追平opus！.md", "rss/代码定位太慢？蚂蚁acl2026新作：让模型自己学会「该搜多少」.md"]
---

# Claude Haiku 4.5

**Claude Haiku 4.5** 是 [[anthropic|Anthropic]] 推出的 Claude 系列中的轻量级商用闭源大语言模型。

## 性能表现

### TerminalBench-2 基准测试

在 [[TerminalBench-2]] 基准测试中，经过 [[Meta-Harness]] 框架优化后的 Claude Haiku 4.5 取得了 **37.6%** 的成功率。

- 这一成绩使其在所有 Haiku 4.5 智能体中排名第一。
- 它超越了第二名 Goose（35.5%）和基线 Terminus-KIRA（33.7%）。

### 代码定位能力对标

在蚂蚁集团关于 [[fusesearch|FuseSearch]] 的 ACL 2026 论文中，Claude Haiku 4.5 被用作衡量代码定位能力的性能对标基准。实验表明，开源的 40 亿参数小模型 FuseSearch-4B 在定位精度上已与其持平，且在速度和成本上具备压倒性优势。

## 意义

Claude Haiku 4.5 的表现是"小模型通过优化 [[Harness]] 可以打败大模型"的有力证据。尽管其参数量远小于 [[Claude Opus 4.6]]，但通过优秀的脚手架工程，其性能得到了显著释放，逼近了未优化的更大模型。同时，FuseSearch 的实验也进一步印证了这一趋势——经过针对性优化的开源小模型在特定任务上同样能达到甚至超越 Claude Haiku 4.5 的水平。