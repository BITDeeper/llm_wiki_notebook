---
type: source
title: "Anthropic紧急叫停！Mythos被内鬼偷卖API"
created: 2026-06-05
updated: 2026-06-05
tags: [anthropic, oceanus, mythos, 泄密, 红队测试, api倒卖]
related: [oceanus-mythos, anthropic, project-glasswing, 测试时计算]
sources: ["anthropic紧急叫停！mythos被内鬼偷卖api.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/s1-LSP2QjtGsWxFx9XTK6w"
venue: 新智元微信公众号
---
# Anthropic紧急叫停！Mythos被内鬼偷卖API

新智元2026年6月5日发布的突发报道，揭露 [[anthropic]] 秘密研发的超大规模模型 [[oceanus-mythos|Oceanus/Mythos]] 在红队测试期间遭内部人员倒卖 API 权限的重大泄密事件。

## 核心内容

### 事件经过
- 2026年6月3日，传闻中被"囚禁"的 Mythos（内部代号 Oceanus）即将发布，Anthropic 开启红队测试
- 红队测试员中有人将 `claude-oceanus-v1-p` 的 API 访问权限转手打包，高价转售给 API 代理服务商
- Anthropic 发现异常流量后紧急叫停全部红队测试
- 模型定价与性能参数随之曝光

### 关键参数
- 定价：80美元/百万 Output Token
- 实测吞吐量：52 Token/s
- 支持连续自主任务时长：长达12小时
- 参数规模：推测可能高达十万亿级
- 预计发布时间：2026年6月16日

### 技术推演（推测性）
文章基于性能参数进行了三大技术推演，但缺乏官方证实：
1. System 2 慢思考（MCTS + PRM 架构）
2. 动态拓扑 MoE 与线性注意力/SSM 混合架构
3. 内置 REPL 自主沙箱环境

### 行业影响
- [[openai]] 被迫加快 GPT-6/GPT-5.6 发布节奏
- [[gemini|Google Gemini 3.5 Pro]] 面临降维打击压力
- AI 连续工作时间从分钟级跨越到12小时，初级开发和运维人员受到严重威胁

## 可信度评估
文章承认52 Token/s与10万亿参数在物理规律上存在矛盾，部分技术推演带有媒体炒作和推测成分。核心事件（内鬼倒卖API、紧急叫停测试、天价定价）具有较高可信度。