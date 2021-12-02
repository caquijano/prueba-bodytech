import React from "react";

function Searcher() {
  return (
    <div className="row mb-4">
      <div className="form-group col-lg-2">
        <label className="col-form-label" htmlFor="inputDefault">
        search song:{" "}
        </label>
      </div>
      <div className="form-group col-lg-6">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresar nombre de la categoría"
          id="inputDefault"
        //   onChange={handlerInputChange}
        />
      </div>
    </div>
  );
}

export default Searcher;
