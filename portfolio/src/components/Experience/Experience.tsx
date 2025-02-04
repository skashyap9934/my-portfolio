// Components
import React from "react";

// Stylesheets
import "./Experience.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Slider from "react-slick";

// Assets
import IBO_Logo from "../../assets/IBO.svg";
import CapgeminiLogo from "../../assets/capgeminiLogo.svg";
import MasaiLogo from "../../assets/Masai_Logo.webp";

// Others
import { companies } from "./common/description";
import { Divider } from "antd";

const Experience: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <>
      <h1 className="section-header">Experience</h1>
      <Slider {...settings} className="Experience">
        <div>
          <img src={IBO_Logo} alt="IBO_Logo" />
          <p>
            <strong>Job Title</strong> - SDE 1
          </p>
          <p>
            <strong>Company Name</strong> - IBO
          </p>
          <p>
            <strong>Location</strong> - Bangalore, India
          </p>
          <p>
            <strong>Period</strong> - DEC 2024 - Present
          </p>
          <p className="description">
            <strong>Descriptions</strong>
          </p>
          <ul>
            {companies["ibo"].map((description) => {
              return <li key={"capgemini"}>{description}</li>;
            })}
          </ul>
        </div>

        <div>
          <img
            src={CapgeminiLogo}
            alt="CapgeminiLogo"
            style={{ width: "151px" }}
          />
          <p>
            <strong>Job Title</strong> - Analyst, Software Engineer
          </p>
          <p>
            <strong>Company Name</strong> - Capgemini
          </p>
          <p>
            <strong>Location</strong> - Bangalore, India
          </p>
          <p>
            <strong>Period</strong> - APR 2023 - DEC 2024
          </p>
          <p className="description">
            <strong>Description</strong>
          </p>
          <ul>
            {companies["capgemini"].map((description) => {
              return <li key={"capgemini"}>{description}</li>;
            })}
          </ul>
        </div>

        <div>
          <img src={MasaiLogo} alt="Masai_Logo" />
          <p>
            <strong>Title</strong> - Full Stack Developer, Student
          </p>
          <p>
            <strong>Organization</strong> - Masai
          </p>
          <p>
            <strong>Location</strong> - Bangalore, India
          </p>
          <p>
            <strong>Period</strong> - JUL 2023 - AUG 2024
          </p>
          <p className="description">
            <strong>Description</strong>
          </p>
          <ul>
            {companies["masai"].map((description) => {
              return <li key={"capgemini"}>{description}</li>;
            })}
          </ul>
        </div>
      </Slider>
      <Divider style={{ marginBlock: "2.5rem 0" }} />
    </>
  );
};

export default Experience;
