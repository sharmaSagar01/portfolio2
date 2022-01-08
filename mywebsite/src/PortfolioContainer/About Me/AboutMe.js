import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";
import "./AboutMe.css";

import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Intermediate experience on Full stack web development with React JS. Have considerable knowledge on Python and Django Developement along with technical expertise on AWS Computing Services.",
    highlights: {
      bullets: [
        "Full Stack Web Developement",
        "Python and Django Development",
        "React JS Web Development",
        "AWS Computing Services",
        "MY SQL",
      ],
      heading: "Few Hightlights About Me:",
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container " id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollService.scrollToHireMe()}
              >
                {""}
                Hire Me {""}
              </button>
              <a href="Resume.pdf" download="Resume.pdf">
                <button className="btn highlighted-btn">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
