import React from 'react';
import "../page/NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <h1>MS Questions CITA</h1>
        <div id="links">
            <Link id='home' to="/">Home</Link>
            <Link id='question' to="/question">Question</Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar
