---
type: event
title: Claude Mythos 训练算力泄露事件
created: 2026-06-04
updated: 2026-06-04
tags: [ai, 安全事件, 泄露, 微软, anthropic]
related: [claude-mythos, 微软, anthropic, mustafa-suleyman, scaling-law]
sources: ["微软「意外泄密」：claude-mythos万亿参数，训练规模浮出水面？.md"]
origin_date: 2026-06-04
participants: [微软, anthropic, mustafa-suleyman]
causes: []
effects: [claude-mythos]
significance: high
---
# Claude Mythos 训练算力泄露事件

2026 年 6 月，微软 AI 负责人 [[mustafa-suleyman|Mustafa Suleyman]] 的演示幻灯片中意外包含了 [[anthropic|Anthropic]] 竞争对手模型 [[claude-mythos|Claude Mythos]] 的训练算力数据，导致这一核心技术参数被公开。

## 事件经过

- 微软幻灯片显示 Claude Mythos 训练消耗 6.1×10²⁷ FLOPs
- 95% 置信区间为 5.3×10²⁷ 至 7.1×10²⁷（假设测量误差为 1 像素）
- 数据通过幻灯片截图的像素级估算获得

## 影响与分析

1. **竞争格局**：微软作为 OpenAI 主要投资方，其幻灯片泄露竞争对手模型的核心技术参数，引发行业对信息获取渠道和竞争伦理的讨论
2. **Scaling Law 验证**：泄露数据为 [[scaling-law|Scaling Law]] 的持续有效性提供了新的实证支撑
3. **数据可靠性**：核心数据来自第三方幻灯片截图的像素级估算，非 Anthropic 官方公布

## 未解问题

- 泄露是意外还是有预谋？
- 微软如何获取竞争对手模型的训练算力数据？
- Anthropic 是否对此事件做出官方回应？