import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <section className="footer-section">
      <footer id='footer' className="text-center ">
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/#header" className="">Home</Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <HashLink to="/#about-me" className="">About Me</HashLink>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <HashLink to="/#services" className="">Services</HashLink>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/Experience" className="">Experience</Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/ContactMe" className="">Contact Me</Link>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <section className="text-center mb-5">
            <a href="https://twitter.com/NatiVick7?t=T3yqErlt3UDboDanIpniwQ&s=09" target='_blank' className="text-white me-4">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://instagram.com/natanim_ashenafi?igshid=ZGUzMzM3NWJiOQ==" target='_blank' className="text-white me-4">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/natanim-ashenafi-135170259" target='_blank' className="text-white me-4">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/VickNat" target='_blank' className="text-white me-4">
              <i className="fa fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          id='last-line'
        >
          © 2020 Copyright:
          <a className="" href="https://t.me/Nati_Vick" target='_blank'
          >Vick </a>
        </div>
      </footer>
      <Outlet />
    </section>
  )
}

export default Footer