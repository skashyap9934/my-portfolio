// Imports
import React from "react";

// Stylesheets
import "./TechStack.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import MarqueeSlider from "react-marquee-slider";
import {
  SiCss3,
  SiExpress,
  SiFastify,
  SiHtml5,
  SiJavascript,
  SiKnexdotjs,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const TechStack: React.FC = () => {
  const settings = {
    velocity: 30,
    minScale: 0.7,
    resetAfterTries: 200,
    scatterRandomly: false,
    onInit: () => console.log("Marquee Slider initialized"),
    onFinish: () => console.log("Marquee Slider finished"),
  };

  return (
    <>
      <h1 className="section-header" style={{ textDecoration: "none" }}>
        Tech Stack & TOOLS
      </h1>
      <div className="TechStack" style={{ marginBottom: "2rem" }}>
        <MarqueeSlider direction="rtl" {...settings}>
          <div>
            <SiHtml5 />
            <p>HTML</p>
          </div>
          <div>
            <SiCss3 />
            <p>CSS</p>
          </div>
          <div>
            <SiJavascript />
            <p>JavaScript</p>
          </div>
          <div>
            <SiTypescript />
            <p>TypeScript</p>
          </div>
          <div>
            <SiRedux />
            <p>Redux</p>
          </div>
          <div>
            <SiNextdotjs />
            <p>Next.js</p>
          </div>
          <div>
            <SiMongodb />
            <p>MongoDB</p>
          </div>
          <div>
            <SiPostgresql />
            <p>PostgreSQL</p>
          </div>
          <div>
            <SiExpress />
            <p>Express.js</p>
          </div>
          <div>
            <SiReact />
            <p>React.js</p>
          </div>
          <div>
            <SiNodedotjs />
            <p>Node.js</p>
          </div>
          <div>
            <SiNestjs />
            <p>Nest.js</p>
          </div>
          <div>
            <SiPrisma />
            <p>Prisma</p>
          </div>
          <div>
            <SiFastify />
            <p>Fastify</p>
          </div>
          <div>
            <SiKnexdotjs />
            <p>Knex</p>
          </div>
        </MarqueeSlider>
      </div>
    </>
  );
};

export default TechStack;
