import React from 'react';
import { Link } from 'react-router-dom';


export default ({ user }) => {
    // console.log(user)
    return (
        <div>
            <div className="row mt-5">

                <div className="col-12 col-md-6 col-lg-3 mb-5">
                    <div className="card zoom shadow">
                        <img className="card-img-top" src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="" width="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">nombre</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><p className="card-text">Email: </p></li>
                                <li className="list-group-item"><p className="card-text">Direccion: </p></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-2 text-right">
                        <Link to="/edit-profile" className="btn btn-primary">Editar Perfil</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
