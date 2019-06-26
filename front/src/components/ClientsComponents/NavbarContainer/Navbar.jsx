import React from "react";
import { Link, Route } from "react-router-dom";
import SearchContainer from "../SearchContainer";
import SelectGenreContainer from "../SelectGenreContainer";

export default function Navbar({ user, logOutLoggedUser }) {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-primary bg-primary mb-1">
        <Link className="navbar-brand text-white" to={`/`}>
          {/* <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
          FullBook
        </Link>
        {/* <Link className="btn btn-secondary" to={`/movies/${movie.imdbID}`}>Ver Detalle</Link> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to={`/admin`}>Panel Administrador</Link>
            </li>

            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
                        </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">Action</Link>
                <Link className="dropdown-item" to="#">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">Something else here</Link>
              </div>
            </li> */}
            <Route component={SelectGenreContainer} />
            {/* <li className="nav-item">
                    <Link className="nav-link disabled" to="#" aria-disabled="true">Disabled</Link>
                </li> */}
          </ul>
          {/* ************************************************************************** */}
          {/* ************************************************************************** */}
          <Route component={SearchContainer} />
          {/* LO HAGO CON ROUTE PARA TENER HISTORY EN SEARCHCONTAINER COMO PROPS */}
          {/* ************************************************************************** */}
          {/* ************************************************************************** */}
          
          {
            // PREGUNTO ASI PORQUE USER ES UN OBJETO
            user.name ?
              (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-white" to={`/profile`} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Perfil
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to={`/profile`}>Perfil</Link>
                      <Link className="dropdown-item" to={`/compras`}>Compras</Link>
                      <Link className="dropdown-item" to={`/edit-profile`}>Editar Perfil</Link>
                      <Link className="dropdown-item" to={`/admin`}>Panel Admin</Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white" to={`/login`} onClick={logOutLoggedUser}>Logout</Link>
                  </li>
                </ul>
              )
              :
              (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={`/login`}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={`/register`}>Register</Link>
                  </li>
                </ul>
              )
          }
          <ul className="navbar-nav ml-2">
            <li className="nav-item">
              <Link to="/cart">
                <div className="ml-auto">
                  <img
                    src="https://image.flaticon.com/icons/png/512/107/107831.png"
                    alt=""
                    width="30px"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
}
