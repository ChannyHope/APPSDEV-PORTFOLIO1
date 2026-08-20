export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-pink-500 text-white font-bold text-xs flex items-center justify-center">
            P
          </span>
          <span className="font-semibold text-slate-200 text-sm">APPSDEV</span>
        </div>
        <p className="text-xs text-slate-500">
         {new Date().getFullYear()} Copyright © 2026 Christian Nunez. All rights reserved
        </p>
      </div>
    </footer>
  );
}