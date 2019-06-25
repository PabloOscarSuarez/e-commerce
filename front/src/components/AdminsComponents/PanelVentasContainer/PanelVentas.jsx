import React from 'react';
import { Link } from 'react-router-dom';

export default ({ sales, statuses, handleChangeStatus }) => (
  <div>
    {/* {console.log('SOY SALESSSS', sales)} */}
    <div className="row">
      <div className="col-md-3">
        <select className="form-control" name="status" onChange={handleChangeStatus}>
          <option value="0">Filtro por Estado de Compra</option>
          {
            statuses.map((status, id) => {
              return (
                // ESTA LOGICA ES PARA NO PODER CAMBIAR EL ESTADO A CARRITO
                status.name !== 'carrito' ?
                  <option key={id} value={status.id} >{status.name}</option>
                  :
                  null
              )
            })
          }
        </select>
      </div>
    </div>
    <table className="table mt-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Venta ID</th>
          <th scope="col">Comprador</th>
          <th scope="col">Precio Total</th>
          <th scope="col">Estado</th>
          <th scope="col" >
          </th>
        </tr>
      </thead>
      <tbody>
        {
          sales.map(sale => {
            return (
              <tr key={sale.id}>
                <td>
                  {sale.id}
                  &nbsp;
                  &nbsp;
                  -
                  &nbsp;
                  &nbsp;
                  <Link className="text-primary" to={`/admin/ventas/${sale.id}`}>
                    Ver Detalle
                  </Link>
                </td>
                <td>{sale.user.email}</td>
                <td>{sale.total}</td>
                <td>
                  <Link className="text-primary" to={`/admin/ventas/status/${sale.status.id}`}>
                    {sale.status.name}
                  </Link>
                </td>
                <td>
                  <Link className="btn btn-sm btn-info" to={`/admin/ventas/edit_status/${sale.id}`}>
                    Cambiar Estado
                  </Link>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>


  </div>
);
