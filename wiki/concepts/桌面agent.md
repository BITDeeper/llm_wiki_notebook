---
type: concept
title: 桌面Agent
tags: [agent, human-computer-interaction, operating-system]
related: [任务执行范式, claude-code, 天工skywork桌面版, claude-cowork]
created: 2026-02-04
updated: 2026-02-04
sources: ["win版claude-cowork杀疯了！140元雇个全职ai员工，全网首测真香.md"]
---

# 桌面Agent

## 定义
[[桌面Agent]]（Desktop Agent）是指能够直接读取、理解并操作本地文件系统（如文件夹、文件）的 AI 智能体。它区别于传统的对话框式 Chatbot，标志着 AI 从“被动投喂”向“主动感知与执行”的范式转移。

## 核心特征
1. **原生系统级权限**：能直接访问硬盘、读取文件结构、执行终端命令。
2. **感知-规划-行动**：具备 [[任务执行范式]] 的完整闭环，能自主分解任务并执行。
3. **工具调用**：能组合使用多种工具（如 Python 脚本、Office 套件）完成复杂任务。

## 典型应用场景
- **文件整理**：自动识别文件内容并分类归档。
- **数据提取**：从文档中批量提取图片或数据并格式化。
- **内容生成**：基于本地素材一键生成 PPT、网页或报告。

## 安全挑战
赋予 AI 系统级权限带来了误操作风险。目前的解决方案包括 [[本地虚拟机隔离]]（Sandboxing），即在安全沙盒中执行操作，防止误删文件或数据泄露。

## 代表性产品
- **Mac 平台**：[[Claude Cowork]]
- **Windows 平台**：[[天工Skywork桌面版]]