import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/containers/AddTodo'
import VisibleTodoList from './components/containers/VisibleTodoList'
import './App.css'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App