---
type: entity
title: Hermes Desktop
created: 2026-06-04
updated: 2026-06-04
tags: [开源, 桌面应用, 智能体, GUI]
related: [hermes-agent, nous-research, 桌面智能体, openclaw]
sources: ["老黄刚夸完openclaw，hermes反手把智能体搬进电脑桌面.md"]
origin_date: 2026-06-01
---
# Hermes Desktop

[[nous-research]]推出的[[hermes-agent]]原生桌面应用，将命令行智能体封装为带图形界面的桌面客户端。

## 平台覆盖

- macOS 12+
- Windows 10/11
- Linux（一行命令安装）

## 核心特性

- **流式工具调用可视化**：用户可实时观看智能体一步步调用工具执行任务
- **按项目管理会话**：不同任务、上下文和工作流彼此分离
- **并排预览**：右侧渲染网页、文件和工具结果
- **内置文件浏览器**：不离开App即可翻看工作目录
- **语音对话**：支持语音输入和语音输出
- **可视化设置面板**：模型、工具、凭据配置图形化
- **统一记忆**：桌面端与CLI、Telegram等入口共享同一份对话历史和技能

## 安装体验

Windows原生版尤其省心，安装器自动配齐Python、Node.js、ripgrep、ffmpeg和便携式Git，全程不需要管理员权限，也不碰系统已有环境。

## 架构本质

Hermes Desktop并非独立产品，而是Hermes Agent的桌面外壳。它复用CLI和网关的同一套智能体、技能和记忆。能力没变，门槛没了。

## 重要澄清

"本地运行"不等于"本地模型"。Hermes是智能体框架而非模型，推理由外接模型提供。用户可选择[[openrouter]]（200+模型）、NVIDIA NIM、[[openai]]、Nous Portal（300+模型）或自建端点。