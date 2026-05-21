---
type: source
title: "太狠了！OpenClaw之父一夜屠光5000 Issue，GitHub服务器先跪了"
tags: [ai-自愈, 开源维护, github, 自动化, openclaw]
related: [openclaw, clawsweeper, peter-steinberger, ai-自愈, readme即仪表盘]
created: 2026-04-26
updated: 2026-04-26
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.qq.com/s/HXtk5YrCJHp3LQkCcGVM5A"
venue: "新智元"
sources: ["太狠了！openclaw之父一夜屠光5000-issue，github服务器先跪了.md"]
---

# 太狠了！OpenClaw之父一夜屠光5000 Issue，GitHub服务器先跪了

## 摘要
本文报道了 [[openclaw]] 创始人 [[peter-steinberger]] 开发 [[clawsweeper]] 工具，利用 AI 在一天内清理了 5000 多个无效 Issue 的事件。该事件标志着开源维护正式进入 [[ai-自愈]] 时代，同时也暴露了 [[基础设施滞后]] 的问题（GitHub API 限流成为瓶颈）。

## 核心内容

### ClawSweeper 的效率与成本
- **开发时间**：2 天搭建。
- **运行规模**：50 个 Codex 实例并行扫描。
- **处理成果**：一天内关闭 5000+ 无效 Issue（人工需约一年）。
- **运行成本**：不到 1000 美元（平均每 Issue < 0.2 美元）。

### 极致保守的设计哲学
为了解决信任问题，[[clawsweeper]] 采用了 [[极致保守-设计哲学]]：
1.  **严格的关闭条件**：仅在 7 种确凿情况下（如已在 main 修复、无法复现、重复等）才关闭 Issue。
2.  **维护者豁免**：自动跳过项目维护者发布的 Issue。
3.  **只读审查**：Codex 审查时无写权限，仅生成结构化报告。
4.  **二次确认**：在执行关闭前，会重新抓取上下文并计算哈希，确保 Issue 未发生变化。
5.  **人工抽检**：创始人抽检数百条记录，确认准确率几乎无误。

### README 即仪表盘
[[clawsweeper]] 没有使用传统的 Grafana 或 Prometheus 后台，而是直接将运行状态（处理进度、限流情况等）实时更新在仓库的 [[readme即仪表盘]] 中。这种做法实现了完全的透明化和可审计性。

### 基础设施瓶颈
文章指出，唯一阻碍 AI 效率的是 [[github]] 的 API 速率限制。AI 的处理速度已经超过了现有基础设施的承载能力，即 [[基础设施滞后]] 现象。

## 意义
此案例证明了利用 AI Agent 进行大规模、保守、可审计的 [[issue-分诊]] 是完全可行的。这预示着未来大型开源项目将普遍采用类似的“自愈”系统来过滤噪音，让人类维护者专注于高价值问题。