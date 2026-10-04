export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export type ProjectSection = {
  title: string;
  description: string;
  projects: Project[];
};

export const projectSections: ProjectSection[] = [
  {
    title: "Data Analysis & BI",
    description: "Dashboards, trend analysis, and business reporting that help teams understand what is happening and why.",
    projects: [
      {
        title: "Sales Dashboard Analysis",
        description: "Built an interactive dashboard analyzing quarterly sales trends and regional performance.",
        tags: ["Python", "Pandas", "Tableau"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Customer Churn Prediction",
        description: "Trained a model to flag at-risk customers using historical usage data.",
        tags: ["Python", "Scikit-learn", "SQL"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Executive KPI Review",
        description: "Summarized key operational indicators into a leadership-ready scorecard for faster decision-making.",
        tags: ["Power BI", "Forecasting", "Reporting"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Regional Performance Summary",
        description: "Compared regional performance against targets and identified where the biggest opportunities for action were hiding.",
        tags: ["Analytics", "SQL", "Insights"],
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
  {
    title: "Web Development & Product Experience",
    description: "User-facing product work, onboarding flows, and digital experiences designed to improve adoption and clarity.",
    projects: [
      {
        title: "Onboarding Experience Redesign",
        description: "Reworked the first-run experience to simplify onboarding, reduce friction, and improve activation for new users.",
        tags: ["Next.js", "UX", "Product Design"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Client Portal Interface",
        description: "Created a clean portal for stakeholders to track account health, tasks, and performance metrics without clutter.",
        tags: ["React", "UI Design", "Dashboards"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Conversion Funnel Upgrade",
        description: "Improved the customer journey with clearer touchpoints, segmentation, and messaging across key funnel stages.",
        tags: ["UX", "Growth", "Web"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Landing Page Revamp",
        description: "Refined a marketing landing page to better explain the value proposition, increase credibility, and guide action.",
        tags: ["Marketing", "UI", "Brand"],
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
  {
    title: "Operations & Strategy",
    description: "Cross-functional initiatives that connect data, process design, and operational decision-making.",
    projects: [
      {
        title: "Operations Intelligence Platform",
        description: "Designed a decision-making workspace that brings performance metrics, trends, and recommendations together.",
        tags: ["SQL", "Power BI", "Data Strategy"],
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
      },
      {
        title: "KPI Framework Design",
        description: "Defined a reporting model to align executive, team, and customer-facing metrics with measurable outcomes.",
        tags: ["Strategy", "Analytics", "Process"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Workflow Optimization Sprint",
        description: "Mapped team workflows and removed bottlenecks to make execution more consistent and scalable.",
        tags: ["Operations", "Planning", "Process"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Decision-Support Framework",
        description: "Built a repeatable structure to help teams prioritize actions based on impact, urgency, and measurable value.",
        tags: ["Strategy", "Planning", "Leadership"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
];

export const projects: Project[] = projectSections.flatMap((section) => section.projects);