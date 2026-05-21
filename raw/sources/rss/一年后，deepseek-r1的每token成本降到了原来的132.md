---
title: "一年后，DeepSeek-R1的每token成本降到了原来的1/32"
date: 2026-01-09
source: "机器之心"
url: "https://mp.weixin.qq.com/s/NTXWaTvPkta4hfguE4_y3w"
rss_id: "2651011155_2"
---
编辑 | 杜伟、泽南
几天前，DeepSeek 毫无预兆地更新了 R1 论文，将原有的 22 页增加到了现在的 86 页。
新版本充实了更多细节内容，包括首次公开训练全路径，即从冷启动、训练导向 RL、拒绝采样与再微调到全场景对齐 RL 的四阶段 pipeline，以及「Aha Moment」的数据化验证等等。
DeepSeek-R1 是在 2025 年 1 月 20 日发布的开源推理大模型，它拥有 6710 亿参数、单 Token 激活参数为 370 亿，并采用了 MoE 架构，训练效率得到了显著提升。
R1 在去年的推出震动了全球 AI 领域，其高效率的模型架构、训练方法、工程优化和蒸馏方法在之后成为了全行业的趋势。
没想到在不到一年之后的今天，R1 模型的每 token 成本竟已降低了到了 1/32！
今天，英伟达发表了一篇长文博客，展示了其如何在 Blackwell GPU 上通过软硬协同对 DeepSeek-R1 进一步降本增效。
随着 AI 模型智能程度的不断提升，人们开始依托 AI 处理日益复杂的任务。从普通消费者到大型企业，用户与 AI 交互的频率显著增加，这也意味着需要生成的 Token 数量呈指数级增长。为了以最低成本提供这些 Token，AI 平台必须实现极高的每瓦特 Token 吞吐量。
通过在 GPU、CPU、网络、软件、供电及散热方案上的深度协同设计，英伟达持续提升每瓦特 Token 吞吐量，从而有效降低了每百万 Token 的成本。此外，英伟达不断优化其软件栈，从现有平台中挖掘更强的性能潜力。
那么，英伟达是怎样协同利用运行在 Blackwell 架构上的推理软件栈，以实现 DeepSeek-R1 在多种应用场景中的性能增益呢？我们接着往下看。
最新 NVIDIA TensorRT-LLM 软件大幅提升推理性能
NVIDIA GB200 NVL72 是一个多节点液冷机架级扩展系统，适用于高度密集型的工作负载。该系统通过第五代 NVIDIA NVLink 互连技术和 NVLink Switch 芯片连接了 72 个 NVIDIA Blackwell GPU，为机架内的所有芯片提供高达 1800 GB/s 的双向带宽。
这种大规模的「扩展域」（Scale-up Domain）专为稀疏 MoE 架构优化，此类模型在生成 Token 时需要专家之间频繁的数据交换。
Blackwell 架构还加入了对 NVFP4 数据格式的硬件加速。这是英伟达设计的一种 4 位浮点格式，相比其他 FP4 格式能更好地保持精度。此外，解耦服务（Disaggregated Serving）这类优化技术也充分利用了 NVL72 架构和 NVLink Switch 技术。简单来解释一下解耦服务，即在一组 GPU 上执行 Prefill（预填充）操作，在另一组 GPU 上执行 Decode（解码）操作。
这些架构创新使得 NVIDIA GB200 NVL72 在运行 DeepSeek-R1 时，能够提供行业领先的性能。
得益于最新 NVIDIA TensorRT-LLM 软件和 GB200 NVL72 的协同，DeepSeek-R1 在 8K/1K 输入 / 输出序列长度下的 Token 吞吐量大幅提升。
同样地，得益于最新 NVIDIA TensorRT-LLM 软件与 GB200 NVL72 的协同，在 1K/1K 序列长度下，DeepSeek-R1 Token 吞吐量同样大幅提升。
另外，在 8K/1K、1K/1K 两种输入 / 输出序列长度的吞吐量与交互性曲线上，GB200 NVL72 也展现出了领先的单 GPU 吞吐能力。
而 TensorRT-LLM 开源库（用于优化 LLM 推理）的最新增强功能，在同一平台上再次大幅增强了性能。在过去三个月中，每个 Blackwell GPU 的吞吐量提升高达 2.8 倍（这里指的是在 8k/1k 输入 / 输出序列长度下，去年 10 月到今年 1 月的 Token 吞吐量变化）。
这些优化背后的核心技术包括：
扩大 NVIDIA 程序化依赖启动 (PDL) 的应用：降低核函数启动延迟，有助于提升各种交互水平下的吞吐量；
底层核函数优化：更高效地利用 NVIDIA Blackwell Tensor Core；
优化的 All-to-all 通信原语：消除了接收端的额外中间缓冲区。
有业内人士对英伟达放出的一系列图表进行了直观的解读，用一组数据来总结就是，「通过软硬件的深度协同，自 2025 年 1 月以来，英伟达已经将 DeepSeek-R1 (671B) 的吞吐量提升了约 36 倍，这意味着单 Token 的推理成本降低到了约 1/32。」
利用多 token 预测和 NVFP4 技术加速 NVIDIA HGX B200 性能
NVIDIA HGX B200 平台由八个采用第五代 NVLink 互连和 NVLink Switch 连接的 Blackwell GPU 组成，在风冷环境下也能实现强大的 DeepSeek-R1 推理性能。
两项关键技术使 HGX B200 上的 DeepSeek-R1 推理性能大幅提升。第一项技术是使用多 token 预测 (MTP)，它可以显著提高各种交互级别下的吞吐量。在所有三种测试的输入 / 输出序列组合中都观察到了这一现象。
在 HGX B200 平台上，使用 1K/1K 序列长度和聚合服务模式下，FP8（不带 MTP）、FP8（带 MTP）和 NVFP4（带 MTP）的吞吐量与交互性曲线对比。
第二种方法是使用 NVFP4，充分利用 Blackwell GPU 计算能力来提升性能，同时保持精度。
在 HGX B200 平台上，使用 8K/1K 序列长度和聚合服务模式下，FP8（不含 MTP）、FP8（含 MTP）和 NVFP4（含 MTP）的吞吐量与交互性曲线对比。
NVFP4 使用在完整的 NVIDIA 软件栈上（包括 TensorRT-LLM 和 NVIDIA TensorRT 模型优化器），以确保高性能并保持精度。这使得在给定交互级别下能够实现更高的吞吐量，并且在相同的 HGX B200 平台上，可以实现更高的交互级别。
在 HGX B200 平台上，FP8（无 MTP）、FP8（有 MTP）和 NVFP4（有 MTP）的吞吐量与交互性曲线，序列长度分别为 1K 和 8K，并采用聚合服务模式。
英伟达表示，其正在不断提升整个技术堆栈的性能，可以帮助用户基于现有硬件产品，持续提升大语言模型的工作负载效率，提升各种模型的 token 吞吐量。
博客地址：
https://developer.nvidia.com/blog/delivering-massive-performance-leaps-for-mixture-of-experts-inference-on-nvidia-blackwell/
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com