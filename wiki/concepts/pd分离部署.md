---
type: concept
title: PD 分离部署
created: 2026-05-21
updated: 2026-05-21
tags: [大模型推理, 部署架构, KV-Cache, 网络瓶颈]
related: [zcube, glm-5-1, fat-tree-clos架构]
sources: ["中国团队突破瓶颈！不加gpu，万卡集群算力暴涨15%.md"]
---
# PD 分离部署

PD 分离部署（Prefill-Decode 分离）是大模型推理的主流部署模式，将输入处理（Prefill）与输出生成（Decode）分离到不同节点。

## 工作原理

- **Prefill 阶段**：处理用户输入，生成 KV Cache 中间数据。
- **Decode 阶段**：基于 KV Cache 逐步生成输出 Token。
- **KV Cache 传递**：Prefill 节点需要将 KV Cache 高频传递给 Decode 节点。

## 对网络的影响

PD 分离部署导致 GPU 间数据流向高度动态、不对称：

- 不同请求的长度千变万化，数据流向毫无规律。
- 有的链路挤满数据，有的链路空空如也。
- 传统 [[fat-tree-clos架构]] 面对这种流量模式时，流量会被拓扑关系推向同几台交换机和链路，形成热点堆积和结构性拥塞。

## 行业意义

PD 分离部署是理解为什么传统网络架构成为 AI 推理瓶颈的根本原因。它直接催生了对 [[zcube]] 等新型网络架构的需求。