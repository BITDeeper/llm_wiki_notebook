---
type: source
title: 一个分号击穿GitHub！少写一行过滤代码，亿级代码仓库差点被端
tags: [security, github, vulnerability, ai, reverse-engineering]
related: [wiz, github, cve-2026-3854, ai-辅助逆向工程, 多租户架构风险]
created: 2026-05-11
updated: 2026-05-11
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/OxL9Wotf6n8RH4MXwA9JHA"
venue: "新智元"
---

# 一个分号击穿GitHub！少写一行过滤代码，亿级代码仓库差点被端

## 摘要
本文详细记录了云安全公司 [[Wiz]] 如何利用 [[AI 辅助逆向工程]] 技术发现 [[GitHub]] 内部组件 [[babeld]] 中的 [[CVE-2026-3854]] 漏洞。攻击者仅需在 Git Push Option 中注入一个分号，即可利用 [[参数注入]] 和 [[last-write-wins]] 机制，绕过文件大小限制并最终实现远程代码执行（RCE）。此次事件不仅暴露了 [[多租户架构风险]] 和 [[隐式信任链]] 的脆弱性，也标志着 AI 工具正在重写软件安全攻防的成本结构。

## 核心事件
- **漏洞编号**：[[CVE-2026-3854]]
- **发现时间**：2026年3月4日
- **响应时间**：GitHub 在 75 分钟内完成云端修复
- **影响范围**：[[GitHub]] Enterprise Server (GHES) 及 GitHub.com
- **攻击入口**：Git Push Option 中的分号 (`;`)

## 漏洞机制
1.  **参数注入**：[[babeld]] 组件在处理用户输入的 Push Option 时，未过滤分号，导致恶意参数被注入到内部通信头 `X-Stat` 中。
2.  **覆盖逻辑**：利用 [[last-write-wins]] 语义，攻击者注入的 `large_blob_rejection_enabled=bool:false` 覆盖了原有的 `true` 设置，从而关闭了文件大小限制。
3.  **信任链断裂**：[[gitrpcd]] 和下游的 Hook 脚本盲目信任 `X-Stat` 头，未进行二次校验，导致攻击者能进一步注入 `rails_env` 关闭沙箱，并替换 Hook 目录执行任意命令。

## 关键发现
- **多租户风险**：由于 GitHub.com 使用共享服务账户 (`git` 用户)，一旦获取该账户权限，理论上可访问节点上所有仓库索引。虽然此次未发生数据泄露，但证实了权限边界的结构性脆弱。
- **AI 改变攻防**：[[Wiz]] 使用 IDA Pro 结合 MCP 协议和 LLM，将原本需要数月的闭源软件逆向工程缩短至数周。这意味着“闭源即安全”的护城河正在消失。
- **自建维护困境**：虽然 GitHub.com 修复迅速，但披露时仍有 88% 的 [[GHES]] 实例未打补丁，反映了企业自建软件在安全更新上的滞后性。

## 相关概念
- [[参数注入]]
- [[多租户架构风险]]
- [[隐式信任链]]
- [[AI 辅助逆向工程]]
- [[last-write-wins]]

## 相关实体
- [[Wiz]]
- [[GitHub]]
- [[GHES]]
- [[babeld]]
- [[gitrpcd]]