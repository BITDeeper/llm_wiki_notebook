---
type: event
title: DECS入选ICLR 2026 Oral
created: 2026-05-12
updated: 2026-05-12
tags: [iclr-2026, 学术会议, oral论文, 推理效率]
related: [decs, 过度思考, 复旦大学, 上海交通大学, 上海人工智能实验室]
sources: ["iclr-2026-oral｜大模型总爱「想太多」？-decs从源头消除冗余思考，实现推理token减半且性能不降反升.md"]
origin_date: 2026-01-01
participants: [复旦大学, 上海交通大学, 上海人工智能实验室]
causes: [过度思考]
effects: [decs]
significance: medium
---
# DECS入选ICLR 2026 Oral

由[[复旦大学]]、[[上海交通大学]]和[[上海人工智能实验室]]联合完成的DECS论文被ICLR 2026接收为Oral presentation。论文一作为江书洋（复旦大学与上海人工智能实验室联培博士生），指导教师为王钰教授和张娅教授（[[上海交通大学]]人工智能学院）。

## 背景

以DeepSeek-R1、OpenAI GPT Thinking为代表的大型推理模型普遍存在[[过度思考]]现象，业界尝试通过[[长度惩罚]]解决但效果有限。

## 核心贡献

论文首次从理论层面系统揭示了长度惩罚策略的两大致命缺陷，并提出[[decs|DECS]]训练框架，通过解耦Token级奖励和课程式批次调度实现推理Token减半且性能不降反升。

## 影响

- 为大模型推理效率研究提供了新的理论视角和实用技术方案
- 代码完全开源于GitHub
- 验证了过度思考是跨领域系统性现象，DECS机制具有跨域泛化能力