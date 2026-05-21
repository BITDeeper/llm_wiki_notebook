---
type: entity
title: MetaClaw
tags: ["agent", "框架", "开源", "强化学习", "自进化", "ai", "framework", "reinforcement-learning"]
related: [agent持续进化, 快慢双循环, omls, metaclaw-bench, openclaw, skillrl, tinker-yun-ping-tai, zai-xian-qiang-hua-xue-xi, ji-neng-zhu-ru, ji-neng-jin-hua, yao-hua-xiu]
created: 2026-03-30
updated: 2026-05-08
sources: ["人类一离座ai就进化！伯克利开源metaclaw，静态agent慌了.md", "真·养虾！3步让龙虾边聊边进化，不用gpu不用数据集就能强化学习.md"]
---

# MetaClaw

[[metaclaw]] 是由加州大学伯克利分校、北卡罗来纳大学教堂山分校、卡内基梅隆大学和加州大学圣克鲁兹分校联合开源的 AI Agent 持续进化框架。该项目由 [[姚骅修]] 领导开发，旨在解决 Agent 行业“[[上线即冻结]]”的痛点，使已部署的 Agent 能够在不中断服务的前提下，从失败经验中持续学习和自我迭代。

## 核心功能

MetaClaw 本质上是一个套在 [[OpenClaw]] 智能体之上的在线强化学习层。它能够拦截 [[OpenClaw]] 的交互过程，将用户与 AI 的日常对话直接转化为训练数据，实现“边聊边进化”。

其核心机制基于 [[快慢双循环]] 架构：

1.  **快循环（技能注入）**：
    基于 [[SkillRL]] 框架，AI 自动分析失败轨迹，提炼规则并精准匹配相关技能指令注入系统提示。这一过程无需等待训练结束即可实现即时止血，防止同类错误再次发生。
2.  **慢循环（权重优化）**：
    利用 [[omls]] 调度器监控用户空闲时间，进行 LoRA 强化学习。通过在线微调优化 AI 的决策策略，实现能力的长期固化。

## 技术架构

### 异步与云端解耦
MetaClaw 采用异步架构将服务、奖励建模和训练彻底解耦。AI 一边给用户实时响应，后台一边进行打分和优化，实现“工作学习”两不误。

通过 [[Tinker云平台]] 托管所有训练任务，支持代理架构与云端训练，无需昂贵的本地 GPU 集群。用户只需配置 API Key 即可运行。

### 底座模型
- 主要基于 **Kimi-2.5** 构建。
- 提供 **Qwen3-4B** 作为轻量级替代方案，以适应低配设备。

## 评测表现

在 [[metaclaw-bench]] 基准测试中，MetaClaw 使端到端任务完成率提升了 **8.25 倍**（从 2.0% 提升至 16.5%）。在 [[autoresearchclaw]] 复杂任务流中，其综合鲁棒性提升了 **18.3%**。

## 部署与使用

该框架具有极高的工程成熟度，仅需两条命令（`metaclaw setup` 和 `metaclaw start --daemon`）即可作为后台守护进程运行。

**快速上手步骤：**
1.  **安装依赖**：包括 `tinker` 和 `tinker-cookbook` SDK。
2.  **配置网关**：将 OpenClaw 网关指向 MetaClaw 代理。
3.  **启动训练**：设置 `TINKER_API_KEY` 并运行训练脚本。

## 与现有技术对比

与 [[openclaw]] 等静态 Agent 平台不同，MetaClaw 强调动态适应和长期进化，特别适合任务分布频繁变化的真实生产环境。