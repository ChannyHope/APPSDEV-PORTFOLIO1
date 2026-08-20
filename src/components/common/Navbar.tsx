import { useState } from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center">
            P
          </span>
          <span className="font-bold text-lg text-slate-900">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-pink-500 transition-colors">Home</a>
          <a href="#process" className="hover:text-pink-500 transition-colors">Process</a>
          <a href="#portfolio" className="hover:text-pink-500 transition-colors">Portfolio</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary">Hire Me</Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-pink-500 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-2xl font-bold">✕</span>
          ) : (
            <span className="text-2xl font-bold">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 flex flex-col gap-4 text-slate-700 font-medium text-sm">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-pink-500 py-1">Home</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="hover:text-pink-500 py-1">Process</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-pink-500 py-1">Portfolio</a>
          <Button variant="primary" className="w-full mt-2">Hire Me</Button>
        </div>
      )}
    </header>
  );
}