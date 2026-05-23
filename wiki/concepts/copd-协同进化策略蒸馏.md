---
type: concept
title: CoPD（Co-Evolving Policy Distillation）
created: 2026-05-19
updated: 2026-05-19
tags: [强化学习, 知识蒸馏, 多专家融合, 后训练]
related: [self-taught-rlvr, rlsd, npo-近未来策略优化, scaling-law, 京东探索研究院, 中科院信工所]
sources: ["让大模型学会「自己教自己」！京东&中科院信工所连发三篇论文定义self-taught-rlvr.md"]
origin_date: 2026-04-01
---
# CoPD（Co-Evolving Policy Distillation）

CoPD 是 [[self-taught-rlvr|Self-Taught RLVR]] 系列研究的第三篇，探索 **parallel self** 维度——由走另一条路的自身教自己。

## 核心问题

如何更好地把多个 expert 的能力吸收到同一个模型上？

## 效用框架

研究者提出统一效用函数：Utility = aₚ × X(D₁,D₂) + bₚ

- **aₚ ∈ [0,1]**：信号转化效率
- **bₚ ≤ 0**：额外损失

在此框架下，两条主流路径各有问题：

### Mixed-data RLVR
把所有能力数据混在一起用一个模型训练。信号全部参与优化（aₚ=1），但多能力共享参数导致梯度方向冲突，产生**跷跷板效应（Seesaw效应）**：一个能力涨了，另一个就跌。额外损失 bₚ=−Φ。

### 传统静态 OPD
分开训练专家再蒸馏到统一 student。消除了发散代价（bₚ=0），但信号转化率 aₚ 远小于1——专家越训越强，但也越训越"教不动"。

两种路径的能力损失是**对称的**：一个丢在 bₚ 上，一个丢在 aₚ 上。

## 核心假说：越像越好吸收

aₚ 取决于 teacher 和 student 的行为有多像。用 **token overlap**（student 生成轨迹上两者 top-k token 交集比例）量化一致性：

- 实验1：固定 teacher，构造不同 overlap 的 student 做 OPD → overlap 越高，OPD 增益越大（**r=0.89**）
- 实验2：观察独立 RLVR 训练中 overlap 变化 → overlap 单调下降，KL 涨了一个数量级

静态 OPD 蒸馏的时刻恰好是吸收效率最低的时刻。

## 方法：协同进化

CoPD 并行训练多个分支，每个分支训练特定 expert，将两件事交错进行：

1. **RLVR**：在专家自己的数据上持续推动能力边界
2. **Mutual OPD（双向蒸馏）**：各 expert branch 之间互相做 OPD，持续拉近行为模式

直观比喻：与其让独立训练完的专家"分家"后强行合并，不如让他们从一开始就一起长大，过程中各自练本事、时不时互相教学。

## 实验结果

文本、图像、视频三合一，单一模型同时打败各自领域的独立专家和 MOPD 基线。

## 潜在意义

CoPD 给出了一种全新的 **model parallel training 模式**，暗示着一种**新的 scaling 范式**——可能通过增加并行分支数来扩展能力，而不仅仅依赖算力扩展。这与传统 [[scaling-law]] 形成互补。

## 论文信息

- arXiv: 2604.27083
- 第一作者：顾佴彬（[[中科院信工所]]）
- Project Lead：[[佀庆一]]（[[京东探索研究院]]）