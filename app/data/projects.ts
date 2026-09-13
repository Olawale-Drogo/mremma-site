export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Sales Dashboard Analysis",
    description: "Built an interactive dashboard analyzing quarterly sales trends and regional performance.",
    tags: ["Python", "Pandas", "Tableau"],
  },
  {
    title: "Customer Churn Prediction",
    description: "Trained a model to flag at-risk customers using historical usage data.",
    tags: ["Python", "Scikit-learn", "SQL"],
  },
];