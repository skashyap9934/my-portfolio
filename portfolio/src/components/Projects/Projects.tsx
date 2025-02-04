// Projects
import React from "react";

// Stylesheets
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import Walmart from "../../assets/walmart.png";
import YouTube from "../../assets/youtube.png";

// Components
import MarqueeSlider from "react-marquee-slider";
import { Button } from "antd";

const Projects: React.FC = () => {
  const [stop, setStop] = React.useState(false);

  const settings = {
    velocity: stop ? 0 : 60,
    minScale: 0.7,
    direction: "rtl",
    resetAfterTries: 200,
  };

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        marginTop: "2.5rem",
        paddingBottom: "1rem",
      }}
      id="projects"
    >
      <h1 className="section-header">Projects</h1>
      <div className="Projects">
        <MarqueeSlider {...settings}>
          <div
            className="Project"
            onMouseLeave={() => setStop(false)}
            onMouseEnter={() => setStop(true)}
          >
            <img src={Walmart} alt="Walmart_Image" />
            <p>
              <strong>Walmart Clone</strong>
            </p>
            <p>
              Walmart is an e-commerce application where the user can buy
              products of various categories.
            </p>
            <br />
            <p>
              <strong>TechStack</strong>: HTML5 | CSS3 | JavaScript | React |
              Redux | ChakraUI | Node | Express | MongoDB
            </p>
            <div className="Buttons">
              <Button type="primary">
                <a
                  href={"https://github.com/skashyap9934/walmart"}
                  target="_blank"
                >
                  Git Repo
                </a>
              </Button>
              <Button type="primary">
                <a href={`https://walmart-kashyap.netlify.app`} target="_blank">
                  Deployed App
                </a>
              </Button>
            </div>
          </div>

          <div
            className="Project"
            onMouseLeave={() => setStop(false)}
            onMouseEnter={() => setStop(true)}
          >
            <img src={YouTube} alt="YouTube_Image" />
            <p>
              <strong>YouTube Clone</strong>
            </p>
            <p>
              YouTube is a social media application where the user can watch
              videos of various categories.
            </p>
            <br />
            <p>
              <strong>TechStack</strong>: HTML5 | CSS3 | JavaScript | React |
              Redux | ChakraUI | Node | Express | MongoDB
            </p>
            <div className="Buttons">
              <Button type="primary">
                <a
                  href={"https://github.com/skashyap9934/youtube"}
                  target="_blank"
                >
                  Git Repo
                </a>
              </Button>
              <Button type="primary">
                <a
                  href={`https://youtube-kashyap.netlify.app/`}
                  target="_blank"
                >
                  Deployed App
                </a>
              </Button>
            </div>
          </div>
        </MarqueeSlider>
      </div>
    </div>
  );
};

export default Projects;
