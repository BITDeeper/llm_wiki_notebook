---
type: source
title: "Anthropic版「狼来了」引华尔街恐慌！27年漏洞，Mythos被8个AI秒杀"
tags: [ai-security, anthropic, mythos, opus-4.6, controversy, marketing]
related: [anthropic, claude-mythos, opus-4.6, 恐惧营销, 锯齿形前沿, aisle, george-hotz]
created: 2026-04-12
updated: 2026-04-12
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/3nqXQULp-q0SFkADwIyspA"
venue: "新智元"
sources: ["anthropic版「狼来了」引华尔街恐慌！27年漏洞，mythos被8个ai秒杀.md"]
---

# Anthropic版「狼来了」引华尔街恐慌！27年漏洞，Mythos被8个AI秒杀

## 摘要
本文报道了 [[Anthropic]] 发布 [[Claude Mythos]] 后引发的争议。尽管 [[Anthropic]] 高调宣称 Mythos 挖掘了大量 0day 漏洞并引发华尔街恐慌，但独立研究团队 [[AISLE]] 和安全专家 [[George Hotz]] 指出其能力被严重夸大。同时，[[Anthropic]] 的旗舰模型 [[Opus 4.6]] 被曝出严重“降智”，思考长度缩短，引发用户不满。

## 核心观点

### Mythos 能力被夸大
- **复测结果**：[[AISLE]] 团队使用 8 个开源小模型（最小仅 30 亿参数）成功复现了 Mythos 标榜的 FreeBSD 和 OpenBSD 漏洞挖掘能力。
- **数据水分**：Mythos 所谓的“数千个漏洞”多存在于无法利用的旧软件中，且依赖 198 次人工复核。
- **锯齿形前沿**：AI 网络安全能力并非随模型规模线性提升，小模型（如 [[DeepSeek R1]]）在识别虚假漏洞测试中甚至优于 GPT-5.4 和 Claude Sonnet 4.5。

### 恐惧营销指控
- 投资人 [[David Sacks]] 批评 [[Anthropic]] 利用“恐惧营销”博取关注，称其为“骗局”。
- [[Ramez Naam]] 指出 [[Epoch AI]] 的能力指数（ECI）显示 Mythos 并未带来突破性进展，仅比 GPT 5.4 强一点。
- [[George Hotz]] 认为漏洞稀缺是因为法律而非技术难度，批评 AI 实验室夸大网络安全风险。

### Opus 4.6 降智争议
- **脑叶切除**：日志显示 Claude 中位思考长度从 2200 字符降至 600 字符。
- **成本上升**：由于模型变笨，用户重试次数增加，API 请求量暴涨 80 倍，导致支出飙升。
- **资源错配**：用户批评 [[Anthropic]] 在核心模型不稳的情况下，将算力浪费在开发“/buddy”等花哨功能上。

## 关键实体
- [[Anthropic]]：被指控夸大宣传和产品管理混乱。
- [[Claude Mythos]]：引发争议的网络安全模型预览版。
- [[Opus 4.6]]：被指“降智”的旗舰模型版本。
- [[AISLE]]：发布复测报告，证明小模型可媲美 Mythos。
- [[George Hotz]]：传奇黑客，批评 AI 实验室夸大风险。
- [[DeepSeek R1]]：在测试中表现出色的开源模型。
- [[David Sacks]]：批评“恐惧营销”的投资人。
- [[Ramez Naam]]：引用 ECI 数据质疑 Mythos 进展的投资人。
- [[Epoch AI]]：维护 Epoch 能力指数的研究机构。

## 关键概念
- [[恐惧营销]]：通过夸大 AI 风险来吸引关注的策略。
- [[锯齿形前沿]]：AI 能力在不同任务上不均匀分布的现象。
- [[脑叶切除]]：模型推理能力显著下降的隐喻。
- [[0day 漏洞]]：尚未被修复的安全漏洞。
- [[Epoch 能力指数]]：用于对比模型能力的综合指标。
- [[薛定谔的超级 AI]]：指实验室叙事与产品体验割裂的状态。

## 相关链接
- [[ai-subscription-crisis]]：Opus 4.6 降智导致用户成本上升，加剧订阅制矛盾。
- [[三系统认知框架]]：Opus 4.6 思考长度缩短削弱了系统 2 的审慎思考能力。