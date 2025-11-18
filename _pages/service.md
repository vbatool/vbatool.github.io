---
layout: page
permalink: /service/
title: "Service"
nav_title: Service
description: ""
nav: true
display_categories: [work, fun]
nav_order: 6
---

<style>
  /* Hide any site/page header/title elements on this page only */
  header.page-header,
  .page-header,
  .entry-header,
  .post-header,
  .archive-header,
  .page-title,
  h1.page-title,
  .page .page-header,
  .page h1,
  .page .lead,
  .page .description,
  .page .subtitle {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }

  /* Force stacked layout: each card occupies its own row */
  .service-cards { max-width: 920px; margin: 0 auto; padding: 0 1rem; }
  .service-cards .row { display: block !important; margin-left: 0 !important; margin-right: 0 !important; }
  .service-cards .row > [class*="col-"] {
    flex: 0 0 100% !important;
    max-width: 100% !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    box-sizing: border-box;
  }

  /* Card visuals to match projects page */
  .service-card {
    background: #ffffff !important;
    border-radius: 12px !important;
    padding: 28px 30px !important;
    border: 1px solid rgba(15, 23, 42, 0.06) !important;
    box-shadow: 0 10px 30px rgba(12, 20, 34, 0.06) !important;
    margin: 22px 0 !important;
    display: flex !important;
    flex-direction: column;
    height: auto;
  }

  .service-icon {
    background: rgba(250, 196, 155, 0.12);
    color: #3f1b06ff;
    width: 44px;
    height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 20px;
    margin-bottom: 14px;
  }

  .service-card-title {
    font-family: "Playfair Display", Georgia, serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #0f1724;
    margin: 0 0 10px;
  }

  .service-card-desc {
    color: #374151;
    line-height: 1.45;
    margin-bottom: 14px;
    margin-bottom: 8px;
    font-size: .98rem;
  }

  .service-card-links { margin: 0; padding: 0; list-style: none; }
  .service-card-links li { margin-bottom: .6rem; }
  .service-card-links a {
    color: #bb6635ff;
    text-decoration: none;
    font-weight: 600;
  }
  .service-card-links a:hover { text-decoration: underline; }

  /* Intro/title sizing */
  .service-header { margin-top: 5.5rem; text-align: center; }
  .service-title { font-family: "Playfair Display", Georgia, serif; font-size: 3.4rem; color: #0f1724; margin-bottom: .4rem; }
  .service-intro-text { max-width: 900px; margin: 0 auto 1.75rem; color: #4b5563; font-size: 1.03rem; line-height: 1.7; }

  /* Responsive tweaks */
  @media (max-width: 767px) {
    .service-card { padding: 22px !important; }
    .service-title { font-size: 2.2rem !important; }
    .service-intro-text { font-size: .96rem !important; }
    .service-icon { width: 40px; height: 40px; font-size: 18px; }
  }
</style>

<div class="service-header text-center my-5">
  <h1 class="service-title">Service</h1>
  <hr class="service-hr">
</div>

<!-- <div class="service-intro text-center mb-5">
  <p class="service-intro-text">
    I believe in giving back to the communities that have supported my growth. 
    Through mentorship, teaching, and volunteer work, I aim to create 
    opportunities for others and contribute to a more inclusive, collaborative world.
  </p>
</div> -->

<div class="service-cards">
  <div class="row g-4">

    <!-- Teaching Card -->
    <div class="col-12 col-md-4">
      <div class="service-card">
        <div class="service-icon">
          <i class="fas fa-book-open"></i>
        </div>
        <h3 class="service-card-title">Teaching Experience</h3>
        <p class="service-card-desc">
          <strong> Head TA | Dartmouth College </strong>
        </p>
        
        <p class="service-card-desc">
            CS31 - Algorithms | Spring 2025 (Prof. Siddhartha Jayanti) 
        </p>
        
        <p class="service-card-desc">
            CS74 - Introduction to Statistical Analysis & Machine Learning | Fall 2024 (Prof. Sarah Masud Preum) 
        </p>
        
        <p class="service-card-desc">
            CS67 - Introduction to Human-Computer Interaction | Spring 2023 (Prof. Temiloluwa O. Prioleau) 
        </p>
<!--         
        <p class="service-card-desc">
            CS74 - Introduction to Statistical Analysis & Machine Learning | Fall 2024 (Prof. Sarah Masud Preum) 
        </p>
         -->
        <p class="service-card-desc">
            CS31 - Algorithms | Winter 2023 (Prof. Hsien-Chih Chang) 
        </p>

        <p class="service-card-desc">
            CS10 - Problem Solving via Object Oriented Programming | Winter 2023 (Prof. Alberto Quattrini Li) 
        </p>
        
      </div>
    </div>


    <!-- Mentorship Card -->
    <div class="col-12 col-md-4">
      <div class="service-card">
        <div class="service-icon">
          <i class="fas fa-handshake"></i>
        </div>
        <h3 class="service-card-title">Student Mentorship</h3>
       
        <p class="service-card-desc">
          2025 - <i>present</i> | <a href="https://www.linkedin.com/in/priyanshisethi/">Priyanshi Sethi</a> | Masters of Engineering Management (Dartmouth College)
        </p>
        <p class="service-card-desc">
          2024 - <i>present</i> | <a href="https://www.linkedin.com/in/brendawaiya/">Winnie Brenda Waiya</a> | BA in Computer Science (Dartmouth College)
        </p>
        <p class="service-card-desc">
          2025 | <a href="https://www.linkedin.com/in/oseizokun/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B1m9Q6%2BOpQIGSYRlXCQDk0w%3D%3D">Ose Izokun</a> | Master of Engineering - MEng (Dartmouth College) 
        </p>
        <p class="service-card-desc">
          2024 | Aarnav Aggarwal | MS in Computer Science (Dartmouth College)
        </p>
        <p class="service-card-desc">
          2024 | <a href="https://www.linkedin.com/in/chloe-buschmann-4b929a237/">Chloe Buschmann</a> | BA in Engineering Physics (Dartmouth College)
        </p>
        <!-- <ul class="service-card-links">
          <li><a href="#mentorship-programs">View Mentorship Programs</a></li>
          <li><a href="#apply-mentorship">Apply for Mentorship</a></li>
        </ul> -->
      </div>
    </div>



    <!-- Volunteer Work Card -->
    <div class="col-12 col-md-4">
      <div class="service-card">
        <div class="service-icon">
          <i class="fas fa-heart"></i>
        </div>
        <h3 class="service-card-title">Volunteer</h3>
        
        <p class="service-card-desc">
          2025 | Volunteer to peer-review submissions at  <a href="https://uxpa.org/">UXPA International</a> conferences
        </p>

        <p class="service-card-desc">
          2023 - <i>present</i> | STEM Professional pen pal for <a href="https://prescientist.org/">Letters to a Pre-Scientist</a>
        </p>
        <p class="service-card-desc">
          2024 | Student Volunteer at <a href="https://cscw.acm.org/2024/">CSCW</a> 
        </p>
        <!-- <ul class="service-card-links">
          <li><a href="#volunteer-opportunities">Find Volunteer Opportunities</a></li>
          <li><a href="#donate">Donate</a></li>
        </ul> -->
      </div>
    </div>
  </div>
</div>

