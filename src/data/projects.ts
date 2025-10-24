import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "WhatsApp Broadcasting Platform",
    role: "Frontend & Backend Developer",
    stack: [
      "Angular",
      "Node.js",
      "WhatsApp Business API",
      "Tailwind CSS",
      "MongoDB",
      "Postgre",
    ],
    description:
      "A full-stack platform enabling high-volume WhatsApp broadcasting and engagement, with integrated chatbots, lead qualification, and real-time performance monitoring.",
    achievements: [
      "Integrated Angular frontend with Node.js backend and WhatsApp Business API for automated broadcasting",
      "Built admin dashboard to monitor message volume, response times and customer engagement metrics",
      "Enabled 24/7 automated support and lead capture via WhatsApp for marketing campaigns",
    ],
    liveUrl: "https://github.com/Open-infotech/whatsapp-broadcasting",
    codeUrl: "https://github.com/Open-infotech/whatsapp-broadcasting",
  },
  {
    title: "Meta Campaign Manager",
    role: "Full Stack Developer",
    stack: ["Angular", "Node.js", "AI Campaign Engine", "MongoDB", "Postgres"],
    description:
      "An AI-powered campaign management system that automates marketing workflows across web, WhatsApp and email, with real-time optimization and performance tracking.",
    achievements: [
      "Developed campaign engine that tracks milestones, sends automated alerts and optimizes performance in real-time",
      "Implemented audience segmentation, triggers and multi-channel integration (web chat, WhatsApp, email)",
      "Reduced manual campaign management efforts and improved ROI via AI-based targeting and budget allocation",
    ],
    liveUrl: "https://github.com/Open-infotech/meta-campaign-manager",
    codeUrl: "https://github.com/Open-infotech/meta-campaign-manager",
  },
  {
    title: "Website Sitemap Scraper",
    role: "Backend Developer / DevOps",
    stack: ["Python", "Playwright", "Docker", "FastAPI"],
    description:
      "A Python-based project to scrape website data using sitemaps — supports both manual and API-based scraping with Docker integration.",
    achievements: [
      "Built using Python + Playwright for advanced web automation",
      "Supports CLI and REST API modes for flexible usage",
      "Dockerized for seamless deployment and local testing",
      "Integrated OpenAI API for intelligent content parsing",
    ],
    liveUrl: "https://github.com/Open-infotech/website-sitemap-scraper",
    codeUrl: "https://github.com/Open-infotech/website-sitemap-scraper",
  },
  {
    title: "AI Document Assistant Backend",
    role: "Backend Developer",
    stack: ["FastAPI", "LangChain", "DeepSeek-R1", "Uvicorn", "Python"],
    description:
      "A backend service for an AI-powered document assistant using FastAPI & LangChain. It processes files (PDF, CSV, XLSX), enables Q&A using DeepSeek-R1, and stores chat history.",
    achievements: [
      "Developed FastAPI-based backend with modular architecture",
      "Implemented AI-powered document Q&A with LangChain + DeepSeek-R1",
      "Integrated PDF, CSV, and XLSX file processing using pdfplumber, pandas, and openpyxl",
      "Supports real-time API integration with Angular frontend",
    ],
    liveUrl: "https://github.com/Open-infotech/ai-doc-assist-backend",
    codeUrl: "https://github.com/Open-infotech/ai-doc-assist-backend",
  },
  {
    title: "AI Chat Assist Platform",
    role: "Lead Frontend Developer",
    stack: ["React", "Tailwind", "TypeScript", "Node.js", "MongoDB"],
    description:
      "AI-powered customer support platform with multichannel integration (Web, WhatsApp, Instagram) and real-time analytics dashboard.",
    features: [
      "24/7 AI-Powered Customer Support",
      "Lead Generation & Qualification",
      "Drag-and-Drop Flow Builder",
      "Real-Time Analytics Dashboard",
      "Multi-Channel Integration",
      "Automated Follow-Ups",
    ],
    achievements: [
      "Reduced manual support workload by 60%",
      "Implemented scalable architecture handling 10K+ daily conversations",
      "Built drag-and-drop flow designer with React DnD",
      "Integrated real-time analytics with WebSocket",
    ],
    liveUrl: "https://www.aichatassist.com",
    codeUrl: "#",
  },
  {
    title: "Portfolio Website",
    role: "Full Stack Developer",
    stack: ["React", "Tailwind CSS"],
    description: "Personal portfolio showcasing my projects and skills.",
    achievements: [
      "Integrated theme toggle",
      "Responsive layout with Framer Motion animations.",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "OIT Collaboration Tool",
    role: "Frontend Developer",
    stack: ["Angular", "TypeScript", "SCSS"],
    description: "Internal web tool for team collaboration at OIT Pvt Ltd.",
    achievements: ["Implemented shared state service using BehaviorSubject."],
    liveUrl: "#",
    codeUrl: "#",
  },
];
