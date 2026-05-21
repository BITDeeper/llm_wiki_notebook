---
type: entity
title: GitHub Enterprise Server
tags: [infrastructure, self-hosted, git, security]
related: [github, cve-2026-3854, 多租户架构风险]
created: 2026-05-11
updated: 2026-05-11
sources: ["一个分号击穿github！少写一行过滤代码，亿级代码仓库差点被端.md"]
---

# GitHub Enterprise Server (GHES)

**GitHub Enterprise Server (GHES)** 是 [[GitHub]] 提供的企业级自建托管方案，允许公司在本地服务器上部署和管理代码仓库。

## 安全风险
与 SaaS 版本不同，GHES 的安全补丁依赖管理员手动更新。在 [[CVE-2026-3854]] 漏洞披露时，数据显示有 88% 的 GHES 实例尚未打补丁。这种滞后性使得自建实例往往比云托管版本面临更高的长期风险。

## 漏洞影响
在 [[CVE-2026-3854]] 事件中，攻击者一旦获得 GHES 实例上某个仓库的 Push 权限，即可通过 [[参数注入]] 获取服务器上的 `git` 服务账户权限，进而访问该节点上的所有代码资产、CI 配置和内部凭证。

## 维护挑战
GHES 管理员需要持续跟进官方发布的高危漏洞补丁（如 CVE-2026-5845, CVE-2026-5921 等），并自行审计日志（如 `/var/log/github-audit.log`）以检测潜在的入侵痕迹。