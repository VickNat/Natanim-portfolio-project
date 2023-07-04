import React from 'react';
import ReactTyped from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>Web developement and websites promotion</h1>
        <ReactTyped 
          className='typed-text'
          strings={['Web developement', 'Vick\'s']}
          typeSpeed={60}
          backSpeed={70}
          loop
        />

        <a href='#' className='btn-main-offer'>Contact me</a>
      </div>
    </div>
  )
}

export default Header