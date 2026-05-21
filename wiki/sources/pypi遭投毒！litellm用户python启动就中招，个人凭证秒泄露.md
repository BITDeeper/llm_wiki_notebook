---
type: source
title: "PyPI遭投毒！LiteLLM用户Python启动就中招，个人凭证秒泄露"
tags: [security, pypi, litellm, supply-chain-attack, python]
related: [litellm, pypi, 供应链攻击, trivy, openclaw]
created: 2026-03-25
updated: 2026-03-25
authors: ["鹭羽"]
year: 2026
url: "https://mp.weixin.qq.com/s/cJ8YseRhGZtHogBEju093g"
venue: "量子位"
sources: ["pypi遭投毒！litellm用户python启动就中招，个人凭证秒泄露.md"]
---

# PyPI遭投毒！LiteLLM用户Python启动就中招，个人凭证秒泄露

## 概述
本文报道了针对 Python 流行库 [[LiteLLM]] 的一次重大 [[供应链攻击]]。攻击者通过污染 CI/CD 流水线中的安全工具 [[Trivy]]，窃取了发布者凭证，并在 PyPI 上发布了包含恶意代码的版本（1.82.7 和 1.82.8）。该恶意代码会在 Python 启动时自动执行，窃取 SSH 密钥、云凭证等敏感信息。

## 关键事件细节

- **受影响版本**：LiteLLM 1.82.7 和 1.82.8。
- **攻击入口**：攻击者篡改了 LiteLLM CI/CD 中使用的 [[Trivy]] GitHub Action，植入了信息窃取代码。
- **触发机制**：恶意文件 `litellm_init.pth` 利用 Python 的 `sitecustomize` 机制，使得只要 Python 进程启动（无需调用库），恶意代码即执行。
- **发现过程**：研究员 [[Callum McMahon]] 在测试时因机器内存耗尽（由于恶意代码编写低效，被称为 [[Vibe Coding]] 的反面教材）而追踪到源头。
- **影响范围**：LiteLLM 月下载量近亿，且被 [[OpenClaw]] 等其他工具间接依赖，导致大量用户可能在不自知的情况下中招。

## 攻击阶段
1.  **收集**：窃取 SSH 私钥、AWS/GCP/Azure 凭证、Kubernetes 配置、数据库密码及环境变量。
2.  **外泄**：使用硬编码的 RSA 公钥加密数据，并发送至攻击者服务器。
3.  **扩散**：在 Kubernetes 环境中尝试创建特权 Pod 并安装持久化后门。

## 行业反应
- [[Andrej Karpathy]] (卡帕西) 再次提醒社区警惕依赖关系带来的风险，主张减少依赖。
- [[Sebastian Raschka]] 建议将关键源代码保留在自己的库中，以避免供应链风险。
- 社区普遍认为针对开发工具的供应链攻击将成为“新常态”。

## 应对措施
文章提供了详细的四步自查流程：检查版本、清除缓存、检查持久化工件（如 `~/.config/sysmon/`）以及立即更换所有泄露的凭证。
