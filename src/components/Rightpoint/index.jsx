import React from "react";
import "./index.scss";
import RightpointLogo from "../../assets/rightpoint_logo.jpg";

export const Rightpoint = () => {
  return (
    <section className="Rightpoint">
      <div className="Rightpoint_TextBlock">
        <h2 className="Rightpoint_Summary">
          I really enjoyed my time at Righpoint because I was able to grow a lot as a developer in a short time by working for many different teams and clients.
        </h2>
        <p className="Rightpoint_Paragraph">
          I started as a coop under Tandemseven, a Genpact company. While I was
          at Tandemseven Genpact, acquired Rightpoint and merged us into the
          company. I was offered a full time salaried position in february 2020.
          I worked there until I was laid off in march 2023. While at Rightpoint
          I had the opportunity to work with many different companies in many
          different industries. Airlines, banks, pharmacies, and many others. My
          work was largely based in React.js though I did work on an angular
          project for a few months. I was brought onto projects to serve
          different purposes. When I started as a lower level developer I was
          valuable to companies because I could create components and fix bugs
          with little supervision. As I developed in my career I was brought on
          to do more foundational set up and discovery work. I also acted as
          what I like to call a pinch hitter. There were projects that needed a
          developer to jump in and start delivering and I was happy to help.
          This sometimes meant working late hours and pivoting between tasks
          quickly. I also got to see many different team structures and
          variations of the agile process. I was able to work with clients to
          try to improve their existing processes for the benefit of all
          involved.
        </p>
      </div>
      <img
        className="Rightpoint_Logo"
        src={RightpointLogo}
        alt="Rightpoint logo"
      />
    </section>
  );
};
