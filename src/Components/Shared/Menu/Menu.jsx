import React, { useState } from 'react';
import './Menu.css';
import { Container, Nav, Navbar, Toast } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Menu = () => {
  const { user, logOut } = useAuth();
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <h3>React & Firebase Task</h3>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex align-items-center">
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
              <div onClick={toggleShowA}>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="userPic ms-2"
                />
              </div>
              <Toast
                show={showA}
                onClose={toggleShowA}
                className="position-absolute p-2 tooltip"
              >
                <p className="fw-bolder">{user.displayName}</p>
                <span className="text-muted navLogout" onClick={logOut}>
                  Log Out
                </span>
              </Toast>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
