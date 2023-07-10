import React from 'react'
import "./Experience.css"

const Experience = () => {
  return (
    <section className='experience-section'>
      <h2 className='mx-auto text-center my-5'>My Experiences And Accomplishments</h2>
      <div className="container">
        <div className="timeline">
          <div className="timeline-row">
            <div className="timeline-time">
              Jan 31<small>2002</small>
            </div>
            <div className="timeline-content">
              <i className="icon-attachment"></i>
              <h4>Birth day</h4>
              <p>On this date, my mother gave birth to me and I joined this world of software.</p>
              
              <div className="">
                <span className="badge badge-pill">Birth</span>
                <span className="badge badge-pill">Baby</span>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">
              September 18<small>2020</small>
            </div>
            <div className="timeline-content">
              <i className="icon-code"></i>
              <h4>Software Engineering</h4>
              <p>
                Joined Addis Ababa Science And Technology University
              </p>
              
              <div className="">
                <span className="badge badge-pill">Student</span>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">
              Jan 24<small>2021</small>
            </div>
            <div className="timeline-content">
              <i className="icon-turned_in_not"></i>
              <h4>Data Entry Specialist</h4>
              <p>Worked as a data entry specialist on upwork as a freelancer for 6 months</p>
              <div>
                <span className="badge badge-pill">Data Entry</span>
                <span className="badge badge-pill">Freelancer</span>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">
              Jan 3<small>2022</small>
            </div>
            <div className="timeline-content">
              <i className="icon-directions"></i>
              <h4>Volunteer work</h4>
              <p>Worked as a tech support in a local Catholic School as a tech support for 2 months.</p>
              <div>
                <span className="badge badge-pill">Volunteer</span>
                <span className="badge badge-pill">Tech support</span>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">
            Dec 12<small>2022</small>
            </div>
            <div className="timeline-content">
              <i className="icon-change_history"></i>
              <h4>Joined A2SV | African To Silicon Valley</h4>
              <p className="no-margin">In A2SV I have been practicing data structures and algorithms, while also improving my developement and soft skills</p>
              
              <div>
                <span className="badge badge-pill">Data structures and algorithms</span>
                <span className="badge badge-pill">A2SV</span>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">
              Dec 12<small>2022-present</small>
            </div>
            <div className="timeline-content">
              <i className="icon-code"></i>
              <h4>Contests and Hackathons</h4>
              <p>
                Been participating in hackathons and contest throughout my journey in A2SV.
              </p>
              
              <div className="">
                <span className="badge badge-pill">A2SV</span>
                <span className="badge badge-pill">Hackathons</span>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">
              Today<small>Present</small>
            </div>
            <div className="timeline-content">
              <i className="icon-attachment"></i>
              <h4>Internships</h4>
              <p>Currently looking for internships to expand my skills and grow as a person...</p>
              <div className="">
                <span className="badge badge-pill">Internships</span>
                <span className="badge badge-pill">FAANG</span>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-content">
              <p className="m-0">What's next? <br/> Let's find out...</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience