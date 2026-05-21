---
title: "刚刚，DeepSeek V4 双版本正式上线！"
date: 2026-04-24
source: "机器之心"
url: "https://mp.weixin.qq.com/s/bRZnEfHaJnJwkP04-5R_vQ"
rss_id: "2651029874_1"
---
机器之心编辑部
终于，全球 AI 圈等待了几个月的 DeepSeek V4，它终于来了！
今天上午，DeepSeek API 文档上线，让我们看到了新版本的「庐山真面目」。
此次，DeepSeek V4 按大小会有两个版本，分别是
Deep
Seek-V4-
Flash 和 DeepSeek-V4-Pro
。上下文长度大家此前已经知道了，是 100 万 tokens。同时，输出长度最大为 384K tokens。
就在刚刚，DeepSeek 官方正式宣布上线并开源
「DeepSeek-V4 预览版」
。
开源链接：https://huggingface.co/collections/deepseek-ai/deepseek-v4
根据官方的介绍，此次 DeepSeek-V4 在 Agent 能力、世界知识和推理性能上均实现国内与开源领域的领先。
两个版本，V4-Pro 与 V4-Flash 的最大上下文长度均为 1M，且同时支持
「非思考模式」与「思考模式」
，其中思考模式支持 reasoning_effort 参数设置思考强度（high/max）。对于复杂的 Agent 场景建议使用思考模式，并设置强度为 「max」。
DeepSeek-V4 发布同时，也公布了其详细的技术报告。
技术报告链接：https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf
该系列包括 DeepSeek-V4-Pro（1.6T 参数，49B 激活）和 DeepSeek-V4-Flash（284B 参数，13B 激活），两者均支持一百万Tokens的上下文长度，旨在提升超长上下文场景下的性能。该系列的关键创新包括：
1.
混合
注意力
架构
：结合了 压缩稀疏注意力（CSA） 和 高度压缩注意力（HCA），这一新方法显著减少了计算复杂度，提升了长上下文处理的效率，特别适用于涉及数百万Tokens的任务。
2.
流形约束超连接（mHC）
：增强了传统残差连接，提高了信号在层之间传播的稳定性。
3.
Muon 优化器
：设计用于加速收敛和提高训练稳定性，Muon 优化器显著提升了训练过程中的模型性能。
4.
训练和后训练管道
：该模型在大量数据集（DeepSeek-V4-Flash 使用 32T Tokens，DeepSeek-V4-Pro 使用 33T Tokens）上进行了预训练，随后通过专门的训练和策略蒸馏进一步优化，确保它们在推理、编程和世界知识任务中表现出色。
5.
长上下文效率
：这些模型在推理 FLOPs 和 KV 缓存大小 上都实现了显著减少，使得处理一百万Tokens 成为可能。例如，DeepSeek-V4-Pro 在与前代模型 DeepSeek-V3 的对比中，FLOPs 降低了 73%，KV 缓存大小减少了 90%。
6.
评估结果
：DeepSeek-V4-Pro-Max 版本在推理和知识任务上设定了新基准，超越了之前的开源模型，并接近一些专有模型的水平。DeepSeek-V4-Flash-Max 在更多高效的参数规模下，提供了相当的推理性能。
总的来说，DeepSeek-V4 系列在大规模语言模型的效率上迈出了重要一步，能够有效处理超长序列，从而为复杂的长时间跨度任务开辟了新的可能性。
在另一边，大家一直在关心 DeepSeek V4 是否使用国产算力，结果也终于揭晓。之前就有报道 DeepSeek V4 新模型，将采用华为技术公司设计的最新芯片，也是真的。
我们发现，昇腾 CANN 将在今天下午 4 点直播 DeepSeek V4
在昇腾平台的首发
。
值得一提的是，
寒武纪
在软硬一体生态中，已经完成基于 vLLM 推理框架完成对 285B DeepSeek-V4-flash 和 1.6T DeepSeek-V4-pro 的
Day 0 适配
，适配代码已开源到 GitHub 社区。
DeepSeek 官方在发布推文最后说道：「不诱于誉，不恐于诽，率道而行，端然正己。」出自《荀子・非十二子》，是一种超然，任东西南北风的态度。
剩下的，就是大家亲自体验到 DeepSeek-V4 了！
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com