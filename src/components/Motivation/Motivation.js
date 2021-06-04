import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import mhamilton from './mhamilton.jpg'
import girlcodes from './girlcodes.png'

const Motivation = () => {
    return (
            <Container>
                <Row className="motiv-goal">
                    <Col xs={12} md={3}>
                        <img src={mhamilton} width="100%"/>
                    </Col>
                    <Col xs={12} md={9}>
                        <h3 className="motiv-header">I believe I am a suitable candidate for Salt because I ...</h3>
                        <ul>
                            <li>am passionate about coding,</li> 
                            <li>learn fast, </li>
                            <li>am into continous learning,</li>
                            <li>work well in teams,</li>
                            <li>know how to handle stress,</li>
                            <li>am an advocate for women in technology</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="motiv-goal">
                    <Col xs={12} md={9}>
                        <h3 className="motiv-header points">In 3-5 years I want ...</h3>
                        <ul className="points">
                            <li>to acquire new knowledge through experience and from cowokers</li>
                            <li>to become a better programmer</li>
                            <li>to work as a developer in a pretty big company</li>
                            <li>to move further in my career (become a mid-level developer)</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3}>
                        <img className="girl-codes" src={girlcodes} width="90%" />
                    </Col>
                </Row>
            </Container>
    )
}
  
export default Motivation