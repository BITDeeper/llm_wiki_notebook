---
type: concept
title: MIE（内存完整性强制执行）
created: 2026-05-15
updated: 2026-05-15
tags: [硬件安全, 苹果, ARM, 内存保护]
related: [苹果, m5-mie攻破事件-202605, calif, claude-mythos, data-only-attack]
sources: ["苹果防线全线血崩！mythos5天攻破最强硬件，全球20亿台设备危了.md"]
---
# MIE（内存完整性强制执行）

**Memory Integrity Enforcement**，[[苹果]] 在M5芯片和A19芯片中引入的硬件级安全防线。

## 技术原理

基于ARM的MTE（Memory Tagging Extension）技术，直接在芯片层面给每一块内存贴标签，任何非法访问在硬件层就被拦截。MIE能「打断所有已知的现代iOS公开exploit链」，包括此前泄露的Coruna和Darksword攻击工具包。

## 投入规模

- 耗时约5年研发（约2021-2026年）
- 耗资数十亿美元
- 集结数千名顶尖工程师
- 整个芯片团队参与
- 苹果内部称为「史无前例的工程壮举」

## 被攻破

2026年5月，[[calif|Calif]] 团队配合 [[claude-mythos|Claude Mythos]] 发现 [[mad-bugs|MAD Bugs]] 漏洞链，采用 [[data-only-attack|纯数据攻击]] 方式绕过MIE。这是史上第一个公开的、在M5硬件层面存活并完成绕过的内核漏洞。

## 设计局限

苹果在设计MIE时未考虑AI辅助攻击的可能性。MIE对 [[data-only-attack|纯数据攻击]]（不注入代码、只操纵数据）的防御最为薄弱，而Calif恰恰命中了这一攻击面。