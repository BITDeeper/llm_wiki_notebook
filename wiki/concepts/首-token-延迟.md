---
type: concept
title: "首 Token 延迟"
tags: [performance, metrics, latency]
related: [grok-4-3, 性价比模型策略]
created: 2026-05-02
updated: 2026-05-02
sources: ["马斯克的grok-4.3悄悄上线，跑分评测出炉.md"]
---

# 首 Token 延迟

## 定义
[[首-token-延迟]] (Time to First Token, TTFT) 指的是用户发送请求后，模型生成第一个字符所需的时间。

## 对体验的影响
- **高延迟**：用户会感觉到模型在“想一会儿”，这在短对话、客服或语音助手场景中可能被视为卡顿或响应慢。
- **低延迟**：用户能立即看到反馈，体验更流畅。

## Grok 4.3 的表现
虽然 [[Grok 4.3]] 的输出速度极快（196 Tokens/s），但其首 Token 延迟较高。这意味着在长文本生成时优势明显，但在短对话中用户可能会先感受到停顿。这是评估 AI 工具实际体验时容易被忽略但关键的隐性指标。