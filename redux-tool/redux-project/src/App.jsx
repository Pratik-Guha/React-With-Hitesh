import Ract,{ useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'

import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  
  return (
    <Provider store={store}>
      <h1>This is a Redux-Toolkit Project</h1>
      <AddTodo/>
      <Todo/>
    </Provider>
  )
}

export default App
