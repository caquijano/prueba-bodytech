import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

export const useTracks = (value:string) => {

    const [plist, setPlist] = useState<any>("hello")
    const spotify = new SpotifyWebApi();
    console.log("value---->"+`${value}`)
    useEffect(() => {
    spotify.setAccessToken(window.localStorage.getItem("SpotifyToken"))
    spotify.searchTracks(value,{limit: 10, offset: 30}).then(
        function (data) {
          setPlist(data)
        },
        function (err) {
          console.error(err);
        }
      );
    }, [value])
  
    return{plist}
}