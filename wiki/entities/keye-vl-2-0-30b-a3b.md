---
type: entity
title: Keye-VL-2.0-30B-A3B
created: 2026-05-26
updated: 2026-05-26
tags: [多模态大模型, 视频理解, agent, 快手, 稀疏注意力]
related: [快手, dsa稀疏注意力, mopd, context-rl, extraio架构]
sources: ["将dsa注意力引入多模态，快手keye2.0开启强化推理新范式.md"]
origin_date: 2026-05-26
---
# Keye-VL-2.0-30B-A3B

[[快手]] 自研的30B级多模态大语言模型，Keye家族最新一代主力基座。2026年5月26日正式发布，模型权重与开源代码同步上线 Hugging Face 和 GitHub。

## 核心技术创新

### 五大技术引擎

1. **DSA稀疏注意力**：首次将 [[dsa稀疏注意力]] 引入多模态理解场景，解锁256K超长上下文深度感知，Prefill成本降低50%，Decode成本曲线随序列增长极其平缓。
2. **时空统一编码与长时序特征聚合**：使模型具备时序因果推理能力，打破 [[长上下文衰减魔咒]]。
3. **[[mopd]] 专家合版**：跨模态多专家策略蒸馏/合并技术，解决多任务学习中的灾难性遗忘。
4. **[[context-rl]] 后训练**：多模态强化学习体系，利用混合模态参考信息构建稠密细粒度奖励信号。
5. **Agent协作机制**：首次解锁Code Agent、Tool Agent、Search Agent等多步自动化调度。

### 训练基础设施

- [[extraio架构]]：IO独立部署、按需扩容，消除视频解码与抽帧的IO瓶颈
- ViT-LM异构并行 + 两级负载均衡 + ViT激活值零显存优化
- 基于FlashInfer、TileLang对变长序列模式下的DSA深度调优，长序列训练性能翻倍

## 评测成绩

| 基准 | 成绩 | 备注 |
|------|------|------|
| TimeLens (ActivityNet) | 58.5 mIoU | 超越Gemini-2.5-Pro（58.1） |
| TimeLens (QVHighlights) | 70.1 mIoU | 大幅超越Gemini 3 Flash（49.5） |
| LongVideoBench | 74.10 | 跨级逼近顶级闭源 |
| MLVU | 82.80 | 同尺寸SOTA |
| VideoMMMU | 79.98 | 同尺寸SOTA |
| VideoMME V2 (512帧) | 42.44% ACC | 打破长上下文衰减魔咒 |
| LivecodeBench v6 | 77.10 | 超越部分200B+开源基座 |
| SWE-bench Verified | 62.00 | 具备Issue定位修复能力 |
| TAU2-Bench | 82.58 | 复杂多步调度显著优势 |

## 业务落地

模型已融入快手核心业务链路：
- 生成式推荐：提升分发命中率
- 内容生态治理
- 商业化定向投放：精细化标签提取，取得显著商业收益转化
- Video × Agent：智能检索、高光切片提取、自动化剪辑包装、营销文案生成

## 技术定位

以30B为基石，快手计划稳步向原生多模态（Native Multimodal）与端到端深度融合挺进。文章强调"跑分不是终点，落地才是"。