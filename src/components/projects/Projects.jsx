import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import ProjectCards  from './ProjectCards'
import ProjectAR  from './ProjectAR'
import ProjectLCP  from './ProjectLCP'
import ProjectGR  from './ProjectGR'
import ProjectTC  from './ProjectTC'
import ProjectOther  from './ProjectOther'
import colorSharp2 from "../../assets/color-sharp2.png"
import './projects.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Discover the Power of my expertise: An in-depth look at my all of my past software related projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ArRiyad</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">LCP Buildsoft Technology</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">GR Tech</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="forth">Top Click</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          ProjectAR.map((ProjectAR, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...ProjectAR}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          ProjectLCP.map((ProjectLCP, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...ProjectLCP}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          ProjectGR.map((ProjectGR, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...ProjectGR}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="forth">
                      <Row>
                        {
                          ProjectTC.map((ProjectTC, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...ProjectTC}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <Row>
                        {
                          ProjectOther.map((ProjectOther, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...ProjectOther}
                                />
                            )
                          })
                        }
                      </Row>
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

export default Projects