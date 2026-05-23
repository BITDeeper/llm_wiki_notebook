---
type: source
title: "LIBERO 99%，实测第一：卧安 OneModel 1.7 用一条隐式通路打通「看懂」到「做对」"
created: 2026-05-21
updated: 2026-05-21
tags: [具身智能, 世界模型, VLA, 强化学习, 机器人]
related: [卧安机器人, onemodel-1.7, predictive-policy-latent, retrieve-then-steer, mcf-proto, 世界动作模型, vla-视觉-语言-动作]
sources: ["libero-99%，实测第一：卧安-onemodel-1.7用一条隐式通路打通「看懂」到「做对」.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/rpUYCqk1fWOt2rp2m5SBiA"
venue: 机器之心
---
# LIBERO 99%，实测第一：卧安 OneModel 1.7 用一条隐式通路打通「看懂」到「做对」

## 摘要

本文报道了[[卧安机器人]]发布的[[onemodel-1.7|OneModel 1.7 FrontoStria-RL]]具身智能世界动作模型。该模型在[[libero|LIBERO]]标准测试中取得99%平均成功率，超越π0.5、GR00T-N1.5、OpenVLA-OFT等主流模型；真机日常操作成功率99%，高精度任务97%，真人对打乒乓球接球91.2%。

## 核心技术贡献

1. **[[predictive-policy-latent|Predictive Policy Latent]]**：建立从世界理解到动作执行的隐式传导通路，避免显式生成中间图像或坐标带来的误差与冗余。
2. **[[retrieve-then-steer|Retrieve-then-Steer]]**：部署时检索历史成功记忆，通过置信度自适应先验引导注入动作采样器，实现非参数的持续进化。
3. **[[mcf-proto|MCF-Proto]]**：围绕局部运动结构建立运动中心坐标系，利用可学习原型组合动作，提升对视角和位姿扰动的鲁棒性。

## 架构灵感

模型代号"FrontoStria"源自神经科学中的[[额纹状体通路]]（Frontostriatal Pathway），即大脑中连接前额叶皮层（决策规划）与纹状体（动作执行）的神经回路。

## 关键数据

- LIBERO 标准测试：99% 平均成功率
- 真机日常操作：99%
- 高精度操作：97%
- 乒乓球接球：91.2%
- LIBERO-plus 几何扰动（Camera）：69.7%（领先基线3.3个百分点）
- LIBERO-plus 几何扰动（Robot）：66.0%（领先基线15.7个百分点）

## 关联论文

- https://arxiv.org/abs/2605.11809
- https://arxiv.org/abs/2605.10094