import React, { Component } from "react";
import Register from "./Register";
import axios from "axios";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: " ",
      address: " ",
      email: " ",
      password: " "
    };
  }

  addUser = e => {
    //envio datos back !!!
    const { name, address, email, password } = this.state;

    axios
      .post("http://localhost:8000/user/create", {
        name,
        address,
        email,
        password
      })
      .then(res => {
        console.log(res.data, this.state);
      });

    e.preventDefault();
    //cancelo el evento de refrescar para poder capturar que ingresa correctamente a mi funcion
  };
  handelChange = e => {
    // capturo nombre de mi input (name , address , email , password, ) de mi formulario
    const { name, value } = e.target;
    //cambio mi estado con lo ingresado
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Register event={this.handelChange} addUser={this.addUser} />
      </div>
    );
  }
}
