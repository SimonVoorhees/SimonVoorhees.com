import React, { useState } from "react";
import "./index.scss";
import RightpointLogo from "../../assets/rightpoint_logo.jpg";

export const Rightpoint = () => {
  const [hideParagraph, setHideParagraph] = useState(true);
  const readMoreOnClick = () => {
    setHideParagraph(!hideParagraph);
  };
  return (
    <section className="Rightpoint">
      <div className="Rightpoint_TextBlock">
        <h2 className="Rightpoint_Title">Rightpoint</h2>
        <h2 className="Rightpoint_Summary">
          I really enjoyed my time as a consultant at Righpoint because I was
          able to grow a lot as a developer in a short time by working with many
          different teams and for many different clients.
        </h2>
        {hideParagraph ? (
          ""
        ) : (
          <p className="Rightpoint_Paragraph">
            While at Rightpoint I worked with clients in industries such as:
            Airlines, banking, pharmaceutical, and more. My work was largely
            based in React with some time spent on angular.
            <br /> As a Frontend developer I was brought onto projects to serve
            different purposes. When I started as a lower level developer I was
            valuable to companies because I could create components and fix bugs
            with little supervision. As I developed in my career I was brought
            on to do more foundational set up and discovery work. I also acted
            as a pinch hitter for the company. There were projects that needed a
            developer to jump in and start delivering and I jumped at the
            chance. This sometimes meant working late hours and pivoting between
            tasks quickly. <br />
            One of the benefits of consulting is being able to see different
            team structures and variations of the agile process in addition to
            the different front end technologies each project used.
            <br /> I worked at Rightpoint until I was laid off in march 2023. I
            really enjoyed my time at the company and I'm very grateful for the
            chance I was given to learn from so many great developers,
            designers, and project managers.
          </p>
        )}
        <button className="Rightpoint_ReadMore" onClick={readMoreOnClick}>
          {hideParagraph ? "Read more" : "Hide"}
        </button>
      </div>
      <img
        className="Rightpoint_Logo"
        src={RightpointLogo}
        alt="Rightpoint logo"
      />
    </section>
  );
};
