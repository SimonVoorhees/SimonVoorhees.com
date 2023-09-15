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
          Working as a consultant for Rightpoint meant I was able to grow a lot
          as a developer in a short amount of time. Working with different
          teams, clients, technologies, and requirements meant that I was always
          learning and improving.
        </h2>
        {hideParagraph ? (
          ""
        ) : (
          <p className="Rightpoint_Paragraph">
            <p>
              One of the benefits of consulting is being able to see different
              team structures and variations of the agile process in addition to
              the different front end technologies each project used. While at
              Rightpoint I worked with clients in industries such as: Airlines,
              banking, pharmaceutical, and more. Each project I worked on had a
              different timeline, scope of work, and used different frontend
              technologies.
            </p>
            <p>
              React was the main framework I used on projects, but I did some
              work with angular both on and off official projects. I had to
              become familiar with a number of different versions of React
              because of client needs. I used react classes and Redux for one
              project because it was on an older version, but when I moved to
              the next project we were just starting development so we used the
              latest version of react which meant functional components and
              React hooks. Outside of the frameworks I was always using HTML and
              CSS. I learned to pay close attention to accessibility issues
              through the requirements on some of the projects I was on. It was
              a requirement that we meet WCAG standards and that was a
              responsibility shared by the whole team. That meant using semantic
              HTML, using the proper aria tags, testing with a screen reader,
              and checking color contrasts.
            </p>
            <p>
              When I started as a lower level developer I was valuable to
              companies because I could create components and fix bugs with
              little supervision. As I developed in my career I was brought on
              to do more foundational set up and discovery work. I also acted as
              a pinch hitter for the company. There were projects that needed a
              developer to jump in and start delivering and I jumped at the
              chance. This sometimes meant working late hours and pivoting
              between tasks quickly.
            </p>
            <p>
              I worked at Rightpoint until I was laid off in march 2023. I
              really enjoyed my time at the company and I'm very grateful for
              the chance I was given to learn from so many great developers,
              designers, and project managers.
            </p>
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
