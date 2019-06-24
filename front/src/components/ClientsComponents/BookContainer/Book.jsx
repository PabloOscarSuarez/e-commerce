import React from "react";
import { Link, Route } from 'react-router-dom'
import NewCommentContainer from '../NewCommentContainer'
import CommentsContainer from "../CommentsContainer";

export default ({ selectedBook }) => (

  <div>
    {/* <h1 className="text-center">Movie</h1> */}
    <div className="col mt-5">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <div className="card zoom">
            <Link to={`/books/${selectedBook.title}/${selectedBook.id}`}>
              <img className="card-img-top" src={selectedBook.urlImage} alt="" width="" />
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-10-mb-5">
          <div className="card">
            <div className="card-body shadow-lg">
              <h3 className="card-title"><Link to={`/books/${selectedBook.title}/${selectedBook.id}`} className="card-link text-dark" >{selectedBook.title}</Link></h3>
              <p className="card-text text-secondary"><b>Autor: &nbsp;</b>{selectedBook.author && selectedBook.author.name}</p>
              <p className="card-text text-secondary">
                <b>Genero: &nbsp;</b>
                {
                  selectedBook.genres ?
                    selectedBook.genres.map(genre=>{
                      return(
                        <span key={genre.id}>{genre.name} &nbsp;</span>
                      )
                    })
                    :
                    ''
                }
              </p>
              <p className="card-text text-secondary"><b>Precio: &nbsp;</b> {selectedBook.price}</p>
              <p className="card-text text-secondary"><b>Stock: &nbsp;</b> {selectedBook.stock}</p>
              <p className="card-text text-secondary"><b>Descripcion: &nbsp;</b> {selectedBook.description}</p>
              <div className="row">
                <div className="col-8">
                  {/* <p className="card-text text-info"><b>Rating:</b> {selectedBook.imdbRating}</p> */}
                </div>
                <div className="col-4">
                  <button className="btn btn-success">Agregar al Carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
          <Route component={NewCommentContainer} />
          <Route component={CommentsContainer} />
  </div>

)
