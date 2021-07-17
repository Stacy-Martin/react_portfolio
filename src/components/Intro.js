import React from "react";

function Intro(props) {
  return (
    <div>
      <div className="row" id="AboutMe">
        <h3>About Me</h3>
        <div className="col s12">
          <p className="flow-text" id="about-me-text">
            For me work is not simply a job, it must be gratifying. That means I
            always seek out opportunities that are meaningful and challenging.
          </p>
          <p className="flow-text" id="about-me-text">
            I came from a diverse background before pursuing software
            development, from a degree in marine biology to small business
            owner.
          </p>
          <p className="flow-text" id="about-me-text">
            With an entrepreneurial mindset I can provide comprehensive support
            to streamline the web presence of small business from both the front
            and back end. As a developer I use my project management skills and
            innovative craftiness to deliver comprehensive, stylish products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
