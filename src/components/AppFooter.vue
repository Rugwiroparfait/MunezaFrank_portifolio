<template>
  <!-- Footer -->
  <footer class="app-footer bg-dark text-light py-4">
    <div class="container">
      <div class="row align-items-center">
        <!-- Copyright -->
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0">
            &copy; {{ currentYear }} <strong>Muneza Frank</strong>. All rights reserved.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-6 text-center text-md-end">
          <div class="footer-links">
            <router-link to="/" class="footer-link">Home</router-link>
            <router-link to="/#about" class="footer-link">About</router-link>
            <router-link to="/#projects" class="footer-link">Projects</router-link>
            <router-link to="/certificates" class="footer-link">Certificates</router-link>
            <router-link to="/resume" class="footer-link">Resume</router-link>
            <router-link to="/#contact" class="footer-link">Contact</router-link>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="footer-divider">

      <!-- Additional Info -->
      <div class="row">
        <div class="col-12 text-center">
          <div class="footer-social mb-3">
            <a 
              href="https://linkedin.com/in/munezafrank" 
              target="_blank" 
              rel="noopener noreferrer"
              class="footer-social-link"
              title="LinkedIn"
            >
              💼
            </a>
            <a 
              href="https://github.com/munezafrank" 
              target="_blank" 
              rel="noopener noreferrer"
              class="footer-social-link"
              title="GitHub"
            >
              🐙
            </a>
            <a 
              href="mailto:muneza.frank@example.com" 
              class="footer-social-link"
              title="Email"
            >
              📧
            </a>
          </div>
          
          <p class="footer-tagline mb-0">
            <small class="text-muted">
              Transforming data into insights • Building the future with analytics
            </small>
          </p>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <button 
      class="back-to-top"
      @click="scrollToTop"
      :class="{ 'visible': showBackToTop }"
      title="Back to top"
    >
      ↑
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Current year for copyright
const currentYear = new Date().getFullYear()

// Back to top button visibility
const showBackToTop = ref(false)

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
}

/**
 * Scroll to top of the page
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

/**
 * Handle scroll events to show/hide back to top button
 */
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Footer styles */
.app-footer {
  background-color: var(--primary-color) !important;
  margin-top: auto;
}

/* Footer links */
.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-link {
  color: #adb5bd;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--accent-color);
  text-decoration: none;
}

/* Footer divider */
.footer-divider {
  border-color: #495057;
  margin: 1.5rem 0;
}

/* Footer social links */
.footer-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.footer-social-link:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
}

/* Footer tagline */
.footer-tagline {
  color: #adb5bd;
}

/* Back to top button */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-links {
    justify-content: center;
    margin-top: 1rem;
  }
  
  .footer-link {
    font-size: 0.85rem;
  }
  
  .back-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .footer-links {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .footer-social {
    gap: 0.75rem;
  }
  
  .footer-social-link {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>
