---
type: source
title: "从OpenAI AI Phone到Gemini on Android：AI手机时代需要怎样的Agent Harness？"
created: 2026-05-26
updated: 2026-05-26
tags: [手机agent, 混合动作空间, agent-harness, benchmark, 腾讯混元]
related: [phoneharness, 混合动作空间, 可验证副作用, agent-centric设备范式, 机器之心]
sources: ["从openai-ai-phone到gemini-on-android：ai手机时代需要怎样的agent-harness？.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/I2ztL6sFiHGxAiCfh_FTqg"
venue: 机器之心
---
# 从OpenAI AI Phone到Gemini on Android：AI手机时代需要怎样的Agent Harness？

本文由机器之心于2026年5月26日发布，报道了由[[腾讯混元]]牵头、联合香港中文大学、香港中文大学（深圳）和清华大学完成的最新研究 [[phoneharness]]。

## 核心内容

文章围绕AI手机时代手机Agent的执行基础设施问题展开，提出三个核心论点：

1. **手机Agent的核心不只是"更会点屏幕"**，而是能根据任务选择CLI、GUI、MCP工具等合适的行动面——即[[混合动作空间]]的理念。
2. **真实手机workflow需要[[可验证副作用]]**：文件是否生成、设置是否改变、邮件/日历对象是否真的创建，不能只靠模型口头回答。
3. **AI手机时代的关键瓶颈从模型能力转向执行基础设施和验证机制**。

## 关键产物

- **PhoneHarness**：混合动作编排框架，支持CLI、GUI、MCP-style工具三类行动面的自由切换
- **PhoneHarness Bench**：首个面向混合动作空间和可验证副作用的手机Agent评测基准

## 实验发现

- 收益主要来自存在确定性路径、工具辅助路径或可验证副作用的任务
- 纯GUI-heavy任务仍受视觉grounding、权限弹窗、登录状态等问题困扰
- 文章坦诚承认边界，增强了可信度

## 行业判断

文章提出手机正在从App-centric device走向[[agent-centric设备范式]]，与[[操作系统agent]]理念形成呼应。

## 相关资源

- 论文：https://phoneharness.github.io/assets/paper.pdf
- 项目主页：https://phoneharness.github.io/
- GitHub：https://github.com/PhoneHarness/PhoneHarness
- HuggingFace数据集：https://huggingface.co/datasets/PhoneHarness/phoneharness-bench