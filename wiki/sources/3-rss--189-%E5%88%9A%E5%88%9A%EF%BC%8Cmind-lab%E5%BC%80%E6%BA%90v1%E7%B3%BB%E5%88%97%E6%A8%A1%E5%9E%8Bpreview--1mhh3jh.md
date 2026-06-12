---
type: source
title: "Mind Lab开源V1系列模型Preview，749B参数，专为Agent后训练"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/RwHYeilWaq9cUEuaymFqkg"
venue: 机器之心
tags: [大模型, agent, 后训练, lora, 开源, mind-lab]
related: [macaron-v1-preview, mind-lab, mixture-of-lora, agent-harness-后训练, mint-toolkit]
created: 2026-06-08
updated: 2026-06-08
sources: ["rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---
# Mind Lab开源V1系列模型Preview，749B参数，专为Agent后训练

## 摘要

机器之心2026年6月8日报道：前沿实验室 [[mind-lab|Mind Lab]] 首次开源大模型 [[macaron-v1-preview|Macaron-V1-Preview]]，拥有749B参数（744+5B），激活参数40B，基于GLM5.1，专为 [[agent-harness-后训练|Agent Harness]] 场景深度后训练。该模型仅使用不到300张GPU完成训练，算力成本不到同尺寸模型的1%。

## 核心内容

### 模型表现
- [[livingbench|LivingBench]] 和 [[vitabench|VitaBench]]（美团定义）生活场景评测 SOTA
- [[pinchbench|PinchBench]]（面向 [[openclaw|OpenClaw]]）得分92.5，开源模型最佳
- Google A2UI 协议评测开源 SOTA
- 数学、代码等通用任务比肩同期头部开源模型

### 关键技术
- [[mixture-of-lora|Mixture-of-LoRA]] 架构：允许多个LoRA适配器同时独立存在于同一基座模型上，运行时通过路由器敏捷切换
- [[dsa-稀疏注意力|DSA（稀疏注意力）]]：动态筛选重要token，避免平方级计算复杂度
- [[mtp-多词元推理|MTP（多词元推理）]]：提高训练和推理效率
- 四层缓存机制：在 [[deepseek-v4|DeepSeek V4]] 三层缓存基础上扩展对象存储系统（OSS），支撑百万级LoRA适配器管理

### 基础设施
- [[mint-toolkit|MinT（MindLab Toolkit）]]：自研万亿参数级LoRA管理基础设施，支持训练、评估、部署和回滚百万级LoRA适配器
- verl-mint：将基础设施成果贡献给字节 verl-project 强化学习框架

### 理论发现
- [[peft规模定律|PEFT规模定律]]：多个模型协作决策的准确性与模型数量之间呈对数增长关系，43页论文《On the Scaling of PEFT》详细阐述

### 团队背景
- 中国第一家 Neo Lab，隶属于心洲科技（Mindverse），由粤港澳大湾区国家技术创新中心国际总部孵化
- 实验室负责人 [[马骁腾]]：清华自动化系博士/博士后
- 核心研究团队约30人，累计发表200篇顶会论文，总引用超5万次
- 基础设施负责人来自 DeepSeek，算法负责人来自字节 Seed

## 重要引述

> "我们不为刷榜做研究，也不为创新而做研究。我们是在为了真实的场景、真实的用户、真实的价值而做研究，并在这个过程中大胆地创新。" —— [[马骁腾]]

## 评价与局限
- 评测数据具有说服力，但 LivingBench 为自研基准，独立验证待观察
- "不到1%成本"声明缺乏详细成本拆解
- 视频演示直观但属于选择性展示
- PEFT规模定律有论文支撑，但需同行评审验证