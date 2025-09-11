'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

type Language = 'en' | 'ja';

type Dictionary = Record<string, Record<Language, string>>;

const dictionary: Dictionary = {
  nav_home: { en: 'Home', ja: 'ホーム' },
  nav_about: { en: 'About', ja: '紹介' },
  nav_work: { en: 'Work', ja: '実績' },
  nav_certs: { en: 'Certifications', ja: '認定' },
  nav_contact: { en: 'Contact', ja: 'お問い合わせ' },

  // Home
  home_role: { en: 'Full-Stack Developer | Algorithms & Optimization', ja: 'フルスタック開発者｜アルゴリズム × 最適化' },
  home_intro: {
    en: "I'm a full-stack developer from Japan with a strong foundation in algorithms and optimization. My background in competitive programming (ICPC, AtCoder) helps me quickly analyze complex problems and design efficient solutions. I specialize in React/Next.js, FastAPI, and Express, building scalable web applications backed by PostgreSQL, MongoDB, and AWS. I enjoy working with international teams and bringing technical clarity to challenging projects.",
    ja: '日本出身のフルスタック開発者です。アルゴリズムと最適化を強みとし、競技プログラミング（ICPC・AtCoder）で培った問題分析力を活かして効率的な解決策を設計します。React/Next.js、FastAPI、Express を中心に、PostgreSQL・MongoDB・AWS を活用したスケーラブルな Web アプリケーションを開発しています。国際的なチームでの開発や、難易度の高い課題に技術的な明瞭さをもたらすことが得意です。'
  },
  home_cta_work: { en: 'View My Work', ja: '実績を見る' },
  home_cta_resume: { en: 'Resume', ja: '履歴書' },
  home_cta_contact: { en: 'Contact Me', ja: 'お問い合わせ' },
  home_skill_react: { en: 'React', ja: 'React' },
  home_skill_fastapi: { en: 'FastAPI', ja: 'FastAPI' },
  home_skill_cpp_algo: { en: 'C++ Algorithms', ja: 'C++ アルゴリズム' },

  contact_title: { en: 'Get In Touch', ja: 'お問い合わせ' },
  contact_subtitle: {
    en: "Have a project in mind? Let's discuss how we can work together to bring your ideas to life.",
    ja: 'プロジェクトのご相談はお気軽に。実現に向けて一緒に進めましょう。'
  },
  contact_form_title: { en: 'Send me a message', ja: 'メッセージを送る' },
  contact_name: { en: 'Name *', ja: 'お名前 *' },
  contact_email: { en: 'Email *', ja: 'メールアドレス *' },
  contact_message: { en: 'Message *', ja: 'メッセージ *' },
  contact_name_ph: { en: 'Your full name', ja: 'お名前を入力してください' },
  contact_email_ph: { en: 'your.email@example.com', ja: 'your.email@example.com' },
  contact_message_ph: { en: 'Tell me about your project...', ja: 'プロジェクトの内容をご記入ください…' },
  contact_send: { en: 'Send Message', ja: '送信する' },
  contact_sending: { en: 'Sending...', ja: '送信中…' },
  contact_info: { en: 'Contact Information', ja: '連絡先情報' },
  contact_email_label: { en: 'Email', ja: 'メール' },
  contact_location_label: { en: 'Location', ja: '所在地' },
  contact_location_value: { en: 'Available for remote work', ja: 'リモート対応可能' },
  contact_response_label: { en: 'Response Time', ja: '返信目安' },
  contact_response_value: { en: 'Usually within 24 hours', ja: '通常24時間以内に返信' },
  contact_cv_title: { en: 'Download CV', ja: '履歴書のダウンロード' },
  contact_cv_desc: { en: 'Get a copy of my resume', ja: '履歴書をダウンロード' },
  contact_cv_btn: { en: 'Download PDF', ja: 'PDFをダウンロード' },
  contact_success_title: { en: 'Message Sent Successfully!', ja: '送信が完了しました！' },
  contact_success_desc: { en: "Thank you for reaching out. I'll get back to you as soon as possible.", ja: 'お問い合わせありがとうございます。追ってご連絡いたします。' },
  contact_success_again: { en: 'Send Another Message', ja: 'もう一度送信する' }
  ,
  contact_err_name_required: { en: 'Name is required', ja: 'お名前は必須です' },
  contact_err_name_min: { en: 'Name must be at least 2 characters', ja: 'お名前は2文字以上で入力してください' },
  contact_err_email_required: { en: 'Email is required', ja: 'メールアドレスは必須です' },
  contact_err_email_invalid: { en: 'Please enter a valid email address', ja: '有効なメールアドレスを入力してください' },
  contact_err_msg_required: { en: 'Message is required', ja: 'メッセージは必須です' },
  contact_err_msg_min: { en: 'Message must be at least 10 characters', ja: 'メッセージは10文字以上で入力してください' },

  // About
  about_role: { en: 'Full-Stack Developer · Automation & Optimization Specialist', ja: 'フルスタック開発者・自動化/最適化スペシャリスト' },
  about_hero_desc: {
    en: 'I create scalable software solutions through a blend of algorithms, automation, and full-stack development.',
    ja: 'アルゴリズムと自動化、フルスタック開発を組み合わせ、スケーラブルなソフトウェアを構築します。'
  },
  about_about_me: { en: 'About Me', ja: '自己紹介' },
  about_education: { en: 'Education', ja: '学歴' },
  about_core_interests: { en: 'Core Interests', ja: '関心領域' },
  about_technical_skills: { en: 'Technical Skills', ja: '技術スキル' },
  about_experience_projects: { en: 'Experience & Projects', ja: '経験とプロジェクト' },
  about_long_intro: {
    en: 'My journey in programming started with C/C++ in 2015, leading me into competitive programming in 2017, where I learned how to solve complex problems under pressure. From there, I expanded into web technologies and automation, combining theoretical knowledge with practical development. I enjoy finding the essence of problems quickly and turning abstract ideas into efficient, working systems. Though I prefer minimal, focused communication, I collaborate globally on Discord from midnight to early morning, exchanging knowledge and working on projects with diverse teams.',
    ja: '2015年に C/C++ からプログラミングを始め、2017年には競技プログラミングに取り組み、限られた時間で複雑な問題を解く力を磨きました。その後、Web 技術や自動化へと領域を広げ、理論と実装を結び付けながら開発に取り組んでいます。問題の本質を素早く見極め、抽象的なアイデアを効率的に動くシステムへと落とし込むことが得意です。普段は最小限で集中したコミュニケーションを好みますが、夜間から早朝にかけて世界中の開発者と Discord で協働し、知識共有やプロジェクトを進めています。'
  },

  // Certifications (UI)
  certs_title: { en: 'Certifications & Achievements', ja: '認定・実績' },
  certs_search_ph: { en: 'Search certifications, skills, or issuers...', ja: '認定・スキル・発行元で検索…' },
  certs_clear_filters: { en: 'Clear filters', ja: '絞り込みをクリア' },
  certs_verified: { en: 'Verified', ja: '認証済み' },
  certs_issued: { en: 'Issued', ja: '発行日' },
  certs_prev: { en: 'Previous', ja: '前へ' },
  certs_next: { en: 'Next', ja: '次へ' },
  certs_back_home: { en: 'Back to Home', ja: 'ホームへ戻る' },
  certs_found_suffix: { en: 'certification(s) found', ja: '件見つかりました' },
  certs_for_kw: { en: 'for', ja: '（キーワード：' },
  certs_for_kw_suffix: { en: '"', ja: '）' },
  certs_in_cat: { en: 'in', ja: '（カテゴリ：' },
  certs_in_cat_suffix: { en: '', ja: '）' },
  certs_categories_all: { en: 'All', ja: 'すべて' },
  certs_categories_cloud: { en: 'Cloud Computing', ja: 'クラウド' },
  certs_categories_web: { en: 'Web Development', ja: 'Web 開発' },
  certs_categories_db: { en: 'Database', ja: 'データベース' },
  certs_categories_ml: { en: 'Machine Learning', ja: '機械学習' },

  // Certifications Section (home)
  certs_featured_title: { en: 'Featured Certifications', ja: '注目の認定' },
  certs_featured_desc: { en: 'Professional certifications that demonstrate expertise in modern technologies and best practices.', ja: '最新技術とベストプラクティスに関する専門性を示す認定です。' },
  certs_view_all_cta: { en: 'View All Certifications', ja: 'すべての認定を見る' },

  // Individual Certifications
  cert_aws_name: { en: 'AWS Certified Cloud Practitioner', ja: 'AWS 認定クラウドプラクティショナー' },
  cert_aws_issuer: { en: 'Amazon Web Services', ja: 'Amazon Web Services' },
  cert_aws_desc: { en: 'Foundational understanding of AWS Cloud concepts, services, and security.', ja: 'AWS クラウドの基礎概念、主要サービス、セキュリティの基本を理解。' },
  cert_aws_skills: { en: 'AWS, Cloud Computing, Security', ja: 'AWS, クラウドコンピューティング, セキュリティ' },

  cert_sql_name: { en: 'SQL & Databases Professional Certificate', ja: 'SQL・データベース専門認定' },
  cert_sql_issuer: { en: 'Meta', ja: 'Meta' },
  cert_sql_desc: { en: 'Comprehensive database management and SQL query optimization skills.', ja: 'データベース設計や SQL 最適化など、実務レベルのデータベース運用スキルを習得。' },
  cert_sql_skills: { en: 'SQL, Database Design, Query Optimization', ja: 'SQL, データベース設計, クエリ最適化' },

  cert_fullstack_name: { en: 'Full-Stack Web Development with React & Node', ja: 'React・Node.js フルスタック開発' },
  cert_fullstack_issuer: { en: 'Coursera', ja: 'Coursera' },
  cert_fullstack_desc: { en: 'Complete full-stack development using React, Node.js, and modern web technologies.', ja: 'React と Node.js を中心に、最新の Web 技術でフルスタック開発を実践。' },
  cert_fullstack_skills: { en: 'React, Node.js, JavaScript, MongoDB', ja: 'React, Node.js, JavaScript, MongoDB' },

  cert_gcp_name: { en: 'Google Cloud Professional Developer', ja: 'Google Cloud プロフェッショナル開発者' },
  cert_gcp_issuer: { en: 'Google Cloud', ja: 'Google Cloud' },
  cert_gcp_desc: { en: 'Advanced Google Cloud Platform development and deployment expertise.', ja: 'Google Cloud 環境での高度な開発・デプロイ手法に習熟。' },
  cert_gcp_skills: { en: 'GCP, Cloud Development, DevOps', ja: 'GCP, クラウド開発, DevOps' },

  cert_react_name: { en: 'Advanced React Development', ja: 'React 高度開発' },
  cert_react_issuer: { en: 'React Training', ja: 'React Training' },
  cert_react_desc: { en: 'Advanced React patterns, hooks, and performance optimization techniques.', ja: 'React の高度なパターン、Hooks、パフォーマンス最適化を体系的に習得。' },
  cert_react_skills: { en: 'React, Hooks, Performance, State Management', ja: 'React, Hooks, パフォーマンス, 状態管理' },

  cert_ml_name: { en: 'Machine Learning Fundamentals', ja: '機械学習基礎' },
  cert_ml_issuer: { en: 'Stanford University', ja: 'スタンフォード大学' },
  cert_ml_desc: { en: 'Introduction to machine learning algorithms and data science principles.', ja: '機械学習アルゴリズムとデータサイエンスの基礎を学習。' },
  cert_ml_skills: { en: 'Machine Learning, Python, Data Science, Statistics', ja: '機械学習, Python, データサイエンス, 統計学' },
  // Project detail UI
  project_overview: { en: 'Project Overview', ja: 'プロジェクト概要' },
  project_purpose: { en: 'Purpose', ja: '目的' },
  project_role: { en: 'My Role', ja: '担当' },
  project_approach: { en: 'Approach', ja: 'アプローチ' },
  project_results: { en: 'Results', ja: '成果' },
  project_goals: { en: 'Goals Achieved', ja: '達成事項' },
  project_rating: { en: 'Project Rating', ja: '評価' },
  project_links: { en: 'Project Links', ja: '関連リンク' },
  project_live: { en: 'Live Site', ja: 'サイトを見る' },
  project_github: { en: 'GitHub', ja: 'GitHub' },
  back_to_work: { en: 'Back to Work', ja: '実績一覧へ戻る' },
  media_screenshots: { en: 'Screenshots', ja: 'スクリーンショット' },
  media_videos: { en: 'Videos', ja: '動画' },
  media_image_label: { en: 'Image', ja: '画像' },
  media_video_label: { en: 'Video', ja: '動画' },
  media_none: { en: 'No media available', ja: 'メディアはありません' },
  view_details: { en: 'View Details', ja: '詳細を見る' },
  work_empty: { en: 'No projects found in the selected category.', ja: '選択したカテゴリにはプロジェクトがありません。' },

  // Skills Overview Section
  skills_title: { en: 'Skills Overview', ja: 'スキル概要' },
  skills_subtitle: { en: 'A quick snapshot of the technologies I use to ship reliable, scalable software.', ja: '信頼性の高いスケーラブルなソフトウェアを構築するために使用する技術の概要です。' },
  skills_frontend: { en: 'Frontend', ja: 'フロントエンド' },
  skills_backend: { en: 'Backend', ja: 'バックエンド' },
  skills_databases: { en: 'Databases', ja: 'データベース' },
  skills_cloud: { en: 'Cloud & Infrastructure', ja: 'クラウド・インフラ' },
  skills_core_expertise: { en: 'Core Expertise', ja: '主要スキル' },
  skills_also_familiar: { en: 'Also Familiar', ja: 'その他習得済み' },

  // Major Projects Section
  projects_title: { en: 'Major Projects ✦ Selected Work', ja: '主要プロジェクト ✦ 選定作品' },
  projects_subtitle: { en: 'A showcase of impactful projects spanning web development, data engineering, and e-commerce solutions.', ja: 'Web開発、データエンジニアリング、Eコマースソリューションにわたる影響力のあるプロジェクトの展示です。' },
  projects_view_case_study: { en: 'View Case Study', ja: 'ケーススタディを見る' },
  projects_see_more: { en: 'See more work', ja: 'さらに見る' },
  projects_tech_stack: { en: 'Tech Stack', ja: '技術スタック' },
  projects_key_achievements: { en: 'Key Achievements', ja: '主要成果' },
  projects_view_site: { en: 'View Site', ja: 'サイトを見る' },
  projects_close: { en: 'Close', ja: '閉じる' },

  // Footer Section
  footer_quick_links: { en: 'Quick Links', ja: 'クイックリンク' },
  footer_connect: { en: 'Connect', ja: '連絡先' },
  footer_download_cv: { en: 'Download CV', ja: '履歴書をダウンロード' },
  footer_description: { en: 'Full-stack developer passionate about creating beautiful and functional web experiences. Specializing in modern technologies and clean, efficient code. Engineer passionate about automation and optimization, creating systems that save time and maximize performance. Skilled in algorithms, scalable architectures, and intelligent processes.', ja: '美しく機能的なWeb体験の創造に情熱を注ぐフルスタック開発者。最新技術とクリーンで効率的なコードを専門としています。自動化と最適化に情熱を注ぐエンジニアとして、時間を節約しパフォーマンスを最大化するシステムを構築。アルゴリズム、スケーラブルなアーキテクチャ、インテリジェントなプロセスに精通しています。' },
  footer_copyright: { en: '© 2024 Hiroki Tanaka. All rights reserved.', ja: '© 2024 田中博樹. 全著作権所有。' },
  footer_privacy: { en: 'Privacy Policy', ja: 'プライバシーポリシー' },
  footer_terms: { en: 'Terms of Service', ja: '利用規約' },

  // About Page - Education, Skills, Experience
  about_education_timeline: { en: 'Education Timeline', ja: '学歴タイムライン' },
  about_core_interests_title: { en: 'Core Interests', ja: '関心領域' },
  about_technical_skills_title: { en: 'Technical Skills', ja: '技術スキル' },
  about_experience_projects_title: { en: 'Experience & Projects', ja: '経験とプロジェクト' },
  about_skill_tabs_all: { en: 'All Skills', ja: 'すべて' },
  about_skill_tabs_frontend: { en: 'Frontend', ja: 'フロントエンド' },
  about_skill_tabs_backend: { en: 'Backend', ja: 'バックエンド' },
  about_skill_tabs_database: { en: 'Databases', ja: 'データベース' },
  about_skill_tabs_tools: { en: 'Tools', ja: 'ツール' },
  about_skill_tabs_languages: { en: 'Languages', ja: 'プログラミング言語' },

  // Project Detail Page
  project_not_found: { en: 'Project Not Found', ja: 'プロジェクトが見つかりません' },
  project_not_found_desc: { en: "The project you're looking for doesn't exist.", ja: 'お探しのプロジェクトは存在しません。' },
  project_back_to_work: { en: 'Back to Work', ja: '実績一覧へ戻る' },
  project_screenshots: { en: 'Screenshots', ja: 'スクリーンショット' },
  project_videos: { en: 'Videos', ja: '動画' },
  project_video: { en: 'Video', ja: '動画' },
  project_image: { en: 'Image', ja: '画像' },
  project_no_media: { en: 'No media available', ja: 'メディアはありません' },
  project_overview_title: { en: 'Project Overview', ja: 'プロジェクト概要' },
  project_purpose_title: { en: 'Purpose', ja: '目的' },
  project_role_title: { en: 'My Role', ja: '担当' },
  project_approach_title: { en: 'Approach', ja: 'アプローチ' },
  project_results_title: { en: 'Results', ja: '成果' },
  project_goals_achieved: { en: 'Goals Achieved', ja: '達成事項' },
  project_live_site: { en: 'Live Site', ja: 'サイトを見る' },
  project_github: { en: 'GitHub', ja: 'GitHub' },

  // Education
  edu_tokyo_tech_year: { en: '2019–2023', ja: '2019–2023' },
  edu_tokyo_tech_institution: { en: 'Tokyo Institute of Technology', ja: '東京工業大学' },
  edu_tokyo_tech_degree: { en: 'School of Computing', ja: '情報理工学院' },
  edu_tokyo_tech_details: { en: 'Optimization, scalable systems, graph theory, A*, Min–Max search', ja: '最適化、スケーラブルシステム、グラフ理論、A*、Min-Max探索' },
  edu_aizu_year: { en: '2016–2019', ja: '2016–2019' },
  edu_aizu_institution: { en: 'University of Aizu', ja: '会津大学' },
  edu_aizu_degree: { en: 'School of Computer Science and Engineering', ja: 'コンピュータ理工学部' },
  edu_aizu_details: { en: 'Algorithms, competitive programming, full-stack foundations', ja: 'アルゴリズム、競技プログラミング、フルスタック基礎' },

  // Core Interests
  core_algorithms_title: { en: 'Algorithms & Optimization', ja: 'アルゴリズムと最適化' },
  core_algorithms_desc: { en: 'Complex problem-solving and performance optimization', ja: '複雑な問題解決とパフォーマンス最適化' },
  core_fullstack_title: { en: 'Full-Stack Development', ja: 'フルスタック開発' },
  core_fullstack_desc: { en: 'End-to-end web application development', ja: 'エンドツーエンドのウェブアプリケーション開発' },
  core_automation_title: { en: 'Automation Systems', ja: '自動化システム' },
  core_automation_desc: { en: 'Workflow automation and process optimization', ja: 'ワークフロー自動化とプロセス最適化' },
  core_game_title: { en: 'Game Algorithms', ja: 'ゲームアルゴリズム' },
  core_game_desc: { en: 'AI, pathfinding, and game theory implementations', ja: 'AI、経路探索、ゲーム理論の実装' },

  // Experience Projects
  exp_fastapi_title: { en: 'FastAPI Projects', ja: 'FastAPIプロジェクト' },
  exp_fastapi_desc: { en: 'Built high-performance APIs for scalable web systems with advanced optimization techniques.', ja: '高度な最適化技術を使用してスケーラブルなウェブシステム向けの高性能APIを構築。' },
  exp_gas_title: { en: 'Automation with GAS', ja: 'GASによる自動化' },
  exp_gas_desc: { en: 'Automated workflows and processes, significantly improving operational efficiency.', ja: 'ワークフローとプロセスを自動化し、運用効率を大幅に改善。' },
  exp_fullstack_title: { en: 'Full-Stack Applications', ja: 'フルスタックアプリケーション' },
  exp_fullstack_desc: { en: 'React + Next.js frontends with Express/FastAPI backends for complete web solutions.', ja: '完全なウェブソリューションのためのExpress/FastAPIバックエンドとReact + Next.jsフロントエンド。' },

  // Goals Achieved
  goal_unified_ux: { en: 'Unified UX Design System', ja: '統一UXデザインシステム' },
  goal_modern_frontend: { en: 'Modern Frontend Architecture', ja: 'モダンフロントエンドアーキテクチャ' },
  goal_cross_team: { en: 'Cross-team Collaboration', ja: 'チーム間連携' },
  goal_high_quality: { en: 'High-quality Standards', ja: '高品質基準' },
  goal_long_term: { en: 'Long-term Partnership', ja: '長期パートナーシップ' },
  goal_academic_deadline: { en: 'Academic Deadline Met', ja: '学年度期限達成' },
  goal_system_modernization: { en: 'System Modernization', ja: 'システム近代化' },
  goal_performance_improvement: { en: 'Performance Improvement', ja: 'パフォーマンス向上' },
  goal_student_experience: { en: 'Student Experience Enhancement', ja: '学生体験向上' },
  goal_business_requirements: { en: 'Business Requirements Fulfilled', ja: 'ビジネス要件達成' },
  goal_workload_reduction: { en: 'Workload Reduction', ja: '作業負荷軽減' },
  goal_error_elimination: { en: 'Error Elimination', ja: 'エラー排除' },
  goal_scalable_automation: { en: 'Scalable Automation', ja: 'スケーラブル自動化' },
  goal_student_transparency: { en: 'Student Transparency', ja: '学生透明性' },
  goal_time_efficiency: { en: 'Time Efficiency', ja: '時間効率' },
  goal_automated_tasks: { en: 'Automated Task Creation', ja: 'タスク自動生成' },
  goal_priority_management: { en: 'Priority Management', ja: '優先度管理' },
  goal_holiday_awareness: { en: 'Holiday Awareness', ja: '休日認識' },
  goal_cognitive_load: { en: 'Cognitive Load Reduction', ja: '認知負荷軽減' },
  goal_reliability: { en: 'Reliability Improvement', ja: '信頼性向上' },
  goal_data_processing: { en: 'Data Processing', ja: 'データ処理' },
  goal_pattern_identification: { en: 'Pattern Identification', ja: 'パターン識別' },
  goal_visualization: { en: 'Visualization', ja: '可視化' },
  goal_modeling_foundation: { en: 'Modeling Foundation', ja: 'モデリング基盤' },
  goal_market_understanding: { en: 'Market Understanding', ja: '市場理解' },
  goal_accurate_routing: { en: 'Accurate Route Finding', ja: '正確な経路探索' },
  goal_algorithm_implementation: { en: 'Algorithm Implementation', ja: 'アルゴリズム実装' },
  goal_data_validation: { en: 'Data Validation', ja: 'データ検証' },
  goal_foundation_enhancement: { en: 'Foundation for Enhancement', ja: '拡張基盤' },
  goal_realtime_comments: { en: 'Real-time Comments', ja: 'リアルタイムコメント' },
  goal_slack_integration: { en: 'Slack Integration', ja: 'Slack連携' },
  goal_user_experience: { en: 'User Experience', ja: 'ユーザー体験' },
  goal_documentation: { en: 'Documentation', ja: 'ドキュメント' },
  goal_replicable: { en: 'Replicable Solution', ja: '再現可能ソリューション' },
  goal_multimodal_ai: { en: 'Multi-modal AI', ja: 'マルチモーダルAI' },
  goal_file_upload: { en: 'File Upload Support', ja: 'ファイルアップロード対応' },
  goal_persistent_history: { en: 'Persistent History', ja: '永続履歴' },
  goal_fullstack_integration: { en: 'Full-stack Integration', ja: 'フルスタック統合' },
  goal_user_auth: { en: 'User Authentication', ja: 'ユーザー認証' },
  goal_survival_analysis: { en: 'Survival Pattern Analysis', ja: '生存パターン分析' },
  goal_data_viz: { en: 'Data Visualization', ja: 'データ可視化' },
  goal_feature_engineering: { en: 'Feature Engineering', ja: '特徴量エンジニアリング' },
  goal_statistical_insights: { en: 'Statistical Insights', ja: '統計的洞察' },
  goal_historical_understanding: { en: 'Historical Understanding', ja: '歴史的理解' },
  goal_site_modernization: { en: 'Site Modernization', ja: 'サイト近代化' },
  goal_performance_enhancement: { en: 'Performance Enhancement', ja: 'パフォーマンス強化' },
  goal_b2b_engagement: { en: 'B2B Customer Engagement', ja: 'B2B顧客エンゲージメント' },
  goal_seo_improvement: { en: 'SEO Improvement', ja: 'SEO改善' },
  goal_client_impact: { en: 'Client Impact', ja: 'クライアント影響' },
  goal_traffic_increase: { en: 'Traffic Increase', ja: 'トラフィック増加' },
  goal_customer_satisfaction: { en: 'Customer Satisfaction', ja: '顧客満足度向上' },
  goal_user_experience_enhancement: { en: 'User Experience Enhancement', ja: 'ユーザーエクスペリエンス向上' },
  goal_conversion_rate_improvement: { en: 'Conversion Rate Improvement', ja: 'コンバージョン率改善' },
  goal_seo_optimization: { en: 'SEO Optimization', ja: 'SEO最適化' },

  // Footer
  footer_name: { en: 'Hiroki Tanaka', ja: '田中 弘樹' },

  // Project Categories
  category_web_development: { en: 'Web Development', ja: 'ウェブ開発' },
  category_ecommerce: { en: 'E-commerce', ja: 'Eコマース' },
  category_automation: { en: 'Automation', ja: '自動化' },
  category_data_analytics: { en: 'Data Analytics', ja: 'データ分析' },
  category_artificial_intelligence: { en: 'Artificial Intelligence', ja: '人工知能' }
};

type LanguageContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: keyof typeof dictionary) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('ja');
  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    setLang,
    t: (key) => dictionary[key]?.[lang] ?? String(key)
  }), [lang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}


