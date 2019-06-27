import React from "react";
import { Link } from "react-router-dom"

export default function checkOut({ user, handleSubmit, handleChange }) {
  return (
    <div>
      <div>
        <br />
        <h3 className="text-center">
          Estas a un paso de confirmar tu compra!
        </h3>
        <h4 className="text-center">
          Completa tus datos
        </h4>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre</label>
                    <input
                      value={user.name && user.name}
                      name="name"
                      className="form-control"
                      onChange={handleChange}
                      disabled ={
                        user.name ? true :false
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Direccion</label>
                    {
                      user.name ? 
                      <div>
                        <br />
                        <label>Si queres podes cambiar tu direccion de envio</label>
                      </div> 
                      :
                      null
                    }
                    <input
                      value={user.name && user.address}
                      name="address"
                      className="form-control"
                      onChange={handleChange} min="0"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      value={user.name && user.email}
                      name="email"
                      className="form-control"
                      onChange={handleChange} min="0"
                      disabled ={
                        user.name ? true :false
                      }
                    />
                  </div>
                  <button type="submit" className="btn btn-success btn-block">
                    Confirmar Compra
                    </button>
                  <br />
                </form>
                {
                  user.name ?
                    null
                    :
                    (
                      <div className="text-center">
                        <Link className="text-decoration-primary text-primary" to='/login'>
                          Si tenes cuenta ingresá acá
                        </Link>
                      </div>

                    )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
