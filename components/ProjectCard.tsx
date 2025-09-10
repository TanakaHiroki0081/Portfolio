import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { formatProjectPeriod } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";

interface Project {
  id: string;
  name: string;
  folderName: string;
  technologies?: string[];
  category?: string;
  period?: string;
  description?: string;
  goalsAchieved?: string[];
  rating?: number;
  liveUrl?: string;
  githubUrl?: string;
  ja?: {
    name?: string;
    category?: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();
  // Get the first image from the project folder
  const fallbackImages = [
    `/projects/${project.folderName}/main.jpg`,
    `/projects/${project.folderName}/Screenshot_1.jpg`,
    `/projects/${project.folderName}/screenshot_1.jpg`,
    `/projects/${project.folderName}/Screenshot_2.jpg`,
    `/projects/${project.folderName}/Screenshot_3.jpg`,
    `/projects/${project.folderName}/Screenshot_4.jpg`,
    `/projects/${project.folderName}/Screenshot_5.jpg`,
    `/projects/${project.folderName}/Screenshot_6.jpg`,
    `/projects/${project.folderName}/main.webp`,
    `/projects/${project.folderName}/main.png`,
  ];
  const projectImage = fallbackImages[0];
  const [imageErrorIndex, setImageErrorIndex] = React.useState<number>(0);
  const currentImageSrc = fallbackImages[Math.min(imageErrorIndex, fallbackImages.length - 1)];
  
  // Use project data or fallback to defaults
  const goalsAchieved = project.goalsAchieved || [
    "Scalable Architecture",
    "User Authentication",
    "Real-time Updates",
    "Mobile Responsive"
  ];
  
  const rating = project.rating || 4.5;
  const projectUrl = project.liveUrl || `https://${project.name.toLowerCase().replace(/\s+/g, '-')}.com`;

  const formattedPeriod = formatProjectPeriod(project.id);

  return (
    <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:border-white/40 h-full flex flex-col">
      {/* Clickable Card Area - Goes to Project URL */}
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block flex-1"
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={currentImageSrc}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageErrorIndex((idx) => idx + 1)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Project Category Badge - Top Left */}
          <div className="absolute top-4 left-4 bg-purple-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
            {lang === 'ja' && project.ja?.category ? project.ja.category : project.category}
          </div>
          
          {/* Shortcut Button - Top Right */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 flex flex-col">
          {/* Project Name */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 min-h-[28px]" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
            {lang === 'ja' && project.ja?.name ? project.ja.name : project.name}
          </h3>

          {/* Goals Achieved moved to details page */}

          {/* Rating Stars */}
          <div className="flex items-center justify-between mb-3 min-h-[32px]">
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(rating)
                        ? 'text-yellow-400 fill-current'
                        : star === Math.ceil(rating) && rating % 1 !== 0
                        ? 'text-yellow-400 fill-current opacity-50'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-white/80 font-medium hidden sm:inline" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                {rating}/5
              </span>
            </div>
            {(formattedPeriod || project.period) && (
              <span className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded-full border border-white/20 whitespace-nowrap">
                {formattedPeriod || project.period}
              </span>
            )}
          </div>

          {/* Technologies moved to details page */}
        </div>
      </a>

      {/* View Details Button - Separate from card click */}
      <div className="px-5 pb-4 mt-auto">
        <Link
          href={`/work/${project.id}`}
          className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-blue-500/30 hover:border-blue-400/50"
          style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="flex items-center justify-center">
            {lang === 'ja' ? '詳細を見る' : 'View Details'}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
