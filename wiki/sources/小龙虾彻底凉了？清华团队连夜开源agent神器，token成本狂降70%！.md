---
type: source
title: "小龙虾彻底凉了？清华团队连夜开源Agent神器，Token成本狂降70%！"
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/TdfsW6iCBmy3esAQ78LkyQ"
venue: 新智元
created: 2026-05-28
updated: 2026-05-28
tags: [agent, 开源, 清华, token优化, 智能路由]
related: [pilotdeck, openclaw, 子agent级智能路由, 白盒化记忆, 独立工作舱]
sources: ["小龙虾彻底凉了？清华团队连夜开源agent神器，token成本狂降70%！.md"]
---
# 小龙虾彻底凉了？清华团队连夜开源Agent神器，Token成本狂降70%！

新智元2026年5月28日报道，清华大学THUNLP实验室联合面壁智能、OpenBMB与AI9stars开源发布了智能体操作系统 [[pilotdeck]]。

## 核心内容

文章以 [[openclaw]] 的降温为切入点，指出2026年初爆火的OpenClaw已完成"历史使命"——将Agent范式吹进大众视野——但因未能建立足够深的代码壁垒和生态而迅速降温。随后重点介绍了 [[pilotdeck]] 的三大工程突破：

1. **[[独立工作舱]]**：每个项目拥有独立文件系统、记忆和技能，实现完全隔离而非"文件夹+规则"隔离。
2. **[[白盒化记忆]]**：AI记忆可见、可改、可追溯，支持逐条编辑和一键回滚，配合Dream机制在空闲时段自动整理记忆。
3. **[[子agent级智能路由]]**：在子Agent层面做模型路由，保持KV-cache连续性，实测Token成本降低70%-75%。

## 关键数据

- 程序员人格测试应用：不开路由$10.97 → 开路由$1.42，省75%
- 社交媒体场景：不开路由$12.58 → 开路由$2.83，省约70%
- 复杂任务场景：主Sonnet 4.6 + 子MiniMax-M2.7花$3.15得分70.6，单体Sonnet 4.6花$18.36得分69.1

## 与现有Wiki的关联

- 与 [[场景白盒化推理]] 和 [[runtime-agent-os]] 理念一脉相承
- 与 [[办公技能框架]] 和 [[模型-技能分离架构]] 概念相通
- 是 [[1-n-agent调度]] 的具体产品化实现
- 直接回应 [[tokenmaxxing]] 和 [[ai-subscription-crisis]] 中的Token成本问题