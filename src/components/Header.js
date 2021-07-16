import React from "react";
// import resume from "./resume"
import Iframe from "./Iframe";
import mug from "../assets/images/24993_1404599230899_6190704_n.jpg"
import resume from "../assets/uploads/SbrownResume2021.pdf";
import {HashLink as Link} from "react-router-hash-link";
function Header (props) {
    return (
        <div>
    <section className="jumbotron" id="BackgroundImg">
      <div className="divider"></div>
      <div className="section">
        <h5 className="navBar">
          <Link to="/main#AboutMe">About Me</Link>
          <Link to="/main#Projects">Projects</Link>
          <Link to="/main#Contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </h5>
      </div>
      <div className="divider"></div>
      <div className="section headerText">
          <div className="row">
              <div className="col l4 m4 s12">
        <img src={mug} className="mug_shot1" alt="Stacy Martin" width="200" height="200"/>
        </div>
        <div className="col l8 m8 s12">
        <h5 className="flow-text" id="myName">Stacy Martin</h5>
    </div>
    </div>
        <h6 className="flow-text" id="basics">I am a US and Belize based, full-stack software developer eager to help small businesses and non-profits digitize their platform.</h6>
      </div>
    </section>

        </div>
    )
}

export default Header;