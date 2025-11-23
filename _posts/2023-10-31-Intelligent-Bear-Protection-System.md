---
tags: Computer-Vision Human-Bear-Conflicts
---

## 5/20/2024 UPDATE: We installed our system on the Tibetan Plateau in Qinghai, up to 4,500 meters high!

<div style="text-align: center;">
  <img src="/assets/we_bear!.jpg" alt="Team on Plateau" style="width: 85%;" loading="lazy">
</div>

Article Link (Chinese): [Group Meeting](https://mp.weixin.qq.com/s/3PlQFtvt_uWFbmI3vyabdQ) <br>
Editing & Layouts: Ziyue GUO

PPT Link (English): [Intelligent Bear Protection System](https://github.com/Pengyu-gis/Pengyu-gis.github.io/blob/master/_posts/human_bear_conflicts.pdf) <br>
Editing & Layouts: Pengyu CHEN

<img src="https://github.com/Pengyu-gis/Pengyu-gis.github.io/assets/95490459/23083078-768a-4b2e-8b68-ad94c41474c0" alt="frame" loading="lazy">

Video Demo:

<iframe src="//player.bilibili.com/player.html?aid=1054569894&bvid=BV1TH4y137iy&cid=1543759463&p=1" 
        width="640" 
        height="360" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        loading="lazy"
        allowfullscreen="true">
</iframe>

The ongoing conflict between residents in the Qinghai-Tibet Plateau region and Tibetan brown bears poses a significant challenge to the protection of the local ecosystem and human livelihoods. This issue not only seriously affects the livelihoods of local herders, causing economic losses, but also potentially endangers their lives. It is worth noting that according to the reported data from the Nangqian County Public Security Bureau in Yushu City, Qinghai Province, human-bear conflicts often occur in the summer. When herders move to higher-altitude summer pastures, the lower-altitude winter pastures (typically their long-term residence) are left unattended and are susceptible to intrusion and damage by brown bears.

<br>

Due to the remote location, all pastures lack network signal coverage and access to the power grid. Additionally, Tibetan brown bears are protected animals in China, and methods that could harm them cannot be used to deter them. Therefore, developing a bear protection system that ensures the safety of local residents without harming Tibetan brown bears presents a significant challenge.

To address this challenge more effectively, the research by student *Pengyu Chen* combines computer vision algorithms with IoT (Internet of Things) technology. It utilizes the low-power, high-resolution display-capable Kendryte K210 development board as the implementation platform for algorithms and the operating system. This research proposes a technology-driven automated strategy for dealing with human-bear conflicts. This system can monitor wildlife activities in real-time and identify bear species using AI visual algorithms. When bears are detected, the development board activates a bear deterrent spray system, which drives Tibetan brown bears away from the herder's living area, reducing the risk of conflicts between herders and bears.

The Kendryte K210 development board is a system-on-chip (SoC) that integrates machine vision and machine hearing capabilities. It uses TSMC's advanced 28-nanometer ultra-low-power process, features a dual-core 64-bit processor, and provides excellent power performance, stability, and reliability. This research has chosen MaixHub as the training platform. MaixHub is an online AI model service and community communication platform released by Sipeed, which makes the training process more efficient and convenient.
