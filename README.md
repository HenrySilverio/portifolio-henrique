# Portfolio Website

![Portfolio Preview](https://via.placeholder.com/1200x630/0a192f/ffffff?text=Portfolio+Website)

## 🌟 Overview

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This elegant single-page application showcases professional experience, projects, skills, and contact information with a sleek dark-themed UI.

## ✨ Features

- **Responsive Design**: Seamlessly adapts to all device sizes
- **Dark Theme**: Modern dark blue gradient theme with professional aesthetics
- **Interactive UI**: Smooth transitions and intuitive navigation
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Friendly**: Built with best practices for search engine visibility
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 📋 Pages

The portfolio includes the following sections:

### 🏠 Home
- Professional introduction
- Profile image
- Social media links
- Featured projects showcase

### 💼 Projects
- Filterable project grid
- Categories: Frontend, Backend, Mobile, UX Design
- Project cards with images and descriptions

### 🚀 Experience
- Professional work history
- Company information
- Role descriptions and timelines

### 🧠 Knowledge/Skills
- Visual skill grid with icons
- Technology expertise showcase
- Categorized by domain

### 📞 Contact
- Personal contact information
- Social media profiles
- Professional details

## 🛠️ Technologies

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel/Netlify ready
- **Performance**: Optimized assets and code splitting
- **Development**: ESLint, Modern JavaScript

## 📦 Project Structure

```
portfolio-website/
├── public/                  # Static files
│   └── images/              # Website images
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.tsx       # Main layout wrapper
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── ProfileImage.tsx # Profile image component
│   │   └── ResponsiveTest.tsx # Responsive testing utility
│   ├── pages/               # Website pages (Pages Router)
│   │   ├── _app.tsx         # Main App component
│   │   ├── _document.tsx    # Custom Document component
│   │   ├── index.tsx        # Home page
│   │   ├── projetos.tsx     # Projects page
│   │   ├── experiencias.tsx # Experience page
│   │   ├── conhecimentos.tsx # Knowledge/Skills page
│   │   └── contato.tsx      # Contact page
│   └── styles/              # Global styles
│       └── globals.css      # Global CSS with Tailwind
├── tailwind.config.js       # Tailwind configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14.6.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔧 Customization

### Content

Edit the page files in `src/pages/` to update content:

```tsx
// Example: Updating the home page title
<h1 className="text-4xl font-bold mb-4">Your Name</h1>
```

### Styling

Modify the Tailwind theme in `tailwind.config.js`:

```js
// Example: Changing the primary color
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0073ff', // Change to your preferred color
      },
    },
  },
},
```

### Images

Replace placeholder images in the `public/images/` directory with your own.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 768px
- Laptop: 768px - 1024px
- Desktop: 1024px - 1280px
- Large Desktop: > 1280px

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app:

```bash
npm install -g vercel
vercel login
vercel
```

### Netlify

Deploy using Netlify:

```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

### Static Export

Create a static build that can be deployed anywhere:

```bash
npm run build
npm run export
```

## 📈 Performance Optimization

- Images are optimized for web
- Code splitting for faster page loads
- Minimal CSS with Tailwind's purge option
- Server-side rendering for improved SEO

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

## 📬 Contact

For questions or feedback about this portfolio template:

- Website: [yourwebsite.com](https://yourwebsite.com)
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

Made with ❤️ and ☕ (lots of coffee)
