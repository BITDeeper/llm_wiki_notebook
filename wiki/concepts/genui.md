---
type: concept
title: GenUI
tags: [ui, generation, education, interaction]
related: [openmaic, ke-hu-sheng-cheng]
created: 2026-03-16
updated: 2026-03-16
sources: ["刚刚，清华团队养出了一只「龙虾老师」！教育版openclaw震撼开源.md"]
---

# GenUI

**GenUI** (Generative User Interface) 指的是由 AI 动态生成的、可视化的且可交互的用户界面组件。在 [[openmaic]] 系统中，GenUI 是实现“交互式课堂”的关键技术之一。

## 功能与表现

-   **动态生成**：AI 根据教学内容自动生成相应的可视化组件，而非使用预设的静态模板。
-   **可交互性**：生成的界面不是死板的图片，而是用户可以操作、调整参数的 HTML 组件。
-   **案例**：
    -   在讲解“鸡兔同笼”问题时，OpenMAIC 生成了一个动态界面，允许用户实时调整鸡和兔的头数，直观地看到脚的数量变化，从而探索数学关系。
    -   在讲解物理或算法时，可以生成可拖拽的滑块或可点击的图示。

## 技术意义

GenUI 打破了传统课件（PPT/PDF）静态、线性的限制。它允许学生在学习过程中通过“做”来探索，而不仅仅是“看”和“听”。这种从静态内容到动态可交互内容的跨越，被认为是提升学习效果的重要手段。