'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Is the Saranam app free to use?",
    answer: "Yes, the core features of Saranam, including the Vratham tracker, live updates, and emergency services, are completely free for all devotees."
  },
  {
    question: "How do I start the 41-day Vratham tracker?",
    answer: "Once you download the app, you can select 'Start Vratham' from the home screen. You'll enter your Maladharan date, and the app will automatically generate your daily ritual schedule."
  },
  {
    question: "Are the queue updates official?",
    answer: "We aggregate data from multiple sources including official temple announcements and real-time crowd reporting from verified pilgrims to provide the most accurate estimates."
  },
  {
    question: "How does the Emergency SOS work?",
    answer: "When you trigger the SOS, the app sends your precise GPS coordinates to the nearest pilgrimage help center and notifies your emergency contacts immediately."
  },
  {
    question: "Can I use the app offline?",
    answer: "The Vratham tracker and ritual guides work offline. However, live queue updates and weather alerts require an active internet connection."
  },
  {
    question: "Is my personal data secure?",
    answer: "Absolutely. We follow strict privacy protocols. Your location is only shared during an emergency SOS or if you opt-in for community queue reporting."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Everything you need to know about the Saranam app and your pilgrimage journey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-900 font-outfit">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-primary-900 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 glass rounded-3xl text-center border-primary-100">
          <h3 className="text-xl font-bold text-slate-900 mb-2 font-outfit">Still have questions?</h3>
          <p className="text-slate-600 mb-6">We're here to help you. Reach out to our support team.</p>
          <a 
            href="/contact" 
            className="inline-block bg-primary-900 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-800 transition-all shadow-md"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
