---
type: entity
title: Step 3.7 Flash
created: 2026-06-01
updated: 2026-06-04
tags: [大模型, 多模态, moe, agent, flash模型, 开源, 阶跃星辰, 效率]
related: [阶跃星辰, advisor-策略, claw-eval, flash模型范式重构, openclaw, scaling-law, step-3.5-flash, token效率, 模型竞赛赛点转移]
sources: ["400-tokens秒！阶跃step-3.7-flash，把agent任务成本打到claude零头.md", "阶跃step-3.7-flash登顶aa榜：速度、性价比、端到端三项第一.md"]
origin_date: 2026-06-01
---
# Step 3.7 Flash

[[阶跃星辰]]于2026年6月1日发布的多模态大模型，定位为"离应用最近的 Agentic 基座模型"，主打速度、性价比和端到端能力。发布后迅速登顶AA榜（Artificial Analysis）速度、性价比、端到端三项第一，并在OpenRouter Trending榜单热度暴涨至全球第二，同时在HuggingFace开源后下载量和讨论持续升温。

## 技术规格

- **架构**：稀疏 MoE（混合专家），总参数 196B + 1.8B（ViT），单次推理仅激活 11B 参数
- **生成速度**：最高 416 tps（主流模型约 30 tps，GPT-5.3 约 70+ tps）
- **极限吞吐**：6000 tok/s（NVFP4，海外开发者实测）
- **常规吞吐**：稳定 2000 tok/s
- **视觉理解**：内建完整视觉理解能力，V*（Python 工具）得分 95.3
- **开源**：全面开源，支持云端、数据中心、本地部署

## 核心工程指标

| 指标 | 数值 | 对比基准 |
|------|------|----------|
| 输出速度 | 最高 416 tps | 主流模型 ~30 tps，GPT-5.3 约 70+ tps |
| 极限吞吐 | 6000 tok/s（NVFP4） | 海外开发者实测 |
| 常规吞吐 | 稳定 2000 tok/s | — |
| 单任务成本 | Claude Opus 4.6 的约 1/9 | 编程能力达其 97% |
| OpenRouter 定价 | 输入 $0.2/M，输出 $1.15/M | — |
| 缓存命中率 | 86.1% | 全球第二，仅次于 DeepSeek |

## Benchmark 表现

| 基准 | 得分 | 备注 |
|------|------|------|
| [[claw-eval\|ClawEval-1.1]] | 67.1 | 超越 DeepSeek V4 Flash（57.8）、Kimi K2.6（62.3），逼近 Claude Opus 4.6（70.8） |
| GDPval | 45.8 | 上一代 28.0 |
| Toolathlon | 49.5 | 上一代 33.3 |
| τ²-bench Telecom | 98%+ | 低、中、高三档难度通过率均超 98% |
| Terminal-Bench 2.1 | 59.5 | 落后于前沿闭源旗舰 |

## Advisor 模式

采用 [[advisor-策略|Advisor（顾问）策略]]，小模型作为执行官全程控制流程，仅在关键决策点请教大"顾问模型"。开启后单任务成本 0.19 美元，约为 Claude Opus 4.6（1.76 美元）的 1/9，实现其 97% 编码能力。

## 能力实测

- **多模态理解**：精准识别灵巧手图片中的分段指节、灰色阻尼指尖、腕部接口等细节特征
- **工具编排**：接入 [[openclaw|OpenClaw]] 完成报销单整理任务，不到 60 秒生成报销 Excel 和说明文档
- **多 Agent 集群**：40 个差异化虚拟 Agent 模拟产品评审，全部有效返回，无角色混淆或格式跑偏

## 部署与兼容

- **本地部署**：128GB Mac Studio 可跑 4-bit 量化版（32K 上下文），支持 mlx-vlm
- **推理框架**：vLLM、SGLang、llama.cpp
- **Agent 框架**：Claude Code、KiloCode、[[openclaw|OpenClaw]]、[[hermes-agent|Hermes Agent]]
- **协议**：MCP / Skills

## 定位与局限

Step 3.7 Flash 明确不是"全榜屠夫"——在 Terminal-Bench 2.1、Toolathlon 上落后于 GPT 5.5、Claude Opus 4.7 等前沿闭源旗舰。其策略是在"性价比前沿"上做到极致：多模态 + 极致效率 + Advisor 模式成本压缩。

Step 3.7 Flash 是 [[模型竞赛赛点转移]] 的标志性产品——代表大模型竞争从"单次问答能力上限"转向"效率优先"（速度 + 性价比 + 端到端交付）的新范式。