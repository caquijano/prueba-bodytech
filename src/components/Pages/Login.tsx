import React, { useEffect } from "react";
import Logo from "../../images/spotify-logo.svg";
import { useLogin } from "../hooks/useLogin";
import { loginUrl } from "./LoginUrl";


function Login() {
  useLogin();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: "5%",
      }}
    >
      <div className="card text-center col-sm-5 ">
        <article className="card-body">
          <img src={Logo} alt="" width="150" />
          <hr className="color-primary" />

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
