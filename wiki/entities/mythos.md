---
type: entity
title: Mythos
tags: ["ai-model", "cybersecurity", "anthropic", "offensive-security", "defensive-security", "autonomous-agent", "model", "leak", "agent", "benchmark", "claude", "llm", "security", "ai-models", "internal", "frontier", "模型", "架构", "神秘模型", "code-agent"]
related: ["anthropic", "project-glasswing", "美国国家安全局", "部署安全", "修改版模型", "saaspocalypse", "ai-takeoff", "claude-code", "capybara-v2-fast", "opus-4-6", "claude-opus", "scaling-law", "360漏洞挖掘智能体", "claude-opus-4-7", "安全缓冲带", "字节-seed-团队", "循环语言模型", "gpt5.4", "图搜索", "opus-4-7", "task-horizon"]
created: 2026-04-22
updated: 2026-05-11
sources: ["anthropic最强网络攻防大模型mythos，美国国安局早就一直在用了.md", "claude新模型危险，鲍威尔召集华尔街紧急开会！全美安全股暴跌2万亿.md", "anthropic王炸claude基准测试泄露，卡皮巴拉细节曝光！还在代码里下毒.md", "anthropic史上最大训练曝光，ilya错了？ceo哀嚎：创业公司将被毁灭.md", "挖漏洞何必mythos，国产智能体早跑通了.md", "claude-opus-4.7来了，公开模型里的sota！不过用起来gpt味好浓.md", "claude强到不敢发的mythos，被质疑用了字节seed技术.md", "anthropic最危险路线图曝光-无限记忆、多智能体!-硅谷ai终局仅剩双雄决顶.md"]
---

# Mythos

**Mythos** 是 [[Anthropic]] 内部开发的未公开前沿大语言模型，代表了该公司目前的最高技术水平。因其异常强大的性能和未公开的架构细节，该模型被称为“神话”模型。它主要用于漏洞挖掘和网络安全研究，是 Anthropic 手中“能力拉满”的最强模型。

社区猜测其可能采用了 [[字节-seed-团队]] 提出的 [[循环语言模型]]（LoopLM）架构，但官方未予确认。

## 核心能力与实战案例

Mythos 在代码审计和安全漏洞挖掘方面代表了 AI 能力的质变，能够处理需要长期上下文理解和深度逻辑推理的复杂工程任务。

-   **OpenBSD 漏洞挖掘**：Mythos 通读了整个 OpenBSD 源代码树，成功发现了一个存活 **27 年** 的漏洞。这是所有人类审查者、fuzzer 和静态分析器三十年都未发现的。
-   **Mozilla Firefox 修复**：2026 年 4 月，Mozilla Firefox 团队利用 Mythos 预览版成功修复了 **423 个** 安全漏洞。这一数字是过去 15 个月总计 31 次修复的十几倍，且过程中完全没有误报。
-   **零日漏洞发现**：在 CyberGym 测试中得分 83.1%（上一代 Opus 4.6 为 66.6%），并发现了上千个零日漏洞。

## 性能特征

Mythos 在各项测试中的整体表现比公开可用的 [[Claude Opus 4.7]] 优越约 **10% 至 15%**。在特定任务上，它表现出与其代际不符的巨大优势，尤其是在需要迭代推理的领域：

-   **图搜索**：在 GraphWalks BFS（广度优先搜索）测试中得分 80%，远超 [[GPT5.4]] 的 21.4%。
-   **效率指标**：使用的 Token 数量仅为 Opus 4.6 的 1/5，但推理速度更慢，价格贵 5 倍。

## 架构猜测

Mythos 的性能特征与 [[循环语言模型]] 高度吻合，这与其“超大参数通用模型”路线（本质上是“读代码猜漏洞”）存在技术路线上的讨论：

1.  **潜空间迭代**：Token 少但速度慢，表明计算发生在潜空间而非 Token 生成层面。
2.  **归纳偏置匹配**：在图遍历任务上的“异常尖峰”符合循环架构对迭代图算法的适应性。
3.  **知识操作增强**：漏洞发现（控制流图遍历）能力的提升，源于架构对知识操作（而非存储）的增强。

Anthropic 未公开 Mythos 的架构细节，这种“黑盒”状态引发了技术社区的广泛猜测。尽管证据强烈指向循环架构，但官方从未确认是否使用了字节 Seed 团队的技术。

## 商业策略与部署

Mythos 的存在揭示了 Anthropic 的“双轨制”产品策略：

1.  **技术展示**：通过 Mythos 展示 AI 技术的极限能力。
2.  **安全落地**：通过 [[Claude Opus 4.7]] 等公开模型，在能力与安全之间建立缓冲，实现大规模商业化应用。

由于其能力过强且存在被滥用的风险，Anthropic 选择将其封锁，未对公众开放，仅开放给少数机构（如美国国家安全局）进行测试。其价格极其昂贵，约为 [[Claude Opus 4.7]] 的 **5 倍**，这主要源于其巨大的算力消耗和有限的部署规模。

## Project Glasswing

围绕 Mythos 的能力，Anthropic 联合 AWS、Microsoft、Google 等约 40 家西方厂商发起了 [[Project Glasswing]] 安全合作计划，旨在优先修复关键基础设施漏洞。该计划具有明显的地缘排他性，未包含中国企业。

## 对比

与 [[360漏洞挖掘智能体]] 相比，Mythos 更侧重于通用模型的代码理解能力，而 360 的方案更侧重于实战攻防经验的工程化落地和闭环验证。