import React from "react";
import "./projects.css";
import Card from "../cards/card";

const projects = [
  {
    name: "Digital Invoicing",
    description:
      "Developed a platform that allows merchants and customers to upload and view invoices, while providing client with real-time access to tax collection data and sales metrics. The system enhances financial transparency and enables better monitoring of commercial activity across sectors. It supports secure data handling, efficient invoice management, and automated reporting for regulatory compliance.",
    repo: "",
  },
  {
    name: "Payment Processing System",
    description:
      "This project focuses on the development of a smooth and efficient cross-border payment processing system. It involves the integration of multiple banks across different countries, ensuring secure, real-time transactions that comply with international financial regulations. The system is designed to support various currencies and payment channels while maintaining transparency, auditability, and end-to-end encryption throughout the transaction lifecycle.",
    repo: "",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website designed to showcase projects, skills, and professional experience. It features a clean, responsive design with smooth navigation, project galleries, and contact forms. The site highlights both frontend and backend expertise while providing an engaging user experience across devices.",
    repo: "https://github.com/Itsmefadii/fahad_portfolio.git",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="main-proj-div">
      <h1 className="proj-main-heading">Projects</h1>

      <div className="proj-cards-div">
        <Card
          projName={projects[0].name}
          projDesc={projects[0].description}
          projRepo={projects[0].repo}
          anchorText="Repo"
        />
        <Card
          projName={projects[1].name}
          projDesc={projects[1].description}
          projRepo={projects[1].repo}
          anchorText="Repo"
        />
        <Card
          projName={projects[2].name}
          projDesc={projects[2].description}
          projRepo={projects[2].repo}
          anchorText="Repo"
        />
      </div>
    </div>
  );
}
