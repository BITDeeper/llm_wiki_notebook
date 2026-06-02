---
type: source
title: "MiniMax M3来了！"
created: 2026-06-01
updated: 2026-06-01
tags: [minimax, 大模型, 开源, 多模态, 稀疏注意力, agentic]
related: [minimax-m3, minimax, minimax-code, msa-稀疏注意力, frontier-三件套]
sources: ["minimax-m3来了！.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/fkFOI66EqYdki6kBire0yw"
venue: 机器之心
---
# MiniMax M3来了！

机器之心发布的 MiniMax M3 模型深度评测报道。文章首次提出"Frontier三件套"概念——前沿Coding/Agentic能力、百万token级长上下文窗口、原生多模态——并验证 M3 是首个同时具备这三项能力的开源模型和国产模型。

报道包含三个层面的内容：
1. **基准数据**：SWE-Bench Pro 59.0%（超GPT-5.5和Gemini 3.1 Pro），Claw-Eval排名第一，OmniDocBench超Gemini 3.1 Pro。
2. **编辑团队实测**：Token Plan比价工具构建、猫主题音乐播放器、40分钟Karpathy演讲视频转5000字报道。
3. **技术解读**：MSA稀疏注意力架构、交错数据训练发现、交互式用户模拟器框架。

关键技术亮点包括M3在CUDA算子优化测试中展现的"坚持探索"行为（147次提交，第145次找到最优解，硬件峰值利用率从7.6%推至71.3%），以及MSA在1M上下文下每token计算量仅为上代1/20的效率突破。