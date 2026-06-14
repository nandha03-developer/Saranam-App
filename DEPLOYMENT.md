# Deployment Guide for Saranam Website

This guide explains how to deploy the Saranam website to various platforms.

## 🚀 Quick Start - Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free at vercel.com)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/saranam-web.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

3. **Your site is live!**
   - Vercel provides a URL: `https://your-project.vercel.app`
   - Custom domain setup available in project settings

### Environment Variables on Vercel
- Go to Project Settings > Environment Variables
- Add variables if needed (leave empty for this project)

---

## 📱 Deployment Checklist

Before deploying to production:

- [ ] Update Google Play Store link in `app/page.tsx`
- [ ] Update all email addresses (info@saranam.com, support@saranam.com, legal@saranam.com)
- [ ] Update social media links in `app/contact/page.tsx`
- [ ] Test all links and navigation
- [ ] Verify responsive design on mobile
- [ ] Check SEO meta tags
- [ ] Test form interactions (email links work)
- [ ] Verify build completes without errors: `npm run build`
- [ ] Clear browser cache and test incognito mode

---

## 🔧 Alternative Deployment Options

### Netlify

1. **Connect repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository

2. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Netlify automatically deploys on push to main branch

### Traditional Hosting (AWS, DigitalOcean, etc.)

1. **Build the project**
   ```bash
   npm run build
   npm start
   ```

2. **Use a process manager** (PM2, systemd, etc.)
   ```bash
   npm install -g pm2
   pm2 start npm --name "saranam" -- start
   ```

3. **Set up reverse proxy** (nginx, Apache)
   - Forward requests to `localhost:3000`

4. **Install SSL certificate** (Let's Encrypt)
   ```bash
   certbot certonly --standalone -d yourdomain.com
   ```

---

## 🔒 Production Security Checklist

- [ ] Enable HTTPS/SSL certificate
- [ ] Set up security headers (Vercel does this automatically)
- [ ] Configure CORS if calling external APIs
- [ ] Update Contact email addresses
- [ ] Enable analytics (optional)
- [ ] Set up monitoring for errors
- [ ] Test error pages (404, 500, etc.)

---

## 📊 Performance Optimization

The website is already optimized with:
- ✅ Turbopack for fast builds
- ✅ Automatic code splitting
- ✅ CSS optimization with Tailwind
- ✅ Image optimization ready
- ✅ Static pre-rendering

Monitor performance:
- Vercel Analytics (automatic)
- Google Search Console
- PageSpeed Insights

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to main branch:

```bash
git add .
git commit -m "Update features"
git push origin main
# Website updates automatically within seconds
```

---

## 📝 Environment Setup

### Local Development
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
# Production build ready
```

---

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Pages Not Updating
- Check git push was successful
- Verify branch is set to `main` in Vercel settings
- Wait 2-3 minutes for deployment to complete

### Styling Issues
- Rebuild: `npm run build`
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)

---

## 📞 Support & Monitoring

- **Vercel Status**: https://www.vercel-status.com
- **Check deployment logs**: Vercel Dashboard > Deployments
- **Error monitoring**: (Optional) Sentry, LogRocket

---

## 📈 Next Steps After Deployment

1. Submit to Google Play Store (as website link)
2. Set up custom domain (DNS configuration)
3. Add analytics (optional)
4. Set up monitoring for uptime
5. Create backup strategy
6. Document any custom configurations

---

**Last Updated**: May 4, 2026  
**Version**: 1.0.0
