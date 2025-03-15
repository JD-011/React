import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count, setCount] = useState(10)

  // let counter = 10;

  const addValue = () => {
    if(count < 20) setCount(++count)
  }
  const removeValue = () => {
    if(count > 0) setCount(--count)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Chai aur Code</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add value {count}</button>
      <button onClick={removeValue}>Remove value {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
