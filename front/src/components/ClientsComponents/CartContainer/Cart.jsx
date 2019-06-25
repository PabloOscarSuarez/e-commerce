import React from "react";
import { Route } from "react-router-dom";
import CheckoutContainer from "../CheckOutContainer";

import { Link } from "react-router-dom";

export default function Cart({
 
  handleDelete,
  booksToCart,
  sumTotal,
  handleDecrement,
  handleIncrement
}) {
  return (
    <div>
      <div className="col-sm-12">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Libro</th>
              <th>Cantidad</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Total</th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            {console.log("soy book to cart", booksToCart)}
            {booksToCart.length > 0 &&
              booksToCart.map((book, id) => {
                console.log("soy boook del cart", book)
                return (
                  <tr key={id}>
                    <td className="col-sm-8 col-md-6">
                      <div className="media">
                        <a className="thumbnail pull-left" href="#">
                          <img
                            className="media-object mr-3"
                            src={book.book.urlImage}
                            width="72px"
                            height="72px"
                          />
                        </a>
                        <div className="media-body my-auto">
                          <h4 className="media-heading">
                            <Link
                              to={`/books/${book.book.title}/${book.book.id}`}
                            >
                              {book.book.title}
                            </Link>
                          </h4>
                          <h5 className="media-heading">
                            Autor: <a href="" />
                          </h5>
                          <span>Stock: </span>
                          <span className="text-success">
                            <strong>En Stock</strong>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <input
                        type="number"
                        className="form-control"
                        value={book.cant}
                        min="1"
                      />
                      <span className="input-group-btn">
                        <button
                          type="button"
                          className="quantity-left-minus btn btn-danger btn-number"
                          data-type="minus"
                          data-field="-"
                          onClick={() => {
                            handleDecrement(book);
                          }}
                        >
                        >
                          -
                        </button>
                      </span>
                      <span className="input-group-btn">
                        <button
                          type="button"
                          className="quantity-right-plus btn btn-success btn-number"
                          data-type="plus"
                          data-field="+"
                          onClick={() => {
                            handleIncrement(book);
                          }}
                        >
                          +
                        </button>
                      </span>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>{book.book.price}</strong>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>{book.price}</strong>
                    </td>
                    <td className="col-sm-1 col-md-1">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(book);
                        }}
                      >
                        Quitar
                      </button>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td> </td>
              <td> </td>
              <td>
                <h3>Total</h3>
              </td>
              <td>
                <h3 className="text-center">
                  <strong>{sumTotal(booksToCart)}</strong>
                </h3>
              </td>
              <td />
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td>
                <a href="">
                  <button type="button" className="btn btn-info">
                    Volver
                  </button>
                </a>
              </td>
              <td>
                {/* <Route path="/checkout" render={() => <CheckoutContainer sumTotal={sumTotal}/>} /> */}
                <Link to="/checkout">
                  <button type="button" className="btn btn-success ">
                    Checkout
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
