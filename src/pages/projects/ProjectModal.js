import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

function ProjectModal(props) {
  let projectsArr = [
    {
      key: 0,
      tab_name: "Portfolio",
      project_name: "Portfolio",
      link: "nicericecake.github.io",
      subtitle: "",

      description: "Personal portfolio",
    },
    {
      key: 1,
      tab_name: "AVM",
      project_name: "Automated Vulnerability Management",

      link: " github/L-s-a-r-a-h",
      subtitle: "",
      description:
        "Uni Project Automated Vulnerability Management tool for client",
    },
    {
      key: 2,
      tab_name: "Cultural Web Design",
      project_name: "Cultural Web Design",
      subtitle: "Uni Research Project",

      description: "Research the cultural infliuences on web site design",
    },
    {
      key: 3,
      tab_name: "The Lost Relics",
      project_name: "The Lost Relics",
      link: " github/L-s-a-r-a-h",
      subtitle: "Uni 2-D platformer game",

      description:
        "Designed, developed, and tested a 2D platform game in Unity (C#) using scrum methodology in a 5-person team.",
    },
  ];

  return (
    <Modal
      data-bs-theme="dark"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Projects</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <Tab.Container
          defaultActiveKey="0"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {projectsArr.map((project) => (
                  <Nav.Item>
                    <Nav.Link eventKey={project.key}>
                      {project.tab_name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col>
              <Tab.Content>
                {projectsArr.map((project) => (
                  <Tab.Pane eventKey={project.key} title={project.project_name}>
                    <Modal.Body>
                      <h4>{project.project_name}</h4>
                      <p>{project.link}</p>
                    </Modal.Body>

                    <Modal.Body>{project.description}</Modal.Body>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </ModalBody>
    </Modal>
  );
}

export default ProjectModal;
