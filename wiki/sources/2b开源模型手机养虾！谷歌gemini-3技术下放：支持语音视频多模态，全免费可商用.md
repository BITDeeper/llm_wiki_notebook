---
type: source
title: "2B开源模型手机养虾！谷歌Gemini 3技术下放：支持语音视频多模态，全免费可商用"
tags: [google, gemma, multimodal, open-source, edge-ai]
related: [gemma-4, google-deepmind, 端侧多模态, apache-2-0, ai-for-science]
created: 2026-04-03
updated: 2026-04-03
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/bJqDYmYlIdLNbLAwY6zgcw"
venue: 量子位
sources: ["2b开源模型手机养虾！谷歌gemini-3技术下放：支持语音视频多模态，全免费可商用.md"]
---

# 源文件摘要

本文报道了谷歌发布基于 Gemini 3 技术的开源模型家族 [[Gemma 4]]。该系列包含四个尺寸（E2B, E4B, 26B MoE, 31B Dense），全面采用 [[Apache 2.0]] 协议，支持全免费商用。

## 核心要点

- **性能突破**：31B Dense 模型在竞技场中击败了参数量大 10-20 倍的竞品（如 Qwen3.5-397B 和 DeepSeek v3.2-671B）。
- **端侧多模态**：E2B 和 E4B 模型专为手机和 IoT 设备设计，支持离线处理语音和视频，实现了“手机养虾”级别的极低功耗运行。
- **原生 Agent 支持**：全系列模型内置函数调用、结构化 JSON 输出和系统指令支持，无需额外适配即可构建智能体。
- **开源策略转变**：谷歌放弃自定义协议，全面拥抱 Apache 2.0，消除了商用法律壁垒。
- **科学应用**：耶鲁大学基于 Gemma 开发的 Cell2Sentence-Scale 项目，展示了开源小模型在癌症研究中的潜力。

## 技术细节

- **架构优化**：26B MoE 模型推理时仅激活 3.8B 参数，兼顾速度与性能。
- **硬件合作**：与高通、联发科及 Pixel 手机进行全链路优化，打通芯片到模型的端侧部署。
- **多模态能力**：全系列支持视觉和音频处理，小版本支持原生音频输入，端侧版支持 128K 上下文。