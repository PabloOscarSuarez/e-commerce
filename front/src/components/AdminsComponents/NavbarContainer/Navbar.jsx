import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user, logOutLoggedUser }) => (

    <div className="background-dark">
        <nav className="navbar navbar-success bg-success">
            <Link className="navbar-brand text-white" to={`/`}>
                FullBook
            </Link>
            <Link className="navbar-brand text-white" to={`/admin`}>
                Panel Administrador
            </Link>
            {
                user.name ?
                    (

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item" onClick={() => logOutLoggedUser()}>
                                <a className="nav-link text-white" href="#" >Logout</a>
                            </li>
                        </ul>
                    )
                    :
                    null
            }
        </nav>
    </div>
);
