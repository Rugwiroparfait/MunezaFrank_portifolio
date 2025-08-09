<template>
  <!-- Projects Section -->
  <section id="projects" class="projects-section py-5">
    <div class="container">
      <div class="row">
        <!-- Section Header -->
        <div class="col-12 text-center mb-5">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle text-muted">
            A showcase of my data science projects and analytical solutions
          </p>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="row g-4">
        <div class="col-lg-6 col-md-6" v-for="project in projects" :key="project.id">
          <div class="project-card h-100">
            <!-- Project Image/Icon -->
            <div class="project-image">
              <div class="project-icon">
                <i class="project-emoji">{{ project.icon }}</i>
              </div>
              <div class="project-overlay">
                <div class="project-tags">
                  <span class="tag" v-for="tech in project.technologies" :key="tech">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <!-- Project Stats -->
              <div class="project-stats mb-3">
                <div class="stat-item">
                  <small class="text-muted">Duration:</small>
                  <span class="stat-value">{{ project.duration }}</span>
                </div>
                <div class="stat-item">
                  <small class="text-muted">Type:</small>
                  <span class="stat-value">{{ project.type }}</span>
                </div>
              </div>

              <!-- Project Links -->
              <div class="project-actions">
                <a 
                  :href="project.demoLink" 
                  class="btn btn-custom me-2 mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
                <a 
                  :href="project.codeLink" 
                  class="btn btn-outline-primary mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="row mt-5">
        <div class="col-12 text-center">
          <p class="lead text-muted mb-3">
            Interested in seeing more of my work?
          </p>
          <a href="#contact" class="btn btn-custom" @click="scrollToSection('contact')">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Dummy projects data
const projects = ref([
  {
    id: 1,
    title: "Customer Churn Prediction Model",
    description: "Developed a machine learning model to predict customer churn with 92% accuracy using ensemble methods. Implemented feature engineering and deployed the model to production using Flask API.",
    icon: "📊",
    technologies: ["Python", "Scikit-learn", "Flask", "PostgreSQL"],
    duration: "3 months",
    type: "ML Classification",
    demoLink: "https://github.com/munezafrank",
    codeLink: "https://github.com/munezafrank"
  },
  {
    id: 2,
    title: "Sales Forecasting Dashboard",
    description: "Built an interactive dashboard for sales forecasting using time series analysis. Integrated multiple data sources and provided real-time insights for business decision making.",
    icon: "📈",
    technologies: ["Python", "Tableau", "SQL", "AWS"],
    duration: "2 months",
    type: "Time Series",
    demoLink: "https://github.com/munezafrank",
    codeLink: "https://github.com/munezafrank"
  },
  {
    id: 3,
    title: "Market Sentiment Analysis",
    description: "Analyzed social media sentiment to predict stock market trends. Used NLP techniques and deep learning models to process large volumes of text data from multiple platforms.",
    icon: "🧠",
    technologies: ["Python", "TensorFlow", "NLTK", "MongoDB"],
    duration: "4 months",
    type: "NLP & Deep Learning",
    demoLink: "https://github.com/munezafrank",
    codeLink: "https://github.com/munezafrank"
  },
  {
    id: 4,
    title: "Healthcare Data Analytics Platform",
    description: "Designed and implemented a comprehensive analytics platform for healthcare data. Enabled hospitals to track patient outcomes and optimize resource allocation through data-driven insights.",
    icon: "🏥",
    technologies: ["R", "Shiny", "MySQL", "Docker"],
    duration: "6 months",
    type: "Healthcare Analytics",
    demoLink: "https://github.com/munezafrank",
    codeLink: "https://github.com/munezafrank"
  }
])

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
/* Projects section styles */
.projects-section {
  background-color: white;
}

/* Section headers */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: var(--secondary-color);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Project cards */
.project-card {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

/* Project image/icon */
.project-image {
  position: relative;
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-icon {
  font-size: 4rem;
  z-index: 2;
}

.project-emoji {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.1);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: rgba(255,255,255,0.9);
  color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Project content */
.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.project-description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* Project stats */
.project-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-weight: 500;
  color: var(--primary-color);
  font-size: 0.9rem;
}

/* Project actions */
.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.btn-custom {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
}

.btn-custom:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.btn-outline-primary {
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  padding: 0.5rem 1.25rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;
}

.btn-outline-primary:hover {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  color: white;
}

/* Responsive design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .project-content {
    padding: 1.25rem;
  }
  
  .project-stats {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .project-actions .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 576px) {
  .project-image {
    height: 150px;
  }
  
  .project-icon {
    font-size: 3rem;
  }
  
  .project-title {
    font-size: 1.1rem;
  }
}
</style>
