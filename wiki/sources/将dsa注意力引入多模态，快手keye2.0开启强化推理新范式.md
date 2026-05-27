---
type: source
title: "将DSA注意力引入多模态，快手Keye2.0开启强化推理新范式"
created: 2026-05-26
updated: 2026-05-26
tags: [多模态大模型, 稀疏注意力, 视频理解, agent, 快手, 强化学习]
related: [keye-vl-2-0-30b-a3b, 快手, dsa稀疏注意力, mopd, context-rl]
sources: ["将dsa注意力引入多模态，快手keye2.0开启强化推理新范式.md"]
authors: [允中, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/gomgqFAZrdbJFQlOfSJxpQ"
venue: 量子位微信公众号
---
# 将DSA注意力引入多模态，快手Keye2.0开启强化推理新范式

量子位发布的关于快手发布 [[keye-vl-2-0-30b-a3b]] 多模态大模型的深度报道。文章详细介绍了该模型的五大技术创新：

1. **DSA首次落地多模态**：将 [[dsa稀疏注意力]]（DeepSeek Sparse Attention）引入多模态理解场景，解锁256K超长上下文，Prefill成本降低50%。
2. **打破长上下文衰减魔咒**：VideoMME V2测试中，帧数从64扩展至512时，ACC从35.34%逆势升至42.44%。
3. **MOPD专家合版**：通过 [[mopd]]（多专家策略蒸馏/合并）技术解决多任务学习中的灾难性遗忘问题。
4. **Context-RL后训练**：利用 [[context-rl]] 构建稠密细粒度奖励信号，实现超几何分布级别的事实性监督。
5. **Agent协作机制**：首次解锁Code Agent、Tool Agent、Search Agent等多步自动化调度能力。

## 核心评测数据

- TimeLens（ActivityNet-TimeLens）：58.5 mIoU，超越Gemini-2.5-Pro（58.1）
- LongVideoBench：74.10
- MLVU：82.80
- VideoMMMU：79.98
- LivecodeBench v6：77.10
- SWE-bench Verified：62.00
- TAU2-Bench：82.58

## 业务落地

模型已融入快手生成式推荐、内容生态治理、商业化定向投放等核心链路，取得实际商业收益。文章强调"跑分不是终点，落地才是"。

## 关键论点

- 30B级模型跨级压制200B+开源基座，部分指标超越闭源标杆
- DSA使Decode成本曲线随序列增长极其平缓，为超长视频大规模落地提供低成本方案
- MOPD使垂域能力提升的同时通用能力（数学、STEM、指令遵循）全面爆发