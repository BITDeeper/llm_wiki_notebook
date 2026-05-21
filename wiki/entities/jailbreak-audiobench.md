---
type: entity
title: Jailbreak-AudioBench
created: 2025-12-31
updated: 2025-12-31
tags: [benchmark, dataset, audio-security, evaluation]
related: [音频隐藏语义, 音频越狱, 端到端大音频语言模型, qwen2-audio, gpt-4o-audio]
sources: ["最强音频越狱威胁！港科大新基准收集超20万样本｜neurips'25.md"]
---

# Jailbreak-AudioBench

**Jailbreak-AudioBench** 是由香港科技大学、牛津大学和西安交通大学联合提出的首个全面的音频越狱评测基准。旨在系统评估 [[端到端大音频语言模型]] 在面对音频隐藏语义攻击时的鲁棒性。

## 核心组成

### 数据集规模
- **主数据集**：157,782 个音频样本。
- **附加数据集**：56,742 个音频样本。
- **总计**：超过 20 万个样本。

### 攻击覆盖
基准覆盖了 **20 种音频编辑类型**，包括但不限于：
- 强调
- 语速
- 语调
- 音高
- 背景噪声
- 名人口音
- 情绪

## 评测功能

### 模型鲁棒性评估
该基准量化了不同音频编辑对攻击成功率（ASR）的影响，揭示了同样的有害请求仅改变音频“隐藏语义”就可能显著改变模型的拒答/越狱表现。

### 表征层分析
Jailbreak-AudioBench 提供了可解释的表征层指标，用于分析模型内部机制：
- **鲁棒模型**（如 Qwen2-Audio）：随着网络层数加深，表示空间由“按编辑类型聚类”过渡为“按语义聚类”，编辑痕迹被语义信息吸收。
- **脆弱模型**（如 SALMONN）：编辑类型相关特征在中后层仍显著存在，容易被误导。

## 实验结果亮点
基准测试揭示了 [[组合音频编辑]] 结合多次查询可极大提升越狱成功率，例如将 SALMONN-7B 的 ASR 从 31.6% 提升至 85.1%。

## 相关资源
- 论文：发表于 NeurIPS 2025
- 代码：[GitHub Repository](https://github.com/Researchtopic/Code-Jailbreak-AudioBench)