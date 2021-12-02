import React from "react";
import Login from "./components/Pages/Login";
import Navbar from "./components/Parts/Navbar";
import Searcher from "./components/Searcher";

function App() {

  return (
    <>
      <Navbar/>
        <Login/>
      <Searcher />
    </>
  );
}

export default App;
