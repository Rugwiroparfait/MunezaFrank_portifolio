<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div id="app">
    <!-- Navigation Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- About Section -->
      <AboutSection />
      
      <!-- Projects Section -->
      <ProjectsSection />
      
      <!-- Contact Section -->
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* CSS Variables for consistent design */
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --text-light: #ecf0f1;
  --text-dark: #2c3e50;
  --background-light: #ffffff;
  --background-dark: #34495e;
  --section-padding: 4rem 0;
  --container-max-width: 1200px;
}

/* Smooth scrolling for navigation */
html {
  scroll-behavior: smooth;
}

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
}

/* Container utility */
.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section spacing */
section {
  padding: var(--section-padding);
}

/* Responsive utilities */
@media (max-width: 768px) {
  :root {
    --section-padding: 2rem 0;
  }
}
</style>
