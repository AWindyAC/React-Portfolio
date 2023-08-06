import React, { useState } from 'react';
import Project from "./Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Password-Gen',
      description: 'Password Generator',
      link: "https://awindyac.github.io/Password-Gen/",
      repo: "https://github.com/AWindyAC/Password-Gen"
    },
    {
      name: 'Note Taker App',
      description: 'Web Based app',
      link: "https://github.com/AWindyAC",
      repo: "https://github.com/AWindyAC/Note-Taker-App"
    },
    {
      name: 'Employee CMS',
      description: 'HTML/CSS',
      link: "https://github.com/AWindyAC/Employee-CMS",
      repo: "https://github.com/AWindyAC/Employee-CMS"
    },
    {
      name: 'Javascript Quiz',
      description: 'Node/IoT',
      link: "https://github.com/AWindyAC/Javascript-Quiz",
      repo: "https://awindyac.github.io/Javascript-Quiz/"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
