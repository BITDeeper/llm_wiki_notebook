---
type: event
title: MUSA 合入 SGLang 主线事件
created: 2026-05-14
updated: 2026-05-14
tags: [国产GPU, 推理框架, 开源生态, 里程碑]
related: [摩尔线程, sglang, musa架构, mtt-s5000, deepseek-v4, 原生支持]
sources: ["国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md"]
origin_date: 2026-05-12
time_span:
  start: 2026-01-01
  end: 2026-05-12
participants: [摩尔线程, sglang]
causes: [deepseek-v4]
effects: [原生支持]
significance: high
---
# MUSA 合入 SGLang 主线事件

2026 年 1 月至 5 月，[[摩尔线程]] 向全球顶级开源推理框架 [[sglang]] 提交了 47 个 PR（合并 41 个），使 [[musa架构]] 正式成为 SGLang 官方原生支持的后端之一。这是国产 GPU 首次获得全球顶级推理框架的「原生门票」。

## 时间线

- **2026 年 1 月：** 摩尔线程向 SGLang 提交 issue，提供增加 MUSA 支持的完整路线图和任务拆分，涵盖 runtime LLM 支持、AOT Kernel 支持、多模态生成支持、Docker/CI/release 支持等。
- **2026 年 4 月：** [[deepseek-v4]] 发布，摩尔线程第一时间基于 SGLang 完成完整运行验证。
- **2026 年 5 月 12 日：** 累计提交 47 个 PR，合并 41 个，MUSA 正式成为 SGLang 官方后端。
- **2026 年 5 月中旬：** 举办「SGLang × MUSA Meetup」技术沙龙，SGLang、TileLang、Triton、Mooncake 等开源项目核心开发者齐聚。
- **2026 Q2：** SGLang 官方路线图将 MUSA 与 GB200/GB300、AMD、TPU、Intel 并列纳入硬件支持矩阵。

## 参与方

- **[[摩尔线程]]：** 核心推动方，提供 MUSA 后端代码和工程支持。
- **[[sglang]] 社区：** 接纳方，核心开发者 BBuf 等参与审核和合并。
- **生态共建方：** [[mooncake]]、[[tilelang]]、[[flagos]] 等开源项目核心开发者参与技术沙龙并见证。

## 起因

[[deepseek-v4]] 的发布加速了大模型推理框架对多样化硬件后端的需求，摩尔线程抓住这一时间窗口，以系统化的工程投入完成了从提出方案到代码合入的全过程。

## 影响

1. **开发者体验：** 开发者可直接在 [[mtt-s5000]] 上运行 SGLang，无需第三方适配层。
2. **模型覆盖：** DeepSeek V4、Qwen、GLM、MiniMax、Wan 等主流模型均可在国产 GPU 上原生运行。
3. **生态地位：** 摩尔线程从"追着生态跑"转变为全球主流开源 AI 软件栈的"共建者"。
4. **行业信号：** 国产 GPU 的竞争力不再仅以架构、算力和制程衡量，开源社区的活跃度和影响力正在成为硬实力的证明。