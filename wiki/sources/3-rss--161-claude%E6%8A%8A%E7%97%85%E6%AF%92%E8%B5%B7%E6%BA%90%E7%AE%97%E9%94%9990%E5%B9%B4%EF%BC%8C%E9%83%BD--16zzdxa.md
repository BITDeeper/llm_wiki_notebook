---
type: source
title: "Claude把病毒起源算错90年，都是网页惹的祸？"
authors: [元宇]
year: 2026
url: "https://mp.weixin.qq.com/s/rCN_ww_b-cHfBJJ9pV_wLg"
venue: 新智元
tags: [ai-for-science, 生物数据库, 确定性检索, anthropic, gget-virus, ncbi]
related: [anthropic, gget-virus, ncbi-virus, ai-for-science, 生物数据库机器不可访问性, gpt-5-5]
created: 2026-06-10
updated: 2026-06-10
sources: ["rss/claude把病毒起源算错90年，都是网页惹的祸？.md"]
---
# Claude把病毒起源算错90年，都是网页惹的祸？

新智元2026年6月10日报道，深度解读Anthropic研究博客《为生物学智能体铺路（Paving the way for agents in biology）》。

## 核心发现

AI智能体在生物学领域频频翻车，根本原因不是模型推理能力不足，而是科学数据库基础设施为人类浏览器交互设计，机器无法稳定访问。Anthropic将此比喻为"为马车修的城，跑不动汽车"。

## 关键实验数据

- **同题三答实验：** Claude Sonnet 4对同一埃博拉序列查询，三次返回106、15、5条，正确答案266条
- **疫情起源偏移：** Sonnet 4构建的数据集将TMRCA从2014年1月推至1922年，偏差90余年
- **gget virus修复效果：** 接入后所有系统准确率冲过90%，GPT-5.5达99.7%，稳定性升至0.92–1.00
- **模型自主发现工具：** GPT-5.5在360次运行中曾未被提示就自主找到并使用gget virus

## 核心论点

"模型不是瓶颈，基础设施才是。"加上确定性工具层后，模型选择的重要性被大幅抹平——便宜模型配上对的工具，照样稳。

## 案例背景

2026年5月刚果（金）爆发邦地布焦型埃博拉疫情，5月14日INRB分析血样确认8例，5月29日WHO报告超1000例。该疫情作为真实案例，展示了数据检索错误对疫情分析的致命影响。