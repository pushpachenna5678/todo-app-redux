import React from 'react'
import ReactDOM from 'react-dom/client'

// import configureStore from Redux Toolkit
import {configureStore} from '@reduxjs/toolkit'

// import Provider from React-Redux
import {Provider} from 'react-redux'

// import todosReducer from reducers
import todosReducer from './reducers/todosSlice'

// import filters Reducer from reducers
import filterReducer from './reducers/filterSlice'

import App from './App'

import './App.css'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filterReducer, // Connect the filter reducer
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
