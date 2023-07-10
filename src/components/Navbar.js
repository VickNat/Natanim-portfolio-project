import React from "react";
import logo from "../Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { color } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/#header">Home</Link>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#about-me">About me</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#services">Services</HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Experience">Experiences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactMe">Contact me</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <Outlet />
    </>
  )
}

export default Navbar