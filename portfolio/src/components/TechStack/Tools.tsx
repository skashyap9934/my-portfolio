// Imports
import React from "react";

// Components
import Slider from "react-slick";
import { VscCode } from "react-icons/vsc";
import { SiPostman, SiDbeaver } from "react-icons/si";
import { GithubFilled, DockerOutlined } from "@ant-design/icons";
import { Divider } from "antd";

// Stylesheets
import "./Tools.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tools: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <>
      <div className="Tools">
        <Slider {...settings}>
          <div>
            <VscCode />
            <p>VS Code</p>
          </div>
          <div>
            <SiPostman />
            <p>Postman</p>
          </div>
          <div>
            <GithubFilled />
            <p>GitHub</p>
          </div>
          <div>
            <SiDbeaver />
            <p>DBeaver</p>
          </div>
          <div>
            <DockerOutlined />
            <p>Docker</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Tools;
