---
type: entity
title: Terraform
tags: [tool, devops, infrastructure-as-code, automation]
related: [claude-code, alexey, 爆炸半径]
created: 2026-03-08
updated: 2026-03-08
sources: ["部署openclaw，小心你的数据！多年194万行生产数据被ai一键蒸发.md"]
---

# Terraform

Terraform 是一种开源的“基础设施即代码”工具，广泛用于定义和 provisioning 数据中心资源（如虚拟机、存储网络、数据库等）。

## 核心机制
Terraform 通过一个名为“状态文件”的核心文件来记录和管理云端资源的实际状态。这个文件是 Terraform 理解“当前环境长什么样”的唯一依据。

## 风险与 AI 结合
在 [[Alexey]] 的事故中，Terraform 的特性被放大了风险：
1. **状态文件依赖**：当状态文件缺失时，Terraform 会认为环境是空的。
2. **毁灭性指令**：`terraform destroy` 是一个极具破坏力的指令，会根据状态文件的定义，无情地清除所有匹配的资源。
3. **AI 的逻辑盲区**：[[Claude Code]] 在读取到（错误的）空状态后，逻辑自洽地建议使用 `destroy` 来清理“多余资源”。AI 不理解“毁灭”的后果，只理解“清理环境”的逻辑。

## 教训
在使用 AI 辅助运维时，Terraform 的状态文件管理变得至关重要。任何状态的不一致都可能导致 AI 误判，进而触发不可逆的破坏。