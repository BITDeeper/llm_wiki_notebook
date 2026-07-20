---
type: event
title: Fable 5发布
created: 2026-06-10
updated: 2026-06-12
tags: [anthropic, 模型发布, ai编程, 范式转移, 旗舰模型, 2026年6月, fable-5, mythos, 编码]
related: [claude-fable-5, mythos-5, claude-code, anthropic, 从监工到产品经理, claude-opus-4-8, project-glasswing, ai-subscription-crisis, anthropic暂停研发提案-20260604, 双万亿ipo赛跑-2026q3, fable-5, gpt-5.5, andrej-karpathy, openai-token降价讨论-20260612]
origin_date: 2026-06-10
participants: [anthropic, andrej-karpathy, claude-code]
causes: [mythos-5泄露事件-202606, anthropic-s1秘密提交-20260601]
effects: [从监工到产品经理, ai-subscription-crisis, openai-token降价讨论-20260612]
significance: high
time_span:
  start: 2026-06-10
  end: null
sources: ["rss/fable-5一天干完两个月，这类工程师更值钱了.md", "rss/刚刚，claude最强模型fable-5发布：性能爆炸，价格翻倍.md", "rss/openai即将开启token大降价！.md"]
---
# Fable 5发布

2026年6月10日，[[anthropic|Anthropic]]正式发布[[claude-fable-5|Claude Fable 5]]和[[mythos-5|Claude Mythos 5]]两款旗舰模型，同时确认两者为同一底层模型的孪生关系。Fable 5是首个面向公众的Mythos级模型，也是Anthropic有史以来最强大的模型发布，标志着AI编程从辅助工具向自治工程代理的范式跃迁，更是Anthropic在[[双万亿ipo赛跑-2026q3|IPO前沿]]（计划10月上市）展示技术实力的关键节点。

## 背景

### 泄露事件与IPO前奏

2026年6月初，Mythos 5性能指标通过API短暂暴露引发泄露事件（[[mythos-5泄露事件-202606]]）。Fable 5的官方发布可视为对泄露事件的正式回应，也是Anthropic在6月1日秘密提交S-1后的技术实力展示。

### 关键时间线

- **6月1日**：Anthropic秘密提交S-1（[[anthropic-s1秘密提交-20260601]]）
- **6月4日**：Anthropic联合呼吁全球暂停AI研发（[[anthropic暂停研发提案-20260604]]）——仅6天前
- **6月5日**：[[费城半导体闪崩-20260605|费城半导体闪崩]]
- **6月9日**：[[openai-s1秘密提交-20260609|OpenAI秘密提交S-1]]
- **6月10日**：Fable 5 / Mythos 5正式发布（本事件）
- **同周传闻**：OpenAI GPT-5.6发布

## 发布内容

### Claude Fable 5

- 面向全渠道开放的大众版旗舰模型
- 与Mythos 5共享底层架构，但加装安全护栏：涉及网络安全、生物和化学的请求会自动回退到前代模型[[claude-opus-4-8|Opus 4.8]]
- 配备[[模型安全降级机制|安全降级机制]]（95%对话不触发）
- [[蒸馏防护]]：禁止用于开发新大模型
- 定价：输入$10/百万Token，输出$50/百万Token，是[[gpt-5.5|GPT-5.5]]的两倍

### Claude Mythos 5

- 与Fable 5同底座，去除部分安全限制
- 仅限[[project-glasswing|Project Glasswing]]合作伙伴使用（网络防御者和基础设施方）
- 首个能持续提出新颖科学假说的Anthropic模型
- 分子生物学盲测80%胜出，一个大肠杆菌蛋白质假说已被独立实验室证实

### 速率限制与订阅窗口

- **速率限制清零**：所有用户的5小时和每周速率限制全部清零
- **6月10日至22日**：Pro、Max、Team及企业版免费使用Fable 5
- **6月23日起**：从订阅方案移除，转为Usage Credits单独计费

## 性能突破

在核心编码基准上对GPT-5.5形成代际碾压：

- **SWE-bench Pro**：80.3% vs 58.6%（差距22个百分点）
- **FrontierCode Diamond**：29.3% vs 5.7%（约五倍差距）

[[andrej-karpathy|Andrej Karpathy]]称其为"值得大版本号跳跃的阶梯式飞跃"。

## 核心影响

### 人机协作范式质变

[[claude-code|Claude Code]]团队从验证"Claude有没有做对事情"转向验证"Claude有没有在做对的事情"。开发者角色从监工转变为产品经理，详见[[从监工到产品经理]]。

### 工程代理系统成型

Claude Code新增[[dynamic-workflows|Dynamic workflows]]（单次最多1000智能体编排）和[[goal命令|/goal]]（跨轮次自治评估），从对话工具向工程代理系统演进。

### 标杆案例

[[stripe|Stripe]]使用Fable 5在一天内完成了5000万行Ruby代码库迁移，此前估计需要一个团队干两个多月。

## 叙事矛盾

此次发布与6天前Anthropic呼吁暂停AI研发形成极端矛盾。一家公司在呼吁全球暂停后不到一周即发布史上最强模型，这一行为被广泛视为IPO前的"秀肌肉"行为。

## 竞争影响

- GPT-5.5在4月发布时刚帮[[codex|Codex]]追平甚至反超Claude Code的多项基准优势，仅七周后Fable 5又把差距拉开
- Fable 5发布进一步巩固[[ai创业收入双寡头格局|AI创业收入双寡头格局]]
- 定价翻倍在[[token末日|Token末日]]背景下加剧企业成本治理压力，引发[[ai-subscription-crisis|AI订阅危机]]
- Fable 5的发布直接触发了[[openai|OpenAI]]的[[token价格战|Token降价讨论]]（[[openai-token降价讨论-20260612]]）
- GPT-5.6传闻同周发布，双寡头军备竞赛进一步升级

## 因果链

[[anthropic-s1秘密提交-20260601|Anthropic S-1秘密提交]]（6月1日）→ [[mythos-5泄露事件-202606|Mythos 5泄露]]（6月初）→ [[anthropic暂停研发提案-20260604|Anthropic呼吁暂停研发]]（6月4日）→ Fable 5/Mythos 5官方发布（6月10日）→ 媒体解读与最佳实践传播 → OpenAI Token降价讨论