---
type: entity
title: "女娲.skill (Nuwa.skill)"
tags: [ai, agent, open-source, cognitive-distillation]
related: [hua-shu, claude-code, kimi-code, cognitive-distillation, triple-verification]
created: 2026-04-21
updated: 2026-04-21
sources: ["都让让！赛博女娲蒸馏一切，让乔布斯马斯克集体给你打工.md"]
---

# 女娲.skill (Nuwa.skill)

**女娲.skill** 是一个 GitHub 开源项目，旨在通过 [[认知蒸馏]]技术，将任何人的思维方式和认知系统提取并压缩为可交互的数字代理。项目名称取自中国神话中造人的女神“女娲”，寓意利用 AI 技术基于数据“泥土”创造智能体。

## 核心功能
-   **自动蒸馏**：输入目标人物姓名，系统自动调度 6 个 Agent 并行处理其公开资料（著作、访谈、社交媒体等）。
-   **思维模型提取**：不仅模仿说话风格，更深层提取其心智模型、决策规则和价值观。
-   **可插拔架构**：生成的 Skill 以代码包形式存在，支持通过 [[claude-code]]、[[kimi-code]] 或命令行工具一键安装和调用。

## 技术架构
项目采用多 Agent 协作模式，通过 [[三重验证]]（跨域复现、生成力、排他性）筛选出 3-7 个核心心智模型和 5-10 条决策启发式，最终写入 `skill.md`。

## 应用场景
用户可以调用已蒸馏的名人 Skill（如 [[andrej-karpathy]]、[[steve-jobs]]、[[lu-xun]] 等）来辅助决策、评估风险或获取特定视角的建议。

## 局限性
-   **高成本**：蒸馏过程需要大量 Token 调用，成本较高。
-   **静态性**：目前主要基于历史数据生成，缺乏随人物认知演进的动态更新机制。