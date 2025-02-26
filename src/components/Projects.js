import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import gp from '../assets/img/gp.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
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
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Career</h2>
                <p>My career goal is to become a highly skilled and innovative Java Full Stack Developer, specializing in building scalable and efficient SaaS applications. I aim to deepen my expertise in Java, Spring Boot, MySQL, React JS, and DevOps, leveraging modern cloud technologies like AWS to develop secure and high-performing applications. Additionally, I aspire to master system design and microservices architecture to contribute to enterprise-level projects. My long-term vision is to lead development teams, drive impactful solutions, and stay at the forefront of emerging technologies, continuously learning and evolving in the dynamic world of software development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
            
                    <Tab.Pane eventKey="first">
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                        
                        {/* Image and Paragraph Container */}
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                          
                          {/* Responsive Image */}
                          <img
                            src={gp}
                            alt="Placeholder"
                            style={{ 
                              width: '100%', 
                              maxWidth: '300px', 
                              height: 'auto', 
                              borderRadius: '8px' 
                            }} 
                          />

                          {/* Text Content */}
                          <div className="col" style={{ maxWidth: '600px', textAlign: 'center' }}>
                            <p style={{ lineHeight: '1.5' }}>
                              At GrapplTech, I worked as a Java Full Stack Developer, where I played a key role in designing, developing, and maintaining web applications. My responsibilities included building robust backend services using Java and Spring Boot, managing databases with MySQL, and developing dynamic user interfaces with React JS.
                              <br /><br />
                              During my time at GrapplTech, I collaborated with cross-functional teams to implement scalable and optimized solutions, ensuring high performance and security. I actively contributed to API development, database optimization, and CI/CD pipelines, which improved deployment efficiency and system reliability.
                            </p>
                          </div>
                        </div>

                        {/* PDF View Option */}
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                          <button
                            className="btn btn-primary"
                            onClick={() => window.open(`${process.env.PUBLIC_URL}/Grappltech.pdf`, "_blank")}
                          >
                            View Offer Letter
                          </button>
                        </div>
                      </div>
                    </Tab.Pane>



                    <Tab.Pane eventKey="second">
                      <p>Whether it's optimizing performance or collaborating with teams, I thrive on creating impactful results. Feel free to view or download my resume below, and let's connect to discuss how I can contribute to your next project!</p>
                      <div className="resume-container text-center">
                        <h3>My Resume</h3>

                        {/* Button Container with Flexbox */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                          {/* View Resume Button */}
                          <button
                            className="btn btn-primary"
                            onClick={() => window.open(`${process.env.PUBLIC_URL}/resume.pdf`, "_blank")}
                          >
                            View Resume
                          </button>

                          {/* Download Resume Button */}
                          <a
                            href={`${process.env.PUBLIC_URL}/resume.pdf`}
                            download="srinivas-yanamandra-WEBDEV.pdf"
                            className="btn btn-success"
                          >
                            Download Resume
                          </a>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
