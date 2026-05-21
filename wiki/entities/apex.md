---
type: entity
title: APEX
tags: [ai-agent, academic-tools, multimodal, open-source]
related: [ju-bu-ke-kong-bian-ji, shen-cha-tiao-zheng-ji-zhi, apex-bench, poster-gen, duo-ceng-ji-api]
created: 2026-01-21
updated: 2026-01-21
sources: ["学术海报不用愁，一句话精准自动编辑，华东师大开源apex.md"]
---

# APEX

**APEX** (Academic Poster Editing Agentic Expert) 是由 [[华东师范大学]] Planning Lab 开发的首个面向交互式学术海报编辑的智能体框架。它允许用户通过自然语言指令对学术海报进行局部、可控的自动修改。

## 核心特性

### 局部可控编辑
与传统的 [[重绘式方法]] 不同，APEX 不会重新生成整张海报，而是通过解析 PPTX 文件结构，仅对用户指定的部分进行修改。这有效避免了全图重绘导致的视觉幻觉和数据扭曲问题。

### 多层级 API
APEX 摒弃了不稳定的代码生成（如生成 Python 脚本），转而使用预定义的 [[多层级 API]]。这套 API 涵盖了从单元素操作（如修改字体）到组操作（如移动整个章节）的各种功能，确保了编辑操作的确定性和稳定性。

### 审查—调整机制
为了提高编辑的可靠性，APEX 引入了 [[审查—调整机制]]。在 Agent 执行完初步编辑后，系统会自动对比编辑前后的视觉与语义变化：
1.  检查是否存在不必要的冗余修改。
2.  核实修改内容是否符合用户指令。
如果发现排版重叠或内容错误，系统会自动生成额外的 API 序列进行二次修正。

### 数据真实性
当指令涉及内容补充（如“插入消融实验表格”）时，APEX 会调用论文理解工具直接从原论文 PDF 中提取真实数据，从源头上杜绝了 AI 生成内容常见的“瞎编数据”现象。

## 评测表现
在团队构建的 [[apex-bench]] 基准测试中，APEX 在指令遵循度（I.F.）、修改范围控制度（M.S.）和视觉一致性（V.C.）上均显著优于基线方法（包括图像生成、XML 生成及通用 PPT Agent）。

## 开源信息
-   **论文**: [https://arxiv.org/abs/2601.04794](https://arxiv.org/abs/2601.04794)
-   **代码**: [https://github.com/Breesiu/APEX](https://github.com/Breesiu/APEX)