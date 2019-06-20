import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

export default () => (

  <div>
    <h1 className="text-center">Ventas</h1>
    <table className="table mt-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Comprador</th>
          <th scope="col">Precio Total</th>
          <th scope="col">Estado</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>2</td>
          <td>Algun Estado</td>
          <td>
            <button type="button" className="btn  btn-sm btn-info">Editar</button>
          </td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>2</td>
          <td>Algun Estado</td>
          <td>
            <button type="button" className="btn  btn-sm btn-info">Editar</button>
          </td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>2</td>
          <td>Algun Estado</td>
          <td>
            <button type="button" className="btn  btn-sm btn-info">Editar</button>
          </td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>3</td>
          <td>Algun Estado</td>
          <td>
            <button type="button" className="btn  btn-sm btn-info">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>


  </div>
);
