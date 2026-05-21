---
title: "AI助手现在认路了：谷歌地图直接「长」进大脑"
date: 2026-03-19
source: "新智元"
url: "https://mp.weixin.qq.com/s/p_2Nkmgfu6tHdB71os_ePA"
rss_id: "2652684929_2"
---
新智元报道
编辑：亚当
【新智元导读】
谷歌DeepMind刚刚为Gemini API放了一个大招：内置工具和自定义函数终于可以在同一次调用里混着用了。再加上跨工具的「上下文环流」和Google Maps原生接入，Agent开发的编排噩梦正在终结。如果你做过AI Agent开发，一定经历过这种痛苦——模型要先调Google搜索拿外部数据，再调你的后端API查库存，中间还得你自己手动把上一步的结果喂给下一步。整个流程像在拼乐高，但每块乐高的接口都不一样。
谷歌刚刚把墙拆了。
Gemini API最新更新带来三个核心变化，每一个都直击Agent开发的痛点。
内置工具+自定义函数
一次请求全搞定
以前的做法是：你要么用Google搜索这种内置工具，要么调自己写的函数，两者不能混用。
开发者必须像交通警察一样手动编排——先让模型搜一下，拿到结果，再发第二个请求调你的后端。
现在，你可以在同一个请求里同时塞进Google搜索、Google地图和你的自定义代码。
Gemini 3会自己判断先调哪个、后调哪个，中间怎么衔接。
举个真实场景：你让AI「搜一下今天最火的降噪耳机，然后查查我们仓库有没有货」。
以前这需要两轮请求+手动拼接，现在一个请求搞定——Gemini先上网搜热门型号，转头就自动调你的库存API逐个查询。延迟砍半，代码量砍更多。
这是开发者喊了很久的功能。
谷歌自己也说：「这是自从我们推出内置工具以来，开发者呼声最高的需求。」
上下文环流
AI终于有了「长记性」的工具链
多步骤工作流最怕的就是「转头就忘」——第一步拿到的数据，第二步要用的时候模型已经丢了上下文。
新推出的「上下文环流」（Context Circulation）技术解决了这个问题。它的原理是：每一次工具调用和返回结果，都会自动保留在模型的上下文窗口里。 后续步骤可以直接引用前面任何一步的数据。
比如：Gemini用内置工具查了实时天气（30°C，晴），然后把这个结果无缝传给你的自定义工具去预订户外场地——它知道该选露天的。整个过程不需要你在中间插一脚做数据转发。
配合新增的工具调用ID（Tool Response ID），每一次工具调用都有唯一标识符。
这在并行调用场景下尤其关键——当模型同时发起三个函数调用时，你能精准地把每个返回值对应到正确的调用上，Debug效率直接起飞。
Google Maps原生「入脑」Gemini 3
地理空间感知对现代Agent来说是刚需——订餐、导航、找店、规划路线，全都离不开位置信息。
这次更新把Google Maps正式接入了Gemini 3全系模型。
你的AI助手现在能实时感知「柏林亚历山大广场附近哪家咖啡馆正在营业」，能查通勤时间，能获取商家详情。
几行代码开启：
from google import genai
client = genai.Client()
interaction = client.interactions.create(
model=
"gemini-3-flash-preview"
,
input=(
"Find three highly-rated coffee shops open right now "
"within walking distance of Alexanderplatz in Berlin."
),
tools=[{
"type"
:
"google_maps"
}],
)
真正的变化
从「编排噩梦」到「声明式Agent」
把这三个更新放在一起看，谷歌真正在做的事情是：让开发者从「手动编排工具调用顺序」转向「声明式地告诉模型有哪些工具可用」。
剩下的事——什么时候调哪个工具、怎么传递上下文、如何处理并行——Gemini自己搞定。
这跟黄仁勋在GTC上说的「Agent时代」方向完全一致：AI不再只是回答问题，而是自主调用工具、串联流程、完成复杂任务。
区别在于，英伟达从硬件端做Agent基础设施（NemoClaw），谷歌从API端做Agent开发基础设施。
谷歌推出了新的Interactions API，面向更复杂的Agent场景，主打服务端状态管理、复杂上下文与长任务处理；
但由于其目前仍处于Public Beta，官方同时说明，标准生产工作负载仍以GenerateContent作为主要路径。
对于开发者来说，信号很明确：Agent开发的基础设施正在从「手工作坊」走向「工业化」。
工具混用、上下文环流、地理空间接入——这些听起来像小功能，但拼在一起，就是Agent从Demo走向Production的基础设施。
参考资料：
https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tooling-updates/
https://ai.google.dev/gemini-api/docs/tool-combination
https://ai.google.dev/gemini-api/docs/maps-grounding
https://x.com/OfficialLoganK/status/2034309347040195071
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！