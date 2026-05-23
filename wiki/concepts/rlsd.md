---
type: concept
title: RLSD（RLVR with Self-Distillation）
created: 2026-05-19
updated: 2026-05-19
tags: [强化学习, 自蒸馏, 后训练, RLVR]
related: [self-taught-rlvr, npo-近未来策略优化, copd-协同进化策略蒸馏, 京东探索研究院, 中科院信工所]
sources: ["让大模型学会「自己教自己」！京东&中科院信工所连发三篇论文定义self-taught-rlvr.md"]
origin_date: 2026-04-01
---
# RLSD（RLVR with Self-Distillation）

RLSD 是 [[self-taught-rlvr|Self-Taught RLVR]] 系列研究的第一篇，探索 **informed self** 维度——由特权信息增强的自身来教自己。

## 核心问题

当我们给同一个模型注入特权信息（如参考答案）后，它能不能成为老师来指导自己？此前的方法 OPSD（On-Policy Self-Distillation）尝试过这一思路，但结果尴尬：模型在极少数据上快速收敛（约20步以内），之后很快出现**信息泄漏**——在推理时想当然地引用一个其实它并没有看到的"参考解"。

## 理论贡献

作者证明了 OPSD 的目标函数是 ill-posed 的：训练目标中存在一个**不可消除的互信息间隙** I(Yt; R | X, Y₀)。由于老师条件在特权信息上、而学生看不到这个特权信息，KL 散度永远降不下去，每步训练都在悄悄把 x→r 的虚假相关性写进参数。

## 方法：方向与幅度解耦

RLSD 给出了简洁的修复方案：

- **方向交给 RLVR**：环境奖励决定每个 token 该被强化还是被惩罚，这是可靠但稀疏的信号，保证更新大方向不出错
- **幅度交给自蒸馏**：用老师/学生的 evidence ratio 来调节每个 token 的更新力度，这是密集的信号，保证细粒度的 credit 分配

通过将"用对方向"和"分清主次"解耦，RLSD 成为 RLVR 和 OPSD 的自然合体。

## 实验结果

在 Qwen3-VL-8B-Instruct 以及文本、图片、视频的 8 个 benchmark 上，RLSD 同时打败了一系列 baseline，**200步训练即超过 GRPO 训400步的水平**，收敛速度更快，最终性能上限更高。

## 论文信息

- arXiv: 2604.03128
- GitHub: github.com/iie-ycx/RLSD
- 第一作者：杨晨旭（[[中科院信工所]]）
- Project Lead：[[佀庆一]]（[[京东探索研究院]]）