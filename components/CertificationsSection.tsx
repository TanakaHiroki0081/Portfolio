import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const CertificationsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const getCertificationData = (id: number) => {
    switch (id) {
      case 1:
        return {
          name: t('cert_aws_name'),
          issuer: t('cert_aws_issuer'),
          category: t('certs_categories_cloud'),
          description: t('cert_aws_desc'),
          skills: t('cert_aws_skills').split(', ')
        };
      case 2:
        return {
          name: t('cert_sql_name'),
          issuer: t('cert_sql_issuer'),
          category: t('certs_categories_db'),
          description: t('cert_sql_desc'),
          skills: t('cert_sql_skills').split(', ')
        };
      case 3:
        return {
          name: t('cert_fullstack_name'),
          issuer: t('cert_fullstack_issuer'),
          category: t('certs_categories_web'),
          description: t('cert_fullstack_desc'),
          skills: t('cert_fullstack_skills').split(', ')
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

  const featuredCertifications = [
    { id: 1, verified: true },
    { id: 2, verified: true },
    { id: 3, verified: true }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hero-title flex items-center justify-center gap-3" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
            <span className="text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
              🏆
            </span>
            <span>{t('certs_featured_title')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
            {t('certs_featured_desc')}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCertifications.map((cert, index) => {
            const certData = getCertificationData(cert.id);
            return (
              <div
                key={cert.id}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-blue-300 overflow-hidden animate-fade-in-up stagger-${index + 1} card-enhanced hover-lift-enhanced`}
              >
                {/* Certificate Header */}
                <div className="relative h-32 bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    {cert.verified && (
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {t('certs_verified')}
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {certData.category}
                    </span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {certData.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 font-medium">
                    {certData.issuer}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {certData.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {certData.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Certifications Button */}
        <div className="text-center">
          <Link
            href="/certifications"
            className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text白 font-bold rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl overflow-hidden"
            style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center">
              {t('certs_view_all_cta')}
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -top-2 -left-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
