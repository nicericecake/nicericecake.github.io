import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import "./Home.css";
import ExpModal from "./projects/ExpModal";
import ProjectModal from "./projects/ProjectModal";

function Home() {
  const [showProjectModal, setProjectModal] = useState(false);
  const [showExpModal, setExpModal] = useState(false);
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="mmm">
      <div className="home">
        <div className="aboutMe">
          <Card className="aboutMe-card">
            <Card.Body>
              <Card.Subtitle>welcome!</Card.Subtitle>

              <Card.Title style={{ paddingTop: "1em" }}>
                Hello! I'm Sarah
              </Card.Title>
              <i class="bi bi-brightness-high"></i>

              <Card.Text>Software developer!</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="skills">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>Skills</Card.Title>

              <Card.Text>
                My qualifications:
                <ul>
                  <li>BA : japanese studies</li>
                  <li>BS: software development</li>
                </ul>
              </Card.Text>
              <Card.Text>
                Im fluent in these languages:
                <ul>
                  <li>japanese</li>
                  <li>chinese</li>
                  <li>mandarin</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="tools">
          <Card className="tools-card">
            <Card.Body>
              <Card.Title className="text-center">Tools</Card.Title>

              <Stack direction="horizontal" gap={2}>
                <Badge pill bg="" style={{ backgroundColor: "#AA4761" }}>
                  React
                </Badge>
                <Badge pill bg="" style={{ backgroundColor: "#AA4761" }}>
                  css / hmtl
                </Badge>
                <Badge pill bg="" style={{ backgroundColor: "#AA4761" }}>
                  <i class="bi bi-git" />
                </Badge>
              </Stack>
            </Card.Body>
          </Card>
        </div>
        <div className="exp">
          <Card
            className="modal-card"
            onClick={() => {
              setExpModal(true);
            }}
          >
            <Card.Body>
              <Card.Title className="text-center">
                Experience{" "}
                <span className="modal-icon">
                  <i class="bi bi-box-arrow-in-up-right " />
                </span>
              </Card.Title>
            </Card.Body>
          </Card>
          <ExpModal show={showExpModal} onHide={() => setExpModal(false)} />
        </div>
        <div
          className="proj"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <Card
            className="modal-card"
            onClick={() => {
              setProjectModal(true);
            }}
          >
            <Card.Body>
              <Card.Title className="text-center">
                Projects
                <span className="modal-icon">
                  <i class="bi bi-box-arrow-in-up-right " />
                </span>
              </Card.Title>
            </Card.Body>
          </Card>
          <ProjectModal
            show={showProjectModal}
            onHide={() => setProjectModal(false)}
          />
        </div>
        <div className="connect">
          <Card className="connect-card">
            <Card.Body>
              <Card.Title className="text-center">
                <Card.Footer>
                  <Card.Subtitle>Let's connect!</Card.Subtitle>

                  <Button
                    href="https://www.w3schools.com/"
                    bg=""
                    variant="outline-secondary"
                    target="_blank"
                  >
                    <i class="bi bi-linkedin" />
                  </Button>

                  <Button
                    href="https://www.w3schools.com/"
                    bg=""
                    variant="outline-secondary"
                    target="_blank"
                  >
                    <i class="bi bi-github" />
                  </Button>
                </Card.Footer>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
