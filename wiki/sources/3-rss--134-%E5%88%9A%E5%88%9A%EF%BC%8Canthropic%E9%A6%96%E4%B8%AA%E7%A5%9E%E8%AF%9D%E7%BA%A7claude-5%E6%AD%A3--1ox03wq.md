---
type: source
title: "刚刚，Anthropic首个神话级Claude 5正式解禁！"
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/jqBsN_2UDie47GVQj8L5MQ"
venue: 新智元
tags: [anthropic, claude-5, fable-5, mythos-5, asi, ai-safety, benchmark]
related: [claude-fable-5, mythos-5, anthropic, claude-5双模发布-20260610]
created: 2026-06-10
updated: 2026-06-10
sources: ["rss/刚刚，anthropic首个神话级claude-5正式解禁！.md"]
---
# 刚刚，Anthropic首个神话级Claude 5正式解禁！

新智元2026年6月10日报道。Anthropic同日发布Claude Fable 5（公开版）和Claude Mythos 5（完整版），标志Claude 5系列正式亮相。

## 核心内容

### 双模发布
- Fable 5（公开版）：内置安全分类器，网络安全等敏感任务自动降级至[[opus-4-8|Opus 4.8]]
- Mythos 5（完整版）：无安全分类器，仅通过API受限渠道提供
- 两者同底座，分数差距通常在1-3个百分点以内
- 命名哲学：Fable（寓言）与Mythos（神话）同源，暗示"同一个故事，同一个底座"

### 迭代速度
- Opus 4.7→4.8：43天
- Opus 4.8→Fable 5：仅11天

### 基准成绩
- SWE-Bench Pro：Fable 5得分80.3%，Opus 4.8为69.2%，[[gpt-5-5|GPT-5.5]]为58.6%，[[gemini-3-1-pro|Gemini 3.1 Pro]]为54.2%
- FrontierCode Diamond：Fable 5得分29.3%，GPT-5.5为5.7%（五倍差距）
- HLE（人类最后考试）：Mythos 5不用工具即断层领先GPT-5.5和Gemini 3.1 Pro

### 定价
- 输入$10/百万token，输出$50/百万token
- 与Opus 4.8 Fast Mode基本一致
- 不到Mythos Preview的一半，仅为GPT-5.5 Pro的六分之一

### 实际案例
- [[stripe|Stripe]]在5000万行Ruby代码库中完成全局迁移，原需团队两月，Fable 5一天完成
- Physical Superintelligence CEO测试：Fable 5消耗GPT-5.5三分之一推理token，36小时达到GPT-5.5四天的成果

### 自主科研能力
- 蛋白质设计：14个疾病靶点成功斩获9个强候选方案
- 基因组学：自主搜集138个物种、数百万细胞数据，自训练ML模型，性能超越近期Science论文，体量小100倍

### 安全机制
- 安全分类器：网络安全、生物化学、模型蒸馏相关请求自动降级至Opus 4.8
- 蒸馏防护：通过提示词修改、控制向量和PEET方法限制模型被蒸馏能力，不通知用户
- 约0.03%流量受影响

### 视觉能力突破
- 仅凭屏幕截图（无辅助工具）通关宝可梦火红版
- 配合持久化文件记忆后，游戏性能提升为Opus 4.8的3倍

### 关键评价
- [[andrej-karpathy|Karpathy]]：配得上"大版本号"升级的跨越式进步
- [[felix-rieseberg|Felix Rieseberg]]（Claude Code负责人）："第三个AI时代"正式开启，从给AI派发"任务"到赋予"职责"
- Alex Albert（Anthropic研究员）：第一个让人觉得"不像工具，像伙伴"的模型
- Dan Shipper（Every CEO）："性能怪兽"