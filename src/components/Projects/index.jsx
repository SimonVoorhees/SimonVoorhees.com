import React from "react";
import "./index.scss";

export const Projects = () => {
  return (
    <section className="Projects">
      <div className="Projects_TextBlock">
        <h2 className="Projects_Title">Projects</h2>
        <p className="Projects_Paragraph">These are some of the projects I've made over the years. Most of my work at Rightpoint is not public knowledge, so my portfolio is currently the projects that are public knowledge and personal projects I've made over the years</p>
        <ul className="Projects_Links">
        <li><a className="Projects_Link" target="_blank"href="https://www.rightpoint.com/work/genpact-oasis">Genpact Oasis</a></li>
        <li><a className="Projects_Link" target="_blank"href="https://simonvoorhees.github.io/SpaceX-Launches-App/">SpaceX Launches</a></li>
        <li><a className="Projects_Link" target="_blank"href="https://simonvoorhees.github.io/ReactDashBoard/">React Dashboard</a></li>
        </ul>
      </div>
    </section>
  );
};
