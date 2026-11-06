export interface Project {
  title: string;
  tagline: string;
  description: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const PROFILE = {
  name: "Sadique Khan",
  title: "Full-Stack Developer",
  location: "Bhopal, Madhya Pradesh, India",
  email: "sadiquekhan78614@gmail.com",
  phone: "+91-9131826183",
  github: "https://github.com/sadique-khan",
  linkedin: "https://www.linkedin.com/in/sadiquekhan-/",
  summary:
    "Motivated Full-Stack Developer skilled in React, Next.js, Node.js, and TypeScript, backed by AWS Certified Cloud Practitioner credentials. Combines modern full-stack architectures with deep technical diagnostics and cross-functional problem solving.",
};

export const PROJECTS: Project[] = [
  {
    title: "TaskFlow - Real-Time Collaborative Workspace",
    tagline: "High-concurrency task management system with instant client synchronization",
    description: [
      "Engineered end-to-end type safety using TypeScript across both frontend and backend to minimize runtime exceptions.",
      "Integrated bidirectional WebSocket event handling via Socket.io for sub-second notifications and live collaborative board updates.",
      "Designed relational schemas and managed migrations with Prisma ORM on a cloud PostgreSQL database.",
      "Engineered a decoupled deployment using Netlify for the frontend SPA and Render for the backend API.",
    ],
    techStack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.io"],
    liveUrl: "https://tangerine-pothos-917e0b.netlify.app/",
    githubUrl: "https://github.com/sadique-khan/taskflow",
  },
  {
    title: "NextGen Blog & Content Architecture",
    tagline: "Server-side content platform built for performance, security, and SEO",
    description: [
      "Developed using Next.js App Router and Server Actions, maximizing Core Web Vitals and eliminating client-side boilerplate.",
      "Implemented secure authentication and session management via Auth.js (NextAuth v5) using credentials-based JWT tokens.",
      "Optimized relational database queries and schema definitions using Prisma ORM with PostgreSQL.",
      "Configured containerized local development workflows using Docker Compose for cross-platform dependency isolation.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Auth.js", "Docker"],
    githubUrl: "https://github.com/sadique-khan/blog",
  },
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js (App Router)", "Tailwind CSS", "React Query", "Responsive UI"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express", "NestJS", "FastAPI", "Django", "Socket.io", "REST APIs"],
  },
  {
    category: "Databases & ORM",
    skills: ["PostgreSQL", "Prisma ORM", "MySQL", "MongoDB"],
  },
  {
    category: "Cloud, DevOps & Tooling",
    skills: ["AWS (EC2, Cloud Practitioner)", "Docker", "Kubernetes (Minikube)", "Git", "GitHub Actions", "Render", "Netlify", "Vercel"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    id: "4d6131ea582b4ad7b0480e7cf8ce51c6",
    period: "10/2024 – 01/2025",
  },
  {
    title: "Cloud Application Developer",
    issuer: "AWS / Training Program",
    id: "Certified Track",
    period: "Completed",
  },
];

export const EXPERIENCE = [
  {
    company: "Atain",
    role: "Line SME (Escalation Desk)",
    location: "Bhopal, India",
    period: "07/2026 – Present",
    points: [
      "Manage the tier-2 escalation desk, diagnosing and driving resolution on critical, high-level operational issues.",
      "Oversee incident and escalation workflows, reducing resolution turnarounds while upholding rigorous SLA compliance.",
      "Perform technical root-cause analyses across reservation workflows and operational services.",
    ],
  },
  {
    company: "Atain",
    role: "Customer Service Associate",
    location: "Bhopal, India",
    period: "01/2025 – 06/2026",
    points: [
      "Handled high volumes of critical operational escalations across reservation workflows with prompt, systematic troubleshooting.",
      "Delivered reliable technical triage and customer communication in high-pressure operational scenarios.",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech in Mechanical Engineering",
  institution: "Oriental Institute of Science and Technology, Bhopal",
  period: "10/2020 – 07/2024",
  cgpa: "7.4 / 10.0",
};