import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import profile from './lena.jpg'

const Summary = () => {
    return (
        <Container fluid>
            <Row className="banner">
                <Col>
                    <img className="profile" src={profile} width="30%" />
                </Col>
                <Col>
                    <ul>
                        <li>web-developer</li>
                        <li>diversity and inclussion advocate</li>
                        <li>sports enthusiast</li>
                    </ul>
                </Col>
            </Row>
            <Row className="summary">
                <div className="circle">
                    <div className="in-circle">
                        <h5>BI / Kyiv-Mohyla Academy</h5>
                        <hr></hr>
                        <p>Finance, marketing, logistics</p>
                    </div>
                </div>
                <div xs lg="3" className="circle">
                    <div className="in-circle">
                        <h5>Schneider Electric / Builton</h5>
                        <hr></hr>
                        <p>Event management, marketing communication, data analysis</p>
                    </div>
                </div>
                <div xs lg="3" className="circle">
                    <div className="in-circle">
                        <h5>HerSpace</h5>
                        <hr></hr>
                        <p>Wordpress, Elementor, Figma</p>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Summary