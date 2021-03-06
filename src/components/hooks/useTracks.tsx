import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

export const useTracks = (value:string, indice:string) => {

    const [plist, setPlist] = useState<any>("hello")
    const spotify = new SpotifyWebApi();
    console.log("value---->"+`${value.replace("%20", " ")}`)
    useEffect(() => {
    spotify.setAccessToken(window.localStorage.getItem("SpotifyToken"))
    spotify.searchTracks(value.replace("%20", " "),{limit: 10, offset: parseInt(indice)}).then(
        function (data) {
          setPlist(data)
        },
        function (err) {
          console.error(err);
        }
      );
    }, [value, indice])
  
    return{plist}
}