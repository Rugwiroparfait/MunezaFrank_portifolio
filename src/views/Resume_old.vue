<template>
  <!-- Resume Page -->
  <div class="resume-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header text-center py-5">
        <h1 class="page-title">Professional Resume</h1>
        <p class="page-subtitle text-secondary">
          Comprehensive overview of my professional experience and qualifications
        </p>
        <div class="resume-actions mt-4">
          <button class="btn btn-primary me-3" @click="downloadResume">
            📄 Download PDF
          </button>
          <button class="btn btn-outline-primary" @click="printResume">
            🖨️ Print Resume
          </button>
        </div>
      </div>

      <!-- Resume Content -->
      <div class="resume-content">
        <div class="row">
          <!-- Main Resume Column -->
          <div class="col-lg-8">
            <!-- Professional Summary -->
            <section class="resume-section">
              <h2 class="section-title">Professional Summary</h2>
              <div class="section-content">
                <p class="lead">
                  Experienced Data Scientist with 5+ years of expertise in machine learning, 
                  statistical analysis, and data visualization. Proven track record of delivering 
                  data-driven solutions that drive business growth and operational efficiency.
                </p>
                <p>
                  Specialized in building predictive models, implementing ML pipelines, and 
                  translating complex data insights into actionable business strategies. 
                  Strong background in Python, R, SQL, and cloud technologies.
                </p>
              </div>
            </section>

            <!-- Professional Experience -->
            <section class="resume-section">
              <h2 class="section-title">Professional Experience</h2>
              <div class="section-content">
                <div 
                  class="experience-item" 
                  v-for="experience in professionalExperience" 
                  :key="experience.id"
                >
                  <div class="experience-header">
                    <h3 class="position-title">{{ experience.position }}</h3>
                    <div class="company-info">
                      <span class="company-name">{{ experience.company }}</span>
                      <span class="employment-period">{{ experience.period }}</span>
                    </div>
                  </div>
                  <div class="experience-description">
                    <ul>
                      <li v-for="achievement in experience.achievements" :key="achievement">
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>
                  <div class="experience-technologies">
                    <span 
                      class="tech-tag" 
                      v-for="tech in experience.technologies" 
                      :key="tech"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Projects -->
            <section class="resume-section">
              <h2 class="section-title">Featured Projects</h2>
              <div class="section-content">
                <div 
                  class="project-item" 
                  v-for="project in featuredProjects" 
                  :key="project.id"
                >
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-description">{{ project.description }}</p>
                  <div class="project-technologies">
                    <span 
                      class="tech-tag" 
                      v-for="tech in project.technologies" 
                      :key="tech"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Contact Information -->
            <section class="resume-sidebar-section">
              <h3 class="sidebar-title">Contact</h3>
              <div class="sidebar-content">
                <div class="contact-item">
                  <i class="contact-icon">📧</i>
                  <span>muneza.frank@example.com</span>
                </div>
                <div class="contact-item">
                  <i class="contact-icon">📱</i>
                  <span>+250 123 456 789</span>
                </div>
                <div class="contact-item">
                  <i class="contact-icon">🌐</i>
                  <span>linkedin.com/in/munezafrank</span>
                </div>
                <div class="contact-item">
                  <i class="contact-icon">📍</i>
                  <span>Kigali, Rwanda</span>
                </div>
              </div>
            </section>

            <!-- Education -->
            <section class="resume-sidebar-section">
              <h3 class="sidebar-title">Education</h3>
              <div class="sidebar-content">
                <div 
                  class="education-item" 
                  v-for="education in educationHistory" 
                  :key="education.id"
                >
                  <h4 class="degree-title">{{ education.degree }}</h4>
                  <p class="institution">{{ education.institution }}</p>
                  <p class="education-period">{{ education.period }}</p>
                  <p class="gpa" v-if="education.gpa">GPA: {{ education.gpa }}</p>
                </div>
              </div>
            </section>

            <!-- Core Skills -->
            <section class="resume-sidebar-section">
              <h3 class="sidebar-title">Core Skills</h3>
              <div class="sidebar-content">
                <div class="skills-category" v-for="category in skillsCategories" :key="category.name">
                  <h5 class="skills-category-title">{{ category.name }}</h5>
                  <div class="skills-list">
                    <span class="skill-item" v-for="skill in category.skills" :key="skill">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Certifications Summary -->
            <section class="resume-sidebar-section">
              <h3 class="sidebar-title">Certifications</h3>
              <div class="sidebar-content">
                <div 
                  class="certification-item" 
                  v-for="cert in certificationsSummary" 
                  :key="cert.id"
                >
                  <h5 class="cert-name">{{ cert.name }}</h5>
                  <p class="cert-issuer">{{ cert.issuer }}</p>
                  <p class="cert-date">{{ cert.date }}</p>
                </div>
                <router-link to="/certificates" class="btn btn-sm btn-outline-primary mt-3">
                  View All Certificates
                </router-link>
              </div>
            </section>

            <!-- Languages -->
            <section class="resume-sidebar-section">
              <h3 class="sidebar-title">Languages</h3>
              <div class="sidebar-content">
                <div 
                  class="language-item" 
                  v-for="language in languages" 
                  :key="language.name"
                >
                  <div class="language-info">
                    <span class="language-name">{{ language.name }}</span>
                    <span class="language-level">{{ language.level }}</span>
                  </div>
                  <div class="language-progress">
                    <div 
                      class="progress-bar" 
                      :style="{ width: language.proficiency + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Professional Experience Data
