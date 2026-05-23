---
type: entity
title: Gemini Spark
created: 2026-05-20
updated: 2026-05-22
tags: ["google", "gemini", "agent", "桌面端", "系统级操控", "谷歌", "个人助理", "云端", "办公", "ai-agent", "隐私"]
related: ["gemini", "系统级agent", "claude-code", "任务执行范式", "gemini-3-5-flash", "antigravity-2", "google-io-2026", "办公技能框架", "ai-subscription-crisis", "gemini-3.5-pro", "全时agent", "anthropic", "openai"]
sources: ["首个gemini桌面端曝光，系统级agent空降pc！.md", "gemini-3.5来了！今夜，谷歌亲手淘汰谷歌.md", "gemini-3.5-pro全网首曝，编程追平gpt-5.5！谷歌终于狠起来了.md"]
origin_date: 2026-05-15
---

# Gemini Spark

Gemini Spark 是谷歌推出的系统级个人 AI Agent 产品，前身为内部代号"Remy"的 Agent 升级版。由谷歌 CEO Sundar Pichai 定位为"你的个人 AI Agent"——"你的日常 AI 智能体，全天候待命"。产品于 Google I/O 2026 前夕被爆料人 TestingCatalog 曝光，随后在 [[google-io-2026]] 大会上正式发布。此前只面向 AI Ultra 订阅用户。

## 核心特性

### 7×24 小时云端运行
- 运行在云端专用虚拟机上，即使合上笔记本电脑也不停歇
- 无需用户在线即可持续执行任务
- 由 [[gemini-3-5-flash|Gemini 3.5]] + [[antigravity-2|Antigravity 框架]]驱动
- 帮助用户处理收件箱、执行在线任务、管理多步骤工作流

### 本地文件操控
- 可连接本地文件夹，读取代码文件、运行脚本、整理文件
- 直接与 Google Drive 同步工作流
- 拥有独立工作区，与普通 Chat 模式分开的独立 Agent 工作区

### 深度整合谷歌办公全家桶
- 自动跨 Gmail、Docs、Sheets、Slides、Chat 抓取和操作信息
- 全程无需打开任何 App

### 自定义技能（Skills）
- 支持用户自定义 Skills，让 Spark 学习个人口吻、偏好和工作方式
- 开发者可将自定义脚本或功能文件夹挂载到 Agent 工作流中
- 与 [[办公技能框架]] 和 [[模型-技能分离架构]] 的理念相似，将技能层与模型层解耦

### 语音多任务并行
- 支持语音输入，自动将连续语音拆分为多个独立任务线程
- 多个任务在后台并行执行

## 数据连接

Spark 连接的 Google 全家桶数据包括：
- 已连接的 Google 应用
- 技能模块
- 聊天记录
- 定时任务
- 用户登录的网站
- Personal Intelligence
- 位置信息

系统会保存远程浏览器数据，包括登录凭证和远程代码执行数据，以保持会话连续性。

## 隐私争议

- Gemini 会将用户的姓名、联系方式、文件、偏好等信息**分享给第三方**来完成任务
- 虽然设计上会在敏感操作前征求许可，但**可能在未经询问的情况下分享信息或完成购买**
- 这意味着它可能不问用户就下单，也可能不问用户就把信息分享出去

## 演示场景

### 工作场景
输入指令"帮我起草一封给团队的邮件，汇总过去一周关于 Gemini Live 发布的所有信息"：
- Spark 自动跨 Gmail、Docs、聊天记录抓取信息
- 调用用户自编的"ghostwriter"技能，自动匹配个人语气
- 人类只需审核和发送

### 生活场景：规划街区派对
- 创建 Google Sheets RSVP 追踪表，连接 Gmail 自动更新
- 给未报名邻居自动起草催促邮件，生成草稿等确认后发送
- 生成 Google Slides 宣传 deck

### 语音三任务并行
通过语音同时下达三个任务：
1. 找到所有跟 Sundar 的会议标为亮粉色
2. 给新邻居 John 写邀请函加入 block party 名单
3. 创建文档列出学年结束前要为孩子做的事，按截止日期排序

## 竞争定位

Spark 被视为对 [[claude-code]] 和 Codex 桌面版的直接回应。它标志着消费级 AI 产品从"你问我答"的聊天机器人向"能在电脑上干活的 AI 员工"的跃迁。与 Claude Code 专注于编程场景不同，Spark 的定位更偏向通用型操作系统级智能体。

正面对标：
- Anthropic 即将发布的托管 Agent **Conway**
- OpenAI 已上线的 24/7 Agent 平台 **Codex**

## 技术特征

- 属于 [[系统级agent]] 范畴——获得操作系统层面的文件读写、脚本执行、云端同步等操控权限
- 与 [[任务执行范式]] 的行业趋势一致——从模型开发转向智能体工程化系统，从被动响应到主动执行
- 7×24h 云端运行模式代表了任务执行范式的进一步演进

## 战略意义

从 Remy 到 Spark，Gemini 的 Agent 从"一个功能"升格为"24/7 的数字生活管家"。Spark 一旦铺开，用户的邮件、日程、购物、浏览数据将反哺 Gemini 的下一代训练——这是 OpenAI 和 Anthropic 都很难复制的打法。

## 定价与可用性

- AI Ultra 订阅每月 100 美元可用 Spark Beta
- 最高级 Ultra 计划从 250 美元降至 200 美元
- 下周率先对美国 AI Ultra 用户开放 Beta 版试用
- 桌面端目前仅支持 Mac，Windows 版本需等待

## 与现有维基的关联

- 定价调整是 [[ai-subscription-crisis]] 的最新数据点，谷歌通过降价和算力计费应对 Agent 时代的高成本
- Skills 机制与商汤的 [[办公技能框架]] 理念相似，可做跨公司对比