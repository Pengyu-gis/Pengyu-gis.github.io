---
layout: post
title: "Intelligent Bear Protection System on the Tibetan Plateau"
tags: [Computer-Vision, IoT, Conservation]
feature-img: "assets/img/pexels/team_plateau.jpg"
thumbnail: "assets/img/pexels/team_plateau.jpg"
---

<style>
    /* Make the video responsive (16:9 ratio) */
    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
        overflow: hidden;
        max-width: 100%;
        background: #000;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    /* Update Box */
    .update-box {
        background-color: #e8f5e9;
        border-left: 5px solid #4caf50;
        padding: 15px;
        margin-bottom: 30px;
        border-radius: 4px;
        font-family: sans-serif;
    }

    /* Link Buttons */
    .project-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 40px;
        justify-content: center;
    }
    .link-btn {
        background: #f8f9fa;
        border: 1px solid #ddd;
        padding: 8px 16px;
        border-radius: 20px;
        text-decoration: none !important;
        font-size: 0.9rem;
        color: #333 !important;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
    }
    .link-btn:hover {
        background: #4a90e2;
        color: white !important;
        border-color: #4a90e2;
        transform: translateY(-2px);
    }
    .link-btn i { margin-right: 5px; }

    /* Images */
    figure {
        margin: 30px 0;
        text-align: center;
    }
    figcaption {
        color: #666;
        font-style: italic;
        font-size: 0.9rem;
        margin-top: 8px;
    }
    img.content-img {
        max-width: 100%;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
</style>

<div class="update-box">
    <strong>🚀 5/20/2024 UPDATE:</strong> We successfully deployed our system on the Tibetan Plateau in Qinghai at an altitude of 4,500 meters!
</div>

<div class="project-links">
    <a href="https://arxiv.org/abs/2503.23178" class="link-btn" target="_blank">📄 Read Paper (arXiv)</a>
    <a href="https://github.com/Pengyu-gis/Pengyu-gis.github.io/blob/master/_posts/human_bear_conflicts.pdf" class="link-btn" target="_blank">📊 Download PPT</a>
    <a href="https://mp.weixin.qq.com/s/3PlQFtvt_uWFbmI3vyabdQ" class="link-btn" target="_blank">🔗 Chinese Article</a>
</div>

<figure>
    <img src="/assets/img/pexels/team_plateau.jpg" class="content-img" alt="Team on Plateau">
    <figcaption>Our team deploying the system at 4,500m elevation.</figcaption>
</figure>

### 🎥 System Demo

<div class="video-container">
    <iframe src="//player.bilibili.com/player.html?aid=1054569894&bvid=BV1TH4y137iy&cid=1543759463&p=1" 
            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy">
    </iframe>
</div>

---

### 1. The Challenge
The ongoing conflict between residents in the Qinghai-Tibet Plateau region and Tibetan brown bears poses a significant challenge to the protection of the local ecosystem and human livelihoods. This issue not only seriously affects the livelihoods of local herders, causing economic losses, but also potentially endangers their lives. 

According to data from the **Nangqian County Public Security Bureau** (Yushu City, Qinghai Province), human-bear conflicts peak in the summer. When herders move to higher-altitude summer pastures, their lower-altitude winter residences are left unattended, making them susceptible to intrusion by brown bears.

**Key constraints:**
* **No Infrastructure:** Pastures lack network signal coverage and power grids.
* **Protected Species:** Tibetan brown bears are protected; methods that could harm them cannot be used.

<figure>
    <img src="https://github.com/user-attachments/assets/68454118-bb09-4fa7-b1fd-09d851232e9e" class="content-img" alt="System Workflow" loading="lazy">
    <figcaption>The workflow of our automated detection and deterrent system.</figcaption>
</figure>

### 2. The Solution: AI + IoT
To address this, we developed a technology-driven automated strategy combining **Computer Vision** with **IoT (Internet of Things)**. 

The system operates in real-time:
1.  **Monitor:** Cameras monitor the area continuously.
2.  **Detect:** AI algorithms identify if a moving object is a Tibetan Brown Bear.
3.  **Deter:** Upon detection, the board activates a non-harmful bear deterrent spray system to drive the animal away from the living area.

### 3. Hardware Implementation
We utilized the **Kendryte K210** development board. It is a system-on-chip (SoC) that integrates machine vision and machine hearing capabilities.

* **Processor:** Dual-core 64-bit processor (TSMC 28nm ultra-low-power).
* **Training Platform:** MaixHub (Sipeed) for efficient model training.

<figure>
    <img src="https://github.com/user-attachments/assets/7695c664-a685-483b-a08d-dcf275e5a17d" class="content-img" alt="Hardware Setup" loading="lazy">
    <figcaption>The hardware setup running the YOLO-based detection model.</figcaption>
</figure>

---
*Editing & Layouts: Ziyue GUO & Pengyu CHEN*
