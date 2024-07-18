import { useState } from 'react'
import './App.css'
import logo from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/logo_transparent.png';
import star from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/star.png';
import ScrollingTape from './scrollingtape.jsx';

import sprite1 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite1.png';
import sprite2 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite2.png';
import sprite3 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite3.png';
import sprite4 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite4.png';
import sprite5 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite5.png';
import sprite6 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite6.png';
import sprite7 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite7.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section id='home-section' className='home-section'>
      <div className='navbar' role='banner'>
        <div className='navigation'>
          <nav role='navigation' className='navmenu-anchor anchor w-nav-menu'>
            <a href='#about' className='anchorpoint w-navlink'>About</a>
            <a href='#big-dates' className='anchorpoint w-navlink'>Big Dates</a>
            <a href='#biography' className='anchorpoint w-navlink'>Biography</a>
            <a href='#blog' className='anchorpoint w-navlink'>Blog</a>
            <a href='#sources' className='anchorpoint w-navlink'>Source</a>
            <a href='#support' className='anchorpoint w-navlink'>Support</a>
          </nav>
        </div>
      </div>
      <div className='logo-wrapper'>
        <img src={logo} width="672.5" alt='EmpowerPath logo' className='logo'/>
      </div>
      <div className='slogan-wrapper'>
        <p className='caption'>
          Scroll
          <br></br>
          for more ^_^
        </p>
        <div className='div-block-1'>
          <img src={star} alt='stars' className='image-star' />
          <p className='slogan'>
            Empowering Women, 
            <br></br>
            Guiding Paths to Success
          </p>
        </div>
      </div>
    </section>
    {/* <section class='scroller-section'>
      <div className='moving-tape'>
      <ScrollingTape />
        <p className='adjective'>innovative</p>
        <img src={sprite1} alt='dog' className='moving-tape-sprite'/>
        <p className='adjective'>resilient</p>
        <img src={sprite2} alt='heart' className='moving-tape-sprite'/>
        <p className='adjective'>inspiring</p>
        <img src={sprite3} alt='disco ball' className='moving-tape-sprite'/>
        <p className='adjective'>determined</p>
        <img src={sprite4} alt='ribbon' className='moving-tape-sprite'/>
        <p className='adjective'>flexible</p>
        <p className='adjective'>innovative</p>
        <img src={sprite1} alt='dog' className='moving-tape-sprite'/>
        <p className='adjective'>resilient</p>
        <img src={sprite2} alt='heart' className='moving-tape-sprite'/>
        <p className='adjective'>inspiring</p>
        <img src={sprite3} alt='disco ball' className='moving-tape-sprite'/>
        <p className='adjective'>determined</p>
        <img src={sprite4} alt='ribbon' className='moving-tape-sprite'/>
        <p className='adjective'>flexible</p>
      </div>
    </section> */}
    <section id='about' className='about-section'></section>
    <section id='big-dates' className='big-date-section'></section>
    <section id='biography' className='biography-section'></section>
    <section id='blog' className='blog-section'></section>
    <section id='sources' className='sources-section'></section>
    <section id='support' className='support-section'></section>
    </>
  )
}

export default App
