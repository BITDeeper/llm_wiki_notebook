---
type: source
title: "国内首次！面壁开源千万级SFT与最大中文数据，MiniCPM5-1B底座公开"
created: 2026-05-29
updated: 2026-05-29
tags: [开源数据集, 端侧大模型, 面壁智能, sft, 预训练数据]
related: [面壁智能, minicpm5-1b, ultradata-分级治理体系, ultradata-fineweb-l3, ultradata-sft-2605, openbmb]
sources: ["国内首次！面壁开源千万级sft与最大中文数据，minicpm5-1b底座公开.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/tMH1G5vE3iVYTJx7t1vrZg"
venue: 新智元
---

# 国内首次！面壁开源千万级SFT与最大中文数据，MiniCPM5-1B底座公开

## 摘要

2026年5月29日，面壁智能联合清华大学、OpenBMB开源社区发布并开源两大最新数据集：[[ultradata-fineweb-l3]] 与 [[ultradata-sft-2605]]。这是面壁智能「端侧大模型开源周」的第五弹成果。

## 核心内容

### Ultra-FineWeb-L3
- 600B+ Tokens 中英文网页合成数据集（中文 200B+ Tokens）
- 当前开源规模最大的中文预训练合成数据集
- 以 [[ultradata-分级治理体系]] L2 精筛数据 Ultra-FineWeb 为种子，通过问答对生成与多风格改写提升数据可学习性
- 在 ARC-E、HellaSwag、OpenbookQA、CMMLU 等基准上超越 FineWeb-edu、FinePhrase 等竞品

### UltraData-SFT-2605
- 国内首个开源的千万级、同时包含深思考与非思考标注的 SFT 数据集
- 覆盖数学、代码、知识、指令遵循等领域
- 全流程质量治理：Query 构造筛选→Answer 质量控制→Benchmark 去污→训练验证

### 方法论
- 基于 [[ultradata-分级治理体系]]（L0-L4 五级数据分级）
- 分级训练相比混合训练平均性能提升 1.49 个百分点
- [[minicpm5-1b]] 的训练过程是该体系的完整实践验证

## 关键论点

1. 大模型数据策略必须从"堆规模"转向"精炼数据"的分级治理
2. 高质量数据是端侧大模型从技术验证走向规模化落地的关键变量
3. 数据-模型协同演进是长期方向

## 与现有维基的关联

- 呼应 [[scaling-law]] 的精细化演进方向
- 与 [[量化]]、[[本地推理]] 形成端侧 AI 落地的技术栈互补
- 体现 [[产业深水区]] 阶段从参数竞赛转向数据基础设施建设的趋势