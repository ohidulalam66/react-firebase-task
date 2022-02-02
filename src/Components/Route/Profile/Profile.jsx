import React from 'react'
import './Profile.css'
import { Col, Container, Row } from 'react-bootstrap'
import useAuth from '../../Hooks/useAuth'
import Menu from '../../Shared/Menu/Menu'

const Profile = () => {
  const { user } = useAuth()
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-start">
            <h2 className="fw-bold">Profile</h2>
            <p className="text-muted">
              You can let your smile change people, but don't let people change
              your smile.
            </p>
          </Col>
          <Col xs={12} md={8} className="py-4 profile-left">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="img-fluid"
            />
            <h4>Name: {user.displayName}</h4>
            <h6>Email: {user.email}</h6>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile
