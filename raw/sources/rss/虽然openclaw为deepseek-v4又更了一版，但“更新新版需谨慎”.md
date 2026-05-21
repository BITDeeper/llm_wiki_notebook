---
title: "虽然OpenClaw为DeepSeek V4又更了一版，但“更新新版需谨慎”"
date: 2026-04-26
source: "量子位"
url: "https://mp.weixin.qq.com/s/0A6x8S7Jv5tzE85QAq2cZQ"
rss_id: "2247886574_2"
---
鱼羊 发自 凹非寺
量子位 | 公众号 QbitAI
OpenClaw又双叒更新了，这次正式接入了DeepSeek V4系列：
现在在龙虾里配置DeepSeek API，默认模型就不是「deepseek-chat」，而是「deepseek-v4-flash」了。
这个4.24版本更新内容具体是这样的：
实时语音通话全面打通；
DeepSeek V4 Flash和Pro加入模型库；
浏览器自动化增加了坐标点击和更好的恢复机制；
Telegram、Slack、MCP、会话和TTS修复。
都是实用功能，一起具体来看。
加入DeepSeek V4系列
前一天刚为GPT-5.5更新，没有时间给龙虾之父Peter休息，DeepSeek V4已经向我们走来。
尽管没有像更新GPT-5.5那样把更新信息放到第一条（doge），但并不妨碍网友们期待地搓起了小手。
V4 Pro和V4 Flash均已可选，其中DeepSeek V4 Flash会是配置完API之后的默认选项。OpenClaw还对后续工具调用回合的重放和逻辑处理问题进行了修复。
实时语音可接入完整智能体能力
龙虾4.24版本更大篇幅的更新，是OpenClaw实时语音功能的大升级。
这次龙虾真能边听边想边干活了。
Talk、Voice Call和Google Meet现在可以使用realtime voice loops，并调用完整OpenClaw Agent来给出更深层、带工具能力的回答。
举个例子，当语音对话里遇到复杂问题时，AI不再只能给一个轻量回复，而是可以把问题交给完整的OpenClaw Agent处理，调用工具、查上下文、跑更深的推理，然后再把结果通过语音返回。
浏览器自动化改进
浏览器自动化这次也朝着“更像真人操作浏览器”迈了一步。
OpenClaw新增了基于视口坐标的点击能力，可以直接指定页面上的坐标进行点击操作，还提供了新的CLI命令openclaw browser click-coords。这对一些DOM结构复杂、按钮难以稳定定位，或者需要模拟视觉操作的网页会很有用。
浏览器动作的默认超时时间也拉长到了60秒。以前一些正常但耗时较长的页面操作，可能会被客户端传输层提前判定失败，现在长等待场景会更稳一些。
更多更新细节，可看这里：
https://github.com/openclaw/openclaw/releases/tag/v2026.4.24
不过懂OpenClaw更新的朋友都懂，每次更新多少都会整点幺蛾子出来。
比如这位倒霉朋友的龙虾就搞崩了……
不少网友吐槽OpenClaw的更新就跟没做过测试似的，只能说更新需谨慎吧。
不过……谁知道Peter是不是把这活交给
自己干了呢（doge）？
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
🔹 谁会代表2026年的AI？
龙虾爆火，带动一波Agent与衍生产品浪潮。
但真正值得长期关注的AI公司和产品，或许不止于此。
如果你正在做，或见证着这些变化，欢迎申报。
让更多人看见你。
👉 https://wj.qq.com/s2/25829730/09xz/
一键关注 👇 点亮星标
科技前沿进展每日见