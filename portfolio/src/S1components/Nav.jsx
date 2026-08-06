import "./Nav.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        SUJAL<span>.</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home" className="active">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <button className="hire-btn"
  onClick={() =>
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  Hire Me
  <span className="arrow">↗</span>
</button>

    </nav>
  );
}

export default Navbar;