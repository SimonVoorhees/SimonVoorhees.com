import React from "react";
import "./index.scss";

export const Bio = () => {
  return (
    <section className="Bio">
      <div className="Bio_TextBlock">
        <p className="Bio_Paragraph">
          My name is Simon Voorhees and I'm a front-end web developer based in
          Boston MA. I designed and developed this website from scratch using
          React, Vite, Sass, and a few other front end technologies as a way of
          showcasing my skills.
          </p>
          <p className="Bio_Paragraph"> 
          I grew up in Maryland just outside of DC. I attended Sidwell Friends
          School where my Mom worked for many years. After I graduated from
          Sidwell I attended Rochester Institute of Technology where I received
          a bachelors degree in Game Design and Development. I worked for
          Sidwell at first doing help desk work for the IT department. After
          that, I was an assistant wrestling coach, and I helped build some sets
          for the drama department.
          </p>
          <p className="Bio_Paragraph"> 
          While I worked for Sidwell in 2018-19 I was also a remote intern for
          Massachusetts General Hospital for Children. I helped the department
          update some pages, fix bugs, and work on SEO. This position led me to
          my coop at TandemSeven. My coop at TandemSeven turned into a full time
          job in February 2020. A short time later TandemSeven was absorbed into
          Rightpoint.
          </p>
          <p className="Bio_Paragraph"> 
          I was laid off from Rightpoint in March 2023 and am currently
          looking for a Front End Development position.
        </p>
      </div>
    </section>
  );
};
