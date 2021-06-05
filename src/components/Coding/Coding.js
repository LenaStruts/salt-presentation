import React from "react"
import PropTypes from "prop-types"
import ControlledCarousel from './Carousel'
import { Container, Row, Col } from 'react-bootstrap'

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
)
  
YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
}

const Coding = () => {
    return (
        <Container fluid>
            <h3 className="skill__header">Soft Skills</h3>
            <Row>
                <Col>
                    <i class="soft-skill__icon fab fa-html5"></i>
                    <p class="soft-skill__text">HTML5</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fab fa-css3-alt"></i>
                    <p class="soft-skill__text">CSS3</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fab fa-sass"></i>
                    <p class="soft-skill__text">SASS</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fab fa-js"></i>
                    <p class="soft-skill__text">JavaScript ES6</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fab fa-react"></i>
                    <p class="soft-skill__text">React</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fab fa-node-js"></i>
                    <p class="soft-skill__text">Node.js / Express.js</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fas fa-database"></i>
                    <p class="soft-skill__text">Postgres / MongoDB</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fab fa-git-alt"></i>
                    <p class="soft-skill__text">Git</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fab fa-github"></i>
                    <p class="soft-skill__text">GitHub</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fab fa-python"></i>
                    <p class="soft-skill__text">Python / Django</p>
                </Col>
                <Col>
                    <i class="soft-skill__icon fab fa-wordpress-simple"></i>
                    <p class="soft-skill__text">Wordpress</p>
                </Col>
            </Row>
            <h3 className="skill__header">Courses</h3>
                <Row>
                    <div className="carousel">
                        <ControlledCarousel />
                    </div>
                </Row>
            <h3 className="skill__header">Projects</h3>
                <Row className="projects">
                    <Col xs={11} md={6}>
                        <div className="project">
                        <h5>Recipes</h5>
                        <p>Final project for HarvardX, fullstack web-app made using Django and JavaScript</p>
                        <YoutubeEmbed embedId="UUD2t2YyDFU" />
                        <button className="projectButton"><a href="https://github.com/LenaStruts/delicious-recipes" target="_blank">View project</a></button>
                        </div>
                    </Col>
                    <Col classname="project" xs={11} md={6}>
                        <div className="project">
                        <h5>Jamming</h5>
                        <p>Project for Codecademy, web-app made using React and Spotify API</p>
                        <YoutubeEmbed embedId="qMlBM87bFmA" />
                        <button className="projectButton"><a href="https://github.com/LenaStruts/jamming" target="_blank">View project</a></button>
                        </div>
                    </Col>
                </Row>
        </Container>
    )
}

export default Coding