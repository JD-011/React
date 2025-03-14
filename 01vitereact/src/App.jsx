import Chai from "./Chai"

function App() {
  const username = "Chai aur Code"
  return (
    <>
    <Chai/> // Always you have to start the naming of the component with uppercase letter like "Chai", "chai" will not run...
    <h1>Chai aur React | {username}</h1> 
    <p>Test para</p>
    </>
  )
}

export default App
