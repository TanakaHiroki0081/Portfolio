'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  category: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  skills: string[];
  verified: boolean;
}

const getCertificationData = (id: number, t: any) => {
  switch (id) {
    case 1:
      return {
        name: t('cert_aws_name'),
        issuer: t('cert_aws_issuer'),
        category: "Cloud Computing",
        description: t('cert_aws_desc'),
        skills: t('cert_aws_skills').split(', ')
      };
    case 2:
      return {
        name: t('cert_sql_name'),
        issuer: t('cert_sql_issuer'),
        category: "Database",
        description: t('cert_sql_desc'),
        skills: t('cert_sql_skills').split(', ')
      };
    case 3:
      return {
        name: t('cert_fullstack_name'),
        issuer: t('cert_fullstack_issuer'),
        category: "Web Development",
        description: t('cert_fullstack_desc'),
        skills: t('cert_fullstack_skills').split(', ')
      };
    case 4:
      return {
        name: t('cert_gcp_name'),
        issuer: t('cert_gcp_issuer'),
        category: "Cloud Computing",
        description: t('cert_gcp_desc'),
        skills: t('cert_gcp_skills').split(', ')
      };
    case 5:
      return {
        name: t('cert_react_name'),
        issuer: t('cert_react_issuer'),
        category: "Web Development",
        description: t('cert_react_desc'),
        skills: t('cert_react_skills').split(', ')
      };
    case 6:
      return {
        name: t('cert_ml_name'),
        issuer: t('cert_ml_issuer'),
        category: "Machine Learning",
        description: t('cert_ml_desc'),
        skills: t('cert_ml_skills').split(', ')
      };
    default:
      return {
        name: '',
        issuer: '',
        category: '',
        description: '',
        skills: []
      };
  }
};

const certifications: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    category: "Cloud Computing",
    date: "2024-01-15",
    description: "Foundational understanding of AWS Cloud concepts, services, and security.",
    image: "/certifications/aws-cert.png",
    alt: "AWS Certified Cloud Practitioner Badge",
    skills: ["AWS", "Cloud Computing", "Security"],
    verified: true
  },
  {
    id: 2,
    name: "SQL & Databases Professional Certificate",
    issuer: "Meta",
    category: "Database",
    date: "2023-11-20",
    description: "Comprehensive database management and SQL query optimization skills.",
    image: "/certifications/sql-cert.png",
    alt: "SQL & Databases Professional Certificate",
    skills: ["SQL", "Database Design", "Query Optimization"],
    verified: true
  },
  {
    id: 3,
    name: "Full-Stack Web Development with React & Node",
    issuer: "Coursera",
    category: "Web Development",
    date: "2023-09-10",
    description: "Complete full-stack development using React, Node.js, and modern web technologies.",
    image: "/certifications/fullstack-cert.png",
    alt: "Full-Stack Web Development Certificate",
    skills: ["React", "Node.js", "JavaScript", "MongoDB"],
    verified: true
  },
  {
    id: 4,
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    category: "Cloud Computing",
    date: "2024-02-28",
    description: "Advanced Google Cloud Platform development and deployment expertise.",
    image: "/certifications/gcp-cert.png",
    alt: "Google Cloud Professional Developer Badge",
    skills: ["GCP", "Cloud Development", "DevOps"],
    verified: true
  },
  {
    id: 5,
    name: "Advanced React Development",
    issuer: "React Training",
    category: "Web Development",
    date: "2023-12-05",
    description: "Advanced React patterns, hooks, and performance optimization techniques.",
    image: "/certifications/react-advanced-cert.png",
    alt: "Advanced React Development Certificate",
    skills: ["React", "Hooks", "Performance", "State Management"],
    verified: true
  },
  {
    id: 6,
    name: "Machine Learning Fundamentals",
    issuer: "Stanford University",
    category: "Machine Learning",
    date: "2023-08-15",
    description: "Introduction to machine learning algorithms and data science principles.",
    image: "/certifications/ml-cert.png",
    alt: "Machine Learning Fundamentals Certificate",
    skills: ["Machine Learning", "Python", "Data Science", "Statistics"],
    verified: true
  }
];

const categories = ["All", "Cloud Computing", "Web Development", "Database", "Machine Learning"];

export default function CertificationsPage() {
  const { t, lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const labelForCategory = (category: string) => {
    switch (category) {
      case 'All': return t('certs_categories_all');
      case 'Cloud Computing': return t('certs_categories_cloud');
      case 'Web Development': return t('certs_categories_web');
      case 'Database': return t('certs_categories_db');
      case 'Machine Learning': return t('certs_categories_ml');
      default: return category;
    }
  };


  const filteredCertifications = useMemo(() => {
    return certifications.filter(cert => {
      const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredCertifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCertifications = filteredCertifications.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Main Section - Matching Hero Height */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Enhanced Background Artwork */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50 via-pink-50 to-blue-50 opacity-40"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1 flex flex-col">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 hero-title flex items-center justify-center gap-3" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                <span className="text-5xl md:text-6xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                  🏆
                </span>
                <span>{t('certs_title')}</span>
              </h1>
            </div>

            {/* Search and Filter Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-xl border border-blue-100 p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Search Input */}
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder={t('certs_search_ph')}
                        style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-gray-700 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="lg:w-64">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-4 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-gray-700"
                      style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {labelForCategory(category)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Results Count and Clear Filters */}
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                    <span className="font-semibold text-gray-800">{filteredCertifications.length}</span> {t('certs_found_suffix')}
                    {searchTerm && (
                      <span className="ml-2 text-blue-600">
                        {t('certs_for_kw')}<span className="font-medium">{searchTerm}</span>{t('certs_for_kw_suffix')}
                      </span>
                    )}
                    {selectedCategory !== 'All' && (
                      <span className="ml-2 text-blue-600">
                        {t('certs_in_cat')}<span className="font-medium">{labelForCategory(selectedCategory)}</span>{t('certs_in_cat_suffix')}
                      </span>
                    )}
                  </div>
                  {(searchTerm || selectedCategory !== 'All') && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('All');
                      }}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center gap-1"
                      style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {t('certs_clear_filters')}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="flex-1 flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                {paginatedCertifications.map((cert, index) => {
                  const certData = getCertificationData(cert.id, t);
                  return (
                    <div
                      key={cert.id}
                      className={`group rounded-2xl animate-fade-in-up stagger-${(index % 6) + 1} bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/50 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
                    >
                      {/* Certificate Image */}
                      <div className="relative h-48 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-t-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/50 via-pink-50/50 to-blue-50/50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                        </div>
                        {cert.verified && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {t('certs_verified')}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Certificate Content */}
                      <div className="p-6 bg-gradient-to-br from-white/80 to-blue-50/50 rounded-b-2xl">
                        <div className="mb-4">
                          <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                            {labelForCategory(cert.category)}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                          {certData.name}
                        </h3>
                        
                        <p className="text-blue-600 text-sm mb-3 font-semibold" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                          {certData.issuer}
                        </p>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                          {certData.description}
                        </p>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {certData.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                          {t('certs_issued')}: {new Date(cert.date).toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mb-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-6 py-3 text-sm font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
                    style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                  >
                    {t('certs_prev')}
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl transform scale-105'
                          : 'text-gray-700 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg border border-gray-200 hover:border-blue-300'
                      }`}
                      style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-6 py-3 text-sm font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
                    style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                  >
                    {t('certs_next')}
                  </button>
                </div>
              )}

              {/* Back to Home */}
              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-indigo-700"
                  style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {t('certs_back_home')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}