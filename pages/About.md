---
layout: page
title: About Me
permalink: /about/
feature-img: "assets/img/pexels/bob.jpg"
tags: [Page]
---

<style>
    /* Global Clean Up */
    body {
        font-family: Helvetica, sans-serif;
        color: #333;
        line-height: 1.6;
    }

    /* The Quote Styling */
    .intro-quote {
        border-left: 4px solid #4a90e2; /* Blue accent line */
        background: #f9f9f9;
        padding: 15px 20px;
        font-style: italic;
        color: #555;
        margin-bottom: 30px;
        border-radius: 0 5px 5px 0;
    }
    .intro-quote footer {
        display: block;
        margin-top: 10px;
        font-size: 0.9em;
        color: #888;
        font-style: normal;
        text-align: right;
    }

    /* Contact Info Grid */
    .contact-info {
        background: #fff;
        border: 1px solid #eee;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    .contact-row {
        margin-bottom: 8px;
    }
    .social-links a {
        margin-right: 15px;
        text-decoration: none;
        color: #4a90e2;
        font-weight: 600;
        transition: color 0.2s;
    }
    .social-links a:hover {
        color: #2c3e50;
    }

    /* The Button for CV */
    .btn-cv {
        display: inline-block;
        background-color: #4a90e2;
        color: white !important;
        padding: 8px 16px;
        border-radius: 20px;
        text-decoration: none;
        font-size: 0.9rem;
        transition: background 0.3s;
        margin-bottom: 20px;
    }
    .btn-cv:hover {
        background-color: #357abd;
        text-decoration: none;
    }

    /* Timeline Container */
    .timeline-section {
        margin-top: 40px;
    }
    .timeline {
        border-left: 2px solid #e0e0e0;
        padding-left: 25px;
        margin-left: 5px;
    }
    
    /* Individual Timeline Items */
    .timeline-item {
        position: relative;
        margin-bottom: 35px;
    }
    
    /* The Dot on the timeline */
    .timeline-item::before {
        content: '';
        position: absolute;
        left: -32px; /* Adjust based on padding-left of timeline */
        top: 6px;
        width: 12px;
        height: 12px;
        background: #fff;
        border: 2px solid #4a90e2;
        border-radius: 50%;
    }

    /* Typography Hierarchy */
    .role {
        font-size: 1.2rem;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 4px;
    }
    .institution {
        font-size: 1rem;
        font-weight: 600;
        color: #555;
    }
    .date-location {
        font-size: 0.85rem;
        color: #888;
        margin-bottom: 8px;
        font-family: monospace; /* Gives a technical feel */
    }
    
    /* Highlight Tags (GPA, Awards) */
    .tag {
        display: inline-block;
        background: #edf2f7;
        color: #4a5568;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
        margin-right: 5px;
        margin-top: 5px;
    }
    .tag.highlight {
        background: #ebf8ff;
        color: #3182ce;
        border: 1px solid #bee3f8;
    }

    /* Links inside content */
    .timeline-item a {
        color: #4a90e2;
        text-decoration: none;
        border-bottom: 1px dotted #4a90e2;
    }
    .timeline-item a:hover {
        border-bottom: 1px solid #4a90e2;
    }
</style>

<blockquote class="intro-quote">
    <p style="color: #666; font-style: margin-top: 10px;">
        一九二六，北伐兵兴，边隅之地，青年两个，墨盒为礼，寄语未来；惟不知抬头落款中的两个人，他们的后来，是否就达学问功名，是否完成…『伟大的人生』。— 腰乐队 刘弢
    </p>
</blockquote>

<div class="contact-info">
    <h2>Pengyu Chen | 陈鹏宇</h2>
    <div class="contact-row"> <strong>Location:</strong> Columbia, SC, USA (Callcott 121/318)</div>
    <div class="contact-row"> <strong>Email:</strong> pengyuc@email.sc.edu</div>
    <br>
    <div class="social-links">
        <a href="https://github.com/Pengyu-gis">GitHub</a>
        <a href="https://www.linkedin.com/in/pengyu-chen-a07973181/">LinkedIn</a>
        <a href="https://scholar.google.com/citations?user=3Y9YVSIAAAAJ&hl=en">Google Scholar</a>
        <a href="https://www.researchgate.net/profile/Pengyu-Chen-20">ResearchGate</a>
    </div>
</div>

<a href="/Pengyu_Chen_CV.pdf" class="btn-cv">📄 Download Full CV (PDF)</a>

