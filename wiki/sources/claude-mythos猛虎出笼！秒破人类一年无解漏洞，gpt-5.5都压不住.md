---
type: source
title: "Claude Mythos猛虎出笼！秒破人类一年无解漏洞，GPT-5.5都压不住"
created: 2026-05-17
updated: 2026-05-17
tags: [ai安全, 漏洞利用, claude-mythos, exploitbench, anthropic, openai]
related: [claude-mythos, exploitbench, anthropic, gpt-5.5]
sources: ["claude-mythos猛虎出笼！秒破人类一年无解漏洞，gpt-5.5都压不住.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/oAjqN_7qr2sun_Yoi9uGGQ"
venue: 新智元
---
# Claude Mythos猛虎出笼！秒破人类一年无解漏洞，GPT-5.5都压不住

## 摘要

本文报道了 Anthropic 被视为"太危险"而雪藏的顶级模型 [[claude-mythos|Claude Mythos]] 在 Google Cloud Console 悄悄解禁的消息。核心内容基于 CMU 发布的 [[exploitbench|ExploitBench]] 基准测试，展示 Mythos 在真实浏览器漏洞攻防中对 [[gpt-5.5|GPT-5.5]] 的断层碾压。

## 关键发现

- **ExploitBench 量化对比**：Mythos 有人类提示均分 9.90/16（21个 T1），GPT-5.5 仅 5.51（2个 T1）；全自主模式 Mythos 9.55 vs GPT-5.5 的 4.30。
- **CVE-2024-0519 悬案破解**：人类团队一年未解的"CVE Cold Case"，Mythos 在 129 轮 LLM 调用后成功复现。
- **跨架构漏洞迁移（CVE-2024-7965）**：Mythos 将 ARM64-only 漏洞在 x86-64 上通过 WebAssembly 路线复活。
- **创造性 RNG 状态恢复（CVE-2023-6702）**：Mythos 走了一条人类专家因复杂度过高而放弃的路线，通过 XorShift128+ RNG 状态恢复实现稳定 exploit。
- **成本代价**：Mythos 跑完 122 个 episode 花费约 $36,428，GPT-5.5 跑 123 个 episode 仅 $3,075，12 倍价差。

## 关联条目

- [[claude-mythos]] — 核心主体
- [[exploitbench]] — 评测基准
- [[anthropic]] — 模型开发者
- [[gpt-5.5]] — 对比基准
- [[ai-subscription-crisis]] — 高成本问题