import React from "react";
import { Link, Route } from "react-router-dom";
import SearchContainer from "../SearchContainer";

export default function Navbar({user, logOutLoggedUser}) {
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
           
          </ul>
          {/* ************************************************************************** */}
          {/* ************************************************************************** */}
          <Route component={SearchContainer} />
          {/* LO HAGO CON ROUTE PARA TENER HISTORY EN SEARCHCONTAINER COMO PROPS */}
          {/* ************************************************************************** */}
          {/* ************************************************************************** */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <Link className="nav-link" to={`/profile`}>Profile</Link> */}
            </li>
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
           {
                // PREGUNTO ASI PORQUE USER ES UN OBJETO
                user.name ?
                    ( 
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/profile`}>Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/auth/logout`} onClick={logOutLoggedUser}>Logout</Link>
                            </li>
                        </ul>
                    ) 
                    :
                    (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/login`}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/register`}>Register</Link>
                            </li>
                        </ul>
                    ) 
            }
        </div>
      </nav>
    </div>

  );
}
