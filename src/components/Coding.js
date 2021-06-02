import React from "react"
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import Harvard from './HarvardX.jpg'
import codecademy from './codecademy.jpg'



const Coding = () => {
    return (
        <Container >
            <h3>Soft Skills</h3>
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
                    <p class="soft-skill__text">MongoDB</p>
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
                    <p class="soft-skill__text">Python</p>
                </Col>
            </Row>
            <h3>Courses</h3>
                <Row>
                <div className="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Harvard}
                        alt="HarvardX"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={codecademy}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                    </div>
                </Row>
            <h3>Projects</h3>
                <Row>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UUD2t2YyDFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>
        </Container>
    )
}

export default Coding