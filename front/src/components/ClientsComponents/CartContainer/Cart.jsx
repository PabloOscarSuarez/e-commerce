import React from "react";

// import { Link } from "react-router-dom";

export default function Cart({ booksToCart }) {
  return (

    <div>
      {console.log("soy books to cart del cart", booksToCart)}
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
                {booksToCart &&
            booksToCart.map(book => {
              return (
                  <tr>
                    <td className="col-sm-8 col-md-6">
                      <div className="media">
                        <a className="thumbnail pull-left" href="#">
                          <img
                            className="media-object mr-3"
                            src=""
                            width="72px"
                            height="72px"
                          />
                        </a>
                        <div className="media-body my-auto">
                          <h4 className="media-heading">
                            <a href="">{book.title}</a>
                          </h4>
                          <h5 className="media-heading">
                            Autor: <a href=""></a>
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
                        value="3"
                        min="1"
                      />
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>$300</strong>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>$900</strong>
                    </td>
                    <td className="col-sm-1 col-md-1">
                      <button type="button" className="btn btn-danger">
                        Quitar
                      </button>
                    </td>
                  </tr>);
            })}
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td>
                      <h3>Total</h3>
                    </td>
                    <td>
                      <h3 className="text-center">
                        <strong>$1000</strong>
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
                      <a href="">
                        <button type="button" className="btn btn-success ">
                          Checkout
                        </button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              
        </table>
      </div>
    </div>
  );
}
