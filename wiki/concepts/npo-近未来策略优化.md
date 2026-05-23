---
type: concept
title: NPO（Near-Future Policy Optimization）
created: 2026-05-19
updated: 2026-05-19
tags: [强化学习, 策略优化, 后训练, RLVR]
related: [self-taught-rlvr, rlsd, copd-协同进化策略蒸馏, 京东探索研究院, 中科院信工所]
sources: ["让大模型学会「自己教自己」！京东&中科院信工所连发三篇论文定义self-taught-rlvr.md"]
origin_date: 2026-04-01
---
# NPO（Near-Future Policy Optimization）

NPO 是 [[self-taught-rlvr|Self-Taught RLVR]] 系列研究的第二篇，探索 **temporal self** 维度——由近未来的自身教自己。

## 核心问题

为 RLVR 引入什么样的辅助学习信号能带来最大收益？

## 理论框架：有效学习信号 S=Q/V

研究者将辅助轨迹质量抽象为简洁的指标：

- **Q（可学内容）**：辅助轨迹要足够强，有新东西可学
- **V（吸收难度）**：辅助轨迹要足够近，模型容易吸收
- **有效学习信号 S = Q/V**

此前的方法都顾不全这一点：外部老师导入轨迹 Q 高但 V 太大；经验回放抓自己过去的轨迹 V 低但 Q 被自身历史水平卡死。

## 核心思想

用未来的自己来引导当下的自己——一个比当前更强（沿优化方向走了若干步）、但又离当前足够近（同一条优化进程上的延伸）的天然 teacher。理论和实证均证明这种设计能最大化 S=Q/V。

## 实现方式

采用 mixed-policy 方式：将 near-future checkpoint 产生的、被验证为正确的 trajectory 混入当前 rollout group，既加速早期 bootstrap，也帮助后期突破 plateau。

## AutoNPO

进一步提出的自动化版本，从在线训练信号中自动检测干预时机、自动挑选 S 最大的 guide checkpoint。

## 实验结果

在 Qwen3-VL-8B-Instruct 上：
- GRPO 平均分：57.88
- NPO：62.84
- AutoNPO：63.15

在收敛速度和最终上限上同时打败 LUFFY 等 mixed-policy 基线。

## 论文信息

- arXiv: 2604.20733
- 第一作者：秦川于（[[中科院信工所]]）
- Project Lead：[[佀庆一]]（[[京东探索研究院]]）