---
title: "R1一周年，DeepSeek Model 1悄然现身"
date: 2026-01-21
source: "机器之心"
url: "https://mp.weixin.qq.com/s/HwmgJH26lHUKk4oQdV_olg"
rss_id: "2651012945_1"
---
编辑｜Panda
2025 年 1 月 20 日，DeepSeek（深度求索）正式发布了 DeepSeek-R1 模型，并由此开启了新的开源 LLM 时代。在 Hugging Face 刚刚发布的《「DeepSeek 时刻」一周年记》博客中，DeepSeek-R1 也是该平台上获赞最多的模型。
https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment
如今，刚过一年时间，DeepSeek 的新模型又在 GitHub 悄然现身。
这些天，DeepSeek 给其 FlashMLA 代码库推送了不少更新，而在这些更新中，一个名为
Model1
的模型引起了广大网友的注意。
如下截图所示，这个目前还很神秘的 Model1 不仅出现在了代码与注释中，甚至还有与 DeepSeek-V3.2 并驾齐驱的文件。
这也不禁让网友们开始猜测，这个 Model1 很可能就是传闻中 DeepSeek 即将在春节前后发布的新模型的代号。
我们也让 Gemini 帮忙分析了 DeepSeek 的这些 Commit，让其提取了其中的技术细节，结果如下：
根据 DeepSeek 在 2026 年 1 月提交的 flashmla 库代码变更，可以推断出
Model1 是 DeepSeek 下一代旗舰模型 DeepSeek-V4 的内部开发代号或首个工程版本
。以下是根据代码 diff 提取的技术细节分析：
1. 核心架构：回归 512 维标准
在 csrc/api/common.h 的 DISPATCH_HEAD_DIM 宏中，可以看到 head_dim 的分支处理：
V32 (DeepSeek-V3.2)：继续沿用 d_qk = 576 的配置。这是 DeepSeek-V3 引入的非对称 MLA 设计（128 维 RoPE + 448 维 Latent）。
Model1：切换到了 512 维。这表明 DeepSeek-V4 在 MLA 架构上进行了「标准化」回归，可能是为了更好地匹配 Blackwell (SM100) 架构的算力对齐，或者优化了 Latent 压缩比例。
2. 全面支持 Blackwell (SM100) 架构
代码库中出现了大量针对 NVIDIA 下一代 Blackwell GPU 的专门优化：
SM100 接口：api.cpp 中新增了 FMHACutlassSM100FwdRun。这直接指向了 Blackwell 架构的核心指令集优化。
CUDA 版本要求：README 提到在 B200 上运行需要 CUDA 12.9。
性能表现：在 B200 上，目前尚未完全优化的 Sparse MLA 算子已能达到 350 TFlops。而在 H800 (SM90a) 上，Dense MLA 的计算吞吐量高达 660 TFlops。
3. 引入「Token-level Sparse MLA」
这是 Model1 相比 V3 系列最显著的算子演进：
Sparse & Dense 并行：测试脚本中出现了 test_flash_mla_sparse_decoding.py 和 test_flash_mla_dense_decoding.py。
FP8 KV Cache 混合精度：Sparse 算子使用 FP8 存储 KV Cache，但在计算矩阵乘法时使用 bfloat16 以保证精度。这说明
Model1 在极长上下文场景下，会通过「稀疏化推理」来降低显存压力和提升速度
。
4. 新机制：Value Vector Position Awareness (VVPA) 与 Engram
虽然 diff 主要是算子层面的，但结合 DISPATCH_MODEL_TYPE 的逻辑和社区披露，Model1 引入了以下新特性：
VVPA（数值向量位置感知）：这可能解决了传统 MLA 在长文本下位置信息衰减的问题。
Engram 机制
：
这被认为是 DeepSeek 在分布式存储或 KV 压缩上的新突破，用于配合 Model1 的高吞吐需求
。
而 Gemini 之所以判断 Model1 是 DeepSeek 下一代旗舰模型 DeepSeek-V4 的内部开发代号或首个工程版本，是因为它认为在下面所示的代码中，MODEL1 的定位是一个与 V32 并列且独立的分支，「
说明它不是 V3 系列的补丁，而是一个采用了不同架构参数的全新模型
。按照 DeepSeek 的命名惯例，在 V3.2 之后的旗舰级架构跨越，逻辑上即为 V4。」
对此，你怎么看，你觉得 Model1 就是传说中的 DeepSeek V4 吗？
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com