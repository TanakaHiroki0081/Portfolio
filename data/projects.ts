interface Project {
  id: string;           // Unique identifier
  name: string;         // Project name
  category: string;     // Project category
  period: string;       // Development period
  technologies: string[]; // Tech stack array
  description: string;  // Project description
  folderName: string;   // Folder name in public/projects/
  purpose?: string;     // Project purpose
  role?: string;        // My role in the project
  approach?: string;    // Approach and methodology
  results?: string;     // Results and outcomes
  liveUrl?: string;     // Live project URL
  githubUrl?: string;   // GitHub repository URL
  goalsAchieved?: string[]; // Goals achieved
  rating?: number;      // Project rating out of 5
  ja?: {
    name?: string;
    category?: string;
    description?: string;
    purpose?: string;
    role?: string;
    approach?: string;
    results?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Recruit Direct Scout – Full Frontend Renewal",
    category: "Web Development",
    period: "2024",
    technologies: ["React.js", "Redux", "Recruit's proprietary frontend framework"],
    description: "Redesigned and modernized the UI/UX of Recruit's high-end career scouting platform, overcoming in-house resource shortages and ensuring a consistent, top-tier design system.",
    folderName: "project1",
    purpose: "Redesign and modernize the UI/UX of Recruit's high-end career scouting platform, overcoming in-house resource shortages and ensuring a consistent, top-tier design system.",
    role: "Frontend Engineer / Development Partner - Supported design and engineering teams in UI/UX renewal. Took initiative beyond assigned scope to contribute to project leadership.",
    approach: "Adapted quickly to Recruit's unique framework and complex architecture. Improved development efficiency through hypothesis-driven design validation cycles. Facilitated effective cross-team collaboration for smoother, faster delivery. Unified UX design system across the entire platform. Delivered numerous new features while maintaining modern frontend best practices.",
    results: "Achieved a consistent, unified UX design system across the service. Successfully developed and deployed many new features. Client feedback: 'One of the top-class design systems within Recruit'. Long-term partnership established, with ongoing support and UX improvement after launch.",
    goalsAchieved: ["Unified UX Design System", "Modern Frontend Architecture", "Cross-team Collaboration", "High-quality Standards", "Long-term Partnership"],
    rating: 4.8,
    liveUrl: "https://directscout.recruit.co.jp",
    githubUrl: "",
    ja: {
      name: "リクルート ダイレクトスカウト – フロントエンド全面刷新",
      category: "ウェブ開発",
      description: "リクルートのハイエンド転職スカウトサービスのUI/UXを近代化し、統一された高品質なデザインシステムへ刷新しました。",
      purpose: "社内リソース不足を補いながら、サービス全体のUI/UXを再設計・近代化すること。",
      role: "フロントエンドエンジニア／開発パートナーとして、デザインと実装の両面からリニューアルを推進。",
      approach: "独自フレームワークへの迅速なキャッチアップ、仮説検証サイクルによるUI改善、横断連携の強化、デザインシステムの統一。",
      results: "サービス全体のUXが統一され、開発効率・品質が向上。長期的な支援体制を確立。"
    }
  },
  {
    id: "2",
    name: "Studysapuri Middle School Web App – PC Version Renewal",
    category: "Web Development",
    period: "2023-2024",
    technologies: ["Next.js", "React", "GraphQL"],
    description: "Renew Recruit's Studysapuri Basic Course (Middle School) PC web application to modernize the system, improve learning outcomes, and support smooth student experiences while addressing past development challenges.",
    folderName: "project2",
    purpose: "Renew Recruit's Studysapuri Basic Course (Middle School) PC web application to modernize the system, improve learning outcomes, and support smooth student experiences while addressing past development challenges.",
    role: "Frontend Engineer / Development Partner - Supported modernization of architecture and UI. Implemented core learning pages and critical functionality under a strict academic deadline.",
    approach: "Rebuilt the legacy system using modern frameworks for speed and maintainability. Integrated GraphQL for efficient and scalable data handling. Updated development foundation for long-term extensibility. Balanced tight delivery schedule with high-quality standards to meet the school year release deadline.",
    results: "Released successfully before the new academic year (February), critical for adoption. Improved system performance, maintainability, and student experience. Fully met Recruit's business requirements under time pressure. Client acknowledged the high quality of the relaunch and successful modernization.",
    goalsAchieved: ["Academic Deadline Met", "System Modernization", "Performance Improvement", "Student Experience Enhancement", "Business Requirements Fulfilled"],
    rating: 4.7,
    liveUrl: "https://studysapuri.jp",
    githubUrl: "",
    ja: {
      name: "スタディサプリ中学講座 – PC版リニューアル",
      category: "ウェブ開発",
      description: "学習体験と開発基盤を近代化し、厳しいリリース期限内で要件を満たす形で再構築しました。",
      purpose: "既存システムの刷新とUX向上、学習成果の最大化。",
      role: "フロントエンドエンジニアとして、アーキテクチャ更新と主要ページの実装を担当。",
      approach: "Next.js/GraphQLで再構築し、長期運用に耐える拡張性とパフォーマンスを確保。",
      results: "新学期に間に合う形で安定リリース。パフォーマンスと保守性が改善。"
    }
  },
  {
    id: "3",
    name: "Student Portfolio Dashboard Automation – Weekly Report Generator",
    category: "Automation",
    period: "2023",
    technologies: ["Google Apps Script (GAS)", "Google Sheets", "Google Drive API", "Gmail API"],
    description: "Automate the creation and updating of student progress portfolios for an educational client. The goal was to eliminate the manual workload of generating weekly reports for 100+ students, reducing errors and ensuring timely delivery of learning updates.",
    folderName: "project3",
    purpose: "Automate the creation and updating of student progress portfolios for an educational client. The goal was to eliminate the manual workload of generating weekly reports for 100+ students, reducing errors and ensuring timely delivery of learning updates.",
    role: "Automation Developer / Google Workspace Engineer - Designed and implemented Google Apps Script workflows. Automated spreadsheet and folder operations. Streamlined student communication via Gmail notifications.",
    approach: "Built a master Google Sheet to manage student data and grades. Automated the following with GAS: Creation of individual student folders in Google Drive, Generation of portfolio spreadsheets from a template, Weekly updates of student grades into portfolios, Automated email notifications to each student with updated reports. Designed the system for scalability and reusability, enabling adaptation for other use cases (invoices, contracts, etc.).",
    results: "Reduced manual reporting workload from hours to minutes per week. Eliminated repetitive human error in student report generation. Delivered scalable automation adaptable to various administrative needs. Improved transparency for students by providing easy access to up-to-date progress reports.",
    goalsAchieved: ["Workload Reduction", "Error Elimination", "Scalable Automation", "Student Transparency", "Time Efficiency"],
    rating: 4.6,
    liveUrl: "https://note.com",
    githubUrl: "",
    ja: {
      name: "学生ポートフォリオ自動化 – 週次レポート生成",
      category: "自動化",
      description: "GASでスプレッドシートとDrive/メールを連携し、100名以上の週次レポート作成を自動化。",
      purpose: "手作業によるレポート作成負荷とヒューマンエラーの削減。",
      role: "オートメーション開発者としてGASワークフローを設計・実装。",
      approach: "テンプレート生成、定期トリガー、通知メールなどを自動化しスケーラブルに構築。",
      results: "作業時間を大幅短縮し、正確でタイムリーな配信を実現。"
    }
  },
  {
    id: "4",
    name: "Task Management Spreadsheet – Automated Routine Task Tracker",
    category: "Automation",
    period: "2023",
    technologies: ["Google Sheets", "Google Apps Script (GAS)", "Google Calendar API"],
    description: "Provide a lightweight, flexible task management solution that automatically tracks routine and ad-hoc tasks without the overhead of third-party tools. Designed to reduce manual task entry and keep users focused on priorities.",
    folderName: "project4",
    purpose: "Provide a lightweight, flexible task management solution that automatically tracks routine and ad-hoc tasks without the overhead of third-party tools. Designed to reduce manual task entry and keep users focused on priorities.",
    role: "Automation Developer / Workflow Optimizer - Designed and implemented spreadsheet-based task tracker. Automated task creation and scheduling with Google Apps Script.",
    approach: "Implemented a daily Apps Script trigger to auto-insert routine tasks into the sheet. Designed conditional formatting rules to highlight urgent and overdue tasks. Used checkboxes and filters for quick status updates and priority views. Integrated holiday calendar checks so tasks are not scheduled on days off. Built with flexibility to allow easy addition of future requirements.",
    results: "Eliminated manual entry of repetitive tasks (weekly/monthly routines auto-added). Produced a self-updating to-do list sorted by due date and filtered by completion status. Gave users an at-a-glance view of pending work, reducing cognitive load. Ensured tasks are always current, improving reliability of personal and team task management.",
    goalsAchieved: ["Automated Task Creation", "Priority Management", "Holiday Awareness", "Cognitive Load Reduction", "Reliability Improvement"],
    rating: 4.4,
    liveUrl: "",
    githubUrl: "",
    ja: {
      name: "タスク管理スプレッドシート – 定常タスク自動生成",
      category: "自動化",
      description: "Apps Scriptで定常タスクを自動投入し、優先度と進捗を可視化する軽量トラッカーを構築。",
      purpose: "反復作業の自動化と認知負荷の低減。",
      role: "ワークフロー最適化として設計・実装。",
      approach: "日次トリガー、条件付き書式、チェックボックス等で直感的な運用を実現。",
      results: "手入力を削減し、常に最新のタスクリストを維持。"
    }
  },
  {
    id: "5",
    name: "Tokyo Stock Market Analysis – JPX Data Exploration",
    category: "Data Analytics",
    period: "2023",
    technologies: ["Python", "pandas", "numpy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    description: "Conduct exploratory data analysis (EDA) on the JPX Tokyo Stock Exchange dataset from a Kaggle competition to understand its structure and variables before moving into predictive modeling of stock behavior.",
    folderName: "project5",
    purpose: "Conduct exploratory data analysis (EDA) on the JPX Tokyo Stock Exchange dataset from a Kaggle competition to understand its structure and variables before moving into predictive modeling of stock behavior.",
    role: "Data Analyst / Python Developer - Focused on dataset inspection, cleaning, and visualization. Built reusable scripts for financial time-series exploration.",
    approach: "Loaded multi-year JPX CSV files containing stock prices (Open, High, Low, Close, Volume, dividends, etc.). Interpreted key dataset columns such as RowId, adjusted prices, and dividends. Converted string-based timestamps into datetime objects for time-series analysis. Examined distributions of target variables (e.g., returns, price movements). Visualized trends using histograms and time-series plots.",
    results: "Successfully processed and understood a large historical stock dataset. Identified critical columns for modeling (e.g., price changes, returns, dividends). Produced visual insights into distributions and trends in Japanese stock data. Built a foundation for future predictive modeling of market behavior.",
    goalsAchieved: ["Data Processing", "Pattern Identification", "Visualization", "Modeling Foundation", "Market Understanding"],
    rating: 4.3,
    liveUrl: "https://www.kaggle.com/competitions/jpx-tokyo-stock-exchange-prediction",
    githubUrl: "",
    ja: {
      name: "東京株式市場の分析 – JPXデータ探索",
      category: "データ分析",
      description: "KaggleのJPXデータを活用し、可視化と統計により特徴把握と前処理基盤を構築。",
      purpose: "予測モデリング前のEDAと指標整理。",
      role: "データアナリストとして前処理・可視化・洞察抽出を担当。",
      approach: "pandas/Matplotlib/Seabornで分布や時系列を分析。",
      results: "重要特徴や分布の理解を深め、モデル化の土台を整備。"
    }
  },
  {
    id: "6",
    name: "Tokyo Road Network – Shortest Path Analysis with Dijkstra's Algorithm",
    category: "Data Analytics",
    period: "2023",
    technologies: ["Python", "NetworkX", "OSMnx", "PostgreSQL", "PostGIS", "QGIS", "Dijkstra's Algorithm"],
    description: "Replicate the route-finding functionality of navigation apps (Google Maps, Apple Maps) by computing the shortest paths within Tokyo's road network using graph algorithms.",
    folderName: "project6",
    purpose: "Replicate the route-finding functionality of navigation apps (Google Maps, Apple Maps) by computing the shortest paths within Tokyo's road network using graph algorithms.",
    role: "Geospatial Data Engineer / Python Developer - Implemented shortest-path algorithm on real-world map data. Integrated spatial databases and GIS tools for analysis and visualization.",
    approach: "Extracted Tokyo's street network from OpenStreetMap using OSMnx. Converted the map into a graph of nodes (intersections) and edges (roads). Implemented Dijkstra's shortest-path algorithm (edge cost = road length). Compared custom pathfinding results against Google Maps routes. Visualized computed paths and network layers in QGIS.",
    results: "Generated accurate shortest routes between key Tokyo locations (e.g., Harajuku Station → Blue Bottle Café). Route distances matched closely with Google Maps (~1.213 km vs 1.2 km), confirming correctness. Demonstrated limitations (e.g., ignoring restricted/private roads) and identified areas for future improvements. Established a foundation for enhanced route-finding with additional constraints (road type, accessibility, shading, etc.).",
    goalsAchieved: ["Accurate Route Finding", "Algorithm Implementation", "Data Validation", "Visualization", "Foundation for Enhancement"],
    rating: 4.5,
    liveUrl: "",
    githubUrl: "",
    ja: {
      name: "東京道路網 – ダイクストラ法による最短経路解析",
      category: "データ分析",
      description: "OSMデータをGraph化し、ダイクストラ法で現実的な最短経路を算出・検証。",
      purpose: "地図アプリに類する経路探索の再現と妥当性確認。",
      role: "地理空間データエンジニアとして実装・可視化。",
      approach: "OSMnx/NetworkX、PostGIS/QGISを活用し比較検証。",
      results: "Google Mapsと近似の結果を得て、拡張余地を提示。"
    }
  },
  {
    id: "7",
    name: "Next.js Blog with Real-Time Comments & Moderation",
    category: "Web Development",
    period: "2023",
    technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "Slack API", "Block Kit", "JavaScript"],
    description: "Enhance a static blog by adding an interactive commenting system with real-time updates, while giving owners the ability to moderate comments via Slack.",
    folderName: "project7",
    purpose: "Enhance a static blog by adding an interactive commenting system with real-time updates, while giving owners the ability to moderate comments via Slack.",
    role: "Full-Stack Developer - Built both frontend and backend integration. Implemented live database-driven interactions and third-party API workflows.",
    approach: "Created blog comment forms with Next.js and integrated them into post pages. Connected Supabase for real-time database updates (new, edited, deleted comments). Implemented Slack moderation workflow: Owners receive moderation requests in Slack, Approve or reject comments via Block Kit UI. Enabled seamless reader interaction with no page reloads.",
    results: "Delivered a blog with live comment threads supporting add, edit, and delete. Enabled admins to moderate user comments entirely through Slack. Provided a smooth user experience with instant feedback. Built a fully documented demo + source code for others to replicate.",
    goalsAchieved: ["Real-time Comments", "Slack Integration", "User Experience", "Documentation", "Replicable Solution"],
    rating: 4.4,
    liveUrl: "https://docs.slack.dev/block-kit/",
    githubUrl: "",
    ja: {
      name: "Next.jsブログ – リアルタイムコメント＆モデレーション",
      category: "ウェブ開発",
      description: "SupabaseとSlack連携でリアルタイムなコメント機能と審査フローを実装。",
      purpose: "双方向の読者体験と運営の効率化。",
      role: "フルスタックとしてフロント・API・DBを実装。",
      approach: "Vercel AI SDK/Slack APIを組合せ、即時性の高いUIを実現。",
      results: "ライブ更新・審査一体の快適なブログ体験を提供。"
    }
  },
  {
    id: "8",
    name: "AI Chatbot with File Uploads & Persistent History",
    category: "Artificial Intelligence",
    period: "2023",
    technologies: ["Next.js", "React", "Vercel AI SDK", "OpenAI API", "Supabase", "PostgreSQL"],
    description: "Develop an intelligent conversational chatbot that goes beyond text, supporting file and image uploads for context-aware responses.",
    folderName: "project8",
    purpose: "Develop an intelligent conversational chatbot that goes beyond text, supporting file and image uploads for context-aware responses.",
    role: "Full-Stack Developer - Built chat UI and backend integrations. Connected authentication, database, and AI APIs into a seamless app.",
    approach: "Implemented secure user login and persistent chat history with Supabase. Integrated Vercel's AI SDK to allow easy switching between LLMs. Enabled file and image uploads so users can enrich conversations with external context. Built API route handlers in Next.js to connect frontend chat UI with backend AI processing. Ensured smooth real-time interactions with instant feedback.",
    results: "Delivered a working chatbot demo where users can: Log in and maintain session-based history, Upload files/images for context-aware responses, Experience persistent, database-backed conversations. Demonstrated full-stack mastery of auth, storage, and AI APIs in one cohesive app.",
    goalsAchieved: ["Multi-modal AI", "File Upload Support", "Persistent History", "Full-stack Integration", "User Authentication"],
    rating: 4.6,
    liveUrl: "",
    githubUrl: "",
    ja: {
      name: "AIチャットボット – ファイル添付＆履歴永続化",
      category: "人工知能",
      description: "ファイル/画像を文脈として扱えるチャット体験を実装し、履歴を永続化。",
      purpose: "テキストに限定されない高機能対話を実現。",
      role: "フルスタックとしてUIとバックエンド統合を実施。",
      approach: "認証・ストレージ・AI APIを統合し、即時応答のUXを設計。",
      results: "継続的な会話体験と文脈理解を実現。"
    }
  },
  {
    id: "9",
    name: "Titanic Dataset Exploration & Survival Analysis",
    category: "Data Analytics",
    period: "2023",
    technologies: ["Python", "pandas", "seaborn", "matplotlib", "Jupyter Notebook"],
    description: "Perform exploratory data analysis (EDA) on the Titanic passenger dataset to identify key factors affecting survival, including gender, age, class, and family relations.",
    folderName: "project9",
    purpose: "Perform exploratory data analysis (EDA) on the Titanic passenger dataset to identify key factors affecting survival, including gender, age, class, and family relations.",
    role: "Data Analyst / Data Scientist - Conducted data cleaning, feature engineering, and visualization. Interpreted patterns and insights from historical passenger data.",
    approach: "Loaded Titanic CSV dataset and inspected columns (demographics, fares, cabin, etc.). Cleaned data, handled missing values, and engineered new features (e.g., 'Person' distinguishing children). Explored survival by: Gender – male vs female, Class – 1st, 2nd, 3rd, Age – children, adults, elderly, Family relations – alone vs with family aboard, Decks – extracted cabin letters to infer deck levels. Visualized survival patterns using categorical plots, factor plots, and linear plots. Derived insights on how combinations of gender, class, and age influenced survival.",
    results: "Identified higher survival rates for women and children, especially in higher classes. Found 3rd-class passengers had lower survival odds, highlighting class disparities. Analyzed effect of age, family, and cabin deck on survival. Delivered clear visualizations and actionable insights for historical understanding.",
    goalsAchieved: ["Survival Pattern Analysis", "Data Visualization", "Feature Engineering", "Statistical Insights", "Historical Understanding"],
    rating: 4.2,
    liveUrl: "https://www.kaggle.com/competitions/titanic",
    githubUrl: "",
    ja: {
      name: "タイタニックデータの探索と生存分析",
      category: "データ分析",
      description: "性別・年齢・等級・家族構成等が生存率に与える影響を探索的に分析。",
      purpose: "歴史的データに基づく要因分析と可視化。",
      role: "データアナリストとして前処理・特徴設計・可視化を担当。",
      approach: "カテゴリ別/回帰的な可視化でパターン把握。",
      results: "生存に寄与する主要因を明確化。"
    }
  },
  {
    id: "10",
    name: "Henworld.ie – Ireland's Ultimate Hen Party Store",
    category: "E-commerce",
    period: "2021",
    technologies: ["BigCommerce", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "WooCommerce", "Adobe XD", "Figma", "Git", "GitHub"],
    description: "Henworld.ie serves as a comprehensive e-commerce destination for hen party planners across Ireland, offering themed costumes, décor, personalised accessories, rentals, and more — all designed to simplify and enhance the party planning experience.",
    folderName: "project10",
    purpose: "Henworld.ie serves as a comprehensive e-commerce destination for hen party planners across Ireland, offering themed costumes, décor, personalised accessories, rentals, and more — all designed to simplify and enhance the party planning experience.",
    role: "Frontend Lead / E-commerce Developer / Project Contributor - Collaborated with the client/business owner to define site goals and priorities. Designed and implemented the site using BigCommerce. Ensured seamless UX for product discovery (gifting, decorations, rentals, personalization). Integrated branding, custom fields, and performance optimizations. Coordinated with developers/designers (e.g., MAK Digital Design, credited for site build).",
    approach: "Researched user needs for hen party planning — product themes, personalization, one-stop-shop experience. Mapped out required product categories and site sections (gift boxes, personalisation, rentals, decorations, etc.). Structured navigation to accommodate hundreds of SKUs under intuitive categories (e.g., Gift Boxes → Build a Box; Personalised Glasses, Veils; Rentals). Highlighted fast delivery and urgent order options prominently on site. Built the storefront on BigCommerce with a responsive, SEO-optimized theme. Integrated tracking (via AfterShip) and marketing tools (analytics, email & SMS, personalization). Applied custom SEO enhancements and site optimisations during August 2021 relaunch.",
    results: "Comprehensive Product Range: Broad category structure (gift boxes, personalized items, costumes, rentals) makes it Ireland's go-to hen party resource. Strong Customer Reputation: Review site WeddingsOnline reports 5-star ratings for quality, responsiveness, and fast delivery. Operational Efficiency: Integration with AfterShip allows customers to track delivery via DPD or My Account promptly. SEO & Growth: Optimized website architecture and search presence via SEO-focused rebuild by MAK Digital in 2021. Brand Identity & Trust: Clear About Us page, fast shipping, and personalized service fosters credibility and repeat business.",
    goalsAchieved: ["Comprehensive Product Range", "Customer Satisfaction", "Operational Efficiency", "SEO Optimization", "Brand Trust"],
    rating: 4.7,
    liveUrl: "https://www.henworld.ie/",
    githubUrl: "",
    ja: {
      name: "Henworld.ie – アイルランドのヘンパーティ専門店",
      category: "Eコマース",
      description: "多彩なカテゴリとパーソナライズ商品を備えたECサイト。運用効率とUXを両立。",
      purpose: "購入体験を簡潔にし、在庫/配送連携を強化。",
      role: "フロントエンド/EC開発として設計・実装・最適化を担当。",
      approach: "BigCommerceでSEO・性能・追跡を最適化しUXを改善。",
      results: "品揃え・信頼性・SEOで評価向上。"
    }
  },
  {
    id: "11",
    name: "Action Village – eCommerce Website Redesign and Platform Migration",
    category: "E-commerce",
    period: "2022",
    technologies: ["BigCommerce", "HTML5", "CSS3", "JavaScript", "jQuery", "Responsive Web Design"],
    description: "Action Village, a leading retailer specializing in extreme sports gear—particularly paintball, airsoft, skateboarding, snowboarding, and BMX—sought to enhance its online presence. The goal was to modernize the user experience, improve site performance, and increase conversion rates by migrating from Volusion to BigCommerce.",
    folderName: "project11",
    purpose: "Action Village, a leading retailer specializing in extreme sports gear—particularly paintball, airsoft, skateboarding, snowboarding, and BMX—sought to enhance its online presence. The goal was to modernize the user experience, improve site performance, and increase conversion rates by migrating from Volusion to BigCommerce.",
    role: "Front-end Developer - Translated the redesigned user interface into responsive, accessible HTML/CSS. Integrated dynamic product displays and filtering systems. Ensured seamless migration of product data and customer information. Collaborated with the design team to maintain brand consistency and enhance user engagement.",
    approach: "User Experience Enhancement: Simplified navigation and improved the checkout process to reduce cart abandonment. Visual Overhaul: Updated the website's aesthetics to align with modern design trends and the brand's identity. Performance Optimization: Implemented strategies to improve page load times and overall site performance. Data Migration: Ensured a smooth transition of product and customer data from Volusion to BigCommerce without data loss.",
    results: "Increased Conversion Rates: The redesigned site led to higher user engagement and improved sales metrics. Enhanced Mobile Experience: Responsive design resulted in a better shopping experience on mobile devices. Improved Site Performance: Faster load times contributed to lower bounce rates and higher customer satisfaction. Positive Client Feedback: Action Village reported satisfaction with the project's outcome, noting the site's improved functionality and aesthetics.",
    goalsAchieved: ["Conversion Rate Increase", "Mobile Experience Enhancement", "Performance Improvement", "Client Satisfaction", "Brand Consistency"],
    rating: 4.5,
    liveUrl: "https://www.actionvillage.com/",
    githubUrl: "",
    ja: {
      name: "Action Village – ECサイト再設計とプラットフォーム移行",
      category: "Eコマース",
      description: "VolusionからBigCommerceへ移行し、UI/UXと性能を刷新。",
      purpose: "ナビゲーション・チェックアウトの改善とCVR向上。",
      role: "フロントエンド開発としてレスポンシブUIを実装。",
      approach: "データ移行とパフォーマンス最適化を実行。",
      results: "CVR向上・モバイル体験改善・速度向上を実現。"
    }
  },
  {
    id: "12",
    name: "Good Start Packaging – Sustainable Food Packaging Solutions",
    category: "E-commerce",
    period: "2022",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WooCommerce", "Adobe XD", "Figma", "Git", "GitHub"],
    description: "Good Start Packaging is dedicated to providing sustainable, compostable food packaging solutions to foodservice operators. Their mission is to help businesses reduce their environmental impact while maintaining functionality and affordability.",
    folderName: "project12",
    purpose: "Good Start Packaging is dedicated to providing sustainable, compostable food packaging solutions to foodservice operators. Their mission is to help businesses reduce their environmental impact while maintaining functionality and affordability. The company offers a wide range of products made from renewable materials like plant fiber, bamboo, and corn, aiming to inspire conscious consumption and promote a circular economy.",
    role: "Website Developer - Building and maintaining the e-commerce platform to ensure a seamless user experience. Product Integration: Implementing a comprehensive product catalog with detailed descriptions and specifications. User Interface Design: Enhancing the visual appeal and usability of the website to align with the brand's eco-friendly ethos. Performance Optimization: Ensuring fast load times and mobile responsiveness to cater to a diverse customer base.",
    approach: "Research & Discovery: Analyzing market trends and customer needs to inform design decisions. Wireframing & Prototyping: Creating low-fidelity wireframes and high-fidelity prototypes to visualize the website structure and user flow. Development & Testing: Coding the website with attention to detail, followed by rigorous testing across different devices and browsers. Launch & Optimization: Deploying the website and continuously monitoring performance to make necessary adjustments.",
    results: "Increased Traffic: A significant rise in organic search traffic due to improved SEO practices. Higher Conversion Rates: Enhanced user experience contributed to increased sales and customer retention. Positive Feedback: Customers appreciated the intuitive navigation and detailed product information, leading to favorable reviews.",
    goalsAchieved: ["Traffic Increase", "Conversion Rate Improvement", "Customer Satisfaction", "SEO Optimization", "User Experience Enhancement"],
    rating: 4.4,
    liveUrl: "https://www.goodstartpackaging.com",
    githubUrl: "",
    ja: {
      name: "Good Start Packaging – サステナブル食品容器ソリューション",
      category: "Eコマース",
      description: "再生可能素材を採用した環境配慮型パッケージのECサイト。",
      purpose: "環境負荷低減と機能性の両立を訴求。",
      role: "サイト開発・UI最適化・性能改善を担当。",
      approach: "調査・設計・実装・最適化の一連を推進。",
      results: "自然検索流入とCVR向上、ユーザー満足度改善。"
    }
  },
  {
    id: "13",
    name: "MeddMax eCommerce Platform Overhaul",
    category: "E-commerce",
    period: "2022",
    technologies: ["BigCommerce Stencil", "HTML", "CSS", "JavaScript", "Liquid Templating"],
    description: "MeddMax is a B2B medical supply company that transitioned from a basic Wix-based platform to a robust BigCommerce solution to better serve healthcare providers and institutions. The project aimed to enhance user experience, streamline operations, and support the company's growth.",
    folderName: "project13",
    purpose: "MeddMax is a B2B medical supply company that transitioned from a basic Wix-based platform to a robust BigCommerce solution to better serve healthcare providers and institutions. The project aimed to enhance user experience, streamline operations, and support the company's growth.",
    role: "Lead Developer - Overseeing the migration from Wix to BigCommerce. Designing and implementing a custom BigCommerce theme using Stencil technology. Integrating B2B functionalities to cater to wholesale clients. Ensuring mobile responsiveness and SEO optimization.",
    approach: "Platform Migration: We meticulously transferred product data, customer information, and order history from Wix to BigCommerce, ensuring data integrity and minimal downtime. Custom Theme Development: A responsive and user-friendly theme was crafted, aligning with MeddMax's branding and enhancing the shopping experience. B2B Features: Integrated features like bulk ordering, customer-specific pricing, and wholesale registration to cater to business clients. SEO Optimization: Implemented SEO best practices, including optimized meta tags, structured data, and clean URL structures to improve search engine visibility.",
    results: "Enhanced User Experience: The new platform offers a seamless shopping experience across devices. Increased Sales: The B2B features facilitated bulk orders, leading to higher transaction volumes. Improved Search Rankings: SEO enhancements resulted in better visibility on search engines, attracting more organic traffic.",
    goalsAchieved: ["User Experience Enhancement", "Sales Increase", "Search Ranking Improvement", "B2B Functionality", "Data Migration Success"],
    rating: 4.6,
    liveUrl: "https://meddmax.com/",
    githubUrl: "",
    ja: {
      name: "MeddMax – B2B向けECプラットフォーム刷新",
      category: "Eコマース",
      description: "WixからBigCommerceへ移行し、B2B機能とテーマを最適化。",
      purpose: "業務成長に耐える機能拡張とUX改善。",
      role: "リード開発としてテーマ開発とB2B機能実装。",
      approach: "データ移行、SEO、レスポンシブ最適化を実行。",
      results: "UXと売上、検索流入の向上を達成。"
    }
  },
  {
    id: "14",
    name: "Raid Research – BigCommerce Website Design & Development",
    category: "E-commerce",
    period: "2021",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "BigCommerce", "Adobe XD", "Figma", "Git", "Google Analytics"],
    description: "Raid Research sought to establish a robust online presence to showcase their expertise in firearm customization, including Cerakote® coating, gunsmithing, and laser engraving services. The goal was to create a digital platform that mirrored their craftsmanship and connected with a broader audience.",
    folderName: "project14",
    purpose: "Raid Research sought to establish a robust online presence to showcase their expertise in firearm customization, including Cerakote® coating, gunsmithing, and laser engraving services. The goal was to create a digital platform that mirrored their craftsmanship and connected with a broader audience.",
    role: "Lead Designer and Developer - Designing the user interface (UI) and user experience (UX) to align with Raid Research's brand identity. Developing a responsive and intuitive website on the BigCommerce platform. Integrating e-commerce functionalities, including product listings, service bookings, and secure payment gateways. Ensuring the website was optimized for performance and search engine visibility.",
    approach: "Brand Analysis: Collaborated closely with Raid Research to understand their brand ethos, target audience, and unique selling propositions. Wireframing & Prototyping: Developed wireframes and prototypes to visualize the website's structure and user flow. Design & Development: Created a modern, visually appealing design that emphasized Raid Research's craftsmanship. Implemented the design on the BigCommerce platform, ensuring a seamless shopping experience. Testing & Optimization: Conducted thorough testing across different devices and browsers to ensure responsiveness and functionality. Optimized the website for speed and SEO.",
    results: "Launched a fully functional e-commerce website that showcases Raid Research's services and products. Enhanced online visibility, leading to increased customer engagement and inquiries. Streamlined the booking process for custom services, improving customer satisfaction.",
    goalsAchieved: ["E-commerce Functionality", "Online Visibility Enhancement", "Customer Engagement", "Service Booking Streamlining", "Customer Satisfaction"],
    rating: 4.5,
    liveUrl: "https://raidresearch.com/",
    githubUrl: "",
    ja: {
      name: "Raid Research – ECサイト設計・開発",
      category: "Eコマース",
      description: "ブランディングを反映した近代的なECサイトを設計・実装。",
      purpose: "専門性とサービスを魅力的に発信。",
      role: "デザイン/開発を一貫して担当。",
      approach: "ワイヤー/プロトタイプから実装・SEO最適化まで対応。",
      results: "問い合わせと予約動線を改善し、可視性を向上。"
    }
  },
  {
    id: "15",
    name: "Tek-Stock LLC eCommerce Website",
    category: "E-commerce",
    period: "2021",
    technologies: ["BigCommerce Stencil", "HTML5", "CSS3", "JavaScript", "jQuery", "Responsive Design", "Google Analytics", "SEO Tools"],
    description: "The project involved a comprehensive redesign and redevelopment of the Tek-Stock website into a modern, scalable BigCommerce storefront. The goal was to showcase Tek-Stock's extensive inventory and reinforce their industry reputation by creating an intuitive, user-friendly online platform for technical customers.",
    folderName: "project15",
    purpose: "The project involved a comprehensive redesign and redevelopment of the Tek-Stock website into a modern, scalable BigCommerce storefront. The goal was to showcase Tek-Stock's extensive inventory and reinforce their industry reputation by creating an intuitive, user-friendly online platform for technical customers.",
    role: "Web Developer - Built and customized the BigCommerce e-commerce site to meet the client's requirements. Developed advanced navigation features (custom desktop mega-menu and mobile drill-down menu) to improve usability. Built responsive page templates (home, category, product, brand) with intuitive layouts and dynamic filtering options. Ensured full mobile responsiveness and accessibility compliance across devices. Implemented SEO and performance optimizations (updating meta tags, structured data, image compression, caching) to improve search visibility and site speed.",
    approach: "User-Centric Design: Focused the redesign on a modern, intuitive UI. Emphasized clear branding, easy navigation, and enhanced filtering to help engineers quickly find products. Custom Features: Developed bespoke navigation and interface elements (e.g. mega-menu, drill-down mobile menu) as part of the custom BigCommerce theme. Responsive & Accessible: Built a fully responsive design with accessibility optimizations, ensuring the site performs well on all devices and meets modern accessibility standards. SEO Optimization: Conducted a thorough SEO audit and implemented on-page improvements (optimized page titles, meta tags, structured data, keyword alignment) to boost search rankings and organic traffic. Performance Tuning: Optimized images, scripts, and loading strategies to significantly reduce page load times, enhancing the user experience without sacrificing visual quality.",
    results: "Modernized E-commerce Site: Launched a fully redesigned BigCommerce storefront with a clean, professional look and user-friendly product catalogs, reflecting Tek-Stock's brand and industry leadership. Improved SEO & Traffic: On-page SEO enhancements drove higher search rankings and increased organic traffic to the site. Faster Performance: Performance optimizations led to significantly faster load times and smoother browsing, improving engagement for Tek-Stock's B2B customers. Positive Client Impact: Delivered a scalable, mobile-friendly platform that reinforces Tek-Stock's reputation as a trusted distributor and streamlines the buying process for specialized RF cable products.",
    goalsAchieved: ["Site Modernization", "SEO Improvement", "Performance Enhancement", "Client Impact", "B2B Customer Engagement"],
    rating: 4.7,
    liveUrl: "https://www.tek-stock.com",
    githubUrl: "",
    ja: {
      name: "Tek-Stock LLC – ECサイト",
      category: "Eコマース",
      description: "BigCommerceで情報設計とナビゲーションを刷新し、SEO/性能を強化。",
      purpose: "技術系ユーザー向けの商品探索を高速かつ直感的に。",
      role: "開発・カスタマイズ・最適化全般を担当。",
      approach: "メガメニュー・フィルタ・構造化データ等を実装。",
      results: "見た目・速度・検索流入を総合的に改善。"
    }
  },
  {
    id: "16",
    name: "Dick Pond Athletics E-Commerce Website (Redesign)",
    category: "E-commerce",
    period: "2021",
    technologies: ["BigCommerce Stencil", "HTML", "CSS", "JavaScript", "Responsive Design", "Google Analytics", "Facebook Pixel", "SEO Tools"],
    description: "Dick Pond Athletics is a longtime Chicago-area running and sports retailer (five local stores plus mail order) whose mission is to be a 'one-stop destination for all of your running gear'. The goal of this project was to transform their site into a full-featured online store and community hub.",
    folderName: "project16",
    purpose: "Dick Pond Athletics is a longtime Chicago-area running and sports retailer (five local stores plus mail order) whose mission is to be a 'one-stop destination for all of your running gear'. The goal of this project was to transform their site into a full-featured online store and community hub. We needed to showcase the full range of products (running shoes, team uniforms, track & field and wrestling gear) while reinforcing the brand's identity.",
    role: "Solo Developer and Designer - Owned the entire project from concept through launch. Handled user research, UI/UX design, front-end coding (HTML/CSS/JavaScript), back-end setup (BigCommerce configuration), content integration (products, blog, static pages), and performance/SEO optimization. Coordinated with the client on branding and requirements, then executed all visual design, theme development, and testing independently.",
    approach: "Discovery & Planning: Defined the site structure (major categories: Running, Cross Country, Track & Field, Wrestling, Team Apparel, etc.) and gathered client goals. Reviewed Dick Pond's existing brand assets and competitors. Wireframed key pages (home, category, product, blog) to align with the brand's energetic, athletic identity. Design: Created mockups for the homepage and product pages, focusing on a clean layout that highlights products and sales. Emphasized large hero images and easy navigation. Modernized with contemporary fonts, clear calls-to-action, and consistent styling. BigCommerce Development: Ported the design into a custom BigCommerce Stencil theme. Involved templating HTML/CSS for the header, footer, and page layouts, and configuring BigCommerce widgets for dynamic content. Content & SEO: Migrated existing blog/news content and store information. Performed an SEO audit to preserve rankings, then optimized all product and page metadata. Testing & Optimization: Tested across browsers and devices. Fine-tuned page performance by compressing images and deferring scripts. Launch & Monitoring: Configured the live environment (DNS, SSL) and deployed the site. Post-launch, monitored analytics to ensure a smooth transition.",
    results: "Modernized E-commerce Interface: The redesigned site delivers a polished, high-UX interface. Product pages now use crisp, full-width images on a clean white background, making it easy for customers to examine items. The layout uses clear typography and intuitive navigation so products are front-and-center. Responsive & Mobile-Optimized: The site now displays flawlessly on smartphones and tablets. Every page layout scales correctly without horizontal scrolling. Fast Performance: By using BigCommerce's Stencil framework and optimizing assets, the load times have significantly improved. Pages render quickly even with many products listed. Improved SEO & Visibility: On-page optimizations (meta tags, structured data) were implemented site-wide, and the content was aligned with target keywords. This maintains and boosts search rankings for key terms like running shoes and track apparel. Rich E-commerce Functionality: Customers can drill down with filters (by size, price, brand) and switch easily between categories. Integrated gift cards, wishlists, and the 'My Pond Rewards' loyalty program were made accessible. Community Engagement: A dynamic blog/news section keeps the site fresh. Posts about upcoming races and store events are highlighted on the homepage. The blog uses relevant, high-impact images to draw in readers. These features encourage repeat visits and newsletter sign-ups. Accessibility & Standards: The site now includes an Accessibility Statement and uses semantic HTML. This ensures people with disabilities can navigate the content, expanding the potential audience.",
    goalsAchieved: ["Interface Modernization", "Mobile Optimization", "Performance Improvement", "SEO Enhancement", "E-commerce Functionality", "Community Engagement", "Accessibility Compliance"],
    rating: 4.8,
    liveUrl: "https://dickpondathletics.com",
    githubUrl: "",
    ja: {
      name: "Dick Pond Athletics – ECサイト再設計",
      category: "Eコマース",
      description: "ブランド性を高める近代的UIと高速表示でEC体験を刷新。",
      purpose: "商品訴求力とコミュニティ性の強化。",
      role: "デザインからテーマ実装、SEO/性能まで一貫対応。",
      approach: "画像最適化/遅延読込/スクリプト最適化などで高速化。",
      results: "モバイル最適化・検索可視性・閲覧体験が大幅に向上。"
    }
  }
];

