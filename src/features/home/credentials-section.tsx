const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS"]
  },
  {
    title: "Backend & Languages",
    skills: ["PHP", "Java", "C", "C#", "MySQL", "Node.js"]
  },
  {
    title: "Tools & Architecture",
    skills: ["Git & GitHub", "Vite", "REST APIs", "Component Driven UI", "Responsive Design", "Vercel"]
  }
];

export default function CredentialsSection() {
  return (
    <section id="process" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        

        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-pink-500 uppercase tracking-widest mb-2 block">
            About & Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Technical Background & Skill Set
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            I am a full-stack web developer passionate about building scalable web applications, 
            intuitive user interfaces, and robust backend structures using modern languages and frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-pink-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-4 pb-2 border-b border-slate-200">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-sm hover:border-pink-500 hover:text-pink-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}