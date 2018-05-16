import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <header className="navBar">
        <section className="logo">
          <h3>Chili Beats
            <span>
              <svg className="dot" height="28px" width="30px">
                <circle cx="60%" cy="60%" r="10px"/>
                <circle className="pulse" cx="60%" cy="60%" r="4px"/>
              </svg>
            </span>
          </h3>
        </section>
        <nav className="menuItem">
          <Link to='/'>Home</Link>
          <Link to='/library'>Library</Link>
        </nav>
      </header>
    )
  }
}

export default Nav;
