import React from 'react';
// import { Link } from 'react-router-dom';

export default ({ 
    handleChangeStatus,
    selectedSale,
    handleSubmit,
    statuses
}) => (

        <div>
            <h1 className="text-center mt-3">Venta ID: {selectedSale.id}</h1>
            <h5 className="text-center mt-3">Status actual:  {selectedSale.status && selectedSale.status.name}</h5>
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nuevo Status</label>
                                    {/* <input type="number" min="0" name="stock" className="form-control" autoFocus onChange={handleChangeStatus}/> */}
                                    <select className="form-control" placeholder="Autor" name="author" onChange={handleChangeStatus}>
                                        <option value="0">Seleccione el nuevo estado..</option>
                                        {                                    
                                            statuses.map((status, id) => {
                                                return (
                                                    // ESTA LOGICA ES PARA NO PODER CAMBIAR EL ESTADO A CARRITO
                                                    status.name !== 'carrito'?
                                                    <option key={id} value={status.id}>{status.name}</option>
                                                    :
                                                    null
                                                )
                                            })
                                        }
                                    </select>
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
