import React from 'react'
import Todo from './Todo.jsx'
import propTypes from 'prop-types'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></Todo>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape(
      {
        id: propTypes.number.isRequired,
        text: propTypes.string.isRequired,
        completed: propTypes.bool
      }
    ).isRequired
  ).isRequired,
  deleteTodo: propTypes.func.isRequired,
  toggleTodo: propTypes.func.isRequired
}

export default TodoList
