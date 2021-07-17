import React from "react";
import gmailLogo from "../assets/images/google-gmail-128.webp";
import githubLogo from "../assets/images/github-icon-white-6.jpeg";
import linkedinLogo from "../assets/images/Social-media_LinkedIn-128.webp";
import whatsappLogo from "../assets/images/whatsapp.webp";
import facebookLogo from "../assets/images/facebook.webp";

function Footer(props) {
  return (
    <div className="footer">
      <section className="row " id="Contact">

        <div className="col s2">
          <a
            href="mailto:sbrown1031@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={gmailLogo}
              alt="Gmail Logo"
              style={{
                width: "42px",
                height: "42px",
                border: "none",
                margin: "4px",
              }}
            />
          </a>
        </div>
        <div className="col s2">
          <a
            href="https://github.com/Stacy-Martin"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubLogo}
              alt="GitHub Logo"
              style={{
                width: "42px",
                height: "42px",
                border: "none",
                margin: "4px",
              }}
            />
          </a>
        </div>

        <div className="col s2">
          <a
            href="https://www.linkedin.com/in/stacy-brown-martin-81b198204/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn Logo"
              style={{
                width: "42px",
                height: "42px",
                border: "none",
                margin: "4px",
              }}
            />
          </a>
        </div>

        <div className="col s2">
          <a
            href="https://api.whatsapp.com/send?phone=5016221484"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={whatsappLogo}
              alt="WhatsApp logo"
              style={{
                width: "42px",
                height: "42px",
                border: "none",
                margin: "4px",
              }}
            />
          </a>
        </div>

        <div className="col s2">
          <a
            href="https://www.facebook.com/kaimanimarinetours"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebookLogo}
              alt="Facebook Logo"
              style={{
                width: "42px",
                height: "42px",
                border: "none",
                margin: "4px",
              }}
            />
          </a>{" "}
        </div>

      </section>{" "}
      <div
        style={{
          padding: "10px",
          fontFamily: "reklame-script, sans-serif",
          fontStyle: "normal",
          fontWeight: "200",
          color: "#5e2c04",
          letterSpacing: "2pt",
          textAlign: "center",
        }}
      >
        <h5>sbrown1031@gmail.com +501.622.1484</h5>
        <h6>❤️️ 2021 Kaimani ❤️️</h6>
      </div>
    </div>
  );
}

export default Footer;
