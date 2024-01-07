import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
        <h1>Custom App!</h1>
    </div>
  )

}
/* const reactElement = {
  type: 'a',
  props: {
      href: 'https://www.google.co.in/',
      target: '_blank',
  },
  children: 'Click me to visit google'

}
 hum yaha pe object ko direct render nahi kar skate like <reactElement/> ko call karke
*/

const anotherElement = (
  <a href='http://google.com' target='_blank'>Visit Google</a>
)

const anotheruser = "Chai aur Code"
const reactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank',},
  'click me to visit google website',
  anotheruser


)


ReactDOM.createRoot(document.getElementById('root')).render(


  reactElement
  // <App/>

)
