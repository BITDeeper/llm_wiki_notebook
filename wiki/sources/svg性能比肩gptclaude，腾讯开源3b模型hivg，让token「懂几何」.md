---
type: source
title: "SVG性能比肩GPT/Claude，腾讯开源3B模型HiVG，让Token「懂几何」"
created: 2026-04-10
updated: 2026-04-10
tags: [svg, 生成式ai, 腾讯混元, 分词, 几何]
related: [hivg, 腾讯混元团队, 层次化分词, 坐标幻觉, 路径片段词元, hmn-初始化, 结构化生成]
authors: [腾讯混元团队]
year: 2026
url: "https://mp.weixin.qq.com/s/siGHXTw_oAWFllfkmHugWg"
venue: "量子位"
sources: ["svg性能比肩gptclaude，腾讯开源3b模型hivg，让token「懂几何」.md"]
---

# SVG性能比肩GPT/Claude，腾讯开源3B模型HiVG，让Token「懂几何」

## 摘要
腾讯混元团队开源了仅 3B 参数的 SVG 生成模型 [[hivg]]。该模型通过引入 [[层次化分词]] 框架，将 SVG 代码视为几何程序而非普通文本，成功解决了传统 LLM 在处理矢量图形时的 [[坐标幻觉]] 和 token 冗余问题。在 Image-to-SVG 任务中，HiVG 在 SSIM、LPIPS 等指标上超越了 GPT-5.2、Claude-4.5-Sonnet 等闭源模型，同时将序列长度压缩了 63.8%。

## 核心观点
- **表征对齐重于规模**：在处理 SVG 等结构化数据时，改进数据表征（Token 设计）比单纯扩大模型规模更有效。
- **几何感知**：通过将绘图命令与坐标参数绑定为不可分割的 [[路径片段词元]]，让模型真正理解空间几何关系。
- **工业可用性**：在 Adobe Illustrator 的实际编辑测试中，HiVG 在语义分层和可编辑性方面表现优异，具备直接落地设计工具链的潜力。

## 关键技术细节
- **原子词元**：使用相对坐标表示路径参数，降低全局平移方差。
- **HMN 初始化**：结合全局均值、噪声、语义先验和数值编码的初始化策略，赋予模型初始的空间感知能力。
- **性能数据**：SSIM 0.896 (vs Gemini-2.5-pro 0.790)，LPIPS 0.114 (vs GPT-5.2 0.205)。

## 相关链接
- 论文: https://arxiv.org/pdf/2604.05072
- 主页: https://hy-hivg.github.io/
- 代码: https://github.com/ximinng/HiVG