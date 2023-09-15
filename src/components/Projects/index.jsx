import React from "react";
import "./index.scss";

export const Projects = () => {
  return (
    <section className="Projects">
      <div className="Projects_TextBlock">
        <h2 className="Projects_Title">Projects</h2>
        <h2 className="Projects_Paragraph">
          These are some of the projects I've made over the years. Most of my
          work at Rightpoint is not public knowledge, so my portfolio is
          currently the projects that are public knowledge and personal projects
          I've made over the years
        </h2>
        <ul className="Projects_Links">
          <li>
            <a
              className="Projects_Link"
              target="_blank"
              href="https://www.rightpoint.com/work/genpact-oasis"
            >
              Genpact Oasis
            </a>
            <p>A project I worked on at Rightpoint. I worked directly with a small team to quickly prototype the virtual environment then scale it up to the full customizable experience.</p>
          </li>
          <li>
            <a
              className="Projects_Link"
              target="_blank"
              href="https://simonvoorhees.github.io/SpaceX-Launches-App/"
            >
              SpaceX Launches
            </a>
            <p>This is a simple project that showcases some of my more technical skills. I make calls to the SpaceX API and display data from that. I also included a search function and some basic unit tests.</p>
          </li>
          <li>
            <a
              className="Projects_Link"
              target="_blank"
              href="https://simonvoorhees.github.io/ReactDashBoard/"
            >
              React Dashboard
            </a>
            <p>This project is purely about visuals. The goal was to take a wireframe dashboard and display it with dummy data and images. There isn't much functionality other than the to do list.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
