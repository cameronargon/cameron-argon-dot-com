import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";

const links = {
  bigChocolate: (
    <li className="nav- item">
      <Link
        className="nav-link"
        to="bcLocation"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Big Chocolate
      </Link>
    </li>
  ),
  disfiguring: (
    <li className="nav-item ">
      <Link
        className="nav-link"
        to="dtgLocation"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Disfiguring The Goddess
      </Link>
    </li>
  ),
  djMixes: (
    <li className="nav-item">
      <Link
        className="nav-link"
        to="djLocation"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        DJ Mixes
      </Link>
    </li>
  ),
  choccd: (
    <li className="nav-item">
      <Link
        className="nav-link"
        to="chopLocation"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Chocc'd & Screwed
      </Link>
    </li>
  ),
  contact: (
    <li className="nav-item">
      <Link
        className="nav-link"
        to="contactLocation"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
    </li>
  ),
};

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.bigChocolate}
            {links.disfiguring}
            {links.djMixes}
            {links.choccd}
            {links.contact}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
