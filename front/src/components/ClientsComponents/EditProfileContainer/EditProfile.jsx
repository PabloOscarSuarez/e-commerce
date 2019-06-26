import React from 'react';
import { Link } from 'react-router-dom';


export default ({ user, handleSubmit, handleChange }) => {
    // console.log(user)
    return (
        <div>
            <div className="row mt-5">

                <div className="col-12 col-md-6 col-lg-3 mb-5">
                    <div className="card zoom shadow">
                        <img className="card-img-top" src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="" width="" />
                    </div>
                    <div className="mt-2">
                        <Link to="/profile" className="btn btn-primary">Volver</Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                    <div className="card shadow mx-auto">
                        <div className="m-2">
                            <form className="login-form clearfix" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input id="name" type="username" className="form-control" name="name" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Domicilio</label>
                                    <input id="address" type="username" className="form-control" name="address" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input id="email" type="username" className="form-control" name="email" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input id="password" type="password" className="form-control" name="password" onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-success float-right">Editar</button>
                            </form>
                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    );
}
