---
type: source
title: "ICML 2026 | 突破3DGS光度多义性瓶颈：北航/新国立提出AmbiSuR，重塑高保真3D几何重建"
created: 2026-05-19
updated: 2026-05-19
tags: [3dgs, 表面重建, 光度多义性, icml-2026, 神经渲染]
related: [ambisur, 3d高斯泼溅, 光度多义性, 北京航空航天大学, 新加坡国立大学]
sources: ["icml-2026-突破3dgs光度多义性瓶颈：北航新国立提出ambisur，重塑高保真3d几何重建.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/jiqj2afGW40LWolVmO9-TA"
venue: 机器之心
---
# ICML 2026 | 突破3DGS光度多义性瓶颈：北航/新国立提出AmbiSuR，重塑高保真3D几何重建

本文由机器之心报道，介绍了北京航空航天大学与新加坡国立大学联合提出的 [[ambisur]] 框架。该研究针对 [[3d高斯泼溅|3DGS]] 表面重建中普遍存在的 [[光度多义性]] 问题，提出了双阶段干预机制，论文被 ICML 2026 接收。

## 核心内容

- **问题识别**：系统剖析了3DGS表面重建中光度多义性的两个来源——表征层面（基元边缘多义性、光度混合多义性）和监督层面（误导性光度信号）。
- **核心洞察**：首次论证球谐函数高阶系数可作为"多义性自指示器"，其模长等价于光度多义性量化指标。
- **技术方案**：高斯基元截断（2σ边界）、光线-颜色一致性约束、基于SH指示器的无定形局部正则化器。
- **实验验证**：在DTU、TnT、Mip-NeRF 360三个标准数据集上取得最优或领先水平。

## 关键人物

- 第一作者：[[李嘉禾]]（北航博士生，NUS访问学者）
- 通讯作者：[[百晓]]（北航教授）、[[郑锦]]（北航副教授）
- 合作方：[[Gim Hee Lee]]（NUS教授）

## 链接

- 论文：https://arxiv.org/abs/2605.12494
- 项目主页：https://fictionarry.github.io/AmbiSuR-Proj/
- 代码仓库：https://github.com/Fictionarry/AmbiSuR