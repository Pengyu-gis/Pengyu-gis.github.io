---
layout: page
title: Teaching
permalink: /teach/
tags: [Page]
---


<style>
    /* Use modern system fonts consistent with other pages */
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        color: #333;
        line-height: 1.6;
    }

    /* Feynman Quote Style */
    .intro-quote {
        border-left: 4px solid #4a90e2;
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

    /* Course Card Styling */
    .course-card {
        background: #ffffff;
        border: 1px solid #eee;
        border-left: 5px solid #2c3e50; /* Dark blue accent */
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        margin-bottom: 40px;
    }
    .course-title {
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 1.4rem;
        color: #2c3e50;
    }
    .course-meta {
        font-style: italic;
        color: #666;
        margin-bottom: 20px;
        display: block;
    }

    /* PDF Link Buttons */
    .material-list {
        list-style: none;
        padding-left: 0;
    }
    .material-list li {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .material-name {
        font-weight: 600;
        margin-right: 15px;
        min-width: 200px;
    }
    .btn-pdf {
        display: inline-block;
        background-color: #f0f2f5;
        color: #2c3e50 !important;
        padding: 4px 12px;
        border-radius: 15px;
        text-decoration: none !important;
        font-size: 0.85rem;
        transition: all 0.2s;
        border: 1px solid #dce0e5;
    }
    .btn-pdf:hover {
        background-color: #e2e6ea;
        border-color: #cbd3da;
    }
    .btn-pdf i { margin-right: 5px; color: #e74c3c; /* Red for PDF icon */ }

    /* Evaluation Section Styles */
    .eval-section {
        margin-top: 40px;
    }
    .score-box {
        background: #e3f2fd; /* Light Blue Background */
        color: #0d47a1; /* Dark Blue Text */
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 30px;
        border: 1px solid #bbdefb;
    }
    .score-number {
        font-size: 1.8rem;
        display: block;
        margin-top: 5px;
    }

    /* Student Comment Bubbles */
    .comment-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    .student-comment {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 12px;
        font-style: italic;
        color: #555;
        border: 1px solid #eee;
        position: relative;
    }
    .student-comment::before {
        content: "“";
        font-size: 3rem;
        color: #e0e0e0;
        position: absolute;
        top: -10px;
        left: 10px;
        z-index: 0;
    }
    .comment-text {
        position: relative;
        z-index: 1;
    }

    /* THE FIX FOR YOUR IMAGE */
    .responsive-eval-img {
        max-width: 100%;     /* Ensures it never exceeds screen width */
        height: auto;        /* Maintains aspect ratio */
        border-radius: 8px;  /* Rounded corners */
        box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Soft shadow for depth */
        display: block;
        margin: 30px auto;   /* Centers the image */
        border: 1px solid #eee;
    }
    .img-caption {
        text-align: center;
        font-style: italic;
        color: #777;
        font-size: 0.9rem;
        margin-top: 10px;
    }
</style>

<blockquote class="intro-quote">
    "If you want to master something, teach it." — Richard Feynman
</blockquote>

<div class="course-card">
    <h2 class="course-title">GEOG 201: Landform Geography</h2>
    <span class="course-meta">Role: Lab Instructor | University of South Carolina | Fall 2024 & Spring 2025</span>

    <h4>📂 Lab Materials & Slides</h4>
    <ul class="material-list">
        <li>
            <span class="material-name">Lab 2: Maps and Mapping</span>
            <a href="/assets/data/Maps_and_Mapping.pdf" class="btn-pdf" target="_blank"><i class="fa fa-file-pdf-o"></i> PDF Slides</a>
        </li>
        <li>
            <span class="material-name">Lab 3: Minerals and Rocks</span>
            <a href="/assets/data/GEOG201_2024_Rocks.pdf" class="btn-pdf" target="_blank"><i class="fa fa-file-pdf-o"></i> PDF Slides</a>
        </li>
        <li>
            <span class="material-name">Lab 4: Soils and Soil Mapping</span>
            <a href="/assets/data/Soils_and_Soil_Mapping.pdf" class="btn-pdf" target="_blank"><i class="fa fa-file-pdf-o"></i> PDF Slides</a>
        </li>
        <li>
            <span class="material-name">Lab 6: Surface Hydrology</span>
            <a href="/assets/data/Surface_Hydrology_and_Watershed_Processes.pdf" class="btn-pdf" target="_blank"><i class="fa fa-file-pdf-o"></i> PDF Slides</a>
        </li>
        <li>
            <span class="material-name">Lab 7: Fluvial Processes</span>
            <a href="/assets/data/Fluvial_Processes_and_Landforms.pdf" class="btn-pdf" target="_blank"><i class="fa fa-file-pdf-o"></i> PDF Slides</a>
        </li>
        <li style="margin-top: 20px; border-top: 1px dashed #eee; padding-top: 15px;">
            <span class="material-name">📘 Review Session</span>
            <a href="/assets/data/Review_GEOG201.pdf" class="btn-pdf" target="_blank"><i class="fa fa-file-text-o"></i> Review Doc</a>
        </li>
    </ul>
</div>


<div class="eval-section">
    <h2>Anonymous Evaluations & Feedback</h2>
    
    <div class="score-box">
        Fall 2024 Overall Instructor Score:
        <span class="score-number">4.44 / 5.0</span>
    </div>

    <h3>Selected Student Comments</h3>
    <p style="font-size: 0.9rem; color: #666; margin-bottom: 20px;">(Including positive and constructive feedback)</p>
    
    <div class="comment-grid">
        <div class="student-comment">
            <span class="comment-text">“Mr. Chen was a great TA! He helped me understand the material better. I will miss him.”</span>
        </div>
        <div class="student-comment">
            <span class="comment-text">“I really enjoyed the labs; he made it very interesting.”</span>
        </div>
        <div class="student-comment">
            <span class="comment-text">“He did a good job presenting material and answering questions.”</span>
        </div>
        <div class="student-comment" style="background: #fff3e0; border-color: #ffe0b2;">
            <span class="comment-text">“Sometimes when we would ask questions, it would be difficult to get an answer that we could understand to grasp the material. But definitely knowledgeable on the subject!”</span>
        </div>
    </div>
</div>

<div style="text-align: center; margin-top: 60px; margin-bottom: 40px; border-top: 1px dashed #eee; padding-top: 30px;">
    <p style="font-size: 0.9rem; color: #666; font-style: italic; margin-bottom: 15px;">
        How the semester feels sometimes:
    </p>
        <img src="/assets/img/pexels/teachermemes.jpg" 
         alt="Teaching Meme" 
         style="max-width: 500px; width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">      
    <p style="font-size: 0.8rem; color: #aaa; margin-top: 5px;">(But... I love teaching. For real!)</p>
</div>

