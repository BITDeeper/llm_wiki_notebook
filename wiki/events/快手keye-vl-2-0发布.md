---
type: event
title: 快手Keye-VL-2.0发布
created: 2026-05-26
updated: 2026-05-26
tags: [模型发布, 多模态, 视频理解, agent, 稀疏注意力]
related: [keye-vl-2-0-30b-a3b, 快手, dsa稀疏注意力, mopd, context-rl, 产业深水区]
sources: ["将dsa注意力引入多模态，快手keye2.0开启强化推理新范式.md"]
origin_date: 2026-05-26
participants: [快手]
causes: [deepseek-v4]
effects: [keye-vl-2-0-30b-a3b]
significance: high
---
# 快手Keye-VL-2.0发布

2026年5月26日，[[快手]] 正式发布多模态大语言模型 [[keye-vl-2-0-30b-a3b]]，模型权重与开源代码同步上线Hugging Face和GitHub。

## 事件背景

多模态大模型行业正从"基础感知"向"深度推理"演进。[[DeepSeek V4|DeepSeek]] 提出的 [[dsa稀疏注意力]] 在纯文本领域展现了优异的长序列处理能力，但尚未在多模态场景中得到验证。同时，长视频理解的算力瓶颈和Agent协作能力的缺失是行业两大痛点。

## 关键里程碑

### 技术突破

1. **DSA首次跨公司迁移至多模态**：将DeepSeek提出的稀疏注意力机制成功引入多模态理解场景，Prefill成本降低50%
2. **打破 [[长上下文衰减魔咒]]**：512帧时ACC逆势升至42.44%，非线性得分达24.19
3. **[[mopd]] 解决灾难性遗忘**：垂域能力提升的同时通用能力全面爆发
4. **Agent协作首次解锁**：Code Agent、Tool Agent、Search Agent多步自动化调度

### 评测成绩

30B级模型在多项榜单达到同尺寸SOTA，部分指标跨级压制200B+开源基座：
- LongVideoBench：74.10
- MLVU：82.80
- VideoMMMU：79.98
- LivecodeBench v6：77.10
- SWE-bench Verified：62.00

### 业务落地

模型已融入快手生成式推荐、内容生态治理、商业化定向投放等核心链路。

## 行业影响

- 标志着DSA技术从DeepSeek向多模态场景的成功迁移，验证了稀疏注意力在跨领域应用中的通用性
- 代表2026年中期国内多模态大模型从"基础感知"向"深度推理+Agent执行"演进的关键节点
- 快手作为应用平台公司自研模型并深度绑定业务，展示了与[[ai产业链价值分配]]中"模型层吃肉"叙事不同的路径
- 与 [[产业深水区]] 趋势呼应，强调"跑分不是终点，落地才是"