# Personal Portfolio

Modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion animations.

## 🎨 Customization Guide

### Adding New Projects

To add a new project, edit `/src/data/projects.ts`:

```typescript
export const projects = [
  {
    title: "Your New Project",
    role: "Your Role",
    stack: ["React", "TypeScript", "etc"],
    description: "Brief project description",
    achievements: [
      "Key achievement 1",
      "Key achievement 2",
    ],
    liveUrl: "https://your-project.com",
    codeUrl: "https://github.com/your/repo",
  },
  // existing projects...
]
```

### Changing Theme Colors

1. **Primary Accent**: Edit the cyan colors in `tailwind.config.js`:
   ```js
   colors: {
     cyan: {
       450: '#your-color-here',
       // other shades...
     }
   }
   ```

2. **Background Gradients**: Modify gradient colors in `src/index.css`:
   ```css
   .gradient-btn {
     background-image: linear-gradient(90deg, #your-color 0%, #your-color 100%);
   }
   ```

3. **Dark Mode Colors**: Adjust dark mode colors in `src/index.css`:
   ```css
   .dark body {
     @apply bg-gradient-to-b from-slate-800 via-slate-900 to-black;
   }
   ```

## 🚀 Deployment Guide (Vercel)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

Vercel will automatically deploy on every push to your main branch.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```
