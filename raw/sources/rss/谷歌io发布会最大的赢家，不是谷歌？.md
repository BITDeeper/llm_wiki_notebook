---
title: "谷歌I/O发布会最大的赢家，不是谷歌？"
date: 2026-06-04
source: "机器之心"
url: "https://mp.weixin.qq.com/s/u-DNm3dfb-luEeCIzI0GSg"
rss_id: "2651037098_3"
---
编辑｜杨文
5 月 20 日凌晨，谷歌 I/O 大会一口气推出了各种模型，其中就包括
原生多模态大模型
Gemini Omni
Flash
。
该模型支持任意输入（视频、图像、音频、文本、草图等）来生成和编辑视频。
我们只需用自然语言下指令，就能对视频进行多次、连续修改，模型能够保持角色一致性、符合物理规律，并记住之前的上下文。
视频来自：
X博主@venturetwins
它对现实世界也有深度理解，不仅能理解重力、动能、流体力学等物理规律，还能结合历史、科学和文化背景进行深度的画面叙述。
例如，上传膝盖 MRI 图像后直接询问「如何治疗前交叉韧带撕裂」，模型便能给出专业解读。
甚至我们可以借助自己的声音和形象创建数字分身，生成外观与声音都高度还原本人的内容。
Gemini Omni 生成的所有视频均内嵌不可见的 SynthID 数字水印，可通过 Gemini 应用、Chrome 或谷歌搜索便捷验证。
目前，Gemini Omni Flash 已上线，全球付费用户可在 Gemini 应用和 Google Flow 中率先体验。
本周内，该功能还将免费内置到 YouTube Shorts 和 YouTube Create App，面向普通创作者开放。
开发者与企业客户则可在接下来几周内通过 Gemini API 正式接入。
网友实测：亮点与槽点同在
社交媒体上已有大量网友晒出测试结果，我们就来盘一盘。
沃顿商学院副教授 Ethan Mollick 拿到了早期访问权限，用一段颇具挑战性的提示词进行了压力测试：
Prompt：sea otter in a pilot's uniform explains why Spirit Airlines went bankrupt to a river otter who is distracted by their laptop while they are in a hot air balloon over NYC. in the next balloon over, william shakespeare fights a robot made of pizza.（一只穿着飞行员制服的海獭，在纽约上空的热气球里，向一只被笔记本电脑分心的河獭解释 Spirit Airlines 为何破产，而旁边的另一个热气球里，威廉・莎士比亚正在和一个用披萨做成的机器人打架。）
视频来自：
X博主@emollick
我们可以看到，它生成的镜头切换丝滑，指令遵循度也较高。Ethan Mollick 评价道「一个真正聪明的模型能直接处理视频，创作空间大大扩展了」。
网友 @WolfRiccardo 用 Gemini Omni 做了一条偷拍被抓的假新闻，画面质感不错，光影处理自然，人物被当场抓包时的动作与表情也颇为真实，但最后一秒手机凭空消失，明显穿帮。
视频来自：
X博主@WolfRiccardo
@a16z 合伙人 Justine Moore 则重点测试了模型的「世界知识」整合能力。比如上传一张当前站立位置的照片，直接询问该地的历史沿革，模型无需额外提示便能结合图像与已有知识库给出准确、详尽的回答。
视频来自：
X博主@venturetwins
创作者 @jerrod_lew 测试了模型的视频编辑能力，将同一段跑步素材无缝迁移到不同环境、服装与场景中，Gemini Omni flash 在大幅修改画面风格的同时，完整保留了原始动作的连贯性。
视频来自：
X博主@jerrod_lew
网友 @LexnLin 尝试了多视角快速切换：在 10 秒的生成视频中，镜头在正面中景、低角度仰拍、侧脸特写、极近距离面部大特写、高空俯拍与远景全景之间流畅切换，非常酷炫、电影化。
视频来自：
X博主@LexnLin
但是它也有大多数 AI 视频模型的通病，近景能做得比较精细，一旦镜头拉远，主角的脸部细节就糊在一起，看不清五官和纹理。
网友 @aimikoda 测试了 Gemini Omni flash 面部表情控制能力，生成了一段节拍同步肖像视频：一个戴白色棒球帽的短发女孩在节拍切换中依次呈现好奇、害羞、调皮、惊讶、梦幻、眨眼等 16 种精确表情，全部硬切在节拍上，非常精准且富有表现力。
视频来自：
X博主@aimikoda
当然，也有测试反映了明显的控制力不足。上传参考图后，模型未能有效按参考内容生成对应画面，对输入图像的还原度较弱。
视频来自：
X博主@sergeantsref
另有用户吐槽 Gemini 的新使用限制太严格，仅生成 5 个视频便会耗尽配额，导致连 Pro 和 Flash 模式都不能用了，体验大打折扣。
视频来自：
X博主@LexnLin
与 Seedance 2.0 正面交锋
Gemini Omni flash 发布后，互联网老哥们都关心一个问题：它与当下表现亮眼的 Seedance 2.0 相比究竟如何？
多位创作者用相同提示词进行了同台对比，结果颇为一边倒。
网友 @cipherwebthree 的对比测试中，Gemini Omni Flash 出现了明显的面部一致性问题，明星在出场瞬间出现换脸现象，一眼可辨。Seedance2.0 生成效果几乎无可挑剔，我瞪着眼来来回回看了 N 遍，也没找到穿帮的点。大家一起来找找茬，在评论区聊聊。
视频来自：
X博主@cipherwebthree
AI 创作者 @JSFILMZ0412 专门测试了打斗场景的生成效果，直言「谷歌宣传 Gemini Omni Flash 会改变游戏规则，但与 Seedance 2.0 并排对比后，根本不是一个量级，Seedance 完胜。希望 Veo 4 能来救场。」
视频来自：
X博主@JSFILMZ0412
网友 @AIWarper 进行了日漫风格对比，双方整体效果都不错，但 Seedance 2.0 生成的是 15 秒视频更具传统动漫的「on 2s」节奏感，即每秒 12 帧的经典日漫节奏，流畅之余保留了那种独特的轻微跳帧韵律。
视频来自：
X博主@AIWarper
而 Gemini Omni Flash 的 10 秒视频则更偏向 3D 质感，动画帧率风格不够纯正。
网友 @NACHOS2D_的对比更直观。
Gemini Omni Flash 生成的画面光影尚可，但武术动作迟缓无力，如慢镜头般拖沓，水花与物理效果模糊失真，整体有明显的 AI 感。
视频来自：
X博主@NACHOS2D_
Seedance 2.0 的动作则流畅有力、节奏连贯，拳脚速度与力道俱佳，水花飞溅等动态效果高度自然，配合快速切镜、特写与低角度镜头语言，打斗场景极具动作片质感。
综合来看，Gemini Omni Flash 在科普解说类视频的生成、视频编辑方面表现可圈可点，但在动态场景、人物一致性等维度上均与 Seedance 2.0 存在明显差距，整体表现略优于 Veo 3.1，但仍低于外界预期。
参考链接：
https://x.com/venturetwins/status/2056793856843366789?s=20
https://x.com/emollick/status/2056788122369712148?s=20
https://x.com/WolfRiccardo/status/2056812463350235220?s=20
https://x.com/jerrod_lew/status/2056865054130319828?s=20
https://x.com/LexnLin/status/2056837898796769791?s=20
https://x.com/aimikoda/status/2056861958247194897?s=20
https://x.com/sergeantsref/status/2056818170057679231?s=20
https://x.com/LexnLin/status/2056846325979693465?s=20
https://x.com/cipherwebthree/status/2057049421234483588
https://x.com/JSFILMZ0412/status/2056864860240011411?s=20
https://x.com/AIWarper/status/2056796127245316271?s=20
https://x.com/NACHOS2D_/status/2056774932520989091?s=20
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com