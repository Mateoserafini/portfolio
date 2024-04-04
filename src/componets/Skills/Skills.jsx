import React from "react";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JavaScript from "../../assets/js.svg";
import ReactIcon from "../../assets/react.svg";
import Node from "../../assets/node.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Git from "../../assets/git.svg";
import { skills } from "../../data/cv.json";

const SKILLS_ICONS = {
    HTML: HTML,
    CSS: CSS,
    JavaScript: JavaScript,
    React: ReactIcon,
    Node: Node,
    Bootstrap: Bootstrap,
    Git: Git
};

export const Skills = () => {
  return (
    <section id="skills">
        <h2>Skills</h2>
    <ul>    
        {skills.map(({ name }) => {
          const iconName = name === "Next.js" ? "Next" : name;
          const Icon = SKILLS_ICONS[iconName];

          return (
            <li key={name}>
              {Icon && <img src={Icon} alt={name} />} <span>{name}</span>
            </li>
          );
        })}
    </ul>
    </section>
      

  );
};