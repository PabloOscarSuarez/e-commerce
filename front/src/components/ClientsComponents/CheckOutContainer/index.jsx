import React from "react";
import {connect} from "react-redux"
import CheckOut from "./CheckOut";
import {createNewTransaction} from '../../../redux/actions/cart'

class CheckoutContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      nombre: "",
      email:"",
      address:"",
      password:111
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
  handleChange(e){

    this.setState({
      [e.target.name]:e.target.value 
  });

  }
  handleSubmit(e){
    e.preventDefault()
    this.props.createNewTransaction(this.state, this.props.booksToCart)
        .then(() =>  this.props.history.push("/home"))
        .catch(() => this.setState({ error: true }))

  }
  render() {
    return (
      <CheckOut/>
    );
  }
}
const mapStateToProps = function (state) {

    return {
      booksToCart:state.cart.booksToCart
    }
}
const mapDispatchToProps = function (dispatch)
{      
       return {
        createNewTransaction:(data)=> dispatch(createNewTransaction(data))
       } 
    }

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)

