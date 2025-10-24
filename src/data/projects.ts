import type { Project } from "../types/project";

export const projects: Project[] = [
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
