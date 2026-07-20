---
type: event
title: Claude 5全球禁令事件
created: 2026-06-13
updated: 2026-06-13
tags: [ai治理, 出口管制, anthropic, 里程碑事件, 政府监管]
related: [anthropic, claude-fable-5, mythos-5, ai出口管制, pete-hegseth, anthropic-s1秘密提交-20260601, opus-4-8]
origin_date: 2026-06-11
participants: [anthropic, 美国政府]
causes: [ai出口管制]
effects: []
significance: high
time_span:
  start: 2026-06-11
  end: null
sources: ["rss/突发！anthropic全球停用claude-5.md"]
---
# Claude 5全球禁令事件

2026年6月11日，美国政府向 [[anthropic|Anthropic]] 发出出口管制指令，强制要求暂停所有外国人对 [[claude-fable-5|Claude Fable 5]] 和 [[mythos-5|Mythos 5]] 的访问权限。这是AI史上首次已部署的商业大模型被政府强制召回，标志着AI治理进入新阶段。

## 事件时间线

- **2026年6月9日**：Anthropic正式发布Claude Fable 5
- **2026年6月11日17:21**：美国政府向Anthropic送达出口管制指令信函
- **2026年6月11日晚**：Fable 5和Mythos 5全面停服
- **2026年6月13日**：[[新智元]] 发布报道

## 禁令详情

### 管制范围
- 暂停所有外国人对Fable 5和Mythos 5的访问权限
- 无论身处美国境内还是境外
- 包括Anthropic的外籍员工

### 一刀切全停
禁令名义上针对"外国人"，但Anthropic选择对所有客户（包括美国用户）全面禁用以确保合规。其他Claude模型不受影响。

### 越狱疑云
政府信函中未提供任何具体的国家安全顾虑细节。Anthropic推测政府认为已掌握了一种绕过或"越狱"Fable 5安全限制的方法。

## 降级措施

- 新建会话使用默认模型或 [[opus-4-8|Opus 4.8]] 运行
- 现有Fable 5会话报错中止
- API调用Fable 5返回错误
- Anthropic提醒用户"更新集成，切换至其他Claude模型"

## 历史意义

此事件是AI治理的里程碑——首次有政府强制召回已部署给数亿人的商业大模型。它标志着AI监管从政策讨论进入强制执行阶段，对整个AI行业具有深远影响。

## 与IPO的矛盾

此事件发生在Anthropic关键时期：
- 6月1日：Anthropic向SEC秘密提交S-1文件（详见 [[anthropic-s1秘密提交-20260601]]）
- 计划10月IPO上市
- 核心产品被强制召回对IPO叙事构成严重冲击

## 政策背景

此禁令是美国政府对Anthropic持续施压的延续：
- [[pete-hegseth|Pete Hegseth]] 此前已将Anthropic定性为供应链风险
- [[palantir|Palantir]] 曾因政府禁令被迫切换模型
- 此次禁令表明政府对AI公司的管控进一步收紧

## 开放问题

- Fable 5的具体越狱方法是什么？政府掌握的细节未公开
- 禁令是临时性还是永久性？恢复访问的时间表不明
- 此举对Anthropic 10月IPO计划的实质影响
- 其他AI公司（[[openai|OpenAI]]、[[谷歌|Google]]）是否会面临类似管制