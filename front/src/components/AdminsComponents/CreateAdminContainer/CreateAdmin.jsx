import React from 'react';

export default () => (

        <div>
            <h1 className="text-center">Estoy en create admin</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form method="post">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Ej: ale@gmail.com" className="form-control" autoFocus/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" className="form-control"/>
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
