import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   Children: "Click me to visit Google..."
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = " | Chai aur Code"

const reactElement = React.createElement('a', {href: "https://google.com", target: "_blank"}, 'Click me to visit Google', anotherUser)

createRoot(document.getElementById('root')).render(

  <App />

  // <StrictMode>
  //   <App />
  // </StrictMode>,

  // <StrictMode>
  //   MyApp()
  // </StrictMode>,

  // MyApp() // this is not a good practice to do but just for the sake that it still works...

  // anotherElement

  // reactElement
  
)
