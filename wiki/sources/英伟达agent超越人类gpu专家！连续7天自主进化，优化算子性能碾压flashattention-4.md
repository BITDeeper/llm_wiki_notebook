---
type: source
title: "英伟达Agent超越人类GPU专家！连续7天自主进化，优化算子性能碾压FlashAttention-4"
tags: [nvidia, gpu, optimization, agent, ai-takeoff]
related: [avo, 盲编码, flashattention, blackwell-b200, 许冰, ai-takeoff, ai-for-science]
created: 2026-03-28
updated: 2026-03-28
authors: [鹭羽]
year: 2026
url: "https://mp.weixin.qq.com/s/fLsjTrl8cN867970Mb92sQ"
venue: "量子位"
sources: ["英伟达agent超越人类gpu专家！连续7天自主进化，优化算子性能碾压flashattention-4.md"]
---

# 英伟达Agent超越人类GPU专家！连续7天自主进化，优化算子性能碾压FlashAttention-4

本文报道了英伟达发布的 [[avo]]（Agentic Variation Operator）智能体，该系统在无需人工干预的情况下，连续 7 天自主优化 GPU 算子，性能超越了人类专家编写的 [[cuDNN]] 和 [[flashattention]]。

## 核心发现

- **性能突破**：在 Blackwell B200 GPU 上，AVO 优化的多头注意力（MHA）性能比英伟达官方引擎 [[cuDNN]] 快 3.5%，比当前最强开源方案 [[flashattention]]-4 快 10.5%。
- **自主进化**：AVO 实现了连续 7 天无人工干预工作，生成了 40 个正式版本，探索了 500 余个候选方案。
- **泛化能力**：将 MHA 的优化成果迁移到 GQA（分组查询注意力）仅需 30 分钟，且性能依然全面领先基线。

## 技术细节

AVO 将代码优化流程完全自动化，包含四个步骤：
1.  **前置分析与调研**：查阅进化谱系和领域知识库，确定优化方向。
2.  **迭代式编辑**：基于分析结果修改代码，并进行测试验证。
3.  **提交新版本**：仅当性能提升时才提交新版本。
4.  **动态适配**：根据搜索进度调整优化策略，从粗粒度改进到细粒度调优。

为了解决长时程优化中的“搜索停滞”和“无效循环”问题，AVO 引入了 [[自监督机制]]，实时监测进化过程并自动触发干预。

## 观点与影响

第一作者 [[许冰]] 将这一过程称为 [[盲编码]]，并断言这是软件工程的未来，认为人类的认知能力已成为瓶颈。这一成果被视为 [[ai-takeoff]] 的实质性迹象，即 AI 在特定领域（如底层代码优化）已展现出超越人类专家的能力。