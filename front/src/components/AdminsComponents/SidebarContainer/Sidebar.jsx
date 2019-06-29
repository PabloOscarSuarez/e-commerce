import React from 'react';
import { Link } from 'react-router-dom';

export default () => (

  <div className="background-dark">
    <section className="sidebar">
      {/* <img src="" className="logo" /> */}
      <div className="mb-5"></div>
      <section>
        <h5 className="menu-item active">
          <Link to="/admin/books">Libros</Link>
        </h5>
      </section>
      <section>
        <h5 className="menu-item active">
          <Link to="/admin/authors">Autores</Link>
        </h5>
      </section>
      <section>
        <h5 className="menu-item active">
          <Link to="/admin/genres">Generos</Link>
        </h5>
      </section>
      <section>
        <h5 className="menu-item active">
          <Link to="/admin/admins">Administradores</Link>
        </h5>
      </section>
      <section>
        <h5 className="menu-item active">
          <Link to="/admin/ventas">Ventas</Link>
        </h5>
      </section>
    </section>
  </div>
);
