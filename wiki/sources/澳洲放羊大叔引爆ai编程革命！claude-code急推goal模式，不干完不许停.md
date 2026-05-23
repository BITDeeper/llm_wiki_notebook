---
type: source
title: "澳洲放羊大叔引爆AI编程革命！Claude Code急推goal模式，不干完不许停"
created: 2026-05-13
updated: 2026-05-13
tags: [ai编程, claude-code, codex, hermes-agent, ralph-loop, goal模式, 闭环交付]
related: [claude-code, hermes-agent, ralph-loop, goal模式, geoffrey-huntley, 闭环交付]
sources: ["澳洲放羊大叔引爆ai编程革命！claude-code急推goal模式，不干完不许停.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/VwsCC3WNHatLbGBPDw7VOw"
venue: 新智元
---
# 澳洲放羊大叔引爆AI编程革命！Claude Code急推goal模式，不干完不许停

## 摘要

本文报道了澳大利亚开发者 [[geoffrey-huntley]] 用三行 bash 脚本发明 [[ralph-loop]]，在 11 天内被 OpenAI、Anthropic 和 Nous Research 三大 AI 实验室集体收编的事件。这一事件标志着 AI 编程的核心战场从"生成代码"转向 [[闭环交付]]。

## 核心内容

### Ralph Loop 的诞生
Geoffrey Huntley 用一个无限循环 bash 脚本强制 AI Agent 持续执行任务直到完成，命名为 Ralph Loop（致敬《辛普森一家》角色 Ralph Wiggum）。逻辑粗暴但有效：进度存在文件系统和 Git 历史中，上下文满了就开新实例。

### 三家实现路径对比

1. **[[claude-code|Codex（OpenAI）]]** — 持久化工作流对象 + 结构化进度汇报 + token 预算耗尽时软着陆。有人连续运行 14 小时完成设备驱动项目。
2. **[[hermes-agent|Hermes Agent（Nous Research）]]** — 多智能体看板系统 + 五层防烂尾机制（心跳检测、僵尸回收、退出拦截、幻觉拦截、重试预算）。
3. **[[claude-code|Claude Code（Anthropic）]]** — 独立裁判模型（Haiku）验收 + session 级 Stop Hook，解决"自我评估"的根本缺陷。

### 战略意义
三家争的是同一个东西——工作流入口。谁的 Agent 先让开发者养成"设完目标就走开"的习惯，谁就锁死了工作流护城河。

## 关键时间线
- 2026年4月19日前后：Ralph Loop 发布
- 2026年4月30日：OpenAI Codex 率先上线 /goal 功能
- 2026年5月7日左右：Hermes Agent 跟进上线
- 2026年5月11日左右：Claude Code 上线 /goal 功能