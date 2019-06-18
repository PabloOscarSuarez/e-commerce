import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  componentDidMount() {
    axios.get("http://localhost:8000/").then(data => console.log(data.data));
  }

  render() {
    return <div>Prueba </div>;
  }
}
