---
type: event
title: Claude Mythos 解禁事件
created: 2026-05-17
updated: 2026-05-17
tags: [ai安全, anthropic, 模型发布, 安全治理]
related: [claude-mythos, anthropic, exploitbench, gpt-5.5, ai-subscription-crisis]
sources: ["claude-mythos猛虎出笼！秒破人类一年无解漏洞，gpt-5.5都压不住.md"]
origin_date: 2026-05-17
time_span:
  start: 2026-05-17
  end: null
participants: [anthropic, claude-mythos]
causes: [exploitbench, anthropic反超openai-202604]
effects: [ai-subscription-crisis]
significance: high
---
# Claude Mythos 解禁事件

2026年5月17日，被 [[anthropic|Anthropic]] 以"太危险"为由长期雪藏的顶级模型 [[claude-mythos|Claude Mythos]] 在 Google Cloud Console 悄悄解禁，Preview 标签被摘除。

## 背景

Mythos 此前因安全评估中被判定为"太危险"而被 Anthropic 限制访问。解禁前数日，两个事件引爆了公众关注：

1. **Calif 团队破解苹果 M5**：一个研究团队在数日内用 Mythos 破解了苹果 M5 的 macOS 内存保护机制
2. **[[exploitbench|ExploitBench]] 发布**：CMU 几乎同时发布了 ExploitBench 基准测试，Mythos 在真实浏览器漏洞攻防中对 [[gpt-5.5|GPT-5.5]] 实现断层碾压

## 解禁流程

Mythos 的解禁流程与此前的 Opus 4.7 正式发布完全一致：先在 Google Cloud Console 上架 → 摘掉 Preview 标签 → 全平台推送。这暗示 Mythos 的正式全平台发布即将到来。

## 影响

- **安全治理**：Anthropic 此前的"安全红线"在商业竞争压力下被突破，引发关于 AI 安全治理的广泛讨论
- **市场格局**：Mythos 的解禁被视为 Anthropic 在与 [[openai|OpenAI]] 商业角逐中打出的一张王牌
- **成本冲击**：Mythos 单次测试成本约 $36,428（GPT-5.5 的 12 倍），进一步加剧 [[ai-subscription-crisis|AI 订阅制危机]]
- **攻防范式转变**：标志着 AI 主导的安全攻防时代从理论走向实战

## 开放问题

- Mythos 的解禁是否意味着 Anthropic 放弃了安全红线？
- 商业压力是否压倒了安全考量？
- CVE-2024-0519 的具体 exploit 路径被刻意保密，是否构成新的安全风险？