<template>
  <!-- Navigation Header -->
  <header class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
    <div class="container">
      <!-- Brand/Logo -->
      <router-link class="navbar-brand fw-bold" to="/">
        <span class="text-primary">Muneza</span> Frank
      </router-link>

      <!-- Mobile toggle button -->
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        @click="toggleMobileMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" :class="{ active: $route.path === '/' }">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#about" @click="scrollToSection('about')" v-if="$route.path === '/'">
              About
            </a>
            <router-link class="nav-link" to="/#about" v-else>About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#projects" @click="scrollToSection('projects')" v-if="$route.path === '/'">
              Projects
            </a>
            <router-link class="nav-link" to="/#projects" v-else>Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/certificates" :class="{ active: $route.path === '/certificates' }">
              Certificates
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resume" :class="{ active: $route.path === '/resume' }">
              Resume
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contact" @click="scrollToSection('contact')" v-if="$route.path === '/'">
              Contact
            </a>
            <router-link class="nav-link" to="/#contact" v-else>Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Mobile menu state
const mobileMenuOpen = ref(false)

/**
 * Toggle mobile menu visibility
 */
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

/**
 * Smooth scroll to specific section
 * @param {string} sectionId - The ID of the section to scroll to
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80 // Account for fixed header
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
  // Close mobile menu after clicking
  mobileMenuOpen.value = false
}
</script>

<style scoped>
/* Custom navbar styles */
.navbar {
  transition: all 0.3s ease;
  padding: 1rem 0;
}

.navbar-brand {
  font-size: 1.5rem;
  text-decoration: none;
}

.navbar-brand:hover {
  text-decoration: none;
}

.text-primary {
  color: var(--secondary-color) !important;
}

.nav-link {
  font-weight: 500;
  color: var(--text-primary) !important;
  transition: color 0.3s ease;
  margin: 0 0.5rem;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--secondary-color) !important;
}

/* Active link styling */
.nav-link.active {
  color: var(--secondary-color) !important;
  font-weight: 600;
}

.router-link-active {
  color: var(--secondary-color) !important;
  font-weight: 600;
}

/* Mobile responsiveness */
@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
    margin-top: 1rem;
  }
  
  .nav-item {
    margin: 0.25rem 0;
  }
}
</style>
