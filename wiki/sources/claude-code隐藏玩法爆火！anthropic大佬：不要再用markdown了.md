---
type: source
title: "Claude Code隐藏玩法爆火！Anthropic大佬：不要再用Markdown了"
tags: [anthropic, claude-code, markdown, html, workflow, ai-agent]
related: [claude-code, thariq-shihipar, boris-cherny, html-effectiveness, 用完即弃编辑器, 双向交互, ai-first-content-format]
created: 2026-05-09
updated: 2026-05-09
authors: [好困]
year: 2026
url: "https://mp.weixin.qq.qq.com/s/TOpMo4OTHuhn7q2bbQqyUw"
venue: "新智元"
sources: ["claude-code隐藏玩法爆火！anthropic大佬：不要再用markdown了.md"]
---

# Claude Code隐藏玩法爆火！Anthropic大佬：不要再用Markdown了

## 摘要
Anthropic 工程师 [[Thariq Shihipar]] 公开表示已几乎完全放弃使用 [[Markdown]]，转而让 [[Claude Code]] 直接生成 [[HTML]]。他开源了包含 20 个实用案例的 [[html-effectiveness]] 项目，展示了从代码审查到交互式教程的九大类应用场景。这一转变标志着 AI 时代内容格式的核心逻辑从“人类易于编辑”转向“人类易于阅读/机器易于生成”。

## 核心观点

### 格式范式的转移
统治开发者世界十年的 [[Markdown]] 正面临挑战。其核心假设——人类亲手编辑文件——在 AI 时代已不再成立。现在的瓶颈是“人的注意力”而非“Token 数量”，因此格式选择逻辑应从“易写”转向“易读”。

### HTML 的优势
- **视觉表现力**：能展示色板、交互式图表、代码 Diff 风险地图，而非依赖 ASCII 字符画。
- **交互性**：支持拖拽、滑块、实时预览（如一致性哈希教程），[[Markdown]] 则是静态的。
- **可读性**：结构化页面更易于人类消费，长篇 [[Markdown]] 文档难以阅读。

### 关键概念
- **[[用完即弃编辑器]]**：由 AI 临时生成的、针对特定任务（如排序工单、微调 Prompt）定制的单文件 HTML 工具，使用后即可丢弃。
- **[[双向交互]]**：用户在 AI 生成的 HTML 界面中进行操作（如拖拽、点击），然后将结果导出回文本给 AI 继续处理的闭环流程（人 → AI → HTML → 人操作 → 导出 → AI）。

## 实体与人物

- **[[Thariq Shihipar]]**：Anthropic 工程师，MIT Media Lab 出身，前游戏公司创始人。负责 Claude Code 的工程、内容和用户反馈。提出了“AI精神病”概念，认为 Claude Code 是软件开发未来。
- **[[Boris Cherny]]**：Claude Code 之父（项目负责人），招人标准是“ex-founder, high agency”（创过业、执行力强）。
- **[[html-effectiveness]]**：Thariq 开源的一组 20 个 HTML 文件，展示了 Claude Code 生成 HTML 的各种用例。

## 应用场景

1.  **代码审查**：生成完整的 diff 渲染，内联注释按严重程度颜色编码，附带风险地图和修复建议。
2.  **交互式教程**：例如一致性哈希教程，用户可实时添加/删除节点并观察 key 重新分配。
3.  **工单排序**：生成可拖拽的卡片界面，AI 预排序后人工微调，最后导出结果。
4.  **周报与计划**：配图表和彩色时间线，信息密度高，易于扫视。
5.  **设计系统可视化**：渲染色板、组件尺寸状态表。
6.  **动画原型**：通过滑块调整缓动曲线，一键复制回代码。

## 局限性与代价
- 生成时间比 Markdown 慢 2 到 4 倍。
- 版本控制的 diff 难以阅读。
- 更消耗 Token。
- **结论**：为了确保内容真正被阅读（[[空间信息还原]]），这些代价是值得的。