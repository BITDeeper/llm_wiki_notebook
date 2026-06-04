---
type: event
title: 微软Build 2026大会
created: 2026-06-03
updated: 2026-06-03
tags: [微软, build, ai发布, 战略转型]
related: [微软, mai模型系列, scout, mxc, openclaw, github-copilot桌面客户端, surface-rtx-spark-dev-box]
sources: ["很好！和openai分手后微软彻底疯了.md"]
origin_date: 2026-06-01
time_span:
  start: 2026-06-01
  end: null
participants: [微软, 萨蒂亚-纳德拉, 黄仁勋, peter-steinberger]
causes: [openai]
effects: [mai模型系列, scout, mxc, github-copilot桌面客户端, surface-rtx-spark-dev-box]
significance: high
---
# 微软Build 2026大会

微软Build 2026大会是微软AI战略独立的标志性事件。在解绑 [[openai|OpenAI]] 后，微软首次系统性发布全套自研AI产品线，从模型、Agent、开发者工具到硬件一应俱全，被媒体形容为"微软自家的AI自立门户大会"。

## 背景

微软曾投入百亿美金投资OpenAI，但随着OpenAI加速推进IPO并寻求多合作伙伴关系，微软感知到供应链风险，开始加速自研AI能力。Build 2026是这一战略转型的集中爆发点。

## 核心发布

### 7款MAI自研模型
- [[mai模型系列|MAI-Thinking-1]]：推理模型，叫板Claude，部分维度优于Sonnet 4.6
- MAI-Code-1-Flash：5B参数代码模型，优于Claude Haiku 4.5
- MAI-Image-2.5/Flash：图像生成编辑模型，Arena分数据称超NanoBanana Pro
- MAI-Transcribe-1.5：音频转文字模型
- MAI-Voice-2/Flash：15种语言语音生成模型

### 企业级AI Agent
- [[scout|Scout]]：嵌入Microsoft 365的"永不下班AI同事"
- [[openclaw|OpenClaw]] 正式登陆Windows，通过 [[mxc|MXC]] 安全沙箱运行

### 开发者工具
- [[github-copilot桌面客户端]]：独立桌面应用，含My Work、Agent Merge、Canvas
- Copilot SDK全面开放（Node/Python/Go/.NET/Rust/Java）
- Coreutils for Windows：75+Linux命令行工具Rust重写版
- WSL Containers即将公开
- 智能终端（预览阶段）

### 硬件
- [[surface-rtx-spark-dev-box]]：NVIDIA RTX Spark超芯片，128GB统一内存，1 PFLOP算力

## 关键时刻

- **黄仁勋远程连线**：与纳德拉在线讨论AI基础设施
- **MXC安全演示**：现场让OpenClaw执行"删除桌面所有文件"指令，即使关闭Agent安全层仍被MXC拦截
- **Peter Steinberger站台**：[[peter-steinberger|Peter Steinberger]] 亲自为Windows版OpenClaw打call

## 影响

Build 2026标志着AI产业格局从双寡头（OpenAI/Anthropic）向三极化演变。微软利用Windows生态优势构建AI护城河，从"OpenAI分销商"转变为全栈AI竞品厂商。