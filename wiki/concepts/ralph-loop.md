---
type: concept
title: Ralph Loop
tags: ["script", "automation", "evolution", "agent架构", "目标驱动", "工程模式", "ai编程", "自动化", "bash", "闭环交付", "范式创新"]
related: [claude-code, 递归式自我改进, codex-goal-mode, 任务执行范式, goal模式, geoffrey-huntley, 闭环交付, 断点续跑]
created: 2026-02-08
updated: 2026-05-22
sources: ["硅基文明登场！从clawdbot到moltbook，人类退居观众席.md", "博士80小时熬夜改代码，codex-2小时交卷！科研奇点来了.md", "澳洲放羊大叔引爆ai编程革命！claude-code急推goal模式，不干完不许停.md"]
origin_date: 2026-04-19
---

# Ralph Loop

**Ralph Loop** 是由澳大利亚开发者 [[geoffrey-huntley]] 发明的三行 Bash 无限循环脚本，强制 AI Agent 持续执行任务直到完成。命名致敬《辛普森一家》中永远搞不清状况但从不放弃的角色 Ralph Wiggum。它既是具体的工程实践，也是一种通用的目标驱动架构模式。

## 核心逻辑

```bash
while :; do
  cat PROMPT.md | claude-code --continue
done
```

逻辑极其粗暴：无限循环，反复把同一个 prompt 喂给 Agent。进度写在文件系统和 Git 历史里，上下文满了就开新实例，读文件接着干。

[[codex-goal-mode|Codex /goal]] 是对 Ralph Loop 理念的具体工程实现。

## 核心思想

传统 AI 对话是"一问一答"的线性模式，每次交互独立。Ralph Loop 则将一个高层目标注入对话上下文，使 AI 在后续每一轮交互中都保持对该目标的追踪，自主判断是否达成、是否需要继续迭代——不达成不停止。

## 关键创新

- **进度持久化**：不依赖 Agent 的上下文窗口，进度存在外部文件系统中
- **实例无缝切换**：上下文溢出时自动开新实例，从文件系统读取进度继续
- **无限循环驱动**：不信任 Agent 的"完成"判断，靠外部循环强制推进

## 功能与意义

- **自我进化催化剂**：用户只需在睡前下达指令，脚本就会驱动 AI 在夜间不断尝试自我修复和构建
- **并行试错**：利用 AI 的高迭代速度，在一个夜晚完成人类需要数周才能完成的调试和开发工作
- **哲学隐喻**：象征着 AI 进化不再受限于人类的生物节律（睡眠），实现了"睡着觉把活干了"
- **架构转变**：代表了从"工具型 AI"（被动响应指令）到"代理型 AI"（主动追求目标）的转变，是 [[任务执行范式]] 演进的关键技术组件

## 行业影响

Ralph Loop 在 11 天内被 [[openai]]（Codex）、[[anthropic]]（Claude Code）和 [[nous-research]]（Hermes Agent）三大顶级 AI 实验室集体收编，直接催生了 [[goal模式]] 的行业浪潮。这一事件标志着 AI 编程从"生成代码"向 [[闭环交付]] 的范式转移。

这一脚本的出现让硅谷开发者意识到，AI 的进化速度已经彻底脱离了人类的线性时间观。

## 评价

原始、不优雅，但十分有效。Ralph Loop 证明了一个关键洞察：简单粗暴的方案可能比复杂架构更接近本质需求。它击中的痛点是——到 2026 年初，没有任何一家 AI 编程工具能做到"从头到尾把一件事干完"。