import React from 'react';
import { TypeAnimation } from "react-type-animation";
import Particle from './Particle';


const Header = () => {
  return (
    <section className='header-wrapper'>
      {/* <div className='particles-wrapper'>
        <Particle />
      </div> */}
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

        <a href='#' className='btn-main-offer'>My Services</a>
      </div>
    </section>
  )
}

export default Header;