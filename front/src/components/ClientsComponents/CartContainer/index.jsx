import React from "react"
import {connect} from "react-redux"
// import {fetchBookByTitle} from "../../../redux/actions/books"
import Cart from '../CartContainer/Cart'


class CartContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
componentDidMount(){

}

handleChange(e){
  const value = e.target.value;
  this.setState({
    inputValue:value
  })
}

handleSubmit(e){
e.preventDefault()
this.props.fetchBookByTitle(this.state.inputValue)
.then(()=> this.props.history.push("/search"))


}

  render() {
    return (
     <Cart booksToCart = {this.props.booksToCart} handleChange= {this.handleChange} handleSubmit= {this.handleSubmit}/>
    );
  }
}


const mapStateToProps = function(state) {
  return {
    booksToCart:state.cart.booksToCart

  };
};

export default connect(mapStateToProps, null)(CartContainer)