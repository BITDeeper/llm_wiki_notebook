---
type: source
title: "Agent群体智能来了！魔搭开源Agent自进化群体智能框架：群体记忆自动蒸馏与进化，8万+群体技能即取即用，智能体画像一键复用"
tags: [agent, 群体智能, 开源, modelscope, ultron]
related: [ultron, modelscope, 群体智能, 群体记忆, 技能结晶, 智能体蓝图]
created: 2026-04-27
updated: 2026-04-27
authors: ["Ultron 团队"]
year: 2026
url: "https://mp.weixin.qq.com/s/cCzTNq0LpWgv-fM_EKFMQQ"
venue: "量子位"
sources: ["agent群体智能来了！魔搭开源agent自进化群体智能框架：群体记忆自动蒸馏与进化，8万+群体技能即取即用，智能体画像一键复用.md"]
---

# 源文件摘要

本文介绍了由 ModelScope 团队开源的 [[ultron]] 框架，这是一个面向通用智能体的自进化群体智能系统。文章指出当前 Agent 落地面临“状态易失”、“重复试错”和“迁移困难”三大痛点，Ultron 旨在通过构建群体协作基础设施来解决这些问题。

核心内容包括：
1.  **Memory Hub**：将真实任务轨迹提炼为结构化记忆（HOT/WARM/COLD 分层），支持语义检索，解决经验流失问题。
2.  **Skill Hub**：高频记忆自动结晶为可复用技能，并支持随新证据再进化，同时打通了 ModelScope 社区 8 万+ 外部技能。
3.  **Harness Hub**：将角色设定、记忆背景、技能组合打包成标准化蓝图，实现跨框架（如 [[openclaw]]、[[nanobot]]、[[hermes-agent]]）的一键分发。

文章通过 `sessions_spawn` 排错案例展示了接入 Ultron 前后的效果差异，并介绍了 [[financebot]] 作为专家型智能体画像分发的示例。