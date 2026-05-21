---
type: source
title: "卡帕西开源Agent自进化训练框架，5分钟一轮实验，48h内揽星9.5k"
tags: [ai-research, open-source, automation, github, karpathy]
related: [autoresearch, andrej-karpathy, 自进化训练循环, val-bpb, 分布式异步科研]
created: 2026-03-09
updated: 2026-03-09
authors: [闻乐, 克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/XRbpe0H-ZB6R3ZSid3oPAg"
venue: "量子位"
sources: ["卡帕西开源agent自进化训练框架，5分钟一轮实验，48h内揽星9.5k.md"]
---

# 卡帕西开源Agent自进化训练框架，5分钟一轮实验，48h内揽星9.5k

## 概述
本文报道了 Andrej Karpathy 开源的 [[autoresearch]] 项目。这是一个仅 630 行代码的精简框架，旨在实现 AI 科研流程的完全自动化。该系统允许 AI 智能体在 5 分钟的实验周期内自主修改代码、训练模型并验证结果，从而实现 24/7 不间断的自我进化。

## 核心机制
项目基于 [[nanochat]] 模型，设定了两条核心“铁律”：
1.  **固定时长**：每次纯训练时间严格限制为 5 分钟，确保实验效率与公平性。
2.  **单一指标**：仅使用 [[val-bpb]]（验证集每字节比特数）作为评估标准，数值越低越好，且与模型大小无关。

## 系统架构
代码库由三个核心文件组成：
-   **prepare.py**：定义常量、下载数据和分词器，由人类设定，实验中保持不变。
-   **train.py**：AI 唯一可编辑的文件，包含 GPT 架构、优化器及训练循环逻辑。
-   **program.md**：人类编写的指令文件，定义研究方向和规则。

## 工作流程
1.  AI 读取 `program.md` 中的指令。
2.  对 `train.py` 进行针对性修改（通常 1-2 处）。
3.  运行 5 分钟训练，计算 [[val-bpb]]。
4.  **决策**：若指标降低则保留修改；若升高则回滚至上一个版本。
5.  立即开始下一轮实验。

## 实验效果
-   **效率**：每小时完成约 12 组实验。
-   **成果**：在一次近 250 轮的探索中，筛选并保留了 29 次有效改进。
-   **反响**：发布 48 小时内 GitHub Star 超过 9.5k，引发包括 Shopify CEO 在内的业界震动。

## 未来愿景：分布式异步科研
Karpathy 借用 [[seti-home]] 的概念，提出未来的 AI 科研应模拟“整个博士生研究社群”。他批评现有的 [[git-master-branch-paradigm]]（Git 主分支范式）限制了 AI 的非线性探索能力，主张转向一种去中心化的、基于分支积累的“攒经验”逻辑，而非传统的“写软件”逻辑。