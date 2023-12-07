import React from 'react'
import Banner from '../Images/banner.webp';
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
      
    </div>
  )
}

export default Home