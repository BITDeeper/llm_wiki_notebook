---
type: source
title: "登Nature子刊！清华团队提出全球气候模态统一预测模型UniCM"
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/H-OGwD3aAqqdqHHymPmRSQ"
venue: 量子位微信公众号
created: 2026-06-14
updated: 2026-06-14
tags: [气候预测, ai-for-science, 清华大学, unicm, nature-machine-intelligence]
related: [unicm, 李勇, 全球气候模态统一预测, 双分支多视角transformer架构, 模态引导机制, 春季可预报性障碍]
sources: ["rss/登nature子刊！清华团队提出全球气候模态统一预测模型unicm.md"]
---
# 登Nature子刊！清华团队提出全球气候模态统一预测模型UniCM

本来源记录了[[清华大学]]电子工程系[[李勇]]教授团队在AI气候预测领域的最新突破。该研究提出的[[unicm|UniCM]]（全球气候模态统一预测模型）发表于《Nature Machine Intelligence》，标志着AI在长期气候系统预测中的重要进展。

## 核心摘要

长期以来，厄尔尼诺（ENSO）、印度洋偶极子（IOD）等关键气候模态通常被孤立预测。UniCM首次从"全球耦合气候系统"视角出发，将七类关键气候模态纳入同一模型联合学习，实现了从"单模态预测"向[[全球气候模态统一预测]]的跨越。

## 关键技术

- **双分支架构**：采用[[双分支多视角transformer架构]]，包含自下而上建模物理场的Globalformer和自上而下建模模态耦合的Modeformer。
- **模态引导机制**：提出Mode-to-Patch Guidance，将高层气候模态信息反馈至底层指导物理场预测，实现跨视角双向耦合。

## 实验突破

1. **ENSO预测**：有效预测提前期从15-16个月提升至19个月，误差降低14.1%-17.9%。
2. **突破极限**：克服[[春季可预报性障碍]]，跨越春季时仍能保持ACC>0.5长达14个月（原记录9-12个月）。
3. **科学发现**：通过分析模型注意力机制，自动识别出NPMM是1997年强厄尔尼诺的重要先导信号，体现了[[ai驱动的科学发现]]范式价值。