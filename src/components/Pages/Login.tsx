import React from "react";
import Logo  from "../../images/spotify-logo.svg";

function Login() {
  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  const loginUrl = `${process.env.REACT_APP_SPOTIFY_ENDPOINT}?client_id=${
    process.env.REACT_APP_SPOTIFY_CLIENT_ID
  }&response_type=token&redirect_uri=${
    process.env.REACT_APP_REDIRECT_URI
  }&scope=${scopes.join("%20")}&show_dialog=true`;
  return (
    <div style={{width:"100%", display:"flex",justifyContent: "center", alignItems: "center", paddingBlock:"5%"}}>
      <div className="card text-center col-sm-5 "abs-center>
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
