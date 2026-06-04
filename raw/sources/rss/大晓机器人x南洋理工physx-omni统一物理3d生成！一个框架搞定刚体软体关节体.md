---
title: "大晓机器人x南洋理工PhysX-Omni统一物理3D生成！一个框架搞定刚体/软体/关节体"
date: 2026-06-03
source: "量子位"
url: "https://mp.weixin.qq.com/s/lhzwJY92jPnNwYwif2ZAjQ"
rss_id: "2247894624_3"
---
曹子昂 投稿
量子位 | 公众号 QbitAI
3D生成领域，一个核心矛盾正在浮出水面。
现有方法生成的3D资产，外观和几何质量越来越高——
但大多只能“看”，不能“用”
。
没有真实尺度，没有材料属性，更不具备运动能力和交互语义。想直接放进仿真器给机器人训练？差得远。
更棘手的是，刚体、可形变物体、关节物体三大类别，此前的方法各管一摊，没有统一框架。而simulation-ready的物理3D数据本身就极度稀缺，连训练数据都凑不齐。
为应对这一系列难题，
大晓机器人联合南洋理工大学刘子纬教授团队
，提出了PhysX-Omni——
首个统一的simulation-ready物理3D生成框架，一次性覆盖刚体、可形变与关节物体
。
核心思路，是为VLM设计了一种全新的几何表征
（template-based RLE）
，让模型在不引入额外special token的前提下，直接显式建模高分辨率三维结构，同时规避了传统分割带来的误差累积。
配套地，团队构建了首个通用物理3D数据集PhysXVerse
（8K+高质量资产，覆盖2K+类别）
，以及首个统一评测基准PhysX-Bench。
实验中，PhysX-Omni在几乎所有几何与物理属性指标上均达到SOTA，Absolute Scale误差相比此前方法降低了两个数量级。
方法介绍
物理几何表征
为了实现高质量生成，PhysX-Omni提出了一种全新的几何表征
。
受经典二维Run-Length Encoding
（RLE）
启发，该方法设计了一种template-based RLE representation，用于显式、高效地建模高分辨率三维结构。
具体而言，系统首先将3D资产体素化
（voxelization）
，并根据对象的部件层级结构划分为part-level voxels。
随后，每个部件级体素会沿z-axis切分为一系列二维二值mask，并对每一层采用紧凑的二维RLE编码，将占据区域高效转换为文本token表示。
不同于传统二维RLE，三维结构在相邻切片之间通常具有较强的空间冗余性，尤其是在平滑区域或重复结构中。
为进一步提升压缩效率，PhysX-Omni提出了template layers的概念
：
多个结构相似的切片可以共享同一个模板，仅记录它们相对于模板的残差变化，而无需对每一层进行独立编码。
通过复用跨层结构模式，该方法在保留精细几何信息的同时，大幅减少了token数目。
此外，这种template-based representation在整个生成过程中始终保持显式三维结构信息，因此相比传统autoregressive geometry generation方法具有更强的鲁棒性，能够有效降低预测误差累积问题，并更加适用于复杂高分辨率三维结构建模。
PhysXVerse数据集
为了缓解simulation-ready physical 3D数据稀缺的问题，PhysX-Omni构建了首个通用物理化3D数据集PhysXVerse
。
为了获得高质量的simulation-ready assets，研究团队基于PartVerse提供的人类验证部件分割结果，并进一步结合此前提出的human-in-the-loop physical annotation pipeline，对物理属性进行精细标注。
最终，PhysXVerse包含超过8.7K个高质量simulation-ready physical 3D assets，覆盖2.9K+类别，包括室内家具、无人机、机器人、车辆以及大型场景组件等多种复杂对象。
相比现有simulation-ready datasets，PhysXVerse在类别多样性与物理属性覆盖范围上都有显著提升。
PhysX-Bench
为了全面评估simulation-ready physical 3D generation，研究团队提出了首个统一benchmark——
PhysX-Bench
。
该benchmark基于开源Vision-Language Model
（Qwen3.5）
与physics-based simulation，对生成结果进行真实场景下的综合评估。
为了降低复杂物理属性与三维结构理解难度，PhysX-Bench不直接输入物理参数，而是通过渲染图像与仿真视频进行评测，从而更加贴近真实人类感知与机器人应用场景。
PhysX-Bench从六个核心维度对生成结果进行评价，包括Geometry、Absolute Scale、Material、Affordance、Kinematics与Description
。
其中，Geometry用于评估三维结构一致性与视觉质量，包括CLIP alignment、multi-view 3D consistency以及visual quality等指标；Absolute Scale用于衡量生成结果在真实世界中的尺寸合理性；Description则评估对象及部件级别的语义理解能力。
在物理属性评估方面，Material通过自由落体、水中下落等物理模拟视频，对密度、杨氏模量以及泊松比等材料属性进行间接评测；Affordance则基于人类常识，对对象的交互合理性与功能区域进行评估；Kinematics通过运动视频分析关节运动的一致性、合理性以及整体运动协调性，从而衡量生成结果是否具备真实可信的物理行为。
通过结合物理仿真与强大的VLM推理能力，PhysX-Bench能够更加真实、全面地评估simulation-ready physical 3D assets的生成质量与实际可用性，为后续Physical AI与Embodied AI研究提供了统一评测标准。
实验环节
在传统评估指标上的结果
研究团队将PhysX-Omni与PhysXGen、Articulate-Anything、MonoArt以及PhysX-Anything等最新simulation-ready 3D generation方法进行了系统对比，并在PhysXVerse与PhysX-Mobility数据集上进行了大量实验。
结果表明，
PhysX-Omni在几乎所有几何与物理属性指标上都取得了最佳性能，展现出了统一simulation-ready physical generation framework的显著优势
。
PhysX-Omni在物理属性预测上实现了大幅提升。
特别是在Absolute Scale评估中，其误差相比PhysXGen与PhysX-Anything降低了两个数量级，说明模型对真实世界尺寸与物理先验具备更强理解能力。
在Material、Affordance、Description以及Kinematics等维度上，PhysX-Omni也均取得了最优结果。
其中，运动学
（Kinematics）
提升尤为显著，证明该框架能够更加准确地推理关节结构、运动类型以及运动约束，从而生成具备真实物理行为的articulated assets。
PhysX-Bench上的结果
为了更加全面地评估不同方法在真实场景中的泛化能力，研究团队进一步在新提出的benchmark——PhysX-Bench 上进行了系统实验。
不同于传统依赖ground-truth标注的评测方式，PhysX-Bench更强调真实场景下的ground-truth-free evaluation，其测试图像同时包含真实世界照片与渲染生成图像，覆盖大量复杂类别与challenging in-the-wild cases。
Benchmark从Geometry、Absolute Scale、Material、Affordance、Kinematics与Description六个维度，对 simulation-ready physical 3D generation进行综合评估。
实验结果表明，
PhysX-Omni在绝大多数physical attributes上均取得了最佳性能，尤其在Absolute Scale、Material、Affordance、Kinematics与Description等维度表现尤为突出
。
同时，在Affordance与Description等任务上，PhysX-Omni也展现出了更强的物理推理与语义理解能力。
此外，论文还进一步展示了大量可视化结果。
实验表明，PhysX-Omni在复杂结构、精细几何以及challenging articulated objects上都展现出了更强鲁棒性。
相关应用
为了验证生成结果在真实仿真环境中的可用性，研究团队进一步将PhysX-Omni生成的simulation-ready 3D assets直接部署到物理模拟器中，用于机器人交互与策略学习。
实验证明了为未来大规模embodied AI数据构建提供了新的可能性。
除了object-level generation，研究团队还进一步探索了PhysX-Omni在scene-level simulation-ready generation中的潜力。
这些结果进一步证明，PhysX-Omni不仅能够生成高质量simulation-ready assets，还为未来scene-level physical world generation、机器人训练环境构建以及embodied AI world modeling提供了重要基础。
小结一下
PhysX-Omni提出了首个统一的simulation-ready physical 3D generation framework，实现了对刚体、可形变物体以及关节物体的统一建模。
相比传统仅关注外观与几何的3D生成方法，PhysX-Omni能够同时生成几何结构、材料属性、运动学参数、交互能力等丰富物理信息，从而直接构建可用于真实仿真环境的simulation-ready 3D assets。
为解决数据与评测缺失问题，研究团队进一步构建了通用数据集PhysXVerse与统一benchmark PhysX-Bench。
大量实验结果表明，PhysX-Omni在几何质量、物理一致性以及运动建模上均显著优于现有方法，并能够直接应用于机器人策略学习、场景生成以及embodied AI等下游任务，为未来Physical AI与物理世界生成提供了新的研究方向
。
最后简单介绍一下论文团队。
论文第一作者为曹子昂，研究方向主要聚焦于3D AIGC、Physical AI与具身智能。
论文主要合作者包括来自南洋理工大学的李海天、姚润茂、洪方舟、陈昭熹，以及大晓机器人的刘英豪和潘亮。通讯作者为南洋理工大学刘子纬教授。
此前，大晓机器人曾发布ACE具身研发范式——“环境式数据采集—世界模型——泛化大脑模组”，新研究成果和研发范式或将为其打造能真正理解并交互物理世界的机器人的最强大脑提供核心数据基建。
论文链接：https://arxiv.org/abs/
项目主页：hthttps://physx-omni.github.io/
GitHub代码：https://github.com/physx-omni/PhysX-Omni
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
我们正在招聘一名眼疾手快、关注AI的
学术编辑实习生
🎓
感兴趣的小伙伴欢迎关注 👉
了解详情
🌟 点亮星标 🌟
科技前沿进展每日见