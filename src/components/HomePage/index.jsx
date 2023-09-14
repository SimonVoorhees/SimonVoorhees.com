import React from "react";
import "./index.scss";

export const HomePage = () => {
  return (
    <section className="HomePage">
      <div className="HomePage_TextBlock">
        <h1>Hi! I'm Simon Voorhees</h1> 
        <h2>I'm a front-end web developer based in Boston MA.</h2>
        <ul className="HomePage_Links">
          <li><a className="HomePage_Link" target="_blank" href="https://www.linkedin.com/in/simon-voorhees-439401a2/">LinkedIn</a></li>
          <li><a className="HomePage_Link" target="_blank" href="https://github.com/SimonVoorhees">Github</a></li>
          <li><a className="HomePage_Link" target="_blank" href="../../../public/Simon Voorhees.pdf">Resume</a></li>
        </ul>
      </div>
    </section>
  );
};
