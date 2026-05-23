---
type: source
title: "20岁写出Transformer的人，真开源了2180亿大模型"
created: 2026-05-22
updated: 2026-05-22
tags: [开源, 大模型, cohere, transformer, moe, 量化]
related: [cohere, command-a-plus, aidan-gomez, nick-frosst, moe-混合专家架构, w4a4-量化, apache-2-0-开源许可, 原生引用]
sources: ["20岁写出transformer的人，真开源了2180亿大模型.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/HZ7BJapjFhQIxv_E-BKOYw"
venue: 新智元微信公众号
---

# 20岁写出Transformer的人，真开源了2180亿大模型

## 摘要

本文报道了 [[cohere]] 于2026年5月20日发布旗舰模型 [[command-a-plus]] 的消息。该模型由 [[aidan-gomez]]（Transformer 论文最年轻共同作者）宣布推出，采用 [[moe-混合专家架构]]，2180亿总参数仅激活250亿，配合 [[w4a4-量化]] 方案实现单卡部署。最关键的突破在于许可证从 CC-BY-NC 4.0 转向 [[apache-2-0-开源许可]]，成为 Cohere 首个真正可商用的开源旗舰模型。

## 核心内容

### 模型架构与性能
- 218B 总参数 / 25B 激活参数的 MoE 架构
- 提供 BF16、FP8、W4A4 三种量化版本
- W4A4 版本低并发下达 375 tok/s，首 token 延迟 113ms
- 较前代速度提升 63%，延迟降低 17%
- 最低部署配置：1 张 NVIDIA B200 或 2 张 H100

### 许可证变更
- 从 CC-BY-NC 4.0（禁止商用）转向 Apache 2.0（完全开放商用）
- 由联合创始人 [[nick-frosst]] 力主推动
- 企业可私有化部署、用机密数据微调、部署在气隙网络

### 关键功能
- [[原生引用]]：自动生成溯源标记，将事实声明链接到具体文档
- 支持 48 种语言，新分词器降低非欧洲语言 token 消耗
- 128K 上下文多模态输入，支持智能体工具调用

### 性能数据（Cohere 自发布）
- ²-Bench Telecom：37% → 85%
- Terminal-Bench Hard：3% → 25%
- AIME 25：57% → 90%

### 第三方评价
VentureBeat 指出 Command A+ 在深度智能体编码和综合智能广度上仍落后于 [[DeepSeek V4]] 等中国头部开源模型。

## 关联条目

- [[aidan-gomez]] — Transformer 论文作者、Cohere CEO
- [[nick-frosst]] — Hinton 门徒、开源决策推动者
- [[量化]] — W4A4 是量化技术的前沿实践
- [[scaling-law]] — MoE + 量化是对参数规模竞赛的工程替代
- [[ai-subscription-crisis]] — 私有化部署是摆脱 API 依赖的替代路径