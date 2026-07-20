---
type: source
title: "Anthropic警告的递归AI，田渊栋新公司刚刚走出了「第一步」"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/nbR1cfO-p1rd-88TWd-RYQ"
venue: 机器之心
tags: [递归自我改进, 自动化ai研究, recursive-superintelligence, 田渊栋, anthropic]
related: [递归式自我改进, 自动化ai研究员, anthropic, andrej-karpathy, autoresearch, sakana-ai, jack-clark, 英伟达, recursive-superintelligence, 田渊栋, first-steps-toward-automated-ai-research, claude-fable-5, nanochat-autoresearch, nanogpt-speedrun, sol-execbench, ami-labs, ineffable-intelligence]
created: 2026-06-12
updated: 2026-06-12
sources: ["rss/anthropic警告的递归ai，田渊栋新公司刚刚走出了「第一步」.md"]
---
# Anthropic警告的递归AI，田渊栋新公司刚刚走出了「第一步」

## 摘要

本文报道了 [[recursive-superintelligence|Recursive Superintelligence]] 公司发布的首个公开技术成果——「[[first-steps-toward-automated-ai-research|First Steps Toward Automated AI Research]]」。该系统是一个开放式自动化知识发现框架，在三个差异显著的基准测试上均刷新了 SOTA 纪录，标志着 [[递归式自我改进]] 从理论讨论进入工程验证阶段。

## 核心内容

### 背景：Anthropic 的警示

[[anthropic|Anthropic]] 发布《When AI Builds Itself》文章，揭示截至 2026 年 5 月，其代码库中超过 80% 的代码已由 [[claude-fable-5|Claude]] 撰写，工程师每日合并代码量是 2024 年的 8 倍。内部测试中，Claude 将训练代码运行速度提升约 52 倍（人类专家通常需 4-8 小时达到 4 倍）。Anthropic 呼吁行业在递归自我改进时刻到来时保留暂缓选项，并已限制最新模型 Claude Fable 5 被用于前沿 AI 研发。

### Recursive 的三个基准成果

1. **[[nanochat-autoresearch|NanoChat Autoresearch]]**：固定计算预算下小模型训练优化，BPB 从 0.9372 降至 0.9109，等效节省 1.3 倍训练时间。系统自主发现哈希表 n-gram 短上下文记忆机制。
2. **[[nanogpt-speedrun|NanoGPT Speedrun]]**：训练速度极限竞速，时间从 79.7s 压缩至 77.5s，在社区两年 83 次贡献基础上再突破。发现 FP8 注意力计算、优化器退火噪声、精简融合 MLP 内核三项跨领域改进。
3. **[[sol-execbench|SOL-ExecBench]]**：[[英伟达]]推出的 GPU 内核优化基准，SOL 分数从 0.699 提升至 0.754，将距硬件极限差距缩小 18%，跨 235 个任务复用优化模式。

### 系统设计

Recursive 构建了一套通用研究自动化框架：针对明确优化目标，系统自动提出实验想法、实现代码、运行验证、从中学习并决定下一步搜索方向。支持多线路并行推进、跨任务复用有效发现，并内嵌奖励作弊检测机制。

### 公司与赛道

[[recursive-superintelligence|Recursive]] 由 [[田渊栋]] 等 9 位顶级 AI 研究者联合创立，融资 6.5 亿美元，估值 46.5 亿美元。同赛道竞争者包括 [[ami-labs|AMI Labs]]（[[yann-lecun|Yann LeCun]] 创立，10 亿美元融资）和 [[ineffable-intelligence|Ineffable Intelligence]]（David Silver 创立，11 亿美元种子轮）。

## 关键洞察

- **递归自我改进已从预警变为工程实证**：Anthropic 的内部数据和 Recursive 的公开成果共同证明这一范式已经启动。
- **AI 可在人类专家稀缺领域自主发现新知识**：GPU 内核优化场景中，团队坦承非专家，"想法来自系统本身"。
- **当前局限**：系统仅在"指标明确、反馈快速、作弊可检测"的封闭场景中验证有效，距离开放性科学问题尚远。
- **安全与竞赛的张力**：Anthropic 限制 Claude Fable 5 用于前沿 AI 研发，但外部公司正在加速推进同一方向。

## 与现有 Wiki 的关联

本文直接关联 [[递归式自我改进]]、[[自动化ai研究员]]、[[anthropic]]、[[andrej-karpathy]]、[[autoresearch]]、[[sakana-ai]]、[[jack-clark]] 等已有条目，并为 [[可验证奖励]] 概念提供新的实证支持。与 [[anthropic暂停研发提案-20260604]] 事件形成直接对照——Anthropic 呼吁暂停的同时，行业正在加速。