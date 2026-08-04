
import "./Left.css";

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaRocket,
  FaHeart,
} from "react-icons/fa";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiFigma,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

function Left() {
  return (
    <section className="about-section" id="about">


      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-left">

          <p className="small-title">
            ● ABOUT ME
          </p>

          <h2>
            I'm <span>Sujal</span>,
            <br />
            a passionate
            <br />
            Web Developer.
          </h2>

          <div className="red-line"></div>

          <p className="about-text">
            I love building modern, responsive and user-friendly
            websites that not only look great but also provide
            seamless user experiences. I enjoy turning ideas into
            real-world products using clean code and modern
            technologies.
          </p>

          {/* INFO BOX */}

          <div className="info-box">

            <div className="info-card">

              <FaMapMarkerAlt />

              <div>

                <small>LOCATION</small>

                <h4>India</h4>

              </div>

            </div>

            <div className="info-card">

              <FaBriefcase />

              <div>

                <small>EXPERIENCE</small>

                <h4>Fresher</h4>

              </div>

            </div>

            <div className="info-card">

              <FaRocket />

              <div>

                <small>PROJECTS</small>

                <h4>20+ Completed</h4>

              </div>

            </div>

            <div className="info-card">

              <FaHeart />

              <div>

                <small>PASSION</small>

                <h4>Building & Learning</h4>

              </div>

            </div>

          </div>

          <h3 className="signature">
            Sujal
          </h3>

        </div>

        {/* RIGHT SIDE */}

        <div className="about-right">

          <p className="small-title">
            ● MY SKILLS
          </p>

          {/* Skills */}

          <div className="skill-card">

            <FaHtml5 className="skill-icon html"/>

            <span>HTML</span>

            <div className="progress">

              <div className="fill html-fill"></div>

            </div>

            <p>95%</p>

          </div>

          <div className="skill-card">

            <FaCss3Alt className="skill-icon css"/>

            <span>CSS</span>

            <div className="progress">

              <div className="fill css-fill"></div>

            </div>

            <p>90%</p>

          </div>

          <div className="skill-card">

            <FaJsSquare className="skill-icon js"/>

            <span>JavaScript</span>

            <div className="progress">

              <div className="fill js-fill"></div>

            </div>

            <p>85%</p>

          </div>

          <div className="skill-card">

            <FaReact className="skill-icon react"/>

            <span>React</span>

            <div className="progress">

              <div className="fill react-fill"></div>

            </div>

            <p>80%</p>

          </div>

          <div className="skill-card">

            <FaNodeJs className="skill-icon node"/>

            <span>Node.js</span>

            <div className="progress">

              <div className="fill node-fill"></div>

            </div>

            <p>70%</p>

          </div>

          <div className="skill-card">

            <FaGitAlt className="skill-icon git"/>

            <span>Git & GitHub</span>

            <div className="progress">

              <div className="fill git-fill"></div>

            </div>

            <p>80%</p>

          </div>

          {/* TECH STACK */}

          <div className="tech-stack">

            <h3>TECH STACK</h3>

            <div className="tech-icons">

              <div className="tech-item">
                <FaCode />
                <span>VS Code</span>
              </div>

              <div className="tech-item">
                <SiFigma />
                <span>Figma</span>
              </div>

              <div className="tech-item">
                <SiTailwindcss />
                <span>Tailwind</span>
              </div>

              <div className="tech-item">
                <SiBootstrap />
                <span>Bootstrap</span>
              </div>

              <div className="tech-item">
                <SiFirebase />
                <span>Firebase</span>
              </div>

              <div className="tech-item">
                <SiMongodb />
                <span>MongoDB</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Left;