import React from "react";
import resumeDoc from "../assets/Uploads/SbrownResume2021"

function Resume (props) {
    return (
        <div>

<html>
  <head>
    <title>SDBM Resume</title>
  </head>
  <body>
    <iframe src={resumeDoc} width="100%" height="100%">
    </iframe>

    <a href="./assets/pdf/Chris_Martinez_Resume.pdf" target="_blank" rel="noreferrer"><img src={resume} alt="Resume" class="resume" /></a>

    
  </body>
</html>
</div>
    )
}

export default Resume;