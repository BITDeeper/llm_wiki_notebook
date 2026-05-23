---
type: event
title: Codex移动端整合发布
created: 2026-05-15
updated: 2026-05-15
tags: [openai, codex, chatgpt, 移动端, ai编程, 产品发布]
related: [openai, 移动端agent控制, 1-n-agent调度, claude-code, agent-view, ai-subscription-crisis]
sources: ["codex和chatgpt合体！补上24小时干活的最后一块拼图.md"]
origin_date: 2026-05-15
participants: [openai, sam-altman, greg-brockman]
causes: [claude-code]
effects: [移动端agent控制]
significance: high
---
# Codex移动端整合发布

2026年5月15日，[[openai]]宣布将[[codex]]整合进ChatGPT移动APP，开启内测预览。这一发布标志着AI编程代理从桌面工具正式进入"随时随地调度"阶段，补全了AI编程代理"24小时干活"的最后一块拼图。

## 事件背景

此前不久，[[claude-code]]刚推出[[agent-view]]多会话调度界面（2026年5月研究预览版），将AI编程代理的调度体验从1:1对话升级为1:N桌面调度。OpenAI随即推出移动端Codex控制，将调度界面从桌面进一步扩展到手机，形成差异化竞争。

## 核心功能

- **远程任务管理**：通过手机向Codex下发任务、查看生成结果、把控执行流程、确认下一步操作
- **多设备连接**：支持MacBook、Mac mini、托管远程环境，Windows端即将上线
- **后台挂起与自动暂停**：Codex遇到需要用户权限的关键节点时自动暂停，等待手机端授权后继续执行
- **全平台全套餐**：iOS和安卓均支持，所有套餐用户（含免费版）可用

## 企业级更新

- 远程SSH连接全面上线，支持企业标准化远程开发环境
- 程序化访问密钥，适配CI/CD流水线和内部自动化场景
- Hooks钩子工具正式开放，支持私密信息检测、合规校验、对话记录留存
- 支持HIPAA合规标准下的本地环境使用

## 安全架构

Codex采用安全中转传输机制，在多设备间连通可信设备，无需将设备直接暴露在公网。中转服务在登录ChatGPT的所有设备间同步实时会话状态与项目信息。

## 影响与意义

- 将[[1-n-agent调度]]范式从桌面扩展到移动端，用户角色从"坐在电脑前的调度者"变为"随时随地调度者"
- 与[[claude-code]]的[[agent-view]]形成直接竞争，AI编程代理赛道的体验竞争维度从桌面扩展到移动
- 免费版用户也能使用Codex移动端控制，暗示OpenAI在[[ai-subscription-crisis]]下的策略调整——用免费策略换取用户规模和习惯锁定
- 进一步强化[[token作为生产资料]]概念，Agent可以24小时不间断消耗Token执行任务