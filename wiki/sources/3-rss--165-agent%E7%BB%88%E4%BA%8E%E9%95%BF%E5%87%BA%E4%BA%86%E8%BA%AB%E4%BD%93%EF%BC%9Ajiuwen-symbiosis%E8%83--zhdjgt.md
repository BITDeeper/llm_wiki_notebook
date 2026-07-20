---
type: source
title: "Agent终于长出了身体：Jiuwen Symbiosis背后的思考与实践"
authors: [允中]
year: 2026
url: "https://mp.weixin.qq.com/s/ftDcDMcJO12mi1-m3Dtvnw"
venue: 量子位
created: 2026-06-13
updated: 2026-06-13
tags: [具身智能, physical-ai, 开源架构, 端云协同, 昇腾, 华为云]
related: [jiuwen-symbiosis, openjiuwen, 态势感知环, 莫拉维克悖论, 缸中之脑困境, 华为云-agentarts, 昇腾, 鲲鹏]
sources: ["rss/agent终于长出了身体：jiuwen-symbiosis背后的思考与实践.md"]
---
# Agent终于长出了身体：Jiuwen Symbiosis背后的思考与实践

本文由[[量子位]]记者[[允中]]撰写，报道了[[openjiuwen]]社区正式开源[[jiuwen-symbiosis|Jiuwen Symbiosis]]架构，标志着该团队从纯多智能体软件协作（如[[mango-多智能体流网络优化|MANGO]]框架）正式迈入物理世界硬件控制层（3.0共生时代）。

## 核心摘要

文章以[[莫拉维克悖论]]为理论切入点，指出当前大模型面临[[缸中之脑困境]]——具备高智商但缺乏物理实体。为解决现有[[vla-视觉-语言-动作|VLA]]模型在跨本体泛化、长程复合任务、故障定位和成功率方面的四大缺陷，openJiuwen团队提出了[[态势感知环]]（Situation Awareness Loop）作为核心骨架，将认知层与执行层解耦，使Agent的思考过程变得可观察、可调试。

## 关键技术架构

Jiuwen Symbiosis 包含多模态感知、安全规划、物理执行、状态观察、观测反馈和空间记忆六大模块，形成“感知-规划-执行-观测-反馈”的透明闭环。

在算力生态上，该架构摒弃了传统的“大模型+GPU”思路，采用[[端云协同架构]]，深度适配华为[[昇腾]]（NPU）与[[鲲鹏]]（CPU）生态，解决有限功耗和带宽下的稳定闭环问题。目前，[[华为云-agentarts|华为云AgentArts]]已将其引入商业化平台。

## 演进脉络

文章梳理了智能控制从物理世界到数字世界的演进路线：
1. **1.0 手搓任务**：借助人的辅助进行原子化操作。
2. **2.0 虚拟环境演练**：基于[[sim2real|Sim2Real]]，在仿真环境中训练，但存在泛化差、黑盒等缺陷。
3. **3.0 共生时代**：模糊虚拟与现实边界，直接输出控制硬件底层拓扑的Action序列。