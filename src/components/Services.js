import React from 'react'
import { UserCard } from 'react-ui-cards'

const Services = () => {
  return (
    <section className='services-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1 className='service-header mx-auto'>My Services</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <UserCard 
              float
              href='https://github.com/nukeop'
              header='https://i.imgur.com/vRAtM3i.jpg'
              avatar='https://i.imgur.com/XJxqvsU.jpg'
              name='Frank Hepsfield'
              positionName='Software Engineering Manager'
            />
          </div>
        </div>


      </div>
    </section>
  )
}

export default Services