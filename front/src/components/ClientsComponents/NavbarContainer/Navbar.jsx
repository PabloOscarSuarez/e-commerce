import React from "react";
import { Link, Route } from "react-router-dom";
import SearchContainer from "../SearchContainer";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
       <a className="nav-link" href="#">FullBook<span className="sr-only">(current)</span>
              </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
               <Link to = "/" className= "nav-link">
                Home  </Link>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <Route component={SearchContainer} />

            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <li className="nav-item">
              <Link to = "/cart">
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
