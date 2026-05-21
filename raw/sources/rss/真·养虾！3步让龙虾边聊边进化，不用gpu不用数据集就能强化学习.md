---
title: "真·养虾！3步让龙虾边聊边进化，不用GPU不用数据集就能强化学习"
date: 2026-03-12
source: "量子位"
url: "https://mp.weixin.qq.com/s/nEnX5ok5ewoVwoL9kL1w7A"
rss_id: "2247873802_2"
---
闻乐 发自 凹非寺
量子位 | 公众号 QbitAI
让OpenClaw帮干活还不够，现在，程序员们正想方设法让
自己变强
。
注意注意！还不是某个任务上的单点提升，这次有人直接给整个智能体套一层在线强化学习系统
MetaClaw
——
不用自己维护GPU集群、不用数据集也无需人工微调，让AI跟你聊着聊着就能自己变聪明。
这种新的学习模式就是
把用户和AI的日常对话直接变成训练数据
，整个学习循环全在后台完成，也不耽误正常使用。
咱平时跟AI该聊啥聊啥，MetaClaw会默默拦截OpenClaw的交互过程，给每一轮对话打分，再通过在线微调优化AI的决策策略。
而且它还吃一堑长一智，要是AI哪句话翻车了，MetaClaw会自动扒完整的交互轨迹，分析问题出在哪，然后
自动生成一个新技能
存进技能库。
下次再遇到类似的坑，相关技能会被精准搜索出来注入系统提示，同款错误直接拜拜。
技能注入+技能进化
模型底座基于Kimi-2.5构建，同时也准备了Qwen3-4B这个轻量级替代方案，低配设备也能跑。
核心机制是自研的
SkillRL技能增强强化学习框架
，说白了就是
技能注入+技能进化
的组合拳。
技能注入
每轮对话里精准匹配相关技能指令，不用等训练结束，AI当场就能优化表现；
技能进化
让AI从被动接收指令变成主动生成技能，技能库越用越丰富，能力水涨船高。
而最吸引人的，是
不依赖本地GPU集群，不用自己维护
这个设定。
MetaClaw把所有训练任务全甩给了
Tinker云平台
，训练和部署彻底分家。
只要你的设备能连上网，就能跑通整个系统，不用操心算力，也不用专门的工程团队盯着维护。
这波直接把AI持续学习的门槛干到了地板级，普通人也能养出会进化的
了。
除此之外，MetaClaw的细节设计也很懂开发者的痛点。
异步架构+双学习模式
，把服务、奖励建模和训练彻底解耦，AI一边给用户实时响应，后台一边做打分和优化，“工作学习”两不耽误。
学习模式也给足了选择，想轻量化就用强化学习，从用户隐式反馈里优化；想深度提升就用在线策略蒸馏，结合高质量文本反馈进阶。
主打一个你想怎么训就怎么训。
三步上手
用起来还贼简单，就3步。
第一步先安装依赖
，前面的是常规服务和大模型相关库，跑API、发请求、接大模型都用得上。
后面的tinker和tinker-cookbook是关键，这是云端LoRA训练的SDK。
- pip install fastapi uvicorn httpx openai transformers
- pip install tinker tinker-cookbook
第二步运行配置脚本
将OpenClaw网关指向MetaClaw的代理，比较推荐的是Kimi2.5.
- bash openclaw_model_kimi.sh
第三步是设置Tinker API密钥
，直接跑训练脚本。
- export TINKER_API_KEY=”xxx”
- cd /path/to/metaclaw
- python examples/run_conversation_rl.py
搞定，之后你只需要像平常一样和Agent聊天，MetaClaw会自动收集对话轮次、评分、训练模型。
每攒够一批样本就热替换一次权重，全程无需人工干预。
如果想启用技能注入，只需在配置中设置：
- config = MetaClawConfig(use_skills=True)
想开始技能进化，可以设置（以GPT5.2为例）：
- config = MetaClawConfig(
use_skills=True,
enable_skill_evolution=True,
azure_openai_deployment=”gpt-5.2”,
)
然后配好密钥：
- export AZURE_OPENAI_API_KEY=”xxx”
- export AZURE_OPENAI_ENDPOINT=”https://your-endpoint.openai.azure.com/“
所有配置项都集中在MetaClawConfig中，包括模型选择、LoRA参数、批次大小、训练步数、损失函数类型等，一目了然。
好好好，这下变成真·养虾了（doge）。
MetaClaw这项工作由
姚骅修
领导，他是电子科技大学校友，现任UNC计算机科学系的助理教授，曾在Stanford AI Lab做博士后，专注于Agent和具身AI。
项目地址：https://github.com/aiming-lab/MetaClaw
参考链接：
[1]https://x.com/BoWang87/status/2031094971630235941
[2]https://x.com/HuaxiuYaoML/status/2031069599651729905
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
🦞
今天，你养虾了吗？
欢迎加入【龙虾养成讨论组】，一起交流养虾经验！扫码添加小助手加入社群，记得备注【OPENCLAW】哦～
一键关注 👇 点亮星标
科技前沿进展每日见