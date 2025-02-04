// Imports
import React from "react";

// Stylesheets
import "./Skills.css";

// Components
import { Divider } from "antd";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";

const Skills: React.FC = () => {
  return (
    <div id="skills">
      <Divider style={{ marginBottom: 0 }} />
      <div style={{ background: "whitesmoke" }}>
        <h1 className="section-header">Skills</h1>
        <div className="Skills">
          <div>
            <FaReact
              style={{
                fontSize: "3rem",
                color: "olive",
                width: "100%",
              }}
            />
            <p
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Front-End
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div>
            <FaNodeJs
              style={{ fontSize: "3rem", color: "olive", width: "100%" }}
            />
            <p
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Back-End
            </p>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Nest.js</li>
              <li>Fastify</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>RESTful API</li>
              <li>Knex</li>
              <li>Prisma</li>
            </ul>
          </div>
          <div>
            <FaDatabase
              style={{ fontSize: "3rem", color: "olive", width: "100%" }}
            />
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Data Structures
            </p>
            <ul>
              <li>String</li>
              <li>Array</li>
              <li>Objects</li>
              <li>Stack</li>
              <li>Queue</li>
              <li>Linked List</li>
              <li>Recursion</li>
              <li>Tree</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
