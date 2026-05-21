---
type: source
title: "省token神器3天狂揽4.1k星！19岁小哥开发，信息无损最高省87%"
created: 2026-04-07
updated: 2026-04-07
tags: [ai-tools, token-optimization, open-source, github]
related: [julius-brussee, caveman, 简洁性约束, claude-code]
authors: ["一水"]
year: 2026
url: "https://mp.weixin.qq.com/s/jYNoySKC_OiDpsbYTg_Gzg"
venue: "量子位"
sources: ["省token神器3天狂揽4.1k星！19岁小哥开发，信息无损最高省87%.md"]
---

# 省token神器3天狂揽4.1k星！19岁小哥开发，信息无损最高省87%

## 概述
本文报道了一款名为 [[caveman]] 的 GitHub 开源项目，该项目在短短 3 天内获得了 4.1k 星标。其核心功能是通过强制 AI 模型使用极简的“山顶洞人语言”进行输出，从而在不损失技术准确性的前提下，大幅减少输出 Token 的消耗（平均节省 65%，最高达 87%）。

## 核心内容

### 项目背景与原理
- **开发者**：[[Julius Brussee]]，19 岁的荷兰莱顿大学大一学生。
- **核心理念**：基于“简洁性约束”理论，即啰嗦并不总是更好，有时字数少等于更正确。
- **实现方式**：通过 [[caveman-speak]]（山顶洞人语言）模式，去除输出中的客套话、冠词和冗余修饰，仅保留关键词和核心逻辑。

### 技术细节
- **Token 节省效果**：
  - 初步测试显示平均节省约 75% 的输出 Token。
  - 在 10 项真实任务测试中，节省范围为 22%–87%，平均 65%。
- **保留内容**：代码块、行内代码、URL、文件路径、命令、标题、表格结构等技术性内容完全保留，仅压缩自然语言文本。
- **模式分级**：
  - **Lite**：删除客套话，保留基本语法。
  - **Full**：省略冠词，仅保留关键词片段（标准版）。
  - **Ultra**：极致压缩模式。
- **作用范围**：仅影响输出 Token，不影响思考/推理 Token，因此不会降低模型智商。

### 安装与使用
支持 [[Claude Code]]、Cursor、Copilot、Windsurf 等环境。安装命令示例：
```bash
npx skills add JuliusBrussee/caveman
```

### 开发者背景
文章还介绍了 [[Julius Brussee]] 的其他创业项目，包括 [[Revu]]（PDF 学习应用）、[[Stacklink]]（企业知识管理平台）和 [[Pitchr]]（AI 演讲辅助平台）。作者感叹，这个随手写的“joke”项目比他花费数月打磨的严肃项目获得了更多的关注。

### 争议与讨论
- **成本节约局限**：社区指出真正的成本大头在于输入 Token（上下文），而 Caveman 主要节省输出 Token。
- **可读性权衡**：极简风格可能增加用户的认知负荷。
- **数据严谨性**：作者承认 README 中的 75% 数据来自初步测试，而非严格基准，承诺进行更正式的评估。

## 相关概念
- [[简洁性约束]]：指通过强制简短回答来提升模型准确率的技术手段。
- [[token-优化]]：在保持信息无损的前提下减少 Token 数量以降低成本。
- [[ai-subscription-crisis]]：Caveman 提供了一种缓解 AI 使用成本压力的手段。