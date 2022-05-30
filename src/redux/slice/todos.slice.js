import { createSlice } from '@reduxjs/toolkit'

let InitialId = 0

const initialState = {
  items: [],
  loading: false
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    ADD_TODO (state, action) {
      state.items.push({
        id: InitialId++,
        text: action.payload.text,
        completed: action.payload.completed
      })
    },
    DEL_TODO (state, action) {
      state.items = state.items.filter(el => el.id !== action.payload)
    },
    TOG_TODO (state, action) {
      const todo = state.items.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { ADD_TODO, DEL_TODO, TOG_TODO } = todosSlice.actions

export default todosSlice.reducer
