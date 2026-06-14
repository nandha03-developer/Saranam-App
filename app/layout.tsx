// import type { Metadata, Viewport } from 'next';
// import { Outfit, Inter } from 'next/font/google';
// import './globals.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// const outfit = Outfit({
//   subsets: ['latin'],
//   variable: '--font-outfit',
//   display: 'swap',
// });

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });

// export const viewport: Viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 5,
//   userScalable: true,
// };

// export const metadata: Metadata = {
//   title: 'Saranam - Your Digital Companion for Sabarimala Pilgrimage',
//   description:
//     'Saranam is the ultimate devotional mobile app for Sabarimala pilgrims. Track your vratham, get real-time queue updates, emergency SOS, and access premium devotional content.',
//   keywords:
//     'Sabarimala, devotional, vratham, pilgrimage, spiritual, app, tracking, Ayyappa, Kerala, spiritual travel, Sannidhanam',
//   authors: [{ name: 'Saranam Devotional' }],
//   metadataBase: new URL('https://saranam.app'), // Replace with actual domain if different
//   alternates: {
//     canonical: '/',
//   },
//   openGraph: {
//     title: 'Saranam - Your Digital Companion for Sabarimala Pilgrimage',
//     description:
//       'Saranam is the ultimate devotional mobile app for Sabarimala pilgrims. Track your vratham, get real-time queue updates, emergency SOS, and access premium devotional content.',
//     url: 'https://saranam.app',
//     siteName: 'Saranam',
//     images: [
//       {
//         url: '/og-image.png',
//         width: 1200,
//         height: 630,
//         alt: 'Saranam App - Sabarimala Pilgrimage Companion',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Saranam - Your Digital Companion for Sabarimala Pilgrimage',
//     description: 'The ultimate devotional app for Sabarimala pilgrims.',
//     images: ['/og-image.png'],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon-32x32.png',
//     apple: '/apple-touch-icon.png',
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
//       <body className="bg-slate-50 text-slate-900 font-inter" suppressHydrationWarning>
//         <Navbar />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
