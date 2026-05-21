---
type: source
title: "斯坦福MIT天团出手！1美元养龙虾，图文视频全包，打工人神外挂"
tags: [agnes, agent, multimodal, rlaf, pricing]
related: [agnes, agnesclaw, rlaf, dspo, uv, pinchbench, agnes-image-1-2, agnes-video-v1-2, openclaw]
created: 2026-04-01
updated: 2026-04-01
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/ydSRyNqnZK5fLomlccZDKw"
venue: "新智元"
sources: ["斯坦福mit天团出手！1美元养龙虾，图文视频全包，打工人神外挂.md"]
---

# 斯坦福MIT天团出手！1美元养龙虾，图文视频全包，打工人神外挂

## 摘要
本文报道了 AI 公司 [[Agnes]] 在 [[Zenmux]] 平台上线其核心模型矩阵的消息。Agnes 推出了覆盖文本 Agent、图像编辑和视频生成的全模态产品线，并发布了主打高性价比（最低 1 美元/月）的 AI Agent 部署工具 [[AgnesClaw]]。文章详细介绍了其底层技术架构（[[Latent-MoE]]、[[Mamba-2]]）、训练范式（[[RLAF]]、[[DSPO]]）以及各模型在 [[PinchBench]] 等榜单上的性能表现。

## 核心要点

### 全模态产品矩阵
- **文本 Agent**：[[Agnes-1.5-Pro]] 与 [[Agnes-1.5-Lite]]，基于自研“龙虾”基座，针对长上下文和高频工具调用优化。
- **图像生成**：[[Agnes-Image-1.2]]（20B 参数），在开源模型中排名第一，闭源中仅次于 NanoBananaPro。
- **视频生成**：[[Agnes-Video-V1.2]]（19B 参数），支持原生音画同步，采用双流音视频 Transformer 架构。
- **办公自动化**：[[Agnes-Slides]]（30B），低成本自动生成 PPT；[[Agnes-Search]] 与 [[Agnes-DeepResearch]]（30B），针对搜索与研究任务优化。

### AgnesClaw：高性价比 Agent 工具
- 定位为“一键部署”的 AI Agent 工具，直接对标 [[OpenClaw]]。
- 采取激进定价策略，部分地区新用户订阅低至 1 美元/月。
- 支持与 Telegram 绑定，提供定时任务、长期记忆和 Skills 库（包括 PPT 生成、表格处理等）。
- 具备“自我进化”能力，通过上下文理解优化用户习惯。

### 技术创新：RLAF 框架
- 提出了 [[RLAF]]（Reinforcement Learning with Agentic Feedback）框架，旨在减少对人工标注的依赖。
- **[[DSPO]]**（Dynamic-filter Sequence-level Policy Optimization）：动态过滤序列级策略优化算法，官方数据显示相比 [[DeepSeek]] Search-R1 (GRPO, 7B) 有 34.1% 的性能提升。
- **[[UV]]**（Universal Verifier）：通用验证器，用智能评估器替代人工奖励机制，实现“AI 训练 AI”。

### 团队背景
- 团队成员来自斯坦福、MIT、伯克利、NUS、NTU 及清华、浙大等顶尖高校。
- 核心科研带头人包括来自微软亚研院、英特尔研究院的首席科学家及图灵奖得主门下研究者。

## 市场影响
- 上线首周模型调用量快速攀升，显示出强劲的市场接受度。
- 通过“高性价比模型 + 完整工具链”的组合，Agnes 正试图切入开发者生态，挑战现有的单点能力模型。