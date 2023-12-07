import React from 'react'
import Banner from '../Images/banner.webp';
import Pride from "../Images/power-elite.png"
import './Home.css';
const Home = () => {
  return (
    <div className='home'>
      <div className='banner'>
        <div className='main-txt'>
          <span className='top-head'>Next Generation Of OTT Platform</span>
        <h1 className='main-head'>Streamit Your Custom<br></br>
         OTT Platform Creator</h1> 
         <p className='last-head'>Discover unbeatable discounts on top OTT platforms at <strong>Ottspot</strong>. Elevate your entertainment experience while saving big on subscriptions!</p>
        </div>
      <img id='banner' src={Banner} alt='Banner' />
      </div>
      <div className='details'>
        <img src={Pride} alt='pride' />
        <span className='details-head'>Style Crafted By A Proficient Reshav ji
</span>
<p className='details-sec'>We Take Great Pride In Being A Part Of The Envato Power Elite Club. We Have Been Developing
Themes Since 2017 And Have Established Ourselves As An Experienced <strong>Ottspot</strong>.</p>
<span className='details-last'>Trusted By <span id='customer'>32000+ </span> Happy Customers</span>
      </div>
    </div>
  )
}

export default Home