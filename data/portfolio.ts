export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  impact: string;
  metrics: string[];
  techStack: string[];
  visualWorkflow: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  type?: string;
  impactMetrics: string[];
  highlights: string[];
  skillsUsed: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  coursework: string[];
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Metric {
  value: string;
  label: string;
  icon: string;
}

export interface AgentQuestion {
  label: string;
  query: string;
  response: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  heroBadges: string[];
  impactMetrics: Metric[];
  about: {
    paragraphs: string[];
    dna: { label: string; icon: string }[];
  };
  projects: Project[];
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  languages: string[];
  agentQuestions: AgentQuestion[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Pushkraj Kohok",
    role: "AI/ML Engineer & Full-Stack AI Engineer",
    tagline: "Building intelligent, scalable, and human-centered AI systems.",
    bio: "MS in Artificial Intelligence candidate at Illinois Institute of Technology, Chicago. Experienced across generative AI, RAG systems, multi-agent platforms, machine learning, backend systems, cloud deployment, and software engineering. Driven by solving business-critical problems and scaling AI product architectures with measurable impacts.",
    location: "Chicago, IL",
    email: "pushkrajkohok@gmail.com",
    phone: "(872) 899-0708",
    linkedin: "https://www.linkedin.com/in/pushkrajkohok/",
    github: "https://github.com/PushkrajKohok",
  },
  heroBadges: [
    "RAG Systems",
    "Multi-Agent AI",
    "Full-Stack Engineering",
    "Machine Learning",
    "Cloud + DevOps",
  ],
  impactMetrics: [
    { value: "90%", label: "DA Effort Reduced", icon: "trending-down" },
    { value: "80%", label: "Transaction Time Cut", icon: "zap" },
    { value: "10×", label: "Faster AI Search", icon: "search" },
    { value: "300%", label: "Sales Increase", icon: "trending-up" },
    { value: "70%", label: "Extraction Accuracy Gain", icon: "target" },
    { value: "30%", label: "Planning Efficiency Boost", icon: "brain" },
  ],
  about: {
    paragraphs: [
      "I began my engineering career in the core layers of software development—building robust APIs, managing petabyte-scale cloud backup validations at <strong>Druva</strong>, and developing marketing automation pipelines. While optimizing these enterprise systems, I saw that the real frontier was not just moving data, but enabling systems to reason with it.",
      "This realization led me to pursue my <strong>MS in Artificial Intelligence</strong> at <strong>Illinois Tech</strong> in Chicago. Today, I bridge the gap between traditional software systems and advanced cognitive models. I design agentic networks, orchestrate LLM execution loops, and build explainable security visualizers.",
      'I focus heavily on <span class="text-accent-cyan font-mono">measurable impact</span>. Whether it\'s cutting analyst effort by 90%, boosting extraction precision by 20%, or scaling search speed 10×, I believe that AI must serve concrete commercial and clinical utility, wrapped in production-grade reliability.',
    ],
    dna: [
      { label: "Applied AI", icon: "brain" },
      { label: "RAG + Vector Search", icon: "search" },
      { label: "Multi-Agent Systems", icon: "network" },
      { label: "Backend Engineering", icon: "server" },
      { label: "Cloud + Automation", icon: "cloud" },
      { label: "Product Impact", icon: "target" },
    ],
  },
  projects: [
    {
      id: "teachfusion-ai",
      title: "TeachFusion AI",
      type: "RAG & Multi-Agent Teaching Platform",
      description:
        "A platform that generates grounded course plans from uploaded course materials, enabling educators to utilize AI constructively and systematically.",
      impact: "Improved lesson-planning efficiency by 30%.",
      metrics: [
        "30% Planning Efficiency Boost",
        "3-Agent Orchestration",
        "Zero-Hallucination Retrieval",
      ],
      techStack: [
        "Gemini APIs",
        "LangChain",
        "Vector Search",
        "Python",
        "FastAPI",
        "Next.js",
      ],
      visualWorkflow: [
        "Upload Material",
        "Chunking & Vector Search",
        "Multi-Agent Planning",
        "Teaching Plan Generation",
      ],
      githubUrl: "https://github.com/PushkrajKohok",
      demoUrl: "#",
    },
    {
      id: "medorbit",
      title: "MedOrbit",
      type: "Healthcare AI & Clinical Orchestration",
      description:
        "A clinical AI platform that digests medical consultation transcripts and extracts structured clinical and behavioral insights, securing doctor approval prior to patient delivery.",
      impact:
        "Ensured 100% doctor-approved clinical insights and behavioral analysis before patient delivery.",
      metrics: [
        "Multi-Agent Clinical Pipeline",
        "JWT/RBAC Secure Ingestion",
        "Structured Patient Reports",
      ],
      techStack: [
        "React",
        "TypeScript",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "OpenAI APIs",
      ],
      visualWorkflow: [
        "Consultation Transcript",
        "Clinical Extraction",
        "Behavioral Analysis",
        "Doctor Approval Gate",
        "Patient Communication",
      ],
      githubUrl: "https://github.com/PushkrajKohok",
      demoUrl: "#",
    },
    {
      id: "codebleed",
      title: "CodeBleed",
      type: "Graph-Based Threat Intelligence Platform",
      description:
        "An AI-powered cybersecurity intelligence engine that ingests repository structures and visualizes vulnerabilities as explainable, graph-driven attack paths.",
      impact:
        "Surfaced and mapped 4 critical risk vectors: secrets, vulnerable dependencies, endpoints, and exploit paths.",
      metrics: [
        "4 Major Risk Vectors",
        "Neo4j Graph Queries",
        "Real-time Attack Path Visualization",
      ],
      techStack: [
        "FastAPI",
        "Neo4j",
        "GitHub REST API",
        "vis.js",
        "Python",
        "LangChain",
      ],
      visualWorkflow: [
        "Repository Ingest",
        "Secrets & Dependents Scan",
        "Neo4j Graph Database Mapping",
        "Attack Path Analysis & Explainable AI",
      ],
      githubUrl: "https://github.com/PushkrajKohok",
      demoUrl: "#",
    },
  ],
  experience: [
    {
      company: "Stealth Startup / The Vault",
      location: "Chicago, USA",
      role: "Full-Stack AI Engineer (Volunteer)",
      period: "August 2025 – October 2025",
      type: "AI & Web Platform Development",
      impactMetrics: [
        "90% Analyst Effort Reduction",
        "80% Transaction Time Drop",
        "10× Search Acceleration",
      ],
      highlights: [
        "Eliminated data analyst manual workload by 90% by architecting a dashboard with RAG-powered dynamic reports and sales trend predictions.",
        "Reduced transaction execution time by 80% and increased business profits by developing an instant-sell trading feature.",
        "Delivered 10× faster search responses across repository data by integrating AI-backed vector database retrieval.",
      ],
      skillsUsed: [
        "Next.js",
        "FastAPI",
        "RAG Systems",
        "Vector Databases",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      company: "Stealth Startup",
      location: "Pune, India",
      role: "Machine Learning Engineer",
      period: "January 2023 – June 2023",
      type: "Machine Learning & Document AI",
      impactMetrics: [
        "20% Precision Increase",
        "70% Extraction Accuracy Gain",
        "50+ Business Bugs Resolved",
      ],
      highlights: [
        "Increased classification precision by 20% and reduced page misclassification by designing hybrid machine learning models (Python & C#).",
        "Resolved 50+ business-critical backend bugs and increased data extraction accuracy by approximately 70%.",
        "Trained custom Form Recognizer ML models to handle document structure extraction for highly unique and variable layouts.",
      ],
      skillsUsed: [
        "Python",
        "C#",
        "Form Recognizer",
        "Scikit-Learn",
        "API Integration",
        "Model Tuning",
      ],
    },
    {
      company: "Freelance",
      location: "Pune, India",
      role: "Full-Stack Software Engineer",
      period: "September 2022 – December 2022",
      type: "Freelance Projects & Automation",
      impactMetrics: ["300% Sales Boost", "3 Interns Led", "1 Month Delivery"],
      highlights: [
        "Achieved a 300% increase in client sales in one month by developing a Python-based custom digital marketing automation engine using Gmail SMTP and rich HTML design.",
        "Led a team of 3 interns to design, develop, and deliver an e-commerce website for a local shipping and logistics business using WordPress.",
      ],
      skillsUsed: [
        "Python",
        "SMTP",
        "HTML/CSS",
        "WordPress",
        "E-commerce",
        "Leadership",
      ],
    },
    {
      company: "Druva Data Solutions Pvt. Ltd.",
      location: "Pune, India",
      role: "Full-Stack Software Engineer",
      period: "October 2020 – April 2022",
      type: "Cloud Backup & DevOps Automation",
      impactMetrics: [
        "16% API Pipeline Optimization",
        "100% Main Branch Reliability",
        "2 Weeks Manual Testing Saved",
      ],
      highlights: [
        "Improved backend API data pipeline efficiency by 16% using Python Flask optimization and caching.",
        "Guaranteed 100% main product branch stability by owning the StorageConfig automation architecture and managing Jenkins CI/CD pipelines with over 150 daily scheduled cloud tests.",
        "Eliminated two weeks of recurring manual validation tasks by engineering robust end-to-end regression tests using pytest and Python.",
        "Built and configured services using Docker, AWS EC2, Jenkins, and GitLab in an Agile team.",
      ],
      skillsUsed: [
        "Python Flask",
        "Docker",
        "AWS EC2",
        "Jenkins",
        "GitLab CI/CD",
        "pytest",
      ],
    },
    {
      company: "Vishwakarma Institute of Information Technology",
      location: "Pune, India",
      role: "Research Assistant (Emotion Analysis Project)",
      period: "January 2019 – May 2019",
      type: "Audio Processing & Speech ML",
      impactMetrics: ["10% Accuracy Gain", "Scopus-Indexed Research"],
      highlights: [
        "Improved emotion recognition accuracy by 10% on professor's published speech analysis research by refining MFCC audio feature extractions using Praat.",
        "Implemented and trained Support Vector Machines (SVM) and Random Forest classifiers for multi-class audio emotion detection.",
      ],
      skillsUsed: [
        "Python",
        "Praat",
        "MFCCs",
        "SVM",
        "Random Forest",
        "Feature Extraction",
      ],
    },
  ],
  education: [
    {
      institution: "Illinois Institute of Technology",
      location: "Chicago, IL, USA",
      degree: "MS in Artificial Intelligence",
      period: "August 2024 – April 2026",
      coursework: [
        "Advanced Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Advanced Algorithms",
        "Cognitive Psychology",
      ],
      highlights: [
        "Specializing in Generative AI, RAG Systems, Multi-Agent Systems, and Applied Deep Learning.",
      ],
    },
    {
      institution: "Vishwakarma Institute of Information Technology",
      location: "Pune, India",
      degree: "Bachelor of Computer Engineering (Data Science Major)",
      period: "June 2016 – May 2020",
      coursework: [
        "AI and Robotics",
        "Intro to Machine Learning",
        "Data Analytics",
        "Advanced Data Structures",
        "Advanced Mathematics",
      ],
      highlights: [
        "Publication: Co-authored research paper published in the International Journal of Advanced Science & Technology (Scopus indexed).",
      ],
    },
  ],
  skills: [
    {
      category: "AI / ML",
      skills: [
        "Generative AI",
        "LLMs",
        "RAG",
        "LangChain",
        "Multi-Agent Systems",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Vector Databases",
      ],
    },
    {
      category: "Programming",
      skills: ["Python", "TypeScript", "Golang", "C++", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    },
    {
      category: "Backend",
      skills: ["Flask", "FastAPI", "REST APIs", "SQLAlchemy", "pytest"],
    },
    {
      category: "Data / ML Libraries",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "PyTorch",
        "TensorFlow",
        "Keras",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS EC2", "AWS S3", "Docker", "Jenkins", "GitLab", "CI/CD"],
    },
  ],
  languages: ["English", "Hindi", "Spanish"],
  agentQuestions: [
    {
      label: "Who is Pushkraj?",
      query: "Who is Pushkraj Kohok?",
      response:
        '**Pushkraj Kohok** is an **AI/ML Engineer & Full-Stack AI Engineer** currently pursuing his **MS in Artificial Intelligence** at the **Illinois Institute of Technology, Chicago** (graduation: April 2026).\\n\\nHe specializes in building agentic systems, RAG platforms, enterprise software backends, and cloud deployment pipelines. He combines academic deep-learning theory with actual production experience to deliver high-impact, measurable AI applications.',
    },
    {
      label: "Strongest Projects",
      query: "What are Pushkraj's strongest AI/ML projects?",
      response:
        "Pushkraj has designed several advanced, explainable AI platforms:\\n\\n1. **TeachFusion AI**: A RAG-driven teaching platform utilizing Gemini APIs, vector search, and a 3-agent orchestration pipeline to construct curriculum-grounded lesson plans. *Impact: 30% lesson-planning efficiency boost.*\\n\\n2. **MedOrbit**: A healthcare AI system extracting clinical and behavioral metrics from consultation transcripts, utilizing secure FastAPI endpoints, SQLAlchemy, and a multi-agent approval workflow. *Impact: 100% doctor-approved clinical communications.*\\n\\n3. **CodeBleed**: A graph-based repository security visualizer scanning repo file layers and drawing threat paths inside a Neo4j database using FastAPI and vis.js.",
    },
    {
      label: "Tech Stack",
      query: "What technologies does Pushkraj work with?",
      response:
        "Here is a summary of Pushkraj's technical stack:\\n\\n* **Languages**: Python, Golang, TypeScript, C++, SQL\\n* **AI/ML & Data**: Generative AI, RAG, LangChain, Multi-Agent Systems, PyTorch, TensorFlow, Keras, Vector Databases, Pandas, NumPy, Scikit-learn\\n* **Web & Backend**: FastAPI, Next.js, React, Flask, PostgreSQL, SQLAlchemy\\n* **Cloud & DevOps**: AWS (EC2, S3), Docker, Jenkins, GitLab CI/CD, Jenkins pipelines",
    },
    {
      label: "Professional Experience",
      query: "What professional experience does Pushkraj have?",
      response:
        "Pushkraj's professional background covers full-stack AI and cloud infrastructure:\\n\\n* **Full-Stack AI Engineer (Volunteer)** @ *Stealth Startup / The Vault, Chicago* (Aug - Oct 2025): Developed a dashboard featuring RAG-powered reports, eliminating 90% of manual analyst workload. Cut trading transaction times by 80% and boosted search speeds 10×.\\n* **ML Engineer** @ *Stealth Startup, Pune* (Jan - Jun 2023): Designed hybrid document classification models, raising precision by 20% and resolving over 50 business-critical parsing bugs.\\n* **Full-Stack Software Engineer** @ *Freelance, Pune* (Sep - Dec 2022): Built custom Python SMTP automation driving a 300% sales increase.\\n* **Full-Stack Software Engineer** @ *Druva Data Solutions, Pune* (Oct 2020 - Apr 2022): Optimized backup API pipelines by 16%, owned storage config automation, and built Jenkins CI/CD jobs.",
    },
    {
      label: "Why hire Pushkraj?",
      query: "Why is Pushkraj a good fit for AI/ML or Full-Stack AI Engineer roles?",
      response:
        "Pushkraj is an exceptional candidate for AI/ML and Full-Stack AI roles because:\\n\\n1. **End-to-End AI Capability**: He does not just train models; he builds the pipelines, packages them in Docker, hosts them on AWS, and wraps them in reactive Next.js interfaces.\\n2. **Production Instincts**: From his time at Druva, he is well-versed in writing robust tests (pytest), maintaining 100% main-branch reliability, and writing CI/CD Jenkins files.\\n3. **Proven Metrics**: He prioritizes concrete numbers. He has delivered **90% analyst effort reductions**, **80% transaction efficiency savings**, **10× search speedups**, and **20% classification accuracy boosts** in commercial contexts.",
    },
  ],
};
