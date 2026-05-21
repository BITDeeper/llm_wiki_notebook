---
type: entity
title: Nano Banana Pro
tags: [google-deepmind, generative-model, foundation-model, google, image-generation, competitor, legacy-model, ai-model, rendering, paperbanana, multimodal, tool, flow, multimodal-model, generative-ai, low-level-vision, model, tpu, 图像生成, 多模态模型, 图像编辑, 闭源模型, 基准, image-model, benchmark]
related: ["vision-banana", "google-deepmind", "gpt-image-2", "openai", "nano-banana-2", "gemini", "paperbanana", "genie-3", "project-genie", "veo-3.1", "flow", "素材生视频", "低层视觉", "语义漂移", "华中科技大学", "lowlevel-eval", "gemini-3-pro", "google", "gemini-3", "算力零和博弈", "chestnut", "gemini-3-flash", "物理色彩理论", "hy-wu", "gpt-image-1-5", "hy-image-3-0-instruct", "uni-1", "oliver-wang"]
created: 2026-04-24
updated: 2026-05-08
sources: ["谷歌这把「香蕉」太狠了！何恺明等引爆视觉transformer时刻.md", "一张奥特曼合照，骗过全网！openai深夜偷跑ai图像新王，ps真要凉了.md", "谷歌深夜突发nano-banana-2，生图圈天塌了！pro级4k大片，价格砍半.md", "论文配图一键封神！北大谷歌开源paperbanana，5个agent全包了.md", "刚刚，谷歌版「世界模型」震撼公测！网友实测炸翻天：游戏末日来了？.md", "这一次，谷歌veo-3.1教sora做视频！角色0变形，4k竖屏直接满分.md", "nano-banana不会应试！指标拉垮，视觉效果惊艳，实测14个任务.md", "gpt-5.2降智遭全网差评！奥特曼慌了.md", "gpt-5.2提前泄露？今夜，openai要拿gemini-3祭天！.md", "openai神秘生图ai爆出！实测不敌谷歌一根香蕉，网友：就这？.md", "谷歌再发香蕉！通用视觉模型vision-banana刷新2d3d多项sota，何恺明谢赛宁参与.md", "基础模型又一关键拼图，腾讯混元发布训练新范式「无相」：引入功能性记忆，打破静态权重枷锁.md", "黑马图像模型被nano-banana技术负责人点赞！15人华人小队，ddim之父&cvpr最佳论文作者带队.md", "nano-banana-2免费上线！超pro版本100分登顶竞技场，api价格还对半砍了.md", "这一次，谷歌veo-3.1教sora做视频！角色0生成0变形，4k竖屏直接满分.md"]
---

# Nano Banana Pro

[[Nano Banana Pro]] 是由 [[Google]] 旗下 [[Google DeepMind]] 开发的旗舰级文生图基础模型。该模型由谷歌 DeepMind 首席科学家 [[Oliver Wang]] 担任技术负责人，于 2025 年 11 月发布。它隶属于 [[Gemini-3]] 系列（也被称为 Gemini 3 Pro Image），是通用视觉模型 [[Vision Banana]] 的母体模型和底座架构，同时也是 [[PaperBanana]] 系统中负责具体渲染任务的核心模型组件。

该模型以其极高的算力需求著称，直接导致了谷歌对开发者 API 免费额度的断崖式削减，这一事件被称为“配额休克”，是 [[算力零和博弈]] 的典型案例。随着 2026 年 2 月 [[nano-banana-2]] 的发布，Nano Banana Pro 在大多数应用场景中已被取代，但在特定专业领域仍保持优势。

## 核心能力与物理特性
Nano Banana Pro 在图像生成的物理真实感和逻辑准确性上表现突出，具备以下核心特性：

- **物理色彩理论**：能够准确理解并生成符合物理光学规律的图像。例如在测试中，它能准确呈现黄红混合产生的多孔、橙色表皮等细节，体现了对物理世界的深刻理解。
- **高真实度与编辑能力**：在人物面部生成和场景渲染上，真实度极高。其图像编辑能力尤为强大，能够通过自然语言指令将游戏画面转化为电影质感，或将物体（如柠檬）转化为其他物体（如猕猴桃）。
- **通用求解能力**：在 [[华中科技大学]] 发布的 [[LowLevelEval]] 报告中，该模型被作为核心评测对象，在无需针对特定任务微调的情况下处理了 14 种不同的 [[低层视觉]] 任务（如去雾、超分辨率、去噪等）。
- **深层视觉表征**：在预训练过程中，模型学会了物体边界、深度关系和几何结构等深层视觉表征，这些表征为 [[Vision Banana]] 的感知任务提供了基础。

## 模型架构与生态角色
Nano Banana Pro 在谷歌的 AI 生态系统中扮演着多重关键角色，其架构设计对算力的需求达到了前所未有的高度：

- **Vision Banana 母体**：[[Vision Banana]] 正是基于 Nano Banana Pro，通过混入极小比例的可逆格式任务数据进行 [[指令微调]] 而来。这种训练策略使得 Vision Banana 继承了 Nano Banana Pro 的强大生成能力，并转化为能够处理分割、深度估计等判别式任务的通用模型，且不损失原有的生成能力。
- **PaperBanana 渲染引擎**：在 [[PaperBanana]] 系统中，Nano Banana Pro 由 Visualizer 智能体调用，负责根据规划蓝图和风格指南生成最终的图像像素，主要用于生成逻辑架构图等非统计类图表。
- **Project Genie 世界草图**：在 [[Project Genie]] 架构中，它主要负责“世界草图绘制”环节。它根据用户的文本或视觉提示词生成可调整的图像预览，允许用户在进入由 [[Genie 3]] 生成的交互世界之前，预先定义世界和角色的外观、视角（如第一人称或第三人称）。
- **视频生成素材源**：作为谷歌生态下的图像生成工具，Nano Banana Pro 也被用于为 [[veo-3.1]] 的 [[素材生视频]] 功能生成“素材图片”。用户可以在 [[Gemini]] 应用或 [[flow]] 中使用 Nano Banana Pro 生成特定的图像素材，随后将这些素材输入 Veo 3.1 以生成高质量的视频。这种工作流（图生视频）极大地提升了视频生成的可控性和创意表现力。
- **多模态协同**：通常与 [[Gemini 3 Pro]] 配合提及，作为谷歌多模态能力的一部分。

