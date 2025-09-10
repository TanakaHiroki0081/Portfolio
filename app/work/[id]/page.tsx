'use client';

import Image from "next/image";
import Link from "next/link";
import { projects, formatProjectPeriod } from "@/data/projects";
import { useState, use, useEffect } from "react";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Function to get the main demo image
function getMainDemo(folderName: string): string {
  return `/projects/${folderName}/main.jpg`;
}

// Function to get actual images from a project folder
function getProjectImages(folderName: string): string[] {
  const commonImages = [
    'main.jpg',
    'Screenshot_1.jpg',
    'Screenshot_2.jpg', 
    'Screenshot_3.jpg',
    'Screenshot_4.jpg',
    'Screenshot_5.jpg',
    'Screenshot_6.jpg',
    'screenshot_1.jpg',
    'screenshot_2.jpg',
    'screenshot_3.jpg',
    'bandicam 2025-09-08 08-12-55-622.mp4'
  ];
  
  return commonImages.map(image => `/projects/${folderName}/${image}`);
}

// Component for individual gallery image with error handling
function GalleryImage({ 
  src, 
  alt, 
  index 
}: { 
  src: string; 
  alt: string; 
  index: number; 
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return null;
  }

  return (
    <div className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        onError={() => setImageError(true)}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-full text-sm">
            Image {index + 1}
          </span>
        </div>
      </div>
    </div>
  );
}

// Component for video files
function VideoPlayer({ 
  src, 
  alt, 
  index 
}: { 
  src: string; 
  alt: string; 
  index: number; 
}) {
  return (
    <div className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
      <video
        src={src}
        controls
        className="w-full h-full object-cover"
        poster="/placeholder-video.jpg"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-full text-sm">
            Video {index + 1}
          </span>
        </div>
      </div>
    </div>
  );
}

