---
type: entity
title: Qwen3.7-Max
created: 2026-05-21
updated: 2026-05-21
tags: [阿里, 大模型, agent, 推理, 编程]
related: [长程自主执行, 任务-框架-验证器三元解耦训练, 环境扩展, deepseek-v4, claude-code, openclaw]
sources: ["阿里让qwen3.7-max模拟创业，一年“营收”1400万.md"]
origin_date: 2026-05-21
---
# Qwen3.7-Max

阿里推出的新一代Agent基座模型，主打[[长程自主执行]]能力。2026年5月21日发布，预览版在Arena全球大模型盲测总榜上拿下国产第一，正式版紧随其后上线。API即将通过阿里云百炼平台分发。

## 核心能力

### 长程自主执行
- 在平头哥真武M890芯片上自主运行35小时，完成432次kernel评估、1158次工具调用，相对SGLang Triton官方参考实现取得10倍加速
- 在RL训练监控中自主运行86小时，执行超万次调用，新增13条启发式规则，识别1618个作弊案例
- 可操控机器狗在物理环境中执行规划、记忆和决策，交互持续长达20分钟

### 模拟经营
- 在YC-Bench中模拟经营公司"一年"，营收2.08M美元（约1400万人民币）
- 是Qwen3.6-Plus（1.05M）的两倍、Qwen3.5-Plus（352K）的近六倍
- 累计完成237项任务，展现策略进化能力

### 推理能力
- GPQA Diamond、HLE、HMMT 2026 Feb全面超过Claude Opus-4.6
- HLE得分41.4 vs Opus-4.6的40.0（HLE为学术界公认最难的综合推理测试之一）
- IMOAnswerBench 90.0、Apex 44.5，均超过DeepSeek V4 Pro

### 编程能力
- Terminal Bench 2.0-Terminus得分69.7，超过DS-V4-Pro Max（67.9）和Opus-4.6（65.4）
- SWE系列Pro、Multilingual、Verified三个子榜均处第一梯队
- 前端生成支持Three.js 3D场景、Canvas动画、动态SVG

### 其他能力
- IFBench 79.1（指令遵循），超过DeepSeek V4 Pro的77.0
- MRCR-v2 128k得分90.4（长文本理解），超过Opus-4.6的84.0
- WMT24++覆盖55种语言、MAXIFE覆盖23种语言，均处领先位置

## 跨框架一致性

在 [[claude-code]]、[[openclaw]]、Qwen Code中运行同一任务，结果一致。证明模型学到的是任务解决能力而非特定框架使用习惯。

## 训练方法论

采用[[任务-框架-验证器三元解耦训练]]和[[环境扩展]]策略。训练环境全部来自真实场景，不使用合成替代品；评测使用训练中从未出现过的领域外环境。阿里观察到：任意基准子集上的性能增益高度一致，环境扩展带来的是模型底层任务理解和执行能力的真实提升，而非针对特定评测的过拟合。

## 代际演进

| 版本 | YC-Bench营收 |
|------|-------------|
| Qwen3.5-Plus | 352K美元 |
| Qwen3.6-Plus | 1.05M美元 |
| Qwen3.7-Max | 2.08M美元 |