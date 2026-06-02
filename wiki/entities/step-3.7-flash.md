---
type: entity
title: Step 3.7 Flash
created: 2026-06-01
updated: 2026-06-01
tags: [大模型, 多模态, moe, agent, flash模型, 开源]
related: [阶跃星辰, advisor-策略, claw-eval, flash模型范式重构, openclaw, scaling-law]
sources: ["400-tokens秒！阶跃step-3.7-flash，把agent任务成本打到claude零头.md"]
origin_date: 2026-06-01
---
# Step 3.7 Flash

[[阶跃星辰]]于2026年6月1日发布的多模态大模型，定位为"离应用最近的 Agentic 基座模型"。

## 技术规格

- **架构**：稀疏 MoE（混合专家），总参数 196B + 1.8B（ViT），单次推理仅激活 11B 参数
- **生成速度**：400 Tokens/秒
- **视觉理解**：内建完整视觉理解能力，V*（Python 工具）得分 95.3
- **开源**：全面开源，支持云端、数据中心、本地部署

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

## 部署与兼容

- **本地部署**：128GB Mac Studio 可跑 4-bit 量化版（32K 上下文），支持 mlx-vlm
- **推理框架**：vLLM、SGLang、llama.cpp
- **Agent 框架**：Claude Code、KiloCode、[[openclaw|OpenClaw]]、[[hermes-agent|Hermes Agent]]
- **协议**：MCP / Skills

## 定位与局限

Step 3.7 Flash 明确不是"全榜屠夫"——在 Terminal-Bench 2.1、Toolathlon 上落后于 GPT 5.5、Claude Opus 4.7 等前沿闭源旗舰。其策略是在"性价比前沿"上做到极致：多模态 + 极致效率 + Advisor 模式成本压缩。