---
title: "ICLR 2026 | 中国联通提出扩散模型缓存框架MeanCache，刷新多模态生成模型推理加速新基准"
date: 2026-04-01
source: "机器之心"
url: "https://mp.weixin.qq.com/s/BV5Pti96ZqwKfCncbQ4_Eg"
rss_id: "2651024976_3"
---
作者和团队介绍：本文第一作者是高焕霖，通讯作者为赵放和廉士国，所有作者均来自联通数据智能有限公司（中国联通数据科学与人工智能研究院）- 元景大模型研发团队和南京大学，专注于联通元景大模型研发。
FLUX 、Qwen-Image 等多模态生成模型的推理速度一直是工业级多模态模型落地的痛点。传统的特征缓存（Feature Caching）方案在追求高倍率加速时，常因瞬时速度的剧烈波动导致轨迹漂移。
针对这一痛点，中国联通数据科学与人工智能研究院与南京大学研究团队，在此前工作 LeMiCa（NeurIPS 2025 Spotlight）的基础上继续深耕，推出了进阶加速框架
MeanCache
。
该工作不仅承袭了团队在扩散模型加速领域的深厚积淀，更在技术上实现了跨越：受到 MeanFlow 启发，MeanCache 首次将 “平均速度” 视角引入缓存推理，通过 JVP 修正精准校正了生成轨迹，实现了
4x
以上的推理提速。该成果已入选人工智能顶会
ICLR 2026
，目前，论文、代码均已开源。
论文标题：MeanCache: From Instantaneous to Average Velocity for Accelerating Flow Matching Inference
论文链接：https://arxiv.org/pdf/2601.19961
项目主页：https://unicomai.github.io/MeanCache/
代码地址：https://github.com/UnicomAI/MeanCache
技术创新：平均速度驱动的缓存新范式
MeanCache 的核心贡献在于将缓存加速从 “瞬时速度” 转向了 “平均速度”，主要包含以下两个核心技术点：
JVP 驱动的平均速度
为了在不增加推理开销的前提下获取平均速度，MeanCache 引入了
雅可比 - 向量积（JVP）
作为计算桥梁。基于推导出的起点锚定恒等式，MeanCache 利用前一时间步已缓存的 JVP 信息来修正当前的瞬时速度
:
该建模方式将缓存视角从单一的 “点” 扩展到了 “区间”，通过提供更稳定的引导信号，有效地校正了高倍率加速下的轨迹偏离。
轨迹稳定调度策略
“什么时候该缓存？” 以往的方法多依赖固定步长或手动阈值。MeanCache 将推理过程建模为一个
多重图（Multigraph）
寻优问题。
它将每个时间步视为节点，将预测均值速度与真实值之间的
稳定性偏差
定义为边权：
节点和边组成多重图，然后再通过
峰值抑制最短路径（Peak-Suppressed Shortest Path）
算法，在给定的计算预算下，计算规则下最优的缓存策略：
实验结果：刷新 SOTA 加速表现
文生图
在商业级文生图模型 Qwen-Image 和 FLUX.1 [dev] 分别实现最高 4x 加速，在 Image Reward 和感知指标上取得了 SOTA 的表现。
从视觉效果上看，随着加速比的增大，MeanCache 生成的图片在内容一致性方面表现更好。
文生视频
在视频生成模型 HunyuanVideo 上也实现了 3.6x 加速和 SOTA 的指标提升。
在对视频的定性分析上，MeanCache 也表现出更好的加速效果，不论是画质还是内容一致性方面。
语义一致性
：更进一步，针对 rare-word（如下图 "Peristeronic"）的高难度生僻 Prompt 的测试下，MeanCache 展现了更强的语义鲁棒性。
业界顶级团队推荐
同时，MeanCache 已支持最新的阿里通义 Z-Image 和 Qwen-Image-2512 文生图模型，并获得了 Z-Image 团队的官方主页推荐，社区已支持
ComfyUI
。
总结与展望
MeanCache 作为一种轻量化、免训练的 Flow Matching 加速框架，创新性地提出了 “平均速度缓存” 与 “轨迹稳定性调度” 方案。该方案在确保图像高保真度与内容一致性的基础上，显著提升了大模型的推理效率。 联通元景大模型团队将以此为基石，持续深耕模型推理加速及复杂场景生成领域。我们致力于为业界贡献更多元化的技术视角，进一步降低工业级生成模型的使用门槛与算力成本。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com