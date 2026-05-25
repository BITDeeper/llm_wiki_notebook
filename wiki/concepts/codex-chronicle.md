---
type: concept
title: Codex Chronicle
created: 2026-05-23
updated: 2026-05-23
tags: [codex, 记忆, agent, 实验功能]
related: [codex, codex-maxxing, jason-liu, 本地文件记忆]
sources: ["openai大神教你如何榨干codex.md"]
---
# Codex Chronicle

[[codex]] 自带的记忆功能，通过截取屏幕内容来构建上下文。截至 2026 年 5 月仍为实验预览功能，需要手动开启。

## 当前状态

- 实验预览阶段，需手动开启
- 在权限、速率和隐私方面仍存在短板
- 整体方向可行但还不够成熟

## 与本地文件记忆的对比

[[jason-liu]] 在 [[codex-maxxing]] 方法论中选择几乎放弃 Chronicle，转而使用 Obsidian vault 作为核心记忆基础设施。主要原因：

- AI 承载的记忆体量越大，越不该把数据锁死在单一平台
- 本地文件完全属于用户，可随时查阅、手动修改、版本对比、一键回滚
- 后续换工具、迁平台时，拎着知识库就能走

Chronicle 通过截屏构建上下文的方式也引发了隐私隐忧——截屏内容可能包含敏感信息。