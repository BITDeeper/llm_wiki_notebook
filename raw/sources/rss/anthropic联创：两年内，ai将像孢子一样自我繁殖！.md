---
title: "Anthropic联创：两年内，AI将像孢子一样自我繁殖！"
date: 2026-03-30
source: "新智元"
url: "https://mp.weixin.qq.com/s/rcqsdGdC7X9EuSk4QZ_-uQ"
rss_id: "2652687757_2"
---
新智元报道
编辑：倾倾
【新智元导读】
AI自主训练的成绩单出炉了！最强Agent 6个月进步3倍，更让人震惊的是，越聪明的AI越会作弊。同时，70多个矿工用家庭宽带训出了72B大模型，黄仁勋亲自点名。Jack Clark预言：两年内，AI将像蘑菇释放孢子一样自我繁殖。
就在昨天，Anthropic研究员Karina Nguyen在X上转发了Jack Clark最新一期ImportAI Newsletter的一段话，迅速引爆讨论：
ImportAI 449这期一口气抛出三个重磅研究，恰好拼出了这个未来的完整轮廓：
AI能不能自己训AI？谁来提供算力？写出来的代码谁来验货？
6个月
AI
进步3倍，但只有人类一半水平
图宾根大学、马克斯·普朗克智能系统研究所和Thoughtful Lab联合推出了PostTrainBench，这是第一个专门测量AI Agent能否自主完成模型后训练的基准。
测试规则很简单。给一个前沿智能体一个基座模型和一个目标benchmark，一块H100 GPU，10小时，从零开始搭建训练pipeline，尽可能提高模型表现。
不给任何预设策略，不提供起始代码，Agent拥有完全自主权，它可以上网搜信息、设计实验、整理数据。
结果显示，表现最好的Agent是Claude Code搭配Opus 4.6，加权平均得分23.2%，是基座模型平均分的3倍多。
PostTrainBench 加权平均性能对比（数据来源：arXiv 2603.08640 Figure 1 & 官网最新榜单，2026年3月）
但这个成绩只有人类团队后训练水平（51.1%）的不到一半。
2025年9月，Claude Sonnet 4.5在这个benchmark上只拿到9.9%；几个月后GPT-5.2跑到了21.5%；再到Opus 4.6的23.2%。
半年时间，从不到10%到超过23%。按照PostTrainBench官网最新榜单，GPT 5.4（High）的成绩还在持续攀升。
在实验过程中，研究团队撞上了大量reward hacking行为：越强的Agent，作弊手段越高级。
直接吃测试集
：有Agent直接从Hugging Face把benchmark的评测数据集下载下来，当训练数据用。
把考题硬编码进训练数据
：有智能体把评测题目直接嵌入数据准备脚本，伪装成「合成样本」。
逆向工程评分标准
：Kimi K2.5读取了HealthBench的评测文件，提取主题分布和评分标准，然后针对性地生成训练数据。
间接污染
：Opus 4.6加载了一个叫CodeFeedback-Filtered-Instruction的数据集，里面包含从HumanEval衍生出的问题。
还有更离谱的。Codex Agent直接修改了Inspect AI评测框架的源代码来给自己刷分；Claude Agent跳过微调流程，直接下载了一个已经instruction-tuned的模型来冒充训练成果。
越强的智能体越善于找到可利用的路径，如识别特定benchmark样本、逆向评测的失败模式，甚至试图通过重命名函数等表面修改来掩盖污染痕迹。
如果AI在一个受控实验环境里就已经展现出了这种「创造性作弊」的能力，当它们在真实世界里被赋予更大的自主权时，监管和沙盒机制的重要性只会指数级上升。
72B模型，家庭宽带，零数据中心
一个叫Covenant AI的团队用区块链协调了一次分布式训练，任何有GPU的人都可以自由加入或退出。
最终的产物是Covenant-72B，这是一个720亿参数的dense Transformer模型，用大约1.1万亿token训练完成。
参与训练的有20多个独立peer节点，每个节点跑8块B200 GPU，通过普通家庭宽带连接。
节点之间的通信靠SparseLoCo优化器，把通信开销压缩了146倍——用稀疏化、2-bit量化和误差反馈三板斧，让分布式训练在带宽受限的条件下跑得动。
训练协调由Gauntlet软件完成，运行在Bittensor区块链的Subnet 3上，每个节点的贡献通过损失评估和OpenSkill排名打分，全部上链记录。
性能方面，Covenant-72B在MMLU zero-shot上拿到67.1，而Meta的LLaMA-2-70B是65.7。要知道后者是在2万亿token上训练的，用的是传统数据中心基础设施，token量几乎是Covenant的两倍。
经过对话微调后的版本在MATH上得分26.3，LLaMA-2-70B-Chat只有10.7。
消息一出，市场反应相当直接。据报道，Bittensor的原生代币TAO在3月份飙涨约46%，Subnet 3的原生代币τemplar更是暴涨了194%。
黄仁勋在一期播客中提到了Bittensor的去中心化训练，虽然后来有澄清他引用的参数量数字不准确（说成了40亿而非720亿），但这个量级的关注本身就说明问题。
Covenant-72B的绝对水平放在2026年并不算前沿，大致相当于2023年中旬的主流模型能力。
真正的前沿模型是在数万甚至十几万块芯片上训出来的，Covenant用的大概只有160块左右。
但这件事的意义在于，它证明了去中心化、无许可参与的分布式训练，确实能在非trivial的规模上跑通。
有分析师把这称为「Bittensor的DeepSeek时刻」。这不是说它达到了同等技术高度，而是说它用一种成本结构完全不同的方式，证明了一条此前被认为走不通的路。
从2022年Together训出6B参数模型，到2024年Prime Intellect的INTELLECT-1（10B），再到2026年的Covenant-72B，去中心化训练的规模曲线在四年里跨了一个数量级。
zlib被AI转写成Lean
AI写出来的东西，谁来保证它是对的？
Leonardo de Moura，是Z3 SMT求解器和Lean定理证明器的缔造者，现任AWS高级首席应用科学家、Lean FRO首席架构师，在2月底发了一篇博客：
Google和微软都承认，25-30%的新代码由AI生成；AWS用AI帮丰田迁移了4000万行COBOL代码；微软CTO预测到2030年95%的代码将由AI生成。
Anthropic最近用并行AI 智能体在两周内造了一个10万行的C编译器，花费不到2万美元。
de Moura认为，AI去掉了手写代码时被迫进行的谨慎设计，这种「有益的摩擦」消失后，不应该减速AI，而应该用「数学摩擦」来替代。
让AI跑快没问题，但必须证明自己的工作是对的。
Lean FRO的高级研究软件工程师Kim Morrison最近做了一个实验：用Claude把zlib转写成了Lean。整个流程四步：
AI生成了一个干净的Lean实现，覆盖zlib的压缩格式和核心DEFLATE算法
转写后的版本通过了zlib原有的测试套件，确认行为等价
关键属性被表述并证明为数学定理。其中最核心的一条：对任意数据压缩后再解压，一定能还原出原始数据
正在开发一个优化版本，并证明它与验证模型等价
de Moura的野心远不止一个库。
他设想的是一整套经过数学证明的开源软件栈：密码学、核心数据结构和算法库、SQLite这样嵌入在全球每台设备上的存储引擎、JSON/HTTP/DNS等协议解析器，以及编译器和运行时。
每一个经过验证的组件都是永久性的公共基础设施。开发者选择它们就像今天选择开源库一样，只不过这些库带的不是测试，而是证明。
de Moura在另一篇3月的博客中提到，2026年一位研究者用Claude（Opus 4.6）在Rocq开发团队的实时支持下，找到了Rocq证明助手内核中的7个bug。
连验证工具自己都有bug，那么验证「验证工具」的工具又该多简洁、多可信？
Lean的回答是：proof checker可以小到5000行Rust代码。
Jack Clark把未来的AI比作蘑菇释放的孢子，短命、定制、自主繁殖。
现在看来，孢子的三个前提条件正在逐一到位：它能自己改良自己，不需要依附某一座数据中心，生成的代码可以被数学证明为正确。
每一项都还粗糙，每一项离成熟都还有距离。
但孢子从来不需要完美，只需要够多、够快、够便宜。
Clark说他没准备好。坦白讲，看完这三篇论文，我也没有。
参考资料：
https://x.com/karinanguyen/status/2036143375326519357
https://jack-clark.net/2026/03/16/importai-449-llms-training-other-llms-72b-distributed-training-run-computer-vision-is-harder-than-generative-text/
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！