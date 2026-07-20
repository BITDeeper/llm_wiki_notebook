---
type: entity
title: Infinite Skills
created: 2026-06-16
updated: 2026-06-16
tags: [open-source, codex-skills, goal-generation, reverse-interview]
related: [codex, 自生成目标, ralph循环]
origin_date: 2026-06-01
sources: ["rss/码农连任务都不写了？codex开始自己给自己派活.md"]
---
# Infinite Skills

Infinite Skills 是一个开源项目（GitHub: Infinite-Labs-AI/infinite-skills），由开发者RTK（@riverkhan）创建，旨在将[[codex|Codex]] /goal功能的最佳实践封装为可复用的开源技能。

## 核心特性

- 仿照Superpowers的结构，每个skill是skills目录下扁平的一份SKILL.md
- 核心skill名为"goal"，在正式发起/goal之前，它会先反过来"面试"用户
- 通过"反向面试"机制，将一个含糊的目标逐句盘问成具体、可验证的契约
- 整理好的完整目标再喂给goal模式执行

## 意义

Infinite Skills 解决了[[自生成目标]]的一个核心前提：goal模式跑得好不好，取决于目标写得够不够具体、能不能让Codex自己判断"做完没有"。它将"把目标盘问清楚"这一步也工具化、自动化了。