const professionalExperience = ref([
  {
    id: 1,
    position: "Senior Data Scientist",
    company: "TechCorp Solutions",
    period: "2021 - Present",
    achievements: [
      "Led a team of 3 data scientists in developing ML models that increased customer retention by 25%",
      "Implemented automated data pipelines reducing manual processing time by 80%",
      "Designed and deployed real-time recommendation system serving 100K+ daily users",
      "Mentored junior team members and established best practices for ML model deployment"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes"]
  },
  {
    id: 2,
    position: "Data Scientist",
    company: "DataInsights Inc.",
    period: "2019 - 2021",
    achievements: [
      "Developed predictive models for sales forecasting with 92% accuracy",
      "Created interactive dashboards reducing report generation time by 60%",
      "Collaborated with product team to implement A/B testing framework",
      "Optimized database queries improving data processing speed by 40%"
    ],
    technologies: ["Python", "R", "Tableau", "SQL", "Apache Spark"]
  },
  {
    id: 3,
    position: "Junior Data Analyst",
    company: "Analytics Pro",
    period: "2018 - 2019",
    achievements: [
      "Analyzed customer behavior data to identify key retention factors",
      "Built automated reporting system for executive dashboard",
      "Performed statistical analysis for marketing campaign optimization",
      "Supported senior analysts in machine learning model development"
    ],
    technologies: ["Python", "SQL", "Excel", "PowerBI", "SPSS"]
  }
])

// Featured Projects
const featuredProjects = ref([
  {
    id: 1,
    title: "Customer Churn Prediction System",
    description: "Built an end-to-end ML pipeline to predict customer churn with 94% accuracy, deployed using Docker and AWS.",
    technologies: ["Python", "Scikit-learn", "Docker", "AWS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Real-time Sales Analytics Dashboard",
    description: "Developed interactive dashboard for real-time sales monitoring and forecasting using modern web technologies.",
    technologies: ["Python", "Plotly", "Flask", "Redis", "Tableau"]
  },
  {
    id: 3,
    title: "NLP-based Sentiment Analysis Tool",
    description: "Created sentiment analysis system for social media monitoring with 89% accuracy using deep learning models.",
    technologies: ["Python", "TensorFlow", "NLTK", "MongoDB", "FastAPI"]
  }
])

// Education History
const educationHistory = ref([
  {
    id: 1,
    degree: "M.Sc. Data Science",
    institution: "University of Rwanda",
    period: "2016 - 2018",
    gpa: "3.8/4.0"
  },
  {
    id: 2,
    degree: "B.Sc. Computer Science",
    institution: "University of Rwanda",
    period: "2012 - 2016",
    gpa: "3.6/4.0"
  }
])

// Skills Categories
const skillsCategories = ref([
  {
    name: "Programming",
    skills: ["Python", "R", "SQL", "JavaScript", "Scala"]
  },
  {
    name: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"]
  },
  {
    name: "Data Visualization",
    skills: ["Tableau", "Power BI", "Plotly", "Matplotlib"]
  },
  {
    name: "Cloud & Tools",
    skills: ["AWS", "Docker", "Git", "Jupyter", "Apache Spark"]
  }
])

// Certifications Summary
const certificationsSummary = ref([
  {
    id: 1,
    name: "ML Specialization",
    issuer: "Stanford University",
    date: "2023"
  },
  {
    id: 2,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022"
  },
  {
    id: 3,
    name: "Google Data Analytics",
    issuer: "Google",
    date: "2022"
  }
])

// Languages
const languages = ref([
  { name: "English", level: "Fluent", proficiency: 95 },
  { name: "French", level: "Professional", proficiency: 85 },
  { name: "Kinyarwanda", level: "Native", proficiency: 100 },
  { name: "Swahili", level: "Conversational", proficiency: 70 }
])

// Resume Actions
const downloadResume = () => {
  // In a real application, this would trigger a PDF download
  alert('Resume PDF download feature would be implemented here')
}

const printResume = () => {
  window.print()
}
</script>

<style scoped>
/* Resume page styles */
.resume-page {
  padding-top: 80px; /* Account for fixed header */
  min-height: 100vh;
  background-color: var(--background);
}

/* Page header */
.page-header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  margin: -80px 0 0 0;
  padding-top: 120px !important;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.resume-actions .btn {
  border-radius: 25px;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
}

/* Resume content */
.resume-content {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin: 2rem 0;
  overflow: hidden;
}

/* Main sections */
.resume-section {
  padding: 2rem;
  border-bottom: 1px solid #e9ecef;
}

.resume-section:last-child {
  border-bottom: none;
}

.section-title {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent-color);
}

.section-content {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Experience items */
.experience-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--background);
  border-radius: 10px;
  border-left: 4px solid var(--secondary-color);
}

