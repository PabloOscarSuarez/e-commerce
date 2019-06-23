import React from 'react';
import { Link } from 'react-router-dom'

export default ({ genres }) => {
    return (
        <div>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Género
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                        genres.map(genre => {
                            return (
                                <Link className="dropdown-item" key={genre.id} to={`/genres/${genre.id}/${genre.name}`}>{genre.name}</Link>
                            )
                        })
                    }
                </div>
            </li>
        </div>
    );
};