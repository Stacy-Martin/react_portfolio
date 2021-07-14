import React from "react";
import resume from "./resume"
import mug from "../assets/images/24993_1404599230899_6190704_n.jpg"

function Header (props) {
    return (
        <div>
    <section class="jumbotron" id="BackgroundImg">
      <div class="divider"></div>
      <div class="section">
        <h5 class="navBar">
          <a href="#AboutMe">About Me</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
          <a href={resume} target="_blank" rel="noreferrer">Resume</a>
        </h5>
      </div>
      <div class="divider"></div>
      <div class="section headerText">
          <div class="row">
              <div class="col l4 m4 s12">
        <img src={mug} class="mug_shot1" alt="Stacy Martin" width="200" height="200"/>
        </div>
        <div class="col l8 m8 s12">
        <h5 class="flow-text" id="myName">Stacy Martin</h5>
    </div>
    </div>
        <h6 class="flow-text" id="basics">I am a US and Belize based, full-stack software developer keen to cater to small businesses and non-profits.</h6>
      </div>
    </section>

        </div>
    )
}

export default Header;