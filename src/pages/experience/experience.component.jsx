import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
// import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
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
                      <strong>
                      Developed & enhanced features
                      </strong> to implement the new changes made in a
                      Jewellery ERP system-based project. Additionally, I built client-requested
                      features to further improve the functionality in the system.
                    </li>
                    <br />
                    <li>
                      <strong>Comprehensive ERP Development:</strong> Led the development of an
                      extensive ERP system encompassing process planning,
                      manufacturing, inventory, sales, and mobile application
                      administration, integrating features like barcode scanning and
                      multi-location support.
                    </li>
                    <br />
                    <li>
                      <strong>Worked on</strong> JIRA stories to develop a new
                      API to support client-requested features.
                    </li>
                    <br />
                    <li>
                      <strong>Created</strong> Proficient in building robust web applications with Node.js as the Skilled
                    </li>
                    <br />
                    <li>
                      <strong>Implemented multi-lingual functionality</strong>{" "}
                      to the project's <strong>web application</strong> enabling
                      it to be used
                      <strong> across different countries</strong> by the
                      customers.
                    </li>
                    <br />
                    <li>
                      <strong>Inventory and Order Management Expertise:</strong> Implemented real-
                      time inventory tracking for optimized stock management, efficient
                      generation of purchase orders, and transparent sales order
                      management, ensuring seamless operations.
                    </li>
                    <br />
                    <li>
                      <strong>Technological Proficiency:</strong> Demonstrated proficiency in a range of
                      technologies including <strong> HTML, CSS, JavaScript, Node.js, Sequelize,
                        Express.js, React, Laravel, and MySQL, </strong>showcasing a versatile skill
                      set.
                    </li>
                    <br />
                    <li>
                      <strong>Device Compatibility:</strong> Integrated printer support for streamlined
                      product tagging within the ERP system, optimizing inventory
                      management.
                    </li>
                    <br />
                    <li>
                      <strong>EMI System Integration:</strong> Seamlessly integrated with physical
                      devices for <strong> EMI scheme management, simplifying installment-
                        based payments </strong>within the ERP system.
                    </li>
                    <br />
                    <li>
                      <strong>Tally Software Integration:</strong> Integrated Tally-like accounting
                      features into the ERP system, encompassing voucher creation,
                      ledger mapping, entry, and reporting for precise and efficient
                      financial management.
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
