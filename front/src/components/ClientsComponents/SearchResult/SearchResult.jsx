import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

function Result({bookByTitle}) {
  return (
<div> 
            <div className="row mt-5">
                { 
                    // console.log(books.Search, ' books.Search')
                    bookByTitle && bookByTitle.map((book, id) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-3 mb-5" key={id}>
                                <div className="card zoom shadow">
                                    <img className="card-img-top" src={book.urlImage} alt="" height="350px" />
                                    <div className="card-body">
                                        <p className="card-title">{book.title}</p>
                                        {/* <p className="card-text">Año: {book.Year}</p> */}
                                        <p className="card-text">Categoría: {book.description}</p>
                                        {/* <a href="#" className="btn btn-secondary">Ver detalle</a> */}
                                        <div className="text-center">
                                            <Link className="btn btn-secondary" to={`/books/${book.id}`}>Ver Detalle</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>


    // <div className='row mt-5'>
    //   <div className="col-md-4">
    //   { bookByTitle.title && bookByTitle.map(book => ( 
    //       <div className="card mb-4 shadow-sm">
    
    //     <svg className="bd-placeholder-img card-img-top" width="100%" height="225"  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
    //         <div className="card-body">
    //           <p className="card-text">
    //           {book.title},
    //           {book.description},

    //           </p>
    //           <div className="d-flex justify-content-between align-items-center">
    //             <div className="btn-group">
    //               <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
    //               <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
    //             </div>
    //             <small className="text-muted">9 mins</small>
    //           </div>
    //         </div>
    //       </div>
    //        ))} 
    //     </div>
     
  );
};

const mapStateToProps = function(state){

  return{

    bookByTitle:state.books.bookByTitle
  }
}

export default connect (mapStateToProps, null)(Result)