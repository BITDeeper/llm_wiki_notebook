---
type: entity
title: SynthID
tags: [watermarking, ai-safety, copyright, google-deepmind, 水印, ai安全, 内容溯源, google, 数字水印, 谷歌]
related: ["google-deepmind", "lyria-3", "gemini", "ai-music-copyright", "gemini-omni", "gemini-omni-flash", "谷歌"]
created: 2026-02-19
updated: 2026-06-04
sources: ["谷歌gemini上线ai音乐创作，一夜革了suno的命！.md", "全网实测gemini-omni！一句话改视频，草图变大片.md", "谷歌io发布会最大的赢家，不是谷歌？.md"]
---

# SynthID

**SynthID** 是 [[google-deepmind]] 开发的不可见数字水印技术，用于在 AI 生成内容中嵌入不可感知的标识符，以区分人类生成内容与 AI 生成内容。

## 技术特征

- **不可感知**：水印嵌入在内容中，不影响视觉或听觉体验
- **持久性**：即使内容被剪辑、搬运、压缩，水印依然能被检测
- **可验证**：用户可通过 Gemini 应用、Chrome 浏览器或谷歌搜索便捷地验证内容是否为 AI 生成。例如，用户上传任何视频到 Gemini App，询问"这是 AI 生成的吗？"，系统会通过水印进行验证

## 应用领域

SynthID 最初应用于图像领域，随后扩展至视频。随着 [[lyria-3]] 的发布，该技术现已覆盖**音频**领域，成为 [[google-deepmind]] 在 AI 音乐生成合规策略中的核心技术。

### 在音乐领域的功能

- **水印嵌入**：所有通过 [[gemini]] 生成的音乐都会自动嵌入 SynthID 水印，不影响听觉体验
- **内容鉴别**：[[gemini]] 新增了音频鉴别功能，可检测上传的音频文件是否包含 SynthID 标记，从而判断其是否由谷歌 AI 生成

### 在视频生成中的应用

在 [[gemini-omni]] 和 [[gemini-omni-flash]] 模型中，SynthID 与 C2PA 跨平台元数据标准共同构成双层强制水印系统。所有生成的视频内容均强制嵌入两层标记：

1. **SynthID**：Google 自家的不可见数字水印
2. **C2PA**：跨平台元数据标准，提供内容来源和完整性的行业标准验证

这一双层机制确保 AI 生成内容在任何传播路径上都可以被追踪。

## 战略价值

在 [[suno]] 和 [[udio]] 面临版权诉讼的背景下，SynthID 成为大厂区别于"野蛮生长"初创公司的关键护城河。它不仅解决了版权归属和内容溯源问题，也为 AI 生成内容的监管和信任机制提供了技术基础。