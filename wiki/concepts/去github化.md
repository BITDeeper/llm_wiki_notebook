---
type: concept
title: 去GitHub化
tags: [open-source, platform-migration, codeberg, decentralization]
related: [ghostty, zig, gentoo-linux, github-宕机事件-2026]
created: 2026-04-29
updated: 2026-04-29
sources: ["ai撑爆github！天天宕机，18年老兵带5万星项目「决裂出逃」.md"]
---

# 去GitHub化

**去 GitHub 化**（De-GitHubification）是指开源社区出于对平台稳定性、企业垄断政策（如微软收购 GitHub）、AI 训练条款或服务质量的担忧，将项目从 GitHub 迁移至其他托管平台（如 [[Codeberg]]、GitLab 或自托管）的趋势。

## 驱动因素

### 1. 平台稳定性下降
随着 GitHub 战略重心向 AI 倾斜，传统代码托管和 CI/CD 服务（如 GitHub Actions）的稳定性下降。频繁的宕机和性能问题促使开发者寻找替代方案。[[Mitchell Hashimoto]] 迁移 [[Ghostty]] 是此类原因的标志性事件。

### 2. AI 训练政策争议
微软利用 GitHub 上的公开代码仓库训练 AI 模型（如 Copilot）引发了版权和伦理争议。部分开源项目（如 [[Gentoo Linux]]）明确反对这一做法，并以此为由迁移至不支持此类数据挖掘的平台。

### 3. 反垄断与独立性
开发者担心单一平台（尤其是被大型科技公司收购后）对开源生态的控制力过强，希望保持开源基础设施的去中心化和独立性。

## 典型案例
- **[[Zig]]**：2025 年 11 月将规范主仓从 GitHub 迁至 [[Codeberg]]。
- **[[Gentoo Linux]]**：2026 年 2 月主仓正式迁至 [[Codeberg]]。
- **[[Ghostty]]**：2026 年 4 月，[[Mitchell Hashimoto]] 宣布因服务不稳定迁离 GitHub。

## 迁移障碍
尽管存在不满，GitHub 的网络效应（Issue 追踪、PR 机制、社交图谱、Star 数）使得迁移成本极高。大多数项目仍选择留在 GitHub，除非面临不可忍受的破坏性因素。