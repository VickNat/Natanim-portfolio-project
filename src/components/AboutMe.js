import React from 'react'
import logo from '../Nati.jpg';
import moment from 'moment';

const AboutMe = () => {
  const yearsOfExperience = moment("20210901", "YYYYMMDD").diff(moment(), 'years') * -1
  console.log(yearsOfExperience);

  const handleHireMe = () => {
    window.open("https://github.com/VickNat", "blank_")
  }

  return (
    <section className="aboutus-section py-5 py-xl-8">
      <div className="container mb-4 mb-md-5 mb-xl-8">
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-xxl-8">
            <img className="aboutus-image img-fluid rounded" loading="lazy" src={logo} alt="" />
          </div>
          <div className="col-md-6 col-xxl-8 d-flex align-items-center">
            <h2 className='mx-auto'>What you'd want to know about me...</h2>
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-2 gy-md-0 justify-content-xxl-center">
          <div className="col-12 order-md-1 col-md-8 col-xxl-6">
            <div className="text-center text-md-start">
              <h2 className="display-3 fw-bold lh-1">Natanim Ashenafi</h2>
              <p id='title' className="text-secondary fs-4 mb-2">Web Developer</p>
              <hr className="w-100 mx-auto ms-md-0 mb-4 text-secondary" />
              <p>

                Meet Natanim Ashenafi, a software developer by day, freelancer by night, and a coffee enthusiast around the clock. With experience in both front-end and back-end development, Natanim is a bit like a Swiss Army knife of coding - versatile, reliable, and always ready to tackle the next challenge. He's known for delivering products on time, which might be attributed to his secret superpower of bending the space-time continuum, or perhaps just his strong work ethic and diligent nature.
              </p>
              <p>Recently, Natanim has been spotted in the wild, deepening his knowledge of data structures and algorithms with Python. Rumor has it that he's been seen talking to trees (binary trees, to be precise) and sorting ducks in a row (or was it an array?). But don't let his humor fool you. Behind those light-hearted jokes is a dedicated professional, constantly learning and growing, ready to bring his skills and passion to his next big adventure in the software development world..</p>
            </div>
          </div>
          <div className="col-12 order-md-0 col-md-4 col-xxl-4">
            <div className="text-center text-md-start me-md-3 me-xl-5">
              <p className="mb-4">
                <span className="experience d-block display-6 lh-1">{yearsOfExperience}+</span>
                <span className="text fs-4 text-secondary">years of experience</span>
              </p>
              <div className="d-grid">
                <button onClick={handleHireMe} className="button btn btn-lg" type="button">EXPLORE MY PROJECTS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe