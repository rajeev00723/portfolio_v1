# Portfolio Site Setup & Deployment Guide

## 🚀 Quick Start

### 1. **Local Development Setup**

```bash
# Clone or download the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx           # Home page
│   ├── blog/
│   │   └── page.tsx       # Blog listing
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## ✏️ Customization Checklist

### Update Personal Info
1. **Homepage (`app/page.tsx`)**
   - Line 37: Update hero description
   - Line 48-50: Update CTA text
   - Line 71-85: Add your actual projects

2. **Blog (`app/blog/page.tsx`)**
   - Line 16-37: Add your blog posts

3. **Contact Links (`app/page.tsx`)**
   - Line 174: Update email address
   - Line 179: Add GitHub profile URL
   - Line 184: Add LinkedIn profile URL

4. **Metadata (`app/layout.tsx`)**
   - Update description and OG image URL

---

## 🌐 Hosting Options & Setup

### **Option 1: Vercel (Recommended - Free tier available)**

#### Benefits:
- ✅ Optimized for Next.js
- ✅ Automatic deployments from Git
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Easy custom domain setup

#### Steps:
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Connect Your Domain**
   - In Vercel Dashboard → Settings → Domains
   - Add `rajeevranjansinha.com`
   - Follow Vercel's instructions to update nameservers in Namecheap
   - Add `www` subdomain as well

4. **Update Namecheap DNS**
   - Go to Namecheap Dashboard
   - Manage Domain → Nameservers
   - Change to Vercel's nameservers (provided in Vercel setup)
   - Wait 24-48 hours for propagation

---

### **Option 2: Netlify (Also free tier)**

#### Steps:
1. **Connect GitHub repository**
2. **Deploy settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Connect domain in Netlify settings**
4. **Update nameservers in Namecheap**

---

### **Option 3: Self-Hosted (DigitalOcean/Linode)**

#### Prerequisites:
- VPS or Cloud server ($5-6/month)
- Node.js installed
- PM2 or similar process manager

#### Steps:
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install PM2**
   ```bash
   npm install -g pm2
   ```

3. **Start the server**
   ```bash
   pm2 start npm --name "portfolio" -- start
   ```

4. **Connect domain**
   - Get your server's IP address
   - In Namecheap: Manage Domain → DNS Records
   - Add A record pointing to your server IP
   - Wait for DNS propagation

5. **SSL Certificate (Let's Encrypt)**
   ```bash
   sudo certbot certonly --standalone -d rajeevranjansinha.com
   ```

---

## 📝 Blog Post Structure

To add new blog posts, create files in `app/blog/[slug]/page.tsx`:

```typescript
export const metadata = {
  title: 'Your Post Title',
  description: 'Brief description...',
}

export default function BlogPost() {
  return (
    <article className="prose max-w-3xl mx-auto py-20">
      <h1>Your Post Title</h1>
      <time>Published: May 21, 2026</time>
      
      <h2>Section One</h2>
      <p>Your content here...</p>
      
      {/* Add more sections */}
    </article>
  )
}
```

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` to modify the color scheme.

### Update Fonts
In `app/layout.tsx`, import different Google Fonts:
```typescript
import { Merriweather, Montserrat } from 'next/font/google'
```

### Add Images
```typescript
import Image from 'next/image'

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={400}
  height={300}
/>
```

---

## 🚀 Deployment Checklist

- [ ] Update all personal information
- [ ] Add your projects
- [ ] Update social links (GitHub, LinkedIn)
- [ ] Update contact email
- [ ] Add profile image (optional)
- [ ] Test locally (`npm run dev`)
- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Connect domain in Namecheap
- [ ] Update nameservers
- [ ] Wait for DNS propagation
- [ ] Test live site

---

## 📊 Performance Tips

1. **Optimize Images**
   - Use Next.js Image component
   - Convert to WebP format

2. **Code Splitting**
   - Already handled by Next.js automatically

3. **Caching**
   - Set in `next.config.js`

4. **Monitoring**
   - Use Vercel Analytics (free)
   - Monitor Core Web Vitals

---

## 🔒 Security Checklist

- [x] SSL/TLS enabled
- [x] Security headers configured
- [x] No sensitive data in code
- [ ] Enable two-factor authentication (Namecheap)
- [ ] Regular backups
- [ ] Monitor for spam/abuse

---

## 📞 Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com
- **Vercel:** https://vercel.com/docs
- **Namecheap Support:** https://www.namecheap.com/support/

---

## 🎯 Next Steps

1. **Customize your content** - Update projects, blog posts, and personal info
2. **Test locally** - Run `npm run dev` and check everything works
3. **Push to GitHub** - Initialize Git and push your code
4. **Deploy** - Choose your hosting provider and deploy
5. **Connect domain** - Update nameservers in Namecheap
6. **Monitor** - Keep an eye on performance and analytics

Good luck with your portfolio! 🚀
