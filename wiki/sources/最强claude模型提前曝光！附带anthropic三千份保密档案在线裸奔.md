---
type: source
title: "最强Claude模型提前曝光！附带Anthropic三千份保密档案在线裸奔"
tags: [anthropic, claude, security-leak, mythos, model-comparison]
related: [anthropic, claude-mythos, claude-opus-4-6, 模型双重用途风险, cms-配置失误]
created: 2026-03-28
updated: 2026-03-28
authors: [克雷西, 梦瑶]
year: 2026
url: "https://mp.weixin.qq.com/s/JbEkb5rK3hx8viEl-lsVRQ"
venue: "量子位"
sources: ["最强claude模型提前曝光！附带anthropic三千份保密档案在线裸奔.md"]
---

# 最强Claude模型提前曝光！附带Anthropic三千份保密档案在线裸奔

## 概述
本文报道了 [[anthropic]] 发生的一起严重内部数据泄露事件。由于 CMS 迁移时的权限配置失误，包含 3000 份内部保密资产的数据库被公网可见。其中最引人注目的是代号为 [[claude-mythos]]（又称 Capybara）的新一代旗舰模型细节被曝光。

## 核心发现

### 1. 新模型 Claude Mythos
泄露文档显示，[[claude-mythos]] 被描述为 Anthropic 迄今为止开发的最强大的 AI 模型。
- **性能对比**：在软件编码、学术推理和网络安全等测试中，得分显著高于当前的旗舰模型 [[claude-opus-4-6]]。
- **技术定位**：属于通用模型，但在推理、编码和网络安全方面有显著提升，被称为“质的飞跃”。

### 2. 泄露原因
- **直接原因**：Anthropic 内部内容管理系统（CMS）在版本迁移时出现“人为错误”。
- **技术细节**：数据库权限被错误设置为“完全公开”，且未加密，导致图片、PDF 和博客草案直接暴露在公网。
- **发现者**：剑桥大学研究员和网络安全公司 LayerX Security 在扫描过程中发现。

### 3. 安全与双重用途风险
由于 [[claude-mythos]] 在代码和网络安全领域的能力远超现有水平，Anthropic 采取了极其谨慎的发布策略：
- **封闭测试**：仅向极少数早期访问客户开放。
- **分阶段披露**：旨在给网络防御组织留出时间，利用模型能力加固代码库，以应对未来可能出现的 AI 攻击。
- **双重用途**：模型既能帮助防御者发现漏洞，也能帮助黑客发起攻击。现有的 [[claude-opus-4-6]] 已具备发现生产代码库中未知漏洞的能力。

## 行业背景
- 文中提到 [[claude-opus-4-6]] 在 GDPval-AA 指标上比 GPT-5.2 高出 144 Elo。
- OpenAI 发布的 GPT-5.3-Codex 也被标记为“高能力”网络安全模型，表明行业前沿模型均已突破新的安全阈值。

## 官方回应
Anthropic 发言人承认正在开发一款在推理、编码和网络安全方面有显著提升的通用模型，并确认泄露材料为“早期草稿”，但强调其能力确实代表了公司的重大飞跃。

## 相关事件
- 网友锐评指出，[[claude-code]] 的强大搜索能力可能加速了这些公开文件被发现，属于“被自家产品反噬”。