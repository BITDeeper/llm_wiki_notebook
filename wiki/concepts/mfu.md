---
type: concept
title: MFU (Model FLOPs Utilization)
tags: [metric, performance, hardware, ai-training, metrics, ai-infrastructure]
related: [xai, colossus-xai, 记忆墙, 激活重计算, 张量并行, deepseek-v4, ai-infrastructure-bottleneck, scaling-law, gpu-idle-time]
created: 2026-05-04
updated: 2026-05-08
sources: ["马斯克的gpu也在摸鱼？狂囤几十万张显卡，只有11%在干活.md", "大型挂机现场：马斯克的55万英伟达gpu，利用率才11%.md", "马斯克的gpu也在摸鱼？狂囤几十万显卡，只有11%在干活.md"]
---
# MFU (Model FLOPs Utilization)

**MFU（Model FLOPs Utilization，模型浮点运算利用率）** 是衡量 AI 训练效率的核心指标，定义为**实际观测到的 FLOPS** 除以 **GPU 理论峰值 FLOPS**。它衡量的是硬件算力中有多少比例真正转化为了有效的模型训练吞吐，也是评估 AI 基础设施投资回报效率的关键 KPI。

## 行业基准
不同公司和集群规模的 MFU 差异巨大，反映了工程优化水平的差距：

- **顶尖水平**：
    - **Google**：约 **46%**
    - **Meta**：约 **43%**
    - **[[英伟达]] Megatron-LM**：在 H100 集群上通常可达 **42% - 47%**。
- **正常水平**：生产级 LLM 训练的 MFU 通常在 **35% - 45%** 之间（Lambda 白皮书数据）。
- **低效案例**：
    - **[[xAI]]** 的 [[Colossus (xAI)|Colossus]] 集群（55 万块 GPU 规模）曾被曝出 MFU 仅为 **11%**，被称为“低得尴尬”。

## 影响因素
MFU 低并不代表 GPU 在“睡觉”或硬件故障，而是指算力受限于 [[ai-infrastructure-bottleneck]]，被浪费在非计算任务上。主要原因包括：

1.  **[[记忆墙]]（I/O 瓶颈）**：GPU 计算速度远快于 HBM 显存速度，导致芯片大量时间等待数据。
2.  **网络瓶颈**：大规模集群中，服务器间的数据传输延迟和拥堵（如过度的 [[张量并行]] 切分导致跨 GPU 通信延迟）导致 GPU “挂机”等待。
3.  **工作流特性**：训练过程中的间歇性（如调参、数据处理）导致必然的 [[gpu-idle-time]]。
4.  **显存优化策略**：过度的 [[激活重计算]] 虽然节省了显存，但增加了额外的计算开销。

## 战略意义
随着 AI 行业从“囤卡”竞赛转向“提效”竞赛，MFU 已成为衡量 AI 公司工程能力的关键 KPI。

- **资本效率**：高 MFU 意味着更低的资本支出（CapEx）浪费和更高的有效产出。低 MFU 意味着巨额的硬件投资和能源消耗并未转化为有效的模型训练算力。
- **工程壁垒**：[[DeepSeek V4]] 等项目正是通过极致的底层优化（如 DeepGEMM）来追求高 MFU 和确定性，与单纯堆砌硬件形成对比。这揭示了“买到 GPU”只是第一步，“用好”才是关键。