---
title: "DeepSeek-V3.2巨「吃」Token，竟然是被GRPO背刺了"
date: 2025-12-04
source: "机器之心"
url: "https://mp.weixin.qq.com/s/4gkj0BYruEysQLSs-w24bw"
rss_id: "2651005585_1"
---
机器之心报道
编辑：冷猫、陈陈
DeepSeek 一发布模型，总会引起业内的高度关注与广泛讨论，但也不可避免的暴露出一些小 Bug。
比如老外用英文询问，它却在思考过程中切回「
神秘的东方文字
」。当然，DeepSeek 模型对汉字「情有独钟」的情况早已出现，「极」字 Bug 就是典型例子。
而这一次，随着新模型 DeepSeek-V3.2 的发布，大家又发现了 DeepSeek 需要优化的地方：其长思考版本（Speciale）暴露出一些 Token 使用效率不佳的问题。
根据多位研究者反馈，DeepSeek-V3.2 Speciale 在处理复杂任务时出现明显的 Token 消耗异常。具体表现为：
在相同任务上，Gemini 只消耗 2 万 Token，DeepSeek-V3.2 Speciale 却用了 7.7 万，也就是说，它需要 3 倍以上的 Token 才能输出类似质量的结果。
另外，Speciale 版本出现输出内容又长又啰嗦的问题，但最终仍然错的情况，这并不是新问题，而是 GRPO 算法本身的固有缺陷。
来源：https://x.com/Compute_King/status/1996179050012794968
实际上，DeepSeek-V3.2 在 Token 消耗方面的异常表现，已经被不少用户与研究者观察到。有社区网友指出，Speciale 版本的确具备极强的推理能力，但在实际使用中 Token 消耗速度如喝水般迅速，显著高于同类模型。他们评价，如果 DeepSeek-V3.2 Speciale 的生成速度能够从当前的大约 30 tokens/s 提升至 100 tokens/s 左右，那么其综合可用性和使用体验都将获得大幅改善。
独立分析 AI 模型和托管服务提供商 Artificial Analysis 则表示：「DeepSeek V3.2 在推理模式下比上一代更啰嗦，在运行 AAII（Artificial Analysis Intelligence Index）基准测试时，输出 Token 消耗明显增加，达 8600 万，而上一版本仅为 6200 万。」
来源：https://x.com/ArtificialAnlys/status/1996110264102781332
「即使是和 Grok 和 Mistral 对比，也是明显看到 DeepSeek V3.2 输出 Token 的延迟。」
来源：https://x.com/kurtqian/status/1995728391115362529
这种情况，DeepSeek 也在技术报告中很坦诚的承认并且做出了数据对比。
报告中提及，DeepSeek-V3.2-Speciale 的 token 使用效率明显低于 Gemini-3.0-Pro。
为了降低部署成本并减少推理时延，官方版 DeepSeek-V3.2 的训练过程中施加了更为严格的 token 约束，以期在性能与成本之间取得更优的权衡。DeepSeek 研究者们表示，token 效率仍将是未来一个至关重要的研究方向。
DeepSeek 技术报告：https://modelscope.cn/models/deepseek-ai/DeepSeek-V3.2/resolve/master/assets/paper.pdf
输出内容又长又啰嗦，GRPO 算法存在缺陷
GRPO 算法随着 DeepSeek 的诞生而成为强化学习的黄金范式，相信读者们早就不陌生了。
我们对 GRPO 的方法基本原理曾有过系统的介绍，建议读者参考我们的科普文章。
科普向：一文解构大模型后训练，GRPO 和它的继任者们的前世今生
早在今年三月份公开的论文《Understanding R1-Zero-Like Training: A Critical Perspective》中，来自 Sea AI Lab 和 NUS 等的研究者们，揭示了 GRPO 算法的两大问题，认为 GRPO 会导致模型有偏置的优化。
论文标题：Understanding R1-Zero-Like Training: A Critical Perspective
论文链接：https://arxiv.org/pdf/2503.20783
Github 链接：https://github.com/sail-sg/understand-r1-zero
在 DeepSeek-R1-Zero 的训练过程中，就已有模型的响应长度在整个训练阶段持续增长的现象，而在 DeepSeek-V3.2 Speciale 中仍然存在。
以下公式是经典的 GRPO 损失函数，论文作者很贴心地把影响优化过程的部分标红了：
GRPO 的目标函数结构中存在了：
1. 长度偏置（Length Bias）
该偏置来源于目标函数中对每个序列引入的归一化因子：
。
当优势函数为正值时（表示对应的响应是正确的）：较短的响应会产生更大的梯度更新幅度，从而使策略在优化过程中更倾向于生成简短的正确答案。
当优势函数为负值时（表示对应的响应是错误的）：较长的错误响应所受到的惩罚反而更弱，从而导致策略在错误样本中偏向于生成更长的回答。
这解释了：即便不引入任何「显式鼓励长推理链」的机制，GRPO 训练出的模型也会自然呈现出响应长度不断增长的趋势，躲避惩罚，生成又错又长的回复。
2. 难度偏置（Difficulty Bias）
该偏置来源于优势函数中对优势函数进行标准化时所使用的分母：
这会导致当某些问题的回报标准差较小，尤其是题目过于困难，几乎所有回报都为 0 的时候，在策略更新过程中将被赋予更大的梯度权重，忽视了那些难度适中的实际问题。
我们从 DeepSeek-V3.2 的技术报告中发现，难度偏置已经被优化了，而长度偏置仍然被保留。这或许是 DeepSeek-V3.2 Speciale 超级耗 token 的罪魁祸首。
上述「长度偏置」问题其实由来已久，在 GRPO 的前身 PPO 方法中就早已存在。但是，在 PPO 的损失函数公式中其实并没有「长度偏置」这一项，而在 PPO 的大多开源实现中，却大都加入了这一项。
作者推测，这种不一致性可能源自预训练阶段：
所有 token 会被打包进一个固定长度的上下文窗口，通过对上下文长度进行归一化可以有效提升数值稳定性。
但在 RL 微调阶段保持相同的实现方式会，按照响应长度对损失进行归一化。但响应长度不是常数且在不同样本之间变化剧烈，从而无意中引入了一个长度偏置。
由此可见，理论和实际实现之间总有些许的差别。等到 DeepSeek-V4 的上线，这个问题会不会就此解决呢？
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com