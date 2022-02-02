import React from 'react'
import './Menu.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const Menu = () => {
  const { user, logOut } = useAuth()
  console.log(user)
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
              <span className="text-decoration-none nav" onClick={logOut}>
                Log Out
              </span>
              <img src={user.photoURL} alt="" className="userPic" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
