---
type: source
title: "Codex自我蒸馏玩法火了！OpenAI员工亲授：复制粘贴就能让AI消灭重复劳动"
created: 2026-05-25
updated: 2026-05-25
tags: [codex, 自我蒸馏, openai, 提示词工程, 工作流自动化]
related: [codex, codex自我蒸馏, vaibhav-srivastav, codex-chronicle, codex-memory, codex-subagent]
sources: ["codex自我蒸馏玩法火了！openai员工亲授：复制粘贴就能让ai消灭重复劳动.md"]
authors: [听雨]
year: 2026
url: "https://mp.weixin.qq.com/s/88rTMq9zb5xRkbEEn78I-A"
venue: 量子位
---
# Codex自我蒸馏玩法火了！OpenAI员工亲授：复制粘贴就能让AI消灭重复劳动

量子位2026年5月25日发布的报道，详细介绍OpenAI Codex团队成员 [[vaibhav-srivastav|Vaibhav Srivastav (VB)]] 发布的"自我蒸馏"提示词方法论。

## 核心内容

报道记录了VB发布的两版提示词：
- **v1（9行）**：仅基于最近会话，聚焦编码任务（CI失败、PR审查、changelog等），输出建议。
- **v2（35行）**：扩展数据源至 [[codex-memory|Memory]] 和 [[codex-chronicle|Chronicle]]，覆盖写作、规划、沟通、运营等全场景，高置信度条目直接创建。

## 四层打包分类

VB定义了自我蒸馏的标准化输出格式：Skill（固定流程）、Subagent（专门角色）、Automation（定时触发）、Skip（边界模糊不打包）。

## 关键背景

- [[greg-brockman|Greg Brockman]] 亲自转发点赞，同时提醒 Codex 是开源的。
- 评论区反馈：Token消耗担忧、过早打包导致维护成本反增等实际问题。
- VB本人宣称"超过一个月没打开过IDE"，是 [[vibe-coding|Vibe Coding]] 的极端实践案例。

## 涉及的Codex新功能

- [[codex-subagent|Subagent]]（2026年3月上线）
- [[codex-memory|Memory]]（2026年4月16日上线）
- [[codex-chronicle|Chronicle]]（2026年4月20日上线）
- [[codex-goal命令|/goal 命令]]（Codex 0.128.0版本起可用）