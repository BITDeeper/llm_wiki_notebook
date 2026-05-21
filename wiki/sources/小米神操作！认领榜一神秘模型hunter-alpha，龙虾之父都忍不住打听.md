---
type: source
title: "小米神操作！认领榜一神秘模型Hunter Alpha，龙虾之父都忍不住打听"
tags: [小米, mimo-v2, hunter-alpha, openrouter, 大模型发布]
related: [小米, mimo-v2-pro, hunter-alpha, mimo-v2-omni, mimo-v2-tts, arl-tangram, openclaw, gemini]
created: 2026-03-19
updated: 2026-03-19
authors: [克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/r2kh519DLikp_Kwmbf8DgQ"
venue: "量子位"
sources: ["小米神操作！认领榜一神秘模型hunter-alpha，龙虾之父都忍不住打听.md"]
---

# 小米神操作！认领榜一神秘模型 Hunter Alpha，龙虾之父都忍不住打听

## 摘要
本文报道了小米正式发布 MiMo-V2 系列模型（Pro、Omni、TTS），并揭晓此前霸榜 OpenRouter 的神秘模型 "Hunter Alpha" 即为 [[mimo-v2-pro]]。文章详细介绍了该模型的万亿参数规模、混合注意力机制优化、与北京大学联合研发的 [[arl-tangram]] 资源管理系统，以及其在代码生成和智能体任务中的实战表现。

## 核心要点

### MiMo-V2-Pro：Hunter Alpha 的真身
- **身份确认**：此前在 OpenRouter 上代号为 "Hunter Alpha" 的神秘模型确认为 [[小米]] 的 [[mimo-v2-pro]]。
- **规模与性能**：总参数量 1T，激活参数 42B，支持 1M 上下文。在 Artificial Analysis 评测中获全球第八、国产第二。
- **架构优化**：继承 [[混合注意力机制]]，将混合比例从 5:1 提升至 7:1，并搭配 [[mtp-多token预测]] 层以提升推理速度。
- **实战能力**：在 PinchBench (84.0) 和 ClawEval (61.5) 上超越 [[gemini]] 3 Pro，逼近 Claude Opus 4.6。能直接生成 Three.js 3D 塔防游戏代码。

### MiMo-V2-Omni：全模态融合
- **特性**：将图像、视频、音频编码器融合进单一主干网络，实现 [[全模态融合]]。
- **应用**：作为自动驾驶视觉大脑预测风险，或作为浏览器智能体自主完成比价购物。

### MiMo-V2-TTS：情感化语音
- **特性**：专为智能体设计，支持通过自然语言精确控制音色、情绪及非语言声音（如咳嗽、笑声）。

### 工程与成本优化
- **ARL-Tangram**：与 [[北京大学]] 联合研发的统一资源管理系统，解决了异构资源约束问题。
- **成效**：将平均动作完成时间提升 4.3 分位，算力成本与外部资源消耗降低 71.2%。

### 行业反响
- **盲测表现**：在 OpenRouter 上总调用量突破 1T Token，其中 [[openclaw]] 贡献了 675B Token。
- **外界猜测**：在揭晓前，曾被误认为是 OpenAI 或 DeepSeek 的产品，甚至引发了 "龙虾之父" [[peter-steinberger]] 的公开询问。

## 相关条目
- [[小米]] — 开发者，展示了其在大模型领域的深厚积累。
- [[hunter-alpha]] — MiMo-V2-Pro 的测试代号。
- [[arl-tangram]] — 关键的资源管理技术支撑。
- [[真实世界智能体工作流]] — MiMo-V2-Pro 的核心设计理念。