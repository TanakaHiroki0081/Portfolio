import Link from "next/link";
import Image from "next/image";
import SkillsOverview from "./components/SkillsOverview";
import MajorProjects from "./components/MajorProjects";
import CertificationsSection from "../components/CertificationsSection";

export default function Home() {
  return (
    <>
      <header className="relative min-h-screen overflow-hidden">
      {/* Light Pastel Gradient Background */}
      <div className="absolute inset-0 hero-bg-enhanced">
          {/* Background Artwork - Personal Painting */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/hero-painting.jpg"
              alt="Artwork by Hiroki Tanaka – abstract painting representing algorithmic flow"
              fill
              className="object-cover blur-[4px] brightness-110"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-8 py-16 sm:py-24 lg:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
              
              {/* Left Column - Text Content (cols 1-6) */}
              <div className="lg:col-span-5 h-full flex flex-col justify-center space-y-8">
                {/* SEO-Optimized H1 - Hidden visually but accessible to screen readers and search engines */}
                <h1 className="sr-only">
                  Hiroki Tanaka - Full-Stack Developer specializing in Algorithms & Optimization
                </h1>

                {/* Visual Main Headline */}
                <div className="animate-fade-in-up">
                  <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#0F172A] leading-tight hero-title" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                    Hiroki Tanaka
                    <br/>
                    <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-semibold text-[#0F172A]/90">
                      Full-Stack Developer | Algorithms & Optimization
                    </span>
                  </h2>
                </div>

                {/* SEO-Optimized Introduction Text */}
                <div className="animate-fade-in-up animation-delay-200 intro-text">
                  <h2 className="text-sm sm:text-base lg:text-lg text-[#0F172A]/80 leading-relaxed font-medium" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                    I'm a full-stack developer from Japan with a strong foundation in algorithms and optimization. My background in competitive programming (ICPC, AtCoder) helps me quickly analyze complex problems and design efficient solutions. I specialize in React/Next.js, FastAPI, and Express, building scalable web applications backed by PostgreSQL, MongoDB, and AWS. I enjoy working with international teams and bringing technical clarity to challenging projects.
                  </h2>
                </div>

                {/* CTA Buttons */}
                <nav className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                  <Link
                    href="/work"
                    className="group relative px-8 py-4 text-white font-semibold rounded-xl transition-all duration-180 transform hover:scale-[1.03] focus:outline-none focus:ring-3 focus:ring-[#2B8AE2] focus:ring-opacity-50 btn-primary-enhanced"
                    aria-label="View my work — Hiroki Tanaka"
                  >
                    <span className="relative z-10 flex items-center justify-center" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                      View My Work
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>

                  <a
                    href="/resume.pdf"
                    download="Hiroki_Tanaka_Resume.pdf"
                    className="group px-8 py-4 text-white font-semibold rounded-xl transition-all duration-180 transform hover:scale-[1.03] focus:outline-none focus:ring-3 focus:ring-[#2B8AE2] focus:ring-opacity-50 resume-button-enhanced"
                    aria-label="Download Resume — Hiroki Tanaka"
                  >
                    <span className="flex items-center justify-center" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                      Resume
                      <svg className="w-5 h-5 ml-2 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                  </a>

                  <Link
                    href="/contact"
                    className="group px-8 py-4 text-[#0F172A] font-semibold rounded-xl transition-all duration-180 transform hover:scale-[1.03] focus:outline-none focus:ring-3 focus:ring-[#2B8AE2] focus:ring-opacity-50 btn-secondary-enhanced"
                    aria-label="Contact me — Hiroki Tanaka"
                  >
                    <span className="flex items-center justify-center" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                      Contact Me
                      <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                  </Link>
                </nav>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-600">
                  <span className="px-4 py-2 rounded-full text-sm font-medium text-[#0F172A] skill-chip-enhanced" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                    React
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-medium text-[#0F172A] skill-chip-enhanced" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                    FastAPI
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-medium text-[#0F172A] skill-chip-enhanced" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                    C++ Algorithms
                  </span>
                  <span className="px-2 py-1 bg-[#FFC857]/20 rounded-full text-xs font-medium text-[#0F172A] skill-chip-enhanced">
                    ✨
                  </span>
                </div>
              </div>

              {/* Right Column - Device Mockup (cols 7-12) */}
              <div className="lg:col-span-7 flex justify-center lg:justify-end animate-fade-in-up animation-delay-800">
                <div className="relative group w-full h-full">
                  {/* Browser Frame */}
                  <div className="relative w-full h-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    
                    {/* Project Screenshot */}
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100">
                      <Image
                        src="/project-screenshot-1.png"
                        alt="UI snapshot: Studysapuri / AI Chatbot demo"
                        fill
                        className="object-cover hero-image-enhanced"
                      />
                    </div>
                  </div>

                  {/* Enhanced Floating Animation */}
                  <div className="absolute inset-0 hero-image-enhanced pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Skills Overview Section */}
      <SkillsOverview />
      
      {/* Major Projects Section */}
      <MajorProjects />
      
      {/* Certifications Section */}
      <CertificationsSection />
    </>
  );
}