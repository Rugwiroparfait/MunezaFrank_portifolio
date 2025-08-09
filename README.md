# Muneza Frank - Professional Portfolio

A modern, responsive portfolio website built with Vue 3, showcasing professional experience, certificates, and achievements in data science and sustainable development.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5.18-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=flat-square&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4.5.1-4FC08D?style=flat-square&logo=vue.js&logoColor=white)

## 🌟 Features

### 📄 **Pages & Navigation**
- **Home Page** - Professional introduction and overview
- **Certificates** - Interactive showcase of professional certifications
- **Resume** - Embedded PDF viewer with download functionality
- **Smooth SPA Navigation** - Router-based single page application

### 🎨 **Design & UI**
- **Professional Color Scheme** - Modern blue gradient theme
- **Responsive Design** - Mobile-first approach, works on all devices
- **Bootstrap 5 Integration** - Clean, consistent styling
- **CSS Custom Properties** - Maintainable color system
- **Smooth Animations** - Hover effects and transitions

### 📋 **Certificate Management**
- **Real Certificate Display** - JPEG and PDF certificate support
- **Interactive Modal Viewer** - Full-screen certificate viewing
- **Download Functionality** - Direct certificate downloads
- **Mixed Format Support** - Images and PDFs handled seamlessly

### 📄 **Resume Features**
- **Embedded PDF Viewer** - In-browser resume viewing
- **Download Option** - PDF download with custom filename
- **Fallback Support** - Alternative for unsupported browsers
- **Professional Layout** - Clean, organized presentation

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18.19.1 or higher)
- **npm** (v10.2.4 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rugwiroparfait/MunezaFrank_portifolio.git
   cd MunezaFrank_portifolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
MunezaFrank_portifolio/
├── public/                     # Static assets
│   ├── certificates/          # Certificate files (JPEG/PDF)
│   │   ├── ALX venture Founder academy_muneza_frank_six_week _deep_dive.jpeg
│   │   ├── ALX_Munezafrank _professional_foundation_for_digital_age.jpeg
│   │   └── sustainable_food_value_chains_for_nutrition_muneza_frank.pdf
│   ├── resume/                # Resume files
│   │   └── Resume.pdf
│   └── vite.svg
├── src/                       # Source code
│   ├── components/            # Reusable Vue components
│   │   ├── AppHeader.vue     # Navigation header
│   │   └── AppFooter.vue     # Site footer
│   ├── views/                 # Page components
│   │   ├── Home.vue          # Home page
│   │   ├── Certificates.vue  # Certificates showcase
│   │   └── Resume.vue        # Resume viewer
│   ├── router/               # Vue Router configuration
│   │   └── index.js          # Route definitions
│   ├── assets/               # Build-time assets
│   ├── App.vue               # Root component
│   ├── main.js               # Application entry point
│   └── style.css             # Global styles
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## 🛠️ Technology Stack

### **Frontend Framework**
- **Vue 3** - Progressive JavaScript framework
- **Composition API** - Modern Vue development pattern
- **Single File Components** - Component organization

### **Build Tool**
- **Vite** - Fast build tool and dev server
- **HMR** - Hot module replacement for development

### **Routing**
- **Vue Router 4** - Official Vue.js routing
- **History Mode** - Clean URLs without hash
- **Smooth Scrolling** - Enhanced navigation experience

### **Styling**
- **Bootstrap 5** - CSS framework for responsive design
- **CSS Custom Properties** - Modern styling approach
- **SCSS Support** - Enhanced CSS preprocessing

### **Development Tools**
- **ES6+ JavaScript** - Modern JavaScript features
- **Module System** - ES6 imports/exports
- **Tree Shaking** - Optimized bundle size

## 🎨 Color Scheme

The portfolio uses a professional color palette defined with CSS custom properties:

```css
:root {
  --primary-color: #1E40AF;    /* Deep Blue */
  --secondary-color: #2563EB;  /* Bright Blue */
  --accent-color: #10B981;     /* Green */
  --background: #F9FAFB;       /* Light Gray */
  --text-primary: #111827;     /* Dark Gray */
  --text-secondary: #6B7280;   /* Medium Gray */
}
```

## 📱 Responsive Design

The portfolio is built mobile-first and includes breakpoints for:

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## 🔧 Configuration

### **Vite Configuration**
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})
```

### **Router Configuration**
- Hash-free URLs with `createWebHistory()`
- Smooth scrolling behavior
- Dynamic page titles via route meta
- Scroll restoration for better UX

## 📄 Asset Management

### **Certificates**
Place certificate files in `public/certificates/`:
- Supported formats: JPEG, PNG, PDF
- Files are served directly from public folder
- Automatic format detection and appropriate viewer

### **Resume**
Place resume PDF in `public/resume/`:
- PDF format required
- Embedded viewer with download option
- Fallback for unsupported browsers

## 🌐 Deployment

### **Build Process**
```bash
npm run build
```
Generates optimized production files in `dist/` folder.

### **Deployment Options**
- **Netlify** - Drag and drop `dist` folder
- **Vercel** - Connect GitHub repository
- **GitHub Pages** - Use GitHub Actions
- **Traditional Hosting** - Upload `dist` contents

## 👨‍💻 Development

### **Available Scripts**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### **Code Organization**
- **Components** - Reusable UI elements
- **Views** - Page-level components
- **Router** - Navigation configuration
- **Assets** - Build-time resources

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Muneza Frank**
- **Email**: [muneza.frank@gmail.com](mailto:muneza.frank@gmail.com)
- **LinkedIn**: [linkedin.com/in/munezafrank](https://linkedin.com/in/munezafrank)
- **GitHub**: [github.com/munezafrank](https://github.com/munezafrank)

---

*Built with ❤️ using Vue 3 and modern web technologies*
