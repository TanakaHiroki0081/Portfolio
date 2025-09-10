export default function SkillsOverview() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative w-full py-16 md:py-20 overflow-hidden">
      {/* Light Background with subtle blue tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F8FF] to-[#F6FBFF]">
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-12 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 id="skills-title" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight hero-title" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
            Skills Overview
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#0F172A]/70 font-medium" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
            A quick snapshot of the technologies I use to ship reliable, scalable software.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend Card */}
          <div className="group relative rounded-2xl border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-100/90 hover:to-indigo-100/90 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#0F172A]" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <div className="p-2 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                Frontend
              </h3>
              <ul className="space-y-3 text-sm font-medium text-[#0F172A]/90" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <li className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  React.js
                </li>
                <li className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Next.js
                </li>
                <li className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  TypeScript
                </li>
                <li className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  HTML5
                </li>
                <li className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  CSS3
                </li>
              </ul>
            </div>
          </div>

          {/* Backend Card */}
          <div className="group relative rounded-2xl border-2 border-green-200/50 bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:border-green-300 hover:bg-gradient-to-br hover:from-green-100/90 hover:to-emerald-100/90 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#0F172A]" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <div className="p-2 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                Backend
              </h3>
              <ul className="space-y-3 text-sm font-medium text-[#0F172A]/90" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <li className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  FastAPI (Python)
                </li>
                <li className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  Express.js (Node.js)
                </li>
                <li className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  RESTful APIs
                </li>
                <li className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  Auth (JWT/OAuth2)
                </li>
              </ul>
            </div>
          </div>

          {/* Databases Card */}
          <div className="group relative rounded-2xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/80 to-violet-50/80 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-100/90 hover:to-violet-100/90 hover:-translate-y-2 animate-fade-in-up animation-delay-600">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/5 to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#0F172A]" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <div className="p-2 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                Databases
              </h3>
              <ul className="space-y-3 text-sm font-medium text-[#0F172A]/90" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <li className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  MySQL
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  MongoDB
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  Prisma (familiar)
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  SQLAlchemy (familiar)
                </li>
              </ul>
            </div>
          </div>

          {/* Cloud & Infrastructure Card */}
          <div className="group relative rounded-2xl border-2 border-orange-200/50 bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-100/90 hover:to-amber-100/90 hover:-translate-y-2 animate-fade-in-up animation-delay-800">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#0F172A]" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <div className="p-2 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                Cloud & Infrastructure
              </h3>
              <ul className="space-y-3 text-sm font-medium text-[#0F172A]/90" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <li className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  AWS (EC2, S3, RDS, Lambda)
                </li>
                <li className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  Docker
                </li>
                <li className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  GitHub Actions
                </li>
                <li className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  GitLab CI/CD
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Expertise Badges */}
        <div className="mt-12">
          <h3 className="text-lg font-medium mb-4 text-[#0F172A]" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>Core Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React / Next.js",
              "FastAPI",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "C++ Algorithms"
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-full border border-[#2B8AE2]/30 bg-[#2B8AE2]/10 px-4 py-2 text-sm font-medium text-[#2B8AE2] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2B8AE2]/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B8AE2] focus-visible:ring-offset-2"
                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Also Familiar Badges */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4 text-[#0F172A]/70" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>Also Familiar</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Unity (C#)",
              "Google Apps Script",
              "Redis",
              "GraphQL",
              "Testing Frameworks (Jest, Pytest)",
              "Linux/Bash"
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300/60 bg-gray-100/80 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-200/90 hover:border-gray-400/80 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B8AE2] focus-visible:ring-offset-2"
                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
