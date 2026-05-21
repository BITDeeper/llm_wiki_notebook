---
type: concept
title: Last-Write-Wins (后写覆盖)
tags: [programming, logic, security]
related: [参数注入, cve-2026-3854]
created: 2026-05-11
updated: 2026-05-11
sources: ["一个分号击穿github！少写一行过滤代码，亿级代码仓库差点被端.md"]
---

# Last-Write-Wins (后写覆盖)

**Last-Write-Wins** (后写覆盖) 是一种数据处理逻辑，指在处理重复键值对或并发更新时，后出现的值覆盖先前的值。

## 在安全漏洞中的角色
在 [[CVE-2026-3854]] 中，攻击者利用了这一逻辑。系统解析 `X-Stat` 头时，如果遇到重复的键（如 `large_blob_rejection_enabled`），后面的值会覆盖前面的值。攻击者通过 [[参数注入]] 插入一个恶意的同名键值对，成功将原本的安全设置（如 `bool:true`）覆盖为不安全设置（如 `bool:false`）。

## 防御
在处理配置或元数据时，应警惕重复键带来的覆盖风险。安全的做法是拒绝包含重复键的输入，或者在检测到冲突时采取“拒绝服务”策略，而非默认覆盖。