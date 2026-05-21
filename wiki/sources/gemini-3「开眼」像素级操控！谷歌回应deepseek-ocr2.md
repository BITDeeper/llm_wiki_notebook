---
type: source
title: "Gemini 3「开眼」像素级操控！谷歌回应DeepSeek-OCR2"
tags: [google, gemini, agentic-vision, deepseek, ocr, code-execution]
related: [google-deepmind, gemini-3-flash, agentic-vision, deepseek-ocr2, 思考-行动-观察]
created: 2026-01-28
updated: 2026-01-28
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/zDBN2rDx4NtSIWaTsm39xA"
venue: "新智元"
sources: ["gemini-3「开眼」像素级操控！谷歌回应deepseek-ocr2.md"]
---

# Gemini 3「开眼」像素级操控！谷歌回应DeepSeek-OCR2

## 概述
本文报道了 Google DeepMind 为 [[gemini-3-flash]] 推出的 [[agentic-vision]]（智能体视觉）功能。该功能通过引入代码执行能力，使模型能够主动编写 Python 代码来操纵和分析图像，从而将视觉理解从被动的“猜测”转变为主动的“调查”。文章还探讨了这一发布与 [[DeepSeek-OCR2]] 之间的竞争关系，对比了“内功流”（模型优化）与“外设流”（工具调用）两种技术路线。

## 核心要点

### Agentic Vision 机制
- **核心闭环**：引入了 [[思考-行动-观察]]（Think-Act-Observe）的循环机制。
  - **思考**：分析查询和图像，制定计划。
  - **行动**：生成并执行 Python 代码（如裁剪、旋转、标注）。
  - **观察**：将处理后的图像追加回上下文，进行下一步推理。
- **性能提升**：在各类视觉基准测试中实现了 5% 到 10% 的性能跨越。

### 应用场景
1.  **缩放与检查**：
    -   模型能隐式决定何时放大细节。
    -   案例：[[PlanCheckSolver.com]] 利用该功能迭代检查高分辨率建筑图纸，准确率提升 5%。
2.  **图像标注**：
    -   模型通过绘制边界框和标签来辅助计数（如数手指），利用“视觉草稿纸”确保像素级理解。
3.  **视觉数学与绘图**：
    -   解析高密度表格，使用 Python（Matplotlib）生成图表。
    -   用确定性的代码执行替代容易产生幻觉的 LLM 算术运算。

### 技术路线对比
文章将 [[Gemini 3 Flash]] 的 [[agentic-vision]] 与 [[DeepSeek-OCR2]] 进行了对比：
-   **DeepSeek-OCR2（内功流）**：通过 [[DeepEncoder V2]] 优化模型内部逻辑，模拟人类注意力，实现轻量化和逻辑化阅读。
-   **Gemini 3 Flash（外设流）**：依赖外部工具（代码执行）来增强视觉，强调可验证的执行和全能交互。

## 技术细节
-   **可用性**：功能已通过 Google AI Studio 和 Vertex AI 中的 Gemini API 提供，并在 Gemini 应用中逐步推出。
-   **未来计划**：谷歌计划使更多行为（如旋转、视觉数学）完全隐式化，并探索引入网络搜索和反向图像搜索工具。

## 来源
-   原文链接：[新智元](https://mp.weixin.qq.com/s/zDBN2rDx4NtSIWaTsm39xA)
-   参考资料：[Google Blog - Agentic Vision](https://blog.google/innovation-and-ai/technology/developers-tools/agentic-vision-gemini-3-flash/?linkId=43682412)