---
type: event
title: MobileGym开源发布
created: 2026-06-02
updated: 2026-06-02
tags: [开源, mobile-agent, 里程碑, 基础设施]
related: [mobilegym, mobilegym-bench, 中科院自动化所, mobile-gui-agent]
sources: ["浏览器秒变手机！中科院开源agent训练场，微信、原神都能跑.md"]
origin_date: 2026-05-01
time_span:
  start: 2026-05-01
  end: null
participants: [中科院自动化所]
causes: []
effects: []
significance: high
---
# MobileGym开源发布

2026年5月，[[中科院自动化所]] 模式识别实验室开源发布 [[MobileGym]]——一个运行在浏览器中的高并发安卓仿真平台，配套发布 [[MobileGym-Bench]] 评测基准。

## 背景

Mobile GUI Agent 是2025-2026年最火的AI赛道之一，但训练与评测基础设施存在根本缺陷：模拟器被风控识别且资源消耗大，真机成本高且无法并行。前代可验证环境（AndroidWorld、MobileWorld）仅能覆盖系统工具和开源App。

## 核心突破

- 首次将可验证的"[[考练一体]]"能力延伸到微信、支付宝等日常高频App
- [[交互保真]] 理念验证：95.1%的仿真训练增益成功迁移到真机
- 程序化判定替代VLM裁判，消除10.2%误判率
- 引入 [[use-意外副作用指标|USE指标]]，首次量化Agent"顺手作恶"行为

## 影响

- 论文发布于arXiv（2605.26114），代码完全开源
- 代表Mobile Agent领域从"模型竞赛"进入"基础设施完善"阶段
- 为AI安全对齐研究提供了"零后果沙箱"试验环境