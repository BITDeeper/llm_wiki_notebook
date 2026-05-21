---
title: "DeepSeek悄悄更新：Mega MoE、FP4 Indexer来了"
date: 2026-04-17
source: "机器之心"
url: "https://mp.weixin.qq.com/s/iOsesC7c1KtUIsmR-CvfeQ"
rss_id: "2651028221_2"
---
机器之心编辑部
昨天下午，沉寂许久的 DeepSeek 又有新动作了！
不过正如 DeepSeek 自己在 PR 中强调的，和模型没关系，更新了一下 DeepGEMM 代码库。
不过，此次更新，我们看到了一个新东西：
M
eg
a MoE
。
链接：https://github.com/deepseek-ai/DeepGEMM/pull/304
Mega MoE 项目贡献者来自 DeepSeek 基础设施团队的 Chenggang Zhao 等人。
Mega MoE 是什么？
如何理解 Mega MoE？先来看看 X 网友思维怪怪的解读：
来源：https://x.com/0xLogicrw/status/2044720884066451645
简单来说，Mega MoE 干的事情是
把原本支离破碎的一整套 MoE 计算流程，揉成了一坨，一次性在 GPU 上跑完
。
过去的 MoE，有点像一个被拆成很多工位的流水线。token 先被分发（dispatch）到不同专家，然后做一层线性变换，再过激活函数（SwiGLU），再来一层线性，最后再把结果拼回去。听起来没问题，但现实是，每一步都要单独起一个 kernel，中间还夹杂着 GPU 之间的数据通信。
于是你会看到一种很典型的低效：算一会儿，等一会儿；传一会儿，再算一会儿。
Mega MoE 想做的是把这条流水线直接焊死：它把 dispatch、两层线性、SwiGLU、combine 这些步骤全部 fuse 到一个 mega-kernel 里。更关键的是，它不只是「合并步骤」，还在做一件更狠的事情：
让数据通信和计算同时发生
。
也就是说，一边在 Tensor Core 上算，一边在 NVLink 上传，不再是你等我、我等你。
此做法的影响很直接：GPU 不再频繁停顿，利用率更高，尤其是在多卡、大规模 MoE 场景下，这种优化能被直接感受到。有点像把原来一群人在接力搬砖，变成了一台连续运转的传送带。
当然，DeepSeek 这次也没打算只做一个「更快的 kernel」。你能明显感觉到，他们是在往一个方向死磕：
把 MoE 的效率压到极限
。
比如他们开始尝试 FP8 × FP4 这样的组合精度，还搞了一个 FP4 的 indexer，用在 MQA logits 上。这种操作基本是在逼近「还能不能再省一点算力」的边界。再加上一些 GEMM 的重构、JIT 编译加速，似乎是想要把 DeepSeek 的 AI 打磨得更加强劲。
还有一个细节挺有意思：他们明确说，Mega MoE 还在开发中，性能数据「之后再说」。看起来，这种级别的优化，往往不是一版代码就能定型的，而是要在不同规模、不同拓扑、不同 workload 下反复调。现在放出来，更像是在给社区一个信号：方向已经定了，我们开始往这条路狂奔了。
在此基础上，DeepSeek 也对 DeepGEMM 的描述进行了一些调整：
DeepGEMM 是一个统一的高性能 Tensor Core 内核库，将现代大语言模型的关键计算原语整合在一起，包括 GEMM（FP8、FP4、BF16）、具备通信重叠的融合 MoE（Mega MoE）、用于 lightning indexer 的 MQA 打分、HyperConnection（HC）等，全部汇聚到一个统一且一致的 CUDA 代码库中。所有内核通过一个轻量级的即时编译（JIT）模块在运行时编译，安装过程中无需进行 CUDA 编译。
所以如果一定要给这次更新一个定位，大概可以这么说：
这是一次基础设施层的重构尝试
。DeepSeek 正在把 MoE 从一种「理论上很美好，但工程上很折腾」的架构，往「可以被大规模、高效率跑起来」的方向推进。
而 Mega MoE，很可能只是第一块拼图；就是不知道这块拼图是不是 DeepSeek-V4 的一部分？
根据 X 网友 St4r 的解读，这也可能暗示了 DeepSeek 所使用的训练卡还是包含了英伟达 AI 加速卡，还是最新、最顶级的 B 系列（而非几个月以来一直传言的，使用国产 AI 训练卡）。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com