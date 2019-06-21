import React from 'react';
import { Link } from 'react-router-dom';

export default ({genres, handleClickDelete}) => (

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
                <td><Link className="text-decoration-none text-dark" to={`/admin/genres/${genre.name}`}>{genre.name}</Link></td>
                <td>
                  {
                    genre.books.length === 0 ?
                    <button type="button" className="btn  btn-sm btn-danger" value={genre.id} onClick={handleClickDelete}>Eliminar</button>
                    :
                    <button type="button" className="btn  btn-sm btn-danger" disabled>Eliminar</button>
                  }
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>


  </div>
);
