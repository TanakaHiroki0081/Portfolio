"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

interface Project {
  id: number;
  title: string;
  purpose: string;
  role: string;
  tech: string[];
  image: string;
  link: string;
  siteUrl: string;
  achievements: string[];
}

export default function MajorProjects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "Studysapuri Middle School Web App Renewal",
      purpose: "Modernize learning platform and improve student experience",
      role: "Frontend Engineer",
      tech: ["Next.js", "React", "GraphQL"],
      image: "/projects/project2/main.jpg",
      link: "/work/studysapuri",
      siteUrl: "https://studysapuri.jp",
      achievements: [
        "Redesigned user interface improving student engagement by 40%",
        "Implemented responsive design supporting 50,000+ concurrent users",
        "Optimized page load times by 60% using Next.js SSR",
        "Integrated GraphQL API reducing data fetching overhead by 35%"
      ]
    },
    {
      id: 2,
      title: "MeddMax eCommerce Platform Overhaul",
      purpose: "B2B medical supply company migration from Wix to BigCommerce",
      role: "Lead Developer",
      tech: ["BigCommerce Stencil", "HTML", "CSS", "JavaScript", "Liquid Templating"],
      image: "/projects/project13/main.jpg",
      link: "/work/meddmax",
      siteUrl: "https://meddmax.com/",
      achievements: [
        "Enhanced user experience with seamless shopping across devices",
        "Increased sales through B2B bulk ordering features",
        "Improved search rankings with SEO optimization",
        "Successfully migrated all data from Wix to BigCommerce platform"
      ]
    },
    {
      id: 3,
      title: "Henworld.ie – Ireland's Hen Party Store",
      purpose: "Comprehensive e-commerce platform for party planning",
      role: "Frontend / E-commerce Developer",
      tech: ["BigCommerce", "SEO", "Analytics", "AfterShip"],
      image: "/projects/project10/main.jpg",
      link: "/work/henworld",
      siteUrl: "https://henworld.ie",
      achievements: [
        "Increased online sales by 150% through SEO optimization",
        "Implemented real-time inventory tracking reducing stockouts by 80%",
        "Built custom analytics dashboard improving conversion rates by 25%",
        "Integrated AfterShip API providing 99% accurate delivery tracking"
      ]
    }
  ];

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative w-full py-16 md:py-20 overflow-hidden">
      {/* Light Background with subtle green tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0FFF0] to-[#F5FFF5]">
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
        <div className="text-center mb-16">
          <h2 id="projects-title" className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-4 hero-title" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
            {t('projects_title')}
          </h2>
          <p className="text-base md:text-lg text-[#0F172A]/70 font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
            {t('projects_subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Project Image - Clickable */}
              <div 
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-[#2B8AE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-3 leading-tight" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                  {project.title}
                </h3>

                {/* Purpose */}
                <p className="text-sm text-[#0F172A]/80 mb-4 leading-relaxed" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                  {project.purpose}
                </p>

                {/* Role */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#2B8AE2]/10 text-[#2B8AE2] text-xs font-medium rounded-full border border-[#2B8AE2]/20" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                    {project.role}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100/80 text-gray-700 text-xs font-medium rounded-md border border-gray-200/60" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Case Study Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-[#2B8AE2] hover:bg-[#2563eb] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B8AE2] focus-visible:ring-offset-2"
                  style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                >
{t('projects_view_case_study')}
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#2B8AE2] to-[#1E40AF] hover:from-[#2563eb] hover:to-[#1D4ED8] text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#2B8AE2]/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2B8AE2] focus-visible:ring-offset-4 overflow-hidden"
            style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
{t('projects_see_more')}
              <svg className="w-6 h-6 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2B8AE2] to-[#1E40AF] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </Link>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} project image`}
                  fill
                  className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none"
                />
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4 leading-tight" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                  {selectedProject.title}
                </h3>

                <p className="text-lg text-[#0F172A]/80 mb-6 leading-relaxed" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                  {selectedProject.purpose}
                </p>

                {/* Role */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-[#2B8AE2]/10 text-[#2B8AE2] text-sm font-medium rounded-full border border-[#2B8AE2]/20" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                    {selectedProject.role}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#0F172A] mb-3" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
{t('projects_tech_stack')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100/80 text-gray-700 text-sm font-medium rounded-md border border-gray-200/60" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#0F172A] mb-4" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
{t('projects_key_achievements')}
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#2B8AE2] mt-2 flex-shrink-0"></div>
                        <span className="text-[#0F172A]/80 leading-relaxed" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2B8AE2] hover:bg-[#2563eb] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B8AE2] focus-visible:ring-offset-2"
                    style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                  >
{t('projects_view_site')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/60 hover:bg-white/80 text-[#0F172A] font-semibold rounded-lg border border-white/40 transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B8AE2] focus-visible:ring-offset-2"
                    style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                  >
{t('projects_close')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
