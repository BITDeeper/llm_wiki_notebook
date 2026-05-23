---
type: source
title: "国产GPU组了个开源局，把SGLang等核心开发者都摇来了！"
created: 2026-05-14
updated: 2026-05-14
tags: [国产GPU, 开源生态, SGLang, 摩尔线程, MUSA, 推理框架]
related: [摩尔线程, sglang, musa架构, tilelang, mooncake, 生态坐标之争]
sources: ["国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md"]
authors: [金磊]
year: 2026
url: "https://mp.weixin.qq.com/s/n5-WL5QmYZ2WdsYZdBfwEw"
venue: 量子位
---
# 国产GPU组了个开源局，把SGLang等核心开发者都摇来了！

量子位报道摩尔线程主办的 SGLang × MUSA Meetup 活动。文章核心论点是国产GPU的竞争已从"芯片参数之争"转向"生态坐标之争"。

## 关键内容

- **SGLang 2026 Q2 Roadmap**：BBuf 分享了 DeepSeek V4 全链路优化、jit_kernel 替代、Vibe Coding 落地、多模态升级等规划。SGLang 通过 P/D 分离架构在12个 H100 节点上实现 52.3k 输入 token/s/node。
- **SGLang on MUSA 全链路打通**：R0CKSTAR 展示了从环境构建到 CI 测试的完整链路，主流大模型（DeepSeek、通义千问3.5、GLM-4.5等）可在 MTT S5000 上直接运行。
- **Upstream PR 数据**：截至2026年5月12日，摩尔线程在 SGLang 主线累计提交47个PR，41个已合入。
- **DeepSeek V4 Day-0 适配**：智源肖航通过 FlagOS Triton 算子优化和 SQMMA 张量加速引擎，首 token 延迟降低56.7%，吞吐量提升23%。
- **TileLang**：唐正举展示50行 Python 代码实现 FlashAttention，性能与专家手写 CUDA 一致。
- **Mooncake**：马腾展示 Kimi K2 1T 权重同步从53秒降至7.2秒，多轮对话缓存命中率超90%。

## 核心观点

摩尔线程通过全面融入全球开源生态（Upstream PR模式、三层CUDA兼容栈），将国产GPU推上了大模型推理开源生态的"公共牌桌"。