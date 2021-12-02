import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from '../Pages/LoginUrl';


export const useLogin = () => {
    const spotify = new SpotifyWebApi();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const token: any = hash?.access_token;
    if (hash.access_token == undefined) {
      console.log("undefined---->", hash);
    } else {
      spotify.setAccessToken(token);
      spotify
        .getMe()
        .then((user: any) =>
          window.localStorage.setItem("SpotifyUser", JSON.stringify(user))
        );
      window.localStorage.setItem("SpotifyToken", token);

      spotify.getPlaylist("0TGFw5JNHqPKya8QEYTMcu").then((playlist: any) => {
        console.log(playlist);
      });
      window.location.hash = "";
      setTimeout(function () {
        if (window.localStorage.getItem("SpotifyUser")) {
          window.history.go(-2);
        }
      }, 500);
    }
  }, []);
}