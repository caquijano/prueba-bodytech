export const getTokenFromUrl = () =>{
    //window.localStorage.setItem("SpotifySession", )
    return window.location.hash.substring(1).split('&')
    .reduce((initial:any, item:any)=>{
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    },{})
}

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

 export const loginUrl = `${process.env.REACT_APP_SPOTIFY_ENDPOINT}?client_id=${
    process.env.REACT_APP_SPOTIFY_CLIENT_ID
  }&response_type=token&redirect_uri=${
    process.env.REACT_APP_REDIRECT_URI
  }&scope=${scopes.join("%20")}&show_dialog=true`;