<p style="color: #666; font-style: margin-top: 13px;">
    <strong>I'm happy to collaborate with anyone interested in GeoAI (Deep learning in Remote Sensing, AI for Good) and Statistics (Geospatial Statistics, Statistical Physics). </strong>
    <br> <br>
    <strong>I'll start my Ph.D. at Virginia Tech in the fall of 2026.</strong>
</p>

<div class="timeline-section">
    <h2>Education</h2>
    <div class="timeline">
        
        <div class="timeline-item">
            <div class="role">M.S. in Geographic Information Science</div>
            <div class="institution">University of South Carolina</div>
            <div class="date-location">Aug 2024 – May 2026 | Columbia, SC</div>
            <div>
                <span class="tag highlight">TA Full Scholarship</span>
                <span class="tag">GPA: 3.82/4.0</span>
            </div>
            <p>Advisor: <a href="https://scholar.google.com/citations?user=ul3VlbgAAAAJ&hl=en">Dr. Sicheng Wang</a></p>
        </div>

        <div class="timeline-item">
            <div class="role">B.S. in Geographic Information Science</div>
            <div class="institution">Wuhan University of Technology</div>
            <div class="date-location">Sept 2020 – June 2024 | Wuhan, China</div>
            <p>Thesis: <em>Transformer-based geographic scene description</em><br>
            Advisor: <a href="https://baike.baidu.com/item/%E5%B4%94%E5%B7%8D/7542643">Prof. Wei Cui</a></p>
        </div>

    </div>
</div>

<div class="timeline-section">
    <h2>Research Experience</h2>
    <div class="timeline">

        <div class="timeline-item">
            <div class="role">Research Assistant</div>
            <div class="institution">University of South Carolina (Funded by City of Columbia)</div>
            <div class="date-location">July 2025 – August 2025</div>
            <ul>
                <li>Trained a deep learning model to detect tree canopy based on SegFormer.</li>
                <li>Analyzed canopy loss trends from 2005–2023 using high-resolution imagery.</li>
            </ul>
            <p>Advisors: <a href="https://scholar.google.com/citations?user=JPHSY40AAAAJ&hl=en">Dr. Cuizhen Wang</a> & <a href="https://sc.edu/study/colleges_schools/artsandsciences/geography/our_people/our_people_directory/dow_kirstin.php">Dr. Kirstin Dow</a></p>
        </div>

        <div class="timeline-item">
            <div class="role">Research Intern (Spatial Data Lab)</div>
            <div class="institution">Harvard University</div>
            <div class="date-location">May 2024 – Sept 2024</div>
            <p>Focus: Geographic Big Data Analytics, Spatio-Temporal Data Mining.<br>
            Supervisor: Dr. Yuhang Pan</p>
        </div>

        <div class="timeline-item">
            <div class="role">Visiting Student & RA</div>
            <div class="institution">Wuhan University</div>
            <div class="date-location">July 2023 – July 2024</div>
            <ul>
                <li>Trained YOLO-based object detection algorithm; deployed model compression to K210 microcontroller.</li>
                <li>Application: Human-Bear conflict mitigation (detecting brown bears to activate deterrents).</li>
            </ul>
            <p>Supervisor: <a href="https://only4john.github.io/">Prof. Teng Fei</a></p>
        </div>

        <div class="timeline-item">
            <div class="role">Research Intern</div>
            <div class="institution">Clemson University (Remote)</div>
            <div class="date-location">Sept 2022 – Jan 2023</div>
            <ul>
                <li>Data processing and curve generation using MATLAB and Python.</li>
                <li>Published paper in the <em>Journal of Transport Geography</em>.</li>
            </ul>
            <p>Supervisor: Dr. Chao Fan</p>
        </div>

    </div>
</div>

<div class="timeline-section">
    <h2>Teaching & Leadership</h2>
    <div class="timeline">

        <div class="timeline-item">
            <div class="role">Lab Instructor (GEOG 201)</div>
            <div class="institution">University of South Carolina</div>
            <div class="date-location">Fall 2024 – Spring 2025</div>
            <p>Course: Landform Geography.<br>
            Supervisors: Dr. Jean Taylor Ellis & Dr. John A. Kupfer</p>
        </div>

        <div class="timeline-item">
            <div class="role">Website Development Leader</div>
            <div class="institution">GISphere</div>
            <div class="date-location">Jun 2021 – Present</div>
            <ul>
                <li>Developed backend using Django REST Framework; connected to MySQL.</li>
                <li>Built front-end with Vue; managed user demand pool.</li>
            </ul>
        </div>

    </div>
</div>
