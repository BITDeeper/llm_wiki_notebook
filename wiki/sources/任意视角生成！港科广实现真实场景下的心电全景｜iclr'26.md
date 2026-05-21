---
type: source
title: "任意视角生成！港科广实现真实场景下的心电全景｜ICLR'26"
authors: [新智元, LRST]
year: 2026
url: "https://mp.weixin.qq.com/s/RkR9Xthq_VXqHwHtfPMlDw"
venue: "新智元"
tags: [ai-for-science, medical-ai, ecg, iclr-2026]
related: [nef-net-v2, 心电全景合成, 港科广, 中山大学, panobench]
created: 2026-04-29
updated: 2026-04-29
sources: ["任意视角生成！港科广实现真实场景下的心电全景｜iclr'26.md"]
---

# 任意视角生成！港科广实现真实场景下的心电全景｜ICLR'26

## 概述
本文报道了 [[港科广]] 与 [[中山大学]] 合作发表在 [[ICLR 2026]] 上的研究成果。该研究提出了 [[NEF-NET v2]] 模型，首次在真实临床环境中实现了高精度、诊断级的 [[心电全景合成]]。

## 核心内容
研究团队针对前代模型 [[Nef-Net v1]] 在真实场景下的局限性（视角信息混叠、设备域差、视角偏移），提出了新一代解决方案：
1.  **架构创新**：采用 [[View-to-View Transformation]] 和 [[Geometric Angular Attention]]，替代了原有的特征平均融合方式，显著提升了波形细节的保留能力。
2.  **三阶段训练**：通过 Any-pairs 预训练、[[Device Calibration]] 和 [[On-the-fly Calibration]]，系统性解决了跨设备、跨个体的部署瓶颈。
3.  **数据集构建**：建立了 [[Panobench]] 高密度心电数据集，利用 CT 标注视角位置，为全景合成提供了金标准验证平台。

## 关键发现
- 在 CPSC2018 数据集上，平均 PSNR 提升 6.9dB，房颤（AF）信号上提升达 7.3dB。
- [[On-the-fly Calibration]] 允许模型利用前 5 秒信号快速自校准，有效应对电极贴放误差和个体解剖差异。
- 模型在 9 类心律/心肌异常任务上表现出强大的疾病泛化能力。

## 意义
该研究将心电全景合成从受控实验环境推进到真实世界应用，为心脏病精准诊断开辟了新路径，是 [[ai-for-science]] 在医疗信号处理领域的典型应用。