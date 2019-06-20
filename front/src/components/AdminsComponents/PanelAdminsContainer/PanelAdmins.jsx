import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

export default () => (

  <div>
    <h1 className="text-center">Administradores</h1>
    <Link to="/admin/admins/create">
      <button type="button" className="btn btn-sm btn-success">Agregar nuevo admin</button>
    </Link>
    <table className="table mt-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark@algo.com</td>
        </tr>
        <tr>
          <td>Mark@algo.com</td>
        </tr>
      </tbody>
    </table>


  </div>
);
