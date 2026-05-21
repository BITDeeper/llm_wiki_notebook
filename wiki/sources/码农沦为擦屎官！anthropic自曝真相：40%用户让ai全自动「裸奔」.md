---
type: source
title: "码农沦为擦屎官！Anthropic自曝真相：40%用户让AI全自动「裸奔」"
created: 2026-02-19
updated: 2026-02-19
tags: [anthropic, claude-code, ai-agent-autonomy, cognitive-surrender, deployment-monitoring]
related: [anthropic, claude-code, ai-agent-autonomy, cognitive-surrender, deployment-monitoring]
authors: [新智元, KingHZ]
year: 2026
url: "https://mp.weixin.qq.com/s/vXofadwOx6W5Wv1Xt1864A"
venue: "新智元"
sources: ["码农沦为擦屎官！anthropic自曝真相：40%用户让ai全自动「裸奔」.md"]
---

# 源：码农沦为擦屎官！Anthropic自曝真相：40%用户让AI全自动「裸奔」

## 摘要
本文报道了 Anthropic 发布的一项关于 AI 智能体自主性的量化研究，揭示了用户对 AI 信任度的快速演变以及软件工程师角色的根本性转变。Claude Code 的创造者 Boris Cherny 预言“软件工程师”这一职业将消失，转变为“构建者”或“产品经理”。研究数据显示，40% 的有经验用户会完全自动批准 AI 的操作，且 Andrej Karpathy 等行业大佬自述手写代码能力正在萎缩。

## 核心发现

### 职业角色的转变
- **Boris Cherny 的观点**：Claude Code 创造者认为编码问题已被解决，“软件工程师”头衔将逐渐消失，转变为负责编写技术规格书和审查 AI 代码的“构建者”或“产品经理”。
- **“擦屎官”现象**：工程师的工作重心从创造转向审查和修复 AI 生成的代码。
- **技能退化**：OpenAI 前成员 Andrej Karpathy 自述手写代码能力开始萎缩，反映了 [[认知投降]] 的现实案例。

### 用户信任与自主性数据
Anthropic 分析了数百万次 Claude Code 和 API 交互，得出以下结论：
- **信任建立极快**：新用户倾向于逐一批准操作，而到第 750 次会话时，超过 **40%** 的会话已完全自动批准。
- **交互时长增加**：第 99.9 百分位的轮次持续时间在三个月内几乎翻倍（从 25 分钟增加到 45 分钟），表明 AI 正在处理更复杂的任务。
- **监督策略演变**：用户从“逐步审批”转向“监控并干预”。更有经验的用户打断 AI 的频率（9%）高于新用户（5%）。

### 安全机制与风险
- **AI 自我暂停**：Claude Code 主动暂停以寻求澄清的频率是人类打断它的两倍以上。Anthropic 强调训练模型识别不确定性是关键的安全属性。
- **高风险操作**：虽然 73% 的操作有人类监督，且仅 0.8% 涉及不可逆风险（如发送邮件），但智能体已触及安全系统、金融交易和生产部署等高危领域。
- **监控盲区**：Anthropic 承认目前缺乏有效手段将独立的 API 请求串联成连贯的会话，导致对某些行为（如金融交易是否真实执行）存在理解盲区。

## 行业影响
- **部署后监控的重要性**：仅靠部署前评估无法覆盖所有场景，必须建立基础设施以监控真实世界中的 AI 行为。
- **监管建议**：不应强制规定具体的交互模式（如强制每步批准），而应关注人类是否处于能有效监控和介入的位置。

## 相关条目
- [[anthropic]]：研究发布方，强调 AI 安全与部署监控。
- [[claude-code]]：主要研究对象，文中详细引用了其用户行为数据。
- [[ai-agent-autonomy]]：本文核心概念，量化了智能体的自主程度及用户信任演变。
- [[cognitive-surrender]]：Karpathy 的案例和“擦屎官”现象是该概念的实证。
- [[deployment-monitoring]]：Anthropic 提出的关键技术需求。