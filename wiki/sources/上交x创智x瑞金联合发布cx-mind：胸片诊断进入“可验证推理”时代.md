---
type: source
title: "上交x创智x瑞金联合发布CX-Mind：胸片诊断进入可验证推理时代"
created: 2026-05-15
updated: 2026-05-15
tags: [医学AI, 多模态大模型, 胸片诊断, 可验证推理, 强化学习]
related: [cx-mind, cx-set, rui-cxr, 上海交通大学, 上海创智学院, 瑞金医院, 可验证推理链, curl-vpr, 交错式推理]
sources: ["上交x创智x瑞金联合发布cx-mind：胸片诊断进入“可验证推理”时代.md"]
authors: [量子位, CX-Mind团队]
year: 2026
url: "https://mp.weixin.qq.com/s/cfSH-aMRktczOroqYClEiA"
venue: 量子位公众号
---
# 上交x创智x瑞金联合发布CX-Mind：胸片诊断进入可验证推理时代

## 摘要

本文报道了[[上海交通大学]]、[[上海创智学院]]与[[瑞金医院]]联合发布的[[cx-mind]]多模态大模型。该模型是首个将胸片诊断推进为[[可验证推理链]]的医学多模态大模型，通过[[交错式推理]]架构和[[curl-vpr]]强化学习算法，使诊断过程从"黑箱分类器"转变为可被医生审查和复核的临床推理伙伴。

## 核心发现

- 在横跨23个数据集、708,473张影像的评测中，三大能力域平均提升25.1%
- 多病共存诊断中，相比CheXagent和ChestX-Reasoner分别提升63.5%和21.2%
- 报告生成任务中，与GPT-4o相比BLEU高7.6%、ROUGE平均高11.1%
- 在[[rui-cxr]]真实世界测试集上保持领先，多中心医生主观评估五项维度全部排名第一

## 关键贡献

1. **输出范式革新**：从one-shot judgment转向interleaved reasoning，每一步推理都有影像证据支撑
2. **数据集构建**：[[cx-set]]整合23个公开数据集，形成708,473张影像与2,619,148条指令样本
3. **训练算法**：[[curl-vpr]]同时约束最终答案和中间推理路径的质量

## 论文信息

- **DOI**：10.1016/j.inffus.2025.104027
- **共同第一作者**：李文杰、张钰杰、孙浩然
- **GitHub**：https://github.com/SII-WenjieLisjtu/CX-Mind
- **HuggingFace**：https://huggingface.co/SII-JasperLi77/CX-Mind