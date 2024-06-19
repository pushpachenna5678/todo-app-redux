//import useSelector
import {useSelector} from 'react-redux'

import TodoItem from '../TodoItem'

import './index.css'

const TodosList = () => {
  // useSelector hook to access the tasks state from the Redux store
  const todosList = useSelector(state => state.todos.todosList)

  // Access filter state from Redux store
  const currentFilter = useSelector(state => state.filters.filter)

  const getFilteredTodos = () => {
    switch (currentFilter) {
      case 'Active':
        return todosList.filter(todo => !todo.completed)
      case 'Completed':
        return todosList.filter(todo => todo.completed)
      default:
        return todosList
    }
  }

  const filteredTodos = getFilteredTodos()

  return (
    <ul className="todo-items-container">
      {filteredTodos.map(task => (
        <TodoItem todo={task} key={task.uniqueNo} />
      ))}
    </ul>
  )
}

export default TodosList
