import { configureStore } from '@reduxjs/toolkit'
import todosSlice from '../slice/todos.slice'
import filtersSlice from '../slice/visibility.slice'

const store = configureStore({
  reducer: {
    todos: todosSlice,
    visibility: filtersSlice
  }
})

export default store
