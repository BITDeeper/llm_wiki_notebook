---
type: source
title: "全球OCR新王来自中国开源！GitHub狂揽73300+Star"
tags: [ocr, paddleocr, baidu, open-source, ai-news]
related: [paddleocr, tesseract-ocr, 数据为中心, 异形框定位, openclaw]
created: 2026-03-30
updated: 2026-03-30
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/Pidd7SCgMlrDJd3RDTfqhw"
venue: "量子位"
sources: ["全球ocr新王来自中国开源！github狂揽73300+star.md"]
---

# 全球OCR新王来自中国开源！GitHub狂揽73300+Star

## 摘要
报道了百度飞桨开源的 [[PaddleOCR]] 在 GitHub 上以 73300+ Star 数超越统治该领域近 40 年的 [[Tesseract OCR]]，正式登顶全球 OCR 项目榜。文章详细介绍了 PaddleOCR 的技术演进，特别是 [[PP-OCRv5]] 提出的“[[数据为中心]]”策略以及 [[PaddleOCR-VL-1.5]] 实现的“[[异形框定位]]”技术突破。

## 核心观点
- **历史性超越**：中国开源项目首次在基础 OCR 赛道获得 GitHub Star 数全球第一，标志着中国开源在全球影响力的提升。
- **技术代际更替**：[[PaddleOCR]] 基于深度学习原生架构，并通过与文心大模型的双向赋能（文心提供多模态理解，PaddleOCR 提供结构化数据）实现了技术爆发。
- **小模型逆袭**：[[PP-OCRv5]] 仅 5M 参数，通过精细的数据工程（难度甜点区、特征多样性优化），在特定任务上表现超越 GPT-4o 等千亿参数大模型。
- **计算效率优化**：[[PaddleOCR-VL]] 采用“[[由粗到细架构]]”，通过有效区域聚焦模块（VRFM）降低算力消耗，解决了高分辨率文档解析的痛点。
- **角色转变**：OCR 正从单纯的文档提取工具转变为“大模型数据生态的基座”和“Agent 的眼睛”，成为解锁海量离线文档信息的关键。

## 关键数据
- **Star 数量**：73,300+（超越 Tesseract OCR）。
- **PP-OCRv5 参数**：5M。
- **PP-OCRv5 准确率提升**：从 v4 的 53.0% 提升至 80.1%。
- **PaddleOCR-VL-1.5 得分**：在 OmniDocBench V1.5 上达到 94.5%。
- **覆盖范围**：160 个国家和地区，支持 110+ 种语言。

## 相关实体
- [[百度]] / [[飞桨]]：开发团队与技术底座。
- [[OpenClaw]]：文中提到可通过其调用 PaddleOCR Skill。
- [[DeepSeek]]：提及 DeepSeek-OCR 和 DeepSeek-OCR2 作为榜单上的竞争对手。