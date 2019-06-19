import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, deleteTodo }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    onDoubleClick={deleteTodo}
  >
    {text}
    <button onClick={deleteTodo}>Delete</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo