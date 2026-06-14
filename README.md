# Saranam - Path to Sabarimala

A production-ready Next.js website for the Saranam devotional mobile app. This website is designed for Google Play Store submission and serves as the official web presence for the app.

## 📱 About Saranam

Saranam is a devotional mobile app designed to support pilgrims undertaking the sacred journey to Sabarimala. The app includes:

- **Vratham Tracking**: Monitor your 41-day Sabarimala vratham with daily reminders
- **Live Tracking**: Share your journey with trusted family members
- **SOS Safety**: Quick emergency alerts for your trusted contacts
- **Devotional Content**: Access mantras, meditation guides, and spiritual wisdom

## 🎨 Design

- **Primary Color**: Soft Green (#c7ddb5)
- **Text Color**: Dark Green (#4b6043)
- **Hover Color**: Light Green (#b3cf99)
- **Design Philosophy**: Clean, minimal, calm, and spiritual UI

## 🛠 Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Node Version**: 18+

## 📁 Project Structure

```
saranam-web/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation component
│   │   └── Footer.tsx       # Footer component
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── privacy-policy/
│   │   └── page.tsx         # Privacy Policy page
│   ├── terms/
│   │   └── page.tsx         # Terms & Conditions page
│   └── contact/
│       └── page.tsx         # Contact page
├── public/                  # Static assets (images, icons)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── .eslintrc.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

### 1. Home Page (`/`)
- Hero section with app name and tagline
- Feature highlights with icons
- Call-to-action buttons for Google Play Store
- About section with links to legal pages

### 2. Privacy Policy (`/privacy-policy`)
- Comprehensive privacy policy compliant with data protection laws
- Covers data collection, usage, security, and user rights
- Easy-to-read formatting with clear sections

### 3. Terms & Conditions (`/terms`)
- Clear usage rules and user responsibilities
- Information about SOS features and location tracking
- Account termination and legal information
- Liability disclaimers

### 4. Contact Page (`/contact`)
- Multiple contact email addresses
- FAQ section
- Social media links
- Response time expectations

## 🧩 Components

### Navbar Component
- Responsive design (mobile hamburger menu)
- Navigation to all pages
- Sticky positioning on scroll

### Footer Component
- Brand information
- Quick links
- Contact information
- Copyright notice with dynamic year

## 🎯 SEO Features

- Meta titles and descriptions for all pages
- Open Graph tags for social media sharing
- Mobile-responsive design
- Structured data ready
- Clean URL structure

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly navigation
- Proper viewport settings

## 🔒 Security & Compliance

- HTTPS ready for production
- No sensitive data exposure
- Privacy policy compliant
- Play Store compliant design
- No broken links
- No login required

## 📦 Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next": "^16.2.4",
  "typescript": "^5.7.2",
  "tailwindcss": "^3.4.4",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.49"
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on each push

```bash
# Alternative: Manual deployment
npm run build
# Upload the `out` directory to your hosting
```

### Environment Variables

Create a `.env.local` file if needed:

```
# Add any environment variables here
```

## 📝 Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'saranam-green': '#c7ddb5',  // Change here
  'saranam-text': '#4b6043',   // Change here
  'saranam-hover': '#b3cf99',  // Change here
}
```

### Update Contact Email

Update email addresses in:
- `app/contact/page.tsx`
- `app/components/Footer.tsx`
- `app/privacy-policy/page.tsx`
- `app/terms/page.tsx`

### Update Google Play Store Link

Replace `https://play.google.com/store/apps/details?id=com.saranam` with your actual app ID in:
- `app/page.tsx` (multiple occurrences)

## 🐛 Development

### Run Linter

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

## 📊 Performance

- Optimized images (use Next.js `Image` component)
- Code splitting (automatic with Next.js)
- CSS optimization (Tailwind CSS)
- Font optimization (Next.js built-in)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is proprietary and confidential to Saranam.

## 📞 Support

For issues or questions:
- Email: support@saranam.com
- Privacy & Legal: legal@saranam.com

---

**Version**: 1.0.0  
**Last Updated**: May 4, 2026  
**Status**: Production Ready
