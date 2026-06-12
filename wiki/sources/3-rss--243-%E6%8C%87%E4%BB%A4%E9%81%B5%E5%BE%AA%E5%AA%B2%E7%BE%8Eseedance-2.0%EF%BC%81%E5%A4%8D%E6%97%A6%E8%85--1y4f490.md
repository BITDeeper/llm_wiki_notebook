---
type: source
title: "指令遵循媲美Seedance 2.0！复旦腾讯联合提出Baton，多说话人场景M-WER暴降76%"
authors: [Baton团队, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/Jb_-p_VABt69aDsC09wSfw"
venue: 量子位（QbitAI）
tags: [联合视频音频生成, 多模态生成, 语义蓝图, 扩散模型, DiT, 复旦大学, 腾讯混元]
related: [baton, 联合视频-音频生成, 语义蓝图, 复旦大学, 腾讯混元]
created: 2026-06-11
updated: 2026-06-11
sources: ["rss/指令遵循媲美seedance-2.0！复旦腾讯联合提出baton，多说话人场景m-wer暴降76%.md"]
---
# 指令遵循媲美Seedance 2.0！复旦腾讯联合提出Baton，多说话人场景M-WER暴降76%

## 摘要

本文报道了[[复旦大学]]与[[腾讯混元]]联合提出的[[baton|Baton]]框架——首个基于显式[[语义蓝图]]引导的[[联合视频-音频生成]]框架。核心思路是将语义推理与内容生成显式解耦：先用可训练MLLM（[[va-planner|VA-Planner]]）完成跨模态语义规划，生成视频和音频各自对应的Planned Tokens作为语义蓝图，再注入扩散模型指导联合生成。

## 核心贡献

1. **语义蓝图机制**：将语义推理与内容生成显式解耦，从根本上解决[[跨模态失配]]问题
2. **VA-Planner**：用可训练MLLM进行跨模态语义推理，联合预测模态特定但相互对齐的planned tokens
3. **[[双语义对齐塔]]**：将planned tokens从MLLM语言空间映射到感知编码器连续特征空间
4. **[[rs-rope|RS-RoPE]]**：统一planned tokens与diffusion latents之间位置编码空间

## 关键实验结果

- **Sem100基准**（复杂语义场景）vs LTX-2：
  - 提示词遵循准确率（P-Acc）提升32%
  - 多说话人词错误率（M-WER）提升76%
  - 去同步（DeSync）提升30%
- **复杂指令遵循**：超越Kling 3.0，媲美Seedance 2.0和Wan 2.7
- **Verse-Bench**（简单单事件场景）：与LTX-2结果相当

## 局限性

- 视觉质量和音频美感仍落后于闭源商业模型
- Sem100为内部收集的100条测试样例，样本量较小

## 技术细节

- **三阶段训练**：VA-Planner预训练（Qwen3初始化）→ DiT适配（Ovi初始化）→ 联合微调
- **DiT架构**：继承Ovi的双分支架构，分别负责视频与音频的生成与去噪
- **感知编码器**：视频采用SigLip2，音频采用WavTokenizer
- **论文编号**：arXiv 2605.25195

## 来源信息

- 报道媒体：[[量子位]]（QbitAI）
- 发表日期：2026年6月11日
- 项目主页：https://francis-rings.github.io/Baton/