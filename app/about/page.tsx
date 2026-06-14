'use client';

import React from 'react';

export default function About() {
  const features = [
    { icon: '🗓️', title: 'Vratham tracking', description: 'Monitor your 41-day spiritual discipline with ease.' },
    { icon: '📍', title: 'Live location tracking', description: 'Stay connected with your group during the journey.' },
    { icon: '🆘', title: 'SOS emergency support', description: 'Instant safety assistance at your fingertips.' },
    { icon: '📖', title: 'Devotional content', description: 'Quotes, stories, songs, and slokam to enrich your spirit.' },
    { icon: '🔔', title: 'Notifications', description: 'Timely reminders for spiritual practices and updates.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-50/50 to-transparent -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-gold-100/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6 uppercase tracking-wider">
            Our Story
          </div>
          <h1 className="text-4xl md:text-7xl font-bold font-outfit text-slate-900 mb-8 tracking-tight">
            About <span className="text-primary-900">Saranam</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            A devotional pilgrimage companion application created to support devotees during their spiritual journey to Sabarimala.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Intro Section */}
        <div className="bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              The app is designed to provide a simple, organized, and user-friendly experience through spiritual and safety-focused features that assist pilgrims throughout their journey.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4">Core Features</h2>
            <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:border-primary-200 transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-[3.5rem] p-8 md:p-20 border border-slate-100 shadow-sm relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-[100px] -z-0" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gold-100/10 rounded-full blur-[80px] -z-0" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold mb-6 uppercase tracking-widest border border-primary-100">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-8 leading-tight">
                Calm, Reliable, and Meaningful.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                Our mission is to create a meaningful digital experience for devotees while maintaining user privacy, safety, and simplicity.
              </p>
              <div className="flex items-center gap-4 text-primary-600 font-bold">
                <div className="w-12 h-px bg-primary-500" />
                <span>Swami Saranam!</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <p className="text-slate-600 leading-relaxed italic font-medium">
                  "Saranam is intended for personal devotional and pilgrimage support purposes only. We continuously work to improve the app experience, performance, and reliability for all users."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <div className="bg-primary-50 rounded-[3rem] p-8 md:p-16 border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                For support, feedback, or inquiries, please don't hesitate to reach out to our team.
              </p>
            </div>
            <a 
              href="mailto:marinandhu659@gmail.com"
              className="flex items-center gap-4 px-10 py-5 bg-white rounded-2xl border border-primary-200 text-primary-900 font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-900 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email Support</div>
                <div className="text-lg">marinandhu659@gmail.com</div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

