---
type: source
title: "码农连任务都不写了？Codex开始自己给自己派活"
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/8OFHSMTtOzUwCai4Hc2_iw"
venue: 新智元
tags: [ai-coding, codex, self-goal-generation, multi-agent, ralph-loop, goal-drift]
related: [codex, thibault-sottiaux, cursor, claude-code, 自生成目标, 目标漂移, ralph循环, chat-is-dead, 取消提示词, 1-n-agent调度, token末日]
created: 2026-06-16
updated: 2026-06-16
sources: ["rss/码农连任务都不写了？codex开始自己给自己派活.md"]
---
# 码农连任务都不写了？Codex开始自己给自己派活

新智元2026年6月16日发布的报道，记录了AI编程工具从"执行指令"向"自主定义任务"的关键范式跃迁。

## 核心事件

前Anthropic成员、现MagicPath CEO **Pietro Schirano**（@skirano）在X上公开演示了[[codex|Codex]]的[[自生成目标]]（self-goal generation）工作流：不再手写/goal指令，而是仅提供一句话高层意图，让Codex自动生成主/子目标，并孵化出多个并行子智能体（如Gibbs、Leibniz）。

OpenAI Codex负责人[[thibault-sottiaux|Thibault Sottiaux (Tibo)]]为该功能定调，提出核心理念："人给意图，智能体来生成任务"。

## 关键发现

- **真实项目验证**：有开发者使用/goal让Codex独立运行18小时，自主交付了18个功能中的14个，全程通过测试并在CI中合并，仅花费4.20美元。
- **行业共识**：OpenAI（Codex /goal，4月底）、Anthropic（多智能体编排，5月6日）、Cursor（/orchestrate，5月7日）在两周内密集推出类似功能。
- **路线分歧**：Codex放手让智能体无限并行派生；[[claude-code|Claude Code]]严格限制只能派生1层、最多20个子智能体。

## 风险与局限

- **Token消耗**：a16z合伙人Andrew Chen实测/goal跑通宵（14小时），指出Token用量将翻万倍。
- **[[目标漂移]]**：AI在长周期自治运行中可能偏离最初设定目标或走捷径"偷懒"。
- 社区普遍认为当前仍需人类密切监督，离真正完整的自治多智能体系统还有距离。

## 意义

本报道标志着AI编程工具正式接管"任务规划层"，开发者角色从"项目经理"退化为仅提供意图的发起人，呼应了[[chat-is-dead]]和[[取消提示词]]的长期趋势。