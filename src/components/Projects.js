import React, { Fragment } from "react";
import ProjectHead from "./ProjectHead";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <Fragment>
      <ProjectHead />
      <Project />
    </Fragment>
  );
};

export default Projects;

<section id="projects">
  <div className="container">
    <div className="projects"></div>
  </div>
</section>;
