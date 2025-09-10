'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Code, 
  Zap, 
  Cpu, 
  Gamepad2, 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle,
  ChevronRight,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';

const AboutPage = () => {
  const { t } = useLanguage();
  const [activeSkillTab, setActiveSkillTab] = useState('all');

  const coreInterests = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('core_algorithms_title'),
      description: t('core_algorithms_desc')
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: t('core_fullstack_title'),
      description: t('core_fullstack_desc')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('core_automation_title'),
      description: t('core_automation_desc')
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: t('core_game_title'),
      description: t('core_game_desc')
    }
  ];

  const education = [
    {
      year: t('edu_tokyo_tech_year'),
      institution: t('edu_tokyo_tech_institution'),
      degree: t('edu_tokyo_tech_degree'),
      details: t('edu_tokyo_tech_details')
    },
    {
      year: t('edu_aizu_year'),
      institution: t('edu_aizu_institution'),
      degree: t('edu_aizu_degree'),
      details: t('edu_aizu_details')
    }
  ];

  const skills = {
    all: [
      { name: "React", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "FastAPI", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "Python", category: "backend" },
      { name: "Node.js", category: "backend" },
      { name: "PostgreSQL", category: "database" },
      { name: "MongoDB", category: "database" },
      { name: "MySQL", category: "database" },
      { name: "AWS", category: "tools" },
      { name: "Docker", category: "tools" },
      { name: "Git", category: "tools" },
      { name: "C/C++", category: "languages" },
      { name: "Java", category: "languages" }
    ],
    frontend: [
      { name: "React", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "HTML/CSS", category: "frontend" }
    ],
    backend: [
      { name: "FastAPI", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "Python", category: "backend" },
      { name: "Node.js", category: "backend" },
      { name: "REST APIs", category: "backend" },
      { name: "GraphQL", category: "backend" }
    ],
    database: [
      { name: "PostgreSQL", category: "database" },
      { name: "MongoDB", category: "database" },
      { name: "MySQL", category: "database" },
      { name: "Redis", category: "database" },
      { name: "SQLite", category: "database" }
    ],
    tools: [
      { name: "AWS", category: "tools" },
      { name: "Docker", category: "tools" },
      { name: "Git", category: "tools" },
      { name: "Linux", category: "tools" },
      { name: "VSCode", category: "tools" }
    ],
    languages: [
      { name: "C/C++", category: "languages" },
      { name: "Python", category: "languages" },
      { name: "JavaScript", category: "languages" },
      { name: "TypeScript", category: "languages" },
      { name: "Java", category: "languages" }
    ]
  };

  const experiences = [
    {
      title: t('exp_fastapi_title'),
      description: t('exp_fastapi_desc'),
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: t('exp_gas_title'),
      description: t('exp_gas_desc'),
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: t('exp_fullstack_title'),
      description: t('exp_fullstack_desc'),
      icon: <Code className="w-6 h-6" />
    }
  ];

  const skillTabs = [
    { id: 'all', label: t('about_skill_tabs_all') },
    { id: 'frontend', label: t('about_skill_tabs_frontend') },
    { id: 'backend', label: t('about_skill_tabs_backend') },
    { id: 'database', label: t('about_skill_tabs_database') },
    { id: 'tools', label: t('about_skill_tabs_tools') },
    { id: 'languages', label: t('about_skill_tabs_languages') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const timelineVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              Hiroki Tanaka
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              {t('about_role')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              {t('about_hero_desc')}
            </p>
          </motion.div>
        </div>
      </section>


      {/* About Me */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:text-left"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              {t('about_about_me')}
            </h2>
            {/* Two-column layout: photo left, text right */}
            <div className="md:flex md:items-center md:gap-10">
              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative mb-8 md:mb-0 md:w-1/3"
              >
                <div className="relative w-56 h-56 mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-full p-2 animate-pulse">
                    <div className="w-full h-full bg-white rounded-full p-2 shadow-2xl">
                      <Image
                        src="/ME.JPG"
                        alt="Hiroki Tanaka - Full-Stack Developer"
                        width={224}
                        height={224}
                        className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 shadow-lg"
                      />
                    </div>
                  </div>
                  {/* Enhanced decorative elements */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-lg"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce animation-delay-1000 shadow-lg"></div>
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce animation-delay-2000 shadow-lg"></div>
                  <div className="absolute top-1/4 -right-8 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce animation-delay-3000 shadow-lg"></div>
                </div>
              </motion.div>

              {/* Intro Text */}
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl md:max-w-none mx-auto md:mx-0" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                  {t('about_long_intro')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              {t('about_education')}
            </h2>
          </motion.div>
          
          <div className="relative space-y-8">
            {/* Center vertical dashed timeline line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l-2 border-dashed border-blue-300 pointer-events-none"></div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? timelineVariants : timelineVariantsRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <Award className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="text-sm font-semibold text-blue-600" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                        {edu.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-gray-600 mb-2" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                      {edu.degree}
                    </p>
                    <p className="text-gray-500" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                      {edu.details}
                    </p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center relative z-10">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Interests */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              {t('about_core_interests')}
            </h2>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreInterests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-600 mb-4">{interest.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                  {interest.title}
                </h3>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              {t('about_technical_skills')}
            </h2>
          </motion.div>

          {/* Skill Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {skillTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSkillTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 ${
                  activeSkillTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                role="tab"
                aria-selected={activeSkillTab === tab.id}
                aria-controls={`skills-panel-${tab.id}`}
                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid - force remount on tab change to avoid stale state */}
          <motion.div
            key={activeSkillTab}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            role="tabpanel"
            id={`skills-panel-${activeSkillTab}`}
          >
            {skills[activeSkillTab as keyof typeof skills].map((skill, index) => (
              <motion.div
                key={`${activeSkillTab}-${skill.name}-${index}`}
                variants={itemVariants}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg px-4 py-2 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              {t('about_experience_projects')}
            </h2>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">{exp.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                    {exp.title}
                  </h3>
                </div>
                <p className="text-gray-600" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact/CTA removed per request */}
    </div>
  );
};

export default AboutPage;