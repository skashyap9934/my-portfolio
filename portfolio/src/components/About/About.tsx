// Imports
import React from "react";

// Stylesheets
import "./About.css";

// Assets & Components
import {
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";

const About: React.FC = () => {
  return (
    <div className="About" id="about">
      <h1 className="section-header">About Me</h1>
      <div>
        {/* <img src={MyPhoto} alt="MyPhoto" /> */}
        <p style={{ textAlign: "justify", width: "80%", margin: "auto" }}>
          An <span>experienced</span>, hard-working Full Stack Developer with
          proficiency in{" "}
          <span>
            MongoDB, Express.js, React.js, Node.js, Redux, RESTful APIs,
            Fastify, Knex, Prisma, PostgreSQL, TypeScript and Git
          </span>
          . Having a problem solving mindset, and 1200+ hours of hands on
          experience on developing fully functional Full Stack website. Looking
          forward to working as a developer and competent employee in an
          exciting tech company.
        </p>

        <div className="social">
          <a href="https://www.linkedin.com/in/saurav-kashyap/" target="_blank">
            <LinkedinFilled /> LinkedIn
          </a>
          <a
            href="https://www.facebook.com/saurav.kashyap.3154"
            target="_blank"
          >
            <FacebookFilled /> Facebook
          </a>
          <a href="https://www.instagram.com/kashyap_saurav_/" target="_blank">
            <InstagramFilled /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
