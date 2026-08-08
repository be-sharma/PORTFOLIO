import "./Projects.css";
import { useState } from "react";

import projectData from "./Project.js";
import ProjectCard from "./ProjectsCard.jsx";

function Projects() {

  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Web Apps",
    "React",
    "JavaScript",
    "Full Stack",
  ];

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter(
          (item) => item.category === filter
        );

  return (
    <section className="projects-section" id="projects">

      {/* Section Heading */}

      <div className="section-heading">

        <h1>FEATURED PROJECTS</h1>

        <p>
          Some of my recent work built with modern technologies,
          focusing on performance, responsive design and user experience.
        </p>

      </div>

      {/* Filter Buttons */}

      <div className="filter-buttons">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setFilter(category)}
            className={
              filter === category ? "active-filter" : ""
            }
          >
            {category}
          </button>

        ))}

      </div>

      {/* Projects Grid */}

      <div className="projects-grid">

        {filteredProjects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
          />

        ))}

      </div>

      {/* View More */}

      <div className="view-more">

        <button>
          View More Projects
        </button>

      </div>

    </section>
  );
}

export default Projects;
