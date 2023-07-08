import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactMe.css";
import logo from "../Logo2.png"

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_iitj292',
      'template_4h1hq6a',
      form.current,
      'c_gqaTyMystg42uia'
    )
      .then((result) => {
        console.log("Sent Message");
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log("Failed Message");
        console.log(error.text);
      });
  };

  return (
    <section className='contactme-section'>
      <div className='title'>
        <h2 className='mx-auto text-center'>CONTACT ME</h2>
        <p className='mx-auto text-center'>Feel free to reach out to me for work...</p>
      </div>
      <div className="container py-2">

        <div className="row justify-content-md-center">
          <div className="col-md-6 col-xxl-8">
            <img className="aboutus-image img-fluid rounded" loading="lazy" src={logo} alt="" />
          </div>
          <div className="form-column col-md-6">
            <form id="contactForm" ref={form} onSubmit={sendEmail}>

              <div className="mb-3">
                <label className="form-label" htmlFor="user_name">Name</label>
                <input className="form-control" id="user_name" type="text" name="user_name" placeholder="Name" data-sb-validations="required" />
                <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="user_email">Email Address</label>
                <input className="form-control" id="user_email" name="user_email" type="email" placeholder="Email Address" data-sb-validations="required, email" />
                <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" type="text" placeholder="Message" style={{ height: "10rem" }} data-sb-validations="required"></textarea>
                <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
              </div>

              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">Form submission successful!</div>
              </div>

              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">Error sending message!</div>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary btn-lg" type="submit">Send Email</button>
              </div>

            </form>
            
          </div>
        </div>

      </div>

    </section>
  )
}

export default ContactMe