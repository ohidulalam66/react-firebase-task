import React from 'react'
import './Menu.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="text-decoration-none nav" to="/goal">
                Goal
              </NavLink>
              <NavLink className="text-decoration-none nav" to="/profile">
                Profile
              </NavLink>
              <NavLink className="text-decoration-none nav" to="/activity">
                Activity
              </NavLink>
              <NavLink className="text-decoration-none nav" to="/selectCoach">
                Select Coach
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
