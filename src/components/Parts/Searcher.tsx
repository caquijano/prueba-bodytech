import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";

function Searcher() {
  const initialState = {
    track: "",
  };
  const [tracks, setTracks] = useState(initialState);

  const navigate = useNavigate();
  const handlerInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTracks({ ...tracks, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    navigate(`/search/${tracks.track}`);
  };

  return (
    <div
      style={{
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: "5%",
        textAlign: "center",
        marginLeft: "5%",
      }}
    >
      <div className="row mb-12 text-right ">
        <div className="form-group col-lg-4 text-right pt-3">
          <label className="col-form-label text-right" htmlFor="inputDefault">
            Buscar Canción:{" "}
          </label>
        </div>
        <div className="form-group col-lg-4 pt-3">
          <input
            type="text"
            name="track"
            className="form-control"
            placeholder="Ingresar nombre de la canción"
            onChange={handlerInputChange}
          />
        </div>
        <div className="form-group col-lg-2 pt-3">
          <button
            type="submit"
            className="btnSubmit"
            onClick={onSubmit}
            title="nanan"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searcher;
