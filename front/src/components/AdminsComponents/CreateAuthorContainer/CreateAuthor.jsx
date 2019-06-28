import React from 'react';
// import { Link } from 'react-router-dom';

export default ({ 
    handleChangeAuthor,
    handleSubmit
}) => (

        <div>
            <h1 className="text-center">Creación de un nuevo Autor</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form action="/tasks/create" method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" name="title" placeholder="Ej: Erich Gamma" className="form-control" autoFocus onChange={handleChangeAuthor}/>
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
