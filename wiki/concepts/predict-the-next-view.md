---
type: concept
title: Predict the next view
created: 2026-06-10
updated: 2026-06-10
tags: [空间智能, 训练范式, 商汤科技, scaling-law]
related: [空间智能, sensenova-si, sensenova-u1, 反scaling-law现象, 原生理解生成统一]
sources: ["rss/用一套统一架构，驱动数字空间与物理空间互通丨商汤林达华aigc2026.md"]
---
# Predict the next view

## 定义

一种替代"Predict the next token"的新训练范式，模型不再预测序列中的下一个词元，而是预测下一视角（next view）或视角中的局部内容（local part）。由[[商汤科技]]在[[sensenova-si|SenseNova-SI]]空间智能专项中探索提出。

## 核心思想

传统大语言模型的训练目标是预测下一个token，这一范式在语言任务中极为有效，但在空间智能任务中存在根本局限——理解三维空间需要模型能够"想象"从不同视角观察场景时会看到什么，而非仅仅记住见过的影像。

Predict the next view要求模型：
1. 理解当前视角下的场景结构
2. 推理空间中物体之间的三维关系
3. 生成从新视角观察时的视觉内容

## 与统一架构的因果关系

这一训练范式的探索直接推导了[[原生理解生成统一]]的必要性：视觉预测需要先生成内容再做比较，因此模型必须具备视觉生成能力。在只有理解能力、没有生成能力的模型中，无法完成这种预测。这从第一性原理层面论证了摒弃独立visual encoder和visual autoencoder、采用共享latent representation的架构选择。

## 作为新Scaling Law

[[林达华]]将Predict the next view定位为空间智能领域的"新Scaling Law"——区别于[[反scaling-law现象|反Scaling Law]]（增加传统多模态数据反而有害），这条路径通过改变训练目标本身，找到了更高效通往空间智能的扩展路径。

## 成果验证

基于这一范式，商汤在"相当短的探索时间内"（林达华原话，强调投入不大），即在空间智能多个国际权威榜单上超越GPT-5和Gemini，验证了该路线的有效性。