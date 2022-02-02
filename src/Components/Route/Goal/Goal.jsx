import React from 'react'
import './Goal.css'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Menu from '../../Shared/Menu/Menu'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const Goal = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    if (data) {
      fetch(
        'https://react-firebase-task-153f7-default-rtdb.firebaseio.com/goalDataRecords.json',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            Swal.fire('Congratulation!', 'Your Goal Submit', 'success')
            reset()
          } else {
            Swal.fire('Sorry!', 'Your goal has not been submitted', 'error')
          }
        })
    } else {
      Swal.fire('Sorry!', 'Your goal has not been submitted', 'error')
    }
  }

  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col xs={6} md={4} className="text-start">
            <h2 className="fw-bold">Goal</h2>
            <p className="text-muted">
              Select Your Primary Goal. What do you want to accomplish in the
              next few months?
            </p>
          </Col>
          <Col xs={6} md={8} className="text-start text-muted goal-left">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column"
            >
              <label className="mt-4 ms-4 check">
                <input {...register('goal')} type="radio" value="Get Learner" />
                <span className="ms-2">Get Learner</span>
              </label>
              <label className="mt-4 ms-4 check">
                <input
                  {...register('goal')}
                  type="radio"
                  value="Get active again"
                />
                <span className="ms-2">Get active again</span>
              </label>
              <label className="mt-4 ms-4 check">
                <input
                  {...register('goal')}
                  type="radio"
                  value="Reduce pain or injury"
                />
                <span className="ms-2">Reduce pain or injury</span>
              </label>
              <label className="mt-4 ms-4 check">
                <input
                  {...register('goal')}
                  type="radio"
                  value="Improve Cardio or speed"
                />
                <span className="ms-2">Improve Cardio or speed</span>
              </label>
              <label className="my-4 ms-4 check">
                <input
                  {...register('goal')}
                  type="radio"
                  value="Improve sports or performance"
                />
                <span className="ms-2">Improve sports or performance</span>
              </label>
              <button className="btn btn-outline-primary mb-4" type="submit">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Goal
