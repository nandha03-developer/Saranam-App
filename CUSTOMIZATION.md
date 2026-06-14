# Customization Guide for Saranam Website

This guide helps you customize the website for your specific needs.

---

## 🎨 Color Customization

All colors are defined in `tailwind.config.ts`. To change the color scheme:

### Step 1: Open `tailwind.config.ts`

### Step 2: Update the colors object

```typescript
theme: {
  extend: {
    colors: {
      'saranam-green': '#c7ddb5',   // Soft green
      'saranam-text': '#4b6043',    // Dark green text
      'saranam-hover': '#b3cf99',   // Light green hover
    },
  },
},
```

### Example: Using Blue Theme

```typescript
colors: {
  'saranam-green': '#e3f2fd',       // Light blue background
  'saranam-text': '#0d47a1',        // Dark blue text
  'saranam-hover': '#1976d2',       // Medium blue hover
},
```

### Step 3: Rebuild and test

```bash
npm run build
npm run dev
# Visit http://localhost:3000
```

---

## 📝 Content Customization

### Home Page - app/page.tsx

**Update Tagline:**
```typescript
<p className="text-xl md:text-2xl text-saranam-text text-opacity-80 mb-8">
  Your custom tagline here
</p>
```

**Update Features:**
```typescript
const features = [
  {
    id: 1,
    title: 'Your Feature Title',
    description: 'Your feature description',
    icon: '🎯', // Change emoji
  },
  // Add or modify more features
];
```

**Update Hero Button Link:**
```typescript
<a
  href="https://your-play-store-link.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Your Button Text
</a>
```

---

### Privacy Policy - app/privacy-policy/page.tsx

**Update sections** by editing the content inside each `<section>` tag:

```typescript
<section>
  <h2 className="text-2xl font-semibold text-saranam-text mb-4">
    Your Section Title
  </h2>
  <p>Your content here</p>
</section>
```

---

### Terms & Conditions - app/terms/page.tsx

Similar structure to Privacy Policy. Update section titles and content as needed.

---

### Contact Page - app/contact/page.tsx

**Update Email Addresses:**
```typescript
<a
  href="mailto:your-email@domain.com"
  className="..."
>
  your-email@domain.com
</a>
```

**Update FAQ Items:**
```typescript
<div>
  <h3 className="text-lg font-semibold text-saranam-text mb-2">
    Your Question?
  </h3>
  <p className="text-saranam-text text-opacity-80">
    Your answer here
  </p>
</div>
```

**Update Social Media Links:**
```typescript
<p className="text-saranam-text">
  <span className="font-semibold">Facebook:</span> your-facebook-url
</p>
```

---

## 🧭 Navigation Customization

### Add New Page

1. **Create new page file:**
   ```
   app/your-page/page.tsx
   ```

2. **Add to Navbar** - Edit `app/components/Navbar.tsx`:

```typescript
<Link
  href="/your-page"
  className="text-saranam-text hover:text-saranam-hover transition duration-200 font-medium"
>
  Your Page
</Link>
```

Also add to mobile menu:
```typescript
<Link
  href="/your-page"
  className="block py-2 text-saranam-text hover:text-saranam-hover transition duration-200"
>
  Your Page
</Link>
```

3. **Add to Footer** - Edit `app/components/Footer.tsx`:

```typescript
<li>
  <Link
    href="/your-page"
    className="text-saranam-text hover:text-saranam-hover transition duration-200"
  >
    Your Page
  </Link>
</li>
```

---

## 📧 Email Customization

Replace all instances of the default emails:

- `info@saranam.com` → your-email@domain.com
- `support@saranam.com` → support@domain.com
- `legal@saranam.com` → legal@domain.com
- `privacy@saranam.com` → privacy@domain.com

**Files to update:**
- `app/page.tsx`
- `app/components/Footer.tsx`
- `app/contact/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/terms/page.tsx`

**Quick find and replace in VS Code:**
1. Press `Ctrl+H` (or `Cmd+H` on Mac)
2. Find: `info@saranam.com`
3. Replace: `your-email@domain.com`
4. Click "Replace All"

