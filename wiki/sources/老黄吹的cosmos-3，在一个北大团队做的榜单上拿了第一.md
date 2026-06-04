---
type: source
title: "老黄吹的Cosmos 3，在一个北大团队做的榜单上拿了第一"
created: 2026-06-03
updated: 2026-06-03
tags: [cosmos-3, r-bench, rovid-x, dagroup, 具身智能, 视频生成, 物理ai, 评测基准]
related: [cosmos-3, r-bench, rovid-x, dagroup, 周大权, 具身智能数据困境, sim2real]
sources: ["老黄吹的cosmos-3，在一个北大团队做的榜单上拿了第一.md"]
authors: [听雨, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/nAT-y78H_A_Y81m_yc8Wew"
venue: 量子位
---
# 老黄吹的Cosmos 3，在一个北大团队做的榜单上拿了第一

量子位报道，2026年6月GTC Taipei上英伟达发布 [[cosmos-3]]，宣称在四个榜单均列第一。其中 [[r-bench]] 是由北京大学 [[dagroup]]（负责人 [[周大权]]）提出的面向具身世界的机器人视频生成评测基准，已被 ICML 2026 接收。

## 核心内容

- **Cosmos 3**：英伟达首个完全开源的物理AI全模态模型，基于 Mixture-of-Transformers 架构，能同时理解和生成文本、图像、视频、环境声音及机器人动作。Nano（0.584）和 Super（0.581）在 R-Bench 开源模型中分列第一和第二。
- **R-Bench**：包含650个评测样本，覆盖5类任务能力和4类机器人形态，自动打分与人工评测 Spearman 相关系数达0.96。定位为机器人视频生成的"物理质量过滤器"。
- **RoVid-X**：400万条机器人视频片段、1300+细粒度技能、1万+小时内容，附带RGB、深度、光流等多模态物理标注。已在 HuggingFace 开源300万条子集，登顶 Video 模态 Trending 第一。
- **共性短板**：精细操作（抓、捏、拧、插）对接触建模要求高最易出错；长时规划中动作流畅但任务逻辑错误；通用知识与机器人数据未有效融合。

## 关键判断

文章提出视频生成正从内容创作工具向物理世界模拟基础设施的范式转移，R-Bench 回答"如何评估"，RoVid-X 回答"如何训练"。团队下一步计划做 Inverse Dynamics Model，进一步打通视频生成、策略学习和真机部署之间的闭环。