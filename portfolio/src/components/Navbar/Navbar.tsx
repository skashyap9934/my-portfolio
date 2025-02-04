// Imports
import React from "react";
import { Link } from "react-scroll";

// Stylesheets
import "./Navbar.css";

// Assets
import MyPic from "../../assets/MyPic.jpg";
import Resume from "../../assets/Resume.pdf";

const Navbar: React.FC = () => {
  return (
    <nav className="Navbar">
      <div>
        <img src={MyPic} alt="Saurav_Kashyap_Image" className="profile-image" />
        <h1>Saurav Kashyap</h1>
      </div>

      <div>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          activeClass="active"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={100}
          activeClass="active"
        >
          About
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-30}
          duration={100}
          activeClass="active"
        >
          Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          activeClass="active"
        >
          Projects
        </Link>
        <Link
          to="contacts"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          activeClass="active"
        >
          Contacts
        </Link>
        <a href={Resume} download>
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
