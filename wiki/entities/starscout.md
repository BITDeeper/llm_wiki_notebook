---
type: entity
title: StarScout
tags: [工具, 检测, github, 学术研究, 开源工具, 安全检测, 数据集]
related: ["github-假星产业链", "卡内基梅隆大学", "github假星灰产", "socket-inc", "lockstep同步异常"]
created: 2026-04-21
updated: 2026-05-08
sources: ["github-star明码标价5毛颗，ai项目刷假星最猛.md", "1美元买10颗星？顶会曝出github假星灰产，热门仓库或藏木马.md"]
---

# StarScout

[[StarScout]] 是由 [[卡内基梅隆大学]]（Carnegie Mellon University）研究团队研发的大规模 GitHub 异常 Star 行为检测工具及数据集。该工具的相关研究论文《Six Million (Suspected) Fake Stars on GitHub》被 ICSE 2026 顶会收录。

## 核心功能
StarScout 旨在识别 GitHub 平台上的虚假标星行为，主要针对通过自动化脚本、僵尸账号等手段批量刷取的虚假 Star，以揭示 [[github-假星产业链]] 的规模和运作模式。

## 检测原理
StarScout 的核心检测机制结合了账号画像分析与行为模式识别：

1.  **僵尸账号识别（低活跃账号分析）**
    识别由自动化脚本控制的非活跃或虚假账号。这些账号通常具有以下特征：
    *   无头像、无简介、无其他项目。
    *   在注册当天仅进行单一操作（给特定仓库点 Star），随后长期沉寂。
    *   画像高度统一，符合“僵尸”特征。

2.  **Lockstep 同步异常（行为模式分析）**
    这是一种源自 Facebook CopyCatch 算法的检测模式。它监控一组账号在极短时间窗口内对一组仓库进行高度同步的操作。如果在自然用户行为中几乎不可能出现的同步模式（例如一批账号同时给一批仓库点 Star），则被判定为异常。

## 性能与数据规模
*   **准确率**：在测试中达到 81% 的准确率。
*   **数据范围**：基于约 20TiB 的 GitHub 事件数据进行分析，覆盖 2019 年 7 月至 2024 年 12 月的全网数据。
*   **验证结果**：被 StarScout 标记为涉事的仓库删除率是普通仓库的 18 倍（90.42% vs 5.03%），有力印证了检测结果的准确性。

## 应用成果
利用 StarScout，CMU 团队发现了 GitHub 上惊人的造假规模：
*   约 600 万颗假星。
*   涉及 18,617 个仓库。
*   背后牵扯超过 30 万个造假账号。

StarScout 的存在揭示了 GitHub 假星灰产的庞大，并证明了传统的 Star 数量指标已严重失真。该工具已公开源码及测量数据，供社区审查和复现。

## 相关链接
*   论文：*Six Million (Suspected) Fake Stars on GitHub* (ICSE 2026)
*   合作机构：[[Socket Inc.]]