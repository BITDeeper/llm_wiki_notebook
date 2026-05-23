---
type: concept
title: MAD Bugs
created: 2026-05-15
updated: 2026-05-15
tags: [漏洞链, 安全研究]
related: [mie-内存完整性强制执行, calif, m5-mie攻破事件-202605, data-only-attack]
sources: ["苹果防线全线血崩！mythos5天攻破最强硬件，全球20亿台设备危了.md"]
---
# MAD Bugs

[[calif|Calif]] 团队发现的漏洞链名称，是首个公开的在M5硬件层面存活并绕过 [[mie-内存完整性强制执行|MIE]] 的macOS内核内存损坏漏洞利用。

## 技术特征

- 攻击路径：从无特权本地用户出发，通过正常系统调用完成内核级权限提升
- 攻击方式：[[data-only-attack|纯数据攻击]]，不注入代码、只操纵数据
- 运行环境：裸机M5硬件，内核MIE全程开启
- 最终效果：获取root shell

## 时间线

- 2026年4月25日：[[bruce-dang|Bruce Dang]] 初步嗅探到M5内核缝隙
- 2026年4月27日：[[dion-blazakis|Dion Blazakis]] 加入，[[claude-mythos|Mythos]] 全功率运转
- 2026年5月1日：MAD Bugs漏洞链闭环完成