// Centralized project date ranges (YYYY/MM/DD)
export const projectDateMap: Record<string, { start: string; end: string }> = {
  "1": { start: "2023/03/01", end: "2023/06/15" },
  "2": { start: "2024/09/10", end: "2024/10/31" },
  "3": { start: "2022/03/01", end: "2022/03/15" },
  "4": { start: "2022/04/01", end: "2022/04/15" },
  "5": { start: "2022/11/10", end: "2022/11/20" },
  "6": { start: "2022/12/01", end: "2022/12/15" },
  "7": { start: "2022/05/01", end: "2022/07/15" },
  "8": { start: "2022/08/01", end: "2022/08/31" },
  // Guard against swapped dates by allowing formatter to swap if needed
  "9": { start: "2023/02/01", end: "2023/04/20" },
  "10": { start: "2023/08/10", end: "2023/09/30" },
  "11": { start: "2023/06/20", end: "2023/08/20" },
  "12": { start: "2023/10/01", end: "2023/11/30" },
  "14": { start: "2023/12/01", end: "2024/02/10" },
  "13": { start: "2023/11/20", end: "2024/01/20" },
  "15": { start: "2024/01/15", end: "2024/03/15" },
  "16": { start: "2024/02/01", end: "2024/04/30" }
};

// Helper: format a project's period using the centralized date map
export const formatProjectPeriod = (id: string): string | null => {
  const range = projectDateMap[id];
  if (!range) return null;
  const toISO = (s: string) => s.replace(/\//g, '-');
  let start = new Date(toISO(range.start));
  let end = new Date(toISO(range.end));
  // Swap if dates are inverted
  if (end.getTime() < start.getTime()) {
    const tmp = start;
    start = end;
    end = tmp;
  }
  const fmt = (d: Date) => d.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  return `${fmt(start)} – ${fmt(end)}`;
};

// Helper function to get project images
export const getProjectImages = (folderName: string): string[] => {
  // This would typically be dynamically generated based on the folder contents
  // For now, returning common image patterns
  return [
    `/projects/${folderName}/main.jpg`,
    `/projects/${folderName}/Screenshot_1.jpg`,
    `/projects/${folderName}/Screenshot_2.jpg`,
    `/projects/${folderName}/Screenshot_3.jpg`
  ];
};

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

// Get all unique categories
export const getCategories = (): string[] => {
  return Array.from(new Set(projects.map(project => project.category)));
}; 