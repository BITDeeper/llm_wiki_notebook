---
title: "ICML 2026 | PhysForge框架来了，让3D资产从静态模型变成可交互对象"
date: 2026-06-09
source: "机器之心"
url: "https://mp.weixin.qq.com/s/en_3cDxnKZRTDdwnSeVQTQ"
rss_id: "2651037936_3"
---
在交互式虚拟世界和具身智能快速发展的今天，高质量 3D 资产已经不再只是 “看起来像” 就足够。一个柜门不仅要有柜门的外观，还需要知道绕哪条轴旋转；一个按钮不仅要有按钮的形状，还需要具备 “按下 / 弹起” 的状态；一个抽屉不仅要有完整几何，还需要拥有滑动方向、运动范围、材质和质量等物理属性。该研究已被 ICML 2026 接收。
然而，现有 3D 生成方法大多仍停留在静态几何和纹理层面。它们可以生成视觉上精致的模型，却往往缺少支撑真实交互的功能逻辑与层级化物理结构。这类 “静态外壳” 难以直接进入机器人仿真或游戏引擎环境。
为了解决这一难题，香港大学和腾讯混元等机构的研究者们提出了
PhysForge
，一个面向交互式虚拟世界的
physics-grounded 3D asset generation
框架。该框架仅需单张输入图像，就能生成具备部件结构、物理属性、功能语义和精确运动学参数的 3D 资产。
论文题目：PhysForge: Generating Physics-Grounded 3D Assets for Interactive Virtual World
项目主页：https://hku-mmlab.github.io/PhysForge/
论文链接：https://arxiv.org/abs/2605.05163
一、效果展示
如图所示，PhysForge 只需要单张输入图像，就可以生成 physics-grounded 3D assets。生成结果不仅包含高质量几何和纹理，还具备部件结构，并为每个部件给出详细的物理属性标签。
对于可动部件，PhysForge 还会预测关节轴、关节原点和运动范围等运动学参数，并给出可交互方式。这使得一个生成出的水壶、柜门、按钮或台灯，不再只是可观看的模型，而是可以被打开、按压、抓取或放入交互式虚拟世界中的资产。
在机器人仿真展示中，PhysForge 生成的资产被导入 RoboTwin 环境后，机械臂能够识别并操作其功能部件，例如按照关节约束打开柜门、拉出抽屉或抓取指定部件。
二、为什么需要 Physics-Grounded 3D Assets？
过去一段时间，3D 生成模型在整体形状、纹理和视觉质量上进步很快：模型是否好看、几何是否完整、表面是否逼真，已经成为常规评价维度。但在具身智能和交互式虚拟环境中，视觉逼真只是第一步。
一个真正可交互的 3D 资产，还需要回答一组更深层的问题：
物体由哪些功能部件组成？
每个部件具有什么语义、材质和质量？
哪些部件可以被推动、抓取、旋转或滑动？
部件之间存在怎样的层级和父子关系？
可动部件的关节类型、轴向、原点和运动范围分别是什么？
这些信息共同决定了资产能否被仿真器、游戏引擎和具身智能系统真正使用。没有物理属性和运动学定义的模型，即便视觉上再精致，也很难成为 “可操作” 的环境对象。
PhysForge 的核心观点正是：交互式资产生成必须根植于功能逻辑和层级化物理结构。形状不应只是外观的结果，也应该是功能、材料、约束和可操作性的共同体现。
三、方法介绍：两阶段 “规划 - 生成” 策略
PhysForge 将复杂的 physics-grounded 3D asset generation 解耦为两个阶段：先由 VLM 进行物理规划，再由 diffusion model 完成几何、纹理与运动学参数的联合生成。
第一阶段是 VLM-based Planning
。研究者们将 VLM 训练成一个 “physical architect”：它接收单张图像、可选 2D mask，以及由 TRELLIS 生成的 3D voxel 表示，并自回归生成 Hierarchical Physical Blueprint。
这个物理蓝图定义了每个部件的 3D bounding box、父子层级关系、关节类型，以及材质、质量、部件功能、状态机和 atomic affordance 等信息。换句话说，模型会先在语义和物理层面判断 “这个物体应该如何被拆解、如何被使用、又应该如何运动”。
第二阶段是 Diffusion-based Generation
。VLM 擅长进行结构和语义规划，但关节轴方向、关节原点、运动范围等连续 3D 参数，仍然需要更精细的生成机制。因此，PhysForge 将这些精确数值交给 diffusion stage 来 “锻造”。
为此，研究者们提出了
KineVoxel Injection (KVI) 机制
。KVI 将每个可动部件的关节原点、关节轴和运动限制编码为 kinematic voxel，并与几何 voxel 一起进入统一的 diffusion denoising 过程。这样，模型可以在同一个生成过程中协同学习 “部件长什么样” 和 “部件应该怎么动”。
最终，PhysForge 能够同时输出高质量几何、纹理、部件结构和精确运动学参数，让单图生成的 3D 资产具备直接进入交互环境的能力。
四、PhysDB：15 万资产的物理标注基座
为了支撑这一任务，研究者们构建了 PhysDB，一个包含 15 万 3D 资产的大规模数据集。PhysDB 来源于 Objaverse，覆盖 household、industrial、weapons、personal、vehicles、tech & electronics、cultural items 等七大类别，并为资产提供细粒度、层级化的物理标注。
PhysDB 的标注体系分为四层：
Holistic properties：描述物体整体尺度、类别和使用场景，例如 kitchen、bedroom 等。
Static properties：描述部件级语义、材质和质量，例如 metal、wood 等。
Functional properties：描述部件的内在功能和状态机，例如 “to contain” 或按钮的 pressed/released 状态。
Interactive properties：描述可交互属性和运动学定义，包括 pushable、graspable、joint type、parent part、axis origin、axis direction 和 joint limits。
这套标注让模型学习的不只是 “部件在哪里”，更是 “部件是什么、能做什么、应该如何被操作”。它为 PhysForge 从静态视觉生成走向 physics-grounded 3D asset generation 提供了关键数据基础。
五、丰富的下游应用
PhysForge 生成的资产不是停留在展示层面的静态模型，而是可以直接服务于多个下游场景。
第一，机器人仿真。对于机器人训练和评测，PhysForge 生成的资产可以作为可操作的环境对象扩充仿真场景，减少手工建模、关节绑定和物理参数配置成本，让机器人更容易在多样化物体上学习真实交互。
第二，虚拟世界与游戏引擎。在 Unity、Unreal Engine 等交互式环境中，PhysForge 生成的资产已经具备材质、质量、功能和关节信息，开发者可以更直接地构建复杂交互逻辑，而不必从零手工配置每一个可动物体。
第三，具身智能 agent 与环境交互。由于第一阶段会生成文本化的 physical blueprint，agent 可以通过自然语言查询资产的结构和功能信息，从而形成更明确的任务计划。例如面对一个柜子，agent 可以知道柜门在哪里、把手属于哪个部件、关节如何旋转，以及应该如何完成打开操作。
六、总结
PhysForge 将 3D 生成的目标从 “生成静态外观” 推进到 “生成可交互资产”。通过 VLM-based Planning 与 Diffusion-based Generation 的两阶段设计，该框架先规划层级化物理蓝图，再通过 KineVoxel Injection 生成高质量几何、纹理和精确运动学参数。
同时，PhysDB 为这一方向提供了大规模、细粒度、层级化的物理标注基础。面向交互式虚拟世界、机器人仿真和具身智能数据引擎，physics-grounded 3D asset generation 将成为重要基础能力。PhysForge 则迈出了关键一步：让生成的 3D 资产不止 “看起来真实”，也能真正 “被理解、被操作、被交互”。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com