---

## 🎯 Google Play Store Link

**Update in** `app/page.tsx` (appears 2 times):

Find:
```typescript
href="https://play.google.com/store/apps/details?id=com.saranam"
```

Replace with:
```typescript
href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
```

---

## 🔤 Typography Changes

### Change Font Family

Edit `app/globals.css`:

```css
body {
  font-family: 'Your Font Family', sans-serif;
}
```

**Popular options:**
- `'Inter', sans-serif` - Modern
- `'Poppins', sans-serif` - Friendly
- `'Merriweather', serif` - Elegant
- `'Playfair Display', serif` - Luxury

---

## 🏢 Company Information

### Update Company Name

Replace `Saranam` with your company name in:
- `app/layout.tsx` (metadata)
- `app/components/Navbar.tsx`
- `app/components/Footer.tsx`
- `app/page.tsx`

---

## 🔗 External Links

### Social Media Links

Update in `app/contact/page.tsx`:

```typescript
<p className="text-saranam-text">
  <span className="font-semibold">Facebook:</span> 
  <a href="https://facebook.com/your-page">facebook.com/your-page</a>
</p>
```

---

## 🎪 Add Icons

The website uses emoji icons by default. To add custom icons:

### Option 1: Use Hero Icons (Recommended)

1. **Install Hero Icons:**
   ```bash
   npm install @heroicons/react
   ```

2. **Use in components:**
   ```typescript
   import { SparklesIcon } from '@heroicons/react/24/outline';
   
   <SparklesIcon className="w-8 h-8 text-saranam-text" />
   ```

### Option 2: Font Awesome

```bash
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
```

---

## 📱 Responsive Design Changes

All components are responsive by default using Tailwind CSS breakpoints:

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

**Example:**
```typescript
<div className="text-2xl md:text-4xl lg:text-6xl">
  Responsive text size
</div>
```

---

## 🎬 Add Animations

Using Tailwind CSS built-in animations:

```typescript
<div className="hover:scale-105 transition duration-300">
  Hover for scale effect
</div>
```

**Built-in animations:**
- `animate-spin` - Spinning
- `animate-bounce` - Bouncing
- `animate-pulse` - Pulsing
- `animate-ping` - Pinging

---

## 🔍 SEO Customization

### Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: 'keyword1, keyword2, keyword3',
};
```

### Update OpenGraph Tags

```typescript
openGraph: {
  title: 'Your Title',
  description: 'Your description',
  image: 'https://your-domain.com/image.jpg',
}
```

---

## 📸 Add Images

### Add Hero Image

1. **Place image in** `public/` directory
2. **Update** `app/page.tsx`:

```typescript
import Image from 'next/image';

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

---

## 🧪 Testing Your Changes

After making changes:

```bash
# Check for errors
npm run lint

# Build to catch issues
npm run build

# Start dev server
npm run dev

# Open browser
http://localhost:3000
```

---

## 🚀 Deployment After Customization

After making all customizations:

```bash
git add .
git commit -m "Customize website for production"
git push origin main
# Vercel automatically deploys!
```

---

## 📋 Common Customization Checklist

- [ ] Update company name
- [ ] Update colors
- [ ] Update email addresses
- [ ] Update Google Play Store link
- [ ] Update social media links
- [ ] Update tagline/description
- [ ] Update feature highlights
- [ ] Update privacy policy
- [ ] Update terms & conditions
- [ ] Update contact information
- [ ] Test all pages
- [ ] Build successfully
- [ ] Deploy to production

---

## 🆘 Troubleshooting

### Changes not showing
```bash
# Clear Next.js cache and rebuild
rm -rf .next
npm run build
npm run dev
```

### Build fails
- Check for syntax errors: `npm run lint`
- Verify all imports are correct
- Clear node_modules: `rm -rf node_modules && npm install`

### Page not found after adding
- Verify file path: `app/your-page/page.tsx`
- Check for typos in file names
- Restart dev server: `npm run dev`

---

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**Last Updated**: May 4, 2026  
**Version**: 1.0.0

Happy customizing! 🎉
