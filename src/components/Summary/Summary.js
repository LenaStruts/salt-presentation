import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import profile from './lena.jpg'

const Summary = () => {
    return (
        <Container fluid>
            <Row className="hero">
                <Col xs={12} md={6}>
                    <Row className="banner">
                    <Col xs={4} md={4}>
                        <img className="profile" src={profile} width="100%" />
                    </Col>
                    <Col xs={8} md={8}>
                        <ul className="about">
                            <li>an aspiring web-developer</li>
                            <li>diversity and inclussion advocate</li>
                            <li>sports and cooking enthusiast</li>
                        </ul>
                    </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="summary">
                <div className="circle">
                    <div className="in-circle">
                        <h5>BI / NaUKMA</h5>
                        <hr></hr>
                        <p className="circle-bottom">MSc in Business / Bachelor in Finance</p>
                    </div>
                </div>
                <div xs lg="3" className="circle">
                    <div className="in-circle">
                        <h5>Schneider Electric / Builton</h5>
                        <hr></hr>
                        <p className="circle-bottom">Event management, marketing communication, data analysis</p>
                    </div>
                </div>
                <div xs lg="3" className="circle">
                    <div className="in-circle">
                        <h5>HerSpace</h5>
                        <hr></hr>
                        <p className="circle-bottom">Wordpress, Elementor, Figma</p>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Summary