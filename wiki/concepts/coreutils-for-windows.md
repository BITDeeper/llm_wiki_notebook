---
type: concept
title: Coreutils for Windows
created: 2026-06-03
updated: 2026-06-03
tags: [开发者工具, windows, linux, rust, 微软]
related: [微软]
sources: ["很好！和openai分手后微软彻底疯了.md"]
origin_date: 2026-06-01
---
# Coreutils for Windows

Coreutils for Windows是微软在Build 2026大会上发布的开发者工具集，将超过75个Linux命令行工具用Rust重写后原生运行于Windows。这标志着微软进一步抹平Windows/Linux开发鸿沟的努力。

## 核心内容

- **工具集**：ls、cat、grep、sed、awk等75+常用Linux命令行工具
- **实现方式**：使用Rust语言重写，原生运行于Windows终端
- **配套更新**：WSL Containers即将公开，支持在WSL中用原生CLI创建和管理Linux容器
- **智能终端**：终端内嵌AI，能读懂报错信息、分析原因、自动执行多步骤排错任务

## 战略意义

Coreutils for Windows延续了微软"微软爱Linux"的战略路线，通过消除Windows与Linux之间的开发体验差异，巩固Windows作为AI开发者首选平台的地位。配合Windows Developer Configurations一键装机（WinGet一条命令搞定VS Code、GitHub Copilot、PowerShell 7等），微软试图终结新电脑的"装机噩梦"。