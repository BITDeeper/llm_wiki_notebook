---
type: source
title: "CVPR 2026 | 破解开放世界“语义盲区”：北大和华为团队携手开源大规模OmniVTG数据集，用“自我反思”机制补齐定位短板"
created: 2026-06-04
updated: 2026-06-04
tags: [cvpr-2026, 视频时序定位, 多模态大模型, 数据集, 自我纠错, 强化学习]
related: [omnivtg, 视频时序定位, 自我纠错思维链, 北京大学王选计算机研究所, 华为中央媒体技术院, cvpr-2026]
sources: ["cvpr-2026-破解开放世界“语义盲区”：北大和华为团队携手开源大规模omnivtg数据集，用“自我反思”机制补齐定位短板.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/7bTqPwrvkrUf9jt6RYVsrg"
venue: 机器之心
---
# CVPR 2026 | 破解开放世界"语义盲区"：北大和华为团队携手开源大规模OmniVTG数据集

本文报道了[[北京大学王选计算机研究所]]与[[华为中央媒体技术院]]在CVPR 2026上发表的合作研究成果——[[omnivtg]]数据集及[[自我纠错思维链]]训练范式。

## 核心内容

该工作针对开放世界[[视频时序定位]]中两大短板——数据集语义覆盖狭窄（"语义盲区"）和模型缺乏自我修正能力——提出了系统性解决方案：

1. **数据层面**：通过[[语义覆盖迭代扩展]]策略构建了包含2124小时视频、超35万条查询对的大规模数据集OmniVTG，显著扩展了语义覆盖范围。
2. **模型层面**：提出"预测-反思-修正"三阶段训练范式，利用多模态大模型较强的视频理解能力反哺较弱的时序定位能力。

## 关键发现

- 多模态大模型在视频理解任务上的能力显著优于其直接时序定位能力，且理解能力在常见/罕见概念上的性能差距更小。
- OmniVTG在ActivityNet Captions、Charades-STA、QVHighlights、TVGBench四个权威基准上取得SOTA零样本性能。
- 该方法有效缩小了罕见概念与常见概念的性能差距。

## 关键链接

- 论文：https://arxiv.org/abs/2604.25276
- 开源代码：https://github.com/oceanflowlab/OmniVTG
- 数据集：https://huggingface.co/datasets/zhengmh/OmniVTG-Dataset