---
type: source
title: "诺奖得主联手Claude，40轮对话证出12年物理猜想"
created: 2026-06-07
updated: 2026-06-07
tags: [ai-for-science, 物理学, 人机协作, 诺奖得主, claude]
related: [giorgio-parisi, a+b=1-猜想, parisi-claude-阻塞转变证明, 人机协作证明, anthropic]
sources: ["诺奖得主联手claude，40轮对话证出12年物理猜想.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/tfqvfsbZXRIortyCu3nTMA"
venue: 新智元微信公众号
---

# 诺奖得主联手Claude，40轮对话证出12年物理猜想

## 摘要

2021年诺贝尔物理学奖得主 [[giorgio-parisi|Giorgio Parisi]] 与合作者 Francesco Zamponi 利用 [[anthropic|Anthropic]] 的 Claude（Opus 4.7），经过40轮对话，成功完成了阻塞转变理论中悬置12年的 [[a+b=1-猜想]] 的解析证明。论文已挂上 arXiv（2606.03300），完整对话记录公开于 Zenodo。

## 核心内容

### 问题背景
- 2014年，Parisi、Zamponi 等人在 CKPUZ 系列论文中发现临界指数之间存在精确关系 a+b=1
- 数值验证已精确到极高精度，但12年来无人能给出解析证明
- 该等式连接了 full-RSB 解中的"相空间边缘稳定性"与堆积体系中的"力学边缘稳定性"

### 协作过程
1. **前期（打杂阶段）：** Claude 编写 C++ 代码，用 [[打靶法]] 求解非线性微分方程，从双精度推进到四精度
2. **转折点：** Parisi 明确要求 Claude 给出解析证明，Claude 角色从程序员变为证明主攻
3. **证明核心：** Claude 构造辅助函数 ξ=fg，经代数消去得出关键恒等式，推出 a=(1-c)/2
4. **人类纠错：** Zamponi 指出 Claude 极值原理论证中的符号错误；Parisi 重新定义问题方向
5. **最终收尾：** Claude 沿 Parisi 指出的路线，将问题转化为反应扩散方程，补完证明

### 关键引用
- 论文明确指出证明"基本上是 Claude 自己推出来的"
- Claude 自述证明策略为"逆向推理"——从目标结论反推构造辅助函数
- Stability AI 创始人 Emad Mostaque 转发评论

## 意义

本案例标志着 AI 从科研辅助工具升级为科学证明参与者的里程碑，同时展示了健康的 [[人机协作证明]] 模式：AI 负责推导演算，人类负责设问、挑错、拍板。完整对话公开于 Zenodo，开创了 [[完全透明化科研记录]] 的新范式。