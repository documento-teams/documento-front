import { useState } from 'react'
import './App.css'
import MyInput from './components/formulaire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <form action="">
      {/* <input type="text" name="name" placeholder="Enter your name"/> */}
      <MyInput name="" placeholder="Entrez ton nom" type="text" label="Nom"/>
    </form>
      
    </>
  )
}

export default App
