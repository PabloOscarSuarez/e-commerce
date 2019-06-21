import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import PanelBooksContainer from '../PanelBooksContainer';
import CreateBookContainer from '../CreateBookContainer';
import PanelAuthorsContainer from '../PanelAuthorsContainer';
import CreateAuthorContainer from '../CreateAuthorContainer';
import BooksOfAuthorContainer from '../BooksOfAuthorContainer';
import PanelGenresContainer from '../PanelGenresContainer';
import CreateGenreContainer from '../CreateGenreContainer';
import BooksOfGenreContainer from '../BooksOfGenreContainer';
import PanelAdminsContainer from '../PanelAdminsContainer';
import CreateAdminContainer from '../CreateAdminContainer';
import PanelVentasContainer from '../PanelVentasContainer';
import SidebarContainer from '../SidebarContainer';


export default () => (
  <div id="main" className="container-fluid">
    <div className="row">
      <div className="col-2 p-0 bg-dark">
        <SidebarContainer />
      </div>
      <div className="col-10 p-0">
        <Switch>
          <Route exact path="/admin/books" component={PanelBooksContainer} />
          <Route exact path="/admin/books/create" component={CreateBookContainer} />
          <Route exact path="/admin/authors" component={PanelAuthorsContainer} />
          <Route exact path="/admin/authors/create" component={CreateAuthorContainer} />
          <Route exact path="/admin/authors/:author/:id" component={BooksOfAuthorContainer} />
          <Route exact path="/admin/genres" component={PanelGenresContainer} />
          <Route exact path="/admin/genres/create" component={CreateGenreContainer} />
          <Route exact path="/admin/genres/:genre" component={BooksOfGenreContainer} />
          <Route exact path="/admin/admins" component={PanelAdminsContainer} />
          <Route exact path="/admin/admins/create" component={CreateAdminContainer} />
          <Route exact path="/admin/ventas" component={PanelVentasContainer} />
          <Redirect from="/" to="/admin/books" />
        </Switch>
      </div>
    </div>
  </div>
);
