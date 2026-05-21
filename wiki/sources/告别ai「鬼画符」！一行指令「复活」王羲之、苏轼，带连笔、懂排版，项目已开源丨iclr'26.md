---
type: source
title: "告别AI「鬼画符」！一行指令「复活」王羲之、苏轼，带连笔、懂排版，项目已开源丨ICLR'26"
created: 2026-03-23
updated: 2026-03-23
tags: [ai, calligraphy, diffusion-model, multimodal, iclr-2026]
related: [unicalli, mmdit, 书法生成, 游丝连笔, 列级排版, 香港科技大学广州]
authors: [UniCalli团队]
year: 2026
url: "https://mp.weixin.qq.com/s/5wnScYck_VR3Wy-b3pcuAA"
venue: "量子位"
sources: ["告别ai「鬼画符」！一行指令「复活」王羲之、苏轼，带连笔、懂排版，项目已开源丨iclr'26.md"]
---
# 告别AI「鬼画符」！一行指令「复活」王羲之、苏轼，带连笔、懂排版，项目已开源丨ICLR'26

## 摘要
介绍了由 [[香港科技大学广州]] 团队开发的 [[UniCalli]] 模型。这是一个基于 [[多模态扩散Transformer]] (MMDiT) 的统一扩散框架，旨在解决 AI 书法生成中排版混乱和缺乏连笔的问题。该工作已被 [[ICLR 2026]] 接收，并已开源代码、模型和数据集。

## 核心创新
1.  **统一框架**：首次将“书法生成”和“古籍识别”两个互为镜像的任务统一在同一模型中进行联合优化。
2.  **列级排版**：解决了以往 AI 书法“单字拼凑没行气”的痛点，能够处理整列文字的留白、节奏和空间布局。
3.  **自然连笔**：能够根据上下文自动生成书法中笔画之间自然连接的细线（[[游丝连笔]]）。

## 技术细节
-   **架构基座**：采用 [[MMDiT]] (Multimodal Diffusion Transformer)，利用双向注意力机制实现全局谋篇。
-   **非对称加噪**：通过控制对书法图像还是标准文本进行加噪，使模型在“生成”和“识别”模式间切换。
-   **BoxMap**：引入边界框图作为空间“脚手架”，强制模型内化字符间距和大小变化。
-   **Duplicate RoPE**：将图像的 2D 位置编码复制并附加到文本和布局框特征上，实现多模态对齐。
-   **条件随机失活**：训练时以一定概率将文本条件替换为噪声，防止模型在稀有书法家数据上过拟合。

## 评估与影响
-   在盲测评估中，风格还原度、字形准确性和自然度全面超越 ChatGPT-4o、Doubao 等主流大模型。
-   展示了强大的泛化能力，不仅能处理楷、行、草，还能“逆向”生成结构神似的甲骨文，甚至跨界处理古埃及象形文字。

## 链接
-   项目主页：https://envision-research.github.io/UniCalli/
-   在线 Demo：https://huggingface.co/spaces/TSXu/UniCalli_Dev
-   开源数据集：https://huggingface.co/datasets/TSXu/UniCalli_dataset