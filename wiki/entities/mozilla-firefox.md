---
type: entity
title: Mozilla Firefox
created: 2026-05-20
updated: 2026-05-25
tags: ["browser", "open-source", "security", "mozilla", "浏览器", "开源软件", "安全"]
related: [claude-mythos, agentic-harness, brian-grinstead, ai安全漏洞挖掘, claude-mythos-preview, project-glasswing]
sources: ["1个月干完15个月！claude-mythos猎杀271个漏洞，有的藏了20年.md", "mythos首个报告出炉：全球数十亿设备裸奔！30天挖出10000致命漏洞.md"]
---
# Mozilla Firefox

**Mozilla Firefox** 是 Mozilla 基金会开发的开源网页浏览器。2026 年与 [[anthropic]] 合作利用 [[claude-mythos|Claude Mythos]] 进行了历史上最大规模的安全修复行动。

## 安全修复里程碑

- **2025 年全年：** 月均修复 21.5 个安全漏洞
- **2026 年 2 月：** 开始与 Anthropic 合作，使用 Claude Opus 4.6
- **2026 年 4 月：** 单月修复 **423 个**安全漏洞（约 14 倍增长）
  - 271 个由 Mythos 直接发现
  - 41 个来自外部安全研究员
  - 111 个由内部团队通过其他方式发现

## 关键版本

- **Firefox 148：** 首次使用 Claude Opus 4.6，修复 22 个漏洞
- **Firefox 149.0.2：** 持续修复
- **Firefox 150.0.1 / 150.0.2：** Mythos Preview 大规模发现，诞生"有史以来最安全的 Firefox 版本"

## 在玻璃翼计划中的角色

在 Firefox v150 的测试中，[[claude-mythos-preview]] 修复了 **271 个高危漏洞**。这一数字是此前在 Firefox v148 中使用 Opus 4.6 所发现漏洞数的 **10 倍以上**，直观展示了 Mythos 相较于前代模型的安全能力代际跃升。

## 工程投入

超过 100 名工程师参与修复工作——写补丁、做代码审查、搭管道、做分类、测试修复、管理发布流程。AI 补丁仅作参考，不能直接部署。