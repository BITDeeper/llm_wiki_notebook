---
type: entity
title: Mythos
tags: ["ai-model", "cybersecurity", "anthropic", "offensive-security", "defensive-security", "autonomous-agent", "model", "leak", "agent", "benchmark", "claude", "llm", "security", "ai-models", "internal", "frontier", "模型", "架构", "神秘模型", "code-agent", "ai", "网络安全", "涌现", "ai模型", "前沿模型", "ai安全", "大模型", "零日漏洞", "旗舰模型", "未发布"]
related: ["anthropic", "project-glasswing", "美国国家安全局", "部署安全", "修改版模型", "saaspocalypse", "ai-takeoff", "claude-code", "capybara-v2-fast", "opus-4-6", "claude-opus", "scaling-law", "360漏洞挖掘智能体", "claude-opus-4-7", "安全缓冲带", "字节-seed-团队", "循环语言模型", "gpt5.4", "图搜索", "opus-4-7", "task-horizon", "用ai加速预训练", "下游涌现", "gpt-5.5", "gemini-3.5-pro", "mdash", "cybergym", "asi路径之争", "微软", "aisi-英国ai安全研究所", "logan-graham", "ai辅助零日攻击首次实锤-20260512", "ai网络安全攻防竞赛", "gpt-5.5-cyber", "防御者优势窗口", "claude-opus-4-8"]
created: 2026-04-22
updated: 2026-05-29
sources: ["anthropic最强网络攻防大模型mythos，美国国安局早就一直在用了.md", "claude新模型危险，鲍威尔召集华尔街紧急开会！全美安全股暴跌2万亿.md", "anthropic王炸claude基准测试泄露，卡皮巴拉细节曝光！还在代码里下毒.md", "anthropic史上最大训练曝光，ilya错了？ceo哀嚎：创业公司将被毁灭.md", "挖漏洞何必mythos，国产智能体早跑通了.md", "claude-opus-4.7来了，公开模型里的sota！不过用起来gpt味好浓.md", "claude强到不敢发的mythos，被质疑用了字节seed技术.md", "anthropic最危险路线图曝光-无限记忆、多智能体!-硅谷ai终局仅剩双雄决顶.md", "深度｜karpathy为何突然加入anthropic，只能当dario的「-2」？.md", "gemini-3.5-pro全网首曝，编程追平gpt-5.5！谷歌终于狠起来了.md", "最强黑客大模型，不再是mythos.md", "cyber天花板被打穿！aisi实测mythos能力正以4.5月翻倍速冲向asi.md", "谷歌首度证实：黑客已开始用ai发动真实网络攻击！.md", "claude-opus-4.8实测封神！强到离谱，也贵到肉痛.md"]
origin_date: 2026-04-01
---

# Mythos（Claude Mythos Preview）

**Mythos**（亦称 Mythos Preview）是 [[Anthropic]] 的内部最强前沿大语言模型，也是 Anthropic 下一代旗舰模型的内部代号。该模型于 2026 年 4 月通过 [[Project Glasswing]] 受邀内测首次亮相，迄今未公开开放。因其异常强大的性能和未公开的架构细节，被称为"神话"模型。它主要用于漏洞挖掘和网络安全研究，是 Anthropic 手中"能力拉满"的最强模型。

Mythos 是当前 AI 能力天花板级别的模型，已重新定义了前沿标准。在三巨头竞争格局中，它代表"模型质量"的极致——[[gemini-3.5-pro]] 和 [[gpt-5.5]] 均未达到其水平。目前公认在 AI 安全能力上表现最优的**单一模型**。

## 关键人物

- **[[Logan Graham]]**：Anthropic 前沿红队负责人、Glasswing 项目负责人，确认 AISI 测试版本即为已部署的生产模型，正在 Claude APP 中运行。

## 核心能力与实战案例

Mythos 在代码审计和安全漏洞挖掘方面代表了 AI 能力的质变，能够处理需要长期上下文理解和深度逻辑推理的复杂工程任务。

### 网络安全涌现

Anthropic 承认这些能力不是刻意训练的结果，而是通用推理和软件工程能力提升的 [[下游涌现]]。这一发现证明：预训练做得越好，涌现出的能力越超出预期。Mythos 在**没有被专门训练网络安全**的情况下，展现了惊人的安全研究能力：

- **全平台零日漏洞发现**：在"每一个主流操作系统和每一个主流浏览器"中发现了零日漏洞，数量以千计，其中很多已存在数十年而未被人类发现。
- **OpenBSD 漏洞挖掘**：Mythos 通读了整个 OpenBSD 源代码树，成功发现了一个存活 **27 年** 的漏洞。这是所有人类审查者、fuzzer 和静态分析器三十年都未发现的。
- **FreeBSD 漏洞发现**：自主发现并利用 FreeBSD 中一个存在 **17 年** 的远程代码执行漏洞。
- **FFmpeg 缺陷发现**：发现 FFmpeg 中 **16 年** 的缺陷。
- **Mozilla Firefox 修复**：2026 年 4 月，Mozilla Firefox 团队利用 Mythos 预览版成功修复了 **423 个** 安全漏洞。这一数字是过去 15 个月总计 31 次修复的十几倍，且过程中完全没有误报。
- **CyberGym 测试**：在 [[CyberGym]] 测试中得分 83.1%（上一代 Opus 4.6 为 66.6%），并发现了上千个零日漏洞。

### AISI 评测成绩

英国 AI 安全研究所（[[AISI-英国AI安全研究所|AISI]]）独立评估确认，Mythos 在自主网络攻击能力上实现了阶跃式突破，是**第一个同时通过 AISI 两套网络安全测试范围**的模型——作为对比，[[gpt-5.5]] 只通过了一套。AISI 承认评测框架已经快跟不上 Mythos 的能力了。

