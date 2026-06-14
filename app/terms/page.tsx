'use client';

import React from 'react';

export default function Terms() {
  const sections = [
    { id: 'about', title: '1. About Saranam' },
    { id: 'eligibility', title: '2. Eligibility' },
    { id: 'responsibilities', title: '3. User Responsibilities' },
    { id: 'account', title: '4. Account & Authentication' },
    { id: 'location', title: '5. Location Services' },
    { id: 'notifications', title: '6. Notifications' },
    { id: 'content', title: '7. Devotional Content' },
    { id: 'privacy', title: '8. Privacy & Data Usage' },
    { id: 'third-party', title: '9. Third-Party Services' },
    { id: 'availability', title: '10. Service Availability' },
    { id: 'liability', title: '11. Limitation of Liability' },
    { id: 'changes', title: '12. Changes' },
    { id: 'termination', title: '13. Termination' },
    { id: 'contact', title: '14. Contact Us' },
    { id: 'acceptance', title: '15. Acceptance' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-50/50 to-transparent -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-gold-100/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
            User Agreement
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 mb-6 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Please read these terms carefully before using the Saranam mobile application.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-2 text-slate-500">
            <span className="w-8 h-px bg-slate-200" />
            <span className="text-sm">Effective Date: May 9, 2026</span>
            <span className="w-8 h-px bg-slate-200" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-32 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-3">
                Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200"
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <div className="space-y-12">
              <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <p className="text-slate-600 leading-relaxed">
                  Welcome to Saranam. These Terms & Conditions govern your access to and use of the Saranam mobile application ("App").
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  By accessing or using the app, you agree to comply with these Terms. If you do not agree with any part of these Terms, please discontinue use of the app.
                </p>
              </section>

              <section id="about" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold font-outfit text-slate-900">1. About Saranam</h2>
                </div>
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Saranam is a devotional pilgrimage application designed to support users with features including:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: '🗺️', label: 'Vratham tracking' },
                      { icon: '📍', label: 'Live location tracking' },
                      { icon: '🆘', label: 'SOS safety assistance' },
                      { icon: '📖', label: 'Devotional content' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold text-slate-700">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm text-slate-500 italic">
                    The app is intended for personal and non-commercial use only.
                  </p>
                </div>
              </section>

              <section id="eligibility" className="scroll-mt-32">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl -z-0" />
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-8">2. Eligibility</h2>
                    <div className="space-y-6">
                      {[
                        'You are at least 13 years of age',
                        'You are legally permitted to use mobile applications and online services in your region'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="mt-1 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-lg text-slate-700 font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section id="responsibilities" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold font-outfit text-slate-900">3. User Responsibilities</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Information', text: 'Provide accurate information when using the app' },
                    { title: 'Lawful Use', text: 'Use the app responsibly and lawfully' },
                    { title: 'Safety', text: 'Avoid misuse, abuse, or disruption of app services' },
                    { title: 'Security', text: 'Avoid attempting unauthorized access to systems' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary-100 transition-all group">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary-500 rounded-full transition-transform group-hover:scale-y-125" />
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section id="account" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full shadow-sm">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">4. Account</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Certain features may require phone number authentication or user identification.
                    </p>
                    <div className="p-4 rounded-2xl bg-primary-50 border border-primary-100 text-primary-800 text-sm font-medium">
                      Users are responsible for maintaining access to their registered mobile number and device.
                    </div>
                  </div>
                </section>

                <section id="location" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full shadow-sm">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">5. Location</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Some app features require location access to function properly, including:
                    </p>
                    <ul className="space-y-3">
                      {['Live pilgrimage tracking', 'SOS emergency assistance', 'Safety-related functionality'].map((text) => (
                        <li key={text} className="flex gap-3 text-slate-600 text-sm items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>

              <section id="notifications" className="scroll-mt-32">
                <div className="bg-gold-50 rounded-[2.5rem] p-8 md:p-12 border border-gold-100">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center text-gold-600 flex-shrink-0">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-3">6. Notifications</h2>
                      <p className="text-slate-600 leading-relaxed">
                        The app may send notifications related to Vratham reminders, app updates, and safety alerts. You can disable these at any time through device settings.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="content" className="scroll-mt-32">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                  <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">7. Devotional Content</h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    All devotional content available within Saranam, including text, images, songs, stories, and slokam, is provided for personal devotional use only.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Restricted Actions</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Reproduce', 'Redistribute', 'Commercially exploit', 'Misuse content'].map((item) => (
                        <div key={item} className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-500 text-center">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section id="privacy" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full shadow-sm">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">8. Privacy</h2>
                    <p className="text-slate-600 leading-relaxed">
                      Your use of the app is also governed by our Privacy Policy, which explains how information is collected, used, and protected.
                    </p>
                  </div>
                </section>

                <section id="third-party" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full shadow-sm">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">9. Third-Party</h2>
                    <p className="text-slate-600 leading-relaxed">
                      Saranam may integrate trusted third-party services such as Firebase and Cloudinary for core app functionality.
                    </p>
                  </div>
                </section>
              </div>

              <section id="availability" className="scroll-mt-32">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">10. Service Availability</h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    While we strive to maintain uninterrupted service, we do not guarantee that the app will always be available or error-free.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {['Network issues', 'Device limits', 'Maintenance'].map((cause) => (
                      <div key={cause} className="p-6 rounded-2xl bg-slate-50 text-center">
                        <div className="w-10 h-10 rounded-full bg-white mx-auto mb-4 flex items-center justify-center text-slate-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-bold text-slate-700">{cause}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="liability" className="scroll-mt-32">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl -z-0" />
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-8">11. Limitation of Liability</h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      Saranam is provided on an "as is" basis. We are not responsible for hardware failures, network issues, or user misuse.
                    </p>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary-50 border border-primary-100 text-primary-800">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-sm">Users remain responsible for their personal safety during pilgrimage.</span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section id="changes" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full shadow-sm">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">12. Changes</h2>
                    <p className="text-slate-600 leading-relaxed">
                      We reserve the right to modify app features or update these Terms. Updated Terms will be reflected within the app.
                    </p>
                  </div>
                </section>

                <section id="termination" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full shadow-sm">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">13. Termination</h2>
                    <p className="text-slate-600 leading-relaxed">
                      We reserve the right to restrict access to the app for users who violate these Terms or misuse the service.
                    </p>
                  </div>
                </section>
              </div>

              <section id="contact" className="scroll-mt-32">
                <div className="bg-primary-50 rounded-[2.5rem] p-8 md:p-12 border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-2">14. Contact Us</h2>
                    <p className="text-slate-600 max-w-md">
                      If you have questions or concerns regarding these Terms & Conditions, please contact us:
                    </p>
                  </div>
                  <a 
                    href="mailto:marinandhu659@gmail.com"
                    className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl border border-primary-200 text-primary-700 font-bold hover:shadow-lg transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    marinandhu659@gmail.com
                  </a>
                </div>
              </section>

              <section id="acceptance" className="scroll-mt-32 pb-20">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="w-16 h-1 w-full bg-slate-200 rounded-full mx-auto mb-12" />
                  <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">15. Acceptance of Terms</h2>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium">
                    By accessing or using Saranam, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

