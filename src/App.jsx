import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='first_part'>
        <div className='head'>
          <div className='quick_links'>
          <button className='quick_button'>Project info</button>
          </div>
          <div className='quick_links'>
          <button className='quick_button'>Big dates</button>
          </div>
          <div className='quick_links'>
          <button className='quick_button'>Biography</button>
          </div>
          <div className='quick_links'>
          <button className='quick_button'>Posts</button>
          </div>
          <div className='quick_links'>
          <button className='quick_button'>Sources</button>
          </div>
          <div className='quick_links'>
          <button className='quick_button'>Subscription</button>
          </div>
        </div>
        <h1>HerPath Empowerment Project</h1>
      </div>
      <div>
        <h1>lalala</h1>
      </div>
    </>
  )
}

export default App
