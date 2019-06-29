import React from 'react';
import { Link } from 'react-router-dom';
import Books from '../../ClientsComponents/BooksContainer/Books'

export default ({ selectedSale, handleClick }) => (

    <div className="col mt-5">
        <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
                <div className="card">
                    <div className="card-body shadow-lg">
                        {/* <h3 className="card-title"><Link to={`/books/${selectedBook.title}/${selectedBook.id}`} className="card-link text-dark" >{selectedBook.title}</Link></h3>
                        <p className="card-text text-secondary"><b>Autor: &nbsp;</b>{selectedBook.author && selectedBook.author.name}</p>

                        <p className="card-text text-secondary"><b>Precio: &nbsp;</b> {selectedBook.price}</p>
                        <p className="card-text text-secondary"><b>Stock: &nbsp;</b> {selectedBook.stock}</p>
                        <p className="card-text text-secondary"><b>Descripcion: &nbsp;</b> {selectedBook.description}</p>
                        <div className="row">
                            <div className="col-8">
                            </div>
                            <div className="ml-auto">
                                <Link className="btn btn-sm btn-info" to={`/admin/books/edit/${selectedBook.id}`}>Editar</Link>
                            </div>
                        </div> */}
                        <h3 className="card-title">Compra realizada por {selectedSale.user && selectedSale.user.name}</h3>
                        {/* <p className="card-text text-secondary"><b>Email: &nbsp;</b>{selectedSale.user.email && selectedSale.user.email}</p> */}
                        {
                            selectedSale.user ?
                                (
                                    selectedSale.user.email ?
                                        <p className="card-text text-secondary"><b>Email : &nbsp;</b>{selectedSale.user && selectedSale.user.email}</p>
                                        :
                                        <p className="card-text text-secondary"><b>Email : &nbsp;</b>{selectedSale.user && selectedSale.user.anonimousEmail}</p>
                                )
                                :
                                null
                        }
                        <p className="card-text text-secondary"><b>Direccion de entraga : &nbsp;</b>{selectedSale.user && selectedSale.user.address}</p>
                        <p className="card-text text-secondary"><b>Fecha de compra : &nbsp;</b>{selectedSale.createdAt && selectedSale.createdAt.split('T')[0]}</p>
                        <p className="card-text text-secondary"><b>Estado de compra: &nbsp;</b>{selectedSale.status && selectedSale.status.name}</p>
                        <h4 className="card-text text-secondary"><b>Total : &nbsp;</b>{selectedSale.total}</h4>
                        <div className="text-right">
                            <Link className="btn btn-sm btn-info" to={`/admin/ventas/edit_status/${selectedSale.id}`}>Cambiar Estado</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 className="text-center mt-5">Libros de esta Compra</h3>
        <Books books={selectedSale.books} handleClick={handleClick} />
    </div>
);
