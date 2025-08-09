<template>
  <!-- About Section -->
  <section id="about" class="about-section py-5">
    <div class="container">
      <div class="row">
        <!-- Section Header -->
        <div class="col-12 text-center mb-5">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle text-muted">
            Get to know more about my background and expertise
          </p>
        </div>
      </div>

      <div class="row align-items-center">
        <!-- About Content -->
        <div class="col-lg-8 mx-auto">
          <div class="about-content">
            <!-- Introduction -->
            <div class="mb-4">
              <h3 class="h4 mb-3">My Journey in Data Science</h3>
              <p class="lead">
                I'm a passionate data scientist with over 2 years of experience in transforming 
                complex data into actionable business insights. My expertise spans across machine 
                learning, statistical analysis, and data visualization.
              </p>
              <p>
                I am student in  Data Science and have worked with diverse industries 
                including finance, healthcare, and e-commerce. I'm constantly learning and staying 
                updated with the latest technologies and methodologies in the rapidly evolving 
                field of data science.
              </p>
            </div>

            <!-- Skills Grid -->
            <div class="skills-section mb-4">
              <h3 class="h4 mb-4">Core Skills & Technologies</h3>
              <div class="row g-3">
                <!-- Programming Languages -->
                <div class="col-md-6">
                  <div class="skill-category">
                    <h5 class="skill-category-title">Programming Languages</h5>
                    <div class="skills-list">
                      <span class="skill-tag" v-for="skill in programmingSkills" :key="skill">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Machine Learning -->
                <div class="col-md-6">
                  <div class="skill-category">
                    <h5 class="skill-category-title">Machine Learning</h5>
                    <div class="skills-list">
                      <span class="skill-tag" v-for="skill in mlSkills" :key="skill">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Data Visualization -->
                <div class="col-md-6">
                  <div class="skill-category">
                    <h5 class="skill-category-title">Data Visualization</h5>
                    <div class="skills-list">
                      <span class="skill-tag" v-for="skill in visualizationSkills" :key="skill">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Databases & Tools -->
                <div class="col-md-6">
                  <div class="skill-category">
                    <h5 class="skill-category-title">Databases & Tools</h5>
                    <div class="skills-list">
                      <span class="skill-tag" v-for="skill in databaseSkills" :key="skill">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Achievements/Highlights -->
            <div class="achievements-section">
              <h3 class="h4 mb-4">Key Achievements</h3>
              <div class="row g-4">
                <div class="col-md-4 text-center" v-for="achievement in achievements" :key="achievement.number">
                  <div class="achievement-item">
                    <div class="achievement-number">{{ achievement.number }}</div>
                    <div class="achievement-label">{{ achievement.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Skills data organized by categories
const programmingSkills = ref([
  'Python', 'R', 'SQL', 'JavaScript', 'Scala'
])

const mlSkills = ref([
  'Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Keras'
])

const visualizationSkills = ref([
  'Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'
])

const databaseSkills = ref([
  'PostgreSQL', 'MongoDB', 'Apache Spark', 'Hadoop', 'AWS'
])

// Achievement highlights
const achievements = ref([
  {
    number: '50+',
    label: 'Projects Completed'
  },
  {
    number: '5+',
    label: 'Years Experience'
  },
  {
    number: '15+',
    label: 'Happy Clients'
  }
])
</script>

<style scoped>
/* About section styles */
.about-section {
  background-color: #f8f9fa;
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

/* About content */
.about-content {
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Skills section */
.skill-category {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  height: 100%;
}

.skill-category-title {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: var(--secondary-color);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
}

/* Achievements section */
.achievements-section {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.achievement-item {
  padding: 1rem;
}

.achievement-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.achievement-label {
  color: var(--text-dark);
  font-weight: 500;
  font-size: 0.9rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .about-content {
    padding: 2rem 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .skill-category {
    margin-bottom: 1.5rem;
  }
  
  .achievement-number {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .about-content {
    padding: 1.5rem 1rem;
  }
  
  .achievements-section {
    padding: 1.5rem 1rem;
  }
}
</style>
