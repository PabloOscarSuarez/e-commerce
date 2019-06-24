import React from "react"
import { Link } from "react-router-dom"

export default function Books({ books, handleClick }) {
  return (
    <div>
      <div className="row mt-5">
        {
          // console.log(books.Search, ' books.Search')
          books && books.map((book, id) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 mb-5" key={id}>
                <div className="card zoom shadow">
                  <Link to={`/books/${book.title}/${book.id}`}>
                    <img className="card-img-top" src={book.urlImage} alt="" height="350px" />
                  </Link>
                  <div className="card-body">
                    <p className="card-title">{book.title}</p>
                    {/* <p className="card-text">Año: {book.Year}</p> */}
                    {/* <p className="card-text">Categoría: {book.description}</p> */}
                    {/* <a href="#" className="btn btn-secondary">Ver detalle</a> */}
                    <div className="text-center">
                      <Link className="btn btn-secondary" to={`/books/${book.title}/${book.id}`}>Ver Detalle</Link>
                      &nbsp; <br />
                      <br />
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        onClick={() => {
                          handleClick(book);
                        }}
                      >
                        AddtoCart
                      </button>
                      {/* &nbsp; <button type= "submit" className = "btn btn-secondary" onClick = {() => {handleClick(book)}} >AddtoCart</button> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}
