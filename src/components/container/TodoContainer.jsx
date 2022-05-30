import React from 'react'
import TodoForm from '../pure/form/TodoForm'
import TodoList from '../pure/TodoList'
import FilteredList from '../pure/FilteredList'

import { useDispatch, useSelector } from 'react-redux'
import { ADD_TODO, DEL_TODO, TOG_TODO } from '../../redux/slice/todos.slice'
import { setVisibilityFilter } from '../../redux/slice/visibility.slice'

const TodoContainer = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.items)
  const filter = useSelector((state) => state.visibility)

  function createTodo (text) {
    dispatch(ADD_TODO(text))
  }

  function deleteTodo (id) {
    dispatch(DEL_TODO(id))
  }

  function toggleTodo (id) {
    dispatch(TOG_TODO(id))
  }

  function VisibilityFilter (filter) {
    dispatch(setVisibilityFilter(filter))
  }

  const filteredTodo = filter === 'SHOW_COMPLETED'
    ? todos.filter(todo => todo.completed)
    : filter === 'SHOW_ACTIVE'
      ? todos.filter(todo => !todo.completed)
      : todos

  return (
    <div className='container'>
      <div className='container__header'>
        <TodoForm createTodo={createTodo}></TodoForm>
        <h1 className='titleTodo'>Your TODOs</h1>
        <FilteredList VisibilityFilter={VisibilityFilter}></FilteredList>
      </div>
      <div className='container__main'>
        <TodoList todos={filteredTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} VisibilityFilter={VisibilityFilter}></TodoList>
      </div>
    </div>
  )
}

export default TodoContainer

/**
 *--- First option---
 *
 * const filteredTodo = filter === 'SHOW_COMPLETED'
    ? todos.filter(todo => todo.completed)
    : filter === 'SHOW_ACTIVE'
      ? todos.filter(todo => !todo.completed)
      : todos
 *
 *--- Second option ---
 *
  let filteredTodo = []

  switch (filter) {
    case 'SHOW_ALL':
      filteredTodo = todos
      break

    case 'SHOW_ACTIVE':
      filteredTodo = todos.filter(todo => !todo.completed)
      break

    case 'SHOW_COMPLETED':
      filteredTodo = todos.filter(todo => todo.completed)
      break

    default:
      filteredTodo = todos
      break
  }

  console.log(filteredTodo)
 */
