import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/sa.g.ar.779" target="_blank">
                <i class="fa fa-facebook-square"></i>
              </a>
              {/* <a href=''>
                        <i class="fa fa-google-plus-square"></i>
                        </a> */}
              <a href="https://twitter.com/sa_sagaarpkr" target="_blank">
                <i class="fa fa-twitter-square"></i>
              </a>
              <a href="https://github.com/sagar6462" target="_blank">
                <i class="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hi, My Name is <span className="highlighted-text">Sagar </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1 id="typical-heading">
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic IT Professional",
                    1500,
                    "Python Developer",
                    1500,
                    "Full Stack Developer",
                    1500,
                    "AWS Cloud Technician",
                    1500,
                    "React JS Dev",
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                IT professional with knowledge and working experience on
                different technologies.
              </span>
            </span>
          </div>
          <div className="profile-options">
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

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
