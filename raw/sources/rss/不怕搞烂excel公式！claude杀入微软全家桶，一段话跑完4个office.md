---
title: "不怕搞烂Excel公式！Claude杀入微软全家桶，一段话跑完4个Office"
date: 2026-05-10
source: "新智元"
url: "https://mp.weixin.qq.com/s/cvHKY_VXx9wI51fz5z7_iQ"
rss_id: "2652699317_2"
---
新智元报道
编辑：元宇
【新智元导读】
Claude正式进驻Excel、PowerPoint、Word，Outlook公测同步开启。从Outlook到Word、Excel、PPT，一段对话跑完，上下文全程不丢。多窗口横跳、反复解释背景，这些知识工作最隐形的损耗，Anthropic要直接干掉它。
想象这样一个场景：一封邮件进来了。
你打开Outlook，让Claude分拣收件箱，它告诉你哪封需要你亲自回、哪封可以帮你起草、哪些是噪音可以忽略。
其中有一封带附件的，发件人要一份项目评审材料。Claude读完邮件正文，已经知道对方要什么。
这时你把附件在Word里打开，这个Word文件已经套好公司模板，Claude可以按现有标题样式、编号规则和格式要求起草memo（工作备忘录）。所有改动都以tracked changes（修订模式）呈现，你逐条确认就好。
memo里有几个数字需要建模支撑。你再切到Excel，让Claude搭模型，多个sheet（工作表）之间的公式关系都被完整保留。
数字跑完，再转进PowerPoint。Claude按你已打开的公司模板生成deck（演示文稿）。
然后再回到Outlook起草评审邀请，Claude会在你有权限查看的范围内检查参会者的日历空档生成会议邀请，并在Outlook的日历新建事件界面里打开，你检查一遍点发送后才会发出。
从收到邮件到发送会议邀请，
Claude
在四个Office应用中无缝切换，全程你没有重复解释过一次「这个项目是什么」。
这样的场景，并不是设想。Claude刚刚上线的功能，已经让它成为了现实。
5月7日，Anthropic官宣：Claude for Excel、PowerPoint、Word已经全面上线，Claude for Outlook进入公测。
覆盖范围是所有付费计划，包括Pro、Max、Team、Enterprise。
这次升级，不是Claude又多了几个Office插件，而是一次身份切换——让Claude从网页聊天框里的问答工具，变成贴着你的文件流转、嵌进整个工作流的智能体。
一封邮件进来，四个Office跑完
大多数人使用AI办公工具的体验是这样的：先把文件内容复制进聊天框，问问题，再把答案复制回文件。
在多个Office应用中切换，每次都要重新解释一遍背景。Claude for Microsoft 365想解决的正是这件事。
https://claude.com/claude-for-microsoft-365
以前你用AI助手改一份Excel模型，再去让它生成PPT，第二步你要重新说一遍「这是一份XXX的财务模型，假设是XXX」。
Claude for Microsoft 365的设计是：你不需要。
官方称，在相关文件都已打开、跨应用功能已开启的情况下，Claude可以把Excel中的最新数据写入PowerPoint图表或Word memo。
Claude可以在当前跨应用会话中保留任务上下文。你从Word切到Excel，再切到PowerPoint，不需要重新解释项目背景。
https://claude.com/blog/collaborate-with-claude-across-excel-powerpoint-word-and-outlook
有一点需要说清楚：Claude只能读写当前已经打开的文件，它没有能力主动去创建、打开或者在文件之间切换。「全自动联动更新」依赖你先把相关文件都摆开。这个限制也让AI管好它该管的事，更不容易越界。
从「生成内容」变成了「维护文件之间的一致性」，两件事的难度和意义都不在一个量级。
Claude是要把Office变成一个能扛下整个交付流程的智能体，而不是一个辅助写作的工具。
深度嵌入Office工作流
生成一段文字，大多数AI工具都能做到。但真正的门槛是：它们能进得去Office的工作流吗？
比如，进得去一个有三十个sheet、引用关系层层嵌套的Excel财务模型？进得去一个有批注线程、修订历史、样式规范的Word文档？进得去一个有主题模板、色板、图表格式的PPT？进得去Outlook的写信窗口……
这次Anthropic的更新，在这方面花了很大力气。
Claude for Excel、PowerPoint、Word、Outlook四个应用的核心能力。Outlook标注Beta，其余三个已正式上线。
Excel里，Claude可以询问任意单元格的内容，更新假设时不会破坏公式，也可以在多个sheet之间建模。
「不破坏公式」这一点，对任何用过Excel的人来说都十分重要。
财务模型里的公式关系往往牵一发动全身，一个AI工具如果动了不该动的单元格，带来的麻烦比没有它更大。
PowerPoint里，Claude生成的图表是原生可编辑元素，不是截图或图片，而是PowerPoint里真正的图表对象。
幻灯片会按你的模板生成，标题样式、色板、占位符都照你的规则来。
Word里，支持修订模式，支持回应评论线程，支持按公司样式修改内容，这意味着Claude的改动进入可审阅流程，不会直接吞掉原文。
这对需要多人审阅、合规审查的文档场景来说，是基本门槛。
Outlook里（Beta版），Claude可以整理收件箱，把邮件按「需要你回复」「可以帮你起草」「噪音」分类。
邮件和会议邀请不会自动发出。Claude只是先帮你把收件人、主题、正文和会议时间填好，打开在Outlook里，最后仍要你自己确认并点击发送。
需要注意的是，Outlook插件目前有一些限制：需要微软云端服务Exchange Online和Microsoft 365订阅，不支持iOS和Android版Outlook，
本地部署Exchange邮件服务器的
用户暂时用不了。
哪些人会先用上它
答案是金融、咨询、法务、项目管理这四大职业场景。
它们有一个共同特点：工作都需要在Excel、Word、PPT、邮件应用窗口之间反复「横跳」，把信息转换成文件，把文件转换成决策。
比如，一个投行analyst收到客户brief，需要先在Word里读懂需求，在Excel里建模型，在PPT里做呈现，回到Outlook发评审邀请。
每一步之间的切换，都是重新捡起上下文的成本。如果中间换了个人交接，成本再翻一倍。
Claude for Microsoft 365正是想要省掉这个情境切换成本。
「一次对话，横跨四款应用」，这是
Anthropic官方的一句话。
从Outlook收件箱开始，经过Word、Excel，到PPT，再回到Outlook发出评审邀请，上下文全程不丢。
对于每天都要出deck、建模型、回邮件的人，这套工作流简直就是为他们量身定做的。
更重要的是，Claude建Excel模型不是生成一段说明，而是真的打开Excel，从Word文档里拿数字，在多个sheet里建公式。
在法务和合规场景，Word里的修订模式和评论线程，让Claude的参与可以被完整审查。它做了什么改动，在审阅模式下一目了然。
这种透明度，是企业法务流程愿意接受AI介入的前提。
个人能用
团队也能推
个人用户直接安装即可。
管理员要在团队层面推开，Excel、PowerPoint、Word三个应用共用一个AppSource条目，Outlook单独一个，都可以从Microsoft admin center直接部署，支持全组织铺开、指定用户或指定群组，最多需要24小时生效。
Claude for Microsoft 365提供两个独立安装入口：Excel、PowerPoint、Word共用一个，Outlook单独一个。https://claude.com/claude-for-microsoft-365
访问凭证有两种方式：用Claude账号登录，或者通过企业现有的LLM gateway（大模型网关）路由，支持通过Amazon Bedrock、Google Cloud Vertex AI、Azure AI Foundry / Microsoft Foundry，或企业自有LLM gateway路由Claude模型。
已经有云基础设施的企业不需要另起炉灶。
Outlook插件有一个额外要求：需要Microsoft全局管理员完成一次Microsoft Graph的租户级授权。
官方列出的Microsoft Graph委派权限包括Mail.ReadWrite、Calendars.Read、People.Read、User.Read和offline_access；这些权限需要Global Administrator做一次租户级授权。
普通用户即使有付费账号，如果管理员没有完成这一步，也用不了Outlook插件。
安全审计方面，Enterprise企业管理员可以把Claude的使用记录接入自己的监控系统。比如，Claude收到了什么提示词、调用了哪些工具、引用了哪些文档，都可以通过
开放式可观测性标准协议
传回企业自己的数据采集端。
Anthropic还提供Analytics API，方便企业按组织维度查看使用情况。
最后一公里
正在被跑完
现在的Claude for Microsoft 365，Outlook还在beta阶段，iOS和Android不支持，
本地部署Exchange邮件服务器的
用户暂时用不了。整套能力，目前只对
Pro、Max、Team、Enterprise付费计划开放，免费用户还进不来。
Excel数据改动同步到PPT图表这个能力，官方已经明确描述，但在复杂文件、多人协作、长流程场景下的稳定性，目前还没有大规模的第三方实测数据。
跨应用联动的前提是「相关文件都已经打开」。它还没有能力主动去找文件、打开文件，因此「全自动」的上限，是你把几个窗口都摆好之后的全自动。
但这些限制正在被逐步跨越。Excel、PowerPoint、Word已经全面上线，Outlook从「计划中」到公测，
Anthropic一点也没有减速
。
「文件已打开才能联动」这个边界，也并非技术天花板，只是现阶段的安全设计：让用户保持控制权，避免AI在不知情的情况下修改文件。
随着智能体能力成熟，主动的文件管理并非做不到，只是那时需要更强的可靠性来支撑。
参考资料：
https://claude.com/claude-for-microsoft-365
https://claude.com/blog/collaborate-with-claude-across-excel-powerpoint-word-and-outlook
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！