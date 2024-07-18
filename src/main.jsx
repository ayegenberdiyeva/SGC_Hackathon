import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// const scrollers = document.querySelectorAll(".scroller");

// if (!window.matchMedia("prefers-reducted-motion: reduce").matches){
//   addAnimation();
// }

// function addAnimation(){
//   scrollers.forEach((scroller) => {
//     scroller.setAttribute("data-animated", true)
//   })
// }