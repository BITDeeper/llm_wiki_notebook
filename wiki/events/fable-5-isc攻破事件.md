---
type: event
title: Fable 5 ISC攻破事件
created: 2026-06-12
updated: 2026-06-12
tags: [ai安全, 安全事件, fable-5, isc, agent安全]
related: [fable-5, 内部安全坍塌, tvd攻击框架, isc-bench, 马兴军, anthropic, 安全分类器+模型防御架构]
participants: [fable-5, anthropic, 马兴军, yutao-wu, 复旦大学]
causes: [内部安全坍塌, tvd攻击框架]
effects: [isc-bench]
significance: high
origin_date: 2026-06-01
sources: ["rss/5秒攻破，仅需1次对话：fable-5最强安全机制被华人团队破解.md"]
---
# Fable 5 ISC攻破事件

2026年6月，[[anthropic|Anthropic]] 面向公众开放的 Mythos 级模型[[fable-5|Fable 5]]在发布当天即被国际联合研究团队成功攻破，标志着 AI 安全领域从"对抗性输入防御"转向"内生行为治理"。

## 事件经过

由[[复旦大学]]、迪肯大学、香港城市大学、墨尔本大学、新加坡管理大学以及伊利诺伊大学厄巴纳-香槟分校组成的国际联合研究团队，在 Fable 5 发布当天宣布成功突破其安全防护机制。攻击由迪肯大学博士生[[yutao-wu|Yutao Wu]]主导设计，仅需一次对话、耗时不到5秒。

流量分析证实有害输出直接来自 Fable 5 本身，而非触发安全机制后自动切换的[[opus-4-8|Opus 4.8]]模型，证明攻击实质性突破了 Fable 5 的安全防线。

## 技术原理

攻击基于研究团队2026年3月发表的论文《Internal Safety Collapse in Frontier Large Language Models》中揭示的[[内部安全坍塌]]（ISC）原理，利用[[tvd攻击框架|TVD框架]]绕过前置安全分类器。这不是传统的提示注入或角色扮演，而是利用智能体在长程任务执行中自发产生的内部风险。

## 预研背景

该团队早在2026年3月便已完成预研并公开发布论文，并利用类似技术从37家主流大模型及智能体系统中成功提取系统提示词，在[[claude-code|Claude Code]]完成了开源验证（95%吻合）。

## 行业影响

该事件对当前以[[安全分类器+模型防御架构|安全分类器]]为核心的静态防御范式提出了根本性挑战，表明仅依赖前置安全分类器不足以防范高级智能体系统中的潜在风险行为。这对企业部署自动化 Agent 敲响了警钟，推动行业思考下一代 AI 安全基础设施的构建方向。