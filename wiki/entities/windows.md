---
type: entity
title: Windows
created: 2026-06-04
updated: 2026-06-04
tags: [操作系统, 微软, 平台]
related: [openclaw, build-2026]
sources: ["openclaw终于拿下windows！全球龙虾党狂欢.md"]
---
# Windows

微软（Microsoft）旗下的桌面操作系统，全球装机量最大的桌面系统，拥有约16亿台设备的存量市场。

## 在AI Agent生态中的角色

长期以来，Windows在[[openclaw]]生态中是"二等公民"——开发者只能通过Docker容器或WSL2子系统运行，面临跨文件系统I/O惩罚（可达10倍）、插件安装报错等问题。

2026年6月，[[openclaw]] 2026.6.1版本实现Windows原生节点接入，Windows设备可作为"一等公民"直接加入分布式节点网络。这一更新在[[build-2026|Build 2026]]大会上由[[peter-steinberger]]亲自官宣，被视为Agent算力底座从极客设备扩展至全球PC的关键转折点。

## 意义
- 16亿台设备成为Agent的潜在"肉身"
- 个人游戏本、办公机、旧台式机均可变为Agent托管节点
- OpenClaw潜在托管节点数量直接翻倍