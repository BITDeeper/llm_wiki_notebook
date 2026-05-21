---
type: source
title: "最强音频越狱威胁！港科大新基准收集超20万样本｜NeurIPS'25"
created: 2025-12-31
updated: 2025-12-31
tags: [ai-security, audio-jailbreak, benchmark, multimodal-safety]
related: [jailbreak-audiobench, 音频隐藏语义, 音频越狱, 端到端大音频语言模型]
sources: ["最强音频越狱威胁！港科大新基准收集超20万样本｜neurips'25.md"]
authors: ["新智元"]
year: 2025
url: "https://mp.weixin.qq.com/s/9Tixupv1axDFhfxphPuTNA"
venue: "新智元 / NeurIPS 2025"
---

# 最强音频越狱威胁！港科大新基准收集超20万样本｜NeurIPS'25

## 概述
本文报道了香港科技大学、牛津大学和西安交通大学联合发布的首个全面音频越狱评测基准 [[Jailbreak-AudioBench]]。研究揭示了音频中的“隐藏语义”（如语调、语速、情绪）是导致 [[端到端大音频语言模型]] 被越狱的关键漏洞，并指出现有的文本安全对齐无法有效防御这些基于声学特征的攻击。

## 核心发现

### 音频隐藏语义的威胁
与文本越狱不同，音频模态包含丰富的非文本信息（强调、语速、语调、音高、口音、背景噪声与情绪）。这些自然的声学变化可能在不改变文本含义的情况下，干扰模型的语义理解与安全判定，从而引入新的攻击面。

### Jailbreak-AudioBench 基准
研究团队构建了包含超过 20 万个音频样本（157,782 主数据集 + 56,742 附加数据集）的基准，覆盖 20 种音频编辑类型。该基准用于系统评估模型在面对音频隐藏语义攻击时的鲁棒性。

### 模型鲁棒性差异
实验评测了包括 [[Qwen2-Audio]]、[[SALMONN]]、[[MiniCPM-o-2.6]]、[[GPT-4o-Audio]] 和 [[Gemini-2.5-Flash]] 在内的多种模型。结果显示：
- **开源模型**：Qwen2-Audio 表现出最强的鲁棒性，SALMONN 较为脆弱。
- **闭源模型**：GPT-4o-Audio 在单次攻击中表现较好，但在组合攻击下 ASR 显著上升。

### 攻击升级：组合编辑与多次查询
通过叠加多种音频编辑手段（如语速+语调+噪声）并结合多次查询的黑盒攻击策略，越狱成功率（ASR）被显著放大：
- SALMONN-7B 的 ASR 从 31.6% 飙升至 85.1%。
- Gemini-2.5-Flash 的 ASR 从 8.1% 大幅提升至 49.4%。
这表明现实世界的风险被严重低估。

### 防御局限性
研究测试了“音频前置安全指令”这一轻量级防御方案，发现其虽能降低部分风险，但无法彻底防御高级音频越狱。

## 机理分析
通过可视化分析发现，鲁棒模型的深层网络表示会逐渐“吸收”编辑痕迹，回归语义本质（按语义聚类）；而脆弱模型则保留编辑类型的聚类特征，容易被“隐藏语义”误导。

## 相关链接
- 论文链接: [NeurIPS 2025](https://neurips.cc/virtual/2025/loc/san-diego/poster/121592)
- 项目主页: [Jailbreak-AudioBench](https://researchtopic.github.io/Jailbreak-AudioBench_Page)
- 代码仓库: [GitHub](https://github.com/Researchtopic/Code-Jailbreak-AudioBench)