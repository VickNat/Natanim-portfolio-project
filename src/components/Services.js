import React from 'react'
import { UserCard } from 'react-ui-cards'
import image from '../Nati.jpg'

const Services = () => {
  return (
    <section id="services" className='services-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2 className="display-3 fw-bold lh-1 mt-4">My Services</h2>
          </div>
        </div>

        <div className='row justify-content-center text-center'>
          <div className='col-md-3 m-5'>
            <div className="service-card card text-center" style={{width: "18rem"}}>
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button className="button btn btn-lg" type="button">Contact me</button>
              </div>
            </div>
          </div>
          <div className='col-md-3 m-5'>
            <div className="service-card card text-center" style={{width: "18rem"}}>
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button className="button btn btn-lg" type="button">Contact me</button>
              </div>
            </div>
          </div>
          <div className='col-md-3 m-5'>
            <div className="service-card card text-center" style={{width: "18rem"}}>
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button className="button btn btn-lg" type="button">Contact me</button>
              </div>
            </div>
          </div>
          <div className='col-md-3 m-5'>
            <div className="service-card card text-center" style={{width: "18rem"}}>
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button className="button btn btn-lg" type="button">Contact me</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Services