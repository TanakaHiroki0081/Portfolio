'use client';

import React, { useState } from "react";
import { projects, projectDateMap, formatProjectPeriod } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Create a list of categories (exclude Data Visualization, Internet of Things; include E-commerce)
  const categories = ["All", "Web Development", "E-commerce", "Data Analytics", "Artificial Intelligence"];

  // projectDateMap now comes from data layer

  // Filter projects based on selected category
  const filteredProjects = (selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory))
    .slice()
    .sort((a, b) => {
      const aDates = projectDateMap[a.id];
      const bDates = projectDateMap[b.id];
      const parse = (s: string) => new Date(s.replace(/\//g, '-')).getTime();
      const aEnd = aDates ? parse(aDates.end) : 0;
      const bEnd = bDates ? parse(bDates.end) : 0;
      if (bEnd !== aEnd) return bEnd - aEnd;
      const aStart = aDates ? parse(aDates.start) : 0;
      const bStart = bDates ? parse(bDates.start) : 0;
      return bStart - aStart;
    });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Clean subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
            My Work
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore my portfolio of projects across different industries and technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white/15 text-white border border-white/30 shadow-sm'
                  : 'bg-white/5 text-white/90 hover:bg-white/10 border border-white/20'
              }`}
              style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - 4 per row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">
              No projects found in the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}