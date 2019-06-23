import React from 'react';
import { Link } from 'react-router-dom';

export default ({
    // selectedBook
    handleChangeTitle,
    handleChangeAuthor,
    handleChangeGenre,
    handleChangePrice,
    handleChangeStock,
    handleChangeImage,
    handleChangeDescription,
    handleSubmit,
    genres,
    authors,
    inputTitle,
    inputAuthor,
    inputGenre,
    inputPrice,
    inputStock,
    inputUrlImage,
    inputDescription,
}) => (
        <div>
            {/* {console.log('SOY inputGenre', inputGenre)} */}
            {/* {console.log('SOY AUTHORS', authors)} */}
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input type="text" name="title" placeholder="Ej: Desing Patterns" value={inputTitle} className="form-control" autoFocus onChange={handleChangeTitle} />
                                </div>
                                <div className="form-group">
                                    <label>Autor</label>
                                    <select className="form-control" placeholder="Autor" name="author" onChange={handleChangeAuthor}>
                                        <option value="0">Seleccione un autor..</option>
                                        {
                                            authors.map(author => {
                                                return (
                                                    <option 
                                                    key={author.id} 
                                                    value={author.id}
                                                    selected={author.id == inputAuthor}
                                                    >
                                                    {author.name}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Género</label>
                                    <div className="form-check form-check-inline d-flex flex-wrap justify-content-start">
                                        {
                                            genres.map(genre => {
                                                return (
                                                    <div key={genre.id}>
                                                        <label className="form-check-label mr-1" >
                                                            {genre.name}
                                                        </label>
                                                        <input 
                                                        className="form-check-input" 
                                                        name="genres" 
                                                        type="checkbox" 
                                                        value={genre.id} 
                                                        onChange={handleChangeGenre} 
                                                        checked={inputGenre.includes(genre.id.toString())}
                                                        
                                                            // inputGenre.map(genre=>{
                                                            //     return(
                                                                    
                                                            //     )
                                                            // })
                                                        
                                                        // selected={genre.id == inputAuthor}
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="col">
                                            <label>Precio</label>
                                            <input type="number" className="form-control" value={inputPrice} placeholder="$" name="price" onChange={handleChangePrice} min="0"/>
                                        </div>
                                        <div className="col">
                                            <label>Stock</label>
                                            <input type="number" className="form-control" value={inputStock} placeholder="Cantidad" name="stock" onChange={handleChangeStock} min="0" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Url de la imagen</label>
                                    <input type="text" name="urlImage" value={inputUrlImage} placeholder="Pega la url de la imagen" className="form-control" onChange={handleChangeImage} />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" value={inputDescription} name="description" rows="4" placeholder="Escribi el description" onChange={handleChangeDescription}></textarea>
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
