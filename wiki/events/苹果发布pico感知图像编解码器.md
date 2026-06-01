---
type: event
title: 苹果发布 PICO 感知图像编解码器
created: 2026-05-30
updated: 2026-05-30
tags: [图像压缩, 感知压缩, 苹果, AI编解码器, 里程碑]
related: [pico-感知图像编解码器, 苹果, oren-rippel, waveone, 感知压缩, jpeg-ai]
sources: ["苹果用ai重新发明了图像压缩：同样画质，文件只要三分之一.md"]
origin_date: 2026-05-30
participants: [苹果, oren-rippel, waveone, mabyduck]
causes: [jpeg-ai]
effects: [pico-感知图像编解码器, 感知压缩]
significance: high
---
# 苹果发布 PICO 感知图像编解码器

2026 年 5 月，苹果工程师团队发布论文 *What Matters in Practical Learned Image Compression*，正式公开了 PICO（Perceptual Image Codec）感知图像编解码器。

## 背景

### 技术脉络
- 2017 年：[[oren-rippel|Oren Rippel]] 在 [[waveone|WaveOne]] 发表"实时自适应图像压缩"论文，奠定学习型压缩领域地位
- WaveOne 团队后续推出 ELF-VC 视频压缩，团队整体被苹果收购
- 2025 年 2 月：[[jpeg-ai|JPEG AI]] 成为首个学习型图像编码国际标准，但距离真正感知压缩仍有距离

### 行业痛点
三十年来图像压缩技术进步几乎都发生在"让数字更好看"的赛道上。从 JPEG 到 VVC，工程师优化的是 PSNR、SSIM 等数学指标，而人眼感知始终是被绕开的难题。

## 核心突破

PICO 首次系统性地将[[感知压缩]]从学术概念转化为可在手机上实时运行的工程现实：

1. **一次性上下文模型**：绕开自回归编码速度瓶颈
2. **TextFidelityLoss**：解决 GAN 幻觉在文字区域的问题
3. **TilingArtifactLoss**：解决分块处理的色块边界问题

## 关键数据

- 相同视觉质量下，文件体积仅为传统标准的 1/3 到 1/2
- iPhone 17 Pro Max 编码 12MP 照片 230ms，解码 150ms
- 610 人、74,925 次配对比较的人类主观评测全面领先

## 影响

PICO 代表了感知压缩从学术远景到工程现实的跨越，是学习型图像压缩的里程碑节点。论文明确指出这"是一个时代节点，而非终点"。

### 开放问题
- PICO 是否已集成到 iOS/macOS 中（文章暗示可能已在运行）
- 苹果是否会将 PICO 提交为新的行业标准
- 视频压缩领域的后续计划