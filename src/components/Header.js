import React from 'react';
import { TypeAnimation } from "react-type-animation";
import Particle from './Particle';


const Header = () => {
  return (
    <section id="header" className='header-wrapper'>
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

        <a href='https://github.com/VickNat' target='_blank' className='btn-main-offer'>My Projects</a>
      </div>
    </section>
  )
}

export default Header;