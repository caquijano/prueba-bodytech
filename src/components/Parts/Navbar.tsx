import React from 'react'
import Logo from "../../images/logo.svg";

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="" width="97"/>
      
    </a>
  </div>
</nav>
    )
}

export default Navbar
