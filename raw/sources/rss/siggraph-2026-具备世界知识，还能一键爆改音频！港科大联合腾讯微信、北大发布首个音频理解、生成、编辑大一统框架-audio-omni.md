---
title: "SIGGRAPH 2026 | 具备世界知识，还能一键爆改音频！港科大联合腾讯微信、北大发布首个音频理解、生成、编辑大一统框架 Audio-Omni"
date: 2026-04-24
source: "机器之心"
url: "https://mp.weixin.qq.com/s/yBgZVzS28-WnG2KzQYAR0w"
rss_id: "2651029874_3"
---
近年来，随着多模态大模型的飞速发展，视觉领域（如图像、视频）的「理解 - 生成 - 编辑」大一统模型不断涌现。然而，在声音的物理世界中，音频模型却依然处于各自为战的状态：
现有的音频大模型往往局限于单一任务（只能理解，或只能生成），或者受限于特定领域（做语音的处理不了音乐，做音乐的处理不了环境音）。与此同时，音频编辑（Audio Editing）更是因为极其匮乏大规模、高质量的指令数据集，迟迟难以实现突破。
面对这一长期存在的技术难题，香港科技大学、腾讯微信视觉团队与北京大学的研究人员提出了一种全新的解耦框架 ——
Audio-Omni
。这是业界首个在统一框架下，同时支持
通用声音、音乐、语音
三大领域的理解、生成与编辑的全能型多模态模型。
Audio-Omni 巧妙地将冻结的多模态大模型（MLLM）的强大推理能力，与可训练的扩散生成器（DiT）的高保真合成能力完美结合。更重要的是，由于继承了 MLLM 丰富的世界知识，Audio-Omni 展现出了众多专家音频模型难以实现的「涌现能力」。
目前，该研究成果已被顶级学术会议 SIGGRAPH 2026 接收，项目已开源。
An overview of the Audio-Omni framework and its capabilities.
项目主页：https://zeyuet.github.io/Audio-Omni/
论文地址：https://arxiv.org/pdf/2604.10708
开源代码：https://github.com/ZeyueT/Audio-Omni
开源模型：https://huggingface.co/HKUSTAudio/Audio-Omni
效果展示
无论是基础的跨模态生成，还是精细的指令编辑，亦或是复杂的逻辑推理，Audio-Omni 都能在单一模型中轻松搞定。
1. 多模态音频生成
在常规生成任务上，Audio-Omni 在多个基准测试中达到 SoTA 水平，支持多种模态控制：
文生音频 (T2A)
A telephone dials twice, followed by the sound of glass shattering.
文生音乐 (T2M)
Compose a bright jazz swing instrumental with walking bass, brushed drums, and a lively horn melody.
Create a cheerful acoustic folk song accompaniment with strummed guitar, light percussion, and a whistling-style lead melody.
视频配音 (V2A)
视频配乐 (V2M)
文本到语音合成 (TTS)
The alchemist erased the circle in the sand, and the snake slithered away among the rocks.
2. 指令级灵活音频编辑
前 10s 是输入音频，
后 10s 是编辑后
的结果：
添加 (Add)
：
在原有场景音中自然融入新元素。
Prompt: Add the sound of'skateboarding' to the input audio.
Input
Output
移除 (Remove)：
剥离环境中的指定声音。
Prompt: Remove the sound of 'female singing' from the input audio.
Input
Output
提取 (Extract)
：精准提取混音中的特定声源。
Prompt: Extract the sound of 'ambulance siren' from the input audio.
Input
Output
风格迁移 (Style Transfer)
：改变物体的音色或整体环境风格，同时精准保留原始音频的时序节奏与音高（Pitch）走向。
Prompt: Change the sound of 'dog barking' to 'hammering'.
Input
Output
Prompt: Change the sound of 'playing electric guitar' to 'playing saxophone'.
3. MLLM 赋予的「继承能力」（Inherited Capabilities）
得益于独特的架构设计，Audio-Omni 完美继承了冻结的 MLLM 内部的世界知识，展现出了传统音频生成模型
难以具备的推理与认知能力
：
知识增强生成（Knowledge-Augmented Generation）
当你在提示词里写下「
齐柏林飞艇（Led Zeppelin）乐队的 John Bonham 所演奏乐器的声音
」 时，大多数常规模型会因为缺乏对应文本与音频的直接配对而生成失败。但 Audio-Omni 能够自行推理出该乐器是「架子鼓」，并直接合成出极具辨识度的硬核鼓点！
Prompt:The sound of the instrument that John Bonham played in Led Zeppelin.
上下文生成（In-Context Generation）
给定一段简单的钢琴录音，并输入指令「生成一段不断累积紧张感的电影配乐」，模型能精准提取原音频的音色，并创作出全新的旋律。
零样本跨语言控制（Cross-Lingual Control）
尽管模型训练时主要使用英文指令，但由于 MLLM 的多语言底子，你可以直接用中文、法语、德语、日语输入指令，Audio-Omni 依然能生成毫不逊色的高保真音频。
4. 自然解锁的零样本语音生成
通过训练时的掩码（Masking）策略，Audio-Omni 可以在不进行特定任务微调的情况下，直接解锁
零样本音色转换以及语音编辑能力
。
架构揭秘：High/Low Level 混合条件控制策略
让一个模型同时胜任「理解、生成、编辑」和「音、乐、语」所有领域，最大的挑战在于
如何处理复杂且存在差异的控制信号
。单纯的交叉注意力（Cross-Attention）无法做到高精度对齐，而全部拼接（Concatenation）又会破坏语言模型的语义空间。
为此，研究团队提出了一种优雅的
解耦架构与双流混合条件策略（Hybrid Conditioning Strategy）
：
1. 理解核心
：采用冻结的预训练多模态大模型（Qwen2.5-Omni-3B），保留其所有的世界知识和推理能力。
2. 生成核心
：一个具有 3B 参数的可训练扩散生成器（DiT），结合 Rectified Flow 目标函数负责高保真音频合成。
3. 混合条件注入
：
高层语义流（High-Level Semantic stream）：包含 MLLM 提取的多模态特征和转录文本。这些特征被当作全局指令向导，通过交叉注意力（Cross-attention）注入 DiT，赋予模型极大的语义灵活度。
底层信号流（Low-Level Signal stream）：包含 Mel 频谱特征（用于音色 / 编辑参考）和视频同步特征（用于音画对齐）。这些特征与输入的噪声隐变量进行通道级拼接（Channel-wise Concatenation），从而为模型注入细粒度的时序约束，实现对生成内容的高精度对齐与结构把控。
这一「宏观靠注意力，微观靠拼接」的设计，彻底打通了音频全能生成的壁垒。另外，为了激发上述的零样本语音能力，团队在训练阶段对语音提示词的 Mel 频谱进行随机掩码，逼迫模型学会从上下文中推理音色和内容，从而自然习得了音色转换和语音编辑能力。
数据破局：
构建百万级指令音频编辑数据集 AudioEdit
在视觉领域，大规模数据集彻底引爆了图像编辑；而在音频领域，长期缺乏这样的指令成对数据。目前基于合成的管线往往存在明显的「合成感」，难以应对真实世界的复杂声学环境。
研究团队为此构建了
包含超 100 万高质量样本的指令音频编辑数据集 ——AudioEdit
。
数据处理流水线图
为了兼顾数据的
真实声学保真度与超大规模多样性
，团队设计了双管齐下的混合流水线：
真实数据挖掘分支（Real Data Branch）
：从 VGGSound 等真实世界视频入手，利用大模型（Gemini 2.5 Pro）识别核心发声物，并调用最新的 SAM-Audio 进行精准音源分离（Source Separation）。通过严格的多阶段 VAD 和 CLAP 语义对齐过滤，提取出极其纯净的「原始 - 编辑」音频对。
程序化合成数据分支（Synthesis Data Branch）
：利用 Scaper 工具包，将不同的前景音和背景音进行音高、时长、信噪比的随机混合，批量制造大规模的精准标注数据。
在 AudioEdit 的加持下，Audio-Omni 拥有了能够应对多项音频编辑任务的能力。
Insight：
最后一层特征未必更适合跨模态合成
在探索 MLLM 与 DiT 的连接方式时，研究团队进行了一系列消融实验，并得出了一个极具启发性的结论：
对于音频生成任务，直接使用 MLLM 最后一层（Last Layer, -1）或复杂的 Query 机制效果并不理想，反而使用倒数第二层（Penultimate Layer, -2）的特征，能取得显著更优的表现。
团队深入分析认为：MLLM 的最后一层特征为了迎合下一词预测（Next-token prediction）的训练目标，往往变得过于「文本特化」，在这个过程中，大量丰富的、未压缩的声学细节和视觉语义被丢弃了。
而倒数第二层则像一个原生态的信息蓄水池，它既完成了高度抽象的语义理解，又保留了足以让 DiT 合成高保真音频的密集底层细节。这也揭示了：在将 LLM 接入高保真生成模型时，避免底层信息的丢失比设计复杂的注意力查询机制更为关键。
项目已开源
Audio-Omni 已在 GitHub 和 Hugging Face 上开源，包括代码和模型权重。开源以来，Audio-Omni 在Hugging Face 全模态（Any-to-Any）模型热榜
(https://huggingface.co/models?pipeline_tag=any-to-any)
上持续位列
Top 5
，受到了社区的广泛关注与好评。
结语
Audio-Omni 的问世，证明了通过单一框架解决跨域音频任务的可行性，打破了理解、生成和编辑之间的技术壁垒。其展现出的强大推理与零样本控制能力，为后续工作提供了未来通用生成式音频人工智能（Universal Generative Audio Intelligence）的演进方向。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com