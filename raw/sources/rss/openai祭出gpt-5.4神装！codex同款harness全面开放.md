---
title: "OpenAI祭出GPT-5.4神装！Codex同款Harness全面开放"
date: 2026-04-16
source: "新智元"
url: "https://mp.weixin.qq.com/s/XQDog33bGqawh_yrS0GEtA"
rss_id: "2652692712_1"
---
新智元报道
编辑：好困
【新智元导读】
GPT-5.4真正的杀招终于落地！OpenAI连夜重写基建、原生收编七大沙盒，彻底封死第三方框架的活路。旧时代的聊天玩具已被抛弃，工业级Agent全面觉醒。
OpenAI不声不响，又下了一手狠棋。
就在刚刚，
Agents SDK迎来一次彻底的架构重写
。
原生harness、原生沙盒、Codex级的文件系统工具，外加七家头部沙盒厂商一键接入。
3月初，GPT-5.4带着原生computer use（计算机使用）高调登场时，开发者就已经吐槽过一件事。
模型能操作电脑了，可Agent跑在哪台电脑上、怎么保证跑起来不出事，还是得自己东拼西凑一套框架。
今晚这个缺口被OpenAI自己补上了。
一句话版本，OpenAI这次把Agents SDK从「聊天机器人的玩具」改造成了
「生产级Agent的底座」
。
harness
负责控制流、模型调用、工具路由、暂停恢复；
沙盒
负责读写文件、装依赖、跑代码，两层彻底解耦。
更狠的是，这一刀同时砍在了LangChain、CrewAI、LangGraph这些第三方Agent框架身上。
OpenAI下场把基建层做了，留给第三方的空间，肉眼可见地在收窄。
从「聊天机器人的玩具」到生产级底座
讲这次升级之前，先得搞清楚原来的Agents SDK长啥样。
2025年3月，OpenAI第一次推出Agents SDK，主打轻量、少抽象、几行Python就能跑起来的卖点。
但这一版SDK，本质上是为聊天机器人场景做的。
一年多过去，模型在能力上的提升可谓是翻天覆地——一口气能跑几个小时、几天，甚至几周。
原来那套为聊天机器人设计的SDK，自然也就跟不上时代了。
这次的重写，主要做了两件事。
第一件，给模型配一个完整的运行框架——harness。
配置化记忆、感知沙盒的编排、类似Codex的文件系统工具、通过MCP调工具、通过skills渐进式披露信息、通过AGENTS.md自定义指令、用shell工具执行代码、用apply patch工具编辑文件，全部打包进SDK原生支持。
熟悉Claude Code和Codex的开发者看到这套清单会很眼熟。
没错，OpenAI这次是把自家Codex过去一年踩过的坑、积累的最佳实践，顺手产品化塞进了SDK。
第二件，把harness和compute彻底分离。
harness跑在你的可信基建里，管模型调用、审批、追踪、运行状态。compute是一个独立的沙盒，专门负责读写文件、跑命令、装包、吐产物。
两层之间的接口标准化，API key和敏感凭证压根儿不会进入模型生成代码实际执行的那个环境。
结果就是，沙盒里既没有API密钥，也没有任何敏感凭证。沙盒本身完全隔离，甚至可以和网络断开，没有任何对外流量。
这不是安全性能的小修小补。这是整个Agent架构的范式转移。
900页保险单100%提取
一半PR出自Agent
harness/compute分离的第一个结果，是沙盒供应商的生态图一夜铺开。
这次发布，Blaxel、Cloudflare、Daytona、E2B、Modal、Runloop、Vercel七家沙盒厂商同时被写进官方支持列表。
七家能同时接入，关键在OpenAI给了一个叫Manifest的抽象层——一份描述Agent工作区的配置清单。
要挂载哪些本地文件、从哪个云存储拉数据、产物写到哪里，全写在这份Manifest里。AWS S3、Google Cloud Storage、Azure Blob Storage、Cloudflare R2全覆盖。
最关键的是这份Manifest和具体沙盒供应商解耦。
今天用E2B写的Agent，明天想换成Modal跑，不用重写代码，改一行配置。哪家沙盒便宜、哪家离数据近，就切到哪家。
官方给了一个最小示例。让一个Agent跑进本地沙盒，挂上一个财报目录，对比FY2025和FY2024的三项财务指标，核心代码不到20行。
# pip install "openai-agents>=0.14.0"
import
asyncio
import
tempfile
from
pathlib
import
Path
from
agents
import
Runner
from
agents.run
import
RunConfig
from
agents.sandbox
import
Manifest, SandboxAgent, SandboxRunConfig
from
agents.sandbox.entries
import
LocalDir
from
agents.sandbox.sandboxes
import
UnixLocalSandboxClient
async
def
main
() ->
None
:
with
tempfile.TemporaryDirectory()
as
tmp:
dataroom = Path(tmp) /
"dataroom"
dataroom.mkdir()
(dataroom /
"metrics.md"
).write_text(
"""# Annual metrics
| Year | Revenue | Operating income | Operating cash flow |
| --- | ---: | ---: | ---: |
| FY2025 | $124.3M | $18.6M | $24.1M |
| FY2024 | $98.7M | $12.4M | $17.9M |
""",
encoding=
"utf-8"
,
)
agent = SandboxAgent(
name=
"Dataroom Analyst"
,
model=
"gpt-5.4"
,
instructions=
"Answer using only files in data/. Cite source filenames."
,
default_manifest=Manifest(entries={
"data"
: LocalDir(src=dataroom)}),
)
result =
await
Runner.run(
agent,
"Compare FY2025 revenue, operating income, and operating cash flow with FY2024."
,
run_config=RunConfig(
sandbox=SandboxRunConfig(client=UnixLocalSandboxClient()),
),
)
print
(result.final_output)
if
__name__ ==
"__main__"
:
asyncio.run(main())
另外两个对长跑任务格外关键的新能力是，让沙盒容器挂了也能从检查点续命的
快照和状态恢复
；以及解决扩展性问题的
多沙盒并行+子Agent隔离环境。
由此，Agent第一次
有了「掉线续命」和「分身作战」的原生能力。
在一篇技术长文中，Modal技术团队成员Erik Dunteman顺手透露了一个细节——
Ramp已经用Modal跑了一支后台编码Agent大军，公司超过一半的PR都是这些Agent自己创建的。
不仅如此，Stripe也在今年早些时候披露，内部的AI Agent每周产出超过1000个PR。
两家公司的共同点是，在拿到成熟Agent基建之后，业务团队的生产力出现了断层式跃迁。
如今，OpenAI把这些曾经只有头部公司才能攒出来的基建，变成了SDK里开箱即用的默认配置。
https://modal.com/blog/building-with-modal-and-the-openai-agent-sdk
对此，FurtherAI CTO Sashank Gondala披露，他们的Agent啃下了一份900多页的保险理赔记录，提取成功率100%。
900多页、100%、保险理赔记录，这三个词凑在一起的含金量老保险从业者一看就懂，业内最难啃的文档之一，以前跑到某一页崩掉是常态。
Tomoro AI研发工程师Douglas Adams给出了另一组硬数字，相同能力的Agent，这次需要的代码量比以前少了6倍。
Box开发者关系负责人Carter Rabasa，则传了一份业务数据并配上bash/python作为工具，让agent在沙盒里跑了一整套发票对账业务流程。
没想到，第一轮试水就跑通了。
沙盒对跑agent生成的代码来说非常完美。
OpenAI下场做基建
LangChain们无处躲
到这一层，这次发布对行业的冲击才真正显露。
LangChain、LangGraph、CrewAI、AutoGen这些第三方Agent框架，过去一年靠什么活着？答案是靠补齐OpenAI原生SDK不够「生产可用」的那块空白。
编排、记忆管理、护栏、追踪、多Agent协作，这些都是第三方框架的主战场。
现在，OpenAI一次性把这些主战场全接管了。
他们要做的就是Agent世界的基础设施层，第三方框架从此要么往更高层走（编排、垂直场景），要么往更低层走（专用沙盒、专用工具），夹在中间的那块地板，已经被OpenAI自己踩实了。
而且，OpenAI口中的「兼容所有沙盒服务商」，本身就是在把沙盒供应商纳入OpenAI的生态位。
今天可能还是OpenAI的合作伙伴，明天的身份很可能就只是OpenAI生态下的「组件供应商」了。
Python先行，TypeScript还在排队
虽然这一切目前还不完美。
harness和sandbox的新能力首发只上了Python，TypeScript版本排在后续更新计划里；SDK至今仍然停留在0.Y.Z版本号。
但方向已经非常清晰了。
GPT-5.4带着原生computer use登台，Agents SDK给它配齐了真正的运行环境。
下一步缺的，只是更多开发者把业务逻辑搭在这个基建之上。
从此，做Agent框架的创业公司会重新审视自己的定位。做沙盒的供应商开始算OpenAI流量能不能接得住。做业务层Agent应用的团队盘算要不要迁移。
GPT-5.4出厂那天被一些人说成是「没有惊喜的例行升级」。
40天后回头看，真正的惊喜今天才发。
参考资料：
https://techcrunch.com/2026/04/15/openai-updates-its-agents-sdk-to-help-enterprises-build-safer-more-capable-agents/
https://modal.com/blog/building-with-modal-and-the-openai-agent-sdk
https://openai.com/index/the-next-evolution-of-the-agents-sdk/
https://x.com/OpenAIDevs/status/2044466699785920937
https://x.com/snsf/status/2044514160034324793
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！