---
type: source
title: "NUS、牛津等联合发布音视频智能综述：系统梳理大模型时代的AVI全景图"
created: 2026-05-20
updated: 2026-05-20
tags: [综述, 音视频智能, 多模态, avi, omni-modal]
related: [音视频智能-avi, omni-modal模型, 联合音视频生成, vla-视觉-语言-动作]
sources: ["nus、牛津等联合发布音视频智能综述：系统梳理大模型时代的avi全景图.md"]
authors: [NUS, 牛津大学, 多伦多大学, UTD, HKUST, QMUL, 罗切斯特大学]
year: 2026
url: "https://arxiv.org/abs/2605.04045"
venue: arXiv
---
# NUS、牛津等联合发布音视频智能综述：系统梳理大模型时代的AVI全景图

## 基本信息

- **发布日期：** 2026年5月
- **arXiv地址：** https://arxiv.org/abs/2605.04045
- **代码链接：** https://github.com/JavisVerse/Awesome-AVI
- **项目主页：** https://javisverse.github.io/
- **领衔机构：** [[新加坡国立大学]]
- **联合机构：** [[牛津大学]]、多伦多大学、UTD、HKUST、QMUL、罗切斯特大学等近10家机构

## 核心内容

本文是"第一份站在大基础模型视角下"对[[音视频智能-avi]]做系统梳理的综述论文。论文将AVI重新组织为三条主线：

1. **理解世界（Understanding the World）** — 音视频感知、声源定位、AVQA、跨模态检索与推理
2. **创造世界（Creating the World）** — 视频配音、音频驱动视频生成、[[联合音视频生成]]、音画编辑
3. **与世界交互（Interacting the World）** — 音视频对话、[[omni-modal模型|omni-modal]]交互、具身智能与机器人

## 演化路径

论文梳理了从早期AV工作到[[omni-modal模型]]的完整演化路径：

- **早期对齐：** L3-Net、Wav2Lip — "对得上/唇形对齐"
- **可扩展表示：** ImageBind、AudioLDM、MusicGen
- **跨模态生成：** MMAudio、FoleyCrafter、JavisDiT
- **统一模型：** GPT-4o、Veo-3、Seedance 2.0、Qwen-Omni、OpenVLA

## 未来六轴

论文提出AVI未来1-3年的六大研究方向：

1. [[因果事件-声源grounding]] — 建模延迟、遮挡、多源混合下的因果对齐
2. [[av世界模型]] — 音视频作为几何、材质、动力学的互补证据
3. 长程AV上下文记忆 — 流式/情景/语义多层记忆
4. 因果AV干预与可控生成 — 局部、因果且同步的干预
5. [[verifier与reward生态]] — 超越代理指标的验证体系
6. 交互式与负责任AVI — 安全治理约束下的实时合作者

## 关键论点

- AVI正经历从"单点对齐"到"统一backbone同时完成感知、生成、交互"的范式跃迁
- 当前AVI生成的最大瓶颈是联合生成中的音画同步、跨身份一致性与长时一致性
- AVI评测体系碎片化严重，需从片段级benchmark走向长视频工程级与智能体级评测