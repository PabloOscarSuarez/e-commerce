import React from 'react';
// import { Link } from 'react-router-dom';

export default ({ 
    handleChangeStock,
    selectedBook,
    handleSubmit
}) => (

        <div>
            <h1 className="text-center mt-3">{selectedBook.title}</h1>
            <h5 className="text-center mt-3">Stock actual:  {selectedBook.stock}</h5>
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nuevo Stock</label>
                                    <input type="number" min="0" name="stock" className="form-control" autoFocus onChange={handleChangeStock}/>
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
