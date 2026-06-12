---
type: entity
title: SenseNova-SI
created: 2026-06-10
updated: 2026-06-10
tags: [商汤科技, 空间智能, 研究项目]
related: [商汤科技, 林达华, sensenova-u1, 空间智能, 反scaling-law现象, predict-the-next-view]
sources: ["rss/用一套统一架构，驱动数字空间与物理空间互通丨商汤林达华aigc2026.md"]
---
# SenseNova-SI

商汤科技于2025年下半年启动的空间智能（Spatial Intelligence）研究专项，由[[林达华]]主导。

## 研究框架

SenseNova-SI将空间智能拆解为六个维度的能力，包括：
- 视角判断
- 物体关系判断
- （其余维度在公开资料中未完整披露）

## 关键发现

### 反Scaling Law现象
在测试GPT、Gemini等顶尖模型时发现，它们在简单三维结构理解上频繁出错（如六根手指照片被误判为五根）。进一步研究发现，简单增加多模态训练数据反而导致视觉判断能力下降——因为语言先验被更牢固地固化进训练数据。详见[[反scaling-law现象]]。

### 新训练范式
为打破空间智能困局，团队探索了[[predict-the-next-view|Predict the next view]]等新训练范式，不再预测下一个token，而是预测下一视角或视角中的局部内容。

### 推导统一架构的必然性
在尝试新训练范式时发现：视觉预测需要先生成内容再做比较，因此模型必须具备视觉生成能力。这从第一性原理推导出[[原生理解生成统一]]的技术必然性，最终催生了[[sensenova-u1|SenseNova-U1]]。

## 成果

- 在多个空间智能国际权威榜单上超越GPT-5和Gemini（使用验证性模型）
- 找到了一条更高效通往空间智能的Scaling Law
- 为[[sensenova-u1|SenseNova-U1]]的统一架构提供了理论基础和实验验证

## 时间线

- 2025年下半年：项目启动
- 2025年9月：基于研究发现提出理解与生成统一架构
- 2026年4月：研究成果体现在SenseNova-U1发布中