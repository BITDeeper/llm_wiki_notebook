---
type: source
title: "入职第三年，团队连斩CVPR三奖：南加州王越的PSI Lab做对了什么？"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/yWKGcFKVgXbJGUSb77J9Yg"
venue: 机器之心
tags: [具身智能, 人形机器人, psi-lab, cvpr-2026, 世界模型, vla]
related: [psi-lab, wang-yue, psi-0, physworld, humanoid-everyday, cvpr-2026]
created: 2026-06-09
updated: 2026-06-09
sources: ["rss/入职第三年，团队连斩cvpr三奖：南加州王越的psi-lab做对了什么？.md"]
---
# 入职第三年，团队连斩CVPR三奖：南加州王越的PSI Lab做对了什么？

机器之心发布的深度报道，聚焦南加州大学王越教授创办的PSI Lab在CVPR 2026具身智能Workshop上连斩三项奖项的系统性工作。

## 核心内容

报道详细介绍了PSI Lab三篇获奖论文及其背后的系统性研究布局：

1. **Psi-0** — 人形机器人开放基础模型框架，面向通用Loco-Manipulation，采用三阶段训练（人类视频预训练→机器人轨迹后训练→目标任务适配）。获CVPR 2026 3D-LLM/VLA Workshop Best Paper，被RSS 2026录用。
2. **PhysWorld** — 物理世界模型框架，将视频生成、物理世界重建与机器人策略学习连接，提出object-centric residual RL。获CVPR 2026 3D-LLM/VLA Workshop Best Paper Runner-up，被ICRA 2026录用。
3. **Humanoid Everyday** — 面向开放世界人形操作的综合数据集（260任务、1.03万轨迹、300万+帧）及云端评测平台。获CVPR 2026 Embodied AI Workshop Best Paper，被ICRA 2026录用。

## 核心论点

- 人形机器人需要**Robotics-Native基础模型框架**，不能简单搬用VLM或世界模型范式。
- 世界模型的核心价值是**物理可执行性**（Physical Actionability），而非视频生成质量。
- 人形机器人基础能力来自**数据-模型-世界预测的系统闭环**，而非单一模型规模放大。

## 关键关联

- 三篇工作形成完整链路：[[humanoid-everyday|数据基础设施]] → [[psi-0|基础模型]] → [[physworld|物理世界预测]]
- 与[[人类视频预训练]]、[[世界模型]]、[[具身智能数据困境]]等概念直接相关
- 在[[cvpr-2026|CVPR 2026]] Workshop获奖