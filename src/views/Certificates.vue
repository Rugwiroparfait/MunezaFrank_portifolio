<template>
  <!-- Certificates Page -->
  <div class="certificates-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header text-center py-5">
        <h1 class="page-title">Professional Certificates</h1>
        <p class="page-subtitle text-secondary">
          My verified professional achievements and continuing education
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
              <!-- Certificate Image -->
              <div class="certificate-image-container">
                <div v-if="certificate.isPdf" class="pdf-preview">
                  <div class="pdf-icon">📄</div>
                  <p class="pdf-label">PDF Certificate</p>
                </div>
                <img 
                  v-else
                  :src="certificate.imageUrl" 
                  :alt="certificate.title"
                  class="certificate-image"
                  @click="openFullView(certificate)"
                />
              </div>

              <!-- Certificate Content -->
              <div class="certificate-content">
                <h3 class="certificate-title">{{ certificate.title }}</h3>
                <p class="certificate-issuer">
                  <strong>Issued by:</strong> {{ certificate.issuer }}
                </p>
                <p class="certificate-description">
                  {{ certificate.description }}
                </p>

                <!-- Certificate Actions -->
                <div class="certificate-actions mt-3">
                  <button 
                    class="btn btn-primary me-2 mb-2"
                    @click="viewCertificate(certificate)"
                  >
                    📋 View Certificate
                  </button>
                  <a 
                    :href="certificate.fileUrl" 
                    :download="certificate.downloadName"
                    class="btn btn-outline-secondary mb-2"
                  >
                    📥 Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certificate Modal -->
      <div v-if="selectedCertificate" class="certificate-modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3>{{ selectedCertificate.title }}</h3>
            <button class="btn-close" @click="closeModal">&times;</button>
          </div>
          <div class="modal-body">
            <div v-if="selectedCertificate.isPdf" class="pdf-viewer">
              <embed 
                :src="selectedCertificate.fileUrl" 
                type="application/pdf"
                class="pdf-embed"
              />
            </div>
            <img 
              v-else
              :src="selectedCertificate.imageUrl" 
              :alt="selectedCertificate.title"
              class="modal-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Real certificates from public folder
const certificates = ref([
  {
    id: 1,
    title: "ALX Venture Founder Academy - Six Week Deep Dive",
    issuer: "ALX",
    description: "Intensive entrepreneurship program focused on building scalable ventures and leadership skills.",
    fileUrl: "/certificates/ALX venture Founder academy_muneza_frank_six_week _deep_dive.jpeg",
    imageUrl: "/certificates/ALX venture Founder academy_muneza_frank_six_week _deep_dive.jpeg",
    downloadName: "ALX_Venture_Founder_Academy_Muneza_Frank.jpeg",
    isPdf: false
  },
  {
    id: 2,
    title: "ALX Professional Foundation for Digital Age",
    issuer: "ALX",
    description: "Comprehensive foundation program preparing professionals for the digital economy and modern workplace.",
    fileUrl: "/certificates/ALX_Munezafrank _professional_foundation_for_digital_age.jpeg",
    imageUrl: "/certificates/ALX_Munezafrank _professional_foundation_for_digital_age.jpeg",
    downloadName: "ALX_Professional_Foundation_Muneza_Frank.jpeg",
    isPdf: false
  },
  {
    id: 3,
    title: "Sustainable Food Value Chains for Nutrition",
    issuer: "Academic Institution",
    description: "Certificate in sustainable agriculture and nutrition-focused food systems development.",
    fileUrl: "/certificates/sustainable_food_value_chains_for_nutrition_muneza_frank.pdf",
    imageUrl: null,
    downloadName: "Sustainable_Food_Value_Chains_Muneza_Frank.pdf",
    isPdf: true
  }
])

// Modal functionality
const selectedCertificate = ref(null)

const viewCertificate = (certificate) => {
  selectedCertificate.value = certificate
}

const openFullView = (certificate) => {
  selectedCertificate.value = certificate
}

const closeModal = () => {
  selectedCertificate.value = null
}
</script>

<style scoped>
/* Certificates page styles */
.certificates-page {
  padding-top: 80px;
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

/* Certificate image container */
.certificate-image-container {
  height: 250px;
  overflow: hidden;
  position: relative;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.certificate-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.certificate-image:hover {
  transform: scale(1.05);
}

.pdf-preview {
  text-align: center;
  color: var(--text-secondary);
}

.pdf-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.pdf-label {
  font-weight: 500;
  margin: 0;
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
  line-height: 1.4;
}

.certificate-issuer {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.certificate-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
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

/* Certificate Modal */
.certificate-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 15px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--secondary-color);
  color: white;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
}

.btn-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.btn-close:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.modal-body {
  padding: 0;
  max-height: 70vh;
  overflow: auto;
}

.modal-image {
  width: 100%;
  height: auto;
  display: block;
}

.pdf-viewer {
  width: 100%;
  height: 70vh;
}

.pdf-embed {
  width: 100%;
  height: 100%;
  border: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .certificate-content {
    padding: 1.25rem;
  }
  
  .certificate-actions .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .modal-content {
    max-width: 95vw;
    max-height: 95vh;
  }
  
  .pdf-viewer {
    height: 60vh;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 2rem;
  }
  
  .certificate-image-container {
    height: 200px;
  }
}
</style>