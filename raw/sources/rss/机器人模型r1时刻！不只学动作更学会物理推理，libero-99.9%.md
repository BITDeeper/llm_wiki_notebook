---
title: "机器人模型R1时刻！不只学动作更学会物理推理，LIBERO 99.9%"
date: 2026-05-11
source: "新智元"
url: "https://mp.weixin.qq.com/s/o-Y6Z2zhNSGUuiYUepIwhA"
rss_id: "2652699330_1"
---
新智元报道
编辑：犀牛
【新智元导读】
机器人不只要会动，更要会在物理世界中「想」！至简动力携手北大、港中文推出LaST-R1，让机器人「先想明白再下手」——仅靠1条轨迹预热RL就在LIBERO狂刷99.9%，真机任务从52.5%暴涨至93.75%，全面碾压SOTA。
LaST-R1 的意义在于：
具身大模型的 RL 后训练，不再只是让机器人更会动，而是让它更会理解为什么这样动。
当推理也能被环境反馈持续优化，机器人就不只是复现演示数据。
它开始在交互中形成自己的物理直觉。
这可能是具身大模型从「会模仿
」
走向
「
会思考行动
」
，也是走出实验室，走进千家万户的关键一步。
论文链接:
https://arxiv.org/abs/2604.28192
项目主页:
https://siriyep.github.io/last-r1/
代码链接：
https://github.com/CHEN-H01/LaST-R1
LaST₀具身基座模型首创Latent多模态思维链,将世界模型和具身模型对物理世界的推理与动作生成能力完美结合。
已被ICML2026选为Spotlight论文,并已成为北美顶尖实验室对比的Baseline
（arxiv链接：https://arxiv.org/abs/2601.05248
）
。
LaST-R1则是作为LaST₀基座模型的续作,提出具身大模型后训练的全新范式。
论文一经上传，很快在x上炸了！
机器人真的「理解」
自己为什么这么做吗？
一句指令：
Open bag zipper。
机器人可以立刻伸手去拉。但它真的理解
「
拉链要沿着袋口运动」
这个物理过程吗？
过去几年，
OpenVLA
、
π0
、
π0.5
等具身模型已经能把图像、语言和动作连接起来。
但真实世界里，一个问题越来越明显：
会模仿，不等于会适应。
很多机器人学到的不是「
拉链如何运动」，
而是几条「
像拉拉链」的轨迹。
一旦袋子位置、拉链角度或光照变化，动作就可能失效。
因为变化的不是像素，而是物理关系。
现有多数
具身模型
仍遵循：
Observation → Action
看到环境，直接生成动作。
但机器人真正缺少的，也许是行动前的物理推理。
LaST-R1
要做的，就是让机器人在物理环境上学会先「
想」
，再「动」。
LaST-R1：不只是强化「动作」
更要强化「物理推理」
近日，
至简动力、香港中文大学、北京大学计算机学院多媒体信息处理国家重点实验室
提出了一种面向机器人操作的自适应物理隐空间推理强化学习框架 LaST-R1（Reinforcing Robotic Manipulation via Adaptive Physical Latent Reasoning）。
LaST-R1：(a) 不同于仅严格优化动作的 vanilla RL 基线方法，(b) 我们的方法利用 LAPO 联合优化自适应 latent CoT 与物理执行过程；通过连接认知推理与控制，LaST-R1 实现了 (c) 更快的收敛速度、更高的仿真成功率，以及 (d) 更强的真实世界泛化能力
它的核心思想是：
不只优化
机器人
的「手」来操纵，也优化它的「脑」来推理。
LaST-R1 在动作生成前引入
latent CoT
：模型先在隐空间中建模场景结构、物体关系和未来物理动态，再生成动作。
相比语言 CoT，latent reasoning 更适合机器人。
因为接触、摩擦、位姿变化等物理信息，往往难以语言化，却可以在连续隐空间中被表示。
更关键的是，LaST-R1 提出
LAPO（Latent-to-Action Policy Optimization）
，把 latent reasoning 纳入 RL 优化闭环。
过去的具身模型 RL 主要优化 action space：哪个动作成功，就强化哪个动作。
LAPO 则让环境奖励同时优化：
动作本身，以及动作之前的隐空间物理推理。
成功轨迹强化「好动作」，也强化产生动作前的「推理」；失败轨迹不只修正动作，也调整模型内部的物理理解。
此外，LaST-R1 引入
adaptive latent CoT
：简单任务少想一点，复杂接触操作多想一点。
也就是说，机器人开始学会：
什么时候该思考，什么时候该执行。
实验中，
LaST-R1 在 LIBERO benchmark 上仅用
1 条轨迹 warm-up
，通过在线 RL 后训练取得
99.9% 平均成功率
；在真机任务中，仅用
30 条轨迹 warm-up
，将平均成功率从
52.5% 提升到 93.75%
，超过使用
100 条专家轨迹
训练的 π0.5。
更重要的是，在未见物体、背景变化和光照变化下，LaST-R1 的性能下降更小。
这说明它学到的不是单一轨迹，而是更可迁移的空间语义和物理动态。
LaST-R1 框架概述
LaST-R1：(a) LaST-R1 是一个统一模型，以视觉观测和语言指令作为输入，其中视觉基础模型提供具有物理语义约束的 latent targets，用于在动作生成前引导 latent CoT 推理；(b) 在 LAPO 强化学习后训练过程中，LaST-R1 以闭环方式与环境交互，并将 latents、actions 和 rewards 存储到 rollout buffer 中，以联合重塑 latent space 与 action space；进一步地，模型通过基于预测概率学习生成 <latent_end> token，实现自适应推理，从而在不同任务中动态调整推理长度；(c) 通过 LAPO，LaST-R1 能够在多样化任务中形成自适应推理长度，从而提升泛化能力与执行稳定性
整个 LaST-R1 框架可以概括为三个关键阶段：
先推理、再优化、动态决定想多久
。
第一阶段：Latent Reasoning-before-Acting
给定当前视觉观测和语言指令，LaST-R1 不会直接生成动作，而是先生成一段
latent reasoning embeddings
，作为行动前的「隐空间物理思考」，用于建模物体关系、未来状态和操作动态。随后，模型再基于这些 latent reasoning 并行生成 action tokens。这一步解决的是：
如何让动作生成建立在物理推理之上。
第二阶段：LAPO：同时优化 latent 和 action
LaST-R1 的核心算法是
LAPO（Latent-to-Action Policy Optimization）
。
传统具身大模型 RL 主要优化 action，而 LAPO 将 latent reasoning 也纳入强化学习目标，让环境奖励同时塑造「怎么想」和「怎么动」。
论文中最关键的是
latent-level ratio surrogate
：
其中，
表示 rollout 时旧策略生成的 latent sequence，
表示当前策略重新生成的 latent sequence，
σ
控制 latent 分布宽度。
直观来说，如果某条轨迹成功，LaST-R1 不仅会强化对应动作，也会强化动作之前产生的「好推理」。
随后，LAPO 将 latent 和 action 放进统一的 clipped objective 中：
其中，
表示同时优化 latent reasoning 和 action generation，
是 advantage estimate，
用于限制策略更新幅度。
最终，总训练目标为：
这意味着：
LaST-R1 的 RL 后训练不只是优化机器人的动作结果，也在优化行动前的物理推理过程。
第三阶段：Adaptive Latent CoT
不同任务需要不同的思考长度。因此，LaST-R1 引入
Adaptive Latent CoT
，通过
<latent_end>
token 让模型动态决定何时结束 latent reasoning 并进入 action generation。
这是为了让机器人根据任务难度自适应分配推理预算。
也就是说，LaST-R1 不是让机器人每一步都固定想同样久，而是让它学会：
简单状态快速执行，复杂状态多想一步。
为了优化这个结束标识符
<latent_end>
token的自适应生成，训练目标需要进一步加上L_end。
实验结果分析
1. 仿真实验：LIBERO 99.9%
LaST-R1 在 LIBERO benchmark 上进行系统评估，覆盖 Spatial、Object、Goal 和 Long 四个任务套件。
实验在
one-shot SFT warm-up
设置下进行，随后进入在线 RL 后训练。结果显示，LaST-R1 在四个 suite 上分别达到
99.8% / 100.0% / 100.0% / 99.8%
，平均成功率达到
99.9%
，超过 OpenVLA-OFT、π0.5、SimpleVLA-RL 和 πRL 等强基线。
相比只优化动作空间的 Action-Only + PPO，LaST-R1 + LAPO 收敛更快、最终成功率更高，说明 latent reasoning 与 action generation 的联合优化能够为 RL 提供更稳定的「认知缓冲区」，从而提升复杂长程操作能力。
2. 真机实验：从 52.5% 到 93.75%
LaST-R1 在四个真实操作任务上进行测试，覆盖单臂高精度插入、双臂协同、接触式擦拭和连续旋转等复杂物理交互。
为了突出 RL 后训练效果，论文将其与 SOTA 模型 π0.5 对比：π0.5 使用 100 条专家轨迹进行 SFT，而 LaST-R1 仅使用 30 条轨迹 warm-up，并通过 RL 后训练继续优化。
结果显示，LaST-R1 将真机平均成功率从 warmup后的
52.5%
提升到
93.75%
，显著超过 π0.5 的
71.25%
，说明其优势不仅存在于仿真环境，也能迁移到真实物理交互中，并形成更稳定的执行策略。
3. 泛化实验：换物体、换背景、换光照，依然稳
在 LIBERO OOD 设置中，研究团队采用 9 个 seen tasks 进行在线 RL，并保留 1 个 held-out task 做泛化测试。
结果显示，Action-Only + PPO 容易出现性能停滞甚至退化，而 LaST-R1 + LAPO 能在 OOD tasks 上持续提升，说明 latent reasoning 能帮助模型学到更可迁移的空间语义和物理动态。
在真实世界中，论文进一步测试了
unseen object、background variation 和 lighting condition
三类扰动。
相比 SFT π0.5，LaST-R1 在这些变化下保持更小的性能下降，说明它并不是简单记住训练场景中的动作轨迹，而是形成了更鲁棒的物理推理与动作生成能力。
结语：具身大模型不只是要会行动
而是开始学会「思考推理」
LaST-R1 的意义，不只是把 LIBERO 平均成功率推到
99.9%
，也不只是让真机任务成功率提升到
93.75%
。
更重要的是，它提出了一种新的具身大模型后训练范式：
强化学习不应该只优化机器人的动作，也应该优化动作背后的物理推理过程。
过去，我们更关心机器人能不能生成正确动作。
现在，LaST-R1 进一步追问：
机器人能不能在行动前进行正确的物理推理？
通过 LAPO，环境 reward 可以直接塑造 latent reasoning space；通过 adaptive latent CoT，机器人可以根据任务难度动态调整思考长度。
这意味着，机器人不再只是复现演示数据中的动作轨迹，而是在交互中逐步形成自己的物理直觉。
从这个角度看，LaST-R1 让 具身大模型强化学习从：
看见就动
走向：
先想明白，再稳定行动。
当具身大模型开始学会在 latent space 中思考，机器人距离真正的自主操作，也许又近了一步。
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！