---
type: concept
title: DESIGN.md
tags: [design-systems, documentation, standardization, dev-handoff]
related: [stitch, ai-native-canvas, design-system]
created: 2026-03-20
updated: 2026-03-20
sources: ["ai屠刀下一站“vibe设计”！谷歌一个产品把合作伙伴figma干崩了.md"]
---

# DESIGN.md

[[DESIGN.md]] 是一种用于定义、导出和导入设计规则的文档格式或标准，主要用于确保设计系统的一致性和设计到开发的平滑交接。

## 功能与作用
在 [[Google]] [[Stitch]] 等现代 AI 设计工具中，[[DESIGN.md]] 扮演了“单一事实来源”的角色：
1. **规则定义**：记录颜色、字体、间距、组件状态等设计规范。
2. **全局同步**：编辑 [[DESIGN.md]] 中的规则，所有关联的屏幕和组件自动更新。
3. **跨项目复用**：可以从一个产品导出设计规则，并在另一个产品中导入，确保多产品间的一致性。

## 解决的问题
- **信息丢失**：传统设计流程中，设计稿交付给开发时，往往遗漏交互状态或边缘情况的处理逻辑。
- **维护成本**：当设计系统更新时，手动修改所有相关界面效率低下且容易出错。
- **一致性**：防止不同设计师或不同项目间出现风格割裂。

## 参见
- [[Stitch]]：使用该格式实现设计系统一致性的工具。