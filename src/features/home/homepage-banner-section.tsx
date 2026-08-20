import { Button } from "../../components/ui/button";

export default function HomepageBannerSection() {
  return (
    <section id="home" className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-b from-pink-50/40 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="text-center md:text-left order-2 md:order-1">
          <span className="inline-block text-pink-500 font-semibold mb-2 sm:mb-3 tracking-wide text-xs sm:text-sm">
            WELCOME TO MY PORTFOLIO
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Developer</span>
          </h1>
          <p className="text-slate-600 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            I build clean, responsive, and user-centric web applications following best practices and modern architectures.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button>Say Hello!</Button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl bg-gradient-to-tr from-pink-100 to-rose-100 p-3 shadow-xl">
            <div className="w-full h-full rounded-xl bg-white overflow-hidden shadow-inner">
              <img 
                src="/Pfbuzzcut.jpg" 
                alt="Profile photo" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}