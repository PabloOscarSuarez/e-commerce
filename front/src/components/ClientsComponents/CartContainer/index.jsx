import React from "react";
import { connect } from "react-redux";
import {
  incrementBooksToCart,
  decrementBooksToCart,
  deleteBookFromCart,
  userLocalCart
} from "../../../redux/actions/cart";
import Cart from "../CartContainer/Cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  componentDidMount() {
    if (this.props.booksToCart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(this.props.booksToCart));
    }
     this.props.userLocalCart();
     

  }
 
  handleIncrement(book) {
    this.props.incrementBooksToCart(book);
  }
  handleDecrement(book) {
    this.props.decrementBooksToCart(book);
  }
  handleDelete(book) {
    this.props.deleteBookFromCart(book);
  }

  sumTotal(array) {
    //suma el total de lo ingresado al carrito
    return array
      .map(book => book.price) //mapeo
      .reduce((prev, cur) => prev + cur, 0); //sumo
  }

  render() {
    return (
      <div>
        <Cart
          booksToCart={this.props.booksToCart}
          handleDelete={this.handleDelete}
          sumTotal={this.sumTotal}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user.user,
    booksToCart: state.cart.booksToCart
  };
};
const mapDispatchToProps = dispatch => ({
  incrementBooksToCart: updatedBooksToCart =>
    dispatch(incrementBooksToCart(updatedBooksToCart)),
  decrementBooksToCart: updatedBooksToCart =>
    dispatch(decrementBooksToCart(updatedBooksToCart)),
  deleteBookFromCart: book => dispatch(deleteBookFromCart(book)),
  userLocalCart: () => dispatch(userLocalCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
