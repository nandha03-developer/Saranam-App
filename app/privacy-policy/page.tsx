'use client';

import React from 'react';

export default function PrivacyPolicy() {
  const sections = [
    { id: 'info-collect', title: '1. Information We Collect' },
    { id: 'how-use', title: '2. How We Use Your Information' },
    { id: 'location-usage', title: '3. Location Data Usage' },
    { id: 'data-sharing', title: '4. Data Sharing' },
    { id: 'third-party', title: '5. Third-Party Services' },
    { id: 'data-security', title: '6. Data Security' },
    { id: 'user-control', title: '7. User Control & Permissions' },
    { id: 'children-privacy', title: '8. Children\'s Privacy' },
    { id: 'changes', title: '9. Changes to This Privacy Policy' },
    { id: 'contact', title: '10. Contact Us' },
    { id: 'consent', title: '11. Consent' },
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
            Privacy First
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Saranam respects your privacy and is committed to protecting your personal information.
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
                  Saranam ("we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use the Saranam mobile application.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  By using the Saranam app, you agree to the practices described in this Privacy Policy.
                </p>
              </section>

              <section id="info-collect" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold font-outfit text-slate-900">1. Information We Collect</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary-100 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-primary-500 rounded-full" />
                      Personal Information
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        Name
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        Phone number (used for login)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary-100 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-primary-500 rounded-full" />
                      Location Information
                    </h3>
                    <p className="text-slate-600 mb-4">Location data may be collected only when required for:</p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        Live tracking features
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        SOS emergency safety features
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary-100 transition-colors">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary-500 rounded-full" />
                    Usage Information
                  </h3>
                  <p className="text-slate-600 mb-4">We may collect limited app usage information such as:</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      'Vratham tracking activity',
                      'Feature interactions',
                      'App performance'
                    ].map((item) => (
                      <div key={item} className="bg-slate-50 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="how-use" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold font-outfit text-slate-900">2. How We Use Your Information</h2>
                </div>
                <div className="bg-white overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-50">
                      <ul className="space-y-4">
                        {[
                          'Provide and improve app functionality',
                          'Enable Vratham tracking features',
                          'Provide live tracking services'
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="mt-1.5 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-slate-600 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 md:p-10">
                      <ul className="space-y-4">
                        {[
                          'Send notifications and reminders',
                          'Enable SOS emergency alerts',
                          'Improve app performance'
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="mt-1.5 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-slate-600 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="location-usage" className="scroll-mt-32">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl -z-0" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold font-outfit text-slate-900">3. Location Data Usage</h2>
                    </div>
                    <p className="text-slate-600 text-lg mb-8 max-w-2xl leading-relaxed">
                      Location information is used strictly for pilgrimage tracking features and SOS safety and emergency support.
                    </p>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary-50 border border-primary-100 text-primary-800">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="font-semibold">We do not sell or publicly share your location information.</span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section id="data-sharing" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">4. Data Sharing</h2>
                    <p className="text-slate-600 mb-6">
                      We do not sell, trade, or rent personal information to third parties. Information may be shared only:
                    </p>
                    <ul className="space-y-3">
                      {['To comply with legal obligations', 'To protect user safety', 'When required for essential app functionality'].map((text) => (
                        <li key={text} className="flex gap-3 text-slate-600 text-sm">
                          <span className="text-primary-500 font-bold">•</span>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section id="third-party" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">5. Third-Party Services</h2>
                    <p className="text-slate-600 mb-6">
                      Saranam may use trusted third-party services such as:
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 rounded-xl bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-100">Firebase</span>
                      <span className="px-4 py-2 rounded-xl bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-100">Cloudinary</span>
                    </div>
                    <p className="text-slate-500 text-sm italic">
                      These services may process limited information necessary for app functionality.
                    </p>
                  </div>
                </section>
              </div>

              <section id="data-security" className="scroll-mt-32">
                <div className="bg-primary-50 rounded-[2.5rem] p-8 md:p-12 border border-primary-100">
                  <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-3">6. Data Security</h2>
                      <p className="text-slate-600 leading-relaxed max-w-2xl">
                        We take reasonable measures to protect your information using secure technologies and encrypted communication methods. However, no method of electronic storage or internet transmission is completely secure.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="user-control" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold font-outfit text-slate-900">7. User Control & Permissions</h2>
                </div>
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden relative">
                  <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-6">Your Choices</h3>
                      <ul className="space-y-4">
                        {[
                          'Stop using the app at any time',
                          'Disable location permissions',
                          'Disable notifications',
                          'Request data deletion'
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-slate-600">
                            <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-6">Requested Permissions</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Location', 'Internet', 'Notifications'].map((tag) => (
                          <span key={tag} className="px-4 py-2 rounded-xl bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="mt-6 text-slate-500 text-sm italic">
                        These permissions are used only for core app functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section id="children-privacy" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-4">8. Children's Privacy</h2>
                    <p className="text-slate-600 leading-relaxed">
                      Saranam is not intended for children under the age of 13, and we do not knowingly collect personal information from children.
                    </p>
                  </div>
                </section>

                <section id="changes" className="scroll-mt-32">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full">
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-4">9. Changes</h2>
                    <p className="text-slate-600 leading-relaxed">
                      We may update this Privacy Policy from time to time. Updates will be reflected on this page with a revised effective date.
                    </p>
                  </div>
                </section>
              </div>

              <section id="contact" className="scroll-mt-32">
                <div className="bg-gold-50 rounded-[2.5rem] p-8 md:p-12 border border-gold-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-2">10. Contact Us</h2>
                    <p className="text-slate-600 max-w-md">
                      If you have any questions, concerns, or requests related to this Privacy Policy, please contact us:
                    </p>
                  </div>
                  <a 
                    href="mailto:marinandhu659@gmail.com"
                    className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl border border-gold-200 text-gold-700 font-bold hover:shadow-lg transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    marinandhu659@gmail.com
                  </a>
                </div>
              </section>

              <section id="consent" className="scroll-mt-32 pb-20">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="w-16 h-1 w-full bg-slate-200 rounded-full mx-auto mb-12" />
                  <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">11. Consent</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    By accessing or using the Saranam app, you consent to the collection and use of information as described in this Privacy Policy.
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

