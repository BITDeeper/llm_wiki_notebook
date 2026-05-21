---
title: "让AI自动构建AI模型：UCSD 推出 AIBuildAI 智能体，斩获OpenAI MLE-Bench榜单第一"
date: 2026-03-27
source: "机器之心"
url: "https://mp.weixin.qq.com/s/8sb5CpBLb3PEQ7IGY6A5ug"
rss_id: "2651024343_3"
---
近日，加州大学圣地亚哥分校的研究团队开发了 AIBuildAI 智能体，可以全自动构建 AI 模型（包括模型设计，代码实现，模型训练，调参，性能评估，迭代优化）。团队成员包括博士生 Ruiyi Zhang，Peijia Qin，Qi Cao，Li Zhang，以及该校副教授 Pengtao Xie。
开发一个高性能 AI 模型非常耗时费力，工程师需要反复设计模型、写代码实现模型、构建训练流水线、执行超参数搜索，并根据实验结果对模型进行迭代优化。这一过程对专业知识的依赖程度极高，人力成本也居高不下，非常耗费时间。为了解决这一问题，UCSD 的研究团队开发了 AIBuildAI 智能体，充当虚拟的 AI 工程师或 AI 科学家，全自动构建 AI 模型。用户无需编程，只需要用自然语言对任务进行描述，AIBuildAI 自动设计模型，写代码实现模型，训练模型，调节超参数，评估模型性能，并根据实验结果对模型进行迭代优化。
AIBuildAI 在 OpenAI MLE-Bench 基准测试的 75 个任务上以 63.1% 的获奖率位居榜首（截至 2026 年 3 月 6 日），其表现可媲美经验丰富的 AI 工程师，实现了从任务描述到可部署模型的端到端自动化。
论文标题：AIBuildAI:An AI agent that automatically builds AI models
项目地址：https://github.com/aibuildai/AI-Build-AI
论文链接：https://github.com/aibuildai/AIBuildAI/blob/main/AIBuildAI_Tech_Report.pdf
OpenAI MLE-Bench 测评结果：https://github.com/openai/mle-bench/pull/126
AIBuildAI 的设计灵感来源于真实的 AI 研究团队的工作流程。在典型的 AI 项目中，技术负责人统筹多条并行探索路线，研究员提出建模策略，工程师实现训练流水线，负责人定期评审结果、分配资源。AIBuildAI 将这一工作流抽象为一个多智能体搜索过程：将整个开发周期分解为多个专职智能体协作执行，并通过集中化的管理器进行统一调度。
技术核心
管理智能体（Manager Agent）
扮演项目运行负责人的角色，全程不直接写代码或执行训练任务，而是通过读取磁盘上的实验记录来做出下一步决策。他在两种模式之间切换：协调模式下决定下一步应该调用哪一个子智能体；筛选模式下依据训练信号保留有潜力的候选方案并终止无效方案来节约时间以及计算成本，并在进展停滞时触发修订或者终止。
研究员智能体（Designer Agent）
负责想方案和改方案两项核心任务。在设计模式下，他直接探索数据集特征，提出多个差异化、可行性强的建模计划；在修订模式下，他仔细诊断失败原因（过拟合、欠拟合、收敛问题或者数据异常），并提出具体的改进方案供编码智能体重新实现。
编码智能体（Coder Agent）
将设计方案转化为可运行的训练与推理流水线。编码智能体的目标是确保代码正确完整，而非追求最终性能。他会在写完代码后执行一次短时验证运行以确保流水线可以端到端运行，随后将完整训练交由调优器处理。
调优器智能体（Tuner Agent）
接管训练过程，在已有代码基础上专注于性能提升。它采用先快速校准、再决定是否投入的策略：先跑一段简短的热身训练观察学习曲线，再决定是延长当前方案还是进行超参数调整。整个过程在固定计算预算内完成。
系统设计
AIBuildAI 在系统层面还具备三项关键特征：
并行效率：
多条解决方案轨迹在独立工作空间中并发运行，避免互相干扰，允许系统同时探索多个方法并将资源集中于表现好的候选方案。
可复现性：
所有智能体通过存储于磁盘中产出物（方案文档、配置文件、日志、检查点）进行协调，而非依赖内存中的临时信息，确保每一步操作均可事后审查与复现。
安全性：
智能体仅被允许写入自身轨迹目录，数据集以只读方式挂载，每次调用均生成可审计的操作日志。
实验结果
AIBuildAI 在 OpenAI MLE-Bench 基准测试上进行了评估 (https://github.com/openai/mle-bench/pull/126)。MLE-Bench 包含了来自 Kaggle 竞赛的真实任务，涵盖图像分类，目标检测 / 分割、自然语言理解与生成、时序信号建模以及结构化表格预测等多个类别，共 75 个任务，要求系统完成从原始数据到可提交模型的全流程开发。
截止 2026 年 3 月 6 号的榜单，AIBuildAI 以 63.1% 的综合获奖率位居 MLE-Bench 总榜第一。上图展示了 AIBuildAI（橙条）的综合性能在所有的对比方法中实现了性能最佳。
上图展示了 AIBuildAI 在语言理解与生成任务上的详细结果。上半部分以 Billion Word Imputation 为例，完整呈现了 AIBuildAI 各智能体的运行轨迹：Manager 依次调度 Setup、Designer（提出 6 个候选方案）、Coder（实现流水线）和 Tuner（迭代调参），最终 Aggregator 以 RoBERTa-large 为基础生成提交文件，取得 5.5060 的最优分数。下半部分对比了 AIBuildAI 与 AIRA-dojo、MLEvolve 在 10 个具体语言任务上的性能表现。AIBuildAI（紫色）在 chaii-hindi-and-tamil-question-answering、patent-matching、tweet-sentiment-extraction、text-normalization-challenge-english-language、random-acts-of-pizza 等多个任务上均取得最优成绩，充分验证了 AIBuildAI 在多样化语言任务上的泛化能力。
总结
AIBuildAI 通过将 AI 开发流程分配到包括设计、编码、调优与协调等任务的专职智能体，并以基于产出物的状态管理将各个智能体紧密协同，实现了端到端自动化 AI 工程。不同于以往将代码生成作为核心范式的单体系统，AIBuildAI 显示建模了训练动态监控、早停机制与超参数调整等关键环节，更贴近真实工程师团队的工作方式。AIBuildAI 在 MLE-Bench 的 75 个任务上，以 63.1% 的获奖率位居第一，证明了结构化多智能体协作在复杂工程工作自动化上的可行性，也为迈向媲美人类专业工程师的自动 AI 系统提供了清晰的技术路线。
作者简介：
谢澎涛，UCSD 副教授，研究受人类学习启发的机器学习及其在 LLM、基础模型与生物医学的应用。张睿一，UCSD 博士生，关注 LLM 效率、安全与测试时计算扩展。秦佩嘉，UCSD 博士生，聚焦奖励模型与多智能体系统。曹启，UCSD 博士生，主攻 LLM 推理。张力，UCSD 博士生，研究方向为机器视觉与视觉大模型。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com