## 性能评估与局限性
作为一个通用求解器，Nano Banana Pro 在低层视觉任务中表现出独特的“生成式”特性，其评价呈现两极分化。同时，在特定基准测试中也暴露出一些短板。

### 生成式特性评价
- **主观视觉质量（惊艳）**：该模型倾向于追求“语义合理”而非“像素对齐”。它会根据先验知识重建图像细节，使其在视觉上看起来更真实、更自然。在去光晕、低光增强等任务中，生成的图像往往比专用模型的输出更清晰、更舒适。
- **客观指标（拉垮）**：由于不追求像素级的一致性，且存在 [[语义漂移]] 现象，其在 PSNR/SSIM 等传统量化指标上表现落后。
- **局限性**：
    - **随机性**：输出具有随机性，导致稳定性与可复现性成为部署障碍。
    - **语义幻觉**：有时会编造原图不存在的高频细节，导致语义偏差。
    - **工业级鸿沟**：目前难以达到专用模型在高保真、高可控性场景下的要求。

### 基准测试表现
在与 [[Luma AI]] 发布的 [[uni-1]] 等新兴模型的对比评测中，Nano Banana Pro 在以下任务上表现不佳：
- **中文文字渲染**：出现明显瑕疵。
- **多参考图场景合成**：未能有效融合参考图。
- **信息图提取**：底部文字缺失。
- **UV 贴图生成**：未能生成符合标准 UV 布局规范的结果。

尽管如此，作为谷歌的旗舰模型，它代表了行业内的顶尖水平，其技术负责人 [[Oliver Wang]] 也对竞争对手 Uni-1 的表现公开点赞。

## 行业地位与竞争对比
作为谷歌在基础生成模型上的重要进展，Nano Banana Pro 在与竞争对手的较量中展现出复杂的优劣势格局。

### 与 OpenAI 的对比
在与 [[OpenAI]] 竞品（如 [[GPT-Image-2]]，代号 [[Chestnut]]/[[Hazelnut]]）的对比中：
- **优势领域**：在开发者实测中，Nano Banana Pro 在图像生成的逻辑性、物理色彩准确性、一致性及世界知识方面优于 OpenAI 的图像模型。虽然 OpenAI 的模型在代码嵌入方面有独特表现，但整体生成质量被认为不及 Nano Banana Pro。
- **劣势领域**：随着 2026 年 4 月初 GPT-Image-2 的泄露与对比测试，格局发生了变化。Nano Banana Pro 在空间理解力、真实质感以及文本渲染能力上被认为遭到了 GPT-Image-2 的“降维打击”。

### 与 Nano Banana 2 的对比
随着 2026 年 2 月 [[nano-banana-2]] 的发布，Nano Banana Pro 在大多数应用场景中被取代。
- **性能对比**：根据官方竞技场数据，[[Nano Banana 2]] 在整体性能、视觉质量和信息准确率上均超越了 Nano Banana Pro，得分优势达到 100 分。
- **编辑能力**：尽管如此，Nano Banana Pro 在图像编辑能力上仍保持优势，排名仅次于 [[gpt-image-1.5]]。
- **成本**：Nano Banana Pro 的生成成本是 [[nano-banana-2]] 的两倍。生成 1K 分辨率图片的成本约为 0.134 美元（约 0.92 元人民币）。

### 与国内模型对比
在 GSB（Good/Same/Bad）人类评价中，Nano Banana Pro 的感官质量略优于 [[hy-wu]]，但在 GEdit-Bench 的多项指标中被 HY-WU 超越。

## 行业影响：配额休克
2025年12月，为了支持 Nano Banana Pro 和 Gemini 3 Pro 的规模化部署，Google AI Studio 进行了激进的资源调整：
- **Gemini 2.5 Flash** 免费配额从每天上千次削减至 **20次/天**。
- **Gemini 2.5 Pro** 免费配额直接 **归零**。
- 大量开发者收到 `429: Resource Exhausted` 错误。

Google AI Studio 产品负责人 Logan Kilpatrick 证实，削减免费层是为了释放算力以应对 Nano Banana Pro 的巨大增长需求。

## 当前用途与未来
谷歌目前的策略是将 Nano Banana Pro 留给那些对**事实准确性**和**物理逻辑**有极高要求的专业场景，而让 [[nano-banana-2]] 覆盖绝大多数追求速度与性价比的日常需求。用户仍可在 [[Gemini]] App 的三点菜单中手动选择使用 Pro 版进行重新生成。

此外，谷歌预计将在近期推出 [[Nano Banana Flash]]，与 [[Gemini 3 Flash]] 一同登场，进一步丰富其产品线。

作为多模态管线的一部分，[[Nano Banana Pro]] 降低了创作门槛，提供了“二创”的灵活性，使用户能够直观地设计世界的初始状态。

## 参见
- [[Gemini 3 Pro]] — 谷歌的旗舰文本模型。
- [[Vision Banana]] — 基于 Nano Banana Pro 的视觉世界模型。
- [[Oliver Wang]] — 谷歌 DeepMind 首席科学家，Nano Banana Pro 技术负责人。