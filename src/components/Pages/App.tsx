import React from "react";
//import { usePlayList } from "../hooks/usePlayList";
import ListTracks from "../Parts/ListTracks";
import Searcher from "../Parts/Searcher";


function App() {
  return (
    <>
      <Searcher />
      <ListTracks/> 
    </>
  );
}

export default App;
