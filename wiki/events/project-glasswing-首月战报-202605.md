---
type: event
title: 玻璃翼计划首月战报发布
created: 2026-05-23
updated: 2026-05-23
tags: [安全, 里程碑, anthropic, 漏洞挖掘]
related: [anthropic, claude-mythos-preview, project-glasswing, claude-security, cloudflare, wolfssl, openbsd]
sources: ["mythos首个报告出炉：全球数十亿设备裸奔！30天挖出10000致命漏洞.md"]
origin_date: 2026-05-23
time_span:
  start: 2026-04-01
  end: 2026-05-23
participants: [anthropic, cloudflare, mozilla-firefox, openbsd, 英国ai安全研究所, wolfssl, 思科, xbow]
causes: [scaling-law, agentic-engineering]
effects: [漏洞发现修复产能失衡, ai安全护栏延迟发布困境]
significance: high
---
# 玻璃翼计划首月战报发布

2026年5月23日，[[anthropic]] 正式公布了 [[project-glasswing|玻璃翼计划]] 的首月战报，标志着 AI 安全能力从辅助工具跃升为自主代理的里程碑事件。

## 事件背景

2026年4月，Anthropic 秘密启动玻璃翼计划，联合全球约50家网络巨头和关键基础设施软件开发方，首次动用 [[claude-mythos-preview]] 模型进行大规模安全扫描。

## 核心成果

- 扫描1000+核心开源项目，发现23,019个漏洞（6,202个高危/严重）
- 经6家独立安全公司交叉复核，真阳性准确率90.6%
- [[cloudflare]] 核心路径发现2000个漏洞（400个高危）
- [[mozilla-firefox]] v150修复271个高危漏洞（Opus 4.6的10倍）
- [[openbsd]] 发现隐藏27年的陈年Bug
- [[wolfssl]] 发现可伪造数字证书的逻辑漏洞，影响全球数十亿设备
- [[英国ai安全研究所]] 确认 Mythos 首个端到端攻克双重网络靶场
- 成功拦截150万美元AI语音克隆电诈

## 深层影响

1. **暴露产能失衡**：1,129个提交漏洞中仅75个被打补丁，引发 [[漏洞发现修复产能失衡]] 讨论
2. **安全范式转变**：从"人找人修"转向"AI找AI修、人审核"
3. **发布困境**：模型能力过强导致 [[ai安全护栏延迟发布困境]]
4. **行业响应**：[[思科]] 开源 Foundry Security Spec，行业安全基础设施加速建设

## 因果链

[[scaling-law]] 持续有效 → Mythos 级模型能力涌现 → 漏洞发现成本趋零 → 人类修复产能瓶颈暴露 → Anthropic 推出防御者工具包和 [[claude-security]] → 安全范式根本性转变