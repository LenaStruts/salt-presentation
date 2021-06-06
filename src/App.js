import React, { useState, useEffect } from "react"
import Summary from './components/Summary/Summary'
import Coding from './components/Coding/Coding'
import Motivation from './components/Motivation/Motivation'
import { Navbar, Nav } from 'react-bootstrap'
import './index.css'


import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom"

const initialStates = {
  second: "30",
  minute: "04",
  isDone: false,
  isActive: false,
  counter: 270
}


const App = () => {
  const [second, setSecond] = useState(initialStates.second)
  const [minute, setMinute] = useState(initialStates.minute)
  const [isDone, setIsDone] = useState(initialStates.isDone)
  const [isActive, setIsActive] = useState(initialStates.isActive)
  const [counter, setCounter] = useState(initialStates.counter)

  useEffect(() => {
    let intervalId

    if (isActive) {
      intervalId = setTimeout(() => {
        const newCounter = counter > 0 ? (counter - 1) : 0
        const secondCounter = newCounter % 60
        const minuteCounter = Math.floor(newCounter / 60)

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

        setCounter(newCounter)
      }, counter === initialStates.counter ? 0 : 1000)
    }

    return () => clearTimeout(intervalId)
  }, [isActive, counter])

  const stopTimer = () => {
    setIsActive(initialStates.isActive)
    setIsDone(initialStates.isDone)
    setCounter(initialStates.counter)
    setSecond(initialStates.second)
    setMinute(initialStates.minute)
  }

  if (isDone === true) {
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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#"><Link to="/salt-presentation/">Lena Struts</Link></Navbar.Brand>
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
                <button onClick={() => setIsActive((isActive) => !isActive)} className={!(counter===0) ? "timerButton" : "not-show"}>
                {isActive ? "Pause" : "Start"}
                </button>
                <button onClick={() => setIsDone((isDone) => !isDone)} className={(counter===0) ? "timerButton" : "not-show"}>
                Done
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
            <Route path="/salt-presentation/">
              <Summary />
            </Route>
        </Switch>    
    </Router>
    </>
  )
}

export default App