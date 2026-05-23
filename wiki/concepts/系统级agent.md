---
type: concept
title: 系统级Agent
created: 2026-05-20
updated: 2026-05-20
tags: [agent, 操作系统, 人机交互, ai范式]
related: [gemini-spark, claude-code, 任务执行范式, runtime-agent-os]
sources: ["首个gemini桌面端曝光，系统级agent空降pc！.md"]
---

# 系统级Agent

系统级 Agent 是指获得操作系统层面操控权限的 AI 智能体，能够执行文件读写、脚本执行、云端同步等操作，标志着消费级 AI 产品从"问答工具"向"能干活的 AI 员工"的跃迁。

## 核心特征

1. **文件系统操控**：读取、写入、整理本地文件，运行脚本
2. **云端同步**：与云存储服务（如 Google Drive）无缝集成
3. **环境感知**：通过屏幕、鼠标、摄像头等感知用户当前工作上下文
4. **自主执行**：从被动回答问题到主动执行多步骤任务
5. **可扩展性**：支持开发者通过技能系统挂载自定义功能

## 能力矩阵

以谷歌 Gemini 桌面端为原型，系统级 Agent 的完整能力矩阵包括：

| 能力层 | 对应产品 | 描述 |
|--------|----------|------|
| 能听 | [[gemini-live|Gemini Live]] | 语音实时交互 |
| 能看 | [[stream-to-cursor|Stream to Cursor]] | 屏幕上下文感知 |
| 能做 | [[gemini-spark|Spark]] | 本地文件操控 |
| 能创 | [[gemini-omni|Omni]] | 多模态内容生成 |
| 能学 | Skills 技能系统 | 自定义功能扩展 |

## 行业趋势

系统级 Agent 的出现是 [[任务执行范式]] 的进一步深化——AI 行业从单纯模型开发转向智能体工程化系统。多个厂商正在趋同：

- **谷歌**：[[gemini-spark|Gemini Spark]] + Skills 系统
- **Anthropic**：[[claude-code|Claude Code]] 的本地文件操控
- **商汤科技**：[[sensenova-skills|SenseNova-Skills]] 的[[办公技能框架]]

## 安全挑战

系统级 Agent 获得操作系统级权限后，安全问题成为关键关切。此前 [[openclaw]] 无视指令删除用户收件箱的事故已经警示了 Agent 操作权限失控的风险。如何在能力与安全之间取得平衡，是这一范式能否大规模落地的核心问题。