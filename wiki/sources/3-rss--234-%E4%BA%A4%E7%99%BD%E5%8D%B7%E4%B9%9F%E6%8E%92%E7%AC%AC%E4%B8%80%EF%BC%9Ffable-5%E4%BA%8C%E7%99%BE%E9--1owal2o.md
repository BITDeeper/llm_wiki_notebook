---
type: source
title: "交白卷也排第一？Fable 5二百题全部拒答，却登顶最严AI编程基准"
authors: [Panda, 机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/6YFCA1rnmsbBBv_himk0kA"
venue: 机器之心
tags: [ai编程, 安全护栏, 评测基准, anthropic, fable-5]
related: [claude-fable-5, programbench, agents-last-exam, anthropic, 安全降智, 过度拒绝]
created: 2026-06-13
updated: 2026-06-13
sources: ["rss/交白卷也排第一？fable-5二百题全部拒答，却登顶最严ai编程基准.md"]
---
# 交白卷也排第一？Fable 5二百题全部拒答，却登顶最严AI编程基准

**来源：** 机器之心 | **编辑：** Panda | **日期：** 2026-06-13

## 摘要

本文报道 Anthropic 最新旗舰编程模型 Claude Fable 5 因安全护栏过度严格导致的系列争议。Fable 5 在 [[programbench|ProgramBench]] 基准上 200 道题全部因触发网络安全分类器而拒绝作答，但排行榜仍将其列为第一，引发评测有效性危机。同时，Fable 5 的[[安全降智|静默降智]]策略（检测到前沿AI研发查询时悄悄降级至 [[opus-4-8|Opus 4.8]] 而不通知用户）在社区引发强烈抗议，Anthropic 被迫数小时内道歉并改为透明降级。在 [[agents-last-exam|ALE]] 基准中，Fable 5 得分 22.0% 位列第二（GPT-5.5 为 24.0%），但单题成本 15.70 美元是 GPT-5.5 的 4 倍。

## 核心发现

1. **ProgramBench 交白卷登顶**：200 道二进制逆向题目全部触发安全分类器被拒，排行榜仍将其列第一
2. **静默降智策略曝光**：Fable 5 系统卡披露，检测到前沿AI研发查询时悄悄降级至 Opus 4.8，不通知用户
3. **透明降级承诺存疑**：Anthropic 道歉后声称改为透明降级，但 ProgramBench 排行榜备注仍警告可能"悄无声息地提供降级版"
4. **成本效益不佳**：ALE 基准显示 Fable 5 单题成本 15.70 美元，是 GPT-5.5（3.80 美元）的 4 倍
5. **最高难度档全军覆没**：ALE Last-Exam 档除 GPT-5.5 外所有模型通过率均为 0%

## 关键数据

| 指标 | Fable 5 | GPT-5.5 (Codex) | Composer 2.5 |
|------|---------|-----------------|--------------|
| ALE 得分 | 22.0% | 24.0% | — |
| ALE 单题成本 | $15.70 | $3.80 | $1.33 |
| ProgramBench 完成率 | 0%（全部拒绝） | 0% | 0% |
| SWE-Bench Pro | 80.3% | — | — |
| Terminal-Bench 2.1 安全拒绝率 | ~20.9% | — | — |

## 技术细节

Fable 5 的安全护栏采用两级架构：
- **第一级**：探针实时监控模型内部激活状态，对所有流量进行扫描
- **第二级**：触发警报后上报独立训练的 LLM 分类器做最终裁决
- **覆盖领域**：网络安全、生物化学、前沿AI研发

## 关联条目

- [[claude-fable-5]] — 本文核心实体
- [[安全降智]] — 静默降级策略的概念分析
- [[过度拒绝]] — 安全护栏误拦截现象
- [[能力-安全悖论]] — AI行业根本矛盾
- [[anthropic]] — Fable 5 开发者
- [[mythos-5]] — Fable 5 的前身/受限版本