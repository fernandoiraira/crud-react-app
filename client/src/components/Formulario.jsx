import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Formulario({ titulo, atributos, handleChange, handleAdd }) {
  return (
    <div className="container">
      <div className="card text-center mt-5">
        <div className="card-header">{titulo}</div>
        <div className="card-body">
          {atributos.map((elem) => {
            return (
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id={elem.name}>
                    {elem.label}
                  </span>
                </div>
                <input
                  type={elem.type}
                  className="form-control"
                  placeholder={elem.placeholder}
                  aria-label={elem.label}
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                  name={elem.name}
                />
              </div>
            );
          })}
        </div>
        <div className="card-footer text-muted">
          <button onClick={handleAdd} className="btn btn-success mx-2">
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
