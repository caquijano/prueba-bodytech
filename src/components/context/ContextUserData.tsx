
import React, { useState } from "react";


const Context = React.createContext({});



export function ContextUserData({ children }: any) {
  let userData:any = window.localStorage.getItem("SpotifyUser")
 
  if (!window.localStorage.getItem("SpotifyUser")) {
    
    if(userData?.Nombre === undefined){
      console.log("docs",userData)
    
    }
    else{
       window.localStorage.setItem("emailUser",userData.Email)
       window.localStorage.setItem("userNombre",userData.Nombre)
     window.localStorage.setItem("userApellidos",userData.Apellidos)
      window.localStorage.setItem("userId",userData.UserId)
      window.localStorage.setItem("foto",userData.Foto)
       console.log("hola mi perro")
      
    }
  }
  
  const [position, setPosition] = useState(false);
  
  
  return (
    <Context.Provider value={{ position, setPosition, userData }}>
      {children}
    </Context.Provider>
  );
}

export default Context;