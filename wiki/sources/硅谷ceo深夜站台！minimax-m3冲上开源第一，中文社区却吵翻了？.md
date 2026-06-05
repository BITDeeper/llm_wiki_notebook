---
type: source
title: "硅谷CEO深夜站台！MiniMax M3冲上开源第一，中文社区却吵翻了？"
created: 2026-06-04
updated: 2026-06-04
tags: [minimax, 开源模型, 大模型评测, 多模态, 稀疏注意力, agent]
related: [minimax-m3, minimax, msa-稀疏注意力, agent-team, 新智元]
sources: ["硅谷ceo深夜站台！minimax-m3冲上开源第一，中文社区却吵翻了？.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/I9x6emcsXG7_y4k7GsRBkw"
venue: 新智元
---
# 硅谷CEO深夜站台！MiniMax M3冲上开源第一，中文社区却吵翻了？

新智元2026年6月4日发布的深度报道，聚焦 [[minimax]] 发布的最新开源大模型 [[minimax-m3]]。

## 核心内容

文章记录了M3发布后72小时内全球开发者的"硬核验货"过程，包括：

- **Vercel CEO [[guillermo-rauch]]** 罕见公开站台推荐M3
- **盲测实验**：Victoria Wu的鹈鹕骑自行车动画测试中M3被误认为Opus；JAZII的《我的世界》克隆版测试中M3与Opus 4.8表现"Super close"
- **严苛评测**：Thomas Wiegold发布3000字实测报告，称M3为"今年测过的最有意思的模型之一"

## 实测案例

1. **50页DeepSeek-V3技术报告**因果链拆解，精准命中MLA架构图中的隐藏约束
2. **2小时GTC演讲**40分钟出3500字初稿，调用ffmpeg自行压缩切段
3. **12个模型benchmark截图**自动生成交互对比大屏

## 技术架构

M3的核心能力基于 [[msa-稀疏注意力]]（MiniMax Sparse Attention）架构，实现1M上下文窗口下每token计算量降至上一代的1/20。多模态采用 [[原生理解生成统一|原生多模态训练]]，预训练规模达100T量级。

## 争议

- 国内社区因Token Plan价格调整抗议，MiniMax当天发布补偿方案
- 国外社区聚焦技术验证，形成"墙内开花墙外香"的反差
- 权重与技术报告承诺十天内开源，尚待社区最终验证