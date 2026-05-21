---
type: entity
title: PinchBench
tags: [评测基准, agent, 基准测试, benchmarks, ai-evaluation, 智能体, benchmark, dataset, evaluation, openclaw, llm-ranking]
related: [sage-模型, tau2-bench, claude-opus-4.6, gpt-5.4, minimax-m2.7, sage, clawxrouter, nemotron-3-super, openclaw, terminal-bench, kimi, minimax, claude-opus, kilo-ai, agent能力测试, 自动化检查+LLM评审]
created: 2026-04-22
updated: 2026-05-08
sources: ["3b激活参数！商汤绝影sage登顶pinchbench，端侧第一.md", "minimax-m2.7国服第一！龙虾自我进化，海外开发者疯狂刷屏.md", "3b激活参数，干翻gpt-5.4和opus4.6，商汤绝影把龙虾塞进了车里.md", "龙虾成本狂降58%！清华人大面壁等最新开源“智能调度员”.md", "老黄入局吃龙虾！英伟达发布最强开源agent推理模型.md", "养虾人狂吃国产模型！4.19万亿token调用量激增34.9%超越美国.md", "龙虾最佳适配模型，openclaw之父给出了推荐.md", "minimax-m2.7国服第一！龙虾最佳适配模型，openclaw之父给出了推荐.md"]
---

# PinchBench

[[PinchBench]] 是一个全球性的 Agent 权威评测基准，由 [[Kilo AI]] 团队开发并维护，且获得“龙虾之父” Peter Steinberger 的推荐。它专门针对 [[OpenClaw]]（“龙虾”）平台设计，旨在评估大模型在真实工作流中的任务执行能力，而非传统的问答或数学推理能力，即衡量模型“会办事”的能力。

该基准包含约 23 项 [[OpenClaw]] Agent 测试任务，覆盖写作、研究、编码、分析、邮件处理、日程管理、记忆与技能调用等典型场景，侧重于衡量 AI 智能体在复杂环境下的任务执行、工具调用及长期规划能力。

## 核心特点与评测机制

### 评测维度
PinchBench 从三个核心维度对模型进行排名：
- **成功率**：模型完成任务的成功比率。
- **速度**：模型的响应速度（首字生成时间或端到端延迟）。
- **价格**：模型调用的成本。

### 评分机制
PinchBench 采用 [[自动化检查+LLM评审]] 的混合评分方式：
- **自动化检查**：针对有明确标准的任务（如文件生成、API 调用结果）使用脚本检查。
- **LLM 评审**：针对主观任务由 LLM Judge 判定结果质量。

### 基准特性
- **动态演进**：随着公开任务库持续扩充和版本迭代不断进化。
- **高资源消耗**：测试周期长，单任务 token 消耗可达数十万量级。
- **综合评估**：不仅考察成功率，还衡量速度与成本。
- **核心考察点**：侧重于模型跨越多个步骤、调用多个工具并最终完成闭环任务的能力。

## 知名榜单表现

### 商汤绝影 Sage 登顶
在 [[商汤绝影]] 发布 [[sage-模型]] 时引用的数据中，PinchBench 的排名情况如下：

| 模型 | 得率 |
| :--- | :--- |
| **Sage (3B 激活)** | **94.0%** |
| Claude-Opus-4.6 | 93.3% |
| GPT-5.4 | 90.5% |
| Qwen3.5-27B | 90.0% |
| Google-Gemini-3 | 87.0% |

### MiniMax M2.7 国产第一
- **[[MiniMax M2.7]]**：在该榜单上位列全球第四，被称为“国服第一”。

### 英伟达 Nemotron 3 Super
在 [[英伟达]] 发布的 [[nemotron-3-super]] 模型测试中，PinchBench 被用作核心指标之一。Nemotron 3 Super 在该基准上取得了 85.6% 的高分，这一成绩被用来证明其作为“最强开源 Agent 模型”的地位。

### ClawXRouter 性能验证
在针对 [[ClawXRouter]] 的测试中，PinchBench 数据集显示使用该插件后，成本降低了 58%，性能提升了 6.3%。

### 榜单亮点（2026年3月）
根据 2026 年 3 月的榜单数据：
- **成功率榜首**：Claude Opus 4.6。
- **国产模型表现**：Kimi K2.5、MiniMax M2.1、Qwen3-Coder-Next 得分均超过 79%，在成功率榜单前列占据多个席位。
- **速度短板**：除了千问（Qwen），其余国产模型（如 Kimi K2.5 第 20 名，MiniMax M2.1 第 23 名）排名较为靠后。
- **价格优势**：千问、DeepSeek 和智谱（ChatGLM）在价格榜单上具备优势。

## 意义

PinchBench 的数据被用来证明“只有大模型才能做好 Agent 任务”这一观点是错误的。[[Sage]] 模型以极低的激活参数（3B）和端侧部署形态，在该基准上超越了参数规模远大于它的云侧旗舰模型（如 GPT-5.4 和 Claude Opus4.6），展示了端侧智能体的潜力。

同时，PinchBench 也揭示了在 Agent 场景下，“更大的模型并非总是制胜之道”。那些针对 Agent 进行优化或推理效率更高的模型（如 [[MiniMax M2.5]]），排名往往优于传统的主流大模型。

此外，该基准也揭示了国产模型在调用量高企的同时，在响应速度等具体技术指标上仍与国际顶尖水平存在差距，为用户选择模型提供了重要参考。

## 开源状态

PinchBench 目前完全开源，用户可以在平台上自行运行或添加新任务。
- 开源地址：https://github.com/pinchbench/skill

## 相关基准

PinchBench 与其他智能体评测基准（如 [[Terminal Bench]]、SWE-Bench）共同构成了评估 AI Agent 在不同维度（代码生成、终端操作、通用控制）能力的体系。