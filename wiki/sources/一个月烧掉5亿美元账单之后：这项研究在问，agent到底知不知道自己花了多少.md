---
type: source
title: "一个月烧掉5亿美元账单之后：这项研究在问，Agent到底知不知道自己花了多少"
created: 2026-06-04
updated: 2026-06-04
tags: [agent, 预算意识, bagen, token成本, 评测基准, 机器之心]
related: [bagen-预算意识评测基准, 预算意识, tokenmaxxing, ai-subscription-crisis, claude-code]
sources: ["一个月烧掉5亿美元账单之后：这项研究在问，agent到底知不知道自己花了多少.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/JQA-jQOZgMUYLNy4-l8JJw"
venue: 机器之心
---

# 一个月烧掉5亿美元账单之后：这项研究在问，Agent到底知不知道自己花了多少

## 摘要

本文报道了来自西北大学、O2 AI Lab、斯坦福大学、All Hands AI、密歇根大学、康奈尔大学等机构联合提出的 [[bagen-预算意识评测基准]]（Budget-Aware Agent）研究。该研究首次将"[[预算意识]]"定义为独立的智能体子能力，并通过 [[rollout-replay协议]] 在四个环境、五个前沿模型上进行了系统评测。

## 核心内容

### 背景：AI成本失控事件频发
- 一家企业因未设用量上限，一个月烧掉5亿美元 [[claude-code]] 账单（[[axios]] 报道）
- [[uber]] 工程师4个月烧光全年Claude Code预算
- [[亚马逊]] 因员工刷Token取消内部AI排行榜
- [[微软]] 收缩内部Claude Code授权

### 研究贡献
1. 将[[预算意识]]形式化为独立于任务完成能力的智能体子能力
2. 提出[[渐进式区间估计]]替代单点估计
3. 设计[[rollout-replay协议]]将估算能力与完成能力解耦
4. 构建[[warehouse-供应链模拟环境]]，基于真实企业数据

### 四个核心发现
1. **能力分离**：任务成功率和估计质量弱相关（r≈0.35）
2. **[[系统性乐观偏差]]**：20个组合中17个系统性低估剩余预算
3. **[[迟到认知]]**：预算消耗60%时仍有70%以上预测可行
4. **信号可用但训练脆弱**：早停策略可省28%-64% token；SFT可将可行性判断从25.5%提到90%，但区间估计SFT+RL后覆盖率仅47%

### 评测对象
[[gpt-5-2-instant]]、[[claude-opus-4-7]]、[[claude-sonnet-4-6]]、[[gemini-3-1-pro]]、[[qwen3-235b]]

### 未来方向
提前求援、及时止损、向上移交——将预算从"事后账单"转变为"过程中的控制信号"

## 关联
- 前期工作 [[ragen-2]] 入选 ICML 2026 Oral
- 与 [[tokenmaxxing]] 形成直接对立：Token消耗≠价值交付
- 补充 [[ai-subscription-crisis]] 的企业案例