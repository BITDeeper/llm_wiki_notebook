---
type: event
title: GLM-5.1-highspeed 发布
created: 2026-05-22
updated: 2026-05-22
tags: [产品发布, 推理速度, 智谱, 大模型api]
related: [智谱, glm-5-1-highspeed, glm-5-1, tile-rt, 高速推理api, tokenmaxxing, 产业深水区]
sources: ["顶流里最快！智谱，你是在「喷」代码吧.md"]
origin_date: 2026-05-22
significance: medium
participants: [智谱, tile-rt, 量子位]
causes: [glm-5-1]
effects: [高速推理api, ai-agent快时代]
---
# GLM-5.1-highspeed 发布

2026 年 5 月 22 日，[[智谱]] 通过 [[量子位]] 媒体评测正式发布旗舰模型高速版 API [[glm-5-1-highspeed]]，推理速度达到 400 tokens/s，成为目前顶流模型中最快的 API。

## 背景

[[glm-5-1]] 基础模型已发布一个多月，定位为开源模型中 Coding 能力最强。智谱 GLM 团队与 [[tile-rt]] 团队联合进行系统工程优化，在不缩小模型规模的前提下实现高速推理。

## 技术要点

- 推理引擎针对 GLM-5.1 架构重写核心推理路径
- 调度系统通过动态批处理、请求合并、KV 缓存调度降低尾延迟
- TileRT 的 [[tile级推理调度]] 将调度单元下沉到 tile 级别
- 基础设施层面围绕推理集群部署、网络链路和负载均衡协同优化

## 媒体实测

量子位进行了四项实测：复杂 Canvas 动画网页生成、模糊指令迭代修改、2D 游戏实时场景修改、万字长文 10 秒处理，均验证了速度与质量的兼顾。

## 行业影响

此次发布标志着国产大模型 API 竞争正式进入速度维度，与同期商汤 Skills 开源、驭势上市、AIGC 峰会等事件共同构成 2026 年 5 月[[产业深水区]]的竞争图景。高速推理使 [[ai-agent快时代|AI Agent]] 体验出现质变，等待变少、反馈变密、任务推进更连续。