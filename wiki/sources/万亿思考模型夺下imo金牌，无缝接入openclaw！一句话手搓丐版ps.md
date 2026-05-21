---
type: source
title: "万亿思考模型夺下IMO金牌，无缝接入OpenClaw！一句话手搓丐版PS"
tags: [ai-models, open-source, ant-group, reasoning, agent-framework]
related: [ring-2-5-1t, ling-2-5, openclaw, claude-code, 蚂蚁灵波]
created: 2026-02-15
updated: 2026-02-15
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/WmKY9iYP7v8cjZZfWtDtEw"
venue: "新智元"
sources: ["万亿思考模型夺下imo金牌，无缝接入openclaw！一句话手搓丐版ps.md"]
---

# 万亿思考模型夺下IMO金牌，无缝接入OpenClaw！一句话手搓丐版PS

## 摘要
本文报道了蚂蚁团队开源的全球首个万亿级混合线性架构“思考模型”——[[Ring-2.5-1T]]。该模型在数学推理（IMO 2025 金牌）、代码生成（一句话手搓 Photoshop）和智能体任务执行上实现了开源 SOTA。其核心突破在于底层 [[Ling 2.5]] 架构，通过 [[混合线性注意力]]（MLA + Lightning Linear）和 [[密集奖励]] 机制，解决了万亿模型推理慢、成本高的问题。

## 核心要点

### 1. 模型性能与基准
- **数学竞赛**：在 IMO 2025 中以 35 分斩获金牌；在中国 CMO 2025 中取得 105 分，远超国家集训队线。
- **基准测试**：在 LiveCodeBench-v6、Gaia2-search 等基准上超越 Claude-Opus-4.5 和 Gemini-3.0-Pro。
- **高阶推理**：通过了“洗车”图灵测试（识别服务对象是车而非人）和地理陷阱题（识别井盖防跌入功能）。

### 2. 实战案例
- **代码迁移**：在 [[Claude Code]] 环境下，将 JSX 文件完整迁移为本地 APP，全程无需人工干预代码细节。
- **应用生成**：仅用一句话指令（“简洁有科技感”），生成了包含 9 种工具（裁剪、画笔、拼接等）的简易版 Photoshop（1572 行代码），并打包为 DMG 安装包。
- **教育工具**：生成了“光的折射”互动教学网页和英文单词卡，展示了跨学科内容生成能力。

### 3. 技术架构：Ling 2.5
- **混合线性注意力**：采用 1:7 的 MLA（多头线性注意力）与 Lightning Linear 混合架构。
- **效率提升**：在超 32K 生成长度下，访存规模降低超 10 倍，生成吞吐量提升 3 倍以上。
- **训练机制**：引入 [[密集奖励]]（Dense Reward），对思考过程的每一步逻辑进行严密控制，显著减少逻辑漏洞。

### 4. 生态兼容性
- **无缝接入**：全面兼容 [[OpenClaw]] 和 [[Claude Code]] 等主流智能体框架。
- **通用智能体基座**：定位为“通用智能体时代”的底层基础设施，强调长程规划与工具调用能力。

## 评价与意义
文章将 Ring-2.5-1T 的开源描述为对闭源巨头的“降维打击”，标志着开源社区在万亿参数规模和深度推理能力上取得了里程碑式突破。其“想得深”且“动得快”的特性，解决了传统 Transformer 在长文本和复杂任务中的计算瓶颈。

## 相关链接
- Hugging Face: [inclusionAI/Ring-2.5-1T](https://huggingface.co/inclusionAI/Ring-2.5-1T)
- ModelScope: [inclusionAI/Ring-2.5-1T](https://modelscope.cn/models/inclusionAI/Ring-2.5-1T)