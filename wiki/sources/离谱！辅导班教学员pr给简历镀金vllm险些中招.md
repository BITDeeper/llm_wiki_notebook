---
type: source
title: "离谱！辅导班教学员刷开源项目PR给简历「镀金」，vLLM险些中招"
created: 2026-05-24
updated: 2026-05-24
tags: [开源, ai-pr, vllm, github, 开源治理]
related: [vllm, ai低质量pr危机, 开源pr镀金产业链, ai科研辅导欺诈, 贡献-审查成本不对称]
sources: ["离谱！辅导班教学员刷开源项目pr给简历「镀金」，vllm险些中招.md"]
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/rMuSVDa-wzwaBkd69HFazg"
venue: 机器之心
---
# 离谱！辅导班教学员刷开源项目PR给简历「镀金」，vLLM险些中招

## 摘要

本文报道了AI工具普及对开源社区信任机制的系统性冲击。以[[vllm]]社区遭遇辅导机构指导的虚假PR事件为切入点，揭示了[[开源pr镀金产业链]]的运作模式，并梳理了Godot、cURL、tldraw等多个开源项目的应对措施。文章提出[[贡献-审查成本不对称]]这一核心洞察：AI消灭了"贡献"的成本，却没有消灭"审查"的成本，压力全部转移到多为无薪志愿者的维护者身上。

## 核心内容

### 一手案例
- [[vllm]]核心贡献者[[游凯超]]在知乎曝光辅导机构指导学员提交虚假PR
- PR针对一个并不存在的问题，通过@大量维护者博取关注
- 社区在PR合并后迅速识别并举报

### 多方应对
- [[vllm]]：封禁相关贡献者 + 建立可验证邮箱/真用例优先审查通道
- [[curl]]：[[daniel-stenberg]]关闭运行六年多的悬赏计划，部署三个AI审查机器人
- [[tldraw]]：自动关闭所有外部贡献者的Pull Request
- [[gentoo]]：将仓库从GitHub迁移至[[codeberg]]

### 平台责任
- [[github]]被指产品设计激励低质量PR泛滥，Copilot自动生成Bug报告不标注AI参与
- GitHub工程师承认问题但回避指向AI，承诺推出准入门槛等工具

### 社区自发工具
- Anti Slop GitHub Action：宣称自动识别并关闭98%垃圾PR
- PR Slop Stopper：通过提交者历史、账号年龄等维度打可信度评分

## 关联概念

- [[ai科研辅导欺诈]] — 本文曝光的"刷PR镀金"是该概念在开源领域的具体表现
- [[kyc]] — 开源社区被迫走向"Know Your Contributor"方向
- [[认知投降]] — 部分提交者不理解AI生成代码就提交，体现对AI输出的盲目信任