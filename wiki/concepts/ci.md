---
type: concept
title: 持续集成 (CI)
tags: [devops, engineering, automation]
related: [openclaw, npm]
created: 2026-03-24
updated: 2026-03-24
sources: ["openclaw-3.23紧急修复！peter忘记打包控制台文件，海量龙虾崩溃.md"]
---

# 持续集成 (CI)

持续集成（Continuous Integration，简称 CI）是一种软件开发实践，要求开发者频繁地将代码合并到主分支。每次合并都会自动触发构建和测试流程，旨在尽早发现集成错误。

## 在 OpenClaw 中的应用
在 [[openclaw]] 3.22 版本发生因漏打包资源导致的事故后，项目组在 CI 流程中引入了强制性检查：
- **发布前检查**：验证 npm 发布产物中是否包含必要的插件和 UI 资源。
- **阻断机制**：如果关键产物缺失，CI 将直接报错并阻断发布流程，防止不完整的版本推向用户。

这一改进将原本依赖人工记忆的发布步骤转化为自动化验证，显著提高了系统的工程确定性。