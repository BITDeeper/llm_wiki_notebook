---
type: source
title: "谷歌搜不到的80%互联网，AnySearch全打通了！开发者连夜接入"
created: 2026-05-18
updated: 2026-05-18
tags: [ai搜索, agent, 搜索基础设施, anysearch, 产品发布]
related: [anysearch, 搜索第四次范式转移, 任务执行范式]
sources: ["谷歌搜不到的80%互联网，anysearch全打通了！开发者连夜接入.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/-pWdGGf4U4D5wCDnw9lawg"
venue: 新智元微信公众号
---
# 谷歌搜不到的80%互联网，AnySearch全打通了！开发者连夜接入

## 摘要

本文报道了2026年5月11日上线的AI搜索产品 [[anysearch]]，定位为"AI时代的搜索基础设施"，专为AI Agent打造统一高质量搜索入口。文章通过四个实战场景（竞品调研、代码搜索、投资尽调、威胁情报）展示了产品的聚合广度、专业深度、信息甄别和对未知的诚实四层能力。

## 核心内容

### 产品定位
AnySearch 自称为"应用型AI实验室"，构建AI时代的搜索基础设施。核心主张是传统API集成模式已死，Agent时代需要统一的搜索基础设施层。

### 技术架构
- **智能意图路由（Intent Classifier）**：自动识别查询意图，精准路由到2-3个最相关数据源
- **RRF（Reciprocal Rank Fusion）**：多数据源结果融合算法，交叉验证信息排名自动提升
- **结构化Markdown输出**：返回清洗后的500-2000 Token结果，声称Token消耗降低60-70%
- **架构级隐私保护**：不记录查询、不用于训练、不收集遥测、即时丢弃查询内容

### 接入方式
- REST API（通用）
- MCP Server（Claude Desktop、Cursor、Windsurf、OpenCode）
- Skill（直接作为Agent技能调用）

### 社区反响
上线一周登陆 GitHub、ClawHub、skills.sh、SkillHub、Glama 等多个开发者生态平台，登上 skills.sh 热榜TOP1。

## 证据强度评估
- **中等**：以四个详细场景演示作为实证，但缺乏独立第三方基准测试数据
- 部分内容带有明显的营销推广色彩
- "80%互联网"覆盖范围声称未给出可验证数据
- 场景演示存在cherry-picking风险

## 与已有维基的关联
文中场景涉及 [[openai]]、[[anthropic]]、[[claude-code]]、[[sam-altman]]、[[sarah-friar]]、[[openclaw]] 等已有实体，引用数据与已有维基内容高度一致，起到印证作用。