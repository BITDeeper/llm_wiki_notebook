---
type: entity
title: Meta AI
tags: [organization, ai-lab, llama, meta, organizations, big-tech, 科技公司, ai研究, 计算机视觉, 研究机构, ai, 视觉推理]
related: [openai, google, 庞若鸣, llama-4, 扎克伯格, yann-lecun, alexandr-wang, fair, ami-labs, vggt-omega, 牛津大学视觉几何组, dinov3, atlas-视觉推理, 香港中文大学, google-deepmind]
created: 2026-02-26
updated: 2026-05-23
sources: ["刚刚，庞若鸣跳槽openai！放弃14亿年薪，在meta只待了7个月.md", "meta炸了！lecun炮轰28岁上司不懂行，实锤llama-4刷榜丑闻.md", "cvpr-2026-oral-牛津-&-meta-ai-推出-vggt-ω：前馈-3d-重建迈入-10b-参数时代，动态场景精度升-77%.md", "meta华人发布atlas，一个词搞定可泛化的视觉推理！.md"]
---

# Meta AI

Meta AI 是 Meta 公司（原 Facebook）旗下的人工智能研发部门，致力于开发人工智能技术和开源大模型（如 Llama 系列）。该部门在计算机视觉、自然语言处理、开源模型等领域持续产出高影响力研究，但近期因 [[llama-4]] 刷榜丑闻、高层内斗及核心人才流失而陷入动荡。

## 组织架构演变

### FAIR 时期
由 [[yann-lecun]] 领导，专注于基础研究，坚持开源路线。这一时期的代表作是 [[llama-2]]，以「开放权重」成为开源大模型的标杆。

### GenAI 时期与超级智能实验室
随着 ChatGPT 引发的浪潮，Meta 感到压力，重组架构成立生成式 AI（GenAI）部门。
- **战略转变**：要求加速将研究转化为产品，从开源转向激进商业化。
- **人事变动**：挖角 [[alexandr-wang]]（Scale AI 创始人）领导「超级智能实验室」（MSL），试图冲刺通用人工智能（ASI）。
- **结果**：这一战略导致了与原有研究团队的剧烈冲突，最终边缘化了 GenAI 组织。

## 关键事件与危机

### Llama 4 刷榜丑闻 (2025)
- **事件**：Meta 被指控在 [[llama-4]] 的基准测试中操纵数据。
- **实锤**：[[yann-lecun]] 确认团队在不同基准上使用了不同模型以获得更好成绩。
- **影响**：直接导致扎克伯格对原 AI 团队失去信心，引发了大规模的组织调整和裁员，被外界视为产品发布的重大"翻车"。

### 内部路线之争
- **LLM 派**：以扎克伯格和 Alexandr Wang 为代表，坚信 [[scaling-law]] 和 LLM 路线。
- **世界模型派**：以 [[yann-lecun]] 为代表，认为 LLM 是死路，主张研发 [[world-model]]。
- **结局**：LeCun 离职并创立 [[ami-labs]]，Meta 全面转向 LLM 路线。

### 人才流失与动荡
尽管 Meta 通过"超级智能实验室"（MSL）以高达 9 位数的薪酬包积极挖角顶尖人才，但近期面临严重的人才流失回潮现象。
- **庞若鸣**：仅在 Meta 任职 7 个月便离职转投 [[openai]]。
- **Avi Verma & Ethan Knight**：入职仅一个月后便返回 OpenAI。
- **Mat Velloso**：负责开发者平台产品，短暂任职后离职。

## 研究特点与技术贡献

- 偏好开源发布策略，模型和代码通常公开可复现（代码托管于 github.com/facebookresearch）。
- 在视觉基础模型（DINO系列、SAM系列）和3D理解领域具有领先地位。
- 在计算机视觉、多模态学习、大语言模型等领域均有重要布局。

### 近期代表性工作

- 与 [[牛津大学视觉几何组]] 联合开发 [[vggt-omega|VGGT-Ω]] 前馈3D重建大模型（CVPR 2026 Oral）。
- 开发 [[dinov3|DINOv3]] 视觉骨干网络，被 VGGT-Ω 采用为核心视觉编码器。
- 开发 Grounding DINO，用于 VGGT-Ω 数据流水线中的动态掩码提取。
- 与 [[香港中文大学]] 联合提出 [[atlas-视觉推理|ATLAS]] 视觉推理范式（2026年5月），用离散 Functional Token 统一 Agentic 和 Latent Visual Reasoning，标志着其在视觉推理范式创新方面的最新探索。

## 战略方向与基础设施

Meta 在 AI 基础设施上投入巨大，近期官宣了与 AMD 的合作以扩展算力。为了应对模型发布的不利局面，有爆料称 Meta 即将交付代号为"牛油果"的文本模型和"芒果"的图像/视频模型，试图以此打翻身仗。

## 相关产品

- [[llama-2]]: 开源大模型标杆。
- [[llama-4]]: 卷入刷榜丑闻的闭源/受限模型。
- [[vggt-omega|VGGT-Ω]]: 前馈3D重建大模型。
- [[dinov3|DINOv3]]: 视觉骨干网络。
- [[atlas-视觉推理|ATLAS]]: 视觉推理范式。

## 相关实体

- [[yann-lecun]]: 前首席科学家，世界模型倡导者。
- [[alexandr-wang]]: 现超级智能实验室负责人。
- [[fair]]: Meta 的基础研究实验室。
- [[牛津大学视觉几何组]]: VGGT-Ω 联合开发伙伴。
- [[香港中文大学]]: ATLAS 联合开发伙伴。
- [[ziyu-guo|郭子钰]]: 曾在 Meta AI 实习，参与多模态大模型研究。