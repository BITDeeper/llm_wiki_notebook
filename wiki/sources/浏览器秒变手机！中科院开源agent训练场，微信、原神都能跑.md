---
type: source
title: "浏览器秒变手机！中科院开源Agent训练场，微信、原神都能跑"
created: 2026-06-02
updated: 2026-06-02
tags: [mobile-agent, 仿真环境, 强化学习, 评测基准, 开源项目, ai安全]
related: [mobilegym, mobilegym-bench, 中科院自动化所, 交互保真, mobile-gui-agent, use-意外副作用指标, sim2real]
sources: ["浏览器秒变手机！中科院开源agent训练场，微信、原神都能跑.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/oI0QSJ7F5oRMPvGyaNG-Yg"
venue: 新智元微信公众号
---
# 浏览器秒变手机！中科院开源Agent训练场，微信、原神都能跑

新智元关于 [[中科院自动化所]] 模式识别实验室开源 [[MobileGym]] 的深度报道。

## 核心内容

报道介绍了 [[MobileGym]]——一个完全运行在浏览器中的轻量级安卓仿真平台，用于 [[mobile-gui-agent|Mobile GUI Agent]] 的训练与评测。该平台通过 [[交互保真]] 理念和 [[结构化状态仿真]] 方法，首次将可验证的"[[考练一体]]"能力延伸到微信、支付宝等高频日常App。

## 关键发现

- 9个顶尖Agent模型在L4任务上集体扑街（最高仅21.9%），证明 [[MobileGym-Bench]] 区分度极强
- Qwen3-VL-4B经GRPO微调后测试集成功率从9.4%提升至22.2%（+12.8pp）
- [[sim2real|Sim2Real]] 迁移率达95.1%，真机成功率从32.2%提升至72.9%
- [[vlm质检闭环|VLM裁判]] 误判率高达10.2%，换更强模型无法解决系统性问题
- [[use-意外副作用指标|USE指标]] 首次量化Agent"顺手作恶"行为
- 前沿模型（Gemini 3.1 Pro）在指令驱动下几乎无脑执行高风险操作，缺乏安全刹车

## 技术指标

- 单实例约400MB内存、3秒冷启动
- 96个并行环境仅需一台服务器
- 256任务评测仅需6分钟
- 96万条轨迹RL训练的VLM裁判API成本约60万元，MobileGym程序化判定成本为0