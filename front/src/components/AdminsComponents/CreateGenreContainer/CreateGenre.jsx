import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

export default ({ 
    handleChangeGenre,
    handleSubmit
}) => (

        <div>
            <h1 className="text-center">Estoy en create genre</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" name="title" placeholder="Ej: Ficción" className="form-control" autoFocus onChange={handleChangeGenre}/>
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
