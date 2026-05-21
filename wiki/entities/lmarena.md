---
type: entity
title: LMArena
tags: [ai-evaluation, platform, unicorn, startup, benchmark, evaluation, llm, 平台, 评测, 基准测试]
related: [ion-stoica, anastasios-angelopoulos, wei-lin-chiang, 众包评测, elo-rating-system, scale-ai, sky-computing-lab, gpt-image-2, duct-tape, 双盲测试]
created: 2026-01-07
updated: 2026-05-08
sources: ["网民票选ai王者，lmarena一夜变17亿美元独角兽！.md", "gpt-image-2研究科学家陈博远：我在openai修中文.md", "我在openai修中文.md"]
---

# LMArena

**LMArena**（前身为 Chatbot Arena，全称 Large Model Arena）是一个基于众包的 AI 模型评测平台，被誉为 AI 界的“创造101”。它通过让全球网民对匿名模型进行盲测投票，建立了行业公认的大模型排行榜。

## 核心产品与机制

### Arena 模式（双盲测试）
LMArena 的核心交互是 [[双盲测试]]（Blind Battle），也被称为 [[盲盒pk]]。该平台允许模型在匿名状态下进行并排比较，以消除用户偏见。具体流程如下：
1. 用户输入一个问题。
2. 系统随机匹配两个匿名的 AI 模型生成回答。
3. 用户根据回答质量投票给其中一方（或平局）。
4. 投票结束后，揭晓模型身份（如 [[gemini-3-pro]] vs [[grok-4-1]]）。

### 评分体系
平台采用 [[elo-rating-system]]（Elo 等级分系统）计算模型排名。每场对决后，胜者加分，败者扣分。该系统实时更新，并按不同任务（文本对话、代码生成、视觉理解等）生成分类榜单。

## 发展历程

### 起源与孵化
- **成立时间**：2023 年。
- **孵化地**：加州大学伯克利分校 [[sky-computing-lab]]。
- **初始名称**：Chatbot Arena。
- **创始人**：[[ion-stoica]]（伯克利教授、Databricks 联合创始人）、[[anastasios-angelopoulos]]（现任 CEO，当时为研究生）、[[wei-lin-chiang]]（现任 CTO）。

### 融资与估值
- **2025 年 5 月**：转型为营利性公司，完成 1 亿美元种子轮融资，估值 6 亿美元。
- **2026 年 1 月**：完成 1.5 亿美元 B 轮融资，估值达到 **17 亿美元**，正式成为独角兽企业。
- **主要投资方**：[[felicis]]、加州大学投资臂、[[andreessen-horowitz]] 等。

## 行业影响与案例

### 事实标准
LMArena 已成为 AI 行业评测的“事实标准”。顶级实验室（如 [[OpenAI]]、Google、xAI）通常会在公开发布新模型前，将其托管在 LMArena 上进行测试，以验证真实性能水平并获取用户反馈。

### GPT Image 2 测试案例
在 [[GPT Image 2]] 正式发布前，OpenAI 使用代号 **[[duct-tape]]** 在该平台进行了双盲测试。测试结果显示，GPT Image 2 在图像生成质量上大幅领先竞争对手，被描述为“断崖领先”。

### 数据规模
- **月活用户**：超过 500 万。
- **覆盖范围**：150 个国家。
- **月对话量**：超过 6000 万次。

## 争议与挑战

### 排行榜操纵
2025 年，有研究指出 [[meta]] 曾在 [[llama-4]] 发布前提交 36 个私有变体模型进行测试，被指控利用资源优势“刷分”或 [[排行榜操纵]]。这引发了关于众包公正性的讨论。

### 竞争对手
主要竞争对手 [[scale-ai]] 主张“专家付费评估”模式，认为众包投票存在噪音和偏见，不如律师、医生等专业人士的评估严谨。

## 未来方向

### 商业化转型
LMArena 正从单纯的排行榜平台转型为提供企业级评估服务的公司，包括为大厂提供定制化基准测试和深度分析报告。

### RLHF 应用
联合创始人 [[ion-stoica]] 表示，公司正考虑利用收集的海量用户投票数据进行 [[rlhf]]（人类反馈强化学习），直接参与 AI 模型的训练优化过程。