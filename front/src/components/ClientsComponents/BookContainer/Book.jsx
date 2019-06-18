import React from "react";
import { ListGroupItem, Card, ListGroup } from "react-bootstrap";

export default () => (
  <div className="container">
    <center>
      <br />
      <br />
      <Card style={{ width: "24rem" }}>
        <Card.Img
          variant="top"
          src="https://media.wired.com/photos/5be4cd03db23f3775e466767/master/pass/books-521812297.jpg"
          width="600px"
          height="300px"
        />
        <Card.Body>
          Book Name
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Autor:</ListGroupItem>
          <ListGroupItem>Stock:</ListGroupItem>
          <ListGroupItem>Genero:</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Agregar al Carrito</Card.Link>
          <br />
          <Card.Link href="#">Sacar del Carrito</Card.Link>
        </Card.Body>
      </Card>
    </center>
  </div>
);
