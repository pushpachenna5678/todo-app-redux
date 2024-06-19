import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  filter: 'All', // Initial filter status
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const {setFilter} = filterSlice.actions

export default filterSlice.reducer
