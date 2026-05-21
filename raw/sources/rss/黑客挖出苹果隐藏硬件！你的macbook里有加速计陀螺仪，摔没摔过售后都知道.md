---
title: "黑客挖出苹果隐藏硬件！你的MacBook里有加速计/陀螺仪，摔没摔过售后都知道"
date: 2026-02-24
source: "量子位"
url: "https://mp.weixin.qq.com/s/X1FjH5PvsR19hQ2lKAgEoQ"
rss_id: "2247870226_2"
---
henry 发自 凹非寺
量子位 | 公众号 QbitAI
亏贼！
居然有人直接黑进了苹果没公开的传感器接口？发现隐藏的
加速度计和陀螺仪接口
！！
苹果API文档里找不到相关信息，但它们就藏在你的MacBook里。
通过它，程序可以实时读取笔记本电脑的三轴加速度（x/y/z）和三轴角速度数据。
也就是说，你的MacBook在空间中的晃动、旋转、倾斜，都能被精确记录。
只要轻轻晃一晃电脑、改变一下角度，终端里的数值就会跟着跳。
更离谱的是，把手腕贴近心率板10-20秒，程序还能捕捉到类似心率产生的微弱振动信号——
相当于在MacBook上“测了个心率”（当然完全不具备医疗意义）。
这个发现一出，网友直接炸锅：原来MacBook还有这玩意？
也有人开始联想：
他们会用这些数据来判断你在申请AppleCare赔偿时，是否摔过你的 MacBook。
毕竟，苹果的标准保修并不包含意外损坏，而AppleCare则是付费维修、收取服务费。
如果设备内部真的有加速度传感器，那下次修电脑找理由岂不是都不好找了？（doge）
M3 Pro上已证实
根据开发者小哥的GitHub，在搭载M3芯片的MacBook Pro上，确实存在加速度计和陀螺仪数据流。
这些传感器数据是小哥通过系统底层的IOKit HID接口读取到的。
苹果并没有公开API，也没有在官方文档中说明它的用途
。
具体来说，这个传感器挂在macOS的IOKit设备树下面，名叫
AppleSPUHIDDevice
。
它属于苹果的SPU（Sensor Processing Unit，传感器处理单元）体系，由系统驱动AppleSPUHIDDriver管理。
在HID设备里，usage 3→加速度计，usage 9→陀螺仪，两者来自同一个物理IMU芯片。
根据拆机分析，外界推测可能是Bosch BMI286（未被官方确认）。
就目前来看，已经证实的机型有M3系列MacBook Pro，而已经被确认没有的包括搭载英特尔芯片的老mac和初代M1芯片的MacBook。
这个传感器能干嘛？
根据项目说明和网友分析，这个接口可以读取：三轴加速度、三轴陀螺仪、开盖角度以及环境光相关数据。
至于它的用途，小哥并没有进一步说明，但不少网友也是直接把这个跟MacBook的保修政策联系了起来。
但有一说一，开盖角度检测一直就有——
MacBook判断你是否合盖（屏幕休眠），本身就需要姿态或磁感应判断。
而环境光数据也不奇怪，Mac的屏幕和键盘都有自动亮度调节功能，本身就依赖光线传感器。
至于“测心跳”，那确实很有意思，有不少网友表示自己确实想体验一下。
把手腕放在触控板附近10–20秒，程序会尝试捕捉心跳引发的微弱机械振动（BCG原理）。
它通过0.8–3Hz带通滤波，自相关算法估算BPM。
不过需要强调的是，这并不能用作医疗用途，只是展示传感器灵敏度。
所以，目前还没有切实的证据表明：它会记录历史摔落数据、参与保修判定以及上传用户运动信息。
而且，据小哥透露，这个传感器数据流还可能会因为苹果系统的更新而被和谐掉。
至于大家最关心的能不能实时检测电脑的位姿，尤其是在摔了后拒保，还要看苹果后续的回应。
自己测试一下
最后，如果感兴趣的话，你也可以在自己的电脑上玩一下。
（详情可参考https://github.com/olvvier/apple-silicon-accelerometer）
先在终端运行：
ioreg
-l -w0 | grep -A5 AppleSPUHIDDevice
如果能看到 AppleSPUHIDDevice 节点，说明设备存在。
然后：
git
clone
https://github.com/olvvier/apple-silicon-accelerometer
cd
apple-silicon-accelerometerpip
install -e .
sudo
python3 motion_live.py
值得一提的是，这里需要 sudo，因为Apple Silicon上访问IOKit HID需要root权限。
成功运行后晃动电脑，终端数值会实时变化。
把手腕放在触控板附近10–20 秒，可以尝试“心跳检测”演示。
参考链接
[1]https://github.com/olvvier/apple-silicon-accelerometer
[2]https://x.com/QingQ77/status/2025556429331943667?s=20
[3]https://medium.com/@oli.bourbonnais/your-macbook-has-an-accelerometer-and-you-can-read-it-in-real-time-in-python-28d9395fb180
—
欢迎AI产品从业者共建
—
📚
「AI产品知识库」
是量子位智库基于长期产品库追踪和用户行为数据推出的飞书知识库，旨在成为AI行业从业者、投资者、研究者的核心信息枢纽与决策支持平台。
一键关注 👇 点亮星标
科技前沿进展每日见