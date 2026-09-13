export type Service = {
  name: string;
  description: string;
  price?: string; // optional — the "?" means this field can be left out
};

export const services: Service[] = [
  {
    name: "Data Strategy Consultation",
    description: "A session to identify what metrics actually matter for your business and how to track them.",
    price: "Starting at $150",
  },
  {
    name: "Dashboard Build",
    description: "Custom dashboard built in your tool of choice (Tableau, Power BI, or a web app) from your raw data.",
  },
];