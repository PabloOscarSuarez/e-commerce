import React from 'react';
import { Link } from 'react-router-dom';

export default ({ books }) => (
  <div>
  {console.log('SOY BOOKS EN PANEL BOOKS',books)}
    <table className="table mt-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Libro</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => {
            return (
              <tr key={book.id}>
                <td>
                  <div className="media">
                    <Link className="thumbnail pull-left" to="#">
                      <img className="media-object mr-3" src={book.urlImage} alt={`libro ${book.title}`} width="72px" height="72px" />
                    </Link>
                    <div className="media-body my-auto">
                      <p className="media-heading"><Link className="text-dark text-decoration-none" to="#">{book.title}</Link></p>
                      {/* <p className="media-heading">Autor: <Link className="text-dark text-decoration-none" to="">{book.author.name}</Link></p> */}
                    </div>
                  </div>
                </td>
                <td>{book.stock}</td>
                <td>${book.price}</td>
                <td>
                  {/* <button type="button" className="btn  btn-sm btn-info">Editar</button>
                  <button type="button" className="btn  btn-sm btn-danger">Eliminar</button> */}
                </td>
              </tr>
            )
          })
        }

      </tbody>
    </table>


  </div>
);
