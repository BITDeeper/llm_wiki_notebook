---
type: source
title: "重写《给阿嬷的情书》结局：哈工大张民团队联合阿里开源全流程AI多智能体导演框架VideoClaw"
created: 2026-06-07
updated: 2026-06-07
tags: [视频生成, 多智能体, 开源框架, 哈工大, 阿里]
related: [videoclaw, 张民, 哈工大, filmagent, anim-director, comfyui-copilot, pixelle-video, 场记状态库, 多智能体协作视频生成]
sources: ["重写给阿嬷的情书结局：哈工大张民团队联合阿里开源全流程ai多智能体导演框架videoclaw.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/3NpB4iDCpGO21wFendiQcQ"
venue: 机器之心
---
# 重写《给阿嬷的情书》结局：哈工大张民团队联合阿里开源全流程AI多智能体导演框架VideoClaw

本文由 [[机器之心]] 发布，报道了 [[哈工大]] [[张民]] 教授团队联合 [[阿里巴巴]] 推出第二代多智能体长视频创作框架 [[videoclaw|VideoClaw]]。

## 核心内容

文章指出长视频生成的关键瓶颈不在单片段质量，而在跨片段一致性。VideoClaw 通过 [[多智能体协作视频生成|多智能体协作]] + [[场记状态库]] + [[vlm质检闭环|VLM 闭环质检]] 三重机制解决该问题。

## 技术演进脉络

- **第一代（2023年）**：基于大模型与工具深度交互范式，产出 [[comfyui-copilot|ComfyUI-Copilot]]、[[filmagent|FilmAgent]]、[[anim-director|Anim-Director]]
- **第二代（2026年）**：升级为多智能体高效协作范式，产出 [[pixelle-video|Pixelle-Video]] 和 [[videoclaw|VideoClaw]]

## 学术支撑

- 3 篇 SIGGRAPH、3 篇 ACL 等顶会论文
- SIGGRAPH Asia 2024：FilmAgent、Anim-Director
- ACL 2025：ComfyUI-Copilot
- SIGGRAPH Asia 2025：AniMaker
- ACL 2026：ComfyFlow

## 展示案例

1. 影视二创：为《给阿嬷的情书》生成完美结局
2. 写实短剧：程序员用 [[openclaw|OpenClaw]] 创业翻身，生成 6+2 集短剧
3. 科幻漫剧：基于刘慈欣《乡村教师》生成 5 集漫剧