.experience-item:last-child {
  margin-bottom: 0;
}

.experience-header {
  margin-bottom: 1rem;
}

.position-title {
  color: var(--primary-color);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.company-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.company-name {
  font-weight: 500;
  color: var(--text-primary);
}

.employment-period {
  color: var(--text-secondary);
  font-size: 0.9rem;
  background: var(--accent-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-weight: 500;
}

.experience-description ul {
  margin-bottom: 1rem;
}

.experience-description li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

/* Project items */
.project-item {
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  background: var(--background);
  border-radius: 10px;
  border-left: 4px solid var(--accent-color);
}

.project-title {
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

/* Technology tags */
.experience-technologies,
.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--secondary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Sidebar sections */
.resume-sidebar-section {
  background: white;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.sidebar-title {
  background: var(--primary-color);
  color: white;
  padding: 1rem 1.5rem;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.sidebar-content {
  padding: 1.5rem;
}

/* Contact items */
.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
}

.contact-icon {
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

/* Education items */
.education-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.education-item:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.degree-title {
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.institution {
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.education-period,
.gpa {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

/* Skills */
.skills-category {
  margin-bottom: 1.5rem;
}

.skills-category-title {
  color: var(--primary-color);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-item {
  background: var(--background);
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  border: 1px solid #e9ecef;
}

/* Certification items */
.certification-item {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.certification-item:last-of-type {
  border-bottom: none;
}

.cert-name {
  color: var(--primary-color);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.cert-issuer {
  color: var(--text-primary);
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
}

.cert-date {
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin-bottom: 0;
}

/* Language items */
.language-item {
  margin-bottom: 1rem;
}

.language-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.language-name {
  color: var(--text-primary);
  font-weight: 500;
}

.language-level {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.language-progress {
  background: #e9ecef;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  background: var(--accent-color);
  height: 100%;
  transition: width 0.3s ease;
}

/* Print styles */
@media print {
  .page-header {
    background: none !important;
    color: var(--text-primary) !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  
  .resume-actions {
    display: none !important;
  }
  
  .resume-content {
    box-shadow: none !important;
    margin: 0 !important;
  }
  
  .resume-sidebar-section {
    box-shadow: none !important;
    break-inside: avoid;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .resume-section {
    padding: 1.5rem;
  }
  
  .company-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .experience-technologies,
  .project-technologies {
    margin-top: 1rem;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 2rem;
  }
  
  .resume-section {
    padding: 1.25rem;
  }
  
  .sidebar-content {
    padding: 1.25rem;
  }
}
</style>
