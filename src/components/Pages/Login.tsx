import React, { useEffect } from "react";
import Logo  from "../../images/spotify-logo.svg";
import { loginUrl } from "./LoginUrl";
import { getTokenFromUrl } from "./LoginUrl";
import SpotifyWebApi from 'spotify-web-api-js'

function Login() {
  const spotify = new SpotifyWebApi();
  
useEffect(() => {
  const hash = getTokenFromUrl();
  const token:any =  hash?.access_token
    if (hash.access_token == undefined) {
    console.log("undefined---->", hash)
  }else{
    spotify.setAccessToken(token)
    spotify.getMe().then((user:any) => window.localStorage.setItem("SpotifyUser", JSON.stringify(user)) )
    window.localStorage.setItem("SpotifyToken", token)

    spotify.getPlaylist("0TGFw5JNHqPKya8QEYTMcu").then((playlist:any)=>{ console.log(playlist) })
    window.location.hash=""
    setTimeout(function(){
  if(window.localStorage.getItem("SpotifyUser")){
    window.history.go(-2)
  }
},200);
  }
  
}, [])

  return (
    <div style={{width:"100%", display:"flex",justifyContent: "center", alignItems: "center", paddingBlock:"5%"}}>
      <div className="card text-center col-sm-5 ">
        <article className="card-body">
        <img src={Logo} alt="" width="150"/>
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
