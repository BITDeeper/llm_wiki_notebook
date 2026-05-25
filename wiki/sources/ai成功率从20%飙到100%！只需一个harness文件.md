---
type: source
title: "AI成功率从20%飙到100%！只需一个Harness文件"
created: 2026-05-24
updated: 2026-05-24
tags: [harness工程, ai编程, anthropic, openai, claude-code, codex]
related: [harness-工程, agents-md, ai编程三大致命失败模式, claude-code, codex]
sources: ["ai成功率从20%飙到100%！只需一个harness文件.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/nGHqwQyjjp0qHEqMsqcLDg"
venue: 新智元微信公众号
---
# AI成功率从20%飙到100%！只需一个Harness文件

新智元发表于 2026 年 5 月 24 日的深度技术文章，系统阐述了 **Harness 工程**的概念框架、五大子系统、三大致命失败模式及五步搭建指南。

## 核心论点

AI 编程智能体频频失败的根本原因不在模型能力，而在模型之外的工程基础设施（Harness）。装好 Harness 可以将成功率从 20% 提升到 100%。

## 关键证据

### Anthropic 对照实验
同一 [[opus-4-5]] 模型、同一编程题：
- **裸跑**：花费 9 美元，全部失败
- **套 Harness**：花费 200 美元，全部成功
- 多花的 191 美元全部用于验证循环

### OpenAI 百万行实验
[[codex]] 团队在真实仓库上验证：仅在仓库根目录添加不到 100 行的 [[agents-md|AGENTS.md]] 文件，即显著提升成功率。

## 五大子系统

1. **指令子系统**：AGENTS.md / CLAUDE.md，注入项目约定
2. **工具子系统**：权限配置，限定可调用命令
3. **环境子系统**：锁定依赖版本，消除环境差异
4. **状态子系统**：PROGRESS.md 持久化跨会话进度
5. **反馈子系统**：强制测试/lint/构建验证循环

## 三大致命失败模式

1. 过早宣布胜利——无反馈循环
2. 上下文焦虑——Token 窗口压力导致质量崩塌
3. 跨会话失忆——新会话不了解前序工作

## 行业信号

文章提及 [[deepseek-v4|DeepSeek]] 最近也在招聘 Harness 工程师，侧面印证该概念正从头部实验室向全行业扩散。

## 参考资料

- walkinglabs: https://walkinglabs.github.io/learn-harness-engineering/en/