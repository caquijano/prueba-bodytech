import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

export const usePlayList = () => {
    const [plist, setPlist] = useState<any>("hello")
    const spotify = new SpotifyWebApi();

    useEffect(() => {
    spotify.setAccessToken(window.localStorage.getItem("SpotifyToken"))
      spotify.getPlaylist("0TGFw5JNHqPKya8QEYTMcu").then((playlist:any)=>{ setPlist(playlist) })
    }, [])
  
    return{plist}
}