export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export const projects: Project[] = [
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
    title: "Operations Intelligence Platform",
    description: "Designed a decision-making workspace that brings performance metrics, trends, and recommendations together.",
    tags: ["SQL", "Power BI", "Data Strategy"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
  },
];