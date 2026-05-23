---
type: concept
title: Agent普及三障碍
created: 2026-05-22
updated: 2026-05-22
tags: [agent, 用户体验, 行业分析, 痛点]
related: [openclaw, agent云端化, agent教练模式, ai-subscription-crisis, tokenmaxxing]
sources: ["龙虾养不动了？周鸿祎反手给虾搭了个云端办公室，专业私教在线炼虾.md"]
---
# Agent普及三障碍

由[[周鸿祎]]总结的阻碍Agent在普通用户中普及的三大核心问题：太难、太贵、不安全。这三大障碍是2026年春季OpenClaw（[[openclaw]]）养虾热退潮的根本原因。

## 三大障碍详解

### 太难
- 普通用户不会写提示词，无法从操作记录中沉淀SOP
- 配置环境复杂，调skill、修workflow需要技术背景
- 从"装上龙虾"到"让龙虾干活"之间存在巨大认知鸿沟

### 太贵
- Token消耗巨大，龙虾之父[[peter-steinberger]]月烧940万元Token
- 普通用户难以承担持续运行的API成本
- 与[[ai-subscription-crisis]]和[[tokenmaxxing]]现象直接相关

### 不安全
- 本地部署Agent存在数据泄露和系统安全风险
- Agent拥有文件操作、邮件收发等高权限，误操作后果严重
- [[openclaw]]曾发生无视指令删除用户收件箱的安全事故

## 解决方案

行业正在从多个方向攻克这三障碍：
- **太难** → [[agent教练模式]]自动生成配置
- **太贵** → [[agent云端化]]统一调度降低成本
- **不安全** → 云端沙箱隔离运行环境