<template>
  <!-- Hero Section -->
  <section id="home" class="hero-section d-flex align-items-center min-vh-100">
    <div class="container">
      <div class="row align-items-center">
        <!-- Hero Content -->
        <div class="col-lg-8 mx-auto text-center">
          <div class="hero-content">
            <!-- Greeting -->
            <p class="lead text-muted mb-3 fade-in-up">Hello, I'm</p>
            
            <!-- Name -->
            <h1 class="display-3 fw-bold mb-3 fade-in-up" style="animation-delay: 0.2s;">
              <span class="text-primary">Muneza</span> Frank
            </h1>
            
            <!-- Profession -->
            <h2 class="h3 text-secondary mb-4 fade-in-up" style="animation-delay: 0.4s;">
              Data Scientist & Analytics Expert
            </h2>
            
            <!-- Short Introduction -->
            <p class="lead mb-5 text-muted fade-in-up" style="animation-delay: 0.6s;">
              Passionate about transforming data into actionable insights. 
              I specialize in machine learning, statistical analysis, and data visualization 
              to help businesses make data-driven decisions.
            </p>
            
            <!-- Call to Action Buttons -->
            <div class="hero-actions fade-in-up" style="animation-delay: 0.8s;">
              <a href="#projects" class="btn btn-custom me-3 mb-2" @click="scrollToSection('projects')">
                View My Work
              </a>
              <a href="#contact" class="btn btn-outline-primary mb-2" @click="scrollToSection('contact')">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Down Indicator -->
      <div class="scroll-indicator text-center">
        <a href="#about" @click="scrollToSection('about')" class="text-muted">
          <i class="scroll-arrow">↓</i>
          <p class="small">Scroll Down</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
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
</script>

<style scoped>
/* Hero section styles */
.hero-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding-top: 80px; /* Account for fixed header */
  position: relative;
  overflow: hidden;
}

/* Hero content animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Typography enhancements */
.display-3 {
  font-weight: 700;
  line-height: 1.2;
}

.text-primary {
  color: var(--secondary-color) !important;
}

.text-secondary {
  color: var(--primary-color) !important;
}

/* Button styling */
.btn-custom {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
}

.btn-custom:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-outline-primary {
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  padding: 0.75rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.btn-outline-primary:hover {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  color: white;
  transform: translateY(-2px);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 100px;
  }
  
  .display-3 {
    font-size: 2.5rem;
  }
  
  .hero-actions .btn {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .hero-actions .me-3 {
    margin-right: 0 !important;
  }
}

@media (max-width: 576px) {
  .display-3 {
    font-size: 2rem;
  }
  
  .lead {
    font-size: 1rem;
  }
}
</style>
