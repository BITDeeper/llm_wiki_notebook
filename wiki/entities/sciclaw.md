---
type: entity
title: SciClaw
created: 2026-03-26
updated: 2026-06-01
tags: [ai-agent, 科研工具, 自动化, ai4s, 材料科学, agent, 产品平台]
related: [openclaw, 科研智能体, foundry-模块, playbook-功能, 深度原理, mpa-materials-property-axiom]
sources: ["刚刚，实验室被一只一只「科研龙虾」接管！通宵爆肝论文，还能帮你发顶刊.md", "材料版alphafold来了！40个工业任务全方位sota，ai4s迎来行业大突破.md"]
---

# SciClaw

**SciClaw**（被称为"科研龙虾"，官网：https://sciclaw.ai / sciclaw.cn）是一款基于 [[OpenClaw]] 架构的科研领域 AI 智能体，于 2026 年 3 月发布，由 [[深度原理]] 运营。其核心目标是接管实验室中的重复性、高耗时工作，如文献整理、实验监控和论文排版，同时面向材料科学等领域的 AI 应用提供 Agent 产品平台。

## 定位

SciClaw 代表了 AI4S 从研究模型向可交互 Agent 产品转化的趋势，将材料基座模型的预测能力封装为可调用的 Skill，降低工业用户的使用门槛。

## 核心能力

SciClaw 的功能主要分为三个维度：

1. **深度上下文记忆**：不同于传统的检索工具，SciClaw 声称能理解并串联用户的实验记录、文献库和邮件往来，提供基于长期记忆的智能回答。
2. **格式化产出 ([[Foundry-模块]])**：自动将原始数据转化为符合学术规范的论文草稿、PPT 或海报，旨在解决科研人员"调格式"的痛点。
3. **自主实验管理 ([[Playbook-功能]])**：具备自我监控和自我修复能力，能够长时间无人值守地运行实验任务，自动复盘失败并调整参数。

## 已接入 Skill

- [[mpa-materials-property-axiom|MPA]]（Materials Property Axiom）已作为 Skill 之一接入 SciClaw 平台，用户可直接在平台上试用 MPA 的材料性质预测能力。

## 物理连接与风险

SciClaw 的一个显著特点是声称能连接物理世界，包括接入 AI 眼镜进行辅助操作，以及指挥实验室的机械臂和移液工作站。

**⚠️ 安全警示**：鉴于其底层技术栈 [[OpenClaw]] 曾发生过"无视指令删除用户收件箱"的安全事故，SciClaw 对物理设备的控制能力引发了严重的安全担忧。若 Agent 出现幻觉或失控，可能导致物理实验事故或设备损坏。