import React from "react";
import "./index.scss";
import RITLogo from "../../assets/RIT_rgb_vert_k.jpg";

export const RIT = () => {
  return (
    <section className="RIT Page">
      <img
        className="RIT_Logo"
        src={RITLogo}
        alt="Rochester Institute of Technology logo"
      />
      <div className="RIT_TextBlock">
        <p className="RIT_Paragraph">
          <h2 className="RIT_Summary">
            I attended RIT from 2014-2018 before taking some time off to get a
            coop. I finished my degree in Game Design and Development and
            graduated in 2020
          </h2>
          I attended RIT as a Game Design and Development(GDD) major. There's a
          lot of overlap between GDD courses and another major, New Media. New
          Media is a web development major, so part of my course requirements
          were some New Media classes. I wasn't a big fan of this at first, but
          thanks to some inspring and fun teachers I grew to love web development and these classes. At the
          same time I started to like web dev I fell out of love with game dev.
          Games are fun and exciting, but they also require a lot of moving
          parts. Organizing with other students to get art done and having
          disagreements over design concepts left me disillusioned with the
          process. I learned that I was too close to games to be able to work
          well with a team. I had strong opinions about each project I worked on
          and felt like I wouldn't be happy with the final product. This was a
          self fulfilling prophecy. Web dev on the other hand was a joy to work
          on. It felt great arranging everything just so, and I was really
          interested in learning about a11y. It was easy for me to stay up to
          date on things like semantic html because I liked learning about them.
          I decided that Game development would be a hobby and web dev would be
          a career
        </p>
      </div>
    </section>
  );
};
