<template>
  <!-- Resume Page -->
  <div class="resume-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header text-center py-5">
        <h1 class="page-title">My Resume</h1>
        <p class="page-subtitle">
          Professional experience and qualifications
        </p>
        <div class="resume-actions mt-4">
          <a 
            :href="resumePdfUrl" 
            download="Muneza_Frank_Resume.pdf"
            class="btn btn-primary me-3"
          >
            📄 Download Resume PDF
          </a>
          <button 
            class="btn btn-outline-primary" 
            @click="toggleViewer"
            v-if="!showInlineViewer"
          >
            👁️ View Resume
          </button>
          <button 
            class="btn btn-secondary" 
            @click="toggleViewer"
            v-else
          >
            ✕ Close Viewer
          </button>
        </div>
      </div>

      <!-- Resume PDF Viewer -->
      <div class="resume-viewer" v-if="showInlineViewer">
        <div class="pdf-container">
          <embed 
            :src="resumePdfUrl" 
            type="application/pdf" 
            class="pdf-embed"
          />
          <!-- Fallback for browsers that don't support PDF embedding -->
          <div class="pdf-fallback text-center" v-if="!pdfSupported">
            <div class="fallback-content">
              <h3>PDF Viewer Not Supported</h3>
              <p class="text-secondary mb-4">
                Your browser doesn't support PDF viewing. Please download the resume to view it.
              </p>
              <a 
                :href="resumePdfUrl" 
                download="Muneza_Frank_Resume.pdf"
                class="btn btn-primary"
              >
                📄 Download Resume PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Resume Summary Card -->
      <div class="resume-summary mt-5" v-if="!showInlineViewer">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="summary-card">
              <h2 class="summary-title">Resume Overview</h2>
              <p class="summary-description text-secondary">
                Professional resume showcasing my experience, education, skills, and achievements. 
                Click "View Resume" above to see the full document, or download the PDF for offline viewing.
              </p>
              
              <div class="resume-highlights mt-4">
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="highlight-item">
                      <div class="highlight-icon">🎓</div>
                      <h4>Education</h4>
                      <p>Academic background and certifications</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="highlight-item">
                      <div class="highlight-icon">💼</div>
                      <h4>Experience</h4>
                      <p>Professional work history and achievements</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="highlight-item">
                      <div class="highlight-icon">🛠️</div>
                      <h4>Skills</h4>
                      <p>Technical and professional competencies</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="highlight-item">
                      <div class="highlight-icon">🏆</div>
                      <h4>Achievements</h4>
                      <p>Notable accomplishments and recognitions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Resume PDF URL from public folder
const resumePdfUrl = ref('/resume/Resume.pdf')

// Inline viewer state
const showInlineViewer = ref(false)
const pdfSupported = ref(true)

/**
 * Toggle the inline PDF viewer
 */
const toggleViewer = () => {
  showInlineViewer.value = !showInlineViewer.value
}
</script>

<style scoped>
/* Resume page styles */
.resume-page {
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

.resume-actions .btn {
  border-radius: 25px;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.resume-actions .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.btn-primary {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}

.btn-primary:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-outline-primary {
  border-color: white;
  color: white;
}

.btn-outline-primary:hover {
  background-color: white;
  border-color: white;
  color: var(--primary-color);
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

/* PDF Viewer */
.resume-viewer {
  margin: 2rem 0;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.pdf-container {
  width: 100%;
  height: 80vh;
  min-height: 600px;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.pdf-embed {
  width: 100%;
  height: 100%;
  border: none;
}

.pdf-fallback {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
}

.fallback-content {
  padding: 2rem;
}

/* Resume Summary */
.resume-summary {
  margin-bottom: 3rem;
}

.summary-card {
  background: white;
  border-radius: 15px;
  padding: 3rem 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.summary-title {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.summary-description {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.resume-highlights {
  margin-top: 2rem;
}

.highlight-item {
  text-align: center;
  padding: 1.5rem;
  background: var(--background);
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.highlight-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.highlight-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.highlight-item h4 {
  color: var(--primary-color);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.highlight-item p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .summary-card {
    padding: 2rem 1.5rem;
  }
  
  .pdf-container {
    height: 60vh;
    min-height: 400px;
  }
  
  .resume-actions .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .resume-actions .me-3 {
    margin-right: 0 !important;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 2rem;
  }
  
  .summary-card {
    padding: 1.5rem;
  }
  
  .highlight-item {
    padding: 1rem;
  }
  
  .highlight-icon {
    font-size: 2.5rem;
  }
}
</style>
