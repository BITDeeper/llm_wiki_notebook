---
type: entity
title: Opus 4.8
created: 2026-06-13
updated: 2026-06-16
tags: ["ai模型", "anthropic", "claude", "基准测试", "agent", "model", "大语言模型", "旗舰模型", "大模型", "安全架构", "模型", "降级模型", "安全兜底", "性能基准", "安全降级模型"]
related: ["anthropic", "gpt-5-5", "the-veil-of-history", "单agent全栈交付", "scaling-law", "claude-fable-5", "mythos-5", "opus-4-7", "fable-5", "claude-5全球禁令事件", "安全降智", "glm-5-2", "安全分类器+模型防御架构"]
sources: ["opus-4.8连夜算尽1170亿人命运，一句话敲出人类投胎模拟器！.md", "rss/刚刚，anthropic首个神话级claude-5正式解禁！.md", "opus-4.8连夜算尽1170亿人命运，一句话敲出人类投投胎模拟器！.md", "rss/神话级claude-5，登顶了！.md", "rss/fable-5一天干完两个月，这类工程师更值钱了.md", "rss/fable-5自带反蒸馏机制！检测到就降智，误触率高到离谱.md", "rss/claude-fable-5「发疯」！高数算网络攻击，问癌症直接封号？.md", "rss/突发！anthropic全球停用claude-5.md", "rss/交白卷也排第一？fable-5二百题全部拒答，却登顶最严ai编程基准.md", "rss/fable-5突遭下架，glm-5.2全量开放！.md", "rss/5秒攻破，仅需1次对话：fable-5最强安全机制被华人团队破解.md"]
---
# Opus 4.8

**Opus 4.8** 是 [[anthropic|Anthropic]] 旗下 Claude 系列的高性能大语言模型，也是 [[claude-fable-5|Fable 5]] 的上一代模型。在 Fable 5 发布后，Opus 4.8 的角色从旗舰模型转变为 Fable 5 安全架构中的**兜底模型**（保守处理模型），同时也在行业语境中作为 [[glm-5-2|GLM-5.2]] 等新兴模型编程能力的对标基准。

## 在 Fable 5 安全体系中的定位

当 Fable 5 的安全护栏被触发时（网络安全、生物化学、前沿AI研发、模型蒸馏等高风险领域），模型会自动回退至 Opus 4.8 进行更加保守的处理，以降低安全风险：

- **静默降智时期**：Fable 5 检测到敏感查询后，悄悄切换至 Opus 4.8 级别输出，不通知用户
- **透明降级时期**：舆论压力下 Anthropic 改为明确通知用户并切换至 Opus 4.8
- **Terminal-Bench 2.1**：约 20.9% 的测试用例触发安全拒绝并回退至 Opus 4.8
- **Vals AI 实测**：因 Fable 5 拒绝率偏高，将 Opus 4.8 配置为默认兜底模型

## Fable 5 被攻破事件中的角色

在 Fable 5 被[[安全分类器+模型防御架构|华人团队攻破]]事件中，流量分析证实有害输出来自 Fable 5 本身，而非触发安全机制后自动切换的 Opus 4.8。这表明攻击者成功绕过了安全分类器的检测，实质性突破了 Fable 5 的安全防线，而非利用了兜底降级路径。

## 作为行业性能基准

在跨模型对比语境中，Opus 4.8 被广泛用作"高端表现"的参照系：

- 内测用户评价 [[glm-5-2|GLM-5.2]] 已达到"Opus 级"表现
- 知乎上有讨论称"中转站用 GLM 冒充 Opus 分辨不出来"

## 核心矛盾

用户支付 Fable 5 的价格，却可能收到 Opus 4.8 级别的输出——这一[[安全降智|静默降级]]策略是 Fable 5 发布后最大争议的根源。