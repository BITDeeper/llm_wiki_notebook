---
type: entity
title: OpenAI Robotics
created: 2026-06-01
updated: 2026-06-01
tags: [openai, 机器人, 具身智能, 组织, 硬件, 团队]
related: [openai, dactyl, sim2real, 具身智能数据困境, aditya-ramesh, sora, worldsim, sam-altman, figure-ai, 1x-technologies, anthropic, figure]
sources: ["openai重返机器人赛道！四大核心岗位开招.md", "何泰然在线摇人！底薪数百万元、sora之父带队、openai全栈造「人」.md", "解散6年后，openai复活机器人团队！奥特曼目标：人手1台.md"]
origin_date: 2026-05-01
---
# OpenAI Robotics

OpenAI 于 2026 年正式组建的机器人部门，由 [[aditya-ramesh|Aditya Ramesh]]（OpenAI 研究副总裁，[[sora]] 之父）带队，其 [[worldsim|Worldsim]]（世界模拟）研究项目于 2026 年 5 月正式转型而来。该部门的成立标志着 OpenAI 从纯软件/AI 模型提供商向全栈硬件公司的战略转型——不再满足于向 [[figure-ai]]、[[1x-technologies]] 等投资组合公司提供模型 API 的"大脑供应商"角色，而是亲自下场造机器人，将 AI 灵魂与硬件肉体都握在自己手中。

## 愿景与目标

**终极目标：** 让每个人都拥有一台属于自己的通用个人机器人（Personal Robot），帮你做任何你需要的事。——[[sam-altman|奥特曼]]

**短期目标：** 先造一批机器人，开发协助技术工人建设未来基础设施的工业机器人。

**战略背景：** 在 coding 场景被 [[anthropic]] 领先后，机器人赛道成为 OpenAI 寻找新增长极的关键方向；此前投资的 [[figure-ai]]、[[1x-technologies]] 等公司的关系可能面临调整。

## 历史脉络

OpenAI 在机器人领域有深厚历史积累：

- **2016 年**：推出 OpenAI Gym，奠定机器人研究基础
- **2017–2019 年**：推进 [[dactyl|Dactyl]] 机械手项目，使用 Shadow Hand 硬件 + 强化学习 + 自动域随机化，实现积木翻转和单手解魔方，几乎定义了 [[sim2real|仿真到现实迁移]] 技术路线
- **2020 年前后**：因训练数据稀缺、迭代速度慢，关停机器人团队，全力转型语言模型
- **2025 年 2 月**：与 [[figure|Figure]] 合作破裂，加速亲自下场造机器人的决策
- **2025 年底**：[[sam-altman|奥特曼]]曾考虑拆分机器人和消费硬件部门（《华尔街日报》报道），最终选择保留
- **2026 年 5 月**：[[worldsim]]（世界模拟器）研究项目正式转型为 OpenAI Robotics
- **2026 年 6 月**：四大核心岗位公开招聘，全链路硬件自研意图明确

## 团队与领导

由 [[aditya-ramesh]]（OpenAI 研究副总裁）领导。Ramesh 此前领导 [[worldsim]]（世界模拟器）研究项目，该项目在过去一年中逐步演化为 OpenAI Robotics。团队成员包括 [[何泰然]] 等活跃在社交媒体的一线研究员与工程师。

### 三条核心研发主线

1. **机器人学习与灵巧操作**：林星宇（GELLO、HumanoidBench）、何泰然（Omni H2O）、Lawrence Yunliang Chen
2. **仿真、评测基准与数据集**：李成书（家庭场景人形机器人评测基准）、殷航（BEHAVIOR 仿真项目）
3. **世界模拟→机器人迁移**：张鹏川（World Simulation + Robotics）、赵家樑（真实物理世界通用智能体）

## 技术路线

OpenAI Robotics 走"先造大脑、再造身体"的独特路线，核心差异化在于**软硬件协同设计**：

1. **世界模拟优先：** 依托 [[sora]]/[[worldsim]] 项目，提供高保真物理仿真环境，让 AI 先在内部构建可运行的物理世界模型，作为机器人的虚拟训练沙盒
2. **仿真真实性：** 专门设置"仿真逼真度工程师"（Simulation Realism Engineer）岗位，缩小仿真与现实差距
3. **[[sim2real|仿真到现实迁移]]：** 将虚拟环境中训练的能力迁移到真实机器人
4. **仿真造数据：** 用世界模型在仿真中生成物理世界训练数据，突破机器人数据稀缺瓶颈
5. **闭环迭代：** 机器人硬件与机器学习研究联合迭代，真实世界数据回灌模型和仿真系统，压缩工程周期

## 招聘方向

OpenAI 官网开放了十几个机器人相关职位，全部位于旧金山总部，覆盖全栈方向：

- **执行器设计工程师**（Actuator Design Engineer）— 自研关键硬件
- **3D 打印实验室技术员** — 搭建快速硬件迭代能力
- **仿真逼真度工程师**（Simulation Realism Engineer）— 让虚拟世界逼近真实物理
- **分布式数据系统软件工程师** — 海量数据、超算集群、持续训练

薪酬极具竞争力，纯现金底薪区间为 29.3 万至 44.5 万美元/年，叠加 OpenAI 标志性的 [[ppu|PPU]]（利润参与单位）激励。团队计划自研传感器、算力和 AI 模型，测试不同形态的机器人本体，目标最终走向"全面量产"。

## 竞争格局

竞争对手均已抢跑：[[google-deepmind]] 始终发力机器人基础模型；特斯拉 Optimus 量产在即；[[figure-ai]] 获近 17 亿美元融资并完成超长时间连续运转测试。

与 [[figure|Figure]]、Tesla Optimus 等"先造身体再填智能"的路线不同，OpenAI 先让 AI 理解物理世界，再把能力灌入真实机器人。目前尚无任何机器人产品发布。