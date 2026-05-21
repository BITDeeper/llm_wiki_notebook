---
type: source
title: "有人把巴菲特芒格炼化成Agent，然后开源了…"
tags: [ai-agent, 金融科技, 开源项目, 多智能体系统, 投资策略]
related: [ai-hedge-fund, 炼化大师, runtime-agent-os, langgraph]
created: 2026-04-13
updated: 2026-04-13
authors: [量子位, henry]
year: 2026
url: "https://mp.weixin.qq.com/s/4umG7Vx_cWr0FwWc1YLuWQ"
venue: "量子位"
---

# 有人把巴菲特芒格炼化成Agent，然后开源了…

## 概述
本文报道了由独立开发者 Virat Singh 开发的开源项目 [[ai-hedge-fund]]。该项目通过 [[炼化大师]] 的方式，将沃伦·巴菲特、查理·芒格等 12 位世界级投资大师的思维模型转化为 AI Agent，构建了一个多智能体投资决策系统。项目在 GitHub 上迅速走红，斩获 5 万余 Star。

## 核心内容

### 1. 投资大师 Agent 军团
系统内置了 12 位传奇投资人的数字分身，每位 Agent 都被注入了对应人物标志性的选股逻辑与风险偏好：
- **Warren Buffett (巴菲特)**：寻找护城河宽阔、价格合理的优质企业。
- **Charlie Munger (芒格)**：重视管理层质量与可预测性，只在合理价格买入卓越生意。
- **Ben Graham**：价值投资鼻祖，严守安全边际。
- **Cathie Wood (木头姐)**：笃信颠覆式创新与科技变革。
- **Bill Ackman**：激进主义投资人，敢于重仓押注。
- **Michael Burry**：《大空头》原型，逆向思维猎手。
- **Peter Lynch**：平民投资大师，关注生活中的十倍股。
- **Nassim Taleb**：《黑天鹅》作者，聚焦尾部风险与反脆弱性。
- **其他**：包括 Phil Fisher, Stanley Druckenmiller, Mohnish Pabrai, Aswath Damodaran。

### 2. 专业分析 Agent 团队
除了决策层，系统还配备了 6 位专业分析 Agent：
- **Valuation Agent**：计算内在价值。
- **Fundamentals Agent**：解读财务数据。
- **Technicals Agent**：分析技术指标。
- **Sentiment Agent**：追踪市场情绪。
- **Risk Manager**：测算风险敞口，设定仓位上限。
- **Portfolio Manager**：汇总所有信号，拍板最终交易决策。

### 3. 技术架构
项目采用了典型的 [[runtime-agent-os]] 架构：
- **前端**：基于 React 18 + TypeScript，集成了 **React Flow** 可视化流程编辑器，允许用户像搭积木一样设计投资委员会。
- **后端**：Python + FastAPI，使用 **LangGraph** 进行多智能体编排。所有 Agent 共享同一个 `AgentState` 数据字典，确保信息流转的一致性。
- **兼容性**：支持 OpenAI、Anthropic、Groq、DeepSeek 等 13 种大模型，也可通过 Ollama 进行本地部署。

### 4. 回测与验证
系统内置了回测模块，允许用户使用历史数据验证策略有效性：
```bash
poetry run python src/backtester.py —ticker AAPL,MSFT,NVDA
```
这为连接模拟策略与实盘交易提供了验证手段。

## 观点与争议
- **价值**：AI Agent 能够复刻投资哲学，为散户提供低门槛的“大师级”决策辅助。最有价值的地方在于它提供了一场“辩论”，而非单一的声音。
- **风险**：大部分框架尚无确切实盘收益率记录。回测表现优异不代表实盘能赚钱，存在 [[认知投降]] 的风险（即盲目依赖 AI 而放弃独立判断）。
- **趋势**：投资大师 Agent 化正在成为一个小趋势，类似项目（如李诞团队的“虾”）层出不穷。

## 关键词
- [[炼化大师]]
- [[多智能体编排]]
- [[回测]]
- [[投资委员会模拟]]