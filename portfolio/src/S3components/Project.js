import project1 from "../assets/aa.png";
import project2 from "../assets/p.jfif";
import project3 from "../assets/react.svg";
import project4 from "../assets/aa.png";

const projectData = [
  {
    id: 1,
    number: "01",
    title: "Portfolio Website",
    category: "Web Apps",
    image: project1,
    description:
      "A modern, responsive portfolio website showcasing my skills, projects and experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    number: "02",
    title: "E-Commerce Website",
    category: "Full Stack",
    image: project2,
    description:
      "Full stack e-commerce platform with authentication, cart and secure checkout.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 3,
    number: "03",
    title: "Weather App",
    category: "JavaScript",
    image: project3,
    description:
      "Weather application using OpenWeather API with real-time forecast.",
    tech: ["JavaScript", "API", "CSS"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    id: 4,
    number: "04",
    title: "Task Manager",
    category: "React",
    image: project4,
    description:
      "Task management application with local storage and beautiful UI.",
    tech: ["React", "CSS", "JavaScript"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/task-manager",
  },
];

export default projectData;