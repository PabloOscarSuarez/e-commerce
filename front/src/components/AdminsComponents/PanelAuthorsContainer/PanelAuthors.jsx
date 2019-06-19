import React from 'react';
import { Link } from 'react-router-dom';

export default ({ authors }) => (

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
                                <td>{author.name}</td>
                                <td>
                                    <button type="button" className="btn  btn-sm btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>


    </div>
);
