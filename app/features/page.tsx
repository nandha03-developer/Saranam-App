export default function Features() {
  const categories = [
    {
      title: "Preparation & Vratham",
      features: [
        { name: "Digital Vratham Calendar", desc: "Interactive 41-day tracker with daily rituals and reminders." },
        { name: "Mandalam Calculator", desc: "Accurately calculate your pilgrimage dates based on tradition." },
        { name: "Preparation Checklist", desc: "Comprehensive list for Irumudi Kettu and travel essentials." }
      ]
    },
    {
      title: "Real-time Updates",
      features: [
        { name: "Queue Management", desc: "Live status of Sannidhanam, Pamba, and Nilakkal queue lines." },
        { name: "Weather Alerts", desc: "Hyper-local weather forecasts for the Sabarimala hill range." },
        { name: "Temple Timings", desc: "Real-time updates on Pooja schedules and temple opening/closing." }
      ]
    },
    {
      title: "Safety & Community",
      features: [
        { name: "Emergency SOS", desc: "One-tap connection to pilgrimage safety officers and medical aid." },
        { name: "Nearby Facilities", desc: "Find nearest medic centers, toilets, and food stalls (Annadhanam)." },
        { name: "Pilgrim Community", desc: "Connect with fellow devotees and share verified travel updates." }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 mb-6">
            Powerful Features for <span className="text-primary-900">Devotees.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We've built Saranam to handle everything from your 41-day vratham to the final climb, so you can focus on Swami Ayyappa.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-10 pb-4 border-b border-slate-100 flex items-center">
                <span className="w-8 h-8 bg-primary-900 text-white rounded-lg flex items-center justify-center text-sm mr-4">{idx + 1}</span>
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.features.map((feature, fIdx) => (
                  <div key={fIdx} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-primary-100 transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-900 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="mt-32 p-12 bg-primary-900 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-6 relative z-10">More features added every season</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto relative z-10">
            Our team works year-round to improve the pilgrimage experience based on feedback from thousands of pilgrims.
          </p>
          <button className="bg-gold-500 text-white px-10 py-4 rounded-full font-bold hover:bg-gold-600 transition-all shadow-lg relative z-10">
            Suggest a Feature
          </button>
        </div>
      </div>
    </div>
  );
}
