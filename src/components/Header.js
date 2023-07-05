import React from 'react';
import { TypeAnimation } from "react-type-animation";


const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>Web developement and websites promotion</h1>
        <TypeAnimation 
          className='typed-text'
          sequence={[
            'Natanim Ashenafi',
            1000,
            'Vick\'s',
            1000,
            'Web Development',
            1000
          ]}
          speed={50}
          repeat={Infinity}
        />

        <a href='#' className='btn-main-offer'>Contact me</a>
      </div>
    </div>
  )
}

export default Header;