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
    <main id="Projects">
      <Carousel className="h-100">
        <Carousel.Item>
          <img className="carouselImage" src={Boredify} alt="boredify img" />
          <Carousel.Caption className="carouselCaption">
            <a
              className="projectUrl"
              href="https://cbmartinez42.github.io/boredify-project/"
            >
              Boredify: An app to escape boredom
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carouselImage"
            src={wagemtagem}
            alt="wagemtagem img"
          />
          <Carousel.Caption className="carouselCaption">
            <a
              className="projectUrl"
              href="https://limitless-caverns-66584.herokuapp.com/"
            >
              Wag Em Tag Em: A place where like minded canines can link
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carouselImage"
            src={weatherDashboard}
            alt="weather dashboard img"
          />
          <Carousel.Caption className="carouselCaption">
            <a
              className="projectUrl"
              href="https://stacy-martin.github.io/weather-dashboard/"
            >
              Weather Dashboard: A dynamic weather app
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carouselImage"
            src={employeeDirectory}
            alt="Employee Directory img"
          />
          <Carousel.Caption className="carouselCaption">
            <a
              className="projectUrl"
              href="https://stacy-martin.github.io/employee_directory"
            >
              Employee Directory: React app for quick access to employee
              databases
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carouselImage"
            src={budgetTracker}
            alt="budget tracker img"
          />
          <Carousel.Caption className="carouselCaption">
            <a
              className="projectUrl"
              href="https://whispering-scrubland-98765.herokuapp.com/"
            >
              Budget Tracker: Personal accounting app with offline functioning
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
}

export default Projects;
