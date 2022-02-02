import React from 'react'
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import { ImFacebook2 } from 'react-icons/im'
import { ImTwitter } from 'react-icons/im'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const Login = () => {
  const { user, signInWithGoogle, loading, error } = useAuth()

  const location = useLocation()
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate)
  }

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

        {loading && (
          <Spinner animation="border" variant="info" className="spinnerSize" />
        )}

        {user.email && (
          <Alert className="my-3 fontSize" variant="success">
            Congress! Created Register Successfully.
          </Alert>
        )}

        {error && (
          <Alert className="my-3 fontSize" variant="danger">
            {error}
          </Alert>
        )}

        <Button
          onClick={handleGoogleSignIn}
          className="mx-2"
          variant="btn btn-outline-success"
        >
          <FcGoogle size="28" />
        </Button>
        <Button className="mx-2" variant="btn btn-outline-success">
          <ImFacebook2 size="28" />
        </Button>
        <Button className="mx-2" variant="btn btn-outline-success">
          <ImTwitter size="28" />
        </Button>
      </Container>
    </>
  )
}

export default Login
