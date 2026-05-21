---
title: "ICLR 2026 | RefCOCO 上 90%+ 就代表模型\"看懂了\"？这个 benchmark 来测测真实的视觉推理能力"
date: 2026-03-26
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/VCkmb3p1vhC82M4ErsKbMA"
rss_id: "2247657983_1"
---
来自 Northeastern University 的研究团队提出了
Ref-Adv
——一个专门用来考察多模态大模型深层视觉推理能力的 REC benchmark，已被 ICLR 2026 接收。
先说结论：在该 benchmark 上，最强的 Qwen3.5-VL 也只拿到了
68%
，而这些模型在 RefCOCO 上可是动辄 90%+。
项目主页：https://ref-adv.github.io
数据集：https://huggingface.co/datasets/dddraxxx/ref-adv-s
代码：https://github.com/dddraxxx/Ref-Adv
论文：https://arxiv.org/abs/2602.23898
传统 benchmark 怎么就"不够用"了？
Referring Expression Comprehension（REC）是多模态理解的一个核心任务：给一段自然语言描述，模型在图像中定位对应目标。要做好这个任务，模型需要准确理解语言和图片的对应关系。
但现实是，主流 REC benchmark（RefCOCO/+/g）上，近年来的多模态大模型准确率普遍突破了 90%。任务似乎快被"解决"了。
真的吗？作者们仔细研究后发现，这些高分的背后存在三个"推理捷径"，让模型可以不怎么动脑就拿到高分：
三个捷径示意
捷径一：表达太短了。
比如 "Find pizza"——就一个词，模型基本不需要理解语义就能完成定位。
捷径二：干扰物太少。
图里就一个 mouse，模型看到关键词直接定位就行，根本不需要理解完整描述。
捷径三：描述太冗余。
表达里信息量远超必要，模型只要匹配几个关键词（比如"jumping"）就够了，完全不需要完整理解语义。
除了这些设计缺陷，RefCOCO 系列的标注质量本身也有问题。有研究 [2] 发现 RefCOCO 有 14% 的标注错误，RefCOCO+ 更是高达 24%。模型在一个噪声这么大的 benchmark 上刷到 90%+，这个数字本身就得打个问号。
说到底，
传统 REC benchmark 设计的时候，并没有把视觉推理作为核心考察目标
。那个年代模型能力有限，简单表达和少量干扰物已经够难了。但到了大模型时代，这些 benchmark 的难度早已跟不上模型的能力，自然也无法区分出谁的视觉推理能力更强。
Ref-Adv：让模型"必须推理才能答对"
既然问题出在 benchmark 太简单，那就设计一个真正考验推理能力的。Ref-Adv 的核心思路就两点：
1. 高难度视觉干扰物。
每个目标周围都配有外观高度相似的干扰物体。光靠"看一眼"是分不清的，必须结合描述仔细推理。
2. 充分必要的 referring expression。
每个描述都是"刚刚好"的——少一个词就不够定位，多一个词就是冗余。模型必须完整理解语义并推理才能找对目标。
数据怎么来的？
作者设计了一套 LLM 辅助 + 人工验证的标注流程：
标注流程
筛选图像
：挑出包含多个同类物体（至少 3 个干扰物）的真实图像
相似度判断
：用 GPT-4o 找出外观最相似的物体对，确保干扰物足够有挑战
生成表达
：生成最小充分的 referring expression，包含区分性描述和可选的否定表达
人工校验
：人工验证表达的准确性和干扰物的难度
最终作者发布了
Ref-Adv-s
，包含
1,142
个精心标注的样本，图像来自真实数据集。
来看看有多难
下面是一些 Ref-Adv 的例子，大家可以感受一下——每个目标周围都是长得很像的"兄弟姐妹"，不仔细看描述真的分不清：
数据样例
想亲自挑战一下？项目主页上有交互式 demo，可以试试自己能不能找对目标：
https://ref-adv.github.io/
#demo
实验结果：差距有多大？
作者评测了一系列主流多模态大模型，结果挺有意思的：
主实验结果
几个关键发现：
RefCOCO 上轻松 90%+ 的模型们，在 Ref-Adv-s 上最高也只有
68%
随着干扰物数量增加（2-3 个、4-6 个、7 个以上），准确率进一步显著下降
即使是最大的 397B 模型也没有明显优势，说明单纯堆参数量并不能解决视觉推理的问题
这个巨大的性能 gap 说明：
当前多模态大模型在 REC 任务中的视觉推理能力，被传统 benchmark 严重高估了。
开源资源
作者已经完全开源了 Ref-Adv-s 的数据、评测代码和评测结果，欢迎大家测试自己的模型。如果觉得有帮助，欢迎转发分享，也欢迎在评论区交流讨论！
参考文献
Dong, Q., Yang, K., Ju, L., Zhao, H., Zhang, Y., Wang, Y., Zeng, H., Lu, J., & Fu, Y. (2026).
Ref-Adv: Exploring MLLM Visual Reasoning in Referring Expression Tasks
. ICLR 2026. arxiv.org/abs/2602.23898
Chen, Jierun, et al. (2024).
Revisiting Referring Expression Comprehension Evaluation in the Era of Large Multimodal Models
. arxiv.org/abs/2406.16866
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向