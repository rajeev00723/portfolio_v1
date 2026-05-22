# Professional Portfolio & Blog

A modern, fully responsive portfolio and blog site built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional aesthetic with dark mode support
- ⚡ **Fast Performance** - Built on Next.js for optimal speed
- 📱 **Fully Responsive** - Looks great on all devices
- 🌙 **Dark Mode** - Built-in dark theme support
- 📝 **Blog Ready** - Easy to add and manage blog posts
- 🔍 **SEO Optimized** - Metadata and structured data included
- 🚀 **Deploy Ready** - One-click deployment to Vercel

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── blog/
│   │   └── page.tsx       # Blog listing page
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── public/                # Static files
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── SETUP_GUIDE.md        # Detailed setup instructions
```

## 🎯 Quick Customization

### 1. Update Your Information
- Edit `app/page.tsx` to update hero text, projects, and social links
- Update metadata in `app/layout.tsx`

### 2. Add Blog Posts
Create new files in `app/blog/[slug]/page.tsx` following the blog page structure.

### 3. Change Colors & Theme
Edit `tailwind.config.js` to customize the color scheme.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
```

### Other Hosts
See `SETUP_GUIDE.md` for detailed instructions for Netlify, DigitalOcean, etc.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📦 Dependencies

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

## 📖 Documentation

See `SETUP_GUIDE.md` for comprehensive setup and deployment instructions.

## 📝 License

Open source and free to use for your portfolio.

## 🚀 Ready to Deploy?

1. Customize your content
2. Test locally: `npm run dev`
3. Push to GitHub
4. Deploy to Vercel with one click
5. Connect your domain
6. Go live! 🎉

---

Built with ❤️ for your professional presence on the web.
