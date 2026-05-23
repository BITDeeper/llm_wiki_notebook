---
type: entity
title: SenseNova 6.7 Flash-Lite
created: 2026-05-21
updated: 2026-05-21
tags: [大模型, 多模态, 商汤科技, agent, 轻量模型]
related: [商汤科技, sensenova-skills, sensenova-u1, 原生理解生成统一]
sources: ["只需一套神奇的skills，彻底跑通四个办公场景！.md"]
origin_date: 2026-05-21
---
# SenseNova 6.7 Flash-Lite

商汤科技推出的专为Agent场景优化的轻量多模态模型，属于SenseNova系列。在第三方榜单Claw-Eval中冲入前十，紧随DeepSeek V4 Pro和GPT-5.4之后，压过Gemini 3.1 Pro和DeepSeek V4 Flash。

## 架构特点

采用[[原生理解生成统一|原生多模态架构]]，视觉信号和文本在统一的感知链路中处理，看懂网页布局、文档结构、图表关系后一步到位做决策，中间不经过文字转译。

### 架构优势
1. **Token消耗直降60%**：在信息搜索等场景中，任务越长省得越多，对需要跑完整工作流的Agent来说是实打实的成本优势
2. **Agent基准测试领先**：同量级多项基准排名第一

## 基准测试成绩

| 基准 | 成绩 | 排名 |
|------|------|------|
| PinchBench | 92分 | 同量级第一 |
| Deep Planning | 66分 | 同量级第一 |
| NovaPPTBench | 92.4分 | 第一 |

此外在 τ²-bench、GPQA-diamond、AA-LCR、MathVision、OCRBenchV2 等多个维度领先同级别国内外模型。

## 定位

作为 [[sensenova-skills]] 的推荐模型搭档，API兼容OpenAI格式，主流开源Agent框架可平滑接入。商汤通过SenseNova平台发放Token Plan，活动首月可享每5小时1500次免费调用配额。

## 项目地址

- 模型仓库：https://github.com/OpenSenseNova/SenseNova6.7
- API平台：https://www.sensenova.cn/

## 注意事项

- "同量级第一"的限定条件需注意，对比对象包括更大参数量的模型
- 具体参数量级（6.7的含义）需进一步确认