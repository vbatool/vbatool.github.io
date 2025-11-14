---
layout: page
title: "Research"         # hide the default left-aligned page title
nav_title: Research
permalink: /projects/
description: ""    # hide the default left-aligned description
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: true
---

<style>
  /* Hide any site/page header/title elements on this page only */
  /* covers many theme variations; uses !important to override other rules */
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
</style>

<div class="featured-header text-center my-5">
  <h1 class="featured-title">Featured Projects</h1>
  <hr class="featured-hr">
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {% comment %} category heading removed to avoid stray label in header area {% endcomment %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid project=project%}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid project=project%}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
