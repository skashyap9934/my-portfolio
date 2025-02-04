// Imports
import React from "react";

// Stylesheets
import "./Contact.css";

// Components
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoGmail, BiPhone } from "react-icons/bi";
import { GithubFilled } from "@ant-design/icons";
import MarqueeSlider from "react-marquee-slider";
import { PiHandshake } from "react-icons/pi";

const Contact: React.FC = () => {
  const settings = {
    velocity: 60,
    minScale: 0.7,
    resetAfterTries: 200,
    scatterRandomly: false,
    onInit: () => console.log("Marquee Slider initialized"),
    onFinish: () => console.log("Marquee Slider finished"),
  };

  return (
    <div
      style={{
        background: "whitesmoke",
        marginTop: "11px",
        paddingBottom: "1.5rem",
      }}
      id="contacts"
    >
      <h1 className="section-header">Contact Me</h1>
      <ul className="Contact">
        <li style={{ color: "#1677ff" }}>
          <FaMapMarkerAlt /> Kormangala, Bangalore, Karnataka, 560077
        </li>
        <li>
          <a href="mailto:kashyapsaurav531@gmail.com">
            <BiLogoGmail /> Mail Me
          </a>
        </li>
        <li>
          <a href="tel:+919135655507">
            <BiPhone /> Call Me
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/saurav-kashyap" target="_blank">
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/skashyap9934/skashyap9934"
            target="_blank"
          >
            <GithubFilled /> GitHub
          </a>
        </li>
      </ul>

      <MarqueeSlider direction="rtl" {...settings}>
        <p className="thank">
          <PiHandshake size={21} />{" "}
          <span>Feel Free to contact me. Have a good day. Thank you !</span>{" "}
          <PiHandshake size={21} />
        </p>
        <></>
      </MarqueeSlider>
    </div>
  );
};

export default Contact;
