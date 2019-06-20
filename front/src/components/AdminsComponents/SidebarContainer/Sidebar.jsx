import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import './style.css'

export default () => (

    <div className="">
      <section className="sidebar">
        <img src="" className="logo" />
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
