---
type: event
title: "Parisi-Claude 阻塞转变 a+b=1 猜想证明"
created: 2026-06-07
updated: 2026-06-07
tags: [ai-for-science, 物理学, 人机协作, 里程碑]
related: [giorgio-parisi, a+b=1-猜想, anthropic, 人机协作证明, aletheia, 全复本对称破缺]
sources: ["诺奖得主联手claude，40轮对话证出12年物理猜想.md"]
origin_date: 2026-06-01
time_span:
  start: 2026-05-01
  end: 2026-06-01
participants: [giorgio-parisi, anthropic]
causes: [a+b=1-猜想]
effects: [人机协作证明, 完全透明化科研记录]
significance: high
---

# Parisi-Claude 阻塞转变 a+b=1 猜想证明

2026年6月初，2021年诺贝尔物理学奖得主 [[giorgio-parisi|Giorgio Parisi]] 与合作者 Francesco Zamponi 利用 [[anthropic|Claude]]（Opus 4.7），经过40轮对话，成功完成了阻塞转变理论中悬置12年的 [[a+b=1-猜想]] 的解析证明。论文挂上 arXiv（2606.03300），完整对话记录公开于 Zenodo。

## 时间线

- **2014年：** Parisi、Zamponi 等人在 CKPUZ 系列论文中发现 a+b=1 关系，但无法给出解析证明
- **2014–2026年：** 该等式成为理论物理中的悬案，数值验证精确但解析证明缺失
- **2026年5–6月：** Parisi 利用 Claude Opus 4.7 进行40轮对话，完成证明
- **2026年6月初：** 论文挂上 arXiv（2606.03300）
- **2026年6月7日：** 新智元发布报道

## 协作分工

### 阶段一：数值求解（Claude 打杂）
- Parisi 让 Claude 编写 C++ 代码，用 [[打靶法]] 求解非线性微分方程
- Claude 从双精度推进到四精度，将数值结果逼到小数点后十几位
- 中途 Parisi 把方程写错，Claude 正确指出方程无解

### 阶段二：解析证明（Claude 主攻）
- Parisi 明确要求 Claude 给出 a+b=1 的解析证明
- Claude 构造辅助函数 ξ=fg，经代数消去得出关键恒等式
- Claude 自述策略为"逆向推理"——从目标结论反推构造辅助函数

### 阶段三：人类纠错与破局
- Zamponi 指出 Claude 极值原理论证中的符号错误，Claude 当场认错
- Parisi 指出 Claude 试图证明函数恒非负的思路从一开始就问偏了
- Parisi 提出破局思路：回到上游原始方程，定义随尺度演化的函数

### 阶段四：最终收尾
- Claude 沿 Parisi 指出的路线，将问题转化为反应扩散方程
- 用成熟的极值原理补完证明

## 核心意义

1. **AI 能力里程碑：** Claude 从科研辅助工具升级为科学证明的参与者，展示了大模型在复杂数学结构推导中的能力
2. **人机分工范式：** 确立了"AI 推导演算 / 人类设问拍板"的 [[人机协作证明]] 模式
3. **透明化先例：** 完整对话公开于 Zenodo，开创了 [[完全透明化科研记录]] 的新做法
4. **与 Aletheia 对比：** Google DeepMind 的 [[aletheia]] 是自动化系统，而本案例展示的是深度人机协作——两种 AI 参与科学的路径

## 开放问题

- 该证明是否已通过物理学界的同行评审？
- Claude 的逆向推理策略是否可泛化到其他未解猜想？
- 这种人机协作模式是否可被系统化、流程化？