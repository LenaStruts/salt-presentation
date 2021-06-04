import React, { useState, useEffect } from "react"
import Summary from './Summary/Summary'
import Coding from './Coding/Coding'
import Motivation from './Motivation/Motivation'
import { Container, Row, Navbar, Nav } from 'react-bootstrap'


import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom"
  

const Timer = () => {
  const [second, setSecond] = useState("00")
  const [minute, setMinute] = useState("01")
  const [isActive, setIsActive] = useState(false)
  const [counter, setCounter] = useState(60)

  useEffect(() => {
    let intervalId

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60
        const minuteCounter = Math.floor(counter / 60)

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter

        setSecond(computedSecond)
        setMinute(computedMinute)

        counter > 0 ? setCounter((counter) => counter - 1) : setCounter(0)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [isActive, counter])

  function stopTimer() {
    setIsActive(false)
    setCounter(60)
    setSecond("00")
    setMinute("01")
  }

  if (counter === 0) {
      return (
      <>
        <div class="time">
            <span class="minute">{minute}</span>
            <span>:</span>
            <span class="second">{second}</span>
          <button onClick={stopTimer} className="timerButton">
            Reset
          </button>
        </div>
        <div className="thanks-box">
          <h1 className="thanks">Thanks for your attention!!!</h1>
        </div>
      </>
      )}
  return (
    <>
    <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">Lena Struts</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" as="span">
                <Link to="/summary">summary</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link to="/coding">coding</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link to="/motivation_goal">motivation and goal</Link>
              </Nav.Link>
            </Nav>
            <Navbar.Text>
                <div class="time">
                    <span className="minute">{minute}</span>
                    <span>:</span>
                    <span className="second">{second}</span>
                </div>
            </Navbar.Text>
            <div>
                <button onClick={() => setIsActive(!isActive)} className="timerButton">
                {isActive ? "Pause" : "Start"}
                </button>
                <button onClick={stopTimer} className="timerButton">
                Reset
                </button>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
            <Route path="/summary">
                <Summary />
            </Route>
            <Route path="/coding">
                <Coding />
            </Route>
            <Route path="/motivation_goal">
                <Motivation />
            </Route>
        </Switch>    
    </Router>
    </>
  )
}

export default Timer
