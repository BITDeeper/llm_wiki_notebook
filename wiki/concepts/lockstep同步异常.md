---
type: concept
title: Lockstep同步异常
tags: [算法, 异常检测, 数据挖掘]
related: [starscout, github假星灰产]
created: 2026-05-05
updated: 2026-05-05
sources: ["1美元买10颗星？顶会曝出github假星灰产，热门仓库或藏木马.md"]
---

# Lockstep同步异常

[[Lockstep同步异常]]（Lockstep Synchronization Anomaly）是一种用于检测虚假网络行为的模式识别技术。它指的是一组账号在极短的时间窗口内，对一组目标对象（如 GitHub 仓库、Facebook 页面）进行高度同步的操作。

## 原理
在自然的人类行为中，大量用户几乎在同一时间对同一批对象进行完全相同的操作（如点赞）的概率极低。当检测到这种“踏着同一步点行走”的模式时，通常意味着存在自动化脚本或僵尸网络在操纵账号。

## 应用
- **Facebook CopyCatch**：该算法最早由 Facebook 开发，用于检测虚假点赞（Fake Likes）。
- **GitHub StarScout**：[[卡内基梅隆大学]] 的研究团队将此思路移植到 [[GitHub]]，用于检测 [[github假星灰产]]。通过分析 BigQuery 上的 GitHub 事件日志，识别出那些在短时间内集中给一批仓库点 Star 的账号群。

## 优势
- **高准确率**：基于行为模式的检测，比单纯分析账号属性（如注册时间）更难规避。
- **规模化**：适用于海量数据的全量扫描。