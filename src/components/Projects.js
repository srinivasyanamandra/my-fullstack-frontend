import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import gp from '../assets/img/gp.png';
import to from '../assets/img/TO.webp';
import thc from '../assets/img/theHostCode.ai 1.jpeg';
import thc1 from '../assets/img/theHostCode.ai 4.jpeg';
import thc2 from '../assets/img/theHostCode.ai 3.jpeg'; // Placeholder path for theHostCode.ai logo
import colorSharp2 from "../assets/img/color-sharp2.png";
import cv from "../assets/img/SYCV.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Recommendation Engine",
      description: "Machine Learning & Development",
      imgUrl: projImg2,
    },
    {
      title: "Multi Tenant Saas Architecture",
      description: "DevOps & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Career</h2>
                  <p>
                    My career goal is to become a highly skilled and innovative Java Full Stack Developer, specializing in building scalable and efficient SaaS applications. I aim to deepen my expertise in Java, Spring Boot, MySQL, React JS, and DevOps, leveraging modern cloud technologies like AWS to develop secure and high-performing applications. Additionally, I aspire to master system design and microservices architecture to contribute to enterprise-level projects. My long-term vision is to lead development teams, drive impactful solutions, and stay at the forefront of emerging technologies, continuously learning and evolving in the dynamic world of software development.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center project-nav"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Resume</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__fadeInUp" : ""}
                    >
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          As a Java Full Stack Developer, I have gained valuable experience in designing and developing web applications using Java, Spring Boot, MySQL, and React JS. My journey has been marked by a commitment to continuous learning and growth in the field of software development.
                        </p>
                        <p>
                          My experience includes working on various projects that involved building robust backend services with Java and Spring Boot, creating dynamic user interfaces with React JS, and managing databases with MySQL. I have also been involved in implementing CI/CD pipelines to streamline the deployment process and enhance the overall efficiency of the development lifecycle.
                        </p>
                        <p>
                          I am passionate about leveraging my skills to create innovative solutions that meet the needs of users while ensuring high performance and security. I thrive in collaborative environments where I can contribute to cross-functional teams and work on challenging projects that push the boundaries of technology.
                        </p>
                        <p>
                          In addition to my technical expertise, I am dedicated to staying updated with the latest trends and advancements in the industry. I believe that continuous learning is essential for personal and professional growth, and I actively seek opportunities to expand my knowledge and skills.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                        <div className="experience-timeline">
                          <div className="timeline-container">
                            {/* New company: theHostCode.ai */}
                            <div className="experience-card">
                              <div className="experience-header">
                                <div className="company-logo">
                                  <img src={thc} alt="theHostCode.ai" className="company-image" />
                                </div>
                                <div className="company-info">
                                  <h3>theHostCode.ai</h3>
                                  <span className="position-title">Founder & CEO</span>
                                  <span className="duration">2025 April - Present</span>
                                </div>
                              </div>
                              <div className="experience-content">
                                <p>
                                  As the founder of theHostCode.ai, a software product-based company, I lead all aspects of business strategy, product development, and technical direction. Our company focuses on delivering innovative AI-driven software solutions to streamline business operations and enhance user experiences.
                                </p>
                                <ul className="achievements">
                                  <li>Successfully launched our flagship SaaS platform with AI capabilities</li>
                                  <li>Built and manage a cross-functional team of developers, designers, and marketers</li>
                                  <li>Implemented cutting-edge technologies including machine learning models and microservices architecture</li>
                                  <li>Secured initial funding and established strategic partnerships for business growth</li>
                                </ul>
                              </div>
                            </div>
                            <div className="timeline-divider">
                              <div className="timeline-dot"></div>
                            </div>
                            <div className="experience-card">
                              <div className="experience-header">
                                <div className="company-logo">
                                  <img src={to} alt="Technum Opus" className="company-image" />
                                </div>
                                <div className="company-info">
                                  <h3>Technum Opus</h3>
                                  <span className="position-title">Java Backend Developer</span>
                                  <span className="duration">2025 March - Present</span>
                                </div>
                              </div>
                              <div className="experience-content">
                                <p>
                                  At Technum Opus, I led the development of enterprise-scale SaaS applications, architecting and implementing microservices-based solutions using Spring Boot, Java, and GCP cloud services. My responsibilities included designing RESTful APIs and optimizing database performance with PostgreSQL and MongoDB.
                                </p>
                                <ul className="achievements">
                                  <li>Reduced application load time by 40% through code optimization</li>
                                  <li>Implemented CI/CD pipelines using Jenkins and Docker</li>
                                  <li>Mentored junior developers and collaborated with cross-functional teams</li>
                                </ul>
                              </div>
                            </div>
                            <div className="timeline-divider">
                              <div className="timeline-dot"></div>
                            </div>
                            <div className="experience-card">
                              <div className="experience-header">
                                <div className="company-logo">
                                  <img src={gp} alt="GrapplTech" className="company-image" />
                                </div>
                                <div className="company-info">
                                  <h3>GrapplTech</h3>
                                  <span className="position-title">Java Full stack Developer</span>
                                  <span className="duration">2023 June - 2023 October</span>
                                </div>
                              </div>
                              <div className="experience-content">
                                <p>
                                  At GrapplTech, I played a key role in designing, developing, and maintaining web applications. My responsibilities included building robust backend services using Java and Spring Boot, managing databases with MySQL, and developing dynamic user interfaces with React JS.
                                </p>
                                <ul className="achievements">
                                  <li>Collaborated with cross-functional teams to implement scalable solutions</li>
                                  <li>Contributed to API development and database optimization</li>
                                  <li>Improved deployment efficiency through CI/CD pipeline implementation</li>
                                </ul>
                                <div className="view-document">
                                  <button
                                    className="btn btn-primary"
                                    onClick={() => window.open(`${process.env.PUBLIC_URL}/Grappltech.pdf`, "_blank")}
                                  >
                                    View Offer Letter
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          At Technum Opus, I serve as a Java Backend Developer where I lead the development of enterprise-scale AI-driven SaaS applications. I architect and implement microservices-based solutions using Spring Boot, Java, and PostgreSQL with JSONB for flexible data storage. My responsibilities include designing RESTful APIs, implementing event-driven architecture with Apache Kafka for real-time processing, and optimizing system performance through Redis caching. I've established robust CI/CD pipelines using Jenkins, Docker, and GitLab for streamlined deployment and version control. Additionally, I've implemented Kubernetes for container orchestration to enhance scalability and system resilience. During my tenure, I've focused on modularization, mistake-proofing, and implementing Circuit Breaker patterns to maintain high development standards while ensuring system stability. I collaborate with cross-functional teams to deliver high-quality software solutions that meet business objectives while mentoring junior developers on best practices in microservices architecture and DevOps methodologies.
                        </p>
                        <div className="resume-container text-center">
                          <h3>My Resume</h3>
                          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <button
                              className="btn btn-primary"
                              onClick={() => window.open(cv, "_blank")}
                            >
                              View Resume
                            </button>
                            <a
                              href={cv}
                              download="SYCV.pdf"
                              className="btn btn-success"
                            >
                              Download Resume
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};