import React from 'react';
import { Link } from 'react-router-dom';

export default ({ sales }) => (
    <div>
        {/* {console.log('SOY SALESSSS', sales)} */}

        <table className="table mt-2">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Venta ID</th>
                    <th scope="col">Fecha de Compra</th>
                    <th scope="col">Precio Total</th>
                    <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                {
                    sales.map((sale, id) => {
                        return (

                            <tr key={id}>
                                <td>
                                    {sale.id}
                                    &nbsp;
                                    &nbsp;
                                    -
                                    &nbsp;
                                    &nbsp;
                                    <Link className="text-primary" to={`/compras/${sale.id}`}>
                                        Ver Detalle
                                    </Link>
                                </td>
                                <td>
                                    {sale.createdAt && sale.createdAt.split('T')[0]}
                                </td>
                                <td>
                                    {sale.total}
                                </td>
                                <td>
                                    {sale.status.name}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>


    </div>
);


// {
//     sales.map(sale => {
//       return (
//         <tr key={sale.id}>
//           <td>
//             {/* {sale.id} */}
//             &nbsp;
//             &nbsp;
//             -
//             &nbsp;
//             &nbsp;
//             <Link className="text-primary" to={`/admin/ventas/${sale.id}`}>
//               Ver Detalle
//             </Link>
//           </td>
//           <td>
//           {/* {sale.user.email ? sale.user.email : sale.user.anonimousEmail} */}
//           </td>
//           <td>
//           {/* {sale.total} */}
//           </td>
//           <td>
//             {/* <Link className="text-primary" to={`/admin/ventas/status/${sale.status.id}`}>
//               {sale.status.name}
//             </Link> */}
//           </td>
//           <td>

//           </td>
//         </tr>
//       )
//     })
//   }