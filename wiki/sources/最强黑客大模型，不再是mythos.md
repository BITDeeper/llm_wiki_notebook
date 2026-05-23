---
type: source
title: "最强黑客大模型，不再是Mythos"
created: 2026-05-15
updated: 2026-05-15
tags: [ai安全, 多agent系统, 漏洞发现, 微软, cybergym]
related: [mdash, mythos, cybergym, 多agent系统范式, asi路径之争]
sources: ["最强黑客大模型，不再是mythos.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/PGEiBoF5Rwv9Izcl0zS98A"
venue: 新智元
---
# 最强黑客大模型，不再是Mythos

新智元2026年5月15日发布的深度报道，核心内容为微软发布代号 [[mdash]] 的多 Agent AI 安全系统，以 88.45% 的成绩登顶 [[cybergym]] 基准测试榜首，超越 [[anthropic]] 的 [[mythos]]（83.1%）和 [[openai]] 的 [[gpt-5.5]]（81.8%）。

## 核心论点

1. **系统可抹平模型差距**：微软没有第一梯队前沿模型，但通过调度 100+ 专业 Agent 的多阶段流水线，用公开可用模型跑出了最高分——"用别人的砖，盖了最高的楼"。
2. **ASI 存在两条路径**：路径一为训练极致单一模型（Anthropic/OpenAI 路线），路径二为构建最大化现有模型能力的系统（微软 MDASH 路线），两者互补而非替代。
3. **实战验证**：MDASH 已发现 16 个 Windows 高危漏洞（4 个 Critical 级远程代码执行），内部回溯测试中 clfs.sys 五年漏洞召回率 96%，tcpip.sys 达 100%。

## 关键数据

- CyberGym 成绩：MDASH 88.45% > Mythos 83.1% > GPT-5.5 81.8%
- 1507 道测试题来自 188 个真实开源项目
- 16 个 CVE 已在 2026 年 5 月 Patch Tuesday 中修复
- Team Atlanta 在 DARPA AI 网络挑战赛中赢得 2950 万美元奖金

## 注意事项

- 榜单成绩由各公司自行提交，无独立第三方验证
- MDASH 使用的底层模型仍来自路径一公司，路径二不能替代路径一
- 攻击者同样可使用公开模型构建类似系统