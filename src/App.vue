<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div id="app">
    <!-- Navigation Header -->
    <AppHeader />
    
    <!-- Main Content - Router View -->
    <main>
      <router-view />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* CSS Variables for consistent design */
:root {
  /* Professional Color Palette */
  --primary-color: #1E40AF;
  --secondary-color: #2563EB;
  --accent-color: #10B981;
  --background: #F9FAFB;
  --text-primary: #111827;
  --text-secondary: #6B7280;
  
  /* Legacy variable mappings for backward compatibility */
  --text-light: #F9FAFB;
  --text-dark: #111827;
  --background-light: #ffffff;
  --background-dark: #1E40AF;
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
  color: var(--text-primary);
  background-color: var(--background);
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

/* Main layout */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Responsive utilities */
@media (max-width: 768px) {
  :root {
    --section-padding: 2rem 0;
  }
}
</style>
