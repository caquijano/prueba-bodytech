import React, { useEffect } from "react";
import { useTracks } from "../hooks/useTracks";
import { useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";

function ListTracks() {
  const navigate = useNavigate();
  const location = useLocation().pathname.substr(8);
  const total = useTracks(location)?.plist?.tracks?.total;
  const track = useTracks(location)?.plist?.tracks?.items;
  console.log(total)
  const pages:any = new Array()
  if (total >= 200) {
        for (let index = 0; index < 20; index++) {
        pages.push(index)
    }
  }else{
      const i = Math.floor(total/20)
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
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
            {
                pages.map((item:any, index:number)=>{
                   return(
                       <li className="page-item"><a className="page-link" href="#">{index+1}</a></li>
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
