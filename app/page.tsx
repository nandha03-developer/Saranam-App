import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-50 rounded-full blur-[100px] opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-900 text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
                </span>
                Official Sabarimala Companion
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-outfit text-slate-900 leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Experience the Divine Journey <span className="text-primary-900">Seamlessly.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-1000">
                Saranam brings technology to your sacred pilgrimage. Track your vratham, get live updates, and access essential services all in one place.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                <Link href="/download" className="btn-primary text-lg px-10 py-4 w-full sm:w-auto text-center">
                  Download Now
                </Link>
                <Link href="/features" className="px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto text-center">
                  Explore Features
                </Link>
              </div>
              
              <div className="mt-12 flex items-center justify-center md:justify-start space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">Trusted By Thousands</span>
              </div>
            </div>

            <div className="flex-1 relative animate-in fade-in zoom-in duration-1000 flex justify-center">
              {/* Realistic Phone Frame with actual mobile.jpg */}
              <div className="relative" style={{ width: '280px' }}>

                {/* Side buttons */}
                <div className="absolute left-[-3px] top-[90px] w-[3px] h-[32px] bg-slate-700 rounded-l-sm z-20"></div>
                <div className="absolute left-[-3px] top-[134px] w-[3px] h-[52px] bg-slate-700 rounded-l-sm z-20"></div>
                <div className="absolute left-[-3px] top-[198px] w-[3px] h-[52px] bg-slate-700 rounded-l-sm z-20"></div>
                <div className="absolute right-[-3px] top-[150px] w-[3px] h-[70px] bg-slate-700 rounded-r-sm z-20"></div>

                {/* Phone body */}
                <div
                  className="relative bg-slate-900 shadow-2xl overflow-hidden"
                  style={{
                    width: '280px',
                    height: '580px',
                    borderRadius: '42px',
                    border: '10px solid #1e293b',
                    boxShadow: '0 0 0 1px #0f172a, 0 40px 80px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Dynamic Island / Notch */}
                  <div
                    className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-slate-950 z-30 flex items-center justify-center gap-2"
                    style={{ width: '90px', height: '28px', borderRadius: '20px' }}
                  >
                    <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-600"></div>
                  </div>

                  {/* Screen — mobile.jpg fills exactly */}
                  <img
                    src="/mobile.jpg"
                    alt="Saranam App Screenshot"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      borderRadius: '32px',
                    }}
                  />

                  {/* Subtle screen glare */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)',
                      borderRadius: '32px',
                    }}
                  ></div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-2 lg:-right-8 glass p-5 rounded-2xl shadow-2xl hidden sm:block animate-bounce-slow z-30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner flex-shrink-0">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Vratham Tracked</p>
                    <p className="text-lg font-black text-slate-900 font-outfit">41 Days Complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4">
              Everything You Need for a Sacred Pilgrimage
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We've combined tradition with modern tools to ensure your focus remains on devotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Queue Updates",
                desc: "Real-time updates on Darshan queue timings and Pamba status.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Vratham Tracker",
                desc: "A dedicated digital space to maintain your 41-day spiritual discipline.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002-2" />
                  </svg>
                )
              },
              {
                title: "Emergency SOS",
                desc: "Instant access to medical and safety services during your journey.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-primary-50 text-primary-900 rounded-2xl flex items-center justify-center mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-outfit">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/features" className="text-primary-900 font-bold flex items-center justify-center group">
              View All Features 
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-primary-900/20 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-8">
              Start Your Sacred Journey Today
            </h2>
            <p className="text-xl text-primary-200 mb-12">
              Join thousands of devotees who trust Saranam for their Sabarimala pilgrimage. Available on iOS and Android.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-primary-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl">
                Download for Android
              </button>
              <button className="bg-primary-800 text-white border border-primary-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all duration-300">
                Download for iOS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
