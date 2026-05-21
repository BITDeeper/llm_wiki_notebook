---
type: source
title: "OpenClaw，崩了！"
authors: [好困]
year: 2026
url: "https://mp.weixin.qq.com/s/kPyL29mx-vzSjFn_trGogg"
venue: "新智元"
tags: [ai-agent, open-source, crisis, business-model]
related: [openclaw, peter-steinberger, hermes-agent, 龙虾税, 开源项目的企业级困境]
created: 2026-04-23
updated: 2026-04-23
sources: ["openclaw，崩了！.md"]
---

# OpenClaw，崩了！

本文报道了开源 AI 项目 [[openclaw]] 在经历爆发式增长后迅速陷入危机的过程。文章指出，该项目正面临稳定性问题（频繁更新导致系统崩溃）、外部商业压力（Anthropic 实施“龙虾税”封锁订阅额度）以及激烈的市场竞争（竞品 [[hermes-agent]] 快速崛起）三重打击。

## 核心要点

- **稳定性危机**：一个月发布十几个版本，导致用户配置频繁崩溃，包括英伟达在内的大企业因担心 Bug 而不敢升级至最新版本。
- **商业封锁**：Anthropic 禁止通过第三方工具使用 Claude 订阅额度，迫使 [[openclaw]] 用户转向按量计费的 API，导致成本激增（从每月 $200 涨至每天 $200）。
- **竞争加剧**：竞品 [[hermes-agent]] 增速迅猛，贡献者数量反超，并推出“一键迁移”功能吸纳用户。
- **数据下滑**：NPM 下载量自 3 月中旬峰值以来腰斩。
- **治理困境**：志愿者团队难以支撑“操作系统”级别的稳定性需求，内部爆发关于“快速迭代”与“企业级稳定”的路线之争。

## 关键事件

- **2026-03-16**：英伟达 GTC 大会，黄仁勋站台称 OpenClaw 为“个人 AI 操作系统”。
- **2026-04-04**：Anthropic 正式实施“龙虾税”，禁止订阅额度用于 Agent 场景。
- **2026-04-10**：[[openclaw]] 创始人 [[peter-steinberger]] 的 Claude 账号遭封禁（后解封）。
- **2026-04-中旬**：[[hermes-agent]] 贡献者数量反超 [[openclaw]]。

## 意义

本文揭示了 [[开源项目的企业级困境]]，即在缺乏商业化支持和严格测试流程的情况下，依赖志愿者维护的开源项目难以满足企业级稳定性要求。同时，[[龙虾税]] 现象也标志着 AI 基础设施提供商与应用层工具之间的利益冲突开始显现。