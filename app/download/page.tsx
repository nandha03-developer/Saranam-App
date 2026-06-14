export default function Download() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 mb-6">
            Get Saranam on Your Device
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Take your digital companion with you. Experience a seamless and sacred pilgrimage to Sabarimala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Android Card */}
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mb-8">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9988-.4477-.9988-.9988s.4477-.9988.9988-.9988.9988.4477.9988.9988-.4477.9988-.9988.9988zm-11.046 0c-.5511 0-.9988-.4477-.9988-.9988s.4477-.9988.9988-.9988.9988.4477.9988.9988-.4477.9988-.9988.9988zm11.4245-5.3014l1.5037-2.6046c.1065-.1844.0433-.4201-.1411-.5266-.1844-.1065-.4201-.0433-.5266.1411l-1.5237 2.6392c-1.3414-.6113-2.8532-.9581-4.4446-.9581-1.5914 0-3.1032.3468-4.4446.9581l-1.5237-2.6392c-.1065-.1844-.3422-.2476-.5266-.1411-.1844.1065-.2476.3422-.1411.5266l1.5037 2.6046c-2.7301 1.4883-4.5772 4.306-4.7042 7.5714h15.6033c-.127-3.2654-1.9741-6.0831-4.7042-7.5714z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">Android</h2>
            <p className="text-slate-600 mb-10">Download the APK directly or get it from the Google Play Store.</p>
            <div className="space-y-4 w-full">
              <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-slate-800 transition-all">
                <span>Google Play Store</span>
              </button>
              <button className="w-full border border-slate-200 text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-slate-50 transition-all">
                <span>Direct APK Download</span>
              </button>
            </div>
          </div>

          {/* iOS Card */}
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.04.04-2.3.69-3.05 1.56-.67.77-1.26 1.97-1.1 3.1 1.16.09 2.32-.68 3.05-1.51z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">iOS</h2>
            <p className="text-slate-600 mb-10">Available on the Apple App Store for iPhone and iPad.</p>
            <div className="space-y-4 w-full">
              <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-slate-800 transition-all">
                <span>Apple App Store</span>
              </button>
              <div className="py-4 text-sm text-slate-400 font-medium italic">Coming Soon for iOS</div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-20 max-w-3xl mx-auto p-10 bg-white/50 rounded-[2rem] border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-4 font-outfit">System Requirements</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div>
              <span>Android 8.0 (Oreo) or higher</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div>
              <span>iOS 14.0 or higher</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div>
              <span>Active internet connection for live updates</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
