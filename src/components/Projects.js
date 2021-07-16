import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Boredify from "../assets/images/boredify.png";
import budgetTracker from "../assets/images/budget tracker.png";
import employeeDirectory from "../assets/images/employee directory.png";
import wagemtagem from "../assets/images/wagemtagem.png";
import weatherDashboard from "../assets/images/weather dashboard.png";
import "./styles.css";

function Projects(props) {
  return (
    <div id="Projects">
      <Carousel  className="carouselContainer">
        <Carousel.Item>
          <img
            className="d-block w-100 carouselItem"
            src={Boredify}
            alt="boredify img"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>Boredify: An app to escape boredom</h3>
            <a
              className="projectUrl"
              href="https://cbmartinez42.github.io/boredify-project/"
            >
              https://cbmartinez42.github.io/boredify-project/
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wagemtagem}
            alt="wagemtagem img"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>Wag Em Tag Em: A place where like minded canines can link</h3>
            <a
              className="projectUrl"
              href= "https://limitless-caverns-66584.herokuapp.com/"
              >
              https://limitless-caverns-66584.herokuapp.com/
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={weatherDashboard}
            alt="weather dashboard img"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>Weather Dashboard: A dynamic weather app</h3>
            <a
              className="projectUrl"
              href= "https://stacy-martin.github.io/weather-dashboard/">    https://stacy-martin.github.io/weather-dashboard/
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={employeeDirectory}
            alt="Employee Directory img"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>
              Employee Directory: React app for quick access to employee
              databases
            </h3>
            <a
              className="projectUrl"
              href= "https://stacy-martin.github.io/employee_directory"> https://stacy-martin.github.io/employee_directory/
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={budgetTracker}
            alt="budget tracker img"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>
              Budget Tracker: Personal accounting app with offline functioning
            </h3>
            <a
              className="projectUrl"
              href= "https://whispering-scrubland-98765.herokuapp.com/">     https://whispering-scrubland-98765.herokuapp.com/
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
