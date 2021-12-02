import moment from "moment";
import React from "react";
import { useLocation } from "react-router";
import { useTrack } from "../hooks/useTrack";

function DetailTrack() {
  const location = useLocation().pathname.substr(14);
  const track = useTrack(location)?.song;
  console.log(track);
  const min = track?.duration_ms * 0.0000167;
  const rest = min - (min - Math.floor(min));
  const seg = Math.floor((min - Math.floor(min)) * 60);
  return (
      <>
      <a className="color-primary" style={{paddingTop:15, paddingInline:40}} href="/search/">Volver a buscar canciones</a>
    <div  style={{width:"100%", display: "flex", justifyContent: "center", alignItems:"center", marginTop:15}}>
        
      <div className="card" style={{width:"95%"}}>
        <div className="card-body row">
          <div className="col-lg-3">
            <img style={{ width: "100%" }} src={track?.album?.images[1]?.url} />
          </div>
          <div className="col-lg-8" style={{paddingTop:"3%"}}>
            <h5>CANCIÓN</h5>
            <h1 style={{ fontSize: 50 }}>{track?.name}</h1>
            <h4>Artista(s):{track.artists && track?.artists[0]?.name}</h4>
            <h6>Album: {track?.album?.name}</h6>
            <h6>
              Duración: {rest}:{seg}
            </h6>
            <h6>
              Lanzamiento:{" "}
              {track.album &&
                moment(track?.album?.release_date).format("MMMM Do YYYY")}
            </h6>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DetailTrack;
