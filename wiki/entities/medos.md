---
type: entity
title: MedOS
tags: [medical-ai, world-model, embodied-ai, robotics]
related: [medsupervision, cong-le, wang-mengdi, bao-zhenan, medical-world-model, state-action-transition, ai-xr-cobot]
created: 2026-02-20
updated: 2026-02-20
sources: ["医疗ai大洗牌！斯坦福、普林斯顿发布首个医学世界模型medos.md"]
---

# MedOS

**MedOS** (Medical Open World Model) 是由斯坦福大学、普林斯顿大学联合 NVIDIA 等机构发布的全球首个通用医疗具身世界模型。它标志着医疗 AI 从单纯的文本/图像分析（虚拟助手）向理解并介入物理现实（具身智能）的范式转移。

## 核心架构

MedOS 采用了 **[[ai-xr-cobot]]**（人工智能-扩展现实-协作机器人）三位一体的系统形态，旨在统一诊断、治疗与手术操作。

### State-Action-Transition 闭环
不同于传统的被动分析模型，MedOS 构建了通用的 [[state-action-transition]]（状态-动作-转换）闭环：
1.  **感知**：通过 XR 设备进行深度临床理解，捕捉组织物理属性与实时生理指征。
2.  **模拟**：在数字孪生世界中推演疾病演变与治疗效果，进行反事实推理。
3.  **干预**：驱动医疗协作机器人主动介入物理世界，执行诊疗操作。

### 双系统认知架构
MedOS 复刻了人类医生的认知模式，实现了 [[双系统认知架构]]：
-   **System 1（快思考/直觉）**：负责急诊或术中的实时边缘推理，处理毫秒级反应场景。
-   **System 2（慢思考/逻辑）**：负责复杂病例的时空推理，结合病史与检验数据进行长链条思维推演。

## 应用与影响

### 医疗平权
在人机协作实验中，MedOS 展现了显著的“能力拉齐效应”。它能辅助青年医生、医学生甚至护士达到资深医师的诊断与操作水平，并能消除人类因疲劳产生的生理震颤和偏差。

### 自主临床发现
除了临床辅助，MedOS 还具备 [[自主临床发现]] 能力。演示显示，它能自主识别癌症基因突变，调用 TCGA 数据库挖掘共突变基因，并执行生存分析生成预后报告，扮演“医学科学家”的角色。

## 数据基础
MedOS 的训练依赖于 [[medsupervision]] 数据集，该数据集包含 85,398 分钟的高保真医疗影像与操作数据，为模型理解医疗物理现实提供了基础。