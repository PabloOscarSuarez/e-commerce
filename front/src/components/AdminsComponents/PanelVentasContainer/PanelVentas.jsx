import React from 'react';
import { Link } from 'react-router-dom';

export default ({ sales }) => (
  <div>
    {/* {console.log('SOY SALESSSS', sales)} */}
    <h1 className="text-center">Ventas</h1>
    <table className="table mt-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Venta ID</th>
          <th scope="col">Comprador</th>
          <th scope="col">Precio Total</th>
          <th scope="col">Estado</th>
          <th scope="col"></th>
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
                <td>{sale.status.name}</td>
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
