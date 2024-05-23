import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp(){
  return (
    <div>
      <h2>Hello React!</h2>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotheruser = "Chai aur code"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click here to vist google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //    <App />
  // </React.StrictMode>,
  //reactElement
  //myApp()
  //anotherElement
  reactElement
)
