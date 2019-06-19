import React from 'react';
// import { Route, Redirect, Switch, Link } from 'react-router-dom';

export default ({
    handleChangeTitle,
    handleChangeAuthor,
    handleChangeGenre,
    handleChangePrice,
    handleChangeStock,
    handleChangeImage,
    handleChangeDescription,
    handleSubmit,
    genres,
    authors
}) => (
        <div>
            {console.log('SOY GENRES', genres)}
            {console.log('SOY AUTHORS', authors)}
            <h1 className="text-center">Estoy en create book</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form action="/tasks/create" method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input type="text" name="title" placeholder="Ej: Desing Patterns" className="form-control" autoFocus onChange={handleChangeTitle} />
                                </div>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="col">
                                            <label>Autor</label>
                                            <select className="form-control" placeholder="Autor" name="author" onChange={handleChangeAuthor}>
                                                <option value="0">Seleccione un autor..</option>
                                                {
                                                    authors.map(author => {
                                                        return (
                                                            <option key={author.id} value={author.id}>{author.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label>Género</label>
                                            <select className="form-control" placeholder="Ej: Programación" name="category" onChange={handleChangeGenre}>
                                                <option value="0">Seleccione un genero..</option>
                                                {
                                                    genres.map(genre => {
                                                        return (
                                                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="col">
                                            <label>Precio</label>
                                            <input type="number" className="form-control" placeholder="$" name="price" onChange={handleChangePrice} />
                                        </div>
                                        <div className="col">
                                            <label>Stock</label>
                                            <input type="number" className="form-control" placeholder="Cantidad" name="stock" onChange={handleChangeStock} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Url de la imagen</label>
                                    <input type="text" name="urlImage" placeholder="Pega la url de la imagen" className="form-control" onChange={handleChangeImage} />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="description" rows="4" placeholder="Escribi el description" onChange={handleChangeDescription}></textarea>
                                </div>
                                <button type="submit" className="btn btn-success btn-block">
                                    Guardar
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
