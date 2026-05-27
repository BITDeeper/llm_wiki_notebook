---
type: source
title: "Python逆天改命！开源Hermes首次击败OpenAI Codex"
created: 2026-05-26
updated: 2026-05-26
tags: [hermes, codex, python, rust, 基准测试, 开源, agent]
related: [hermes-agent, codex, nous-research, openclaw]
sources: ["python逆天改命！开源hermes首次击败openai-codex.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/QcAi6OMIRwjSjhsh94ycmQ"
venue: 新智元
---
# Python逆天改命！开源Hermes首次击败OpenAI Codex

新智元2026年5月26日发布的报道，记录了开源项目 [[hermes-agent]] 在真实世界CLI基准测试中以6:5击败 [[openai]] 旗下 [[codex]] 的标志性事件。

## 核心内容

报道聚焦于 Hermes Agent 通过三项纯工程优化实现翻盘的过程：

1. **Bitwarden磁盘缓存（L2缓存）**：将凭据API调用结果缓存至磁盘（权限0600，TTL 300s），砍掉380ms
2. **PEP 562模块级`__getattr__`懒加载**：延迟加载巨型模型目录字典，省下55ms
3. **配置文件去重**：合并两次`config.yaml`读取为一次，省下17ms

三项优化合计将启动时间从701ms降至258ms，降幅63%。

## 关键数据

- 优化前战绩：5胜6负；优化后战绩：6胜5负
- GitHub星标：16.7万（三个月内）
- 日活Token消耗：353B（[[openclaw]]的近两倍）
- 内部基准：积累20+技能的实例比全新实例快40%

## 核心论点

在Agent赛道上，框架层面的架构决策比语言层面的原始速度更重要。Python的优势不在于"快"，而在于"活"——可编辑、可实时改进迭代。[[nous-research]] 联创兼首席科学家 Teknium 明确表示迁移到Rust将丧失这一优势。

## 关联

- [[hermes-agent]] — 报道主角
- [[codex]] — 被击败的对比方
- [[nous-research]] — Hermes开发方
- [[自进化架构]] — Hermes闭环学习架构的关联概念