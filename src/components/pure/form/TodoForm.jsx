import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import propTypes from 'prop-types'

const TodoForm = ({ createTodo }) => {
  const initialValues = {
    text: ''
  }

  const schema = yup.object().shape({
    text: yup.string()
      .required('text is required')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        createTodo(values)
      }}
    >

      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className='form'>
            <input className='form__inputText'
              type="text"
              name="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
              placeholder={'enter your task'}
            />
            <button className='form__btnSubmit' type="submit">
              Submit
            </button>
          </div>
          {errors.text && touched.text && errors.text}
        </Form>
      )}
    </Formik>
  )
}

TodoForm.propTypes = {
  createTodo: propTypes.func.isRequired
}

export default TodoForm
