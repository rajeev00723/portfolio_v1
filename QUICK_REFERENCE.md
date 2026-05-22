# Quick Reference Guide

## 🚀 Getting Started (5 minutes)

```bash
# 1. Navigate to project
cd portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

---

## ✏️ Common Tasks

### Add a New Blog Post

1. Create folder: `app/blog/your-slug/`
2. Create file: `app/blog/your-slug/page.tsx`
3. Copy from sample: `app/blog/sample-blog-post/page.tsx`
4. Update title, date, and content
5. Test at `http://localhost:3000/blog/your-slug`

### Update Homepage Projects

Edit `app/page.tsx`, section "Featured Projects" (around line 71):

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description',
    image: '🎨', // Change emoji or use image
    tags: ['Tech1', 'Tech2'],
    link: '#',
  },
  // Add more...
]
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#your-color',
  // Add your custom colors
}
```

Then use: `className="bg-primary"`

### Add Social Links

Edit `app/page.tsx`, Contact section (around line 174):

```typescript
<a href="https://github.com/YOUR_GITHUB">
  <Github size={20} /> GitHub
</a>
```

---

## 🌐 Deployment Commands

### Deploy to Vercel

```bash
npm install -g vercel
vercel
# Follow prompts
```

### Build for Production

```bash
npm run build
npm start
```

### Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

---

## 📦 Project Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |
| `npm run type-check` | Verify TypeScript types |

---

## 🔗 Connect Domain to Hosting

### Step 1: Get Hosting Nameservers
- **Vercel:** Copy from Project Settings → Domains
- **Netlify:** Copy from Site Settings → Domain Management
- **Self-hosted:** Use your VPS provider's nameservers

### Step 2: Update Namecheap

1. Log in to Namecheap
2. Go to Dashboard → My Domains
3. Click "Manage" on rajeevranjansinha.com
4. Click "Nameservers" tab
5. Select "Custom DNS"
6. Replace with your hosting provider's nameservers
7. Save changes
8. Wait 24-48 hours for propagation

### Step 3: Verify

Check DNS status:
```bash
# On Mac/Linux
nslookup rajeevranjansinha.com

# Or use online tool
# https://dns.google/
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# On Mac/Linux
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Fails with TypeScript Errors

```bash
npm run type-check
# Fix errors shown, then retry build
```

### DNS Not Resolving

- Wait 24-48 hours after updating nameservers
- Clear browser cache: Ctrl+Shift+Delete
- Check DNS with: https://dns.google/

### Site Shows Old Content

```bash
# Clear build cache
rm -rf .next
npm run build
npm start
```

---

## 📱 Mobile Optimization

The site is already fully responsive! To test:
- Chrome DevTools: `F12` → Toggle Device Toolbar
- iOS Safari: Debug → Connect iPad/iPhone

---

## 🔍 SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags included
- [ ] Add sitemap.xml (optional)
- [ ] Add robots.txt (optional)
- [ ] Submit to Google Search Console
- [ ] Add schema.org structured data

---

## 💡 Performance Tips

### Measure Performance
- Desktop: https://pagespeed.web.dev/
- Real users: Vercel Analytics

### Optimize Images
```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  priority // For above-fold images
/>
```

### Monitor Core Web Vitals
- LCP (Largest Contentful Paint): Target < 2.5s
- FID (First Input Delay): Target < 100ms
- CLS (Cumulative Layout Shift): Target < 0.1

---

## 🛡️ Security Tips

- ✅ SSL certificate auto-renewed (included)
- ✅ Security headers configured
- ✅ Dark mode / Light mode (accessibility)
- Update dependencies: `npm update`

---

## 📞 Need Help?

- **Next.js Issues:** https://github.com/vercel/next.js/discussions
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Support:** https://vercel.com/help
- **Namecheap Support:** https://www.namecheap.com/support/

---

## 🎯 Your Next Steps (Checklist)

- [ ] Run `npm install && npm run dev`
- [ ] Update your name and bio
- [ ] Add your projects
- [ ] Update social links
- [ ] Test locally
- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Update nameservers in Namecheap
- [ ] Wait for DNS propagation
- [ ] Test live site at rajeevranjansinha.com
- [ ] Write first blog post
- [ ] Share with the world! 🎉

---

**Happy coding! Your portfolio awaits.** ✨
