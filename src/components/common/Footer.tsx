export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Contact & Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800 text-center md:text-left">
          
          {/* Brand & Brief Bio */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-pink-500 text-white font-bold text-xs flex items-center justify-center">
                P
              </span>
              <span className="font-semibold text-slate-200 text-sm">APPSDEV</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto md:mx-0">
              Web application developer focused on modern frontend frameworks, responsive UI design, and backend systems.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Contact Information
            </h3>
            <p className="text-xs text-slate-400">
              <span className="text-pink-500 font-medium">Email:</span>{" "}
              <a href="mailto:your.email@example.com" className="hover:text-pink-400 transition-colors">
                your.email@example.com
              </a>
            </p>
            <p className="text-xs text-slate-400">
              <span className="text-pink-500 font-medium">Phone:</span>{" "}
              <a href="tel:+639000000000" className="hover:text-pink-400 transition-colors">
                +63 900 000 0000
              </a>
            </p>
            <p className="text-xs text-slate-400">
              <span className="text-pink-500 font-medium">Location:</span> Cordova, Cebu, Philippines
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="flex justify-center md:justify-start gap-3 text-xs">
              <a 
                href="https://github.com/ChannyHope" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 rounded bg-slate-800 hover:bg-pink-500 hover:text-white transition-colors text-slate-300"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-slate-500">
          Copyright © {new Date().getFullYear()} Christian Nunez. All rights reserved.
        </div>

      </div>
    </footer>
  );
}