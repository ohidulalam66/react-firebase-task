import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <h1>React & Firebase Task</h1>
        <Form className="w-50 mx-auto mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email ID" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button
            type="submit"
            variant="btn btn-outline-success"
            className="my-3"
          >
            LOGIN
          </Button>
        </Form>
        <Button className="google-btn" variant="btn btn-outline-danger">
          <i className="fab fa-google google-icon"></i>
        </Button>
      </Container>
    </>
  )
}

export default Login
