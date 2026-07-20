---
type: source
title: "Claude Fable 5「发疯」！高数算网络攻击，问癌症直接封号？"
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/i7BS9mzhanpa5UO0Nlm5SA"
venue: 新智元微信公众号
tags: [ai安全, 过度拒绝, anthropic, claude, 治理, 知识访问权]
related: [claude-fable-5, mythos-5, anthropic, derya-unutmaz, 系统性过度拒绝, glasswing项目]
created: 2026-06-12
updated: 2026-06-12
sources: ["rss/claude-fable-5「发疯」！高数算网络攻击，问癌症直接封号？.md"]
---
# Claude Fable 5「发疯」！高数算网络攻击，问癌症直接封号？

**来源：** 新智元 | **日期：** 2026-06-12

## 摘要

报道Anthropic于2026年6月9日发布的Claude Fable 5在上线24小时内爆发系统性过度拒绝争议。Fable 5作为[[mythos-5|Mythos 5]]的"安全版"，内置激进安全分类器，将纯数学概念（Selmer群、同构）判定为网络安全风险，将"癌症"等基础生物医学词汇触发生物安全标记，导致免疫学家[[derya-unutmaz|Derya Unutmaz]]等科研人员被系统性排除。

## 核心内容

### 事件经过
- **6月9日：** Anthropic正式发布Claude Fable 5，定位为Mythos模型的"安全版"
- **6月10日（发布后24小时）：** 过度拒绝事件集中爆发
  - [[derya-unutmaz|Derya Unutmaz]]因身份被标记为"生物安全风险"，连"癌症"一词都无法使用
  - Martin Shkreli发布《危险数学》帖文，展示Selmer群、同构被判定为网络安全风险的截图
  - "心脏是干什么的"等初中生物题无法通过安全防护

### 技术架构
- Fable 5与[[mythos-5|Mythos 5]]共享底层模型，区别仅在安全开关
- 检测到网络安全、生物、化学、蒸馏相关请求后自动路由到Opus 4.8处理
- 官方声称95%以上session不受影响，但生物医学和数学领域几乎全面受阻

### 治理批评
- [[mythos-5|Mythos 5]]不设限版本仅向[[glasswing项目|Glasswing项目]]信任伙伴开放
- 加州大学圣塔芭芭拉分校助理教授Xin Eric Wang公开批评Anthropic"宣扬基于恐惧的叙事，通过严格把关限制访问"
- 文章指出[[安全-阉割恶性循环]]已形成：分类器越激进→误伤越多→科研人员越愤怒→公司越觉得需加强安全

### 核心论点
文章认为问题本质是治理/权力结构问题：一家公司通过黑箱分类器单方面决定全人类科研人员能问什么、不能问什么，形成[[ai知识访问权垄断]]。

## 关键引用
- Derya Unutmaz："这比生物封锁更反乌托邦！所有AI权力集中到一家公司，由它单方面决定你能用什么！"
- Xin Eric Wang："Anthropic对公共研究生态系统的贡献却少得多，反而越来越多地宣扬基于恐惧的叙事，并通过严格的把关限制访问。"
- "AGI/ASI的全部意义就在于治愈所有疾病，其他一切都只是锦上添花。但Anthropic却想堵死这条路。"

## 与Wiki其他条目的关联
- 与[[mythos-5泄露事件-202606]]形成直接因果链：泄露事件→激进安全策略→过度拒绝争议
- 与[[anthropic暂停研发提案-20260604]]形成张力：Anthropic一方面呼吁暂停AI研发，另一方面其安全措施本身被批评为过度
- 与[[认知投降]]形成对照：之前关注用户过度信任AI，本文关注AI公司过度限制用户