---
type: entity
title: Qwen 3.6 Plus
created: 2026-05-31
updated: 2026-05-31
tags: [模型, 阿里, VLM, 安全]
related: [ai-权威清洗, 对抗样本]
sources: ["ai权威清洗：-一张肉眼难辨的图片，就能让gpt-5.4、claude-opus-4.6集体造谣.md"]
---

# Qwen 3.6 Plus

阿里通义千问系列视觉语言模型。

## 安全漏洞记录

在 [[ai-权威清洗论文发布-202605|AI权威清洗论文]] 的测试中，Qwen 3.6 Plus 被证实对[[对抗样本]]攻击存在脆弱性：

- 将新闻截图扰动为马斯克图像embedding后，即使文章标题写明真名，仍将死者错误识别为 Elon Musk