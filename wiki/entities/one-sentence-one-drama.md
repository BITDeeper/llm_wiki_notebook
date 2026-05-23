---
type: entity
title: "One Sentence, One Drama (OSOD)"
created: 2026-05-22
updated: 2026-05-22
tags: [视频生成, 多智能体, 短剧, ai框架]
related: [分层多智能体短剧生成, short-drama-bench, 3d锚定首帧生成, 多agent协作架构, 多阶段质检]
sources: ["南洋理工等提出-one-sentence,-one-drama：一句话生成完整短剧，多智能体-+-3d-一致性打通-ai-短剧生产链.md"]
origin_date: 2026-05-22
---
# One Sentence, One Drama (OSOD)

**One Sentence, One Drama** 是由 [[南洋理工大学]]、[[新加坡国立大学]]、[[清华大学]]、[[北京理工大学]] 和 [[光明实验室]] 联合提出的面向个性化短剧生成的分层多智能体框架。论文发表于 arXiv（编号 2605.22144）。

## 核心理念

OSOD 的核心思路是将短剧生成从"一次性端到端生成"拆解为一条**可控、可回溯、可自我修正的生产线**，而非单纯依赖更强的视频生成模型。

## 四阶段流水线

1. **剧本规划**：基于从300部高表现短剧中提取的 [[短剧节奏先验]]（Pattern Bank 和 Logic Bank），通过 [[多智能体辩论]] 打磨剧本节奏，确保开头钩子、冲突升级和结尾悬念。
2. **视觉资产生成与 [[3d锚定首帧生成]]**：先生成360度全景图并重建3D世界，后续镜头在共享3D空间中选择合理视角生成首帧，解决跨镜头空间漂移。
3. **视频生成与 [[多阶段质检]]**：在剧本、prompt、首帧、视频等多个阶段嵌入 reviewer，失败触发针对性重写或重生成，最多重试三次。
4. **转场与BGM组装**：根据时间/地点/人物变化选择转场策略，从8122首音乐库中匹配情绪轨迹并自适应音量控制。

## 技术特点

- **结构化中间表示**：引入 story core、scene plan、clip script、visual assets、first frame、review score 等可检查对象，降低从一句话到视频的跨度。
- **显式空间先验**：通过3D world、相机位姿和人物 mesh 为长程一致性提供强约束。
- **短剧专属评测**：配套提出 [[short-drama-bench]] 评测基准。

## 性能

在 [[short-drama-bench]] 核心指标上全面领先基线方法（MovieAgent、ScriptAgent、StoryMem、Toonflow、Xiao Yun Que 等），Opening Hook 4.26、Narrative Coherence 4.62、Environment Layout Continuity 4.05。

## 局限

- 1080P下约25-27美元/分钟的API成本，商业化可行性待验证
- 当前以自动生成为主，人机协同界面尚未实现
- BGM依赖免版税音乐，风格丰富度受限