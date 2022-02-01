import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Menu from '../../Shared/Menu/Menu'

const Goal = () => {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>
            <h2 className="fw-bold text-muted">Goal</h2>
            <p>
              Select Your Primary Goal. What do you want to accomplish in the
              next few months?
            </p>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  )
}

export default Goal
