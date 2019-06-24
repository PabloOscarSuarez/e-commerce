import React from "react";
import {Link} from "react-router-dom"

export default function checkOut({handleSubmit, handleChange}) {
  return (
    <div>
      <div>
        <br />
        <h3 className="text-center">
          Estas a un paso de confirmar tu compra! Completa tus datos
        </h3>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <label>Nombre</label>
                        <input
                          name="name"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col">
                        <label>Direccion</label>
                        <input
                          name="address"
                          className="form-control"
                          onChange={handleChange} min="0"
                        />
                      </div>
                      <div className="col">
                        <label>Email</label>
                        <input
                          name="email"
                          className="form-control"
                          onChange={handleChange} min="0"
                        />
                      </div>
                    </div>
                  </div>

                    <button type="submit" className="btn btn-success btn-block">
                      Confirmar Compra
                    </button>
                  <br />
                </form>
                <button type="" className="btn btn-success btn-block">
                  Si ya estas registrado Ingresa aca
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
