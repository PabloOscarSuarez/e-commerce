import React from 'react';

export default ({ handleSubmit, handleChange }) => (

    <div>
        <h1 className="text-center">Creación de administrador</h1>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input id="name" type="name" className="form-control" name="name" onChange={handleChange} autoFocus/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Ej: ale@gmail.com" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-success btn-block">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
