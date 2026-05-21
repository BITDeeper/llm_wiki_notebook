---
type: entity
title: Muse Spark
tags: [meta, model, multimodal, agent, llm, reasoning]
related: [meta-超级智能实验室, alexandr-wang, 沉思模式, llama-4-maverick, gpt-5.4, gemini-3.1-pro, meta, zuckerberg, llama-4, jason-wei, song-yang, yu-jiahui, hyung-won-chung, 原生多模态, 思维压缩]
created: 2026-04-09
updated: 2026-05-08
sources: ["刚刚，小扎砸143亿的「牛油果」来了！硬刚gpt-5.4，硅谷最贵华人首作.md", "meta正炼化老板：24小时不间断工作，扎克伯格真成机器人了.md", "meta亿元天团首个大模型交卷！余家辉宋飏jason-wei耗时九个月，一雪llama前耻.md"]
---

# Muse Spark

[[Muse Spark]] 是 [[Meta]] 旗下 [[Meta 超级智能实验室]]（MSL）发布的首个大语言模型，内部代号为「牛油果」。该项目由 [[余家辉]]、[[宋飏]]、[[Jason Wei]] 和 [[Hyung Won Chung]] 等人组成的团队耗时 9 个月从零开发，旨在弥补 [[Llama 4]] 的不足并实现 [[个人超级智能]]。

## 项目背景与现状
尽管 Muse Spark 在多项基准测试中表现优异，但根据 2026 年 4 月的报道，该模型的整体表现“不及预期”。这一挫折为 Meta 当时正在推进的“扎克伯格 Agent”等项目蒙上了阴影，也凸显了在大模型领域激烈竞争背景下，即使是科技巨头也面临研发风险。

## 性能基准
在 Artificial Analysis 的测试中，Muse Spark 得分为 52，远超 Meta 上一代模型 [[Llama 4 Maverick]]（18分），进入行业第一梯队。

- **多模态理解**：在 CharXiv 上得分 86.4，超越 [[GPT-5.4]]（82.8）和 [[Gemini 3.1 Pro]]（80.2）。
- **医疗健康**：在 HealthBench Hard 上得分 42.8，显著领先竞争对手。
- **代码生成**：LiveCodeBench Pro 得分 80.0，虽优于前代但仍落后于 GPT-5.4（87.5）和 Gemini（82.9）。
- **抽象推理**：ARC AGI 得分 42.5，与顶尖模型仍有较大差距。

## 核心技术

### 原生多模态
Muse Spark 具备原生多模态感知能力，从设计之初就整合了视觉与语言模态。其在多模态感知、图表理解和屏幕交互任务上表现优异，得分与 Gemini 3.1 Pro 和 GPT-5.4 持平。

### 沉思模式
Muse Spark 引入了 [[沉思模式]]，利用 [[多 Agent 并行思考]] 机制来提升复杂任务的准确率。与传统单 Agent 延长思考时间不同，该模式同时调度多个 Agent 独立思考并汇总结果，从而在不增加延迟的情况下提升性能（准确率从 54% 提升至 58%）。该功能旨在对标 Gemini Deep Think 和 GPT Pro。

### 思维压缩
为了解决推理成本高昂的问题，Muse Spark 在强化学习训练中采用了「思考时间惩罚」，迫使模型学会 [[思维压缩]]。这使得模型能够用更少的 Token 解出同样的问题，其 Token 消耗量仅为 Opus 4.6 的 1/3。

### 算力效率
得益于 [[Meta 超级智能实验室]] 重建的基础设施（包括新架构和数据管道），Muse Spark 的预训练算力需求极低。达到同等性能水平所需的计算量仅为 [[Llama 4]] 的 1/10（或 1/10.3）。其强化学习曲线呈现平滑的 [[对数线性扩展]]，表明模型具有良好的泛化能力且未破坏推理的多样性。

## 产品定位与功能
Meta 将 Muse Spark 定位为「个人超级智能」，强调其作为全能 AI 助手的角色。
- **视觉交互**：支持拍照识别物体（如数独、咖啡机）并转化为互动网页或教程。
- **健康建议**：能够识别食物并提供基于用户健康状况（如胆固醇偏高）的饮食建议。
- **购物模式**：整合 Instagram 和 Facebook 的社交数据，提供个性化购物推荐。

## 局限性
尽管整体表现强劲，Muse Spark 在以下领域仍存在差距：
- **编程能力**：用户实测中存在生成代码无法运行、逻辑错误等问题。
- **Agent 任务**：在长时间自主运行和复杂工具调用任务上表现不如顶尖竞争对手。

## 商业模式
Muse Spark 采取免费但闭源的策略。目前已在 meta.ai 和 Meta AI App 上线，未来将接入 Facebook、Instagram 和 WhatsApp。目前仅向部分合作伙伴开放 API，Meta 表示计划在未来开源后续版本。