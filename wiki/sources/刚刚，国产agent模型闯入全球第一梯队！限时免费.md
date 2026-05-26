---
type: source
title: "Source: 刚刚，国产agent模型闯入全球第一梯队！限时免费.md"
created: 2026-05-26
updated: 2026-05-26
sources: ["刚刚，国产agent模型闯入全球第一梯队！限时免费.md"]
tags: []
related: []
---

# Source: 刚刚，国产agent模型闯入全球第一梯队！限时免费.md

## 关键实体

- **昆仑万维** — 中国互联网与AI公司
  - 角色：核心主体，SkyClaw系列模型的开发者
  - 维基中可能尚不存在

- **SkyClaw-v1.0** — 原生Agent大模型（旗舰版）
  - 角色：核心产品，深度优化OpenClaw任务，性能对标Claude Opus 4.6
  - 维基中尚不存在

- **SkyClaw-v1.0-lite** — 原生Agent大模型（轻量版）
  - 角色：核心产品，面向高频、成本敏感场景
  - 维基中尚不存在

- **天工Skywork** — 昆仑万维旗下模型平台（tiangong.cn）
  - 角色：SkyClaw的接入平台，支持多模型聚合
  - 维基中尚不存在

- **APIFree** — 昆仑万维旗下模型聚合API平台
  - 角色：提供免费API调用，兼容OpenAI接口格式
  - 维基中尚不存在

- **OpenClaw** — 主流Agent框架
  - 角色：SkyClaw深度适配的核心框架，已有维基页面
  - 维基中已存在

- **Claude Code / Hermes / Nanobot** — 主流Agent框架/工具
  - 角色：SkyClaw兼容适配的目标环境
  - Claude Code已有维基页面

- **Claude Opus 4.6** — Anthropic闭源顶流模型
  - 角色：作为SkyClaw-v1.0性能对标的标杆
  - 维基中尚不存在（但Anthropic已存在）

- **量子位（QbitAI）** — 中国AI科技媒体
  - 角色：本文来源
  - 维基中已存在

## 关键概念

- **原生Agent训练范式** — 从训练第一天起就以"完成任务"而非"生成语言"为目标，在mid-training阶段嵌入复杂Agent任务，使工具调用、多步拆解等能力成为模型原生能力而非后天补课。
  - 重要性：本文核心论点，区分SkyClaw与"通用模型+工具壳"路线的根本差异
  - 维基中尚不存在

- **Agent不可能三角** — 聪明（高性能）、便宜（低成本）、好用（即插即用兼容性）三者难以兼得。SkyClaw声称打破了这一三角。
  - 重要性：文章的叙事框架
  - 维基中尚不存在

- **Skill生态** — 将Agent完成的任务封装为可复用技能模块，实现工作流闭环。昆仑万维已在GitHub/Clawhub铺了PPT、文档、表格、设计、搜索、音乐6个官方Skill。
  - 重要性：展示昆仑万维从模型到平台到生态的完整布局
  - 与维基中[[办公技能框架]]、[[模型-技能分离架构]]高度相关

- **Agent工作流闭环** — 从开发到复用的完整链路：任务完成→提示存为Skill→设为定时任务→可持续运转的自动化流程。
  - 重要性：文章强调的终极方向
  - 与维基中[[断点续跑]]、[[vlm质检闭环]]相关但不同

## 主要论点与发现

- **核心主张**：昆仑万维SkyClaw-v1.0通过原生Agent训练范式，在性能上进入全球第一梯队（对标Claude Opus 4.6），同时价格仅为主流顶尖模型的一半甚至更低，打破了Agent模型的"不可能三角"。
- **证据**：
  - Demo展示：水管工马里奥游戏（可交互）、金融终端（多模块联动界面）——均为从零生成完整代码
  - 实测：电子桌宠（SVG绘制+番茄钟+健康提醒+IM直连）、AI行业周报自动生成系统（FastAPI后端+RSS/GitHub/HuggingFace多源抓取+SQLite存储+可交互前端）
  - 价格数据：输入0.5元/百万tokens，输出4元/百万tokens；lite版输入0.3元，输出2元
  - 技术路线：mid-training阶段嵌入Agent任务、百万级上下文、强化学习阶段在真实Agent环境训练、多框架预适配
- **证据强度**：中等。Demo和实测展示了令人印象深刻的能力，但缺乏系统性基准测试数据（文章提到"完整评测数据"链接但未展开）。价格信息具体可信。性能"对标Opus 4.6"的声明需要独立验证。

## 与现有维基的关联

- **[[openclaw]]**：SkyClaw深度适配OpenClaw框架，昆仑万维基于OpenClaw重构了SkyClaw产品线。本文强化了OpenClaw作为主流Agent框架的地位。
- **[[claude-code]]**、**[[hermes-agent]]**：SkyClaw兼容这些框架，体现了Agent框架多元化的趋势。
- **[[办公技能框架]]**、**[[模型-技能分离架构]]**：昆仑万维的Skill生态（PPT、文档、表格等6个官方Skill）与商汤SenseNova-Skills高度相似，是同一趋势的不同实践者。
- **[[tokenmaxxing]]**：文章开篇提到大公司把"烧多少token"当KPI，与Tokenmaxxing概念呼应。
- **[[ai-subscription-crisis]]**：SkyClaw的低价策略和限时免费，是对AI高成本问题的一种市场回应。
- **[[vibe-coding]]**：SkyClaw的实测案例（桌宠、周报系统）本质上是Vibe Coding的Agent化升级版。

## 矛盾与张力

- **与现有维基的潜在冲突**：维基中[[agent-pack]]记录了商汤提供的一键安装包（集成Hermes Agent、OpenClaw框架和SenseNova-Skills）。SkyClaw同样基于OpenClaw且覆盖办公Skill场景，两者构成直接竞争关系，但维基中尚未体现这一竞争。
- **内部张力**：
  - 文章声称"不靠堆参数"，但未披露SkyClaw的实际参数量，缺乏透明度
  - "性能对标Claude Opus 4.6"仅有Demo佐证，无基准测试数据
  - 金融终端Demo中的数据是模拟生成的，文章承认了这一点，但可能误导读者
  - 限时免费+后续开源的承诺缺乏具体时间表

## 建议

### 应创建的维基页面
- **[[昆仑万维]]** — 实体页面，涵盖公司AI转型历程、SkyClaw产品线、天工Skywork平台
- **[[skyclaw-v1]]** — 产品页面，记录旗舰版和lite版的技术路线、定价、能力边界
- **[[原生agent训练范式]]** — 概念页面，与"通用模型+工具壳"路线对比
- **[[apifree]]** — 平台页面，昆仑万维的模型聚合API平台

### 应更新的维基页面
- **[[openclaw]]**：补充昆仑万维基于OpenClaw构建SkyClaw产品线的信息，OpenClaw生态持续扩大
- **[[办公技能框架]]**：补充昆仑万维6个官方Skill（PPT、文档、表格、设计、搜索、音乐）作为又一案例
- **[[claw-eval]]**：如SkyClaw上榜，需更新排名信息

##
