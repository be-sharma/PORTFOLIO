import "./Hero.css";
import profile from "../assets/aa.png";
import { FaGithub } from "react-icons/fa";
function Hero() {
  return (
   <>
       <section className="hero" id="home">
        <div className="bg-circle circle1"></div>
<div className="bg-circle circle2"></div>
<div className="bg-circle circle3"></div>

<div className="grid-bg"></div>
{/* 
      Left Side Scroll
      <div className="scroll-box">
        <span className="number">01</span>

        <div className="line"></div>

        <p>SCROLL DOWN</p>

        <span className="down">↓</span>
      </div> */}

      {/* Left Content */}

      <div className="hero-content">

        <h3>Hello, I'm</h3>

        <h1>SUJAL</h1>

        <h2>
          <span>FULL STACK</span> WEB DEVELOPER
        </h2>

        <p>
          I build modern, fast and responsive websites
          with clean code and great user experience.
        </p>

        <div className="buttons">

          <button className="hire">
            Hire Me →
          </button>

          <button className="cv">
            Download CV ↓
          </button>

        </div>

        <div className="social">

          <a href="https://github.com/be-sharma"><i className="ri-github-fill"></i></a>

          <a href="https://www.linkedin.com/in/chota-kodar/"><i className="ri-linkedin-fill"></i></a>

          <a href="https://www.instagram.com/_be.__sharma__/"><i className="ri-instagram-line"></i></a>

          <a href="https://mail.google.com/"><i className="ri-mail-line"></i></a>

        </div>

      </div>

      {/* Right Image */}

      <div className="hero-image">

        <div className="glow"></div>

        <img src={profile} alt="profile" />

        <div className="code-icon">
          {"</>"}
        </div>

      </div>
<div className="floating-ring ring1"></div>
<div className="floating-ring ring2"></div>
    </section>
   </>
  );
}

export default Hero;