#### The Last Ones 靶场

- 模拟企业内网 32 步完整渗透链（人类专家约需 20 小时）
- **10 次尝试，成功 6 次**（对比 [[GPT-5.5]] 的 3/10）
- 最佳单次成绩：完整打穿 32 步渗透链，从初始侦察到完全网络接管
- Mythos 是**第一个**能从头到尾完成 32 步企业网络攻击模拟的模型

#### Cooling Tower 靶场

- 此前所有模型均未通过的攻防靶场
- **Mythos 首次攻破，10 次成功 3 次**

## 性能特征

Mythos 在各项测试中的整体表现比公开可用的 [[Claude Opus 4.7]] 优越约 **10% 至 15%**。在特定任务上，它表现出与其代际不符的巨大优势，尤其是在需要迭代推理的领域：

- **图搜索**：在 GraphWalks BFS（广度优先搜索）测试中得分 80%，远超 [[GPT5.4]] 的 21.4%。
- **效率指标**：使用的 Token 数量仅为 Opus 4.6 的 1/5，但推理速度更慢，价格贵 5 倍。
- **瓶颈特征**：瓶颈是 [[token天花板效应|Token 预算]] 而非智力上限——放宽 Token 限制后表现立刻跃升。

## 架构猜测

Mythos 的性能特征与 [[循环语言模型]] 高度吻合，这与其"超大参数通用模型"路线（本质上是"读代码猜漏洞"）存在技术路线上的讨论：

1. **潜空间迭代**：Token 少但速度慢，表明计算发生在潜空间而非 Token 生成层面。
2. **归纳偏置匹配**：在图遍历任务上的"异常尖峰"符合循环架构对迭代图算法的适应性。
3. **知识操作增强**：漏洞发现（控制流图遍历）能力的提升，源于架构对知识操作（而非存储）的增强。

Anthropic 未公开 Mythos 的架构细节，这种"黑盒"状态引发了技术社区的广泛猜测。尽管证据强烈指向循环架构，但官方从未确认是否使用了 [[字节-seed-团队]] 的技术。

## 商业策略与部署

Mythos 的存在揭示了 Anthropic 的"双轨制"产品策略：

1. **技术展示**：通过 Mythos 展示 AI 技术的极限能力。
2. **安全落地**：通过 [[Claude Opus 4.7]] 等公开模型，在能力与安全之间建立缓冲，实现大规模商业化应用。

由于其能力过强且存在被滥用的风险，Anthropic 选择将其封锁，未对公众开放，仅向美国和英国的少数受信任机构（如 [[美国国家安全局]]）提供访问权限。其价格极其昂贵，约为 [[Claude Opus 4.7]] 的 **5 倍**，这主要源于其巨大的算力消耗和有限的部署规模。

### 限制发布的原因

Mythos 在安全领域的强大能力使其具有双重用途风险——既能用于防御性安全审计，也能被用于攻击性漏洞利用。Anthropic 选择限制发布，体现了对 AI 安全能力的审慎态度。Anthropic 通过分阶段发布策略创造 [[防御者优势窗口]]，为防御方争取修补时间。

## Project Glasswing

围绕 Mythos 的能力，Anthropic 联合 AWS、Microsoft、Google 等约 40 家西方厂商发起了 [[Project Glasswing]] 安全合作计划，旨在优先修复关键基础设施漏洞。该计划具有明显的地缘排他性，未包含中国企业。

## 竞争格局

Mythos 作为单一模型仍是最强的，但被 [[微软]] 的 [[mdash]]（88.45%）的多 Agent 系统超越——[[mdash]] 在 [[CyberGym]] 基准测试中取得 88.45% 的成绩，排名第一，而 Mythos 以 83.1% 排名第二。这一结果引发了关于 [[asi路径之争]] 的广泛讨论：单一强大模型 vs. 多 Agent 协作系统，哪条路径更接近真正的 AI 超级智能。

[[OpenAI]] 推出的 [[gpt-5.5-cyber]] 是对标 Mythos 的竞品。

## 战略地位

Mythos 是当前最强大的模型，也是最强大的工具。[[andrej-karpathy|Karpathy]] 加入 Anthropic 的核心使命就是用 Mythos/Claude 来改进模型本身的制造方式——即 [[用ai加速预训练|用AI加速预训练]]。

## 与 Opus 4.8 的关系

业内人士将 Mythos 定位为 Anthropic "真正的杀招"，而非过渡产品。[[claude-opus-4-8|Opus 4.8]] 距 Opus 4.7 仅 6 周的仓促迭代，被解读为 Anthropic 应对 [[gpt-5.5|GPT-5.5]] 市场蚕食的应急措施——Opus 4.8 被视为"一个过渡的创有贴"，Mythos 才是"真正的智能质变"。预计 Mythos 将在 Opus 4.8 发布后"几周内"面世（约 2026 年 6 月中下旬），具体能力参数和发布日期尚未公布。Mythos 代表 Anthropic 真正的技术储备和战略方向。

## 更广泛的意义

Mythos 代表了 AI 漏洞发现能力的"天花板"。但 GTIG 报告证实，即使没有 Mythos 级别的模型，现有商业大模型已足以帮助黑客发现零日漏洞——"Mythos 代表的是天花板，但地板已经够高了。"这一现实加剧了 [[ai网络安全攻防竞赛]] 的紧迫性。

## 对比

与 [[360漏洞挖掘智能体]] 相比，Mythos 更侧重于通用模型的代码理解能力，而 360 的方案更侧重于实战攻防经验的工程化落地和闭环验证。