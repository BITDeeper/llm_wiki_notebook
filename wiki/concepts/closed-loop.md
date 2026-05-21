---
type: concept
title: 闭环
tags: [verification, testing, reliability, ai-programming]
related: [peter-steinberger, moltbot, ai-subscription-crisis]
created: 2026-01-29
updated: 2026-01-29
sources: ["全球爆红后，clawdbot之父2小时深度专访：退休3年后我杀回江湖.md"]
---

# 闭环

## 定义
在 AI 编程语境下，**闭环**（Closed Loop）是指 AI 系统能够自动验证自身工作产出的完整反馈机制。这通常包括代码的编译、静态分析、执行以及结果验证。

## 核心要素
[[Peter Steinberger]] 强调，一个有效的 AI 编程闭环必须包含以下步骤：
1. **Compile**：代码必须能够成功编译。
2. **Lint**：通过静态代码分析工具检查。
3. **Execute**：代码能够实际运行。
4. **Verify**：输出结果符合预期（通常通过自动化测试）。

## 重要性
闭环是解决 AI 生成代码“信任危机”的关键方案。
- **信任基础**：只有当 AI 能够通过上述所有步骤，人类开发者才有理由信任其生成的代码，甚至在不阅读代码的情况下发布。
- **效率保障**：闭环使得 AI 能够像 [[Moltbot]] 那样进行高度自主的操作，无需人类频繁介入纠错。
- **支持激进工作流**：[[Peter Steinberger]] 之所以能实现一天 600 个 Commit，完全依赖于强大的闭环系统来保证代码质量。

## 实现方式
- **自动化测试集成**：将 AI 生成代码直接接入 CI/CD 流水线。
- **自我修正**：利用 LLM 的能力，让 AI 根据编译或测试报错信息自动修复代码，直到通过测试。
- **沙箱环境**：在隔离环境中执行代码，防止破坏性操作影响开发环境。

## 与相关概念的联系
- **[[Prompt Request]]**：闭环是 Prompt Request 范式成立的前提，因为审查者不读代码，所以必须依赖闭环来保证质量。
- **[[ai-subscription-crisis]]**：建立闭环通常需要大量的推理 Token（用于多次尝试和修正），这加剧了 AI 订阅制的成本压力。