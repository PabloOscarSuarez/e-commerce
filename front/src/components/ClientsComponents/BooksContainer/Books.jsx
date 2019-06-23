import React from "react";
import { Link, Route } from "react-router-dom";
import AddToCartContainer from "../AddToCartContainer/index";

export default function Books({ books, handleClick}) {
  return (
    <div>
      <div className="row mt-5">
        {// console.log(books.Search, ' books.Search')
        books &&
          books.map((book, id) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 mb-5" key={id}>
                <div className="card zoom shadow">
                  <img
                    className="card-img-top"
                    src={book.urlImage}
                    alt=""
                    height="350px"
                  />
                  <div className="card-body">
                    <p className="card-title">{book.title}</p>
                    {/* <p className="card-text">Año: {book.Year}</p> */}
                    {/* <p className="card-text">Categoría: {book.description}</p> */}
                    {/* <a href="#" className="btn btn-secondary">Ver detalle</a> */}
                    <div className="text-center">
                      <Link
                        className="btn btn-secondary"
                        to={`/books/${book.title}/${book.id}`}
                      >
                        Ver Detalle
                      </Link>
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
                      {/* <Route render={() =><AddToCartContainer book = {book}/> }/> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
