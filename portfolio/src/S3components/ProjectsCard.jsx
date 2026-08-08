import "./ProjectsCard.css";

import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      {/* Project Image */}

      <div className="project-image">

        <img src={project.image} alt={project.title} />

        <div className="project-overlay">

          <a
            href="https://portfolio-puce-chi-knl92vek3q.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
          >
            <FaArrowUpRightFromSquare />
          </a>

          <a
            href="https://github.com/be-sharma/PORTFOLIO"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
          >
            <FaGithub />
          </a>

        </div>

      </div>

      {/* Project Content */}

      <div className="project-content">

        <span className="project-number">
          {project.number}
        </span>

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        {/* Technologies */}

        <div className="tech-list">

          {project.tech.map((item, index) => (
            <span key={index}>
              {item}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;
