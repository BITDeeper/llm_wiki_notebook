---
title: "Mistral再开源！发布代码模型Devstral 2及原生CLI，但大公司被限制商用"
date: 2025-12-10
source: "机器之心"
url: "https://mp.weixin.qq.com/s/jEmpNsaLZDjxvBTt8kfTUg"
rss_id: "2651006263_2"
---
机器之心报道
编辑：Panda
刚刚，「欧洲的 DeepSeek」Mistral AI 再次开源，发布了其下一代代码模型系列：
Devstral 2
。
该系列开源模型包含两个尺寸：Devstral 2 (123B) 和 Devstral Small 2 (24B)。用户目前也可通过官方的 API 免费使用它们。
此外，Mistral AI 还发布了自家的原生 CLI：
Mistral Vibe
。
Mistral AI 的进击速度令人咋舌。仅仅一周前，
他们才发布 Mistral 3 系列模型
，被视为欧洲正式以此跻身 AI 前沿竞争的序幕。仅仅过了 7 天，Devstral 2 系列与 Mistral Vibe 便紧随其后问世，这种高频的发布节奏，似乎正在印证人们对欧洲 AI 崛起的判断。
考虑到 Mistral 近期在欧洲的大幅扩张，以及图灵奖得主 Yann LeCun 回到欧洲创业的消息，欧洲大陆这片 AI 热土的未来风景，或许值得我们投入更多期待。
亮点汇总
下面是 Mistral 官方总结的核心亮点：
Dev
str
al 2
： 针对代码智能体（Agent）的 SOTA 开放模型，参数量仅为竞争对手的一小部分，并在 SWE-bench Verified 上达到了 72.2% 的高分。在实际任务中，其成本效率比 Claude Sonnet 高出达 7 倍。
Mistral Vibe CLI
： 一款原生、开源的终端智能体，可自主解决软件工程任务。
Devstral Small 2
： 24B 参数模型，可通过 API 使用，也可在消费级硬件上本地部署。
兼容本地（On-prem）部署和自定义微调。
下面来具体看看 Mistral AI 今天新发布的模型和工具。
Devstral：下一代 SOTA 编程模型
模型地址：
https://huggingface.co/collections/mistralai/devstral-2
Devstral 2 是一个 123B 参数的密集 Transformer 模型，支持 256K 上下文窗口。它在 SWE-bench Verified 上取得了 72.2% 的成绩，「确立了其作为最佳开放权重模型之一的地位，同时保持了极高的成本效益。」
体量更轻的 Devstral Small 2 在 SWE-bench Verified 上得分为 68.0%，能与大其五倍的模型比肩，同时还具备在消费级硬件上本地运行的独特优势。
Mistral 官方指出：「Devstral 2（123B）和 Devstral Small 2（24B）分别比 DeepSeek V3.2 小 5 倍和 28 倍，比 Kimi K2 小 8 倍和 41 倍。这证明了紧凑型模型可以匹敌甚至超越更大型竞争对手的性能。」
专为生产级工作流打造
Devstral 2 支持探索代码库并在多个文件中编排变更，同时保持架构级的上下文理解。它能追踪框架依赖关系、检测故障并尝试修正重试 —— 从而解决错误修复和遗留系统现代化等挑战。
此外，该模型支持微调，允许企业针对特定编程语言或大型企业代码库进行深度优化。
Mistral 通过独立标注提供商的人工评估，对比了 Devstral 2 与 DeepSeek V3.2 和 Claude Sonnet 4.5，任务通过 Cline 进行脚手架式编排。
根据发布的结果，Devstral 2 相对于 DeepSeek V3.2 有明显优势，胜率为 42.8%，败率为 28.6%。然而，Claude Sonnet 4.5 仍然更受青睐，表明其与闭源模型之间仍存在差距。
许可证
值得注意的是，Devstral 2 采用的许可证是一种
修改版 MIT 许可证
。
对比标准的 MIT 许可证，可以看到一个重大差异：新增的「收入限制条款」。
标准版 MIT 极度宽松。只要你保留版权声明，你可以将代码用于任何目的，包括商业用途、修改、分发、闭源发布，没有任何收入或公司规模的限制。
Mistral 许可证则在第 2 条中增加了一个巨大的限制条件（毒丸条款）：
You are not authorized to exercise any rights under this license if the global consolidated monthly revenue of your company... exceeds $20 million... for the preceding month.
即
如果你的公司全球合并月收入超过 2000 万美元，你将无权行使本许可证下的任何权利
。也就是说，超过收入门槛的公司必须联系 Mistral AI 购买商业授权，或者使用他们的付费 API 服务。
并且这一限制不仅适用于原模型，还明确延伸到了「derivatives, modifications, or combined works」（衍生品、修改版或结合作品）。这意味着如果你基于这个模型微调了一个新模型，大公司依然不能免费使用你的微调版。
Mistral Vibe CLI
Mistral Vibe CLI 是一款由 Devstral 驱动的开源命令行编码助手。
开源地址：
https://github.com/mistralai/mistral-vibe
它能让用户在终端中使用自然语言，或通过智能体通信协议（Agent Communication Protocol）集成到用户的 IDE 中，来探索、修改和执行整个代码库的变更。它依据 Apache 2.0 许可证发布。
Vibe CLI 提供了一个交互式聊天界面，包含文件操作、代码搜索、版本控制和命令执行等工具。主要功能包括：
项目感知上下文： 自动扫描用户的文件结构和 Git 状态以提供相关上下文。
智能引用： 使用 @ 自动补全引用文件，使用！执行 Shell 命令，并使用斜杠命令进行配置更改。
多文件编排： 理解用户的整个代码库（不仅仅是正被编辑的文件），从而实现架构级推理，这可以将 PR 周期时间缩短一半。
持久化历史、自动补全和可自定义主题。
开发者可以通过编程方式运行 Vibe CLI 以进行脚本编写，切换工具执行的自动批准功能，通过简单的 config.toml 配置本地模型和提供商，并控制工具权限以匹配自己的工作流。
开始使用
Mistral 目前正通过其 API 免费提供 Devstral 2。
免费期结束后，API 定价为：Devstral 2 每百万 token $0.40/$2.00（输入/输出）；Devstral Small 2 为 $0.10/$0.30。
他们还宣布已与智能体工具 Kilo Code 和 Cline 合作，将 Devstral 2 带入用户现有的开发环境中。
Mistral Vibe CLI 也已作为 Zed 的扩展程序提供，因此用户可以直接在 IDE 内部使用它。
Devstral 推荐部署配置
Mistral 表示，Devstral 2 针对数据中心 GPU 进行了优化，部署至少需要 4 个 H100 级别的 GPU。用户今天就可以在 build.nvidia.com 上试用。
Devstral Small 2 专为单 GPU 运行而构建，可在广泛的 NVIDIA 系统上运行，包括 DGX Spark 和 GeForce RTX。NVIDIA NIM 支持即将推出。
Devstral Small 也可以在消费级 GPU 以及无需独立 GPU 的纯 CPU 配置上运行。
为了获得最佳性能，Mistral 官方建议将温度设置为 0.2，并遵循 Mistral Vibe CLI 定义的最佳实践：
https://github.com/mistralai/mistral-vibe/blob/main/vibe/core/system_prompt.py
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com