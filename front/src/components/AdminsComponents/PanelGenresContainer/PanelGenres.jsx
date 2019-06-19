import React from 'react';
import { Link } from 'react-router-dom';

export default ({genres}) => (

  <div>
    <h1 className="text-center">Generos</h1>
    <Link to="/admin/genres/create">
      <button type="button" className="btn btn-sm btn-success">Agregar nuevo genero</button>
    </Link>
    <table className="table mt-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Generos</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        {
          genres && genres.map((genre, id) => {
            return (
              <tr key={id}>
                <td>{genre.name}</td>
                <td>
                  <button type="button" className="btn  btn-sm btn-danger">Eliminar</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>


  </div>
);
