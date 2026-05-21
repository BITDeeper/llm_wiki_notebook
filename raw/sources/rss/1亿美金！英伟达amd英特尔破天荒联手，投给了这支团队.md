---
title: "1亿美金！英伟达AMD英特尔破天荒联手，投给了这支团队"
date: 2026-05-09
source: "新智元"
url: "https://mp.weixin.qq.com/s/fx66U-nzrZ40dD8WDxoGSA"
rss_id: "2652698810_1"
---
新智元报道
编辑：桃子
【新智元导读】
太疯狂了！英伟达、AMD和英特尔罕见同桌，把1亿美金砸向了同一个团队。SGLang背后的天才大神们，手握1亿美金，要彻底重写AI算力的分配法则。
模型层的竞争日趋白热化，而硅谷最核心的半导体掌门人，正在用真金白银押注一个更底层的答案。
1 亿美元种子轮，4 亿美元估值，英伟达、AMD、英特尔三家芯片巨头罕见同框。
2026 年 AI Infra 赛道最重的一笔早期下注，落在一支从开源社区长出来的团队身上——
RadixArk，以及它背后的推理引擎 SGLang 与强化学习框架 Miles
。
1 亿美金，从算力堆叠中突围
5 月 5 日，
RadixArk 宣布完成 1 亿美元种子轮融资，投后估值 4 亿美元
。本轮由 Accel 领投，Spark Capital 联合领投。
机构投资人这一栏值得逐行读一遍。芯片侧，NVIDIA 旗下 NVentures、AMD、联发科同时入场；数据与平台侧，Databricks 出现在名单中；财务投资人则包括 Salience Capital、HOF Capital、Walden Catalyst、A&E Investment、LDVP、WTT Fubon Family 等一线机构。
芯片厂商之间互为竞争对手，却共同站在同一张 Cap Table 上。
天使投资人名单同样重磅：陈立武，Intel CEO；Hock Tan，Broadcom CEO；Igor Babuschkin，xAI 前联合创始人；John Schulman，OpenAI 前联合创始人、Thinking Machines Lab 联合创始人；Soumith Chintala，PyTorch 联合创始人；Lilian Weng，Thinking Machines Lab 联合创始人。
英特尔CEO陈立武为
RadixArk
送上了祝贺
如此多巨头的豪华组合，在 AI Infra 赛道绝无先例。
SGLang：一全球巨头默认选择的推理引擎
要理解 RadixArk 的估值逻辑，首先要理解 SGLang。
自 2023 年诞生以来，这个开源推理引擎用两年时间成长为事实上的行业标准。GitHub 27K+ stars，部署规模超过 40 万张 GPU。
每天有数万亿 token 的生产流量跑在 SGLang 上，用户包括 Google、Microsoft、NVIDIA、Oracle、AMD、LinkedIn、xAI、Thinking Machines Lab——全球对推理性能要求最苛刻的一批团队，不约而同将生产负载交给了它。
一位参与过多个 AI Infra 领域评估的投资人坦言，「SGLang 的迭代速度与工程纪律，在开源项目中属于第一梯队」。
过去两年，模型架构经历了 MoE、长上下文、推理模型、多模态融合、Agent 爆发等一系列剧变。
每一次架构重塑，SGLang 都做到了 Day-0 兼容——新模型发布即支持，性能逼近硬件物理极限。
这种能力背后是一支在系统与算法两端都有深厚积累的团队。
CEO 盛颖是 LMSYS Org 发起者、SGLang 主要创始人，先后在 Databricks 和 xAI 领导推理系统，是开源大模型推理领域被引用最频繁的研究者之一。
CTO 朱邦华师从 Michael I. Jordan 与 Jiantao Jiao，曾联合创立 Nexusflow 并被 NVIDIA 收购，此后担任 NVIDIA Principal Research Scientist。
RadixArk联合创始人朱邦华（左）与盛颖（右）
这种创始人组合在 AI Infra 创业里并不常见。
把开源推理事实标准做出来、并持续维护其工程纪律的研究型创始人；从 GPU 厂商最核心研究层走出来的大模型算法专家。
前者决定 SGLang 能不能继续保持 Day-0 兼容的迭代节奏，后者决定 Miles 在强化学习落地时能否压住稳定性问题。
推理与训练这两条主线，正好覆盖了 RadixArk 商业化叙事的全部技术底色。
Miles + DeepSeek-V4
强化学习与推理一齐亮剑
2026 年 4 月 25 日，DeepSeek-V4 发布的当天，SGLang 和 Miles 成为全球第一个同时支持其推理和 RL 训练的开源技术栈。
Miles 是 RadixArk 在 2025 年 11 月开源的强化学习框架，主攻大规模 RL 训练的稳定性与效率，目前已被超过 20 支一线团队用于 MoE 模型训练，尤其受到硅谷新兴前沿实验室 Neo Labs 的青睐。
真正让行业注意到这支团队训练技术沉淀的，是 4 月 25 日 DeepSeek-V4 的发布。
这个架构极为复杂的模型——混合稀疏注意力、FP4 专家权重...发布的当天，SGLang 和 Miles 成为全球第一个同时支持其推理和 RL 训练的开源技术栈。
支撑这一切的，是 ShadowRadix 前缀缓存、Flash Compressor、Lightning TopK 等一系列在模型发布前就已准备好的系统优化。
从推理到训练的全链路覆盖，让 RadixArk 的商业想象空间有了更坚实的工程支撑。
半导体巨头罕见同台
为什么英伟达、AMD、英特尔会同时出现在一张 Cap Table 上，让人不免困惑。三家公司互为对手，投同一家推理引擎，岂不是养虎为患？
恰恰相反，硬件市场存在结构错配。算力仍然昂贵且稀缺，堆叠硬件却已经无法持续，其上的软件生态成为了不可或缺的关键入口。
对 NVIDIA 而言，SGLang 能最大化 H100/B200/GB300 的利用率，这意味着更多客户愿意为高端 GPU 买单——生态护城河不是靠封锁建起来的，是靠让自家硬件跑得比谁都好建起来的。
对 AMD 而言，需要一个与 CUDA 解耦、能公平发挥 MI300 系列性能的推理栈，否则硬件再强也找不到用户入口。
对 Intel 而言，Gaudi 系列需要在现有 CUDA 主导的生态之外生长出一套开源标准，才能突破生态封锁。对联发科和 Broadcom 而言，边缘与网络芯片同样需要统一的上层接口，而开源基础设施是最不会偏心的一层。
产业链合纵连横，通过 RadixArk，硬件厂商们合力构建一个不被任何单一云厂商或芯片巨头锁定的 AI 电力基础设施。
天使投资人的逻辑同样清晰：John Schulman 和 Lilian Weng 看的是训练-推理一体化基础设施对模型迭代的加速效应；Soumith Chintala 看的是 PyTorch 生态与下一代推理引擎的深度协同；Igor Babuschkin 和 Hock Tan 看的是从芯片到系统的完整技术栈整合。
xAI 联合创始人 Igor Babuschkin 称赞道，
SGLang 是市面上最棒的推理框架。RadixArk 的成立就是为了让它更上一层楼，并让更多前沿的 AI 技术栈实现普惠。
前 OpenAI 后训练副总、
Periodic 实验室创始人
Liam Fedus 表示——
构建可靠、高效且准确无误的 AI 基础设施，一直是打造 Periodic 时面临的最大挑战之一。
正因如此，看到 RadixArk 给 SGLang 这样的开源基础设施注入巨资，我感到非常兴奋。
当开源基建这一层变得越来越强大时，像 Periodic 这样的公司就能跑得更快；同时，新一波的初创公司也能放手去挑战那些宏大的项目了——换作以前，这可是从头一天起就需要一整支庞大的基建团队才能搞定的事。
这些声名显赫的领军人物，集体出现在同一张 Cap Table 上，向市场释放出强大的信号。
让 AI 的建设权，不再被少数人垄断
RadixArk 官网提到：「下一代 AI 不应该被对私有基础设施的访问权所限制。更多团队应该能够拥有自己的模型、自己的系统、自己的未来」。
把这句话翻译成工程师的语言，是这般场景：
一个新模型在凌晨发布，几个小时后社区里就有人用 SGLang 跑起了高效推理；
一支只有十几个人的初创团队，借助 Miles 在自己的领域数据上完成 RL 训练，不需要再去敲响任何一家云厂商的私有基础设施的大门；
硅谷 Neo Labs 与行业巨头，都能在同一套开源内核之上，按自己的节奏构造各自的 AI 产品。
过去两年，模型层激烈交锋，基础设施层第一次出现握住推理与训练双端入口，并且将内核完全分享给社区的顶尖团队。
1 亿美元的投入，将 AI 的建设话语权重新分配。
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！