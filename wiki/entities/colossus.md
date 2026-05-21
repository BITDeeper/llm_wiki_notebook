---
type: entity
title: Colossus (孟菲斯超算)
tags: ["基础设施", "超算", "gpu", "xai", "infrastructure", "supercomputer", "gpu-cluster", "data-center"]
related: ["xai", "elon-musk", "macrohard", "grok", "scaling-law", "cursor", "memphis", "ai-infrastructure-bottleneck"]
created: 2026-02-12
updated: 2026-05-08
sources: ["马斯克急了，直播回应一切！xai全新阵容首曝光，华人联创仅剩一人.md", "马斯克变身「算力包租公」！砸数万gpu疯狂喂养cursor，联手反杀openai.md", "大型挂机现场：马斯克的55万英伟达gpu，利用率才11%.md"]
---

# Colossus (孟菲斯超算)

Colossus（巨像）是 [[xai]] 位于美国田纳西州 [[memphis]] 的超级计算机中心。它是目前全球规模最大的 GPU 集群之一，与 [[memphis]] 数据中心共同构成了 xAI 的算力底座，也是 xAI 追求 [[scaling-law]] 和算力优势的物理基础。

## 规模与硬件

-   **当前规模**：拥有约 100 万块 H100 GPU（部分来源称现有 GPU 总数超过 55 万张，涵盖 H100、H200 和最新的 Blackwell GB200）。
-   **算力性能**：集群总功率接近 2 吉瓦，约相当于一座中型核电站的发电量。
-   **扩展计划**：
    -   正在部署 33 万块 Grace Blackwell GPU（MacroHard 楼）。
    -   计划增加 22 万块 GB300 GPU（Macro Hotter 楼）。
-   **长期目标**：马斯克计划在五年内让 xAI 拥有 5000 万张“H100 等效”GPU，旨在超越 OpenAI、Anthropic、Google 和 Meta 的算力总和。

## 建设速度

Colossus 的建设速度打破了业界纪录。2024 年，xAI 仅用 122 天就建成了首个 10 万张 H100 的集群。英伟达 CEO 黄仁勋曾公开表示，xAI 的 AI 算力上线速度是业界最快的。

## 性能瓶颈与利用率

尽管拥有 H100 和 H200 等顶级硬件，但由于规模过大导致的网络通信和内存读写瓶颈，该集群的 [[mfu]]（模型算力利用率）曾一度低至 11%。这反映了超大规模集群在 [[ai-infrastructure-bottleneck]] 面临的挑战。

## 功能与商业角色

这些庞大的算力资源具有多重用途：

-   **模型训练**：主要用于训练更大规模的 [[grok]] 模型，支持 [[递归式自我改进]] 以及 Macrohard 等高消耗项目的运行。
-   **算力租赁**：Colossus 也是 xAI 开展算力租赁业务的核心资产。例如，[[cursor]] 等公司租用其上的数万张 GPU 进行模型训练。