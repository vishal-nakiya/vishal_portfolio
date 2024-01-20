import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
// import Profile from "../../assets/img/profile/profile.webp";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import Tilt from "react-tilt";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Tilt options={{ max: 5, scale: 1 }}>
                  <Image
                    className="profile justify-content-end"
                    alt="profile"
                    src={Profile}
                    thumbnail
                    fluid
                  />
                </Tilt>
              </Row>
            </Col> */}
            <Col xs={6} md={12}>
              <Row className=" align-items-start p-2 my-details rounded">
                <p>
                  Hi, I'm <strong>Vishal Nakiya</strong>, a passionate Web developer from india With over 2 years of experience SKILLS
                  specializing in backend development. Proﬁcient in building robust web
                  applications With a strong emphasis on NodeJS Skilled in RESTfui API. HTML
                  design, real-time applications, and performance optimization , CSS
                  Committed to clean code and problem-solving.
                </p>
                <p>
                  I also specialize in MERN Stack Web Development, using technologies like Node.js, React.js, Express.js, MySql, MongoDB, and PostgreSQL.
                </p>
                <p>
                  A 2022 graduate from Gujarat Technological University with a B.Tech in Engineering,
                </p>
                <p>
                  Working with the clients, my goal is always driven towards
                  providing amazing experience with the best level of quality and
                  service to them.
                </p>
                <p>
                  I love learning about new technologies, what problems are
                  they solving and How can I use them to build better and scalable
                  products.
                </p>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1o-BC_h9msPPDDj2nqg_MSdFcwDqapA5i/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/vishal-nakiya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/vishal-nakiya-9160b81a8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
