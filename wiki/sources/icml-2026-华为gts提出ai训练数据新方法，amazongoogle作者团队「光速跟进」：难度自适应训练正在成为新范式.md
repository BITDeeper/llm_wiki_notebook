---
type: source
title: "ICML 2026 | 华为GTS提出AI训练数据新方法，Amazon/Google作者团队「光速跟进」：难度自适应训练正在成为新范式"
created: 2026-05-18
updated: 2026-05-18
tags: [icml-2026, 华为, edco, 难度自适应训练, 课程学习, 领域微调]
related: [edco, 难度自适应训练, 华为gts-ai数据团队, 推理熵, 动态课程学习]
sources: ["icml-2026-华为gts提出ai训练数据新方法，amazongoogle作者团队「光速跟进」：难度自适应训练正在成为新范式.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/KR0aKOy84Yot-CqgrxW2Bg"
venue: 机器之心
---
# ICML 2026 | 华为GTS提出AI训练数据新方法，Amazon/Google作者团队「光速跟进」：难度自适应训练正在成为新范式

本文报道了[[华为gts-ai数据团队]]提出的[[edco]]方法，该方法基于[[推理熵]]实现[[动态课程学习]]，已被 ICML 2026 接收。核心论点：在领域大模型微调中，训练数据的选择比数据量更重要，样本价值不是固定属性，而是取决于模型当前状态。

## 核心内容

- EDCO 在通信（Datacom/Wireless）、医疗、法律三领域均取得最优结果
- RLFT 中 Datacom 达 46.96%（随机采样 40.43%）
- 静态课程策略在专业任务中可能适得其反，部分场景甚至低于未训练模型
- [[前缀熵估计]]将单样本耗时从 2.24 秒降至 0.37 秒，计算开销减少 83.5%
- EDCO 所选样本的批次内梯度方向一致性达 0.92（随机 0.82）

## 行业影响

由 Rutgers、Amazon、Google 等作者参与的 DARE 论文在 EDCO 发表数月后即引用并将其作为基线，标志着[[难度自适应训练]]正从工程细节走向核心算法问题。