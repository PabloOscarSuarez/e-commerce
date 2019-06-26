import React from 'react';

export default ({ handleClickDelete, bookId }) => (
    <button className="btn btn-sm btn-danger" value={bookId} onClick={handleClickDelete}>Eliminar</button> 
);
