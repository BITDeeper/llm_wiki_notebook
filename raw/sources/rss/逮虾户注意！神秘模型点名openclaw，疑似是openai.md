---
title: "逮虾户注意！神秘模型点名OpenClaw，疑似是OpenAI"
date: 2026-03-14
source: "新智元"
url: "https://mp.weixin.qq.com/s/S7SsVNNfwXAm63j3pExo7Q"
rss_id: "2652683003_2"
---
新智元报道
编辑：倾倾
【新智元导读】
3月11日深夜，OpenRouter悄悄上线两个匿名模型。omni-moda、1万亿参数、视觉听觉推理行动，每个词都像公司的内部术语。就在两天前，OpenAI员工公开问：「你们想要什么样的新omni模型？」二者之间，似乎存在着微妙的联系。但很快，另一条线索给这个结论打了问号。
3月11日深夜，@mark_k发了一条推文。
他发现Healer Alpha的描述里用了「omni-modal」这个词，而这个词是OpenAI的常用术语！
几乎同一时间，另一个账号@AiBattle_发现，OpenRouter上同时出现的不止Healer Alpha一个。
还有一个叫Hunter Alpha的模型，1万亿参数，100万token上下文，专为Agent设计。
OpenRouter管这叫「stealth模型」。这套路，AI圈的人不陌生。
Hunter能打，Healer全知
Hunter Alpha，1万亿参数，100万token上下文，专为Agent使用而构建的前沿智能模型。
擅长长程规划、复杂推理和持续多步任务执行，具备生产级Agent流水线所需的可靠性和指令执行精度。
这是OpenRouter对Hunter Alpha的描述。
Healer Alpha的描述更直白：具有视觉、听觉、推理和行动能力的前沿全模态模型。
将Agent智能的全部能力带入现实世界。原生感知视觉和音频输入，跨模态推理，以精度和可靠性执行复杂多步任务。
两个模型，方向完全不同。
Hunter主攻深度Agent能力，强调能做事、能规划、能持续执行。
Healer主攻全感知全模态，强调能看、能听、能感知真实世界的输入。
有趣是，这两个方向并不是非此即彼的。
一个真正能在现实世界工作的Agent，恰恰需要同时具备这两种能力。
出现端倪：OpenAI员工刚问过
@mark_k之所以盯上Healer，就是因为这个词：omni-modal。
这是OpenAI的术语。
2024年GPT-4o发布时，o代表omni，指的是单一模型原生处理文本、图像和音频，而不是拼接多个专用模型。
此后OpenAI的模型命名和内部文档里，omni一直是他们描述全模态能力的标签。
其他主流实验室的描述里很少用这个词。
更微妙的是，The Decoder在3月9日报道，OpenAI语音团队成员Atty Eleti在X上直接发问：
你们希望新的omni模型具备什么？
OpenAI研究员Brandon McKinzie随即回复：「听起来是个好主意。」
Hunter Alpha和Healer Alpha出现在OpenRouter上，是3月11日。
员工造势，两天后幌子模型出现，描述里精确使用了同一个词，很难用巧合来形容。
这套路，OpenAI用了三次
这不是OpenAI第一次在OpenRouter放幌子模型了。
社区有一套完整的破案历史。
去年4月，
Quasar Alpha
悄然出现，官方对它的描述是「专为长上下文编程优化，100万token上下文，免费测试」。
研究员发现Quasar处理中文时出现了一个特定tokenizer错误，这个错误此前只在OpenAI模型上出现过，指向他们使用的o200k_base分词器。
另一个线索是API的message字段。
Quasar支持一个叫「name」的额外字段，在主流API里只有OpenAI和xAI支持，而且OpenAI版本只允许字母数字字符，这与Quasar的行为完全一致。
后来，OpenRouter官方确认Quasar Alpha和Optimus Alpha都是GPT-4.1的早期测试版本。
从幌子出现到揭晓，不到两周。
另一个幌子是
Horizon Alpha
。在去年
7月底出现，创意写作碾压同期所有模型，256K上下文，没有任何归属。
社区猜了一个月，官方后来在Discord里确认，Horizon Alpha是GPT-5家族的早期checkpoint。
Horizon Beta在GPT-5正式发布后两天下线。
最近的一次预测是
Polaris Alpha
。
2025年11月初，
Polaris Alpha
出现，具有256K上下文，推理能力显著增强。
研究员Sam Paech在benchmark上发现，Polaris Alpha的输出在风格和质量上最接近GPT-5。
11月底GPT-5.1正式发布，Polaris当天退场。
这显现出了一个清晰的规律：
幌子出现→社区破案→正式发布→stealth版退场
，周期从未超过一个月。
一次来两个，不寻常！
以往的stealth模型，一次通常只出现一个。这次是两个，而且定位完全不同，这本身就是一个信号。
Hunter的方向是深度Agent能力，描述里还出现了一个词：「OpenClaw」。
没错，就是那只龙虾。
Hunter的描述写的是「专为像OpenClaw这样的生产级Agent流水线而设计」。
也就是说，Hunter的定位不是取代龙虾，而是给它喂更强的底层模型。
你刚养完龙虾，OpenAI可能正在悄悄给它造一个更强的大脑。
而Healer的方向是全模态感知，原生感知视觉和音频、跨模态推理，和OpenAI员工两天前公开暗示的新omni模型高度重叠。
目前，GPT-5.4已经是OpenAI目前的旗舰模型，主打电脑使用和代码，但原生音频和跨模态感知一直是它没有完善的地方。
Healer的描述，精确填在这个空白里，Hunter则指向更大参数、更长上下文、更强的多步执行，对应的是企业级Agent部署的需求。
两条线同时在OpenRouter上出现，暗示OpenAI在并行推进两个方向，而不是在等一个大一统的版本。
下一步会怎么样？历史给过答案。
Quasar Alpha从出现到揭晓，不到两周。Polaris Alpha出现后不到一个月，GPT-5.1正式发布。
按照过去三次的节奏，社区接下来会开始系统测试：对比输出风格、提取system prompt、测tokenizer指纹、跑benchmark。
破案通常不需要太久。
不过与此同时，另一条线索悄悄出现了。
有人称，Hunter Alpha和Healer Alpha的系统提示里都包含一句要求：严格遵守中国法律法规。
这个细节目前只有单一信源，但如果属实，「这是OpenAI幌子」的结论，至少要打一个问号。
DeepSeek、阿里、字节的模型里，这句话是标配；OpenAI的模型里，从来没出现过。
这道题，现在还没有标准答案。但不管背后是谁，这两个模型的规格都不是在开玩笑。
参考资料：
https://x.com/mark_k/status/2031845114788626850
https://x.com/AiBattle_/status/2031834303827681727
https://openrouter.ai/models
https://x.com/chetaslua/status/2031983459057672455?s=20
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！