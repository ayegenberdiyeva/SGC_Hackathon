import React, { useEffect } from 'react';
import sprite1 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite1.png';
import sprite2 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite2.png';
import sprite3 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite3.png';
import sprite4 from '/Users/aminayegenberdiyeva/Documents/front_back_end/front_end/hackaton_sgc/blue_jeans/src/images/sprite4.png';
import './App.css';

function ScrollingTape() {
  useEffect(() => {
    const tape = document.querySelector('.moving-tape');
    tape.addEventListener('mouseover', () => {
      tape.style.animationPlayState = 'paused';
    });
    tape.addEventListener('mouseout', () => {
      tape.style.animationPlayState = 'running';
    });
  }, []);

  return (
    <section className='scroller-section'>
      <div className='moving-tape'>
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
    </section>
  );
}

export default ScrollingTape;