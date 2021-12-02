import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

export const useTrack = (value:string) => {

    const [song, setSong] = useState<any>("hello")
    const spotify = new SpotifyWebApi();
    console.log("value---->"+`${value}`)
    useEffect(() => {
    spotify.setAccessToken(window.localStorage.getItem("SpotifyToken"))
    spotify.getTrack(value).then(
        function (data) {
          setSong(data)
        },
        function (err) {
          console.error(err);
        }
      );
    }, [value])
  
    return{song}
}