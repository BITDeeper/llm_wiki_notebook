---
type: source
title: "国产GPU首获全球顶级推理框架「原生门票」：MUSA合入SGLang主线"
created: 2026-05-14
updated: 2026-05-14
tags: [国产GPU, 推理框架, 开源生态, MUSA, SGLang, 摩尔线程]
related: [摩尔线程, sglang, musa架构, mtt-s5000, deepseek-v4]
sources: ["国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md"]
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/h-byNfwYH9_sLXzeOGYwIw"
venue: 机器之心
---
# 国产GPU首获全球顶级推理框架「原生门票」：MUSA合入SGLang主线

## 摘要

本文报道了摩尔线程 MUSA 架构正式合入全球顶级开源推理框架 [[sglang]] 主线的里程碑事件，标志着国产 GPU 首次获得全球顶级推理框架的「原生支持」。文章详细记录了摩尔线程从 2026 年 1 月开始向 SGLang 提交 issue，到 5 月 12 日累计提交 47 个 PR（合并 41 个）的完整过程。

## 核心内容

- **原生支持里程碑：** MUSA 正式成为 SGLang 官方后端，开发者无需第三方适配层即可直接调用摩尔线程全功能 GPU。
- **模型覆盖：** 成功验证 [[deepseek-v4]]，支持 Qwen、GLM、MiniMax、Wan 等主流大模型及多模态/Diffusion 模型。
- **生态共建：** 摩尔线程成为 [[mooncake]] 核心 Maintainer，与 [[tilelang]]、智源 [[flagos]] 深度联调。
- **性能数据：** 在 DeepSeek-V4 Day0 适配中，通过 FlagOS 调优，TTFT 时延降低 56.7%，吞吐量提升 65.7%。
- **技术沙龙：** 举办「SGLang × MUSA Meetup」，SGLang、TileLang、Triton、Mooncake 等开源项目核心开发者齐聚。

## 关键引述

> 「摩尔线程秉持开放的态度，MUSA 在接口设计上最大程度复用了开发者熟悉的 GPU 编程习惯。我们不希望独立创造一套封闭的生态，而是以零学习成本，全面融入现有的繁荣生态。」—— 张钰勃，摩尔线程 CTO

## 关联条目

- [[摩尔线程]] — 核心报道主体
- [[sglang]] — 原生支持 MUSA 的推理框架
- [[musa架构]] — 摩尔线程底层统一计算架构
- [[mtt-s5000]] — 承载验证的智算卡硬件
- [[原生支持]] — 核心概念
- [[prefill-decode分离架构]] — SGLang 支撑大模型的核心技术