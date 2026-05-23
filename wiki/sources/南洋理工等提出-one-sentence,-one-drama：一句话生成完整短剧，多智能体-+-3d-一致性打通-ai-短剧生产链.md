---
type: source
title: "南洋理工等提出 One Sentence, One Drama：一句话生成完整短剧，多智能体 + 3D 一致性打通 AI 短剧生产链"
created: 2026-05-22
updated: 2026-05-22
tags: [视频生成, 多智能体, 短剧, 3D一致性, 评测基准]
related: [one-sentence-one-drama, short-drama-bench, 分层多智能体短剧生成, 3d锚定首帧生成, 多agent协作架构]
sources: ["南洋理工等提出-one-sentence,-one-drama：一句话生成完整短剧，多智能体-+-3d-一致性打通-ai-短剧生产链.md"]
authors: [我爱计算机视觉]
year: 2026
url: "https://mp.weixin.qq.com/s/iAFTcOq4Ufug5IWoGPkHwA"
venue: 我爱计算机视觉
---
# 南洋理工等提出 One Sentence, One Drama：一句话生成完整短剧，多智能体 + 3D 一致性打通 AI 短剧生产链

本文报道了南洋理工大学、新加坡国立大学、清华大学、北京理工大学和光明实验室联合提出的 [[one-sentence-one-drama]] 框架，该系统能从一句话创意自动生成完整短剧。

## 核心内容

文章指出短剧生成的难点不在单片段画质，而在于三个系统性问题：剧本节奏、跨镜头空间一致性、生产级质检。[[one-sentence-one-drama]] 通过四阶段流水线解决这些问题：

1. **剧本多智能体辩论**：从300部高表现短剧中提取 [[短剧节奏先验]]（Pattern Bank 和 Logic Bank），通过多 LLM reviewer 审查和局部 patch 修改打磨剧本。
2. **[[3d锚定首帧生成]]**：先生成360度全景图并重建3D世界，后续镜头在共享3D空间中选择合理视角，解决跨镜头空间漂移。
3. **[[多阶段质检]]**：将质检前移至剧本、prompt、首帧、视频等多个阶段，失败触发针对性重写或重生成。
4. **转场与BGM叙事组装**：根据时间/地点/人物变化选择转场策略，从8122首音乐库中匹配情绪轨迹。

## 评测

论文提出 [[short-drama-bench]] 评测基准，包含50个prompt和239分钟视频，提出短剧专属指标（Opening Hook、Narrative Coherence、Environment Layout Continuity 等）。系统在所有核心指标上全面领先基线方法。

## 局限

- 1080P下约25-27美元/分钟的API成本
- 当前以自动生成为主，人机协同能力有限
- BGM版权问题依赖免版税音乐，限制风格丰富度