// Component for main demo (carousel) image/video
function MainDemo({ 
  src, 
  alt, 
  isVideo,
  onPrev,
  onNext,
  currentIndex,
  total,
  wrapEffect,
  isPriority
}: { 
  src: string; 
  alt: string; 
  isVideo: boolean;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
  wrapEffect: 'left' | 'right' | null;
  isPriority: boolean;
}) {
  const [mediaError, setMediaError] = useState(false);

  if (mediaError) {
    return (
      <div className="w-full h-96 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
        <div className="text-center">
          <svg className="w-12 h-12 text-white/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-white/60">Media not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-96 rounded-xl overflow-hidden shadow-xl border border-white/10 ${wrapEffect ? 'ring-2 ring-white/30' : ''}`}>
      {isVideo ? (
        <video
          src={src}
          controls
          preload="metadata"
          className="w-full h-full object-cover"
          onError={() => setMediaError(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover"
          onError={() => setMediaError(true)}
          priority={isPriority}
          loading={isPriority ? 'eager' : 'lazy'}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      <button
        aria-label="Previous media"
        onClick={onPrev}
        className={`absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all ${wrapEffect === 'left' ? 'scale-110 ring-2 ring-white/50' : ''}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Next media"
        onClick={onNext}
        className={`absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all ${wrapEffect === 'right' ? 'scale-110 ring-2 ring-white/50' : ''}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-3 right-3 text-xs text-white/80 bg-black/30 rounded-full px-2 py-1 border border-white/10">
        {currentIndex + 1} / {total}
      </div>
    </div>
  );
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // Unwrap the params Promise using React.use()
  const { id } = use(params);
  
  // Find the project in the projects array by id
  const project = projects.find(p => p.id === id);

  // If project not found, render a "Project Not Found" message
  if (!project) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              Project Not Found
            </h1>
            <p className="text-white/60 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Work
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Prepare media list for carousel by checking actual existence via HEAD requests
  const mainDemo = getMainDemo(project.folderName);
  const candidateMedia = [mainDemo, ...getProjectImages(project.folderName).filter(img => !img.includes('main.jpg'))];
  const [media, setMedia] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrapEffect, setWrapEffect] = useState<'left' | 'right' | null>(null);
  const [isLoadingMedia, setIsLoadingMedia] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const checks = await Promise.all(
        candidateMedia.map(async (url) => {
          try {
            const res = await fetch(url, { method: 'HEAD' });
            return res.ok ? url : null;
          } catch {
            return null;
          }
        })
      );
      if (!cancelled) {
        const existing = checks.filter((u): u is string => Boolean(u));
        // Deduplicate by basename without extension (case-insensitive)
        const seen = new Set<string>();
        const deduped: string[] = [];
        for (const url of existing) {
          const file = url.split('/').pop() || url;
          const base = file.toLowerCase().replace(/\.(jpg|jpeg|png|webp|mp4)$/i, '');
          if (!seen.has(base)) {
            seen.add(base);
            deduped.push(url);
          }
        }
        setMedia(deduped);
        setCurrentIndex(0);
        setIsLoadingMedia(false);
      }
    })();
    return () => { cancelled = true; };
  }, [project.folderName]);

  const total = media.length;
  const currentSrc = total > 0 ? media[currentIndex] : '';
  const isVideo = total > 0 ? currentSrc.endsWith('.mp4') : false;

  const goPrev = () => {
    if (total === 0) return;
    const willWrap = currentIndex === 0;
    const nextIndex = (currentIndex - 1 + total) % total;
    setCurrentIndex(nextIndex);
    if (willWrap) {
      setWrapEffect('left');
      setTimeout(() => setWrapEffect(null), 180);
    }
  };
  const goNext = () => {
    if (total === 0) return;
    const willWrap = currentIndex === total - 1;
    const nextIndex = (currentIndex + 1) % total;
    setCurrentIndex(nextIndex);
    if (willWrap) {
      setWrapEffect('right');
      setTimeout(() => setWrapEffect(null), 180);
    }
  };

  // Counts and indices for indicator
  const images = media.filter(m => !m.endsWith('.mp4'));
  const videos = media.filter(m => m.endsWith('.mp4'));
  const imagesCount = images.length;
  const videosCount = videos.length;
  const currentVideoNum = isVideo ? (videos.indexOf(currentSrc) + 1) : null;
  const currentImageNum = !isVideo && total > 0 ? (images.indexOf(currentSrc) + 1) : null;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Clean subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Work
        </Link>

        {/* Project Header with Main Demo (carousel) and Detailed Description */}
        <div className="mb-12" onKeyDown={(e) => { if (e.key === 'ArrowLeft') goPrev(); if (e.key === 'ArrowRight') goNext(); }} tabIndex={0}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Main Demo Image/Video */}
            <div className="order-2 lg:order-1">
              {total > 0 ? (
                <div className="relative">
              <MainDemo
                    src={currentSrc}
                    alt={`${project.name} - Media ${currentIndex + 1}`}
                    isVideo={isVideo}
                    onPrev={goPrev}
                    onNext={goNext}
                    currentIndex={currentIndex}
                    total={total}
                    wrapEffect={wrapEffect}
                    isPriority={currentIndex === 0}
                  />
                  <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                    <span>
                      Screenshots: {imagesCount} · Videos: {videosCount}
                    </span>
                    <span>
                      {isVideo && currentVideoNum ? `Video ${currentVideoNum}/${videosCount}` : currentImageNum ? `Image ${currentImageNum}/${imagesCount}` : ''}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-96 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <p className="text-white/60">No media available</p>
                </div>
              )}
            </div>

            {/* Project Info with Detailed Description */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                {project.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {(formatProjectPeriod(project.id) || project.period) && (
                  <span className="text-white/80 font-medium">
                    📅 {formatProjectPeriod(project.id) || project.period}
                  </span>
                )}
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full border border-purple-500/30">
                  {project.category}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white/90 text-sm rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Detailed Project Description */}
              <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                  📋 Project Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {(project.rating || project.liveUrl || project.githubUrl) && (
                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                    {project.rating && (
                      <div className="flex items-center bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex items-center mr-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-5 h-5 ${
                                star <= Math.floor(project.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : star === Math.ceil(project.rating) && project.rating % 1 !== 0
                                  ? 'text-yellow-400 fill-current opacity-50'
                                  : 'text-gray-400'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-white/90 text-sm font-semibold" style={{ fontFamily: 'Consolas, \"Courier New\", monospace' }}>
                          {project.rating}/5
                        </span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3 lg:col-span-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-200 border border-white/20"
                          style={{ fontFamily: 'Consolas, \"Courier New\", monospace' }}
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Site
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-all duration-200"
                          style={{ fontFamily: 'Consolas, \"Courier New\", monospace' }}
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Sections */}
        <div className="space-y-8 mb-12">
          {/* Purpose */}
          {project.purpose && (
            <section className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                🎯 Purpose
              </h2>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                {project.purpose}
              </p>
            </section>
          )}

          {/* Role */}
          {project.role && (
            <section className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                👨‍💻 My Role
              </h2>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                {project.role}
              </p>
            </section>
          )}

          {/* Approach */}
          {project.approach && (
            <section className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                🔧 Approach
              </h2>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                {project.approach}
              </p>
            </section>
          )}

          {/* Results */}
          {project.results && (
            <section className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                📊 Results
              </h2>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                {project.results}
              </p>
            </section>
          )}

          {/* Goals Achieved */}
          {project.goalsAchieved && project.goalsAchieved.length > 0 && (
            <section className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <span className="w-3 h-3 bg-indigo-400 rounded-full mr-3"></span>
                ✅ Goals Achieved
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.goalsAchieved.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white/5 rounded-lg p-3 border border-white/10"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-white/90 text-sm" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Rating & Links in responsive grid */}
          {/* Ratings and Links moved into Project Overview card */}
        </div>

        {/* External Links moved into grid with Rating */}

        {/* Additional media tiles removed in favor of carousel navigation */}

        {/* Back Button at Bottom */}
        <div className="text-center">
          <Link
            href="/work"
            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>
        </div>
      </div>
    </div>
  );
} 