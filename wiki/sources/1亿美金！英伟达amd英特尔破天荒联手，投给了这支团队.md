---
type: source
title: "1亿美金！英伟达AMD英特尔破天荒联手，投给了这支团队"
tags: [ai-infra, investment, sglang, radixark, open-source]
related: [radixark, sglang, miles, ying-sheng, banghua-zhu, nvidia, amd, intel, deepseek-v4]
created: 2026-05-09
updated: 2026-05-09
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/fx66U-nzrZ40dD8WDxoGSA"
venue: "新智元"
sources: ["1亿美金！英伟达amd英特尔破天荒联手，投给了这支团队.md"]
---

# 1亿美金！英伟达AMD英特尔破天荒联手，投给了这支团队

## 摘要
2026年5月，AI基础设施初创公司[[RadixArk]]宣布完成1亿美元种子轮融资，投后估值4亿美元。本轮融资由Accel领投，Spark Capital联合领投。最引人注目的是，芯片巨头[[英伟达]]（NVentures）、[[AMD]]、[[英特尔]]以及[[联发科]]罕见地同时出现在投资名单中。此外，[[Databricks]]及多位AI领域重量级天使投资人（如Intel CEO陈立武、Broadcom CEO Hock Tan、PyTorch联合创始人Soumith Chintala等）也参与了投资。

## 核心内容

### 融资背景与战略意义
- **罕见联手**：互为竞争对手的NVIDIA、AMD和Intel共同投资同一家初创公司，这在AI Infra赛道绝无先例。
- **投资逻辑**：硬件巨头面临算力昂贵且堆叠不可持续的瓶颈，通过投资开源软件栈来最大化硬件利用率（NVIDIA）、打破生态封锁（AMD/Intel）或构建统一接口（联发科）。
- **行业信号**：这标志着软件栈在AI产业链中的话语权提升，硬件厂商正合力构建不被单一生态锁定的AI基础设施。

### RadixArk 与其核心产品
[[RadixArk]] 由 [[SGLang]] 和 [[Miles]] 的核心开发者创立，致力于构建开源的AI推理与强化训练一体化基础设施。

#### SGLang：事实标准的推理引擎
- **地位**：自2023年诞生以来，已成为全球默认的推理引擎，GitHub 27K+ stars，部署规模超40万GPU。
- **用户**：包括Google、Microsoft、NVIDIA、Oracle、AMD、LinkedIn、xAI等对性能要求最苛刻的团队。
- **核心优势**：具备 [[Day-0 兼容性]]，即在新模型架构发布当天即可无缝支持并优化运行（如MoE、长上下文、多模态等）。
- **技术支撑**：通过ShadowRadix前缀缓存、Flash Compressor、Lightning TopK等技术实现极致性能。

#### Miles：强化学习框架
- **定位**：主攻大规模RL训练的稳定性与效率。
- **里程碑**：在2026年4月25日 [[DeepSeek V4]] 发布当天，SGLang和Miles成为全球首个同时支持其推理和RL训练的开源技术栈。
- **应用**：已被超过20支一线团队用于MoE模型训练，受到硅谷新兴前沿实验室Neo Labs青睐。

### 创始团队
- **[[盛颖]] (CEO)**：LMSYS Org发起人，SGLang主要创始人，前Databricks和xAI推理系统负责人。
- **[[朱邦华]] (CTO)**：师从Michael I. Jordan，前NVIDIA Principal Research Scientist，Nexusflow联合创始人。

### 行业影响
文章强调，强大的开源基础设施（如SGLang/Miles）能降低AI创业门槛，让小团队也能拥有大模型能力，从而打破大公司的垄断，重新分配AI建设的话语权。