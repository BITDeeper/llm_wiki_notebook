---
type: source
title: "Claude Fable 5最难档零分！智能体的最后考试来了"
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/zG5OzfD_zZWfUbRHUWP7aA"
venue: 机器之心
tags: [ai评测, 智能体, ale, claude-fable-5, gpt-5.5, 基准测试]
related: [claude-fable-5, ale-智能体的最后考试, 宋晓东, gpt-5.5, gcua-通用计算机使用智能体, 任务完成幻觉]
created: 2026-06-12
updated: 2026-06-12
sources: ["rss/claude-fable-5最难档零分！智能体的最后考试来了.md"]
---
# Claude Fable 5最难档零分！智能体的最后考试来了

本文由[[机器之心]]编辑部发布，报道了[[anthropic|Anthropic]]最新模型[[claude-fable-5|Claude Fable 5]]在两大智能体基准测试中表现分化的现象。

## 核心发现

### Arena vs ALE 表现冲突
[[claude-fable-5|Claude Fable 5]]在Agent Arena（基于数百万真实世界长周期任务评估）中排名第一，超越[[gpt-5.5|GPT-5.5]]。但在[[ale-智能体的最后考试|ALE]]（智能体的最后考试）基准中，Fable 5以22.0%的通过率落后于GPT-5.5的24.0%。

### 成本效益鸿沟
在性能处于同一梯队的情况下，各模型单任务成本差异巨大：
- Fable 5：约15.70美元/任务
- GPT-5.5：约3.80美元/任务
- Composer 2.5：约1.33美元/任务

Fable 5的成本约为其他模型的4至12倍，与[[token末日]]和[[ai-subscription-crisis]]趋势相吻合。

### 最高难度全军覆没
在ALE最高难度「Last-Exam」档位，所有前沿Agent通过率为0%，表明持续推理和长周期可靠执行仍是巨大瓶颈。

## 关键洞察

[[宋晓东]]教授指出：不存在一个在所有场景下都最强的Agent。总分具有掩盖性，真正有价值的信号在于Agent在哪里成功、在哪里失败，以及这些成败模式如何随领域变化。

最常见的失败模式是[[任务完成幻觉]]：Agent未真正验证工作结果就宣布任务完成。

## ALE评测方法论
- 覆盖55个非体力职业、1500+真实专业任务
- 由100+机构的300+位专家贡献
- 仅公开10%任务以防[[基准污染]]
- 目标测试对象为[[gcua-通用计算机使用智能体|GCUA]]（通用计算机使用智能体）