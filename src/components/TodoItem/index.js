import {RiDeleteBinLine} from 'react-icons/ri'
// Import useDispatch
import {useDispatch} from 'react-redux'

// Import the action creators from the todoSlice
import {toggleTodo} from '../../reducers/todosSlice'

import './index.css'

const TodoItem = props => {
  const {todo} = props
  const dispatch = useDispatch()

  // Adding Event Handler
  const handleToggleComplete = id => {
    // dispatching toggleTodo action with id as argument
    dispatch(toggleTodo(id))
  }
  return (
    <li className="todo-item-container">
      <input
        type="checkbox"
        checked={todo.completed}
        className="task-checkbox"
        // add onChange event handler
        onChange={() => handleToggleComplete(todo.uniqueNo)}
      />
      <div className="task-content">
        <span className={todo.completed ? 'task-text-completed' : ''}>
          {todo.text}
        </span>
        <button className="delete-task-btn">
          <RiDeleteBinLine />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
