import React from 'react'
import propTypes from 'prop-types'
import btnDelete from './icons8-delete-16.svg'

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li style={
      {
        listStyle: 'none',
        textDecoration: todo.completed ? 'line-through' : 'none',
        textDecorationColor: todo.completed ? 'red' : 'none',
        color: todo.completed ? 'red' : 'black'
      }
    }>
      <p onClick={() => toggleTodo(todo.id)}>{todo.text}</p>
      <button onClick={() => deleteTodo(todo.id)} style={
        {
          backgroundImage: `url(${btnDelete})`,
          width: '1rem',
          height: '1rem'
        }
      }></button>
    </li>
  )
}

Todo.propTypes = {
  todo: propTypes.shape(
    {
      id: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
      completed: propTypes.bool
    }
  ).isRequired,
  deleteTodo: propTypes.func.isRequired,
  toggleTodo: propTypes.func.isRequired
}
export default Todo
