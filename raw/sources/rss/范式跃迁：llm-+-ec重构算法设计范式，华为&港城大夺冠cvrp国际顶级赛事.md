---
title: "范式跃迁：LLM + EC重构算法设计范式，华为&港城大夺冠CVRP国际顶级赛事"
date: 2026-03-02
source: "机器之心"
url: "https://mp.weixin.qq.com/s/mkT-9NATy85cxiZEdROUWQ"
rss_id: "2651018881_1"
---
机器之心报道
近日，在运筹优化领域的顶级赛事 CVRPLib BKS 全球挑战赛中，由华为诺亚方舟实验室、华为云天筹 AI 求解器团队、华为云加拿大实验室和香港城市大学张青富教授团队联合而成的 “OptVerse-CityU”，凭借
“大模型 (LLM)+ 进化计算 (EC)” 的创新技术架构，以显著
优势斩
获冠军
。在 100 个竞赛算例中，联合团队 OptVerse-CityU
刷新了 98 个历史最优解
，并为其中 51 个算例设立了全新的世界纪录
。这是 AI 参与核心机制设计的算法「首次」在顶级竞赛中战胜人类专家算法，验证了 AI 在算法设计相关领域的巨大潜能，预示了 AI 对算法设计领域即将带来的颠覆性变革。
OptVerse-CityU 位
列 CVRPLib BKS 榜首
榜单地址：https://galgos.inf.puc-rio.br/cvrplib/index.php/en/bks_challenge/score/
一、赛
题背景：CVRP—— 物流优化
的「基石难题」
在智能制造和供应链管理中，有一个公认的最基础也最核心的问题，叫做
“带容量约束的车辆路径规划问题（Capacitated Vehicle Routing Problem，CVRP）”
。通俗地讲，它研究的是如何用最少的运输车辆、规划出最短的行驶路线，同时确保货物能准时送达每一个客户，从而实现物流成本最低化与配送效率最大化。
现实中的物流场景远比这复杂，几乎所有高阶的路径规划问题，都是在 CVRP 的基础上叠加各种现实约束演化而来的。例如，加上时间窗约束，要求货物必须在特定时间段内送达；加上同时取送货，让车辆在配送途中还需回收货物，导致车内空间动态变化；或是扩展为多仓库协同调度等。可以说，如果不能高效解决 CVRP 这个 “地基”，任何复杂的物流调度优化都将缺乏稳固的支点。
然而，这个问题在业界属于公认的算法难题：随着配送节点数量的增加，可行的路线方案会出现 “组合爆炸”。以 50 个配送点为例，其路线组合数量级远超普通计算机的实时计算能力；当节点数达到数百个时，传统算法已难以应对，必须借助局部搜索、遗传算法等智能优化手段进行高效探索；而当节点数突破千级规模，现有算法的求解效率和解的质量将急剧下降，难以满足大型企业对实时决策与规模化优化的双重需求。
二、巅峰对决：「大模型 + 进化计算」断层领先
CVRPLib 是车辆路径规划领域的最具权威性的标准测试库，是全球算法研究者与业界软件公司测评与验证算法的公认基准。本届 CVRPLib BKS 全球挑战赛吸引了全球顶尖科研团队和科技企业，比拼算法先进性和算力效能，持续整整一个月。参赛队伍需要在 100 个超大规模测试实例（单个算例包含 1,000 至 10,000 个配送点）中不断刷新最优解，得分取决于每个最优解的霸榜时间。
而赛事组委会在发布初始基线解前，已采用多种公开先进方法进行了多轮随机运算，确保初始解高度逼近理论最优值。这意味着，任何能够刷新纪录的成果，都必须是在算法逻辑层面实现真正的原创性突破。同时，基于霸榜时长的动态积分机制，进一步杜绝了偶然性因素的干扰：唯有经得起时间检验、持续领先的解法，方能斩获高分。
最终，联合团队 OptVerse-CityU 在马拉松式的算法竞技中脱颖而出，以 “断层领先” 的优势斩获全球冠军：
得分
碾
压
：团队得分 1,800.32，超过其余参赛队伍分数之和（其余队伍最高分为 900+）；
最优解霸榜
：在 100 个测试实例中，成功刷新了 98 个历史最优解，并为其中 51 个实例确立了全新的行业标杆（New Best Know Solution）。
各队伍得分时间序列图
三、技术揭秘：AI 自动设计，重构算法基因
本次夺冠的背后，是联合团队在优化算法与 AI 生成领域长期的技术积淀与创新，其方案继承了此前自主研发，且应用于天筹 MIP 求解器中的
Evolution of Heuristics（EoH
）
算法自动生成系统
，并在此基础上进行了进一步的改进与升华。
Evolution of Heuristics 架构图
传统算法设计依赖专家经验，耗时长且难以超越人类认知局限。本次参赛方案创新性地引入了 “大模型 + 进化计算 “的自动算法设计范式：
AI 自动设计
：利用大模型的生成能力与进化计算的迭代机制，系统能够日夜兼程地自主构建创新性的算法思想与代码；
核心组件进化
：针对求解流程中的扰动算子、参数控制、解接受策略等模块，AI 实现了 “自动驾驶” 般的自我修正与优化，在探索（Exploration）与利用（Exploitation）之间找到完美平衡。
这一突破意味着，算法研发流程正从 “人工构思 - 手工实现” 转向 “结构设计 - 自动进化”，AI 正在成为算法创新的加速器。
此外，为了在为期 30 天的赛程中维持高强度的搜索，联合团队还部署了一个异步系统级框架。该框架以追踪全局已知最优解的外部共享数据库为中心，跨三个并行层级协调多个算法实例，将算力资源发挥到极致。
四、EoH 算法：基于大模型的自动算法设计系统
本次夺冠算法的多个核心组件，由自动算法设计系统迭代生成。所使用的 EoH 算法 [1] 是一种通用的基于大模型的自动算法设计框架，前身为 AEL [2]，由华为诺亚方舟实验室与香港城市大学张青富教授团队于 2023 年提出。EoH 早于 Google 的 FunSearch 和 AlphaEvolve，是这一方向的开拓性工作。
EoH 的关键优势在于通过共同进化的过程将 “思想” 和代码有效融合。在这一进化计算框架内，语言模型生成的启发式思想得以转化成实际可执行的代码，并与进化算法相辅相成地共同发展。这种方法为启发式算法的自动设计提供了新的思路，也显著降低了计算成本。
目前 EoH 已成为自动算法设计领域的主流框架。在此次竞赛前，已广泛应用于横跨多个学科领域的算法设计，包括图像对抗攻击 [3]，贝叶斯优化 [4]，流体力学湍流模型修正 [5]，飞行器几何参数化方法设计 [6]，元启发式设计 [7]，因果推断 [8]，以及自动空战系统设计，飞行器增升装置设计等。并发展了多个拓展版本，如多目标自动算法设计 [9]，多模态自动算法设计 [10] 和跨分布自动算法设计 [11] 等。
基于 EoH 的开源平台 LLM4AD（ https://github.com/Optima-CityU/llm4ad）也已用于 100 + 设计任务。
五、未来展望：重新定义算法研发
本次夺冠标志着 AI 驱动的自动算法设计已进入 “实用化阶段”。凭借 “大模型 + 进化计算” 的双引擎架构，显示 AI 能够帮助人类突破认知与生理的边界，重构算法设计的未来：
能力常态化
：从 “单次竞赛突破” 走向 “稳定自动进化能力”，让算法设计进入长期、自驱动迭代阶段；
场景复杂化
：面向更大规模与更复杂约束的工业场景，在动态调度、实时决策、多目标优化中持续发挥优势；
研发范式变革
：未来，“专家提供结构框架 —AI 负责细化与演化” 的协作模式，或将成为高性能算法研发的主流。
参考文献：
[1]	Fei Liu, Xialiang Tong, Mingxuan Yuan, Xi Lin, Fu Luo, Zhenkun Wang, Zhichao Lu, and Qingfu Zhang. "Evolution of Heuristics: Towards Efficient Automatic Algorithm Design Using Large Language Model." ICML 2024.
[2]	Fei Liu, Xialiang Tong, Mingxuan Yuan, and Qingfu Zhang. "Algorithm Evolution using Large Language Model." arXiv preprint, 26 Nov. 2023.
[3]	Ping Guo, Fei Liu, Xi Lin, Qingchuan Zhao, and Qingfu Zhang. "L-AutoDA: Leveraging Large Language Models for Automated Decision-Based Adversarial Attacks." GECCO 2024.
[4]	Yiming Yao, Fei Liu, Ji Cheng, and Qingfu Zhang. "Evolve Cost-Aware Acquisition Functions Using Large Language Models." PPSN 2024.
[5]	Yu Zhang, Kefeng Zheng, Fei Liu, Qingfu Zhang, and Zhenkun Wang. "AutoTurb: Using Large Language Models for Automatic Algebraic Model Discovery of Turbulence Closure." Physics of Fluid, 2025.
[6]	Kefeng Zheng, Yiheng Wang, Fei Liu, Qingfu Zhang, and Wenping Song. "CST-LLM: Enhancing Airfoil Parameterization Method with Large Language Model." Aerospace Science and Technology, 2025.
[7]	Qinglong Hu, and Qingfu Zhang. "Partition to Evolve: Niching-enhanced Evolution with LLMs for Automated Algorithm Discovery." NeurIPS 2025.
[8]	Zidong Wang, Fei Liu, Qi Feng, Qingfu Zhang, and Xiaoguang Gao. "LLM-enhanced Score Function Evolution for Causal Structure Learning." IJCAI 2025.
[9]	Shunyu Yao, Fei Liu, Xi Lin, Zhichao Lu, Zhenkun Wang, Qingfu Zhang. "Multi-Objective Evolution of Heuristic Using Large Language Models." AAAI 2025.
[10]	Qinglong Hu, Xialiang Tong, Mingxuan Yuan, Fei Liu, Zhichao Lu, and Qingfu Zhang. "Multimodal LLM-assisted Evolutionary Search for Programmatic Control Policies." ICLR 2026.
[11] Fei Liu, Yilu Liu, Qingfu Zhang, Xialiang Tong, and Mingxuan Yuan. "EoH-S: Evolution of Heuristic Set Using LLMs for Automated Heuristic Design." AAAI 2026.
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com