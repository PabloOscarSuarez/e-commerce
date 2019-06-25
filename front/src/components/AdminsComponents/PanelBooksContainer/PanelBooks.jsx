import React from 'react';
import { Link, Route } from 'react-router-dom';
import DeleteBookContainer from '../DeleteBookContainer'

export default ({ books, history, where }) => (
  <div>
    {/* {console.log('SOY BOOKS EN PANEL BOOKS', history)} */}
    <table className="table mt-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Libro</th>
          <th scope="col" className="text-center">Stock</th>
          <th scope="col" className="text-center">Precio</th>
          <th scope="col" className="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => {
            return (
              <tr key={book.id}>
                <td>
                  <div className="media">
                    <Link className="thumbnail pull-left" to={`/admin/books/${book.id}`}>
                      <img className="media-object mr-3" src={book.urlImage} alt={`libro ${book.title}`} width="72px" height="72px" />
                    </Link>
                    <div className="media-body my-auto">
                      <p className="media-heading">
                        <Link className="text-dark text-decoration-none" to={`/admin/books/${book.id}`}>
                          {book.title}
                        </Link>
                      </p>
                      {/* <p className="media-heading">Autor: <Link className="text-dark text-decoration-none" to="">{book.author.name}</Link></p> */}
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="">
                    {book.stock}
                  </span>
                  <br />
                  <Link className="btn btn-sm btn-warning" to={`/admin/books/edit_stock/${book.id}`}>Editar Stock</Link>
                </td>
                <td className="text-center">
                  ${book.price}
                  </td>
                <td className="text-center">
                  <div className="d-flex justify-content-center">
                  <Link className="btn btn-sm btn-info" to={`/admin/books/edit/${book.id}`}>Editar</Link>
                  &nbsp;
                  <Route render={()=> <DeleteBookContainer bookId={book.id} history={history} where={where}/>} />
                  </div>
                  {/* <button className="btn  btn-sm btn-danger" value={book.id} onClick={handleClickDelete}>Eliminar</button> */}
                </td>
              </tr>
            )
          })
        }

      </tbody>
    </table>


  </div>
);
