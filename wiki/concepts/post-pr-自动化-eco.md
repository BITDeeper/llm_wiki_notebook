---
type: concept
title: Post P&R 自动化 ECO
tags: [eda, 芯片设计, 时序分析, optimization]
related: [eda-agent, fluxeda]
created: 2026-04-06
updated: 2026-04-06
sources: ["agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环.md"]
---

# Post P&R 自动化 ECO

Post P&R (Place and Route) 自动化 ECO (Engineering Change Order) 是指在芯片布局布线完成后，自动修复时序违例的闭环流程。这是 [[EDA Agent]] 典型的应用场景之一。

## 流程步骤
1. **读取设计**：加载已完成布线的网表。
2. **设置环境**：配置 propagated_clock 和 case_analysis。
3. **生成基线**：运行 PrimeTime 等工具生成 Timing 报告。
4. **路径分析**：抽取 Setup/Hold 关键路径。
5. **迭代修复**：根据违例类型和严重程度，自动调整单元尺寸、插入缓冲器或优化网表。

## Agent 的策略性
在 [[fluxeda]] 的实验中，Agent 展现了类似人类专家的策略：
- **优先级判断**：优先集中修复 Setup 违例（通常更难解决）。
- **止损机制**：当 Setup 修复收益趋于平台期时，及时停止并转入 Hold 违例清理。
- **最终收尾**：在保持核心时序收益的同时完成最终清理。

## 实测效果
- Setup TNS 从 -37.36 提升至 -34.78。
- Hold THS 从 -1.329 降至 0.000（违例完全清零）。