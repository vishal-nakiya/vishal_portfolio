import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import L_Tuvoc from "../../assets/img/experience/Tuvoc-1.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {/* Deloitte */}
      <Jumbotron className="jumbo-style">
        <Tilt options={{ max: 5, scale: 1 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                src={L_Tuvoc}
                alt="Deloitte logo"
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <div className="text-center style">
                  <strong className="body-title-style ">
                    Backend Developer
                  </strong>
                  <br />
                  <strong>Technology:</strong> NodeJs, ExpressJs,
                  ReactJS, Laravel, MongoDB, MySQL, PostgreSQL
                  <br />
                  <strong>Duration:</strong> May 2022 - Present
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      <strong>Quick transition</strong> to{" "}
                      <strong>Backend</strong> and{" "}
                      <strong>Lead Support Developer</strong> resulting in{" "}
                      <strong>reducing</strong> Service Now tickets from{" "}
                      <strong>500+ to 0</strong>.
                    </li>
                    <li>
                      <strong>Developed & Enhanced features</strong> to
                      implement new changes done in Jewellery ERP system Based project API & build
                      client-requested features.
                    </li>
                    <li>
                      <strong>Worked on</strong> JIRA stories to develop a new
                      API to support client-requested features.
                    </li>
                    <li>
                      <strong>Created</strong> Proficient in building robust web applications with Node.js as the Skilled
                    </li>
                    <li>
                      <strong>Implemented multi-lingual functionality</strong>{" "}
                      to the project's <strong>web application</strong> enabling
                      it to be used
                      <strong> across different countries</strong> by the
                      customers.
                    </li>
                    <li>
                      <strong>Worked</strong> on{" "}
                      <strong>building Hybrid Mobile App</strong> for{" "}
                      <strong>Health Industry</strong> using Flutter & Dart in
                      Firm Initiative.
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>
    </div>
  );
};

export default Experience;
