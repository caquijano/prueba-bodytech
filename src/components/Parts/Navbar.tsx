import React from 'react'
import Logo from "../../images/logo.svg";

function Navbar() {
  const data:any = JSON.parse(window.localStorage.getItem("SpotifyUser") || '{"display_name": "undefined"}')
  console.log(data)
    return (
        <nav className="navbar navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="" width="97"/>
      
    </a>
    
    {

      (data.display_name == "undefined") ?
      <></>
      :
      <a style={{color:"#eb6608"}} className="color-primary navbar-brand">
      <img className="mx-3 rounded-circle"  src={data?.images[0]?.url} alt="" width="35"/>
      {data?.display_name}
    </a>
    }
  </div>
</nav>
    )
}

export default Navbar
