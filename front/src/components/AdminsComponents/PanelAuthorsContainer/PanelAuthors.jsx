import React from 'react';
import { Link } from 'react-router-dom';

export default ({ authors, handleClickDelete }) => (
    <div>
        <h1 className="text-center">Autores</h1>
        <Link to="/admin/authors/create">
            <button type="button" className="btn btn-sm btn-success">Agregar nuevo autor</button>
        </Link>
        <table className="table mt-2">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Autores</th>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors && authors.map((author, id) => {
                        return (
                            <tr key={id}>
                                <td><Link className="text-decoration-none text-dark" to={`/admin/authors/${author.name}/${author.id}`}>{author.name}</Link></td>
                                <td>
                                    {
                                        author.books.length === 0 ?
                                            <button type="button" className="btn  btn-sm btn-danger" value={author.id} onClick={handleClickDelete}>Eliminar</button>
                                            :
                                            <button type="button" className="btn  btn-sm btn-danger" disabled>Eliminar</button>
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>


    </div>
);
