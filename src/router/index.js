// Router configuration for Vue 3 portfolio app
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Certificates from '../views/Certificates.vue'
import Resume from '../views/Resume.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Muneza Frank - Data Scientist Portfolio'
    }
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates,
    meta: {
      title: 'Certificates - Muneza Frank'
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    meta: {
      title: 'Resume - Muneza Frank'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Smooth scrolling for anchor links
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Account for fixed header
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update page title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Muneza Frank - Data Scientist'
  next()
})

export default router
