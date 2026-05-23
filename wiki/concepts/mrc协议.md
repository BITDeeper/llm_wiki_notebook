---
type: concept
title: MRC协议
created: 2026-05-21
updated: 2026-05-21
tags: [网络协议, ai基础设施, openai, 超大规模集群]
related: [openai, zcube, ai基础设施价值迁移]
sources: ["推翻二十年组网逻辑，智谱落地zcube，让同样的gpu多干15%的活.md"]
origin_date: 2026-05-05
---
# MRC协议

MRC（Multipath Reliable Connection）是由[[openai]]联合NVIDIA、AMD、Intel、Microsoft、Broadcom五家巨头，通过开放计算项目（OCP）向全行业发布的超大规模AI集群网络传输协议。发布于2026年5月5日。

## 核心思路

将数据传输分散到数百条路径上并发传输，在微秒级绕过链路故障，从根本上解决大规模GPU集群的网络通信瓶颈。

## 部署状态

已部署在OpenAI最大的NVIDIA GB200超算集群中，用于训练ChatGPT等前沿模型。

## 与ZCube的关系

MRC代表**协议层**路径（在拥塞发生后做补救或绕行），[[zcube|ZCube]]代表**架构层**路径（从架构层面消除拥塞产生的根源）。两者高度互补，当推理集群规模向十万卡甚至更大规模演进时，"架构层无拥塞+协议层强容错"的组合可能成为标配。
