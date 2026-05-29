---
type: entity
title: Colossus 1
tags: [data-center, compute, gpu, spacex, infrastructure, gpu-cluster, xai, supercomputing, ai-hardware, supercomputer, spacex-ai, 马斯克, 算力, anthropic]
related: ["spacex", "anthropic", "elon-musk", "nvidia", "xai", "claude", "ai基础设施对冲策略", "spacexai", "claude-code", "天然气涡轮机供电", "spacex-ai", "colossus-2", "gpu-utilization", "ai军火商模式"]
created: 2026-05-07
updated: 2026-05-28
sources: ["全球ai新王诞生！anthropic估值冲爆1.2万亿，首次反超openai.md", "突发，马斯克xai解散了！22万张gpu忍痛全给claude.md", "刚刚，马斯克官宣xai解散，22万张gpu算力租给anthropic.md", "马斯克22万张gpu全卖给claude用：5小时限额翻倍，双方合作建太空算力.md", "xai解散，但grok还没死！马斯克声称新模型正在训练.md", "asi决战！openai与anthropic双雄争霸.md"]
---

# Colossus 1

**Colossus 1** 是[[elon-musk|马斯克]]旗下全球算力密度最高的超级数据中心之一，位于孟菲斯。该设施拥有超过 22 万块英伟达顶级 GPU 和超过 300MW 的电力容量。它最初由 [[xAI]] 在 122 天内从零建成，用于支撑 Grok 模型训练，后随 xAI 并入 [[SpaceX]]。2026 年 5 月，SpaceX 将其全部算力独家提供给 [[Anthropic]]，用于支持 [[Claude]] 系列模型的训练与推理。

## 硬件规格与规模

- **GPU 数量**：超过 220,000 张英伟达 GPU。
  - **架构构成**：主体为上一代的 Hopper 架构（约 20 万张 H100），包含少量 Blackwell 架构芯片（约 3 万张，涵盖 H200 到 GB200 加速器）。
- **功率**：总功率超过 300 兆瓦，超过了许多小型城市的用电量。
- **地理位置**：孟菲斯。
- **建造速度**：122 天（2024 年由 xAI 建成）。
- **地位**：代表了当前 AI 算力的天花板水平，是地球上最密集的 AI 算力集群之一。

## 历史沿革

### 建设背景与初衷
该设施最初由 [[xAI]]（马斯克旗下 AI 公司）建造，旨在为 [[Grok]] 模型提供训练和推理算力，目标是正面竞争 OpenAI。作为 xAI 的核心资产，它曾支撑 Grok 模型的早期运行。

### 电力供应争议
在建设过程中，为了快速获得电力供应，xAI 的子公司 [[MZX Tech, LLC]] 曾安装并运营数十台天然气燃烧涡轮机为设施供电，声称这属于无需联邦许可证的"临时"措施。

### 运营争议
Colossus 1 在 xAI 运营期间，曾因极低的 [[GPU 利用率]]（仅 11%）和内部为了刷数据而故意跑无效实验的行为受到批评。

### 所有权变更与战略转移
1. **xAI 时期**：作为 xAI 的核心资产，支撑 Grok 模型的运行。
2. **SpaceX 接管**：2026 年 5 月，xAI 因在模型战争中失利（2025 年亏损约 130 亿美元）而解散并入 [[SpaceX]] 子部门 [[SpaceXAI]]，Colossus 1 随之成为 SpaceX 的资产。
3. **租给 Anthropic**：SpaceX 决定不再将 Colossus 1 用于自研模型，而是将其全部算力租给 [[Anthropic]]。

## 租借给 Anthropic（2026 年 5 月）

2026 年 5 月，马斯克将 Colossus 1 租借给 [[Anthropic]]，成为 ASI 竞赛格局的标志性转折点。

### 背景
- 2026 年 2 月，马斯克曾在 X 上公开骂 Anthropic 是"反人类""邪恶"。
- 诉讼失败后（参见[[openai世纪诉讼判决-20260518]]），马斯克需要盘活闲置资产。
- 花了一周与 Anthropic 核心团队深聊后，马斯克表态："没人触发我的'邪恶探测器'。Claude大概率是好的。"

### 对 Anthropic 的战略意义
[[SpaceX]] 与 [[Anthropic]] 达成独家合作，将 Colossus 1 的全部算力提供给 Anthropic 使用。这一举措直接缓解了 Anthropic 面临的算力短缺问题，使得 Claude 付费用户的使用限额得以翻倍。

具体影响包括：
- **解决"算力荒"**：解决了 Anthropic 因 [[Claude Code]] 需求激增导致的算力短缺问题。
- **即时可用性**：相比谷歌（2027 年上线）和亚马逊（2026 年底）的承诺算力，Colossus 1 是"现在就能用"的关键资源。
- **服务提升**：Anthropic 能够取消 Pro 和 Max 用户的峰值限制，并大幅提升 API 速率（Claude Code 速率限制提高一倍）。
- **市场影响**：算力注入直接导致 Claude Code 用量翻倍，显著增强了 Claude 对抗 OpenAI 的能力。

### 战略分析
此操作被解读为"一箭三雕"——赚钱、盘活闲置资产、强化 [[OpenAI]] 的对手。这也是 [[ai军火商模式|AI军火商模式]] 的又一典型案例：马斯克同时是 OpenAI 的诉讼对手和 Anthropic 的算力供应商。

## 与 Colossus 2 的关系

SpaceX 表示，其内部的 AI 训练工作已转移至新一代设施 [[Colossus 2]]。[[Colossus 2]] 是马斯克旗下更大规模的 AI 算力集群，承载 7 个大模型同时训练，同时向 Anthropic 等竞争对手出售算力。随着 Colossus 2（全 Blackwell 架构）的建成，Colossus 1 在训练前沿模型上的战略地位下降。由于 H100 在训练效率上远逊于新一代 GB200，马斯克选择将其出租给 Anthropic。这一操作既回笼了现金流，又避免了老旧算力资产的闲置和折旧。

Colossus 1 租借给 Anthropic 后，两个集群共同构成了马斯克在 AI 算力供应链中的战略资产。这一出租标志着马斯克将 AI 战略重心从模型竞争转向算力基础设施服务，也标志着 AI 竞争进入"算力军备竞赛"的新阶段，拥有顶级数据中心成为维持模型服务能力的核心门槛。通过将算力提供给竞争对手 Anthropic，马斯克既获得了收益，又在战略上打击了 [[OpenAI]]。

## 参见
- [[AI基础设施对冲策略]]
- [[算力换筹码]]
- [[xAI解散事件]]
- [[ai军火商模式]]