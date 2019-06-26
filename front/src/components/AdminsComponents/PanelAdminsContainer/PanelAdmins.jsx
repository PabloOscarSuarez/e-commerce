import React from 'react';
import { Link } from 'react-router-dom';

export default ({ admins, handleClickDelete }) => (

  <div>
    <h1 className="text-center">Administradores</h1>
    <Link to="/admin/admins/create">
      <button type="button" className="btn btn-sm btn-success">Agregar nuevo admin</button>
    </Link>
    <table className="table mt-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          admins.map((admin, id) => {
            return (
              <tr key={id}>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td><button type="button" className="btn  btn-sm btn-danger" value={admin.id} onClick={handleClickDelete}>Eliminar</button></td>
              </tr>
            )
          })
        }

      </tbody>
    </table>


  </div>
);
