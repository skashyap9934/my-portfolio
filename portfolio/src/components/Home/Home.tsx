// Imports
import React from "react";

// Stylesheets
import "./Home.css";

// Assets
import MyPhoto from "../../assets/Saurav_Kashyap_Passpost_Size Photo.png";
import { Button } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="Home" id="home">
      <div>
        <h1>
          Hello, I'm <span id="name">Saurav Kashyap</span>
        </h1>
        <p style={{ textAlign: "justify" }}>
          I'm an <span>experienced</span> Full Stack Developer with over{" "}
          <span>2 years of experience</span>. I worked in <span>Capgemini</span>
          , Bangalore and currently working at IBO, Bangalore as an{" "}
          <span>SDE 1</span>.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <FaMapMarkerAlt />
          Kormangala, Bangalore, Karnataka, 560077
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button type="primary" size="middle">
            Contact
          </Button>
          <Button type="primary" size="middle">
            Download Resume
          </Button>
        </div>
      </div>

      <div>
        <div className="image-container">
          <img src={MyPhoto} alt="MyPic" />
        </div>
      </div>
    </div>
  );
};

export default Home;
