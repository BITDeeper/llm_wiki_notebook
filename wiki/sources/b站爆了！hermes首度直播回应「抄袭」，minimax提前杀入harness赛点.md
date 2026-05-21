---
type: source
title: "B站爆了！Hermes首度直播回应「抄袭」，MiniMax提前杀入Harness赛点"
tags: [ai-industry, agent, harness, minimax, hermes-agent, openclaw]
related: [minimax, harness, m2-7, maxhermes, maxclaw, hermes-agent, openclaw, nous-research, 智能密度]
created: 2026-04-18
updated: 2026-04-18
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/DLLvf3XCu3beo55cKWBDog"
venue: "新智元"
sources: ["b站爆了！hermes首度直播回应「抄袭」，minimax提前杀入harness赛点.md"]
---

# B站爆了！Hermes首度直播回应「抄袭」，MiniMax提前杀入Harness赛点

## 核心摘要
本文记录了 Hermes Agent 业务负责人 Tommy Eastman 首次公开回应抄袭指控，以及 MiniMax 提出的“Model + Harness”双向飞轮战略。文章指出 AI 竞争维度已从单纯的模型参数比拼转向“智能密度”与工程落地能力的结合。

## 关键事件
- **抄袭争议回应**：针对 EvoMap 指控 Hermes Agent 抄袭代码一事，Nous Research 业务负责人 Tommy Eastman 在 B站直播中回应称“不熟，勿Cue”，并表示直到推文出现才听说 EvoMap，强调团队是理念驱动的开源组织。
- **日均 Token 消耗激增**：Hermes Agent 整体日均 Token 消耗从 20 亿飙升至近 3000 亿，其中 MiniMax M2.7 在 OpenRouter 上日均消耗超过 250 亿 Token。

## 技术与战略洞察

### 1. 竞争维度的转变
行业焦点正从“模型智商”转向“工程落地”。[[minimax]] CEO 闫俊杰提出公式：
`AI平台价值 = 智能密度 × Token吞吐量`
这标志着竞争从比拼模型跑分转向比拼同等 Token 能产出的实际价值。

### 2. Model + Harness 双向飞轮
MiniMax 构建了一个闭环系统：
- **模型层**：[[m2-7]] 模型为 [[harness]] 优化底层能力（工具调用、长上下文一致性）。
- **产品层**：[[maxhermes]] 和 [[maxclaw]] 验证真实场景需求，反馈数据用于模型训练。
- **基础设施**：依赖腾讯云（训练侧）和阿里云（部署侧）提供高并发沙箱能力。

### 3. M2.7 的自我进化
[[m2-7]] 是首个在训练过程中深度参与自我迭代的商用模型：
- 承担了强化学习团队 30%-50% 的工作流。
- 自主优化 Harness 超过 100 轮，效果提升 30%。
- 在 MLE Lite 竞赛中取得 9 金 5 银 1 铜。
- 在 40 个复杂 Skills（>2000 Token）测试中保持 97% 遵循率。

### 4. 云端沙箱的关键作用
Agent 大规模云端运行的瓶颈在于沙箱环境：
- **腾讯云**：提供 80ms 极速启动，支撑 Forge 强化学习框架。
- **阿里云**：基于 ACK/ACS 架构，提供 20-40ms 实例供给，支持每分钟 15000 个沙箱弹性扩缩。

## 行业影响
- **开源社区认可**：[[hermes-agent]]、[[openclaw]]、Notion Custom Agents、Kilo Code 等头部项目均将 MiniMax 作为默认或首选模型。
- **中国模型领先论**：Tommy Eastman 认为“中国在开源模型方面已经领先了”，开源与闭源的差距从未如此接近。

## 相关实体
- [[nous-research]]：Hermes Agent 开发者。
- [[openclaw]]：AI 智能体工具，MiniMax 推出了基于其架构的 MaxClaw。
- [[minimax]]：本文核心公司，M2.7 模型及 MaxHermes/MaxClaw 产品的开发者。