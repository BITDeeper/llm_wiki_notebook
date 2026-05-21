---
title: "比比皆是的下一个创新点：从Prompt Learning进化到SIPDO的闭环自进化"
date: 2026-02-27
source: "机器之心"
url: "https://mp.weixin.qq.com/s/6OFYbFZKfURXyda4aFEtfQ"
rss_id: "2651018518_2"
---
Prompt 作为一种接口，直接影响 LLM 与 agent system 的行为方式与性能表现。对 prompts 的理解与控制，本质上决定了系统能力能够被释放到什么程度。Prompt learning 的出现，使这一过程从经验驱动走向可系统研究，也逐步形成了一条清晰的发展脉络。回顾这一路径，本身就足以帮助我们理解 prompt learning 是如何一步步被构建出来的。
但更重要的是，当这条路径被真正看清之后，另一件事情会变得异常明确：prompt learning 并不是终点，而是第一次把一个巨大而长期被遮蔽的创新源头暴露出来。一旦 prompt 不再被视为静态对象，而被纳入一个能够评估、修正、重写并持续演化的闭环之中，研究不再围绕 “技巧是否有效”，而开始围绕系统如何生长展开。
而这种系统性的展开
，将会自然地带来数之不
尽的创新点
（详见本文第 5 节）。
SIPDO（ICLR 2026）
正是在这一时刻作为一个例子出现的 —— 它不是对既有工作的修补，而是把 prompt learning 打开成一片可以不断生成新问题、新机制、新方法的连续创新地带。
LLM 在不同任务里表现强逐渐增强，但一个长期存在的问题是：
prompt 的微小改动可能带来显著性能波动
；更麻烦的是，task 会持续变化，新问题、edge cases、甚至 adversarial queries 不断出现，导致固定数据集上最优的 prompt 在真实环境里变脆、甚至出现类似 catastrophic forgetting 的退化。
这篇文章想回答三个问题：
prompt optimization 这几年到底在怎么 “进化”？— 01-04 章节
这种进化能够推进哪些创新点供大家使用 — 05 章节
以 SIPDO（ICLR 2026）为例子，阐释 SIPDO 在这条进化链上解决了什么关键瓶颈？— 06 章节
博客链接: https://dream.ischool.illinois.edu/blogs/evolution_of_prompt_optimization.html
论文链接: https://arxiv.org/pdf/2505.19514
01｜一张关键地图：Prompt Optimization 的演化，几乎复刻了 Parameter Learning 的历史
DREAM Lab 总结的 Key Insight：
prompt optimization 的演化路径，镜像了神经网络参数训练（parameter learning）的历史
—— 从早期的 “黑盒扰动 + 选择”（genetic/evolutionary），到更有方向感的更新（类梯度），再到 Beyond First-Order 的优化（利用历史信息、闭环反馈、加速收敛与跳出局部最优）。
Figure 1 把两条脉络并排对照：
Parameter Learning
：1980s Genetic Algorithms → 1990s SGD → 2000s Adam/Advanced optimizers
Prompt Learning
：2022 Genetic approaches → 2023 Textual gradients → 2024 Advanced methods
02｜Phase 1：从进化搜索开始 —— 在离散文本空间里先学会探索
Prompt 是离散文本，很难像参数那样直接写
where p is prompt﻿。DREAM Lab 的 Blog 里提到，早期方法很自然地走向进化式探索：维护一群候选 prompts、评估效果、保留好的、再 mutation/crossover 生成新候选。
2.1 GPS (Xu et al., 2022)：Genetic Prompt Search
Population：候选 prompt 集合
Fitness：验证集表现
Selection：保留 top-K
Mutation：回译、随机编辑、或用 LLM 生成变体
Crossover：组合不同 prompt 的片段，并且报告了相对人工 baseline 的提升
2.2 Survival of the Safest (SoS) (Sinha et al., 2024)：多目标进化（性能 × 安全）
SoS 的关键是：不只追 performance，还把 security 一起做 Pareto 权衡，并用 semantic mutations 保持 prompt 可读与语义一致。
2.3 EvoPrompt (Guo et al., 2024)：让 LLM 当智能 mutation operator
DREAM Lab Blog 提到 EvoPrompt：变异不再是随机扰动，而是由 LLM 生成语义上合理、质量更高的变体 —— 进化框架仍在，但 mutation 变得更聪明。在没有可微梯度的离散空间里，先把探索能力搭起来；缺点是成本高、迭代方向感弱。
03｜Phase 2：“Textual Gradients” 出现 —— 像 SGD 一样有方向地改 prompt
DREAM Lab Blog 中，把 2023 年 之后的变化称为 prompt optimization 的 “gradient revolution”：虽然不能真的对文本求导，但可以用
自然语言反馈
来扮演 “梯度方向”。
3.1 ProTeGi (Pryzant et al., 2023)：用批评当做梯度，用 beam search 保持候选
跑一批样本 → 让 LLM 生成对 prompt 的批评（textual gradient）→ 按批评方向改写 prompt → beam search 保留多个候选并择优。并在文中提到可带来显著提升。
3.2 TextGrad (Yuksekgonul et al., 2024)：把文本反馈系统化成类似 autodiff 的框架
TextGrad 的野心更大：把多模块 LLM 系统当作 computation graph，通过文本形式的反向传播把反馈传回去优化 prompt / 模块接口，并提供类似 PyTorch 的 API 体验。
04｜Phase 3：Beyond First-Order—— 引入历史信息和闭环反馈，让 prompt 真正自适应
在参数优化里，SGD 之后有 momentum/Adam/ 二阶方法来利用历史信息、调节步长、跳出局部最优。DREAM Lab Blog 中强调了 prompt optimization 也进入了类似阶段，并用两个代表说明：
4.1 REVOLVE (Zhang et al., 2024)：跟踪 response evolution，类似动量 / 二阶的历史信号
一阶方法只用当前迭代的即时反馈；REVOLVE 会利用输出在多轮迭代中的演化轨迹来判断停滞、调整更新幅度，并报告更快收敛与更高收益。
4.2 SIPDO (Yu et al., 2025)：用 Synthetic Data 主动找难错题，把 prompt optimization 变成 closed-loop
SIPDO 的定位非常明确：它在 Beyond First-Order 阶段引入了一个更强的信号源 —
不是只在固定数据集上被动优化，而是生成 synthetic data 主动 probe 当前 prompt 的弱点
，形成闭环
，并配合 difficulty progression（逐级加难）。
05 | 从 Parameter Learning 到 Prompt Optimization, 比比皆是的下一个创新点
看到这里，其实一条非常清晰的逻辑已经浮现出来：
prompt optimization 正在重复 parameter learning 早期走过的那条演化路径
。参数训练并不是一开始就具备今天这些成熟的优化方法，而是经历了从启发式搜索，到一阶梯度更新，再到系统性引入历史信息、稳定性控制与闭环反馈的长期演进过程。正是这条路径，在数十年的积累中不断分叉，持续催生出新的方法、新的系统设计与新的研究问题。
Prompt optimization 正处在一个高度相似、但时间尺度被大幅压缩的阶段。今天我们已经看到了类梯度更新、历史反馈、difficulty control、closed-loop signals 等关键要素逐步出现，但这并不是终点，而恰恰意味着
这条路线刚刚被真正打开
。在 parameter learning 中被反复验证有效的思想 —— 更稳定的更新策略、更高信息密度的反馈信号、更鲁棒的回归控制、更系统的训练流程 —— 都有极大的可能在 prompt optimization 中以新的形式重新成立，并形成一系列尚未被系统覆盖的研究切口。
在这个背景下，创新并不需要凭空构造。它更多来自于
把已经成熟的优化思想，真正落到 prompt optimization 的
具体
机制里
。也正是在这里，实践路径变得非常直接、也非常具体：
大家可以在这里找到 code base：https://github.com/Peiyance/REVOLVE
然后把在 gradient descent 中已经被验证有效的升级版本实现出来，在现有的 benchmark 上与这些方法系统性地做对比。
当更高级的优化策略带来稳定、可复现的性能提升时，它自然就构成了一篇新的 paper。
这并不是 “照搬参数优化”，而是一次重新生长的过程。SIPDO 正是在这样的背景下出现的：它不是对 gradient descent 的简单延伸，而是
从 synthetic feedback 与 adversarial-style probing 的角度，把 prompt optimization 推进到真正的闭环阶段。
从一阶更新走向 difficulty-driven 的自适应演化，本身就标志着 prompt optimization 开始具备长期扩展的系统结构。
因此，这里所谓 “比比皆是的下一个创新点”，并不是一句修辞，而是一个已经被历史反复验证过的事实：
当一条优化路径被真正走通之后，后续的创新会沿着这条路径不断自然生长。
Parameter learning 用几十年证明了这一点；而 prompt optimization，才刚刚进入它最有生命力的阶段。
06｜SIPDO 核心：两类 agent 协作 + 难度递进 + 失败驱动的 prompt 修复闭环
Paper《SIPDO: Closed-Loop Prompt Optimization via Synthetic Data Feedback》（arXiv:2505.19514v4）将问题说得很直白：现有方法多在
固定数据集
上优化，默认输入分布静态，缺少持续迭代的机制；而真实世界输入会演化，因此需要把优化从一次性流程升级为动态自适应闭环。
SIPDO 定义为 two-agent system：
D
ata Generato
r
：生成能暴露 prompt 弱点的合成样本，且难度可控、逐级增加；
Auto Promp
t Opt
imizer
：在失败样本上做 error analysis → recommendation → refinement，不断改写 prompt。丰富的难度梯把错误案例压缩成一个可执行的修改建议，像给 prompt 打补丁。
6.1 Data Generator：purposeful & stressful，而非单纯的生成
SIPDO 将 Data Generator 定位为
面向当前 prompt’s targeted stress tester
：其输出
fresh、well-targeted
的 synthetic instances，目标是以可控方式持续暴露 prompt 的 weakness—— 即生成难度刻意超出当前 prompt 能力边界的数据，从而为后续 prompt 修复提供高信息密度的反馈信号。
6.1.1 先定 label，再生成 input：消除 label 生成过程中产生的错误与语义错配
在合成数据生成中，一个常见隐患是：模型在生成输入时错误的生成答案，导致 Question (x) –Answer (y) 不一致。SIPDO 的处理非常明确：
先从 estimated population label prior p*(y)﻿ 抽取目标 answer
，再在该 answer 条件下生成对应 question，从而减去合成样本语义合理但标签错配的噪声。SIPDO 也正面处理了合成数据最常见的现实问题：当任务域更复杂或合成有效样本更困难时，question–answer 一致性与基本事实正确性会成为瓶颈。对此，论文提出在特定任务 / 领域启用
three-voter check
：由三个 expert agents 独立核验每个生成项的 question–answer consistency 与基本事实正确性，只有同时通过三个 expert-agents 的样本数据才会进入 synthetic data pool。
进一步地，p*(y) 并不只是采样分布，它还承担了分布约束（distributional regularization）的角色：SIPDO 用它来 regularize generator，惩罚合成标签分布偏离真实标签先验，避免 generator 退化成只生成少数最容易击穿 prompt 的标签 / 类别，从而造成训练信号单一与分布失真。
6.1.2 latent template：在贴近真实任务结构的前提下生成新样本数据
SIPDO 引入 latent variable（SPIDO 强调其
捕捉 few-shot set 结构
的作用）。用更工程化的语言来说：generator 先从 few-shot 示例中抽取 / 采样一个题型骨架（latent template），再在该骨架上生成具体样本。这样做的目的是在
结构对齐真实数据分布
的同时，仍能在内容层面产生新变体，从而避免生成样本偏离任务语义或不可判定的低质量数据。
6.1.3 difficulty tier：同一模板下的难度对齐生成
SIPDO 的 difficulty tier c 是 data-generator 的核心控制变量：generator 明确以 c 为条件生成样本，使得
同一 latent variable 与同一目标 label 可以产出一组 difficulty-aligned variants
。换言之，合成数据是围绕同一结构模板形成
难度可对齐、可比较
的一系列挑战，便于 prompt 在统一结构下学习到从易到难的能力迁移。
6.1.4 curriculum generation：用 summarizer 将上一层难度 “压缩成下一层线索”，形成语义累积
为了让难度递进具备连续性而非分段跳变，SIPDO 采用 curriculum generation：从一个单调递增的难度序列出发，将
前序难度
层的输出经
summarizer
﻿摘要后反馈给 generator
，作为下一层生成的 latent cue。直观上，这相当于让后续难题建立在前序的语义结构之上：上一层暴露的结构与约束被压缩、保留并进一步组合 / 加深，从而使语义深度随难度累积，而不是每一层都从零开始随机增加难度。
6.2 Auto Prompt Optimizer：基于 failure slice 的结构化修复，并通过回归验证抑制性能回退
Auto Prompt Optimizer 的职责就是
把失败转化为可复用的 prompt 规则
。SIPDO 将这一过程明确组织为闭环：每引入一个新的 synthetic data sample，就先用当前 prompt 评估；若出现错误，则进入 optimizer 做修复；若通过，则提升难度继续生成更具挑战性的样本。该循环持续进行，直至 prompt 正确解决所有生成的数据。
6.2.1 error analysis：以 error slice 形式 “显式化” 失败模式，而非凭经验改写
Auto Prompt Optimizer 的第一步不是立刻重写 prompt，而是对当前累积的 synthetic data pool 进行评估，形成
当前错误
（error slice /failure slice）。这一设计的含义在于：prompt 更新不再依赖主观直觉，而是以 “失败集合” 的形式显式定位 prompt 的不足（如：指令歧义、推理步骤缺失、格式约束不充分）。当 error slice 为空时，意味着当前 prompt 已覆盖已见案例，可触发终止条件。
6.2.2 recommendation：以 reflection module 生成 textual patch，将失败压缩为 “可执行修改指令”
在 recommendation 阶段，SIPDO 引入 reflection module：它同时检视（1）error slice，（2）具体导致当前 prompt 失败的生成样本，（3）当前 prompt,（4）以及模型在该样本上的错误输出，并生成一个
textual patch
：既解释失败为何发生，也提出应当如何修改 prompt。
6.2.3 Refinement：将 patch 具体写入 prompt，并以 “局部 — 全局” 两级验证抑制回退
refinement 阶段的目标是产出一个可泛化、不过拟合的 revised prompt：把 textual patch 落成具体的指令改写，并对 prompt 结构做必要的重排与强化。论文在 Fig.1 的描述中强调：revised prompt 不仅要在 “当前失败样本（present failures）” 上通过，还要在 “所有历史已解决样本（previously solved examples）” 上通过；若仍出错，则回到 optimizer 继续细化。这个 “局部修复 + 全局回归验证” 的闭环，实质上是将
regression control
写进 prompt optimization 流程，以降低 “修一处坏一片” 的性能波动与遗忘风险。
6.2.4 Confirmation: 局部 vs. 全局
Local confirmation 只在当前 error slice 上测试 revised prompt
。如果 revised prompt 在这些明确已知的失败样本上仍未全部修复（即仍有残余错误），SIPDO 不会立刻做全局回归，而是认为当前 patch 还不充分：
将 revised prompt 作为新的 baseline prompt；
更新 error slice 为 “仍未修复的残余错误”；
回到 recommendation/refinement，生成更充分、更针对性的 patch 再迭代。
Global confirmation：修好了新错误，不代表在已生成的 synthetic pool 中没有错误。
因此，当 local confirmation 通过后，SIPDO 会把 revised prompt 放到整个 synthetic history（截至当前轮累计的所有样本）上评估测试，检查它是否仍覆盖所有已见案例。如果 global confirmation 中发现任何 “历史回退”（即某些此前已解决的样本现在又失败了），SIPDO 会：
将这些回退样本并入新的 error slice；
把它们送回 recommendation/refinement 流程继续修复；
直到在全量历史上不再出现回退，才接受这次 revision，并进入下一轮更高难度的数据生成与评测。
6.2.5 可复用的 prompt templates：将闭环流程固化为标准化操作规程
为了让 closed-loop 更易复现与迁移，论文在附录中给出了自改进流程的 prompt templates（涵盖 error analysis、improvement recommendation、prompt refinement 三类模板），并给出典型 failure modes 与建议示例（例如对表格处理失败、数值比较不明确等）。
07｜整体效果：跨模型、跨基线，SIPDO 在不同任务上稳定且更强
论文在 Table 2 汇总了 BIG-Bench 六个任务，表现 SIPDO 在多数任务与模型上
consis
tently outper
forms
标准 baselines（CoT / APE / PromptAgent），体现 synthetic data feedback 带来的泛化收益。
此外，论文还在 MMLU（College CS, Machine Learning, College Biology）以及 FOLIO / PrOntoQA / ProofWriter 等结构化推理任务上的对比与提升。SIPDO 的独特点在于：
让系统主动生成 “刚好能打穿当前 prompt” 的合成样本，再用失败反馈驱动 prompt 修复，并通过难度递进持续加压。
08｜Difficulty Progression – SIPDO 的核心
论文在 Table 4 做了 ablation study：移除 difficulty gradient 后，BIG-Bench 的每个子任务都掉点，并且给出平均损失，其中 Object Counting、Geometric Shapes 的跌幅最大：
GPT-4o 平均下降 17.3%
GPT-4o-mini 平均下降 24.3%
直接说明 SIPDO 的增益不是单纯生成更多数据带来的，而是
通过可控难度梯度，把 prompt 推着走过一条持续变强的学习曲线
。
总的来说，
Data Generator
：以 p*(y) 约束标签分布，通过 latent template 保持任务结构对齐，并以 difficulty tier 逐级加难，持续产出能够暴露当前 prompt weakness 的 targeted synthetic instances；在困难任务上可用 three-voter check 提升 label–input 一致性与事实可靠性。
Auto Prompt Optimizer
：以 error slice 显式刻画失败模式，通过 reflection-based textual patch 给出可执行修复策略，再将修复写入 revised prompt，并在 present failures 与 previously solved examples 上做回归验证，以闭环方式累积鲁棒性并抑制性能回退。
论文作者：
Haohan Wang (汪浩瀚)， UIUC 助理教授，主要研究方向为 Agentic AI and Scientific Discovery, Trustworthy AI / AI security, Computational Biology. 平时主要带领团队攻坚有价值的问题，同时也喜欢研究 “创新” 这件事本身，以帮助更广大的社区和老师同学。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com