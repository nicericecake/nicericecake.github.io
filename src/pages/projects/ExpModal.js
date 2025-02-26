import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "./Modal.css";

function ProjectModal(props) {
  let projectsArr = [
    {
      key: 0,
      name: "XiaoTianCai",
      link: "",
      title: "Software Engineer Intern",
      description:
        "As a software intern, I worked on their in-house Business Process Management Systems, focusing on data input and displays!, using React, AntD, Umi.js",
    },
    {
      key: 1,
      name: "Vivo",
      title: "Front-End developer Intern",
      description:
        "I participated in creating components for their custom in-house front-end Framework. I also worked on identifying and fixing bugs in their components Using Vue.js and JavaScript.",
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
        <Modal.Title id="contained-modal-title-vcenter">Experience</Modal.Title>
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
                    <Nav.Link eventKey={project.key}>{project.name}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col>
              <Tab.Content>
                {projectsArr.map((project) => (
                  <Tab.Pane eventKey={project.key} title={project.name}>
                    <h1>{project.title}</h1>
                    {project.description}
                    {project.link}
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
