<template>
  <!-- Certificates Page -->
  <div class="certificates-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header text-center py-5">
        <h1 class="page-title">Professional Certificates</h1>
        <p class="page-subtitle text-secondary">
          My continuous learning journey in data science and technology
        </p>
      </div>

      <!-- Certificates Grid -->
      <div class="certificates-section py-5">
        <div class="row g-4">
          <div 
            class="col-lg-6 col-md-6" 
            v-for="certificate in certificates" 
            :key="certificate.id"
          >
            <div class="certificate-card h-100">
              <!-- Certificate Header -->
              <div class="certificate-header">
                <div class="certificate-icon">
                  <i class="cert-emoji">{{ certificate.icon }}</i>
                </div>
                <div class="certificate-badge" :class="certificate.badgeClass">
                  {{ certificate.type }}
                </div>
              </div>

              <!-- Certificate Content -->
              <div class="certificate-content">
                <h3 class="certificate-title">{{ certificate.name }}</h3>
                <p class="certificate-issuer">
                  <strong>Issued by:</strong> {{ certificate.issuer }}
                </p>
                <p class="certificate-date">
                  <strong>Date:</strong> {{ certificate.date }}
                </p>
                <p class="certificate-description">
                  {{ certificate.description }}
                </p>

                <!-- Skills covered -->
                <div class="certificate-skills mb-3">
                  <h5 class="skills-title">Skills Covered:</h5>
                  <div class="skills-tags">
                    <span 
                      class="skill-tag" 
                      v-for="skill in certificate.skills" 
                      :key="skill"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>

                <!-- Certificate Actions -->
                <div class="certificate-actions">
                  <a 
                    v-if="certificate.verifyLink"
                    :href="certificate.verifyLink" 
                    class="btn btn-primary me-2 mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Certificate
                  </a>
                  <a 
                    v-if="certificate.credentialId"
                    href="#" 
                    class="btn btn-outline-secondary mb-2"
                    @click.prevent="copyCredentialId(certificate.credentialId)"
                  >
                    Copy ID: {{ certificate.credentialId }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section py-5">
        <div class="row text-center">
          <div class="col-md-4">
            <div class="stat-item">
              <div class="stat-number">{{ certificateStats.total }}</div>
              <div class="stat-label">Total Certificates</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-item">
              <div class="stat-number">{{ certificateStats.specializations }}</div>
              <div class="stat-label">Specializations</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-item">
              <div class="stat-number">{{ certificateStats.hoursLearning }}</div>
              <div class="stat-label">Hours of Learning</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-section text-center py-5">
        <h3 class="h4 mb-3">Interested in my expertise?</h3>
        <p class="text-secondary mb-4">
          Let's discuss how my certified skills can benefit your projects
        </p>
        <router-link to="/#contact" class="btn btn-primary btn-lg">
          Get In Touch
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Certificate data
const certificates = ref([
  {
    id: 1,
    name: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    date: "March 2023",
    icon: "🤖",
    type: "Specialization",
    badgeClass: "badge-specialization",
    description: "Comprehensive program covering supervised learning, unsupervised learning, and best practices in machine learning.",
    skills: ["Supervised Learning", "Neural Networks", "Unsupervised Learning", "Recommender Systems"],
    verifyLink: "https://coursera.org/verify/specialization/ABC123",
    credentialId: "ML-SPEC-2023-001"
  },
  {
    id: 2,
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "January 2023",
    icon: "🧠",
    type: "Specialization",
    badgeClass: "badge-specialization",
    description: "Advanced deep learning concepts including neural networks, CNNs, RNNs, and sequence models.",
    skills: ["Deep Learning", "TensorFlow", "CNNs", "RNNs", "Keras"],
    verifyLink: "https://coursera.org/verify/specialization/DEF456",
    credentialId: "DL-SPEC-2023-002"
  },
  {
    id: 3,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "September 2022",
    icon: "☁️",
    type: "Certification",
    badgeClass: "badge-certification",
    description: "Foundational understanding of AWS Cloud services, pricing, and basic architecture principles.",
    skills: ["AWS Cloud", "Cloud Computing", "EC2", "S3", "Lambda"],
    verifyLink: "https://aws.amazon.com/verification/GHI789",
    credentialId: "AWS-CCP-2022-003"
  },
  {
    id: 4,
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google (Coursera)",
    date: "June 2022",
    icon: "📊",
    type: "Professional Certificate",
    badgeClass: "badge-professional",
    description: "Comprehensive data analytics program covering data cleaning, analysis, and visualization.",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming", "Data Visualization"],
    verifyLink: "https://coursera.org/verify/professional-cert/JKL012",
    credentialId: "GDA-PROF-2022-004"
  },
  {
    id: 5,
    name: "Python for Data Science and AI",
    issuer: "IBM (Coursera)",
    date: "April 2022",
    icon: "🐍",
    type: "Course Certificate",
    badgeClass: "badge-course",
    description: "Hands-on Python programming for data science applications and artificial intelligence.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    verifyLink: "https://coursera.org/verify/MNO345",
    credentialId: "PY-DS-2022-005"
  },
  {
    id: 6,
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "February 2022",
    icon: "📈",
    type: "Certification",
    badgeClass: "badge-certification",
    description: "Proficiency in creating visualizations and dashboards using Tableau Desktop.",
    skills: ["Tableau", "Data Visualization", "Dashboard Design", "Business Intelligence"],
    verifyLink: "https://tableau.com/verify/PQR678",
    credentialId: "TAB-SPEC-2022-006"
  }
])

// Certificate statistics
const certificateStats = computed(() => ({
  total: certificates.value.length,
  specializations: certificates.value.filter(cert => cert.type === 'Specialization').length,
  hoursLearning: '500+' // Estimated total learning hours
}))

// Copy credential ID to clipboard
const copyCredentialId = async (credentialId) => {
  try {
    await navigator.clipboard.writeText(credentialId)
    // You could add a toast notification here
    alert(`Credential ID copied: ${credentialId}`)
  } catch (err) {
    console.error('Failed to copy credential ID:', err)
  }
}
</script>

<style scoped>
/* Certificates page styles */
.certificates-page {
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

/* Certificate cards */
.certificate-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.certificate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

/* Certificate header */
.certificate-header {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  padding: 1.5rem;
  position: relative;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.certificate-icon {
  font-size: 2.5rem;
}

.cert-emoji {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.certificate-badge {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.badge-specialization {
  background: rgba(16, 185, 129, 0.2);
}

.badge-certification {
  background: rgba(249, 115, 22, 0.2);
}

.badge-professional {
  background: rgba(139, 92, 246, 0.2);
}

.badge-course {
  background: rgba(34, 197, 94, 0.2);
}

/* Certificate content */
.certificate-content {
  padding: 1.5rem;
}

.certificate-title {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.certificate-issuer,
.certificate-date {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.certificate-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* Skills tags */
.skills-title {
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.skill-tag {
  background: var(--accent-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Certificate actions */
.certificate-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.btn {
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.5rem 1.25rem;
}

.btn-primary {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}

.btn-primary:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-outline-secondary {
  border-color: var(--text-secondary);
  color: var(--text-secondary);
}

.btn-outline-secondary:hover {
  background-color: var(--text-secondary);
  border-color: var(--text-secondary);
}

/* Stats section */
.stats-section {
  background: white;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.stat-item {
  padding: 1.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-weight: 500;
}

/* CTA section */
.cta-section {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Responsive design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .certificate-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .certificate-content {
    padding: 1.25rem;
  }
  
  .certificate-actions .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 2rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>
