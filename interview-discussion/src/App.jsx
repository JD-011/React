import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    console.log("App rendered", Math.random() );
    const [value, setValue] = useState({value: 0});
    // let mainValue = 1;
    // let multiply = 5;
    // const [multipliedValue, setMultipliedValue] = useState(mainValue)

    const clickMe = () => {
        setValue({value: 0});
    }

    return (
      <>
          <h1>Main Value: {value.value}</h1>
          <button onClick={clickMe}>Click Here</button>
          {/*<h1>Multiplied Value: {multipliedValue}</h1>*/}
      </>
    )
}

export default App
