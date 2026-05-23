---
type: source
title: "阿里让Qwen3.7-Max模拟创业，一年营收1400万"
created: 2026-05-21
updated: 2026-05-21
tags: [阿里, qwen, agent, 长程自主执行, 模型评测]
related: [qwen3-7-max, 长程自主执行, 任务-框架-验证器三元解耦训练, 环境扩展]
sources: ["阿里让qwen3.7-max模拟创业，一年“营收”1400万.md"]
authors: [克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/VdNboC_ez-e1ajDu3tNTKQ"
venue: 量子位
---
# 阿里让Qwen3.7-Max模拟创业，一年"营收"1400万

量子位报道，阿里发布新一代Agent基座模型 [[qwen3-7-max]]，主打[[长程自主执行]]能力，在Arena全球大模型盲测总榜上拿下国产第一，推理核心评测全面超过Claude Opus-4.6。

## 核心亮点

- **长程自主执行**：在平头哥真武M890芯片上自主运行35小时，完成432次kernel评估，取得10倍加速；在RL训练监控中自主运行86小时，执行超万次调用。
- **模拟创业**：在YC-Bench中模拟经营公司"一年"，营收2.08M美元，是前代Qwen3.6-Plus的两倍。
- **推理能力**：在GPQA Diamond、HLE、HMMT 2026 Feb上全面超过Claude Opus-4.6，HLE得分41.4 vs 40.0。
- **编程能力**：Terminal Bench 2.0-Terminus得分69.7，超过DS-V4-Pro Max（67.9）和Opus-4.6（65.4）。
- **跨框架一致性**：在Claude Code、OpenClaw、Qwen Code中表现一致，证明学到了任务解决能力而非框架使用习惯。

## 训练方法论

核心是[[任务-框架-验证器三元解耦训练]]和[[环境扩展]]策略，将训练实例拆解为三个独立组件并自由重组，迫使模型学习真正的泛化能力。训练环境全部来自真实场景，评测使用训练中从未出现过的领域外环境。

## 与现有Wiki的关联

- 与[[任务执行范式]]直接相关，是长程自主执行从理论走向工程落地的例证
- 与[[1-n-agent调度]]相关，86小时自主运行展示了Agent规模化执行能力
- 与[[批次不变性]]形成呼应，跨框架一致性在Agent层面体现了类似理念
- 与[[claude-code]]、[[openclaw]]相关，这两个工具被用作跨框架验证环境