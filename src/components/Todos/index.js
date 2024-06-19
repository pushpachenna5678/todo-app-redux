// import useState
import {useState} from 'react'

import TodosList from '../TodosList'

// import the useDispatch hook and the addTodo action
import {useDispatch} from 'react-redux'

import './index.css'
import {addTodo} from '../../reducers/todosSlice'
import {setFilter} from '../../reducers/filterSlice'

const Todos = () => {
  const [input, setInput] = useState('')
  // to dispatch actions to the Redux store
  const dispatch = useDispatch()

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  // Add the handleAddTask function
  const handleAddTask = () => {
    if (!input.trim()) return // Prevent adding empty tasks
    dispatch(addTodo(input))
    setInput('') // Clear the input field after adding the task
  }

  const handleFilterChange = filter => {
    dispatch(setFilter(filter))
  }

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todos</h1>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>

      <input
        type="text"
        className="todo-user-input"
        placeholder="Enter a new task"
        value={input}
        onChange={handleInputChange}
      />
      <button className="add-todo-button" onClick={handleAddTask}>
        Add
      </button>

      <div className="heading-filters">
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>
        {/* Buttons for displaying completed and active tasks */}
        <div>
          <button className="filter-button">All</button>
          <button className="filter-button">Active</button>
          <button
            className="filter-button"
            onClick={() => handleFilterChange('Completed')}
          >
            Completed
          </button>
        </div>
      </div>

      <TodosList />
    </div>
  )
}

export default Todos
