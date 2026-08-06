import "./SocialLinks.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function SocialLinks() {
  return (
    <div className="social-section">

      {/* Social Icons */}

      <div className="social-icons">

        <a
          href="https://github.com/be-sharma"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/chota-kodar/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.instagram.com/_be.__sharma__/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:youremail@gmail.com"
        >
          <MdEmail />
        </a>

      </div>

      {/* Footer */}

      <div className="footer-content">

        <p>
          © 2026 <span>Sujal</span>. All Rights Reserved.
        </p>

        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>

      </div>

    </div>
  );
}

export default SocialLinks;