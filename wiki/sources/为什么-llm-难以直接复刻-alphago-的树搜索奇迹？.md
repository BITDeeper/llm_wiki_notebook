---
type: source
title: "为什么 LLM 难以直接复刻 AlphaGo 的树搜索奇迹？"
created: 2026-05-23
updated: 2026-05-23
tags: [强化学习, 树搜索, LLM, AlphaGo, 信用分配, 梯度方差]
related: [eric-jang, alphago, mcts-蒙特卡洛树搜索, 信用分配难题, 算力置换推理搜索, scaling-law]
sources: ["为什么-llm-难以直接复刻-alphago-树搜索奇迹？.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/Yj4YqkJiMlQ8lmY7P1PGEQ"
venue: 机器之心PRO会员通讯
---
# 为什么 LLM 难以直接复刻 AlphaGo 的树搜索奇迹？

本文为机器之心PRO会员通讯内容，基于对前 1X Technologies AI 副总裁、前 Google DeepMind 机器人研究科学家 [[eric-jang|Eric Jang]] 接受 Dwarkesh Patel 访谈的深度解读。

## 核心论点

1. **AlphaGo 的成功本质是摊销搜索**：用约 10 层神经网络将 MCTS 的搜索能力压缩为一次快速前向传播，而非暴力算力破解。
2. **LLM 的 RL 面临根本性数学障碍**：策略梯度在长序列中方差随 T² 增长，[[信用分配难题|信用分配]]极其困难，迫使 LLM 采用 T=1 设定（整段序列视为单一动作），但仍需海量样本才能有效训练。
3. **MCTS 无法直接套用于 LLM**：围棋与语言生成在搜索空间规模、开放性、中间态价值评估可靠性上存在根本差异（详细论证在付费部分）。
4. **LLM 的出路是算力置换**：放弃显式树搜索，通过算力投入将复杂推理能力打包内化进前向传播。

## 关键技术细节

- AlphaGo 通过价值网络剪枝搜索深度、策略网络剪枝搜索广度，将复杂搜索空间摊销为神经网络的一次前向传播。
- LLM 策略梯度强化学习中，梯度方差随时间步长 T 呈二次方增长，各 Token 间的交叉相乘产生复杂交互效应。
- MCTS、NFSP、Q-learning 等方法通过"重新标记"机制绕开信用分配难题，将策略提升转化为强监督学习。

## 局限性

本文为付费内容节选，LLM 无法直接套用 MCTS 的具体原因及"算力置换"的详细机制均被截断，需获取全文后补充。