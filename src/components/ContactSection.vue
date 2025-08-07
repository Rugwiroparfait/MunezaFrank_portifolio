<template>
  <!-- Contact Section -->
  <section id="contact" class="contact-section py-5">
    <div class="container">
      <div class="row">
        <!-- Section Header -->
        <div class="col-12 text-center mb-5">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle text-muted">
            Let's discuss how we can work together on your next data project
          </p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <!-- Contact Cards -->
          <div class="row g-4 mb-5">
            <!-- Email Card -->
            <div class="col-md-6">
              <div class="contact-card text-center h-100">
                <div class="contact-icon">
                  <i class="contact-emoji">📧</i>
                </div>
                <h4 class="contact-title">Email Me</h4>
                <p class="contact-description">
                  Drop me a line and I'll get back to you as soon as possible
                </p>
                <a href="mailto:muneza.frank@example.com" class="contact-link">
                  muneza.frank@example.com
                </a>
              </div>
            </div>

            <!-- Phone Card -->
            <div class="col-md-6">
              <div class="contact-card text-center h-100">
                <div class="contact-icon">
                  <i class="contact-emoji">📱</i>
                </div>
                <h4 class="contact-title">Call Me</h4>
                <p class="contact-description">
                  Available for calls during business hours (9 AM - 6 PM)
                </p>
                <a href="tel:+250123456789" class="contact-link">
                  +250 123 456 789
                </a>
              </div>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="social-section text-center mb-5">
            <h3 class="h4 mb-4">Connect With Me</h3>
            <div class="social-links">
              <a 
                href="https://linkedin.com/in/munezafrank" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link linkedin"
                title="LinkedIn"
              >
                <span class="social-icon">💼</span>
                <span class="social-label">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/munezafrank" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link github"
                title="GitHub"
              >
                <span class="social-icon">🐙</span>
                <span class="social-label">GitHub</span>
              </a>
              
              <a 
                href="https://twitter.com/munezafrank" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link twitter"
                title="Twitter"
              >
                <span class="social-icon">🐦</span>
                <span class="social-label">Twitter</span>
              </a>
              
              <a 
                href="https://medium.com/@munezafrank" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link medium"
                title="Medium"
              >
                <span class="social-icon">📝</span>
                <span class="social-label">Medium</span>
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-section">
            <div class="contact-form-card">
              <h3 class="h4 mb-4 text-center">Send Me a Message</h3>
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="row g-3">
                  <!-- Name Field -->
                  <div class="col-md-6">
                    <label for="name" class="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name"
                      v-model="form.name"
                      required
                      placeholder="Your full name"
                    >
                  </div>

                  <!-- Email Field -->
                  <div class="col-md-6">
                    <label for="email" class="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email"
                      v-model="form.email"
                      required
                      placeholder="your.email@example.com"
                    >
                  </div>

                  <!-- Subject Field -->
                  <div class="col-12">
                    <label for="subject" class="form-label">Subject *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="subject"
                      v-model="form.subject"
                      required
                      placeholder="What's this about?"
                    >
                  </div>

                  <!-- Message Field -->
                  <div class="col-12">
                    <label for="message" class="form-label">Message *</label>
                    <textarea 
                      class="form-control" 
                      id="message"
                      v-model="form.message"
                      rows="5"
                      required
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <!-- Submit Button -->
                  <div class="col-12 text-center">
                    <button 
                      type="submit" 
                      class="btn btn-custom"
                      :disabled="isSubmitting"
                    >
                      <span v-if="!isSubmitting">Send Message</span>
                      <span v-else>Sending...</span>
                    </button>
                  </div>
                </div>
              </form>

              <!-- Success/Error Messages -->
              <div v-if="formMessage" class="alert mt-3" :class="formMessageType">
                {{ formMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Form state
const isSubmitting = ref(false)
const formMessage = ref('')
const formMessageType = ref('')

/**
 * Handle form submission
 * Note: This is a demo implementation. In a real application,
 * you would send this data to a backend service.
 */
const submitForm = async () => {
  isSubmitting.value = true
  formMessage.value = ''
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    // Show success message
    formMessage.value = 'Thank you for your message! I\'ll get back to you soon.'
    formMessageType.value = 'alert-success'
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      formMessage.value = ''
    }, 5000)
    
  } catch (error) {
    formMessage.value = 'Sorry, there was an error sending your message. Please try again.'
    formMessageType.value = 'alert-danger'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Contact section styles */
.contact-section {
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

/* Contact cards */
.contact-card {
  background-color: white;
  padding: 2rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-emoji {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.contact-title {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-description {
  color: #666;
  margin-bottom: 1.5rem;
}

.contact-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

/* Social links */
.social-section {
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 100px;
  background-color: #f8f9fa;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.social-link.linkedin:hover {
  background-color: #0077b5;
  color: white;
}

.social-link.github:hover {
  background-color: #333;
  color: white;
}

.social-link.twitter:hover {
  background-color: #1da1f2;
  color: white;
}

.social-link.medium:hover {
  background-color: #00ab6c;
  color: white;
}

.social-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.social-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-dark);
}

.social-link:hover .social-label {
  color: inherit;
}

/* Contact form */
.contact-form-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.form-label {
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.form-control {
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 0.75rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
}

.btn-custom {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  color: white;
  padding: 0.75rem 2.5rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
  border: none;
}

.btn-custom:hover:not(:disabled) {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-custom:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Alert styles */
.alert {
  border-radius: 8px;
  border: none;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
}

/* Responsive design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .contact-card {
    padding: 1.5rem 1rem;
  }
  
  .contact-form-card {
    padding: 2rem 1.5rem;
  }
  
  .social-links {
    gap: 0.5rem;
  }
  
  .social-link {
    min-width: 80px;
    padding: 0.75rem;
  }
  
  .social-icon {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .contact-card,
  .contact-form-card,
  .social-section {
    padding: 1.5rem 1rem;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .social-link {
    flex-direction: row;
    width: 100%;
    max-width: 200px;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .social-icon {
    margin-bottom: 0;
  }
}
</style>
