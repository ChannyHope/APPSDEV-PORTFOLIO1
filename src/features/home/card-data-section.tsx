import { Button } from "../../components/ui/button";

const projects = [
  { 
    id: 1, 
    title: "TypeScript / React Application", 
    category: "TypeScript", 
    desc: "React and TypeScript web application showcasing modular component structure.",
    imageUrl: "/minkngolor.jpg",
    githubUrl: "https://github.com/ChannyHope/spotify/tree/main/node_modules/react"
  },
  { 
    id: 2, 
    title: "CSS & Web Design Project", 
    category: "Frontend CSS", 
    desc: "Interactive web page layout built with custom styling and responsive design.",
    imageUrl: "/minkngolor.jpg", 
    githubUrl: "https://github.com/ChannyHope/lastnani/blob/main/index.html"
  },
  { 
    id: 3, 
    title: "PHP & Web Architecture", 
    category: "Fullstack / PHP", 
    desc: "Web application combining PHP backend logic with dynamic HTML and CSS layouts.",
    imageUrl: "/minkngolor.jpg",
    githubUrl: "https://github.com/ChannyHope/ChannyPortfolio/blob/main/Project.html"
  }
];

export default function CardDataSection() {
  return (
    <section id="portfolio" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Featured Projects</h2>
          <p className="text-slate-500 text-xs sm:text-sm">Selection of recent development work and application prototypes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
            
                <div className="h-40 sm:h-48 bg-slate-200 flex items-center justify-center overflow-hidden">
                  {proj.imageUrl ? (
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {proj.category} Preview
                    </span>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <span className="text-xs font-semibold text-pink-500 uppercase">{proj.category}</span>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mt-1 mb-2">{proj.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{proj.desc}</p>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <a 
                  href={proj.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button variant="outline" className="w-full text-xs">
                    View Case Study
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}