---
type: source
title: "浙大团队破解多模态模型「盲目自信」：先校准置信度，再分配算力丨CVPR'26"
tags: [multimodal, confidence-calibration, test-time-scaling, cvpr, zhejiang-university]
related: [感知钝化, ca-tts, cdrl, perceive-then-reason, qwen2.5-vl-7b, scaling-law]
created: 2026-03-22
updated: 2026-03-22
authors: [杜越天, 王宇程, 张荣宇, 徐志杰, 杨博宇, 孔铭, 刘洁, 朱强]
year: 2026
url: "https://mp.weixin.qq.com/s/M4__1si-uChBS8vbLABvMA"
venue: "CVPR 2026"
sources: ["浙大团队破解多模态模型「盲目自信」：先校准置信度，再分配算力丨cvpr'26.md"]
---

# 浙大团队破解多模态模型「盲目自信」：先校准置信度，再分配算力

## 概述
本文报道了浙江大学联合阿里巴巴、香港城市大学及密歇根大学发表在 CVPR 2026 上的研究成果。研究针对多模态大模型（MLLM）的“盲目自信”问题（即 [[感知钝化]]），提出了 [[CA-TTS]]（Confidence-Aware Test-Time Scaling）框架。该框架通过 [[CDRL]]（Confidence-Driven Reinforcement Learning）算法在训练阶段校准置信度，并在推理阶段根据置信度动态分配算力，显著提升了模型在视觉推理任务中的准确性和算力利用效率。

## 核心发现
- **盲目自信现象**：实验表明，当输入图像质量退化（如加噪）导致准确率断崖式下跌时，多模态模型的置信度几乎保持不变。
- **度量标准**：采用 NMLP（Negative Mean Log-Probability）作为响应级别的置信度度量，而非传统的 token 级度量。
- **性能提升**：在 Math-Vision 基准上，准确率从基线的 23.0% 提升至 42.4%；在 MMMU 上提升 17.5 个百分点。
- **扩展效率**：CA-TTS 的 Test-Time Scaling 斜率（β=3.65）显著高于传统的 Majority Voting（β=1.64），证明其能更有效地利用额外算力。

## 技术方案
### 1. 训练阶段：CDRL (Confidence-Driven Reinforcement Learning)
通过强化学习优化双重奖励机制：
- **感知敏感性奖励**：鼓励模型在清晰图像与噪声图像之间产生合理的置信度差异。
- **校准一致性奖励**：对“高置信度且正确”给予奖励，对“高置信度且错误”施加惩罚。
这迫使模型学会对视觉退化保持敏感，并对自身判断保持诚实。

### 2. 推理阶段：CA-TTS (Confidence-Aware Test-Time Scaling)
利用校准后的置信度作为信号，动态调度三个协同模块：
- **Self-Consistency**：采用置信度加权投票，而非简单多数投票。
- **Self-Reflection**：当置信度不足时，专家模型以 Critic 角色生成批评意见，引导模型重新推理。
- **Self-Check**：通过对比解码，验证答案是否真正依赖视觉证据。

## 范式转变
该研究提出了 [[Perceive-then-Reason]]（先感知后推理）的新范式，强调在进行复杂推理之前，必须先建立对视觉证据变化敏感且与准确性一致的置信度。这改变了传统多模态研究中默认“模型已充分利用视觉信息”的前提。

## 实验数据
- **基座模型**：统一使用 [[Qwen2.5-VL-7B]]。
- **消融实验**：单独使用 CDRL 提升 3.4%，单独使用 CA-TTS 提升 15.0%，两者结合提升 19.4%，证明了显著的协同效应。
- **专家模型依赖**：即使让基座模型自身充当“专家”，性能仍优于纯 Majority Voting，说明框架本身具有鲁棒性。

## 意义
该研究解决了多模态模型“不知道自己不知道”的根本性缺陷，对于提升 AI 在高风险场景（如医疗、自动驾驶）的可靠性具有重要意义。它重新定义了 Test-Time Scaling 的效率上限，表明“置信度校准”是提升 Scaling 斜率的关键。

## 作者与机构
- **第一作者**：[[杜越天]]（浙江大学博士生）
- **通讯作者**：[[朱强]]（浙江大学教授）、[[刘洁]]
- **机构**：[[浙江大学]]、[[阿里巴巴集团]]、[[香港城市大学]]、[[密歇根大学]]