---
title: "可控性与自然度不再「二选一」！token砍到1/6，NTU+港中文实现动作越控制越自然"
date: 2026-03-31
source: "量子位"
url: "https://mp.weixin.qq.com/s/j5dr9kzeBS4JCbHqUJs2rw"
rss_id: "2247879473_3"
---
MoTok团队 投稿
量子位 | 公众号 QbitAI
想让动作生成既听指挥又自然流畅？
现有方法里，控制一强动作就僵，保自然度又容易跑偏——这俩需求总得牺牲一个。
针对这一矛盾，
南洋理工大学与香港中文大学
的研究团队提出了
MoTok
。研究团队认为，现有方法把两类本不该混在一起的任务，塞进同一个生成阶段里处理：
一类是高层语义规划，决定动作“要做什么”；另一类是低层细节的重建和控制，决定动作“要怎么精确做到”。
前者需要全局、一致的动作组织能力，后者则强调局部、高频的细粒度约束。
两者在同一阶段里相互拉扯，结果就是可控性和自然度此消彼长，难以兼得。
MoTok首创diffusion-based离散运动tokenizer，为条件运动生成
（conditional motion generation）
提出通用新范式，高效结合离散token和连续diffusion的优势。在显著的token量压缩
（SOTA方法的1/6）
下，MoTok将轨迹误差降低89%
（0.72 cm→0.08 cm）
，FID降低65%
（0.083→0.029）
，并观察到增强关节轨迹控制下FID再降58%
（0.033→0.014）
，摆脱现有方法的取舍困境，实现
“越控制越自然”
。
三阶段拆解，为动作生成提供统一范式
MoTok为conditional motion generation提出了通用的
Perception–Planning–Control三阶段范式
：先理解条件，再在离散token空间里做语义规划，最后由diffusion-based decoder对动作细节进行重建和细粒度控制。
通过灵活的全局
（“整体上要做什么”）
/局部
（“每个时刻要关注什么”）
条件注入形式，Perception阶段能适配不同的条件输入和动作生成任务；
由Planning和Control两个阶段各自处理更擅长的部分，离散token和连续diffusion的优势得到有效结合，摆脱现有模型——无论是全局diffusion模型，还是离散token生成模型——长期将
高层语义规划
与
低层细节重建和控制
压在同一生成阶段处理的局限。
压缩六分之一token，动作质量仍在提升
传统基于离散token的方法，token既要保留高层语义用于规划，又要足够多的低层细节用于重建，这推高了token数量，也让下游生成器更难学。
MoTok的做法是，
利用diffusion-based decoder较强的细节重建能力，让离散token保留更有利于规划的语义信息
。这样一来，token可以更精简，Planning阶段也更容易生成。
论文中对此进行了启发性的对比实验
（下表）
。作者首先在完全相同的离散token上只比较decoder的能力：在冻结encoder和codebook的情况下，仅把原有decoder换成MoTok diffusion-based decoder，就能
显著改善重建效果。
接着，作者又进一步比较token本身的质量：将原有token换成MoTok token时，不管后面接哪一种decoder，文生动作
（text-to-motion，T2M）
生成效果都观察到大幅提升
；
而在动作生文
（motion-to-text，M2T）
任务上，MoTok token也更容易被翻译成准确的
文字描述。
对于T2M任务，论文尝试了不同生成离散token方式：离散diffusion
（DDM）
和自回归
（AR）
，
这种tokenizer均能带来更好的动作生成能力
。MoTok-DDM-4用只有SOTA
（MoMask）
六分之一的token，把FID从0.045降到0.039；更高容量的MoTok-DDM-2则使用三分之一的token达到0.033。MoTok-AR-4则将SOTA
（T2M-GPT）
的FID从0.141降到0.053。
越控制越自然，化解文本与运动控制的冲突
以往的工作中，关节轨迹条件从无到有，再逐渐变强，会发现基于文本条件的动作生成质量越来越差。
MoTok认为，这是因为关节轨迹与文本条件在同个生成阶段相互冲突，
高频、局部的细节控制过早干扰了动作的语义规划
。
基于此，MoTok提出了
从粗到细的控制注入
：在Planning中，关节轨迹以粗粒度约束
（coarse constraints）
的形式参与动作规划；在Control中，再以细粒度约束
（fine-grained constraints）
的形式通过连续特征的diffusion迭代优化。
把“做什么”和“怎么精确做到”分到了不同阶段去处理，
实现文本与运动控制条件的和谐，摆脱了现有方法的取舍困境
。
论文还对双流注入的有效性进行了消融实验
（下表）
：如果只保留Planning阶段
（Generator）
的coarse constraints，模型虽然能感知控制意图，但轨迹控制误差
（Ctrl. Err.）
大幅上升；如果只在Control阶段
（Tok. Decoder）
施加fine-grained constraints，强行轨迹优化带来了动作分布
（Ctrl. FID）
的明显受损。
写在最后
MoTok让高层语义和低层细节不再在同一表征下彼此牵制，在“规划”和“控制”之间建立起更自然的衔接，使conditional motion generation有机会同时走向更强的可控性、更高的动作自然度、更好的任务通用性。这种范式，也为更广泛的具身和数字人等场景提供了一个值得展开的方向。
项目主页：
https://rheallyc.github.io/projects/motok/
论文链接：
https://arxiv.org/pdf/2603.19227v1
Github链接：
github.com/rheallyc/MoTok
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