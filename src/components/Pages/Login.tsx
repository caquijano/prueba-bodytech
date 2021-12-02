import React from "react";
import Logo  from "../../images/spotify-logo.svg";
import { loginUrl, getTokenFromUrl } from "./LoginUrl";

function Login() {
  console.log(getTokenFromUrl())
  return (
    <div style={{width:"100%", display:"flex",justifyContent: "center", alignItems: "center", paddingBlock:"5%"}}>
      <div className="card text-center col-sm-5 ">
        <article className="card-body">
        <img src={Logo} alt="" width="150"/>
          <hr className="separator" />
          <p className="text-success text-center">Some message goes here</p>
          <form>
            <h3>Conectate con tu cuenta de Spotify</h3>
            <div className="form-group">
              <a href={loginUrl} type="submit" className="btnLogin btn-block">
                {" "}
                Iniciar Sesión{" "}
              </a>
            </div>
          </form>
        </article>
      </div>
    </div>
  );
}

export default Login;
