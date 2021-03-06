import React, { useEffect, useState } from "react";
import { useTracks } from "../hooks/useTracks";
import { useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";

function ListTracks() {
    const [indice, setIndice] = useState("10")
  const navigate = useNavigate();
  const location = useLocation().pathname.substr(8);
  const total = useTracks(location, indice)?.plist?.tracks?.total;
  const track = useTracks(location, indice)?.plist?.tracks?.items;
  console.log(total)
  const pages:any = new Array()
  if (total >= 200) {
        for (let index = 0; index < 10; index++) {
        pages.push(index)
    }
  }else{
      const i = Math.floor(total/10)
       for (let index = 0; index < i; index++) {
        pages.push(index)
        
    }
  }
  
console.log(pages)

  const onSubmit = (id:string) => {
    navigate(`/detail-track/${id}`);
  };
  return (
    <>
      <div className="mx-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulo</th>
              <th scope="col">Album</th>
              <th scope="col">ver</th>
            </tr>
          </thead>
          <tbody>
            {track &&
              track.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.name}</div>
                        <p className="color-primary">{item.artists[0].name}</p>
                      </div>
                    </td>
                    <td>{item.album.name}</td>
                    <td>
                      <FaEye
                        className="color-primary"
                        onClick={() => onSubmit(item.id)}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <nav  style={{width:"100%", display: "flex", justifyContent: "center", alignItems:"center", marginBlock:40}} aria-label="Page navigation example">

        <ul className="pagination">
            {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
            {
                pages.map((item:any, index:number)=>{
                   return(
                     <>
                     {
                       !(index < (parseInt(indice)/10)-4 || index > (parseInt(indice)/10)+2) ?
                       <li className="page-item"><a style={{color:"#eb6608"}} className="color-primary page-link" href="#" onClick={()=>setIndice(`${index+1}0`)}>{index+1}</a></li>
                       :
                      <></>
                     }
                       </>
                   )
                })
            }
            {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
        </ul>
</nav>
      </div>
    </>
  );
}

export default ListTracks;
