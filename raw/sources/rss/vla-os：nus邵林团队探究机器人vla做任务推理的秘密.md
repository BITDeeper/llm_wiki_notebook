---
title: "VLA-OS：NUS邵林团队探究机器人VLA做任务推理的秘密"
date: 2025-07-31
source: "机器之心"
url: "https://mp.weixin.qq.com/s/fybwGyyU5ceXgllenI8lAA"
rss_id: "2650983026_4"
---
本文第一作者为新加坡国立大学博士生高崇凯，其余作者为新加坡国立大学博士生刘子轩、实习生池正昊、博士生侯懿文、硕士生张雨轩、实习生林宇迪，中国科学技术大学本科生黄俊善，清华大学本科生费昕，硕士生方智睿，南洋理工大学硕士生江泽宇。本文的通讯作者为新加坡国立大学助理教授邵林。
为什么机器人能听懂指令却做不对动作？语言大模型指挥机器人，真的是最优解吗？端到端的范式到底是不是通向 AGI 的唯一道路？这些问题背后，藏着机器智能的未来密码。
近期，新加坡国立大学邵林团队发表了一项突破性研究
VLA-OS
，首次系统性地解构和分析了机器人 VLA 模型进行任务规划和推理，进行了任务规划表征与模型范式的统一对比。这项工作通过系统、可控、详细的实验对比，不仅为研究者提供了翔实的研究成果，更为下一代通用机器人 VLA 模型指明了方向。
通过 VLA-OS，你可以获得什么：
VLA 通用设计指南；
结构清晰的 VLA 代码库，拥有集各家之所长（RoboVLM、OpenVLA-OFT）的先进设计；
标注好的多模态任务规划数据集；
规范的 VLA 训练流程。
VLA 的未来发展方向启示。
✍🏻️
论文标题：
VLA-OS: Structuring and Dissecting Planning Representations and Paradigms in Vision-Language-Action Models
🚀
Arxiv
：
https://arxiv.org/abs/2506.17561
🏠
项目主页
：
https://nus-lins-lab.github.io/vlaos/
💻
源代码
：
https://github.com/HeegerGao/VLA-OS
📊
数据集
：
https://huggingface.co/datasets/Linslab/VLA-OS-Dataset
🤖
模型
：
https://huggingface.co/Linslab/VLA-OS
图 1 VLA-OS 整体概览
一、疑云密布：VLA 模型在进行任务规划时到底该怎么做？
VLA 模型（Vision-Language-Action Model）近年来展现出令人印象深刻的、解决复杂任务的操作能力。端到端的 VLA 模型仅仅使用数据驱动的模仿学习就可以实现过去需要进行复杂系统设计才能完成的任务，直接从图像和语言的原始输入映射到机器人的动作空间，展现出了强大的 scale up 的潜力。图 2 展示了一些端到端的 VLA 代表性工作。
图 2 一些端到端的 VLA 模型（ActionOnly-VLA）
然而，目前可用于训练 VLA 的数据集相比起 LLM 和 VLM 来说还非常少。因此研究人员最近开始尝试在 VLA 中添加任务推理模块来帮助 VLA 使用更少的数据完成复杂的任务。主流的方式包括两类：
使用一个端到端的模型来同时进行任务规划和策略学习（Integrated-VLA）。
这些模型通常会在模仿学习的损失函数上增加一个用于任务规划的损失函数，抑或是增加一些额外的任务规划训练表征，来使得基座大模型同时被任务规划和策略学习的任务进行训练。例如 EmbodiedCoT 添加了使用自然语言的任务分解的学习过程，而 UniVLA 采用了目标图像推理特征的隐式提取。图 3 展示了一些代表性工作：
图 3 Integrated-VLA 的一些工作
使用分层的范式（Hierarchical-VLA），
即一个上层模型负责任务规划，另一个下层模型负责策略学习，二者之间没有梯度回传。例如，Hi-Robot 使用一个 VLM 输出任务分解后的简单语言规划指令，然后用一个 VLA 接收分解好的语言指令进行动作。图 4 展示了一些代表性工作：
图 4 Hierarchical-VLA 的一些工作
这些模型都展现出了令人印象深刻的实验结果。然而，目前的这些工作互相之间区别很大，而且这些区别还是多维度的：从采用的 VLM backbone、训练数据集、网络架构、训练方法，到针对任务规划所采用的范式、表征，都千差万别，导致我们很难判断真正的性能提升来源，使得研究者陷入「盲人摸象」的困境。
对于研究者来说，分析清楚这些 VLA 范式中到底是哪些部分在起作用、哪些部分还需要被提升是很关键的。只有清楚地知道这些，才能看清楚未来的发展方向和前进道路。
图 5 VLA 做任务规划的变量太多，难以进行深入分析
鉴于这个问题，我们计划采取控制变量的实验方法，专注于任务规划的「范式」和「表征」两大方面，然后统一其他因素，并直指五大核心研究问题：
a. 我们该选用哪种表征来进行任务规划？
b. 我们该选用哪种任务规划范式？
c. 任务规划和策略学习，哪部分现在还不够好？
d. 对于采用任务规划的 VLA 模型来说，是否还具备 scaling law？
e. 在 VLA 中采用任务规划后，对性能、泛化性、持续学习能力有什么样的提升？
图 6 VLA-OS 将对其他因素进行统一，使用控制变量的方法研究范式和表征
二、抽丝剥茧：VLA-OS —— 机器人模型的「乐高式」实验平台
为了实现控制变量的实验目标，我们需要针对 VLM backbone、数据集、模型架构、训练方法进行统一。
首先，我们构建了架构统一、参数递增的 VLM 模型家族。市面上目前并没有尺寸范围在 0.5B ~ 7B 之间的 VLM。因此，我们需要自己进行构建。我们选取了预训练好的 Qwen 2.5 LLM 的 0.5B/1.5B/3B/7B 四个模型作为 LLM 基座，然后为其配上使用 DINO+SigLIP 的混合视觉编码器，以及一个映射头。然后，我们使用 LlaVa v1.5 instruct 数据集，对整个 VLM 的所有参数进行了预训练，将 LLM 变成 VLM，用于给后续实验使用。
图 7 VLA-OS 可组合模块家族
然后，我们针对三个 VLA 的任务规划范式，设计了可组合的 VLA-OS 模型家族，首次实现三大范式的公平对比。我们设计了统一的动作头（action head）和推理头（planning head），使用统一的 KV Cache 提取方法来将 VLM 中的信息输入给各个头。如图 7 所示。
其中动作头是一个与 LLM 骨干网络具有相同层数的标准 Transformer，在每一层中使用分块因果注意力（Block-Wise Causal Attention）从 LLM 骨干网络的键值（KV）中提取输入信息。规划头中，语言规划头是一个与 LLM 骨干网络具有相同层数的标准 Transformer，视觉规划头是一个使用下文定义的坐标编码词表的 transformer，而目标图像规划头是一个采用类似于 VAR 架构的自回归图像生成器，也是一个与 LLM 骨干网络具有相同层数的标准 Transformer。值得注意的是，我们的代码结构兼容 HuggingFace 上的 LLM，而不是某一种特定的 LLM backbone。
针对三种 VLA 范式（ActionOnly-VLA、Integrated-VLA、Hierarchical-VLA），我们组合使用 VLA-OS 的标准模块，构建了对应的 VLA-OS 模型实现，如图所示：
图 8 VLA-OS 研究的三种 VLA 范式和对应的网络实现
接着，为了构建能够对任务规划进行研究的统一、广泛、多样的训练数据集，我们整理和收集了六类数据集，并对它们做了统一的多模态任务规划表征标注。它们包括：
LIBERO
：一个桌面级 2D 视觉机器人仿真操作任务集合；
The COLOSSEUM
：一个桌面级的 3D 视觉机器人仿真操作任务集合；
真实世界的可形变物体操作任务集合
；
DexArt
：一个灵巧手的仿真操作任务集合；
FurnitureBench
：一个精细的、长时序任务的机器人仿真平台操作任务集合；
PerAct2
：一个桌面级 3D 视觉双臂机器人仿真操作任务集合。
我们的数据集总共包括大约 10,000 条轨迹，在视觉模态（2D 和 3D）、操作环境（仿真、现实）、执行器种类（夹爪、灵巧手）、物体种类（固体、铰链物体、可形变物体）、机械臂数量（单臂、双臂）等维度上都具有广泛的覆盖性。
图 9 VLA-OS 六大数据集
在此基础上，我们设计了三种任务规划表征，并针对所有数据进行了统一标注：
语言规划
。语言规划数据在每个时间步包含 8 个不同的键，包括
Task
、
Plan
、
Subtask
、
Subtask Reason
、
Move
、
Move Reason
、
Gripper Position
和
Object Bounding Boxes
。这些键包含对场景的理解和任务的分解。例如，对于「open the top drawer of the cabinet」这个任务来说，语言规划的标注为：
TASK: Open the top drawer of the cabinet.
PLAN: 1. Approach the cabinet. 2. Locate the top drawer. 3. Locate and grasp the drawer handle. 4. Open the drawer. 5. Stop.
VISIBLE OBJECTS: akita black bowl [100, 129, 133, 155], plate [17, 131, 56, 158], wooden cabinet [164, 75, 224, 175]
SUBTASK REASONING: The top drawer has been located; the robot now needs to position itself to grasp the handle.
SUBTASK: Locate and grasp the drawer handle.
MOVE REASONING: Moving left aligns the robot's end effector with the drawer handle.
MOVE: move left
GRIPPER POSITION: [167, 102, 166, 102, 165, 102, 164, 102, 162, 102, 161, 102, 160, 102, 158, 102, 156, 102, 154, 102, 153, 102, 151, 102, 149, 102, 147, 102, 145, 102, 143, 102]
视觉规划
。视觉规划包含了三种扎根在图像上的空间语义信息。我们将整个图像分为 32x32 个网格，采用位置标记
<loc_i>
来表示从左上到右下的第 i 个网格。我们使用这种位置标记对所有物体的边界框、末端执行器位置流和目标物体可供性这三种表征作为视觉规划表示。例如，对于「Put the cream cheese box and the butter in the basket」，视觉规划表示的结果为：
VISUAL OBJECT BBOXES: alphabet soup [<loc_500>, <loc_632>], cream cheese [<loc_353>, <loc_452>], tomato sauce [<loc_461>, <loc_624>], ketchup [<loc_341>, <loc_503>], orange juice [<loc_538>, <loc_767>], milk [<loc_563>, <loc_791>], butter [<loc_684>, <loc_783>], basket [<loc_448>, <loc_775>].
VISUAL EE FLOW: <loc_387>, <loc_387>, <loc_387>, <loc_419>, <loc_419>, <loc_419>, <loc_419>, <loc_419>, <loc_419>, <loc_419>, <loc_419>, <loc_451>, <loc_451>, <loc_451>, <loc_451>, <loc_451>.
VISUAL AFFORDANCE: <loc_354>, <loc_355>, <loc_356>, <loc_386>, <loc_387>, <loc_388>, <loc_418>, <loc_419>, <loc_420>
目标图像规划
。目标图像规划直接使用第 K 个未来步骤的图像作为目标图像。
图 10 VLA-OS 的三种规划表征
三、水落石出：视觉表征与分层范式崛起
针对规划表征和 VLA 范式，我们通过 6 大测试数据集、超百次实验，得出 14 条有价值的发现。这些发现展示出了视觉规划表征和目标图像表征相比起语言表征的优势，以及分层 VLA 范式相比起其他范式的未来发展潜力。
发现 1：VLA 模型结构和训练算法仍然很影响性能，VLA 的 scale up 时刻还未到来。
我们首先针对 VLA-OS 模型进行了性能测试。在 LIBERO benchmark 上，我们对比了现有的常见 VLA 模型，涵盖各种尺寸、是否预训练、是否做任务规划等等。我们对所有的模型都在相应的 LIBERO 数据集上进行了训练，结果如下图所示：
图 11 VLA-OS 和其他模型的性能对比
我们可以看到，VLA-OS-A 的性能优于 train from scratch 的 Diffusion Policy（提升 13.2%），预训练+微调后的 OpenVLA 模型（提升 9.1%）、CoT-VLA（提升 4.5%）以及 DiT Policy（提升 3.2%），并与预训练+微调后的 π₀-FAST（提升 0.1%）表现相当。
尽管本模型尚不及当前最先进（SOTA）的一些方法，但上述结果已充分表明我们模型的设计具有良好的性能和竞争力。需特别指出的是，VLA-OS-A 是在无预训练的条件下从头开始训练的，并仅使用了参数规模为 0.5B 的语言模型作为骨干网络。
发现 2：对于 Integrated-VLA 来说，隐式任务规划比显式任务规划更好。
我们在 LIBERO-LONG 基准测试集上开展了语言规划、视觉规划、图像前瞻规划及其组合方式的实验。该基准包含 10 个长时间跨度任务，每个任务提供 50 条示教轨迹，旨在评估 Integrated-VLA 模型中隐式规划与显式规划变体的性能表现。实验结果如下所示。
图 12 隐式和显式的 Integrated-VLA 性能对比
隐式规划范式通过引入多种辅助任务规划目标作为训练过程中的附加损失项，从而在不改变推理阶段行为的前提下，相较于 ActionOnly-VLA 实现性能提升。
这表明，将任务规划作为辅助损失引入训练可以有效提高模型性能；然而，显式规划范式性能却发生下降，这可能是因为：1）在推理阶段，显式规划必须先完成整个规划过程，随后才能生成动作输出，可能带来规划误差累积问题。
通常，规划 token 的长度远远超过动作 token（约为 2000 对 8）；2）显式规划的策略损失梯度会同时回传给 VLM 和任务规划头，可能导致梯度冲突。
发现 3：相较于语言规划表示，基于视觉的规划表示（视觉规划和目标图像规划）在性能上表现更优，且具有更快的推理速度与更低的训练成本。
我们在 LIBERO-LONG 基准测试集上开展了语言规划、视觉规划、图像前瞻规划及其多种组合方式的实验。该基准包含 10 个长时间跨度任务，每个任务提供 50 条示范，旨在系统评估不同类型规划表示的性能表现。实验结果如下所示。
图 13 不同规划表征的性能对比
发现 4：在同时采用多种规划表示的情况下，Hierarchical-VLA 相较于 Integrated-VLA 范式表现出更优的性能。
我们在 LIBERO-LONG 基准测试集上展示了 Integrated-VLA 与 Hierarchical-VLA 两种范式在不同规划表示下的性能对比结果。
图 14 同时使用多种规划表征的性能对比
发现 5：Integrated-VLA 与 Hierarchical-VLA 在二维、三维、仿真及真实环境等多种任务中均显著优于 ActionOnly-VLA，且两者整体性能相近。
我们在六个基准测试集上展示了所有 VLA 范式的性能表现及其平均成功率。可以看出，Integrated-VLA 与 Hierarchical-VLA 在所有基准上均优于 ActionOnly-VLA，且两者之间的性能差距较小，表现整体接近。
图 15 多种 benchmark 上的各种 VLA 范式性能对比
发现 6：Integrated-VLA 与 Hierarchical-VLA 在任务规划预训练中均表现出相似的收益，任务成功率均有所提升，增幅相近。
发现 7：Hierarchical-VLA 展现出最强的泛化能力。
我们展示了所有 VLA 范式在 The-Colosseum (ALL-Perturbation) 基准测试集上的泛化性能，以及 Integrated-VLA 与 Hierarchical-VLA 在 LIBERO-90 上进行任务规划预训练后的性能提升情况，并在 LIBERO-LONG 上进行了测试评估。
结果表明，Hierarchical-VLA 实现了最优的泛化性能，而 Integrated-VLA 与 Hierarchical-VLA 均能从任务规划预训练中获得相似的性能提升。
图 16 泛化性能对比
发现 8：Hierarchical-VLA 在任务规划方面优于 Integrated-VLA。
为了明确任务失败是源于规划模块还是策略学习模块，我们对 Integrated-VLA（仅评估其任务规划部分）与 Hierarchical-VLA 在 LIBERO-LONG 基准上进行分析性评估，覆盖三种不同的规划表示形式。
具体地，我们手动将每个长时序任务划分为若干子任务，并在评估过程中强制将环境重置至各子任务的初始状态。我们分别计算每个子任务起点对应的规划输出的平均正确率（0 或 1）以及动作头的执行成功率（0 或 1），从而获得每个任务轨迹的任务分解得分（Task Decomposition Score，DCS）与策略执行得分（Policy Following Score，PFS）。需要指出的是，对于 Hierarchical-VLA，我们在测试 PFS 时提供了任务规划的真实结果（ground truth）。
图 17 纯规划性能对比
我们可以观察到，在不同的规划表示下，Hierarchical-VLA 在任务规划方面始终优于 Integrated-VLA，表现出更强的规划能力。
发现 9：基于视觉的规划表示更易于底层策略的跟随。
如上所述，我们展示了 Hierarchical-VLA 在不同规划表示下的策略执行得分（Policy Following Score, PFS），用于衡量底层策略对规划结果的执行能力。结果表明，基于视觉的规划表示在策略执行过程中具有更高的可跟随性。
图 18 下层策略跟随任务规划性能对比
我们可以观察到，基于视觉的规划表示（包括视觉规划与图像前瞻规划）更易于被底层策略所跟随，表现出更高的策略可执行性。
发现 10：语言规划表示头的自回归特性是其训练成本较高和推理速度较慢的主要原因。
为进一步探究不同规划表示在训练成本与推理速度上的差异，我们在下图中展示了 Hierarchical-VLA 中不同规划头的前向传播过程。
图 19 不同规划头之间的工作模式对比
由于语言规划头与视觉规划头具备自回归特性，它们在生成规划 token 时需进行数百次前向传播，导致训练成本较高、推理速度较慢；而图像前瞻规划头（本工作中采用类似 VAR 的生成器）仅需前向传播 7 次即可生成完整的规划 token，推理开销大约是语言与视觉规划头的 1/100，显著更高效。
发现 11：所有 VLA 范式的性能随着标注动作的示范数据量增加而提升，具备良好的数据可扩展性。
为评估数据可扩展性，我们在 LIBERO-LONG 数据集上进行实验，该数据集包含 10 个任务，共计 500 条示范。我们分别使用 10%、40%、70% 和 100% 的数据量对三种 VLA 范式（模型规模为 S）进行训练，并评估其性能随数据规模变化的趋势。
图 20 VLA 的数据可扩展性
我们可以看到，所有 VLA 范式均具备良好的数据可扩展性，随着标注动作示范数据量的增加，其性能稳步提升。
发现 12：在约 5,000 条示范数据的「从零训练」任务中，LLM 骨干网络应限制在 0.5B 参数规模以内，或总模型参数规模不超过 1B，才能获得更优的性能表现。
为评估模型可扩展性，我们在 LIBERO-90 数据集上进行了实验，该数据集包含 90 个任务，共计 4,500 条示范。我们使用全部训练数据，选取了不同参数规模（0.5B、1.5B、3B 和 7B）的 Qwen-2.5 语言模型作为骨干网络进行对比实验，以探索模型规模对性能的影响。
图 21 VLA 的模型可扩展性
我们可以观察到，随着模型规模的增大，各种 VLA 范式的性能并未随之提升，反而在模型规模超过 3B 时出现下降的趋势。
发现 13：相比不含任务规划的范式（ActionOnly-VLA），包含任务规划的 VLA 范式（Integrated-VLA 与 Hierarchical-VLA）在前向迁移能力上更强，但遗忘速度也更快。
我们在 LIBERO-LONG 的 10 个任务上，按照任务顺序对三种 VLA 范式进行持续学习能力评估。实验中采用 Sequential Finetuning（SEQL）作为终身学习算法，评估指标采用 LIBERO 提供的原始度量方式，包括前向迁移（Forward Transfer，FWT）和负向后向迁移（Negative Backward
Transfer，NBT）。
图 22 不同 VLA 范式的持续学习能力
发现 14：相较于基于语言的规划表示，基于视觉的规划表示在持续学习中展现出更优的前向迁移能力，且遗忘速度更慢。
我们在 LIBERO-LONG 的 10 个任务上，依次测试三种规划表示在持续学习场景下的表现。实验统一采用 Sequential Finetuning（SEQL）作为终身学习算法，并使用 LIBERO 提供的原始评估指标，包括前向迁移（Forward Transfer，FWT）和负向后向迁移（Negative Backward Transfer，NBT）。
图 23 不同规划表征的持续学习能力
四、月映万川：机器人 VLA 模型的「第一性原理」
设计指南（抄作业时间！）
a) 首选视觉表征规划和目标图像规划，语言规划仅作为辅助；
b) 资源充足选分层 VLA（Hierarchical-VLA），资源有限选隐式联合（Integrated-VLA）。
c) 对于小于五千条示教轨迹的下游任务来说，模型规模控制在 1B 参数内完全够用。
破解长期谜题
a) 目前 VLA 的结构和算法设计仍然很重要，还没有到无脑 scale up 的时刻。
b) 策略学习和任务规划目前来说都还需要提升。
c) 任务规划预训练是有效的。 d) 持续学习的代价：规划模型前向迁移能力更强，但遗忘速度更快。
未来四大方向
视觉为何优于语言？→ 探索空间表征的神经机制
理论上来说，三种规划表征针对于目标操作任务所提供的信息均是完备的，那么为什么会有如此大的性能偏差呢？
如何避免规划与动作的梯度冲突？→ 设计解耦训练机制
无论是在隐式 Integrated-VLA 和显式 Integrated-VLA 的比较，还是在分层 VLA 和 Integrated-VLA 的泛化比较中，都是「损失函数解耦」的一方获胜，也即任务规划的损失梯度和策略动作的损失梯度耦合地越少，最终效果越好。
超越 KV 提取 → 开发更高效的 VLM 信息蒸馏架构
VLA-OS 目前采用的是类似于的模型结构设计，也就是提取每一层 LLM 的 KV 来给动作头和规划头。但是，这使得动作头和规划头的设计受限（例如，它们都必须和 LLM 有同样多的层数的 Transformer）。是否还有更为高效、限制更少的设计？
构建万亿级规划数据集 → 推动「规划大模型」诞生
VLA-OS 的实验确认了无论使用哪种范式，增加任务规划都会对模型性能有提升，而且对规划头进行预训练还会进一步提升性能。因此，如何构建足够量的机器人操作任务规划数据集将是很有前景的方向。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com