---
title: "DeepSeek V4震撼发布！实现全球开源领先"
date: 2026-04-24
source: "新智元"
url: "https://mp.weixin.qq.com/s/s1jhzL6DEY65nNSk4QIyoQ"
rss_id: "2652694874_1"
---
新智元报道
编辑：Aeneas 好困
【新智元导读】
让全球从春节苦等到四月的DeepSeek V4，终于来了！
就在刚刚，DeepSeek V4真的来了！
今天，那个曾经以一己之力打破闭源模型霸权的DeepSeek，带着
DeepSeek-V4系列预览版
，向全球开发者正式宣告——
百万级上下文（1M Context）的平民化时代，以及开源Agent能力、世界知识和推理性能上的新巅峰，已经到来。
DeepSeek V4，再度实现国内与开源领域的领先。
V4的技术报告，已经同步发布。
论文地址：https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf
DeepSeek-V4-Pro
性能比肩顶级闭源模型
DeepSeek-V4 系列包含两个版本：拥有1.6T总参数、49B激活参数的性能怪兽
DeepSeek-V4-Pro
，以及专为高效率、经济性设计的284B总参数、13B激活参数的
DeepSeek-V4-Flash
。
可以说，DeepSeek-V4-Pro已经达到了开源模型的新巅峰，对标全球顶尖闭源水准。
首先，V4-Pro在Agent能力上实现了跨越式突破
，其Agentic Coding水平稳居开源界首位。
实测反馈显示，其编码体验已超越Sonnet 4.5，交付质量直追Opus 4.6（非思考模式），目前已成为公司内部Agent编程的首选模型。
其次，它具备深厚的世界知识储备。
在知识测评维度，V4-Pro显著领先同类开源产品，与闭源标杆Gemini-Pro-3.1的差距已缩减至极小范围。
另外，它还有顶尖的逻辑推理表现。
在数学、STEM及高难度竞赛代码等硬核领域，V4-Pro的表现不仅冠绝开源社区，更具备了挑战世界最强闭源模型的实战竞争力。
支撑这两个模型傲视群雄的，是其底层技术的「三大神技」：
混合注意力机制（CSA + HCA）
DeepSeek-V4 并没有盲目增加硬件投入，而是开创性地设计了混合注意力架构。
压缩稀疏注意力（CSA）对KV缓存进行token维度的压缩并结合DSA稀疏注意力；重压缩注意力（HCA）则进行更极致的压缩以维持稠密计算。
这种「长短结合」的策略，让模型在处理百万字上下文时，计算量和显存需求大幅降低。
流形约束超连接（mHC）
为了提升信号传播的稳定性并增强模型表达力，V4引入了mHC结构，升级了传统的残差连接。这让模型在深层网络中依然能保持卓越的建模能力。
Muon 优化器
引入全新的Muon优化器，让训练过程不仅收敛更快，且更加稳定。
正是这些结构创新，让DeepSeek-V4在推理效率上实现了质的飞跃。
在100万token上下文的极端场景下，
DeepSeek-V4-Pro的单token推理计算量仅为前代的 27%，KV缓存占用更是缩减到了惊
人的10%
。
DeepSeek-V4-Flash
极致效能与性价比的完美平衡
相比于Pro版本，Flash版则是更快捷高效的经济之选。
尽管在世界知识的深度上略逊于Pro版本，但
DeepSeek-V4-Flash
保留了与之接近的逻辑推理水平。
受益于更精简的参数规模与激活机制，它能为用户提供响应更快、成本更低的API接入方案。
在处理基础 Agent 任务时，V4-Flash的表现与Pro版不相上下，但在应对极端复杂任务时仍存在进阶空间。
架构革新
重塑长上下文效率
DeepSeek-V4引入了革命性的注意力机制，通过在Token维度进行高效压缩，并结合 DSA稀疏注意力（DeepSeek Sparse Attention） 技术，实现了全球顶尖的长文本处理能力。
这种创新大幅削减了对计算资源与显存的依赖。
即日起，1M（100万 tokens）超长上下文将成为DeepSeek官方服务的标准配置。
DeepSeek-V4和DeepSeek-V3.2的计算量和显存容量随上下文长度的变化
Agent能力深度优化
DeepSeek-V4 针对Claude Code、OpenClaw、OpenCode、CodeBuddy等主流 Agent生态进行了深度适配。
在代码编写与自动化文档生成等场景下，其产出效率显著提升。
V4-Pro在特定Agent框架下自动生成的PPT页面实例
（上下滑动查看）
API全面升级，旧版模型倒计时
对于开发者而言，好消息是：
API
已经同步上线！
只需简单修改 model_name 即可接入这两款新旗舰：
追求性能：deepseek-v4-pro
追求效率：deepseek-v4-flash
特别提醒：
原有的 deepseek-chat 和 deepseek-reasoner 模型名将作为V4的过渡别名（分别指向 V4-Flash 的非思考与思考模式），但这两个旧名称将于
2026年7月24日
正式停用。
论文解读
两种压缩，一套组合拳
V4-Pro中，CSA的压缩率为4，每4个token的KV缓存合并成一个条目。
压缩之后再通过Lightning Indexer对压缩后的KV条目打分，每个query token只选top-1024个条目做注意力计算。索引计算用FP4精度，超长上下文下开销极低。
HCA走另一条路。压缩率拉到128，比CSA激进得多，但不做稀疏选择，所有压缩后的KV条目都参与计算。极致压缩换全局视野。
两种机制交替堆叠，CSA精细检索，HCA全局感知，再加上每层128 token的滑动窗口捕捉局部依赖，三条路径协同。
算一笔账。
以常规BF16 GQA8（头维度128）作为基线，V4在100万token下的KV缓存只有基线的约2%。KV条目还采用混合精度存储，RoPE维度BF16，其余FP8，体积比纯BF16再砍一半。
推理端则把压缩KV和滑动窗口KV分开管理，支持磁盘级缓存存储，避免共享前缀的重复prefill。
mHC，6.7%的代价换来的稳定性
标准HC扩展残差流宽度来增强信息传递，但多层堆叠时数值会炸。
mHC的做法是把残差映射矩阵约束在双随机矩阵流形（Birkhoff多面体）上，确保谱范数不超过1，信号深层传播不发散。投影通过Sinkhorn-Knopp算法迭代20次实现。
工程代价可控，扩展因子只有4，经过融合kernel和选择性重计算优化后，额外墙钟时间仅6.7%。
训练万亿参数的「土办法」
Muon的核心是对梯度动量做Newton-Schulz正交化，V4用10次混合迭代，前8次快速收敛，后2次精确稳定。
但优化器只是一半的故事。V4报告披露了两个训练稳定性技巧。
Anticipatory Routing，把路由索引的计算和主干网络的更新解耦，用历史参数提前算好路由并缓存。系统在检测到loss spike时自动触发，日常开销可忽略。
SwiGLU Clamping，把SwiGLU线性分量钳制在[-10, 10]，门控上界钳制在10。简单粗暴但有效。
MoE工程上，V4开源了MegaMoE，把通信和计算融合进单个pipeline kernel，通用场景加速1.5到1.73倍，延迟敏感场景最高1.96倍。
专家分训，蒸馏合一
V4用On-Policy Distillation（OPD）替代了V3.2的混合RL。先独立训练数学、代码、Agent等领域专家，再用一个学生模型对十几个专家做全词表logit蒸馏。
工程上的关键突破是，不缓存教师logits（显存放不下），只缓存最后一层隐藏状态，训练时按需重建logits，用TileLang专用kernel加速KL散度计算。
V4还引入了Generative Reward Model（GRM），让actor网络同时充当奖励模型，评判和生成能力联合优化，不再依赖传统标量奖励模型。
后训练阶段同步做了FP4量化感知训练，对MoE专家权重和CSA索引器做FP4量化，且FP4到FP8反量化无损，整个流程复用现有FP8框架。
DeepSeek
再度证实开源的力量
从V3的横空出世到V4的效率革命，DeepSeek始终坚持将最顶级的技术通过开源分享给社区。
DeepSeek-V4的上线，不仅是技术参数的跳跃，更是对「百万长上下文」和「高性能 Agent」这两大未来趋势的有力回应。
它证明了通过架构创新，我们可以在不牺牲性能的前提下，极大降低大模型的门槛。
现在，你可以在官方App或
chat.deepseek.com
立即开启1M上下文的全新体验。
这不仅仅是一个对话框，这是一个能装下整部百科全书、能理解万行代码逻辑的「第二大脑」。
参考资料：
https://huggingface.co/collections/deepseek-ai/deepseek-v4
https://modelscope.cn/collections/deepseek-ai/DeepSeek-V4
https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf
https://api-docs.deepseek.com/zh-cn/guides/thinking_mode
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！